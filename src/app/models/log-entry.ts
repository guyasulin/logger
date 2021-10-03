import { LogLevel } from './logType';

export class LogEntry {
    // Public Properties
    entryDate: Date = new Date();
    message: string = "";
    level: LogLevel;
    logWithDate: boolean = true;
    
    buildLogString(): string {
        let ret: string = "";
        
        ret += "Type: " + LogLevel[this.level];
        ret += " - Message: " + this.message;
 
        return ret;
    }

}