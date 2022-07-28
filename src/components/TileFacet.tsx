import { useSearchState } from "@yext/search-headless-react";

interface TileFacetProps {
  fieldId: string;
  displayName?: string;
}

const TileFacet = ({ fieldId, displayName }: TileFacetProps) => {
  const facet = useSearchState((state) =>
    state.filters.facets?.find((f) => f.fieldId === fieldId)
  );

  // component returns null if the facet isn't found in the search state or has no options for a partiaular set of results
  return facet && facet.options.length > 0 ? (
    <div className="mb-4">
      <span className="font-bold">{displayName ?? facet.displayName}</span>
      <div className="w-72 mt-6 flex flex-wrap">
        {facet.options.map((o, i) => (
          <div
            key={`${fieldId}_${i}`}
            className="mr-3 mb-3 border border-toast-orange md:hover:bg-[#FFB563]"
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
