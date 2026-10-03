import { initialTweets } from "../data/tweets";
import { TweetsList } from "../components/TweetsList";

const TweetsMasterPage = (): React.ReactElement => {
  return (
    <>
      <h1>Fil de tweets</h1>
      <TweetsList tweets={initialTweets} />
    </>
  );
};

export default TweetsMasterPage;