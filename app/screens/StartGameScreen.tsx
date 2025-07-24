import { useState } from "react";
import { Alert, Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, TextInput, useWindowDimensions, View } from "react-native";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

interface StartGameScreenProps {
	onPickNumber: (pickedNumber: number) => void;
}

function StartGameScreen({ onPickNumber }: StartGameScreenProps) {

	const { height } = useWindowDimensions();

	const [enteredNumber, setEnteredNumber] = useState('');

	function numberInputHandler(enteredNumber: string) {
		setEnteredNumber(enteredNumber);
	}

	function confirmInputHandler() {
		Keyboard.dismiss(); // Dismiss keyboard before handling confirm
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

	const marginTop = height < 400 ? 30 : 100;

	return (
		<ScrollView>
			<KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
				<View style={[styles.rootContainer, { marginTop }]}>
					<Title>Guess My Number</Title>
					<Card>
						<InstructionText>Enter a number between 1 and 99</InstructionText>
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
					</Card>
				</View>
			</KeyboardAvoidingView>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		alignItems: 'center',
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