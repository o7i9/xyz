import {Link} from "react-router-dom"; 
import { useDocumentTitle } from "../hooks/useDocumentTitle";


const NotFoundPage = (): React.ReactElement => {

  useDocumentTitle("Page introuvable");
  return (
    <section>
      <h1>Page introuvable</h1>
      <Link to="/"> Retour à l'accueil</Link>
    </section>
  );
};

export default NotFoundPage; 