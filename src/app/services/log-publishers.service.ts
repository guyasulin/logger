import { Injectable } from '@angular/core';
import { LogPublisher } from '../models/log-publishers';

@Injectable({
	providedIn: 'root'
})
export class LogPublishersService {
	constructor() {
		// Build publishers arrays
		this.buildPublishers();
	}

	// Public properties
	publishers: LogPublisher[] = [];

	// Build publishers array
	buildPublishers(): void {
		// Create instance of LogConsole Class
		// this.publishers.push(new LogConsole());
	}
}
