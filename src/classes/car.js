import {Vahicle} from './vahicle.js';

export class Car extends Vahicle{

	constructor (license,model,latLong){
		super(license,model,latLong);
		 this.miles = null;
		 this.make = null;
	}
	
}
