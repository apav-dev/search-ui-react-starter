import {
  Matcher,
  NumberRangeValue,
  useSearchActions,
  useSearchState,
} from "@yext/search-headless-react";
import classNames from "classnames";

interface TileFacetProps {
  fieldId: string;
  displayName?: string;
}

const TileFacet = ({ fieldId, displayName }: TileFacetProps) => {
  const searchActions = useSearchActions();
  const facet = useSearchState((state) =>
    state.filters.facets?.find((f) => f.fieldId === fieldId)
  );

  const handleFacetClick = (
    value: string | number | boolean | NumberRangeValue,
    selected: boolean
  ) => {
    searchActions.setFacetOption(
      fieldId,
      { matcher: Matcher.Equals, value },
      selected
    );
    searchActions.executeVerticalQuery();
  };

  // component returns null if the facet isn't found in the search state or has no options for a partiaular set of results
  return facet && facet.options.length > 0 ? (
    <div className="mb-4">
      <span className="font-bold ">{displayName ?? facet.displayName}</span>
      <div key={facet.fieldId} className="w-72 mt-6 flex flex-wrap">
        {facet.options.map((o, i) => (
          <div
            key={`${fieldId}_${i}`}
            className={classNames(
              "mr-3 mb-3 border border-toast-orange md:hover:bg-[#FFB563]",
              // styling to change the background color of the tile based on if it's selected or not
              {
                "bg-[#FFB563]": o.selected,
                "bg-[#FFEEDB]": !o.selected,
              }
            )}
            // handleFacetClick will trigger on click to reverse the selected state of the facet option
            onClick={() => handleFacetClick(o.value, !o.selected)}
          >
            <div className="px-3 text-sm inline-block">
              {/* Each facet option contains a display name and count */}
              <span className="mr-0.5">{o.displayName}</span>
              <span className="text-xs">{`(${o.count})`}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : null;
};

export default TileFacet;
