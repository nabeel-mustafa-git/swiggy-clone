import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import useOnlineStatus from "./utils/useOnlineStatus";
import NoInternet from "./components/NoInternet";

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
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <NoInternet />;

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
          <Suspense fallback={<h2 className="w-8/12 m-auto font-bold text-4xl">Loading...</h2>}>
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
          <Suspense fallback={<h2 className="w-8/12 m-auto font-bold text-4xl">Loading...</h2>}>
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
