import './App.css'
import {Outlet} from "react-router-dom";  


const App = (): React.ReactElement => {
  return(
    <>
      <header>
        <h1>XYZ</h1>
      </header>

      <main>
        <Outlet/>
      </main>
    </>
  ); 
}; 

export default App; 