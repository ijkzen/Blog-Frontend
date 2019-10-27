import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChatItemComponent} from './chat-item/chat-item.component';
import {NzAvatarModule, NzButtonModule, NzIconModule, NzInputModule, NzLayoutModule, NzSpinModule} from 'ng-zorro-antd';
import {ChatRoomComponent} from './chat-room/chat-room.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [ChatItemComponent, ChatRoomComponent],
  imports: [
    CommonModule,
    NzAvatarModule,
    NzLayoutModule,
    NzButtonModule,
    NzIconModule,
    NzInputModule,
    FormsModule,
    NzSpinModule
  ]
})
export class ChatModule {
}
