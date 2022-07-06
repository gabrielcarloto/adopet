import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Shapes from './components/Shapes';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

export default function Router() {
  return (
    <Shapes>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
      </Routes>
      <Footer />
    </Shapes>
  );
}
