import { StyleSheet, Text, View } from "react-native";
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

const styles = StyleSheet.create({
	container: {
		borderWidth: 4,
		borderColor: Colors.accent500,
		padding: 24,
		marginHorizontal: 24,
		borderRadius: 8,
		alignItems: 'center',
		justifyContent: 'center',
	},
	number: {
		fontSize: 36,
		color: Colors.accent500,
		fontFamily: 'open-sans-bold',
	},
})

export default NumberContainer;