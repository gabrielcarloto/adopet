import { ApolloProvider } from '@apollo/client';
import { MotionConfig } from 'framer-motion';
import { BrowserRouter } from 'react-router-dom';
import { client } from './lib/apollo';
import Router from './Router';

import './styles.css';

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <MotionConfig reducedMotion="user">
          <Router />
        </MotionConfig>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
