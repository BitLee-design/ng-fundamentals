import { Injectable } from '@angular/core'
import { IUser } from './user.model'

@Injectable()
export class AutService {
currentUser: IUser
	loginUser(userName: string, password: string) {
		this.currentUser = {
			id: 1,
			userName: userName,
			firstName: 'John',
			lastName: 'Martin'
		}

	}

	isAuthenticated() {
		return !!this.currentUser;
	}
}