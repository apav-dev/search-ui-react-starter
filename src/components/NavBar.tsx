import { routeConfig } from "../PageRouter";
import classNames from "classnames";
import { useSearchState } from "@yext/search-headless-react";
import { LinkWithQuery } from "./LinkWithQuery";

export const NavBar = (): JSX.Element => {
  const currentVertical = useSearchState((state) => state.vertical.verticalKey);

  const isActiveLink = (path: string) =>
    path.replace("/", "") === currentVertical ||
    (path === "/" && currentVertical === undefined);

  const renderLink = (label: string, path: string): JSX.Element => {
    return (
      <LinkWithQuery key={`${path}_link`} to={path}>
        <div
          className={classNames(
            "whitespace-nowrap py-3 mt-1 font-medium text-md border-b-2 hover:border-gray-300 border-transparent",
            {
              "text-blue-600  border-blue-600": isActiveLink(path),
            }
          )}
        >
          <div className="py-3 px-2">{label}</div>
        </div>
      </LinkWithQuery>
    );
  };

  return (
    <nav className="border-b border-gray-200 text-gray-600 flex space-x-6 font-medium mb-6">
      {routeConfig.map((route) => renderLink(route.label, route.path))}
    </nav>
  );
};
