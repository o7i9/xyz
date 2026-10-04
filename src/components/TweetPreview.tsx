import type {Tweet} from "../types/Tweet";  
import {useState} from "react"; 
import {Link} from "react-router-dom"; 

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
    linkToDetails?: boolean; // quand on est sur la page details du tweet on ne veut pas voir un lien qui référence aux détails du tweet 
};

const CONTENT_MAX_LENGTH = 180; 

/*On a une date au format ISO 8601 (string) 
new Date construit un objet Date à partir du string "2026-07-01T09:12:00.000Z"
Date comprend le format ISO 8601 et renvoie "1er juillet 2026 à 09:12:00 UTC"
toLocateString est une méthode de l'objet Date qui permet de passer à ça "01/07/2026 11:12:00"
 et fr-FR c'est juste le param pour dire qu'on veut le format fr jour/mois/annee, heure sur 24h */

// l'opérateur && renvoie l'expression de droite si la condition est vraie 
export const TweetPreview = ({tweet, linkToDetails = true}: TweetPreviewProps) : React.ReactElement => {
    
    //Question 1 : ce tweet est long ? 
    const isLong: boolean = tweet.content.length > CONTENT_MAX_LENGTH; 

    //Question 2 : l'user a cliqué sur le bouton ? 
    const [isExpanded, setIsExpanded] = useState<boolean>(false); 
    //Contenu à afficher si tweet est long et que l'user n' a pas déplié on tronque, sinon on affiche le tweet
    const visibleContent: string = isLong && !isExpanded ? tweet.content.slice(0, CONTENT_MAX_LENGTH) + "..." : tweet.content; 
    return (
        <article>
            <h3>{tweet.authorName}</h3>
            <p>@{tweet.authorHandle} {new Date(tweet.createdAt).toLocaleString("fr-FR")}</p>

            
            {tweet.image !== undefined && (
                linkToDetails ? (
                <Link to={`/tweets/${tweet.id}`}>
                    <img 
                        className="tweet-image"
                        src={tweet.image.url}
                        alt={tweet.image.alt}
                    />
                </Link>
                ) : (
                    <img 
                        className="tweet-image"
                        src={tweet.image.url}
                        alt={tweet.image.alt}
                    />
                )
            )}

            <p>{visibleContent}</p> 
            {isLong && (
                <button
                    type="button"
                    onClick={() => setIsExpanded((previous) => !previous)}
                >
                {isExpanded ? "Voir moins" : "Voir plus"}
                </button> 
            )}

            {linkToDetails && (
                <Link to={`/tweets/${tweet.id}`}>Voir la discussion</Link>
            )}

        </article>
        //le bouton ne s'affiche que le si le tweet est long 
    );
}; 


/*TweetPreview 3 questions en recevant un tweet: 
est ce qu'il fait + de 180 caractères > non, il affiche tel quel 
oui, on ne peut pas tout afficher, il faut tronquer et proposer un bouton 
on vérifie avec tweet.content.length > 180 

est ce que l'user veut voir la suite ? >non j'affiche les 180 1ers caractères + …
si oui, j'affiche le contenu entier donc utilisation de useState 
ex cm : const [isExpanded, setIsExpanded] = useState<boolean>(false);
isExpanded c'est la réponse de si l'user veut voir la suite et setExpanded c'est le bouton pour changer la réponse*/


