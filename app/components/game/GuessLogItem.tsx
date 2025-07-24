import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

interface GuesLogItemProps {
	guessAttempt: number;
	attemptsNumber: number;
}

function GuessLogItem({ guessAttempt, attemptsNumber }: GuesLogItemProps) {
	return (
		<Text style={style.logItem}>
			Guess: <Text style={style.logText}>{guessAttempt}</Text>,
			Round: <Text style={style.logText}>#{attemptsNumber}</Text>
		</Text>
	);
}

const style = StyleSheet.create({
	logItem: {
		fontFamily: 'open-sans',
		fontSize: 16,
		color: '#fff',
		paddingBottom: 4,
		paddingHorizontal: 26,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
	},
	logText: {
		fontFamily: 'open-sans-bold',
		color: Colors.primary500,
	}
});

export default GuessLogItem;