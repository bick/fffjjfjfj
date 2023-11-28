import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode
} from "react";
import { supabase } from "./supabaseClient";
import { useRouter } from "next/router";
import { Session, User } from "@supabase/supabase-js";

// Define a type for the context value
type ContextType = {
  user: User | null;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
};

// Create context with initial values
const Context = createContext<ContextType>({
  user: null,
  loginWithGoogle: async () => {},
  logout: async () => {}
});

// Define a type for the provider's props if needed
type ProviderProps = {
  children: ReactNode;
};

const Provider: React.FC<ProviderProps> = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const getActiveSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error("Error getting active session:", error);
        return;
      }
      setSession(data.session);
      setUser(data.session?.user ?? null);
    };
    getActiveSession();

    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((event, currentSession) => {
      setSession(currentSession);
      setUser(currentSession?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const loginWithGoogle = async () => {
    await supabase.auth.signIn({
      provider: "google"
    });
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.push("/");
  };

  const exposed: ContextType = {
    user,
    loginWithGoogle,
    logout
  };

  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export const useUser = () => useContext(Context);

export default Provider;
