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
                
                <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span>
            </div> 
        </div>
    `,
    styles: [`
        .thumbnail {
            min-height: 210px;
        }
        .pad-left { 
            margin-left: 10px; 
        }
        h2 {
            color: red;
        }
        .well div {
            color: #bbb;
        }
    `]
})
export class EventsThumbnailComponent {
    @Input() event:any
}