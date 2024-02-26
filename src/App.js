import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import Shimmer from "./components/Shimmer";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

//Chunking
//Code Splitting
//Dynamic Bundling
//Dynamic Import
//Lazy Loading
//On Demand Loading

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  // const [userName, setUserName] = useState("");
  // useEffect(() => {
  //   const data = {
  //     name: "Jordan",
  //   };
  //   setUserName(data.name);
  // }, []);

  return (
    // <UserContext.Provider value={{ loggedInUser: userName }}>
    <Provider store={appStore}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </Provider>
    // {/* </UserContext.Provider> */}
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h2>Loading</h2>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
