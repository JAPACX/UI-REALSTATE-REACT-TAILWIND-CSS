

import './App.css';
import Nav from './components/Nav/Nav';
import Home from './views/Home/Home';
import Footer from './components/Footer/Footer';
import { useState, useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

//componentes de rutas
import Login from './views/Login/Login'
import Buy from './views/Buy/Buy'
import SellAndRent from './views/SellAndRent/SellAndRent'
import JoinWithUs from './views/JoinWithUs/JoinWithUs'
import Contact from './views/Contact/Contact'
import AboutUs from './views/AboutUs/AboutUs'
import OurProjects from './views/OurProjects/OurProjectsP'
import Detail from './components/Detail/Detail';

function App() {

  const location = useLocation();
  const navigate = useNavigate();

  // Simulacion de seguridad
  const [access, setAccess] = useState(false)
  let username = 'jepacheco98@gmail.com'
  let password = '12345'

  function login(userData) {
    if (userData.email === username && userData.password === password) {
      setAccess(true);
      navigate('/Home');
    }
    else {
      alert('Datos incorrectos informacion en el Readme https://github.com/JAPACX/UI-REALSTATE-REACT-TAILWIND-CSS')
    }
  }
  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  return (
    <div className='w-85vw flex flex-col items-center justify-center '  >
      {location.pathname !== '/' && <Nav setAccess={setAccess} />}
        <Routes>
          <Route path='/'
            element={<Login
              login={login}
            />}
          />
          <Route path="/Home" element={<Home />} />
          <Route path="/Buy" element={<Buy />} />
          <Route path="/SellAndRent" element={<SellAndRent />} />
          <Route path="/OurProjects" element={<OurProjects />} />
          <Route path="/JoinWithUs" element={<JoinWithUs />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path='/detail/:id' element={<Detail />} />

        </Routes>
        {location.pathname !== '/' && <Footer />}
    </div>
  );
}

export default App;
