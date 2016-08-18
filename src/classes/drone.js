import {Vahicle} from './vahicle.js';

export class Drone extends Vahicle {

	constructor(license,model,latLong){
		super(license,model,latLong);
		this.airTimesHours = null;
		this.base = null;
	}


}