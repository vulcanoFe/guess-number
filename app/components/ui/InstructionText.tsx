import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";
import Colors from "../../constants/colors";

interface InstructionTextProps {
	children?: React.ReactNode;
	style?: StyleProp<TextStyle>;
}

function InstructionText({ children, style }: InstructionTextProps) {

	return (
		<Text style={[styles.instructionText, style]}>{children}</Text>
	);

}

const styles = StyleSheet.create({
	instructionText: {
		fontFamily: 'open-sans',
		color: Colors.accent500,
		fontSize: 16,
		marginVertical: 8
	}
});

export default InstructionText;