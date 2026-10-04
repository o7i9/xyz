import { TweetsList } from "../components/TweetsList";
import {useContext} from "react"; 
import {TweetsContext} from "../contexts/TweetsContext"; 
import {TweetForm} from "../components/TweetForm"; 
import { useDocumentTitle } from "../hooks/useDocumentTitle";


const TweetsMasterPage = (): React.ReactElement => {

  useDocumentTitle("Acceuil"); 

  const {tweets, addTweet, toggleLike} = useContext(TweetsContext)!; //! dit à ts "je te garants que ce n'est pas undefined"
  // on ne veut avoir que les tweets originaux et pas les réponses 


  const tweetsOriginaux = tweets.filter((tweet) => tweet.parentId === undefined); 

  //la méthode reduce parcourt un tableau et accumule un résultats ici le nb de likes avec sum l'accumulateur et 0 valeur de départ
  const totalLikes = tweetsOriginaux.reduce(
    (sum, tweet) => sum + tweet.likes, 0, 
  ); 

  return (
    <>
      <h1>Fil de tweets</h1>
      <p>
        {tweetsOriginaux.length} tweet{tweetsOriginaux.length > 1 ? "s" : ""} —{" "}
        {totalLikes} J'aime au total
      </p>
      <TweetForm onSubmit={addTweet} />
      <TweetsList tweets={tweetsOriginaux} onToggleLike={toggleLike}/>
    </>
  );
};

export default TweetsMasterPage;