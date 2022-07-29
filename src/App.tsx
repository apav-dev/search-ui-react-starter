import { useSearchActions } from "@yext/search-headless-react";
import {
  SearchBar,
  StandardCard,
  VerticalResults,
} from "@yext/search-ui-react";
import { useEffect } from "react";

const App = () => {
  const searchActions = useSearchActions();

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
};

export default App;
