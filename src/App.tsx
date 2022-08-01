import {
  provideHeadless,
  VerticalResults as VerticalResultsData,
  Result,
} from "@yext/search-headless-react";
import {
  SearchBar,
  UniversalResults,
  FocusedItemData,
  DropdownItem,
  VerticalResults,
  CardProps,
} from "@yext/search-ui-react";
import { searchConfig } from "./config/searchConfig";
import { Product } from "./types/products";
import classnames from "classnames";

const ProductCard = ({ result }: CardProps<Product>) => {
  const product = result.rawData;

  //...your code here
  return <></>;
};

const App = (): JSX.Element => {
  const entityPreviewSearcher = provideHeadless({
    ...searchConfig,
    headlessId: "entity-preview-searcher",
  });

  const renderProductPreview = (result: Result<Product>): JSX.Element => {
    const product = result.rawData;

    // getting the smallest thumbnail image from the primaryPhoto field
    const numThumbnails = product.primaryPhoto?.thumbnails?.length || 0;
    const productThumbnail =
      product.primaryPhoto?.thumbnails?.[numThumbnails - 1];

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
    const productResults = verticalKeyToResults["products"]
      .results as unknown as Result<Product>[];

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
            value={result.name ?? i.toString()}
            // when an item is clicked, it will change the URL
            onClick={() => history.pushState(null, "", `/product/${result.id}`)}
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
        <VerticalResults CardComponent={ProductCard} />
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
