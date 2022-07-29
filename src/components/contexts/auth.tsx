import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export interface User {
  id: string;
  name: string;
  username: string;
  picture: string | null;
}

interface AuthContextProps {
  signed: boolean;
  user?: User;
  signIn(userData: User): void;
  signOut(): void;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps,
);

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>();
  const [signed, setSigned] = useState(false);

  useEffect(() => {
    user
      ? localStorage.setItem('user', JSON.stringify(user))
      : localStorage.removeItem('user');
  }, [user]);

  useMemo(() => {
    const lsUser = localStorage.getItem('user');

    if (lsUser) {
      const userData = JSON.parse(lsUser);
      setUser(userData);
      setSigned(true);
    }
  }, []);

  const signIn = (userData: User) => {
    setUser(userData);
    setSigned(true);
  };

  const signOut = () => {
    setUser(undefined);
    setSigned(false);
  };

  return (
    <AuthContext.Provider value={{ signed, signIn, signOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const { user, ...auth } = useContext(AuthContext);

  return { ...auth, user: user as User };
}

export function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.signed) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
