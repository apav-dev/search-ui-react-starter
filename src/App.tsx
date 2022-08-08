import {
  provideHeadless,
  VerticalResults as VerticalResultsData,
} from "@yext/search-headless-react";
import {
  SearchBar,
  UniversalResults,
  FocusedItemData,
  DropdownItem,
} from "@yext/search-ui-react";
import { searchConfig } from "./config/searchConfig";
import { Product } from "./types/products";
import classnames from "classnames";

const App = (): JSX.Element => {
  const entityPreviewSearcher = provideHeadless({
    ...searchConfig,
    headlessId: "entity-preview-searcher",
  });

  const renderProductPreview = (product: Product): JSX.Element => {
    // getting the smallest thumbnail image from the primaryPhoto field
    const numThumbnails = product.primaryPhoto?.image.thumbnails?.length || 0;
    const productThumbnail =
      product.primaryPhoto?.image.thumbnails?.[numThumbnails - 1];

    return (
      <div className="flex flex-col items-center cursor-pointer hover:bg-gray-100 ">
        {productThumbnail && (
          <img className="w-32" src={productThumbnail.url} />
        )}
        <div className="font-semibold pl-3">{product.name}</div>
      </div>
    );
  };

  const renderEntityPreviews = (
    autocompleteLoading: boolean,
    verticalKeyToResults: Record<string, VerticalResultsData>,
    dropdownItemProps: {
      onClick: (
        value: string,
        _index: number,
        itemData?: FocusedItemData
      ) => void;
      ariaLabel: (value: string) => string;
    }
  ): JSX.Element | null => {
    const productResults = verticalKeyToResults["products"]?.results.map(
      (result) => result.rawData
    ) as unknown as Product[];

    return productResults ? (
      <div
        // laying out the product previews in a grid
        className={classnames("grid grid-cols-4 px-8", {
          // fading the results if they're loading
          "opacity-50": autocompleteLoading,
        })}
      >
        {productResults.map((result, i) => (
          // DropdownItem is impored from @yext/search-ui-react
          <DropdownItem
            key={result.id}
            value={result.name}
            // when an item is clicked, it will change the URL
            onClick={() => history.pushState(null, "", `/product/${result.id}`)}
            ariaLabel={dropdownItemProps.ariaLabel}
          >
            {renderProductPreview(result)}
          </DropdownItem>
        ))}
      </div>
    ) : null;
  };

  return (
    <div className="flex justify-center px-4 py-6">
      <div className="w-full max-w-5xl">
        <SearchBar
          visualAutocompleteConfig={{
            entityPreviewSearcher: entityPreviewSearcher,
            includedVerticals: ["products"],
            renderEntityPreviews: renderEntityPreviews,
            universalLimit: { products: 4 },
            entityPreviewsDebouncingTime: 300,
          }}
        />
        <UniversalResults
          verticalConfigMap={{
            faqs: {},
            locations: {},
            products: {},
          }}
        />
      </div>
    </div>
  );
};

export default App;
