import { Timestamp } from 'firebase/firestore';

export type Userdata = {
  username: string;
  email: string;
  bio: string;
  avatar: string;
  age: string;
  createdAt: Timestamp;
  isCompleatSetup: boolean;
};
