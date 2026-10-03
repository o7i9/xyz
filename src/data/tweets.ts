import type { Tweet } from "../types/Tweet";

export const initialTweets: Tweet[] = [
  {
    id: "1",
    authorName: "Alice Martin",
    authorHandle: "alice",
    content: "Je viens de terminer « La Horde du Contrevent ». Impossible de poser le livre avant la dernière page. Une claque.",
    createdAt: "2026-07-01T08:15:00.000Z",
  },
  {
    id: "2",
    authorName: "Bob Dupont",
    authorHandle: "bob",
    content: "Rien de tel qu'un bon roman pour s'évader. Ma PAL déborde mais je continue d'en acheter, c'est plus fort que moi 📚",
    createdAt: "2026-07-01T09:02:00.000Z",
  },
  {
    id: "3",
    authorName: "Chloé Bernard",
    authorHandle: "chloe",
    content: "Mon coin lecture du dimanche matin. Café, plaid et un bon polar : la combinaison parfaite.",
    image: {
      url: "https://i.pinimg.com/736x/aa/36/53/aa36530f1bd586bafd67c35c27cc8bab.jpg",
      alt: "Coin lecture cosy avec un fauteuil, un plaid et une tasse de café près d'une fenêtre",
    },
    createdAt: "2026-07-01T10:30:00.000Z",
  },
  {
    id: "4",
    authorName: "David Lemoine",
    authorHandle: "david",
    content: "Petit rappel : lire 20 pages par jour, c'est environ 30 livres par an. La régularité bat l'intensité.",
    createdAt: "2026-07-01T11:10:00.000Z",
  },
  {
    id: "5",
    authorName: "Emma Rousseau",
    authorHandle: "emma",
    content: "Je ne sais pas vous, mais moi je corne les pages. Oui, j'assume. Un livre doit vivre, pas rester intact sur une étagère. Les annotations au crayon, les coins pliés, les marque-pages improvisés avec un ticket de caisse : c'est la trace de nos lectures, de nos humeurs, de nos pensées. Un livre neuf qui reste neuf n'a jamais vraiment été lu, il a juste été possédé.",
    createdAt: "2026-07-01T12:45:00.000Z",
  },
  {
    id: "6",
    authorName: "Fanny Girard",
    authorHandle: "fanny",
    content: "Conseil du jour : pour sortir d'une panne de lecture, relisez un livre que vous avez adoré. Ça relance la machine à coup sûr.",
    createdAt: "2026-07-01T13:20:00.000Z",
  },
  {
    id: "7",
    authorName: "Gabriel Noël",
    authorHandle: "gabriel",
    content: "Ma pile à lire de l'été est enfin prête. Objectif : 8 romans en deux mois. Qui se joint au défi ?",
    image: {
      url: "https://i.pinimg.com/736x/c7/f3/05/c7f3051829bfc071f44ce61f2beb9124.jpg",
      alt: "Pile de romans colorés posée sur une table en bois près d'une fenêtre ensoleillée",
    },
    createdAt: "2026-07-01T14:05:00.000Z",
  },
  {
    id: "8",
    authorName: "Hélène Petit",
    authorHandle: "helene",
    content: "Les bibliothèques municipales sont un trésor trop souvent oublié. Inscription gratuite, prêts illimités, calme absolu.",
    createdAt: "2026-07-01T15:00:00.000Z",
  },
  {
    id: "9",
    authorName: "Ibrahim Kader",
    authorHandle: "ibrahim",
    content: "Un livre audio dans les transports, c'est 40 minutes de lecture par jour sans effort. Testé et approuvé.",
    createdAt: "2026-07-01T16:30:00.000Z",
  },
  {
    id: "10",
    authorName: "Julie Moreau",
    authorHandle: "julie",
    content: "Coup de cœur du mois : « L'Ombre du vent » de Carlos Ruiz Zafón. Une lettre d'amour aux livres et à Barcelone.",
    createdAt: "2026-07-01T18:00:00.000Z",
  },
];