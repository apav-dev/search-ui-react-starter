import { StandardCard, VerticalResults } from "@yext/search-ui-react";
import { usePageSetupEffect } from "../hooks/usePageSetupEffect";

interface VerticalResultsPageProps {
  verticalKey: string;
}

export const VerticalResultsPage = ({
  verticalKey,
}: VerticalResultsPageProps): JSX.Element => {
  usePageSetupEffect(verticalKey);

  return <VerticalResults CardComponent={StandardCard} />;
};
