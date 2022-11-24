import { createContext, useContext, useState } from "react";

const LoadingContext = createContext({
  progress: 0,
  setProgress: null,
});

export function LoadingProvider({ children }) {
  const [progress, setProgress] = useState(0);
  const value = { progress, setProgress };
  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within LoadingProvider");
  }
  return context;
}