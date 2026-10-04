import './App.css'
import {Outlet} from "react-router-dom";  
import {useState} from "react"; 
import {initialTweets} from "./data/tweets"; 
import {Tweet} from "./types/Tweet"; 
import {TweetsContext} from "./contexts/TweetsContext"; 
import type {TweetsContextValue} from "./contexts/TweetsContext"; 


const App = (): React.ReactElement => {
  //état tweets : source de vérité unique 
  const [tweets, setTweets] = useState<Array<Tweet>>(initialTweets); 

  // l'objet diffusé 
  const context: TweetsContextValue = {tweets}; 

  return(
    <>
      <header>
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