import {
  IonItem,
  IonLabel,
  IonNote,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  } from '@ionic/react';
import { Message } from '../data/messages';
import './MessageListItem.css';

interface MessageListItemProps {
  message: Message;
}

const MessageListItem: React.FC<MessageListItemProps> = ({ message }) => {
  return (
    <IonItem routerLink={`/message/${message.id}`} detail={false}>
      <IonCard>
      <img src= {message.image}/>
      <IonCardHeader>
        <IonCardTitle>{message.fromName}</IonCardTitle>
        <IonCardSubtitle>{message.subject}</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
    </IonCard>
    </IonItem>
  );
};

export default MessageListItem;
