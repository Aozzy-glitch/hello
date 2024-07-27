import { image } from "ionicons/icons";

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  image: string;
}

const messages: Message[] = [
  {
    fromName: 'Matt choresy',
    subject: 'New event: Trip to Vegas',
    date: '9:32 AM',
    id: 0,
    image: "matt.png"
  },
  {
    fromName: 'Abas maulid',
    subject: 'Long time no chat',
    date: '6:12 AM',
    id: 1,
    image: "abas.jpg"
  },
  {
    fromName: 'Jordan Firth',
    subject: 'Report Results',
    date: '4:55 AM',
    id: 2,
    image: "Mj.jpg"
  },
  {
    fromName: 'Bill Thomas',
    subject: 'The situation',
    date: 'Yesterday',
    id: 3,
    image: "bill.jpg"
  },
  {
    fromName: 'Joanne Pollan',
    subject: 'Updated invitation: Swim lessons',
    date: 'Yesterday',
    id: 4,
    image: "joanne.webp"
  },
  {
    fromName: 'Andrea Cornerston',
    subject: 'Last minute ask',
    date: 'Yesterday',
    id: 5,
    image: "andrea.jpg"
  },
  {
    fromName: 'Moe Chamont',
    subject: 'Family Calendar - Version 1',
    date: 'Last Week',
    id: 6,
    image: "moe.jpg"
  },
  {
    fromName: 'Kelly Richardson',
    subject: 'Placeholder Headhots',
    date: 'Last Week',
    id: 7,
    image: "kelly.png"
  }
];

export const getMessages = () => messages;

export const getMessage = (id: number) => messages.find(m => m.id === id);
