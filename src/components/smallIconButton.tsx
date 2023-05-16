import React, { FunctionComponent, useCallback, useState } from "react";
import { StyleSheet, TouchableHighlight } from "react-native";
import { colors } from "../styles/themes";
import { SvgProps } from "react-native-svg";

interface SmallIconButtonProps {
    Content: FunctionComponent<SvgProps>,
}

const SmallIconButton: React.FC<SmallIconButtonProps> = ({ Content }) => {

    const [fillColor, setFillColor] = useState<string>(colors.white);

    const toggleColor = useCallback((color: string) => setFillColor(color), [fillColor]);

    return (
        <TouchableHighlight
            style={styles.button}
            onPressIn={() => toggleColor(colors.orange)}
            onPressOut={() => toggleColor(colors.white)}
            onPress={() => console.log("hello world")}
        >
            <Content fill={fillColor} />
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 100
    }
});

export default SmallIconButton;
