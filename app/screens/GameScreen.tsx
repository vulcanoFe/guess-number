import { StyleSheet, Text, View } from "react-native";

function GameScreen() {
	return (
		<View style={style.gameScreen}>
			<Text>Opponents Guess</Text>
			{/*GUESS*/}
			<View>
				<Text>Higher or Lower?</Text>
				{/*	+
				- */}

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
		padding: 24,
		alignItems: 'center',
		justifyContent: 'center'
	}
})

export default GameScreen;