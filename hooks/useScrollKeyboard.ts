import { useEffect, useRef, useState } from 'react';
import { Keyboard, ScrollView, type KeyboardEvent, Platform } from 'react-native';

export function useScrollKeyboard() {
	const [keyboardHeight, setKeyboardHeight] = useState(0);
	const scrollViewRef = useRef<ScrollView>(null);

	useEffect(() => {
		const onKeyboardShow = (event: KeyboardEvent) => {
			const height = event.endCoordinates.height;
			setKeyboardHeight(height);
		};
		const onKeyboardHide = () => {
			scrollViewRef.current?.scrollTo({ y: 0, animated: true });
		};
		const showEvent = Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow';
		const hideEvent = Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide';
		const showSub = Keyboard.addListener(showEvent, onKeyboardShow);
		const hideSub = Keyboard.addListener(hideEvent, onKeyboardHide);

		return () => {
			showSub.remove();
			hideSub.remove();
		};
	}, []);

	return {
		scrollViewRef,
		scrollEnabled: false,
		animatedContentStyle: {
			flexGrow: 1,
			paddingBottom: keyboardHeight,
		},

		scrollToEnd: () => scrollViewRef.current?.scrollToEnd({ animated: true }),
	};
}
