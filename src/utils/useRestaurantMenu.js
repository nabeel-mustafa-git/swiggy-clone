import { useEffect, useState } from "react";
import { corsBypasser, apiUrlRestaurantMenu } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(corsBypasser + apiUrlRestaurantMenu + resId.resId);
      const json = await data.json();
      setResInfo(json);
    } catch (err) {
      console.log("Error in Fetching Restaurant Data: " + err);
    }
  };

  return resInfo;
};
export default useRestaurantMenu;
