import { Route, Routes } from 'react-router-dom';
import { RequireAuth } from './components/contexts/auth';
import Footer from './components/Footer';
import Header from './components/Header';
import Shapes from './components/Shapes';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Pets from './pages/Pets';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

export default function Router() {
  return (
    <Shapes>
      <div className="flex flex-col w-screen max-w-full min-h-screen items-center">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Signup />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/pets" element={<Pets />} />
          <Route
            path="/contato"
            element={
              <RequireAuth>
                <Contact />
              </RequireAuth>
            }
          />
          <Route
            path="/contato/:id"
            element={
              <RequireAuth>
                <Contact />
              </RequireAuth>
            }
          />
          <Route
            path="/perfil"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Shapes>
  );
}
