import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";

interface PrimaryButtonProps {
	children: string;
	onPressHandler: () => void;
}

function PrimaryButton({ children, onPressHandler }: PrimaryButtonProps) {
	return (
		<View style={style.buttonOuterContainer}>
			<Pressable
				style={({ pressed }) => pressed ?
					[style.pressed, style.buttonInnerContainer] :
					style.buttonInnerContainer}
				onPress={onPressHandler}
				android_ripple={{ color: Colors.primary600 }}
			>
				<Text style={style.buttonText}>{children}</Text>
			</Pressable>
		</View>
	);
}

const style = StyleSheet.create({
	buttonOuterContainer: {
		borderRadius: 28,
		overflow: 'hidden',
		margin: 4,
	},
	buttonInnerContainer: {
		backgroundColor: Colors.primary500,
		paddingVertical: 8,
		paddingHorizontal: 16,
		elevation: 4,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 6,
	},
	buttonText: {
		color: 'white',
		textAlign: 'center',
	},
	pressed: {
		opacity: 0.75,
		backgroundColor: '#640233',
	}
})

export default PrimaryButton;