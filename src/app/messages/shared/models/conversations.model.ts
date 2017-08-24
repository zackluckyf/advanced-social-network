export interface Conversation {
    conversationalPartner: string;
    messages: Message[];
}

export interface Message {
    name: string;
    date: Date;
    message: string;
}
