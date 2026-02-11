import { Image } from 'expo-image';
import { router } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Colors } from '@/constants/Colors';

export default function SplashScreen() {
	useEffect(() => {
		const timer = setTimeout(() => {
			router.replace('/welcome');
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<View style={styles.container}>
			<Image source={require('../assets/images/splash-logo-removebg.png')} style={styles.image} />
			<ActivityIndicator size="large" color="#ffffff" style={styles.spinner} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.background.main,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	image: {
		width: '80%',
		height: 50,
	},
	spinner: {
		marginTop: 30,
	},
});
