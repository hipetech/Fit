import React from "react";
import { FormProvider, type SubmitHandler, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-ui-lib";

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

type AddSetFormLocales = {
  weight: string;
  reps: string;
  addSet: string;
  removeSet: string;
};

type FormValues = {
  weight: string;
  reps: string;
};

interface SetFormProps {
  exerciseItem?: ExerciseItem;
  set?: Set;
  closeModal?: () => void;
}

export const SetForm: React.FC<SetFormProps> = ({ exerciseItem, set, closeModal }) => {
  const { styles, colors } = useStyles(style);
  const realm = useRealm();

  const locales = useLocales<AddSetFormLocales>("workout.addSetModal.form");
  const methods = useForm<FormValues>({
    defaultValues: {
      weight: set?.value.toString(),
      reps: set?.reps.toString(),
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    realm.write(() => {
      if (exerciseItem) {
        exerciseItem.sets.push(createSet(Number(data.weight), "kg", Number(data.reps)) as Set);
      } else if (set) {
        set.value = Number(data.weight);
        set.reps = Number(data.reps);
      }
    });
  };

  const removeSet = () => {
    realm.write(() => {
      realm.delete(set);
    });

    closeModal && closeModal();
  };

  return (
    <FormProvider {...methods}>
      <View style={styles.container}>
        <View style={styles.inputRow}>
          <TextInput
            name="weight"
            placeholder={locales.weight}
            containerStyle={styles.weightInput}
          />
          <TouchableOpacity style={styles.unitsButton}>
            <Text>KG</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          name="reps"
          placeholder={locales.reps}
          containerStyle={styles.repsInput}
        />
        <Button
          label={locales.addSet}
          onPress={methods.handleSubmit(onSubmit)}
          style={styles.submitButton}
        />
        {set && (
          <Button
            color={colors.red}
            label={locales.removeSet}
            onPress={removeSet}
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
