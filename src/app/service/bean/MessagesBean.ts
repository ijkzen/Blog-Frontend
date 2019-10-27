import {ChatMessage} from './data/ChatMessage';
import {BaseBean} from './BaseBean';

export class MessagesBean extends BaseBean {
  list: ChatMessage[];
}
