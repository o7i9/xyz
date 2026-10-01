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

/*On a une date au format ISO 8601 (string) 
new Date construit un objet Date à partir du string "2026-07-01T09:12:00.000Z"
Date comprend le format ISO 8601 et renvoie "1er juillet 2026 à 09:12:00 UTC"
toLocateString est une méthode de l'objet Date qui permet de passer à ça "01/07/2026 11:12:00"
 et fr-FR c'est juste le param pour dire qu'on veut le format fr jour/mois/annee, heure sur 24h */

// l'opérateur && renvoie l'expression de droite si la condition est vraie 
export const TweetPreview = ({tweet}: TweetPreviewProps) : ReactElement => {
    return (
        <article>
            <h3>{tweet.authorName}</h3>
            <p>@{tweet.authorHandle}</p>
            <p>{new Date(tweet.createdAt).toLocaleString("fr-FR")}</p>
            {tweet.image !== undefined && (
                <img 
                    className="tweet-image"
                    src={tweet.image.url}
                    alt={tweet.image.alt}
                />
            )}
            <p>{tweet.content}</p>
        </article>
    ); 
}; 

