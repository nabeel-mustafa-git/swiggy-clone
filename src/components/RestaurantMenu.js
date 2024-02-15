import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const resId = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const corsBypasser = "https://corsproxy.io/?",
    apiUrl = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.572646&lng=88.36389500000001&restaurantId=";

  const fetchMenu = async () => {
    const data = await fetch(corsBypasser + apiUrl + resId.resId);

    const json = await data.json();

    setResInfo(json?.data);

    // console.log("load");
    // console.log(json.data.cards[0].card.card.info);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cloudinaryImageId, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

  //   const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  //   console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
  //   console.log(itemCards);

  return (
    <div>
      <h1>{name}</h1>
      <h3>{cuisines.join(",")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h2>Menu</h2>
      <ul>
        {/* {itemCards.map((item) => {
          <li>{item.card.info.name}</li>;
          <p>da</p>;
        })} */}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
