import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import GameHistory, { GameResult } from "../components/game/GameHistory";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

interface GameOverScreenProps {
	onStartNewGame: () => void;
	gameHistory?: GameResult[]
}

function GameOverScreen({ onStartNewGame, gameHistory }: GameOverScreenProps) {

	const { width } = useWindowDimensions();

	return (
		<View style={style.gameScreen}>
			<Title>End of the game!</Title>
			<View style={width < 500 ? style.verticalContainer : style.horizontalContainer}>
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
	verticalContainer: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	horizontalContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		width: '100%',
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