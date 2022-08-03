import { ApolloProvider } from '@apollo/client';
import { MotionConfig } from 'framer-motion';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './contexts/auth';
import { client } from './lib/apollo';
import Router from './Router';

import './styles.css';

function App() {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <BrowserRouter>
          <MotionConfig reducedMotion="user">
            <Router />
          </MotionConfig>
        </BrowserRouter>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
