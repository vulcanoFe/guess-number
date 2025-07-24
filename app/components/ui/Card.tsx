import { Dimensions, StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

interface CardProps {
	children: React.ReactNode;
}

function Card({ children }: CardProps) {

	return (
		<View style={styles.card}>{children}</View>
	)

}

const { width } = Dimensions.get('window');
const isSmallDevice = width < 380;

const styles = StyleSheet.create({
	card: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: isSmallDevice ? 18 : 36,
		marginHorizontal: 4,
		borderRadius: 8,
		padding: isSmallDevice ? 12 : 16,
		backgroundColor: Colors.primary800,
		elevation: 4,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 6,
	}
});

export default Card;