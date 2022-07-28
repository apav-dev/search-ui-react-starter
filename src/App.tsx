import { Pagination, SearchBar, VerticalResults } from "@yext/search-ui-react";
import BeverageCard from "./components/cards/BeverageCard";
import TileFacet from "./components/TileFacet";

function App() {
  return (
    <div className="flex justify-center px-4 py-6">
      <div className="w-full max-w-5xl">
        <SearchBar />
        <div className="flex">
          <div>
            <TileFacet fieldId="c_usState" displayName="State" />
            <TileFacet fieldId="c_originCountry" displayName="Country" />
          </div>
          <VerticalResults
            customCssClasses={{
              verticalResultsContainer:
                "grid md:grid-cols-2 lg:grid-cols-3 gap-4 grid-cols-1",
            }}
            CardComponent={BeverageCard}
          />
        </div>
        <Pagination />
      </div>
    </div>
  );
}

export default App;
