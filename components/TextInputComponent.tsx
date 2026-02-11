import { StyleSheet, TextInput } from 'react-native';
import { Colors } from '@/constants/Colors';

type TextInputComponentProps = {
	placeholder: string;
	value: string;
	onFocus?: () => void;
	onChangeText: (text: string) => void;
	onBlur?: () => void;
};

export default function TextInputComponent({
	placeholder,
	value,
	onChangeText,
	onFocus,
	onBlur,
}: TextInputComponentProps) {
	return (
		<TextInput
			style={styles.input}
			placeholder={placeholder}
			placeholderTextColor={Colors.input.placeholder}
			onFocus={onFocus}
			returnKeyType="done"
			autoFocus={true}
			onChangeText={onChangeText}
			onBlur={onBlur}
			value={value}
		/>
	);
}

const styles = StyleSheet.create({
	input: {
		padding: 18,
		borderWidth: 3,
		borderColor: Colors.primary.blue,
		borderRadius: 50,
		marginTop: 20,
		color: Colors.text.primary,
		fontSize: 20,
		fontWeight: 'bold',
		backgroundColor: Colors.background.mid,
	},
});
