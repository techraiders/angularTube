import {Component} from 'angular2/core';
import {VideoComponent} from '../video-page/video.component';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
@Component({
	selector: 'my-app',
	templateUrl: 'app/modules/home-page/home.html'
})

@RouteConfig([
	{path: '/', name: 'video', component: VideoComponent, useAsDefault: true}
])

export class HomeComponent {

}