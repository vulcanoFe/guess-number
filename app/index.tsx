import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";

import { useState } from "react";
import Colors from "./constants/colors";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

// Nasconde l'header della schermata
export const options = {
	headerShown: false,
};

export default function Index() {

	const [userNumber, setUserNumber] = useState(0);

	function pickedNumberHandler(pickedNumber: number) {
		setUserNumber(pickedNumber);
	}

	let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

	if (userNumber && userNumber > 0) {
		screen = <GameScreen />;
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
