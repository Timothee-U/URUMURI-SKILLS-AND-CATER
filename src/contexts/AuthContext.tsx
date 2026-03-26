import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type User = {
  id: string;
  email: string;
  user_metadata?: { full_name?: string };
};

type LocalUser = User & {
  password: string;
  role: string;
  fullName: string;
};

type Session = {
  user: User;
};

type AuthContextType = {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ user: User | null; error: string | null }>;
  signUp: (email: string, password: string, fullName: string) => Promise<{ user: User | null; error: string | null }>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  loading: true,
  signIn: async () => ({ user: null, error: null }),
  signUp: async () => ({ user: null, error: null }),
  signOut: async () => {},
});

export const useAuth = () => useContext(AuthContext);

const STORAGE_KEY = 'urumuri_auth';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load session from localStorage
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const sessionData = JSON.parse(stored);
        setSession(sessionData);
        setUser(sessionData.user);
      } catch (error) {
        console.error('Failed to parse stored session:', error);
        localStorage.removeItem(STORAGE_KEY);
      }
    }
    setLoading(false);
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      // Get users from localStorage
      const users = JSON.parse(localStorage.getItem('urumuri_users') || '[]');
      const user = users.find((u: LocalUser) => u.email === email && u.password === password);

      if (!user) {
        return { user: null, error: 'Invalid email or password' };
      }

      const sessionData = { user: { id: user.id, email: user.email, user_metadata: user.user_metadata } };
      setSession(sessionData);
      setUser(sessionData.user);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(sessionData));

      return { user: sessionData.user, error: null };
    } catch (error) {
      return { user: null, error: 'Login failed' };
    }
  };

  const signUp = async (email: string, password: string, fullName: string) => {
    try {
      // Get existing users
      const users = JSON.parse(localStorage.getItem('urumuri_users') || '[]');

      // Check if user already exists
      if (users.some((u: LocalUser) => u.email === email)) {
        return { user: null, error: 'User already exists' };
      }

      // Create new user
      const newUser = {
        id: Date.now().toString(),
        email,
        password, // In real app, this would be hashed
        user_metadata: { full_name: fullName },
        created_at: new Date().toISOString(),
      };

      users.push(newUser);
      localStorage.setItem('urumuri_users', JSON.stringify(users));

      const sessionData = { user: { id: newUser.id, email: newUser.email, user_metadata: newUser.user_metadata } };
      setSession(sessionData);
      setUser(sessionData.user);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(sessionData));

      return { user: sessionData.user, error: null };
    } catch (error) {
      return { user: null, error: 'Registration failed' };
    }
  };

  const signOut = async () => {
    setUser(null);
    setSession(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <AuthContext.Provider value={{ user, session, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
