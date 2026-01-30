import React, { createContext, useMemo, useState } from "react";

const SESSION_KEY = "demo.session";

// セッション情報を保持するコンテキスト
export const AuthContext = createContext(null);

const getInitialSession = () => {
  const stored = sessionStorage.getItem(SESSION_KEY);
  if (!stored) {
    return null;
  }
  try {
    return JSON.parse(stored);
  } catch {
    return null;
  }
};

export function AuthProvider({ children }) {
  const [session, setSessionState] = useState(getInitialSession);

  const setSession = (nextSession) => {
    setSessionState(nextSession);
    if (nextSession) {
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(nextSession));
    } else {
      sessionStorage.removeItem(SESSION_KEY);
    }
  };

  const value = useMemo(() => ({ session, setSession }), [session]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
