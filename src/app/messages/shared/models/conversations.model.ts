export interface Conversation {
    conversationalPartner: string;
    messages: Message[];
    mostRecentMessage: Date;
}

export interface Message {
    name: string;
    date: Date;
    message: string;
}
