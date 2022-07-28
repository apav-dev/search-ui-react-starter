import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

interface LinkWithQueryProps {
  children: React.ReactNode;
  to: string;
}

export const LinkWithQuery = ({
  children,
  to,
}: LinkWithQueryProps): JSX.Element => {
  const [search, setSearch] = useState("");
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearch(
      searchParams.has("query") ? `?query=${searchParams.get("query")}` : ""
    );
  }, [location]);

  return <Link to={{ pathname: to, search }}>{children}</Link>;
};
