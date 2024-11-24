import "./App.css";
import HomePage from "./Components/Pages/HomePage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <HomePage />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
