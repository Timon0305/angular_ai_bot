import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatviewComponent } from '../../components/chatview/chatview.component';
// @ts-ignore
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ChatviewComponent,
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    FormsModule,
  ]
})
export class ChatModule { }
