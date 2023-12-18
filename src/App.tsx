import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import {NotFound} from "./components/NotFound";
import GlobalStyles from "./styles/Global";
import {Home} from "./components/Home";
import {Game} from "./components/Game";
import {Leaderboard} from "./components/Leaderboard";
import {HomeLayout} from "./components/HomeLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/game/:id" element={<Game />} />
    </>
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
