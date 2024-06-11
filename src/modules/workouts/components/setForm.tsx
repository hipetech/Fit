import React, { useRef } from "react";
import { FormProvider, type SubmitHandler, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { type TextFieldRef, TouchableOpacity } from "react-native-ui-lib";

import { useRealm } from "../../../db";
import { createSet } from "../../../db/helpers/createSet.ts";
import type { ExerciseItem } from "../../../db/schemas/exerciseItem.ts";
import type { Set } from "../../../db/schemas/set.ts";
import useLocales from "../../../hooks/useLocales.ts";
import useStyles from "../../../hooks/useStyles.ts";
import type { Colors } from "../../../types/Colors.ts";
import { Button } from "../../../ui/button.tsx";
import { Text } from "../../../ui/text.tsx";
import { TextInput } from "../../../ui/textInput.tsx";
import { ShowToast } from "../../../utils/showToast.ts";

type AddSetFormLocales = {
  weight: string;
  reps: string;
  addSet: string;
  addEditedSet: string;
  removeSet: string;
};

type FormValues = {
  weight: string;
  reps: string;
};

interface SetFormProps {
  closeModal: () => void;
  exerciseItem?: ExerciseItem;
  set?: Set;
}

export const SetForm: React.FC<SetFormProps> = ({ exerciseItem, set, closeModal }) => {
  const { styles, colors } = useStyles(style);
  const realm = useRealm();

  const locales = useLocales<AddSetFormLocales>("workout.addSetModal.form");

  const prevSet = exerciseItem?.sets.at(-1);
  const methods = useForm<FormValues>({
    defaultValues: {
      weight: prevSet?.value.toString() || set?.value.toString(),
      reps: prevSet?.reps.toString() || set?.reps.toString(),
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    realm.write(() => {
      if (exerciseItem) {
        exerciseItem.sets.push(createSet(Number(data.weight), "kg", Number(data.reps)) as Set);
        ShowToast.addSet();
      } else if (set) {
        set.value = Number(data.weight);
        set.reps = Number(data.reps);
      }
      closeModal && closeModal();
    });
  };

  const removeSet = () => {
    realm.write(() => {
      realm.delete(set);
    });

    closeModal && closeModal();
  };

  const ref = useRef<TextFieldRef | null>(null);

  return (
    <FormProvider {...methods}>
      <View style={styles.container}>
        <View style={styles.inputRow}>
          <TextInput
            fontSize={16}
            name="weight"
            placeholder={locales.weight}
            containerStyle={styles.weightInput}
            autoFocus={true}
            keyboardType={"number-pad"}
            onEndEditing={() => ref.current?.focus()}
          />
          <TouchableOpacity style={styles.unitsButton}>
            <Text>KG</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          ref={ref}
          fontSize={16}
          name="reps"
          placeholder={locales.reps}
          containerStyle={styles.repsInput}
          keyboardType={"number-pad"}
        />
        <Button
          color={colors.green}
          label={exerciseItem ? locales.addSet : locales.addEditedSet}
          onPress={methods.handleSubmit(onSubmit)}
          style={styles.submitButton}
        />
        {set && (
          <Button
            color={colors.red}
            label={locales.removeSet}
            onPress={() => {
              removeSet();
              ShowToast.deleteSet();
            }}
            style={styles.removeButton}
          />
        )}
      </View>
    </FormProvider>
  );
};

const style = (colors: Colors) =>
  StyleSheet.create({
    container: {
      position: "relative",
      width: "100%",
    },
    submitButton: {
      width: "100%",
      backgroundColor: colors.background,
      marginTop: 30,
    },
    removeButton: {
      width: "100%",
      marginTop: 10,
    },
    inputRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },
    unitsButton: {
      marginTop: 15,
    },
    weightInput: {
      width: "92%",
    },
    repsInput: {
      marginRight: 28,
    },
  });
