import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

interface CardProps {
	children: React.ReactNode;
}

function Card({ children }: CardProps) {

	return (
		<View style={styles.card}>{children}</View>
	)

}

const styles = StyleSheet.create({
	card: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 36,
		marginHorizontal: 24,
		borderRadius: 8,
		padding: 16,
		backgroundColor: Colors.primary800,
		elevation: 4,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 6,
	}
});

export default Card;