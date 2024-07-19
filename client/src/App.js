import NavBar from "./components/Navigation/NavBar";
// ----- Router imports
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
// ----- Components import
import Home from "../../client/src/pages/Home/Home";
import SignIn from "../../client/src/pages/AuthPages/SignIn";
import SignUp from "../../client/src/pages/AuthPages/SignUp";


function App() {
  // ----- Routing

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    )
  );

  return (
    <div id="root" className="min-h-screen min-w-screen dark bg-background">
      <RouterProvider router={router} />
    </div>
  );
  
}
const Root = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default App;
