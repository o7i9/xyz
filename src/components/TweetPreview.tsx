import type {Tweet} from "../types/Tweet";  

//un composant react est une fonction qui recoit éventuellement des données et renvoie une description d'interface 
/*Exemple : (REF DU COURS)
type EventCardProps = {
  event: Event;
};

export const EventCard = ({ event }: EventCardProps): ReactElement => {
  ...
}; */

/*  id: string; 
    authorName: string;
    authorHandle: string;
    content: string;
    image: TweetImage;
    createdAt : string; 
};  */

type TweetPreviewProps = {
    tweet : Tweet; 
};

/*utilisation de la fontion toLocateDateStrng pour convertir la date en fromat visible 
{" "} utilisé pour ajouter un espace entre 2 lignes */

export const TweetPreview = ({tweet}: TweetPreviewProps) : ReactElement => {
    return (
        <article>
            <h3>{tweet.authorName}</h3>
            <p>@{tweet.authorHandle}</p>
            <p>{new Date(tweet.createdAt).toLocaleString("fr-FR")}</p>
            <p>{tweet.content}</p>
        </article>
    ); 
}; 