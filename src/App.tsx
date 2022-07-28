import { PageRouter } from "./PageRouter";

const App = (): JSX.Element => {
  return (
    <div className="flex justify-center px-4 py-6">
      <div className="w-full max-w-5xl">
        <PageRouter />
      </div>
    </div>
  );
};

export default App;
