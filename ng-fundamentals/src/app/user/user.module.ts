import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { userRoutes } from './user.routes'
import { ProfileComponent } from './profile.Component'
import { LoginComponent } from './login.component'

@NgModule({
	imports [
		CommonModule,
		RouterModule, forChild(userRoutes)

	],
	declarations [
		ProfileComponent,
		FormsModule,
		LoginComponent

	],
	providers [

	]
	
})
export class UserModule ()