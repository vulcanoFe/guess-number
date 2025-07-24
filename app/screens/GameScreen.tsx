import { Alert, FlatList, StyleSheet, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import GuessLogItem from "../components/game/GuessLogItem";
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

// Outside the component to maintain state across renders
let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ numberToGuess, onGameOver }: GameScreenProps) {

	const initialGuess = generateRandomBetween(1, 100, numberToGuess);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);
	const [rounds, setRounds] = useState(1);
	const [guessAttempts, setGuessAttempts] = useState([initialGuess]);

	// re-executed when currentGuess or numberToGuess changes
	useEffect(() => {
		if (currentGuess === numberToGuess) {
			onGameOver(rounds);
		}
	}, [currentGuess, numberToGuess, onGameOver, rounds]);

	// re-executed when the component mounts, because of the empty dependency array
	// This sets the initial boundaries for the game
	useEffect(() => {
		minBoundary = 1;
		maxBoundary = 100;
	}, []);

	function nextGuessHandler(direction: 'higher' | 'lower') {
		if (
			(direction === 'higher' && currentGuess > numberToGuess) ||
			(direction === 'lower' && currentGuess < numberToGuess)
		) {
			Alert.alert("Invalid direction", "Please check your input and try again.");
			return;
		}

		if (direction === 'lower') {
			maxBoundary = currentGuess;
		} else {
			minBoundary = currentGuess + 1;
		}
		const nextGuess: number = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
		setCurrentGuess(nextGuess);
		setRounds((prevRounds) => prevRounds + 1);
		setGuessAttempts((prevAttempts) => [nextGuess, ...prevAttempts]);
	}

	const handleLower = () => nextGuessHandler('lower');
	const handleHigher = () => nextGuessHandler('higher');

	return (
		<View style={style.gameScreen}>
			<Title>Opponent&apos;s Guess</Title>
			<View style={style.roundsContainer}>
				<InstructionText style={style.roundsText}>
					{rounds === 1 ? 'Attempt: ' : 'Attempts: '}
					{rounds}
				</InstructionText>
			</View>
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
			<View style={style.logContainer}>
				<FlatList data={guessAttempts} renderItem={({ item, index }) => (
					<GuessLogItem guessAttempt={item} attemptsNumber={index + 1} />
				)} />
			</View>
		</View>
	)
}

const style = StyleSheet.create({
	gameScreen: {
		flex: 1,
		padding: 24,
		alignItems: 'center',
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
	},
	roundsContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 26,
	},
	roundsText: {
		fontSize: 24,
		fontFamily: 'open-sans-bold',
		color: '#fff',
		textAlign: 'center',
	},
	logContainer: {
		flex: 1,
		marginTop: 16,
		paddingHorizontal: 26,
		alignItems: 'center',
	},
});

export default GameScreen;