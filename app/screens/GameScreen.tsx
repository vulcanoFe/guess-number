import { StyleSheet, Text, View } from "react-native";

import Title from "../components/Title";

function GameScreen() {
	return (
		<View style={style.gameScreen}>
			<Title>Opponent&apos;s Guess</Title>
			<View>
				<Text>Higher or Lower?</Text>
			</View>
			<View>
				<Text>LOG ROUNDS</Text>
			</View>
		</View>
	)
}

const style = StyleSheet.create({
	gameScreen: {
		flex: 1,
		padding: 24
	}
})

export default GameScreen;