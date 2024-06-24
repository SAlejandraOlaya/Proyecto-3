import Home from './views/Home/Home.jsx';
import Header from './components/Header/Header';
import MyAppointments from './views/MyAppointments/MyAppointments';
import Myfooter from './components/Footer/Myfooter.jsx';
import Register from './views/Register/Register.jsx'
import Login from './views/Login/Login.jsx'
import NewAppointment from './views/NewAppointment/NewAppointment.jsx';
import{Routes, Route} from 'react-router-dom'
import AboutUs from './views/AboutUs/AboutUs.jsx';
function App() {

  return (
    <div>
      <Header />
      <Routes>
      <Route path="/Inicio" element= {<Home/>} />
      <Route path="/About Us" element= {<AboutUs/>} />
      <Route path="/Register" element= {<Register/>} />
      <Route path="/Login" element= {<Login/>} />
      <Route path="/Mis turnos" element= {<MyAppointments/>} />
      <Route path="/Agendar cita" element= {<NewAppointment/>} />
      </Routes>
      <Myfooter />

    </div>
  );
};

export default App;
