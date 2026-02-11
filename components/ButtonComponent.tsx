import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, TouchableOpacity, ActivityIndicator, View } from 'react-native';

type ButtonComponentProps = {
	title: string;
	onPress: () => void;
	disabled?: boolean;
	loading?: boolean;
};

export default function ButtonComponent({
	title,
	onPress,
	disabled = false,
	loading = false,
}: ButtonComponentProps) {
	return (
		<TouchableOpacity
			style={[styles.buttonContainer, disabled && styles.buttonDisabled]}
			disabled={disabled}
			onPress={onPress}
			activeOpacity={0.8}
		>
			<LinearGradient
				colors={disabled ? ['#4a4a4a', '#2a2a2a'] : ['#007CF0', '#00DFD8']}
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 0 }}
				style={styles.gradient}
			>
				<View style={styles.contentSlot}>
					{loading ? (
						<ActivityIndicator size={24} color="#ffffff" />
					) : (
						<Text style={styles.text}>{title}</Text>
					)}
				</View>
			</LinearGradient>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	buttonContainer: {
		borderRadius: 20,
		minWidth: '100%',
		height: 80,
		marginTop: 20,
	},
	buttonDisabled: {
		opacity: 0.5,
	},
	gradient: {
		borderRadius: 50,
		padding: 18,
	},
	contentSlot: {
		height: 24,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: '#ffffff',
		fontSize: 20,
		lineHeight: 24,
		fontWeight: 'bold',
		textAlign: 'center',
	},
});
