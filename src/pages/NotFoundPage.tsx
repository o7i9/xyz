import {Link} from "react-router-dom"; 

const NotFoundPage = (): React.ReactElement => {
  return (
    <section>
      <h1>Page introuvable</h1>
      <Link to="/"> Retour à l'accueil</Link>
    </section>
  );
};

export default NotFoundPage; 