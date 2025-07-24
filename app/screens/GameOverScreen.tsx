import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import GameHistory, { GameResult } from "../components/game/GameHistory";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

interface GameOverScreenProps {
	onStartNewGame: () => void;
	gameHistory?: GameResult[]
}

function GameOverScreen({ onStartNewGame, gameHistory }: GameOverScreenProps) {
	return (
		<View style={style.gameScreen}>
			<Title>End of the game!</Title>
			<View style={style.resultContainer}>
				{
					gameHistory && gameHistory.length > 0 &&
					(<NumberContainer>{gameHistory[gameHistory.length - 1]?.guessedNumber}</NumberContainer>)
				}
				<View style={style.buttonContainer}>
					<PrimaryButton onPressHandler={onStartNewGame}>
						<Ionicons name="refresh" size={24} color="white" />
					</PrimaryButton>
				</View>
			</View>
			<GameHistory gameHistory={gameHistory} />
		</View>
	)
}

const style = StyleSheet.create({
	gameScreen: {
		flex: 1,
		padding: 24,
		alignItems: 'center',
		justifyContent: 'center',
	},
	resultContainer: {
		flexDirection: 'row',
	},
	image: {
		width: '100%',
		height: '100%'
	},
	buttonContainer: {
		alignItems: 'center',
		justifyContent: 'center',
	}
});

export default GameOverScreen;