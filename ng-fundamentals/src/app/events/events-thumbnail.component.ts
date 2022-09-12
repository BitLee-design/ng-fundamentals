import { Component, Input } from '@angular/core'

@Component ({
    selector: 'event-thumbnail',
    template: `
        <div class="well hoverwell thumnail">
            <h2>{{event.name}}</h2>
            <div>Date: {{event.date}}</div>
            <div>time: {{event.time}}</div>
            <div>Price: \${{event.price}}</div>
            <div>
                <span>Location: {{event.location.address}}</span>
                
                <span>{{event.location.city}}, {{event.location.country}}</span>
            </div>
        </div>
    `
})
export class EventsThumbnailComponent {
    @Input() event:any

}