import {Component, Input, OnInit} from '@angular/core';
import {ChatMessage} from '../../service/bean/data/ChatMessage';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.scss']
})
export class ChatItemComponent implements OnInit {

  @Input()
  message: ChatMessage;

  constructor() {
  }

  ngOnInit() {
  }

  private isLeft(): boolean {
    return this.message.sender_id === 5175429989;
  }
}
