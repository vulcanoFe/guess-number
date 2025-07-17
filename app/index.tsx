import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, StyleSheet } from "react-native";

import StartGameScreen from "./screens/StartGameScreen";

// Nasconde l'header della schermata
export const options = {
	headerShown: false,
};

export default function Index() {
	return (
		<LinearGradient colors={['#ddb52f', '#4e0329']} style={style.rootScreen}>
			<ImageBackground
				source={require('../assets/images/background.png')}
				resizeMode="cover"
				style={style.rootScreen}
				imageStyle={style.backgroundImage}
			>
				<StartGameScreen />
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
