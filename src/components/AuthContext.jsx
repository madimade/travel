import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext(null);

const demoUser = {
  name: "Mohamed Ibrahim",
  email: "mohamed@example.com",
  avatar: "MI",
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem("wayfare_user");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (user) localStorage.setItem("wayfare_user", JSON.stringify(user));
    else localStorage.removeItem("wayfare_user");
  }, [user]);

  const value = useMemo(() => ({
    user,
    login: (email, password) => {
      if (!email || !password) return { ok: false, message: "Enter your email and password." };
      setUser({ ...demoUser, email });
      return { ok: true };
    },
    signup: (name, email, password) => {
      if (!name || !email || !password) return { ok: false, message: "Complete all fields." };
      setUser({ name, email, avatar: name.split(" ").map(x => x[0]).slice(0,2).join("").toUpperCase() });
      return { ok: true };
    },
    logout: () => setUser(null),
    updateProfile: (data) => setUser(prev => ({ ...prev, ...data })),
  }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
