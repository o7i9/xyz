import type {Tweet} from "../types/Tweet"; 
import {TweetPreview} from "./TweetPreview"; 

/*Rappel cours :
type EventsListProps = {
  events: Array<Event>;
  onToggleRegistration: (id: string) => void;
};

export const EventsList = ({ events, onToggleRegistration }: EventsListProps): ReactElement => {
  return (
    <section>
      {events.map((event) => (
        <EventCard
          key={event.id}
          event={event}
          onToggleRegistration={onToggleRegistration}
        />
      ))}
    </section>
  );
};*/

type TweetsListProps = {
    tweets: Array<Tweet>; 
}; 

export const TweetsList = ({tweets} : TweetsListProps) : React.ReactElement => {
    return (
        <section>
            {tweets.map((tweet) => ( //le map transforme chaque tweet en tweetpreview 
                <TweetPreview
                key={tweet.id}
                tweet={tweet}
                />
            ))}
        </section>
    ); 
}; 
