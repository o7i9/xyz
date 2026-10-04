import { createContext } from "react";
import type { Tweet } from "../types/Tweet";

export type TweetsContextValue = {
  tweets: Array<Tweet>; // ça c'est le format de ce qu'on va diffuser avec le haut parleur (createContext), ici ca sera que sur les tweets
  addTweet : (content: string) => void; 
};

/*createContext c'est le haut-parleur qu'on crée (= le canal de communication) avec le type d'infos qu'il va communiquer 
donc ici TweetsContextValue qui est le tableau de tweets ou undefined par défaut */
export const TweetsContext = createContext<TweetsContextValue | undefined>(
  undefined,
);