import { Link, useRouteError } from "react-router-dom";
import errorImage from "../images/error.svg";

const Error = () => {
  const err = useRouteError();
  console.log("Error: " + err.status + " " + err.statusText);

  return (
    <div className="py-10 bg-[#FBFCFD] min-h-svh flex flex-col items-center">
      <img src={errorImage} />
      <h3 className="text-3xl font-medium pt-6">We'll fix it shortly</h3>
      <h2 className="pt-4 text-center text-gray-500">
        {err.status}
        <br />
        {err.statusText}
      </h2>
      <Link to="/">
        <button className="my-4 font-bold bg-orange-500 py-3 px-6 text-white">Go Home</button>
      </Link>
    </div>
  );
};
export default Error;
