import {Attachment} from './Attachment';

export class ChatMessage {
  id: number;
  // tslint:disable-next-line:variable-name
  created_at: string;
  // tslint:disable-next-line:variable-name
  sender_id: number;
  // tslint:disable-next-line:variable-name
  recipient_id: number;
  text: string;
  attachment: Attachment[];
}
