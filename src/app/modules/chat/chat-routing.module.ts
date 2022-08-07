import { NgModule } from '@angular/core';
// @ts-ignore
import { RouterModule, Routes } from '@angular/router';
import { ChatviewComponent } from 'src/app/components/chatview/chatview.component';

const routes: Routes = [
  { path: '',  component: ChatviewComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
