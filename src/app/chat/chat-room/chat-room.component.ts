import {Component, OnInit} from '@angular/core';
import {ChatMessage} from '../../service/bean/data/ChatMessage';
import {ChatService} from '../../service/chat.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {

  list: ChatMessage[] = [];
  message = '';
  loading = false;

  constructor(
    private chatService: ChatService
  ) {
  }

  static toBottom() {
    const list = document.getElementById('chat-room');
    list.scrollTo(0, list.scrollHeight);
  }

  ngOnInit() {
    const welcome = new ChatMessage();
    welcome.sender_id = 5175429989;
    welcome.text = `你好，我是微软小冰。我是微软智能框架的产物，央视主播，央美毕业生`;
    this.list[0] = welcome;
  }

  sendMessage(message: string) {
    const chat = new ChatMessage();
    chat.text = message;
    chat.created_at = (new Date()).toDateString();
    this.list[this.list.length] = chat;
    this.message = '';
    this.loading = true;
    this.chatService.sendMessage(message)
      .subscribe(
        (result) => {
          result.list.forEach(
            (item, index, array) => {
              if (item.text !== this.list[this.list.length - 1].text) {
                this.list.push(item);
              }
              this.loading = false;
              setTimeout(() => {
                ChatRoomComponent.toBottom();
              }, 500);
            });
        }
      );
  }
}
