import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";

interface StartGameScreenProps {
	onPickNumber: (pickedNumber: number) => void;
}

function StartGameScreen({ onPickNumber }: StartGameScreenProps) {

	const [enteredNumber, setEnteredNumber] = useState('');

	function numberInputHandler(enteredNumber: string) {
		setEnteredNumber(enteredNumber);
	}

	function confirmInputHandler() {
		const chosenNumber = parseInt(enteredNumber);
		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert(
				'Invalid number!',
				'Please enter a valid number between 1 and 99.',
				[{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
			);
			return;
		}
		onPickNumber(chosenNumber);
	}

	function resetInputHandler() {
		setEnteredNumber('');
	}

	return (
		<View style={styles.inputContainer}>
			<Text style={styles.numberInputLabel}>Enter a number between 1 and 99</Text>
			<TextInput
				style={styles.numberInput}
				maxLength={2}
				keyboardType="number-pad"
				value={enteredNumber}
				onChangeText={numberInputHandler}
			></TextInput>
			<View style={styles.buttonsContainer}>
				<View style={styles.buttonContainer}>
					<PrimaryButton onPressHandler={resetInputHandler}>Reset</PrimaryButton>
				</View>
				<View style={styles.buttonContainer}>
					<PrimaryButton onPressHandler={confirmInputHandler}>Confirm</PrimaryButton>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 100,
		marginHorizontal: 24,
		borderRadius: 8,
		padding: 16,
		backgroundColor: Colors.primary800,
		elevation: 4,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 6,
	},
	numberInputLabel: {
		color: Colors.accent500,
		fontSize: 16,
		fontWeight: 'bold',
		marginVertical: 8
	},
	numberInput: {
		height: 50,
		width: 80,
		fontSize: 32,
		borderBottomColor: Colors.accent500,
		borderBottomWidth: 2,
		borderRadius: 6,
		color: Colors.accent500,
		marginVertical: 8,
		fontWeight: 'bold',
		textAlign: 'center',
		backgroundColor: Colors.primary700
	},
	buttonsContainer: {
		flexDirection: 'row',
		marginTop: 16,
	},
	buttonContainer: {
		flex: 1
	}
});

export default StartGameScreen; 