import { useState } from "react";

import "./index.css";
import DailyTimer from "./DailyTimer";

function App() {
  return (
    <div className="bg-slate-700 text-slate-300 grid  place-content-center h-screen w-screen font-mono">
      <DailyTimer />
    </div>
  );
}

export default App;
