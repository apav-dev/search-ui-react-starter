import { UniversalResults, VerticalConfigMap } from "@yext/search-ui-react";
import { usePageSetupEffect } from "../hooks/usePageSetupEffect";

const universalResultsConfig: VerticalConfigMap = {
  music_events: {
    label: "Events",
    viewAllButton: true,
  },
  locations: {
    label: "Locations",
    viewAllButton: true,
  },
  artists: {
    label: "Artists",
    viewAllButton: true,
  },
};

export const UniversalResultsPage = (): JSX.Element => {
  usePageSetupEffect();

  return <UniversalResults verticalConfigMap={universalResultsConfig} />;
};
