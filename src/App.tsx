import { useEffect, useState } from 'react';
import classNames from 'classnames';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './Home';

import './styles.css';

const baseURL = import.meta.env.VITE_BASE_URL;
const hostedBaseURL = import.meta.env.VITE_HOSTED_BASE_URL;

function App() {
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    const url = window.location.href;
    if (url === baseURL || url === hostedBaseURL) setIsHomePage(true);
  });

  return (
    <div
      className={classNames(
        'w-screen max-w-full min-h-screen bg-shape-1 bg-no-repeat bg-95% md:bg-560',
        {
          'bg-brand-primary': isHomePage,
        },
      )}
    >
      <div className="flex flex-col bg-shape-2 bg-no-repeat bg-right-top-12 md:bg-right-top-10 xl:bg-right-top-5 md:bg-134">
        <Header />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
