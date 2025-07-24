import { Dimensions, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

interface NumberContainerProps {
	children: React.ReactNode;
}

function NumberContainer({ children }: NumberContainerProps) {
	return (
		<View style={styles.container}>
			<Text style={styles.number}>{children}</Text>
		</View>
	);
}

const { width } = Dimensions.get('window');
const isSmallDevice = width < 380;

const styles = StyleSheet.create({
	container: {
		borderWidth: 4,
		borderColor: Colors.accent500,
		padding: isSmallDevice ? 12 : 24,
		margin: isSmallDevice ? 12 : 24,
		borderRadius: 8,
		alignItems: 'center',
		justifyContent: 'center',
	},
	number: {
		fontSize: isSmallDevice ? 28 : 36,
		color: Colors.accent500,
		fontFamily: 'open-sans-bold',
	},
})

export default NumberContainer;