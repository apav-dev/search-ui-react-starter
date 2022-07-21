import { useAnswersActions } from "@yext/answers-headless-react";
import {
  SearchBar,
  StandardCard,
  VerticalResults,
} from "@yext/answers-react-components";
import { useEffect } from "react";

function App() {
  const searchActions = useAnswersActions();

  useEffect(() => {
    searchActions.setVertical("products");
  }, []);

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
