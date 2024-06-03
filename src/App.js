import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout.js';
import Bookingcontainer from './components/Booking_container'
import About from './components/About'
import Service from './components/Service'
import Rooms from './components/Rooms'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Bookingcontainer />} />
            <Route path='about' element={<About />} />
            <Route path='service' element={< Service />} />
            <Route path='rooms' element={<Rooms />} />
            <Route path='gallary' element={<Gallery />} />
            <Route path='contact' element={<Contact />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
