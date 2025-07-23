import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";
import Card from "../ui/Card";
import InstructionText from "../ui/InstructionText";

export interface GameResult {
	guessedNumber: number;
	rounds: number;
}

interface GameHistoryProps {
	gameHistory?: GameResult[];
}

function GameHistory({ gameHistory }: GameHistoryProps) {
	return (
		<Card>
			<InstructionText style={style.historyTitle}>Game History:</InstructionText>
			{gameHistory?.map((result, index) => (
				<Text key={index} style={style.historyItem}>
					Guessed: <Text style={style.historyNumber}>{result.guessedNumber}</Text>,
					Attempts: <Text style={style.historyNumber}>{result.rounds}</Text>
				</Text>
			))}
		</Card>
	);
}

const style = StyleSheet.create({
	historyTitle: {
		color: '#fff',
		fontSize: 24,
	},
	historyItem: {
		fontFamily: 'open-sans',
		fontSize: 16,
		color: '#fff',
		paddingBottom: 4,
		paddingHorizontal: 34,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
	},
	historyNumber: {
		fontFamily: 'open-sans-bold',
		color: Colors.accent500,
	}
});

export default GameHistory;