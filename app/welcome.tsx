import { Image } from 'expo-image';
// import { router } from 'expo-router';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TouchableWithoutFeedback,
	Keyboard,
} from 'react-native';
import { Colors } from '@/constants/Colors';
import ButtonComponent from '../components/ButtonComponent';
import TextInputComponent from '../components/TextInputComponent';
import { useScrollKeyboard } from '../hooks/useScrollKeyboard';
import { userStore } from '../stores';

const WelcomeScreen = observer(() => {
	const { scrollViewRef, scrollEnabled, animatedContentStyle, scrollToEnd } = useScrollKeyboard();
	const [isLoading, setIsLoading] = useState(false);

	const handleChangeText = (text: string) => {
		userStore.setUserName(text);
	};

	const handleBlur = () => {
		if (userStore.userName.trim() === '') {
			userStore.clearUserName();
		}
	};

	const handleSubmit = async () => {
		setIsLoading(true);

		// Симуляція завантаження (наприклад, збереження на сервер)
		await new Promise(resolve => setTimeout(resolve, 1500));

		setIsLoading(false);

		// Перехід на наступну сторінку
		// router.push('/next-screen');  // ← коли буде готовий роут
	};

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={styles.container}>
				<ScrollView
					ref={scrollViewRef}
					scrollEnabled={scrollEnabled}
					contentContainerStyle={animatedContentStyle}
					keyboardShouldPersistTaps="handled"
					showsVerticalScrollIndicator={false}
				>
					<Image source={require('../assets/images/welcome-pic.png')} style={styles.image} />
					<View style={styles.content}>
						<Text style={styles.title}>Welcome to Mapwise</Text>
						<Text style={styles.description}>
							You can fill your name for your profile. It will only be used in the app.
						</Text>
						<TextInputComponent
							placeholder="Enter your name"
							value={userStore.userName}
							onChangeText={handleChangeText}
							onFocus={scrollToEnd}
							onBlur={handleBlur}
						/>
						<ButtonComponent
							title="Start Now"
							onPress={handleSubmit}
							disabled={!userStore.isUserNameValid}
							loading={isLoading}
						/>
						<Text style={styles.description}>
							Using Mapwise is free. We do not store your personal data. It is stored only locally
							on your phone. If you delete the app, all your data will be permanently removed.
						</Text>
					</View>
				</ScrollView>
			</View>
		</TouchableWithoutFeedback>
	);
});

export default WelcomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.background.main,
	},
	image: {
		width: '100%',
		height: 400,
	},
	content: {
		padding: 20,
		width: '100%',
	},
	title: {
		fontSize: 32,
		fontWeight: 'bold',
		color: Colors.text.primary,
		textAlign: 'center',
	},
	description: {
		fontSize: 16,
		color: Colors.text.secondary,
		textAlign: 'center',
		marginTop: 10,
	},
});
