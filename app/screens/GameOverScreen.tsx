import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, View } from "react-native";
import GameHistory, { GameResult } from "../components/game/GameHistory";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

interface GameOverScreenProps {
	onStartNewGame: () => void;
	gameHistory?: GameResult[]
}

function GameOverScreen({ onStartNewGame, gameHistory }: GameOverScreenProps) {
	return (
		<View style={style.gameScreen}>
			<Title>End of the game!</Title>
			<View style={style.imageContainer}>
				<Image source={require('../../assets/images/success.png')} style={style.image} />
			</View>
			<GameHistory gameHistory={gameHistory} />
			<View style={style.buttonContainer}>
				<PrimaryButton onPressHandler={onStartNewGame}>
					<Ionicons name="refresh" size={24} color="white" />
				</PrimaryButton>
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
	imageContainer: {
		borderRadius: 150,
		width: 300,
		height: 300,
		borderWidth: 3,
		borderColor: Colors.primary800,
		overflow: 'hidden',
	},
	image: {
		width: '100%',
		height: '100%'
	},
	buttonContainer: {
		marginTop: 20,
		marginBottom: 20,
		alignItems: 'center',
	}
});

export default GameOverScreen;