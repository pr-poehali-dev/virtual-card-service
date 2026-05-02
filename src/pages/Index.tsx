import { useEffect, useState } from "react";
import Landing from "@/components/Landing";
import Dashboard from "@/components/Dashboard";
import AuthModal from "@/components/AuthModal";

interface User {
  id: number;
  email: string;
  telegram_username: string;
}

const Index = () => {
  const [user, setUser] = useState<User | null>(null);
  const [authMode, setAuthMode] = useState<"login" | "register" | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("auth_user");
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        localStorage.removeItem("auth_user");
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("auth_user");
    setUser(null);
  };

  if (user) {
    return <Dashboard onBack={handleLogout} />;
  }

  return (
    <>
      <Landing onAuth={(mode) => setAuthMode(mode)} />
      <AuthModal
        open={authMode !== null}
        initialMode={authMode || "login"}
        onClose={() => setAuthMode(null)}
        onSuccess={(u) => {
          setUser(u);
          setAuthMode(null);
        }}
      />
    </>
  );
};

export default Index;
