import { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState({ isAdmin: false, userName: "Olga" });
  const { isAdmin } = state;
  const assignAdmin = () => {
    setState({ ...state, isAdmin: true });
  };
  return (
    <>
      <h1>Hello user, you is {isAdmin ? "SUPER ADMIN" : "a user"}</h1>
      <button onClick={assignAdmin}>Assign admin</button>
    </>
  );
}

export default App;
