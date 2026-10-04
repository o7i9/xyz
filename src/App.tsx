import './App.css'
import {Outlet} from "react-router-dom";  
import {useState} from "react"; 
import {initialTweets} from "./data/tweets"; 
import type {Tweet} from "./types/Tweet"; 
import {TweetsContext} from "./contexts/TweetsContext"; 
import type {TweetsContextValue} from "./contexts/TweetsContext"; 


const App = (): React.ReactElement => {
  //état tweets : source de vérité unique 
  const [tweets, setTweets] = useState<Array<Tweet>>(initialTweets); 


  const addTweet = (content: string) : void => {
    const newTweet: Tweet = {
      id: crypto.randomUUID(), 
      authorName: "Vous", 
      authorHandle: "Vous", 
      content: content, 
      createdAt: new Date().toISOString(), 
      likes: 0, 
      likedByMe: false, 
    }; 

    // création d'un nouveau tableau avec le 1er élément étant le nouveau tweet suivie d'une copie de tous les ancienes tweets avec un spread 
    //on utilise la forme fonctionelle car la nouvelle valeur de l'état (donc les tweets) dépend de l'ancienne (copie des anciens tweets)
    setTweets((previousTweets) => [newTweet, ...previousTweets]);
  }; 

  const toggleLike = (id: string) : void => {
    setTweets((previousTweets) => 
      previousTweets.map((tweet) => {
        if(tweet.id != id) {
          return tweet; //pas concerné donc renvoie juste le tweet tel quel 
        }
        // sinon 
        return {
          ...tweet, 
          likedByMe: !tweet.likedByMe, 
          likes: tweet.likedByMe ? tweet.likes - 1 : tweet.likes + 1,
        }; 
      }),
    ); 
  }; 

  // l'objet diffusé 
  const context: TweetsContextValue = {tweets, addTweet, toggleLike}; 

  return(
    <>
      <header>
        <img src="/xyz.png" alt="Logotype XYZ" className="logo" />
        <h1>XYZ</h1>
      </header>

      <main>
        <TweetsContext.Provider value={context}>
          <Outlet />
        </TweetsContext.Provider>
      </main>
    </>
  ); 
}; 

export default App; 