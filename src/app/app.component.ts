import { Component } from '@angular/core';
import { LogService } from './services/log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'logger';

  constructor(private logService: LogService){}



  testLog() {
    this.logService.debug("Test Mixed Parameters")
  }
}
