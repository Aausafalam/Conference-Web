import { Routes,Route } from 'react-router';
import './App.css';
import Banner from './components/Banner/Banner';
import CounterUP from './components/CounterUP/CounterUP';
import Header from './components/Header/Header';
import Nav_Bar from './components/Nav_Bar/Nav_Bar';
import Welcome from './components/Welcome/Welcome';
import Dates from './components/Dates/Dates';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<>
          <Header/>
      <Nav_Bar/>
      <Banner/>
      <Welcome/>
      <CounterUP/>
      <Dates/>
        </>}/>
      </Routes>
      
    </div>
  );
}

export default App;
