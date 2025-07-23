import { Alert, StyleSheet, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import { generateRandomBetween } from "../utilities/gameActions";

interface GameScreenProps {
	numberToGuess: number;
	onGameOver: (rounds: number) => void;
}

function GameScreen({ numberToGuess, onGameOver }: GameScreenProps) {

	const [minBoundary, setMinBoundary] = useState(1);
	const [maxBoundary, setMaxBoundary] = useState(100);
	const [rounds, setRounds] = useState(1);

	const initialGuess = generateRandomBetween(1, 100, numberToGuess);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);
	useEffect(() => {
		if (currentGuess === numberToGuess) {
			onGameOver(rounds);
		}
	}, [currentGuess, numberToGuess, onGameOver, rounds]);

	function nextGuessHandler(direction: 'higher' | 'lower') {
		let newMin = minBoundary;
		let newMax = maxBoundary;

		if (
			(direction === 'higher' && currentGuess > numberToGuess) ||
			(direction === 'lower' && currentGuess < numberToGuess)
		) {
			Alert.alert("Invalid direction", "Please check your input and try again.");
			return;
		}

		if (direction === 'higher') {
			newMin = currentGuess + 1;
			setMinBoundary(newMin);
		} else {
			newMax = currentGuess - 1;
			setMaxBoundary(newMax);
		}
		console.log(`New boundaries: ${newMin} - ${newMax}`);
		let nextGuess: number = generateRandomBetween(newMin, newMax, currentGuess);
		setCurrentGuess(nextGuess);
		setRounds((prevRounds) => prevRounds + 1);
	}

	const handleLower = () => nextGuessHandler('lower');
	const handleHigher = () => nextGuessHandler('higher');

	return (
		<View style={style.gameScreen}>
			<Title>Opponent&apos;s Guess</Title>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card>
				<InstructionText style={style.InstructionText}>Higher or Lower?</InstructionText>
				<View style={style.buttonsContainer}>
					<View style={style.buttonContainer}>
						<PrimaryButton onPressHandler={handleLower}>
							<Ionicons name="remove-circle-outline" size={24} color="white" />
						</PrimaryButton>
					</View>
					<View style={style.buttonContainer}>
						<PrimaryButton onPressHandler={handleHigher}>
							<Ionicons name="add-circle-outline" size={24} color="white" />
						</PrimaryButton>
					</View>
				</View>
			</Card>
			<View>
				<Text>{rounds}</Text>
			</View>
		</View>
	)
}

const style = StyleSheet.create({
	gameScreen: {
		flex: 1,
		padding: 24
	},
	InstructionText: {
		marginBottom: 12,
	},
	buttonsContainer: {
		flexDirection: 'row',
		marginTop: 16,
	},
	buttonContainer: {
		flex: 1
	}
});

export default GameScreen;