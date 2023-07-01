import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Event  from './components/event';
import Gallery from './components/gallery';
import Story  from './components/story'



function App() {
  return (
    <div className="App">
    <NavBar/>
    <Routes>
        {/* <Route exact path="/" element={<Rockets />} /> */}
        <Route path="/events" element={<Event />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/story" element={<Story />} />

      </Routes>
     
    </div>
  );
}

export default App;
