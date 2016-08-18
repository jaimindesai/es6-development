import {Car} from '../classes/car.js';
import {Drone} from '../classes/drone.js';
import {DataError} from '../services/data-error.js';


export class DataService {

	constructor (){
		this.cars = [];
		this.drones = [];
		this.errors = [];
	}

	getCarByLicense(license){
		return this.cars.find(function(car){
			 return car.license = license;
		});
	}

	getCarsSortedByLicense(){
		return this.cars.sort(function(car1,car2){
			 if (car1.license < car2.license)
			 	return -1;
			 if (car1.license > car2.license)
			 	return 1;
			 return 0;
			});
	} 

	filterCarsByMake(fil){
		return this.cars.filter(car => car.make.indexOf(fil) >= 0);
	}

	loadData(data){
		for (let i of data) {
			switch(i.type){
				case 'car':
				     let car = this.loadCar(i);
				     this.cars.push(car);
					 break;
				case 'drone':
					 let drone = this.loadDrone(i);
					 this.drones.push(drone);
					 break;		 
				default:
				     let e = new DataError('Invalid vahicle type',data);
				     this.errors.push(e);
				     break;
			}

		}

		

	}

	loadCar(car){
		try{
			let c = new Car(car.license,car.model,car.latLong);
			c.miles = car.miles;
			c.make = car.make;
			return c;
		} catch(e){
			this.errors.push(new DataError('error loading car',car));
		}
		return null;
	}

    loadDrone(drone){
    	let d = new Drone(drone.license,drone.model,drone.latLong);
    	d.airTimesHours = drone.airTimesHours;
		d.base = drone.base;
		return d;
    }		

}