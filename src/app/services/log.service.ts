import { LogEntry } from './../models/log-entry';
import { LogLevel } from '../models/logType';
import { Injectable } from '@angular/core';
import { LogPublishersService } from './log-publishers.service';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class LogService {
	public publishers: any[];

	constructor(private publishersService: LogPublishersService) {
		this.publishers = this.publishersService.publishers;
	}

	writeToLog(msg: string, level: LogLevel, logWithDate: any) {
		const env: any = 'production';
		if (env === 'production') {
			let entry: LogEntry = new LogEntry();
			entry.message = msg;
			this.publishers.push(entry);
			console.log('====================================');
			localStorage.setItem('LogLocalStorage', JSON.stringify(this.publishers));
			console.log('====================================');
			console.log(entry.entryDate, entry.message);
		}
	}

	clear() {
		localStorage.removeItem('LogLocalStorage');
	}

	debug(msg: string) {
		this.writeToLog(msg, LogLevel.Debug, new Date());
	}

	info(msg: string) {
		this.writeToLog(msg, LogLevel.Info, new Date());
	}

	warn(msg: string) {
		this.writeToLog(msg, LogLevel.Warn, new Date());
	}

	error(msg: string) {
		this.writeToLog(msg, LogLevel.Error, new Date());
	}

	// writeToLog(msg: any, level: LogLevel, logWithDate:any) {
	//   const env:any = 'production'
	//   // process.env.NODE_ENV;
	//   if (env === 'production') {
	//     console.log(new Date() + ': ', JSON.stringify(msg));
	//   }
	// }
	// log(msg: string, ...optionalParams: any[]) {
	// 	this.writeToLog(msg, LogLevel.All, optionalParams);
	// }
}
