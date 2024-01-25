import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {
  serverStatus = false
  serverCreation = 'NO Server'
  newServer: string[] = [];

  constructor() {
    setTimeout(()=>
        this.serverStatus = true
      ,2000)

  }
  ngOnInit() {

  }
  onServerCreation(){
    this.serverStatus = true;
    this.serverCreation = 'New Server'
    this.newServer.push(this.serverCreation)
  }
  // onDelete(i:number){
  //   this.newServer.indexOf(i) = []
  // }
}
