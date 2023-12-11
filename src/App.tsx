import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import GlobalStyles from "./styles/Global";
import { Home } from "./components/Home";
import { Game } from "./components/Game";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="/game/:id" element={<Game />} />
    </Route>
  )
);

const App = () => {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />;
    </>
  );
};

export default App;
