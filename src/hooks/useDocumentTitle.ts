// en fct de l'écran sur lequel on est, on vuet qu'il affiche le titre souhaité au lieu de toujours xyz 
// pour ça, on utilise useEffect : hook personnalisé 

/*syntaxe du hook 
const useMonHook = () => {
  // utilise useState, useEffect, useContext... comme un composant
  return quelqueChose;
}; */
import {useEffect} from "react"; 

export const useDocumentTitle = (title: string) : void => {
    useEffect(() => {
        document.title = title + " | XYZ"; 
    }, [title]); 
}; 

// le tableau de dépendance [title] dit a react quand réexécuter l'effet cad quand la valeur de title change 