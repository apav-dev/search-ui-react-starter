import { SearchBar } from "@yext/search-ui-react";
import { useSearchParams } from "react-router-dom";
import { NavBar } from "../components/NavBar";

export interface StandardLayoutProps {
  page: JSX.Element;
}

export const StandardLayout = ({ page }: StandardLayoutProps): JSX.Element => {
  let [searchParams, setSearchParams] = useSearchParams();

  const onSearch = (searchEventData: {
    verticalKey?: string;
    query?: string;
  }) => {
    const { query } = searchEventData;
    if (query) {
      searchParams.set("query", query);
    } else {
      searchParams.delete("query");
    }
    setSearchParams(searchParams);
  };

  return (
    <>
      <SearchBar onSearch={onSearch} />
      <NavBar />
      {page}
    </>
  );
};
