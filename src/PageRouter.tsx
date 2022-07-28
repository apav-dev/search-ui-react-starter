import { Route, Routes, BrowserRouter } from "react-router-dom";
import { StandardLayout } from "./pages/StandardLayout";
import { UniversalResultsPage } from "./pages/UniversalResultsPage";
import { VerticalResultsPage } from "./pages/VerticalResultsPage";

export const routeConfig: {
  label: string;
  path: string;
  element: JSX.Element;
}[] = [
  {
    label: "All",
    path: "/",
    element: <StandardLayout page={<UniversalResultsPage />} />,
  },
  {
    label: "Events",
    path: "/music_events",
    element: (
      <StandardLayout
        page={<VerticalResultsPage verticalKey="music_events" />}
      />
    ),
  },
  {
    label: "Locations",
    path: "/locations",
    element: (
      <StandardLayout page={<VerticalResultsPage verticalKey="locations" />} />
    ),
  },
  {
    label: "Artists",
    path: "/artists",
    element: (
      <StandardLayout page={<VerticalResultsPage verticalKey="artists" />} />
    ),
  },
];

export const PageRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routeConfig.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
