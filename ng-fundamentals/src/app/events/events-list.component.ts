import { Component } from '@angular/core'

@Component ({
    selector: 'events-list',
    template: `
        <div>
            <h1>Upcoming Angular Events</h1>
            <hr/>
            <event-thumbnail [event]="event1"></event-thumbnail>
        </div>
    `,
    styles: [`
        h1 { 
            color: red; 
        }
    `]
})
export class EventsListComponent {
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '9/21/2030',
        time: '11:00 am',
        price: 650.00,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: 'BCP 15',
            city: 'London',
            country: 'England'

        }
    }
}