import { StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { GameResult } from "../models/GameResult";

interface GameOverScreenProps {
	onStartNewGame: () => void;
	gameHistory?: GameResult[]
}

function GameOverScreen({ onStartNewGame, gameHistory }: GameOverScreenProps) {
	return (
		<View style={style.gameScreen}>
			<Text>Game is Over!</Text>
			<View>
				<PrimaryButton onPressHandler={onStartNewGame}>Start New Game</PrimaryButton>
			</View>
			<View>
				{gameHistory && gameHistory.length > 0 && (
					<Text style={style.historyTitle}>Game History:</Text>
				)}
				{gameHistory?.map((result, index) => (
					<Text key={index}>
						Guess: {result.guessedNumber}, Rounds: {result.rounds}
					</Text>
				))}
			</View>
		</View>
	)
}

const style = StyleSheet.create({
	gameScreen: {
		flex: 1,
		padding: 24
	},
	historyTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 12,
		color: '#fff'
	}
});

export default GameOverScreen;