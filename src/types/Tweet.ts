import type {TweetImage} from "./TweetImage"; 

export type Tweet = {
    id: string; 
    authorName: string;
    authorHandle: string;
    content: string;
    image?: TweetImage;
    createdAt : string; 
    parentId?: string; 
    likes: number; //correspond au nb de j'aime 
    likedByMe: boolean; //indique si l'user courant aime le tweet 
}; 

