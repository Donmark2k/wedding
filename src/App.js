import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer';
import Present from './components/present';
import Home from './components/home';
import PaystackIntegration from './components/payment';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/pay" element={<PaystackIntegration />} />
        <Route path="/" element={<Home />} />
        <Route path="/gifts" element={<Present />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
