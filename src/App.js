import { Routes,Route } from 'react-router';
import Home from './Pages/Home/Home';
import './App.css';



function App() {


  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
