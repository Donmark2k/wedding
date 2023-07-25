import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Event from './components/event';
// import Gallery from './components/gallery';
import Story from './components/story';
import Slide from './components/slide';
import Footer from './components/footer';
// import Gift from './components/gift';
// import Media from './components/media';
import Present from './components/present';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        {/* <Route path="/gifts" element={<Gift />} /> */}
        <Route path="/gifts" element={<Present />} />

      </Routes>
      <Slide />
      <Story />
      {/* <Gallery /> */}
      {/* <Media /> */}
      <Event />
      <Footer />

    </div>
  );
}

export default App;
