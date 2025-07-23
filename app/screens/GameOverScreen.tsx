import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import GameHistory, { GameResult } from "../components/game/GameHistory";
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
			<View style={style.buttonContainer}>
				<PrimaryButton onPressHandler={onStartNewGame}>
					<Ionicons name="refresh" size={24} color="white" />
				</PrimaryButton>
			</View>
			<GameHistory gameHistory={gameHistory} />
		</View>
	)
}

const style = StyleSheet.create({
	gameScreen: {
		flex: 1,
		padding: 24
	},
	buttonContainer: {
		marginTop: 20,
		marginBottom: 20,
		alignItems: 'center',
	}
});

export default GameOverScreen;