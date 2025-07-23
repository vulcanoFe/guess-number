import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";

import { useState } from "react";
import { GameResult } from "./components/game/GameHistory";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

// Nasconde l'header della schermata
export const options = {
	headerShown: false,
};

export default function Index() {

	const [userNumber, setUserNumber] = useState(0);
	const [gameIsOver, setGameIsOver] = useState(true);
	const [gameHistory, setGameHistory] = useState<GameResult[]>([]);

	function pickedNumberHandler(pickedNumber: number) {
		setUserNumber(pickedNumber);
		setGameIsOver(false);
	}

	function gameOverHandler(rounds: number) {
		const newGameResult: GameResult = {
			guessedNumber: userNumber,
			rounds: rounds
		};
		setGameHistory((prevHistory) => [...prevHistory, newGameResult]);
		setGameIsOver(true);
	}

	function startNewGame() {
		setUserNumber(0);
		setGameIsOver(false);
	}

	let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

	if (userNumber && userNumber > 0) {
		screen = <GameScreen numberToGuess={userNumber} onGameOver={gameOverHandler} />;
	}

	if (gameIsOver && userNumber) {
		screen = <GameOverScreen onStartNewGame={startNewGame} gameHistory={gameHistory} />
	}

	return (
		<LinearGradient colors={[Colors.primary700, Colors.accent500]} style={style.rootScreen}>
			<ImageBackground
				source={require('../assets/images/background.png')}
				resizeMode="cover"
				style={style.rootScreen}
				imageStyle={style.backgroundImage}
			>
				<SafeAreaView style={style.rootScreen}>
					{screen}
				</SafeAreaView>
			</ImageBackground>
		</LinearGradient>
	);
}

const style = StyleSheet.create({
	rootScreen: {
		flex: 1
	},
	backgroundImage: {
		opacity: 0.15
	}
})
