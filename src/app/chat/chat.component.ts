import { Component, OnInit } from '@angular/core';
import { DsService } from '../ds.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  title = 'deepChat';
  username;
  text;
  chats;
  chatArray = [];

  constructor(
    private ds: DsService
  ) {}

  ngOnInit() {

    this.chats = this.ds.getList('chats');

    this.chats.on('entry-added', recordName => {
            
      this.ds.getRecord( recordName ).whenReady( record => {

        record.subscribe( (data) => {
          if(data.username && data.text) {
            // Update bindable property  
            this.chatArray.push(data);
          }
        }, true );

      });
    })
    this.username = 'Bok';
    this.ds.login(null, this.loginHandler);
    
  }
        
  loginHandler(success, data) {
    console.log('logged in', success, data);
  }

  addChat() {

    const recordName = 'chat/' + this.ds.dsInstance.getUid();

    const chatRecord = this.ds.getRecord(recordName);
    chatRecord.set({username: this.username, text: this.text});
    this.text = '';
    // Update the chats list
    this.chats.addEntry(recordName);
  }
}
