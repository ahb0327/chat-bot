export interface Chat {
  sender: 'bot' | 'user';
  time: Date;
  message: string;
}
