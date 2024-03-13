import { useEffect, useState } from "react";
import { corsBypasser } from "./constants";

const useApiFetcher = (API_URL) => {
  const [data, setData] = useState(null);
  //   const groceryAPI_URL = "https://www.swiggy.com/api/instamart/home";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const responseData = await fetch(corsBypasser + API_URL);
    // const jsonData = await responseData.json();
    // console.log(jsonData);
  };
  return data;
};

export default useApiFetcher;
