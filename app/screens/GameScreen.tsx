import { Alert, StyleSheet, Text, View } from "react-native";

import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
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

	const initialGuess = generateRandomBetween(minBoundary, maxBoundary);
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
		let nextGuess: number = generateRandomBetween(newMin, newMax);
		setCurrentGuess(nextGuess);
		setRounds((prevRounds) => prevRounds + 1);
	}

	const handleLower = () => nextGuessHandler('lower');
	const handleHigher = () => nextGuessHandler('higher');

	return (
		<View style={style.gameScreen}>
			<Title>Opponent&apos;s Guess</Title>
			<NumberContainer>{currentGuess}</NumberContainer>
			<View>
				<Text>Higher or Lower?</Text>
				<View>
					<PrimaryButton onPressHandler={handleLower}>-</PrimaryButton>
					<PrimaryButton onPressHandler={handleHigher}>+</PrimaryButton>
				</View>
			</View>
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
	}
});

export default GameScreen;