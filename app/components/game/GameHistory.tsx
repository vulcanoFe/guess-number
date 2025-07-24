import { FlatList, StyleSheet, Text } from "react-native";
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
			<FlatList style={style.historyList} data={gameHistory} renderItem={(itemData) => {
				const { guessedNumber, rounds } = itemData.item;
				return (
					<Text style={style.historyItem}>
						Guessed: <Text style={style.historyNumber}>{guessedNumber}</Text>,
						Attempts: <Text style={style.historyNumber}>{rounds}</Text>
					</Text>
				);
			}} />
		</Card>
	);
}

const style = StyleSheet.create({
	historyTitle: {
		color: '#fff',
		fontSize: 24,
	},
	historyList: {
		maxHeight: 200,
		marginTop: 16,
	},
	historyItem: {
		fontFamily: 'open-sans',
		fontSize: 16,
		color: '#fff',
		paddingBottom: 4,
		paddingHorizontal: 26,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
	},
	historyNumber: {
		fontFamily: 'open-sans-bold',
		color: Colors.accent500,
	}
});

export default GameHistory;