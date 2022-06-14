import { Suspense } from "react";
import "./App.css";
import Axios from "./main-components/Axios";
import Fetch from "./main-components/Fetch";
import ReactQuery from "./main-components/ReactQuery";
import Swr from "./main-components/Swr";

function App() {
  return (
    <div className="App">
      {/* <Fetch />
      <Axios />
      <Swr /> */}
      <ReactQuery />
    </div>
  );
}

export default App;
