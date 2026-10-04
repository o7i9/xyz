import { initialTweets } from "../data/tweets";
import { TweetsList } from "../components/TweetsList";

const TweetsMasterPage = (): React.ReactElement => {
  // on ne veut avoir que les tweets originaux et pas les réponses 
  const tweetsOriginaux = initialTweets.filter((tweet) => tweet.parentId === undefined); 
  return (
    <>
      <h1>Fil de tweets</h1>
      <TweetsList tweets={tweetsOriginaux} />
    </>
  );
};

export default TweetsMasterPage;