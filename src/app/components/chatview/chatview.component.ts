import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-chatview',
  templateUrl: './chatview.component.html',
  styleUrls: ['./chatview.component.scss']
})
export class ChatviewComponent implements OnInit {

  witToken: string = "TRU5RIDR6TEAYLAVWC5IFKKBCA57M3YG";
  responses = {
    wit_greetings: [
      "Hey, how's it going?",
      "Hi, What's good with you?",
      "Hello to you too.",
      "Hey, glad to see you again!",
    ],
    wit$create_alarm: [
      "alarm Hey, how's it going?",
      "alarm Hi, What's good with you?",
      "alarm Hello to you too.",
      "alarm Hey, glad to see you again!",
    ],
  };

  textMessage: string = "";
  requestMessage: string = "";
  responseMessage: string = "";
  receivedStatus: boolean = false;
  sentStatus:boolean = false;

  constructor(
  ) {
    this.sendMessage().then()
  }

  ngOnInit(): void {
  }

  async sendMessage() {
    if (this.textMessage.length < 1) {
      return
    }
    this.sentStatus = true;
    this.requestMessage = this.textMessage;
    this.responseMessage = "🤔";
    this.receivedStatus = true;

    const q = encodeURIComponent(this.textMessage);
    const uri = 'https://api.wit.ai/message?v=20220622&q=' + q;
    const auth = 'Bearer ' + this.witToken;

    fetch(uri, {headers: {Authorization: auth}})
      .then(res => res.json())
      .then(res => {
        if (res.intents.length > 0) {
          let index = Object.entries(this.responses).forEach((key) => {            
              if (key[0] == res.intents[0].name) {
                this.responseMessage = key[1][Math.trunc(Math.random() * key[1]?.length - 1)]
              }
          })
        }
      });
    this.textMessage = ""
  }


}
