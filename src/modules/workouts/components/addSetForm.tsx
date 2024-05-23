import React from "react";
import { FormProvider, type SubmitHandler, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-ui-lib";

import useStyles from "../../../hooks/useStyles.ts";
import type { Colors } from "../../../types/Colors.ts";
import { Button } from "../../../ui/button.tsx";
import { Text } from "../../../ui/text.tsx";
import { TextInput } from "../../../ui/textInput.tsx";

export type FormValues = {
  weight: number;
  reps: number;
};

export const AddSetForm = () => {
  const { styles } = useStyles(style);

  const methods = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <View style={styles.container}>
        <View style={styles.inputRow}>
          <TextInput
            name="weight"
            placeholder={"Weight"}
            containerStyle={styles.weightInput}
          />
          <TouchableOpacity style={styles.unitsButton}>
            <Text>KG</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          name="reps"
          placeholder={"Reps"}
          containerStyle={styles.repsInput}
        />
        <Button
          disabled={true}
          label={"Add set"}
          onPress={methods.handleSubmit(onSubmit)}
          style={styles.button}
        />
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
    button: {
      width: "100%",
      backgroundColor: colors.background,
      marginTop: 30,
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
