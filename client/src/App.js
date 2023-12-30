import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Detail from './components/detail/Detail';
import Form from './components/form/Form';
import LandingPage from './components/landingPage/LandingPage';
import Nav from './components/nav/Nav';

const App = () => {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='nav' element={<Nav />}/>
        <Route path='/detail/:id' element={<Detail />}/>
        <Route path='/form' element={<Form />}/>
      </Routes>
    </div>
  );
}

export default App;
