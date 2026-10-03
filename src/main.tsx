import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TweetsMasterPage from './pages/TweetsMasterPage'
import TweetDetailsPage from './pages/TweetDetailsPage'
import NotFoundPage from './pages/NotFoundPage'

/*BrowserRouter c'est la boite qui enveloppe toute l'app et qui écoute l'url du navigateur 
Routes c'est le conteneur qui range toutes les routes et choisit laquelle afficher 
Route : pour telle URL = affiche tel composant */

// Ce fichier c'est le point d'entrée de notre app react 
// quand URL commence par / on affche le layout App (header + Outlet) 
// Les routes à l'intérieur c'est des enfants, elles viendront compléter le outlet en fct de la page 
// index c'est la page par défaut du parent / qui affichera TweetsMasterPage
// la route dynamique tweets/:id en fct de l'id du tweet qui sera détaillé dans TweetDetailsPage
// et la route page not found, le * signifie n'importe quelle URL qui n'a pas fonctionné et cette route doit toujours être en denrier sinon elle écrase les autres routes

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}> 
          <Route index element={<TweetsMasterPage />} />
          <Route path="tweets/:id" element={<TweetDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
