import {
  SearchBar,
  StandardCard,
  VerticalResults,
} from "@yext/answers-react-components";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center px-4 py-6">
      <div className="w-full max-w-5xl">
        <SearchBar />
        <VerticalResults CardComponent={StandardCard} />
      </div>
    </div>
  );
}

export default App;
