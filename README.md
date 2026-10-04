# Projet individuel - XYZ

Programmation Web - L3 MIASHS - 2026 / 2027

- Prénom : Myriam 
- Nom : Yahi
- Adresse mail universitaire : myriam.yahi4@etu.univ-lorraine.fr
- Groupe de TD : 3
- Adresse du dépôt GitHub privé : https://github.com/o7i9/xyz.git

## TD 01

### TD 01 - Élements réalisés

1. Modéliser un tweet 
2. Créer le composant TweetPreview
3. Afficher conditionnellement l'image
4. Afficher une liste de tweets
5. Ajouter "Voir plus / voir moins" 


### TD 01 - Bonus réalisés

- Aucun pour le moment 

### TD 01 - Questions de compréhension 
1. Trajet d'un tweet depuis App jusqu'à TweetPreview : d'abord les données (initialTweets) sont importées dans App puis dans TweetList, les tweets sont transformés en TweetPreview. 

2. La propriété image est optionnelle image?, si pas d'image alors c'est undefined et la balise img n'est pas affichée. 

3. On a choisi tweet.id comme key car c'est stable alors que si on prend l'index par exemple n'est pas fiable car si on supprime ou ajoute des élements, les index se décalent. 

4. isExpanded doit être un état React ...

### TD 01 - Déclaration d'usage de l'IA générative

- Utilisation de l'IA pour la génération de 10 Tweets avec les codes ISO 8601
- pour convertir la date du format iso 8601 en format lisible (recherche de l'utilisation de la fonction toLocateString)
- rappel de syntaxe pour les balises html (comme img)
- je comprends la syntaxe css mais j'ai utilisé l'ia pour qu'elle me guide sur comment afficher une image par ex, avec quelle attribut choisir et les valeurs pour que le rendu soit plus joli
- explications et syntaxe de la forme fonctionnelle du setter pour la fonctionnalité Voir plus et button 
- enfin, utilisation de l'ia pour sublimer l'interfaceavec du css





## TD 02

## Notes perso 
App ne contient plus le contenu d'une page, mais ce qui est commun à toutes les pages comme le header. 
Le contenu réel de chq page est ajouté à la place de outlet plus tard 

### TD 02 - Élements réalisés

1. Créer un layout partagé
2. Déclarer les routes
3. Créer la page principale
4. Lier les tweets à leur page de détail
5. Afficher un tweet et ses réponses
6. Gérer une route inconnue

### TD 02 - Bonus réalisés

- Aucun pour le moment 


### TD 02 - Déclaration d'usage de l'IA générative

- comprendre la syntaxe du browserrouter, routes et des routes pour modifier le main 
comprendre la syntaxe d'un Link pour les ajouter dans TweetPreview 
- Etape 5 : comprendre comment utliser useParams<{ id: string }>() 

### Questions de compréhension TD02
1. Différence entre Link et <a> : <a> envoie une nouvelle requete HTTP au serveur et recharge entièrement la page  alors que Link intercèpte le clique et laisse React envoyer la route qui convient dans outlet pour que ce soit plus fluide et sans rechargement. 

2. App a le role de layout partagé donc tout ce qui est commun a toutes "nos pages" ici c'était le header et puis le outlet où la page va s'afficher. 
Outlet c'est l'emplacement ou react injecte le composant 
et puis les composants comme TweetsmasterPage, NotFoundpage et TweetDetailsPage c'est les contenus variable selon l'url passée et ils sont montrés dans outlet. 

3. Une route inconnue c'est une url qui correspond à aucune route qu'on a crée par ex /livres donc on affiche Page not found. Alors qu'un tweet non trouvé, l'url est valide ex /tweet/87 mais l'id = 87 n'existe pas dans initialTweets donc on affiche "ce tweet 'existe pas". 




## TD 03

### TD 03 - Élements réalisés

1. Faire évoluer le modèle 
2. Remonter l'état dans le layout
3. Créer un formulaire contrôlé
4. Publier un tweet
5. Ajouter et retirer une mention "J'aime"
6. Personnaliser le titre avec useEffect
7. Personnaliser l'identité visuelle

### Notes perso 
Avant ce td, on avait des données statiques (initialTweets), le but de ce td c'est d'avoir des données changeantes et pouvoir publier un tweet, liker un tweet et que les données deviennent modifiables. 

Au lieu que chaque page ait sa copie de initialTweets on met un seul état tweets dans le composant parent de toutes les pages donc App (ancetre commun) et toutes les pages lisent cet état, comme ça pas de désynchronisation et toutes les pages voient les modifications. 

Pour cela on va utiliser useContext et une fct callback que le parent (App) passe à l'enfant pour qu'il appelle quand il en a besoin pour faire des modifs. 


Fonctionnement de TweetForm : 
RENDU INITIAL
└─ content = "" → bouton grisé

UTILISATEUR TAPE "B"
└─ onChange → setContent("B") → re-render

UTILISATEUR TAPE "..."
└─ onChange à chaque lettre → re-render à chaque fois

UTILISATEUR CLIQUE "PUBLIER"
└─ onSubmit(event)
   ├─ preventDefault()          (pas de reload)
   ├─ onSubmit("Bonjour...")    (le parent reçoit le contenu)
   └─ setContent("")            (champ vidé)

RE-RENDER
└─ content = "" → bouton grisé à nouveau

Élément	et Son rôle
- useState (content)	La mémoire du formulaire : ce que l'utilisateur a tapé
- handleSubmit	Le chef d'orchestre : bloque le reload, prévient le parent, vide le champ
- onSubmit (prop)	La télécommande vers le parent : « voilà le contenu, à toi de jouer »



### TD 03 - Bonus réalisés

- Aucun pour le moment 

### TD 03 - Déclaration d'usage de l'IA générative

- comprendre ce qu'il faut faire dans l'étape 3 pour créer le formulaire contrôlé, notamment la syntaxe des caractéristiques à implémenter dans notre TweetForm 
- la syntaxe du text area, je ne comprenais pas du tout et le fonctionnement de TweetForm avant de pouvoir le coder (notes perso pour la logique)
- débuggage des erreurs présentes dans la console (erreurs d'innatention pour les imports d etype par exemple)
- comprendre la syntaxe du hook useEffect ppur changer le titre en fct de l'acran qu'on (acceuil, fil de tweet, etc)

### Questions de compréhension du TD 03 
1. 
2. 
3. 
