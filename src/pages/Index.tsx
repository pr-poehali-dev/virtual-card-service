import { useState } from "react";
import Landing from "@/components/Landing";
import Dashboard from "@/components/Dashboard";

type View = "landing" | "dashboard";

const Index = () => {
  const [view, setView] = useState<View>("landing");

  return view === "dashboard"
    ? <Dashboard onBack={() => setView("landing")} />
    : <Landing onDashboard={() => setView("dashboard")} />;
};

export default Index;
