import {useState} from "react"; 
import type {SubmitEvent} from "react"; 


const CONTENT_MAX_LENGTH = 200; 

type TweetFormProps = {
    onSubmit: (content: string) => void; 
}; 

export const TweetForm = ({onSubmit} : TweetFormProps) : React.ReactElement => {
    //L'état local content 
    const [content, setContent] = useState<string>("");
    const remainingChars = CONTENT_MAX_LENGTH - content.length; 
    // le text area affiche content, si on modifie content avec setContent le textarea se met à jour auto


    // retourne une chaine de caractères sans les espaces, tabs, sauts de lignes mais ne modifie pas content pour éviter de publier des tweets vides
    const trimmedContent = content.trim(); 
    // On vérifie que le contenu n'est pas vide ou qu'il ne dépasse pas la limite de caractères fixée 
    const isSubmitDisabled = trimmedContent.length === 0 || content.length > CONTENT_MAX_LENGTH;

    // on reçoit un event (event) de type submit<HTMLFormElement>
    const handleSubmit = (event: SubmitEvent<HTMLFormElement>) : void => {
        event.preventDefault(); //empêche le rechargement de la page qui est le comportement par défaut d'un form HTML soumis
        onSubmit(trimmedContent);
        setContent(""); //le champ est vidé et le bouton publier devient à nouveau grisé
    }
    return (
        <form onSubmit={handleSubmit}>
            
            <textarea
                value={content}
                onChange={(event) => setContent(event.target.value)}
                placeholder="Quoi de neuf ?"
                rows={4}
            />

            <p>{remainingChars} caractères restants</p>
            
            <button type="submit" disabled={isSubmitDisabled}>
                Publier
            </button>

        </form>
    ); // quand la valeur de disabled est true, le bouton est grisée et non cliquable 
}; 