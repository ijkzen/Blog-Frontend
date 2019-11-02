import {Component, Input, OnInit} from '@angular/core';
import {ChatMessage} from '../../service/bean/data/ChatMessage';
import {StorageService} from '../../service/storage.service';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.scss']
})
export class ChatItemComponent implements OnInit {

  @Input()
  message: ChatMessage;

  constructor(
    private storageService: StorageService
  ) {
  }

  ngOnInit() {
  }

  isLeft(): boolean {
    return this.message.sender_id === 5175429989;
  }

  getAvatar(): string {
    return this.storageService.getAvatarUrl();
  }
}
