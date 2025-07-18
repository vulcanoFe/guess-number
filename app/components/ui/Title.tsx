import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

interface TitleProps {
	children: React.ReactNode;
}

function Title({ children }: TitleProps) {

	return (
		<Text style={style.title}>{children}</Text>
	);

}

const style = StyleSheet.create({
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: Colors.white,
		textAlign: 'center',
		borderWidth: 2,
		borderColor: Colors.white,
		borderRadius: 8,
		padding: 12,
		marginVertical: 24,
	}
});

export default Title;