import {Component} from '@angular/core';
import {ElectronService} from "ngx-electron";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nebular';

  constructor(
    private _electronService: ElectronService
  ) {
  }

  playPingPong() {
    if(this._electronService.isElectronApp) {
      let pong: string = this._electronService.ipcRenderer.sendSync('ping');
      console.log(pong);
    }
  }

  public beep() {
    this._electronService.shell.beep();
  }
}
