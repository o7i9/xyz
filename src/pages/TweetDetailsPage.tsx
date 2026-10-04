import { useContext } from "react";
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom"; 
import {TweetPreview} from "../components/TweetPreview";
import {TweetsList} from "../components/TweetsList";
import { TweetsContext } from "../contexts/TweetsContext";
import { useDocumentTitle } from "../hooks/useDocumentTitle";




const TweetDetailsPage = (): React.ReactElement => {

  const { id } = useParams<{ id: string }>(); // pour récup l'id dynamique de l'url tweets/:id
  const { tweets, toggleLike } = useContext(TweetsContext)!;
  
  // recherche du tweet principal, si aucun correspond la méthode renvoie undefined 
  const tweet = tweets.find((tweet) => tweet.id === id); 

  useDocumentTitle(tweet ? `Tweet de ${tweet.authorName}` : "Tweet introuvable");

  // si aucun tweet correspond à l'id : 
  if (tweet === undefined ) {
    return (
      <section>
        <h1>Ce tweet n'existe pas</h1>
        <Link to="/"> Retour au fil</Link>
      </section>
    ); 
  }

  //recherche les réponses au tweet d'id concerné 
  const replies = tweets.filter((tweet) => tweet.parentId === id); 
  return (
    <section>
      <h1>Tweet</h1>

      {/* Tweet principal : linkToDetail={false} car on est déjà sur sa page */}
      <TweetPreview tweet={tweet} linkToDetails={false} onToggleLike={toggleLike}/>

      <h2>Réponses</h2>
      {replies.length === 0 ? (
        <p>Aucune réponse pour le moment.</p>
      ) : (
        <TweetsList tweets={replies} onToggleLike={toggleLike}/>
      )}

      <Link to="/">Retour au fil</Link>
    </section>
  ); 
  
};



export default TweetDetailsPage;