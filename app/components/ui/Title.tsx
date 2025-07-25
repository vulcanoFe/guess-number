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
		fontFamily: 'open-sans-bold',
		fontSize: 24,
		color: Colors.white,
		textAlign: 'center',
		borderWidth: 2,
		borderColor: Colors.white,
		borderRadius: 8,
		padding: 12,
		maxWidth: '80%',
		width: 300,
	}
});

export default Title;
