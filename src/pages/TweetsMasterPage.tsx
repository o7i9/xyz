import { TweetsList } from "../components/TweetsList";
import {useContext} from "react"; 
import {TweetsContext} from "../contexts/TweetsContext"; 
import {TweetForm} from "../components/TweetForm"; 


const TweetsMasterPage = (): React.ReactElement => {

  const {tweets, addTweet} = useContext(TweetsContext)!; //! dit à ts "je te garants que ce n'est pas undefined"
  // on ne veut avoir que les tweets originaux et pas les réponses 
  const tweetsOriginaux = tweets.filter((tweet) => tweet.parentId === undefined); 
  return (
    <>
      <h1>Fil de tweets</h1>
      <TweetForm onSubmit={addTweet} />
      <TweetsList tweets={tweetsOriginaux} />
    </>
  );
};

export default TweetsMasterPage;