import $ from 'jquery';
import {Car} from './classes/car.js';
import {Drone} from './classes/drone.js';
import {data} from './data.js';
import {DataService} from './services/data-service.js';
import {Button} from './ui/button.js';
import {Image} from './ui/image.js';
import {TitleBar} from './ui/title-bar.js';

import {ApplicationBase} from './framework/application-base.js';
import {HomePage} from './home-page.js';
import {CarsPage} from './cars-page.js';
import {MapPage} from './map-page.js';
import {DronesPage} from './drones-page.js';


export class App extends ApplicationBase {
    
    constructor() {
        super('Deeproot Manager');
        
        this.dataService = new DataService();
        this.dataService.loadData(data);
        
        this.addRoute('Home', new HomePage(), true);
        this.addRoute('Cars', new CarsPage());
        this.addRoute('Drones',new DronesPage);
        this.addRoute('Map', new MapPage());
    }
}


// window.app = new App();
// window.app.show($('body'));

export let application = new App();
application.show($('body'));


