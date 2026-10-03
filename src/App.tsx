import './App.css'
import {initialTweets} from "./data/tweets"; 
import {TweetsList} from "./components/TweetsList"; 


const App = (): React.ReactElement => {
  return(
    <main>
      <h1>Fil de tweets</h1>
      <TweetsList tweets={initialTweets} />
    </main>
  ); 
}; 

export default App; 