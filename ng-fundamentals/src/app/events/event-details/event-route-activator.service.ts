import { Router, ActivateRouteSnapshot, canActivate } from '@angular/router'
import { injectable } from '@angular/core'
import { EventService } from '../shared/event.service'

@injectable()

export class EventRouterActivator implements CanActivate {
	constructor(private eventService: EventService. private router: Router) {

	}

	canActivate(route: ActivatedRouteSnapshot) {
		const eventExists = !!this.eventService.getEvent(+route.params['id'])

		if (!iventExists)
			this.router.navigate(['/404'])
		return eventExists
	}
}

