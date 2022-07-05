import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Shapes from './components/Shapes';
import Home from './pages/Home';

export default function Router() {
  return (
    <Shapes>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Shapes>
  );
}
