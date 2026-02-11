import { makeAutoObservable } from 'mobx';

class UserStore {
	userName = '';

	constructor() {
		makeAutoObservable(this);
	}

	setUserName(name: string) {
		this.userName = name;
	}

	get isUserNameValid(): boolean {
		return this.userName.trim().length > 0;
	}

	clearUserName() {
		this.userName = '';
	}
}

export const userStore = new UserStore();
