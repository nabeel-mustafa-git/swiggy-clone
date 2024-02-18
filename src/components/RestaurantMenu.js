import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { cloudinaryImageUrl } from "../utils/constants";

const RestaurantMenu = () => {
  const resId = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cloudinaryImageId, cuisines, costForTwoMessage } = resInfo?.data?.cards[0]?.card?.card?.info;

  return (
    <div>
      <h1>{name}</h1>
      <h3>{cuisines.join(",")}</h3>
      <h3>{costForTwoMessage}</h3>
      <img src={cloudinaryImageUrl + cloudinaryImageId}></img>
    </div>
  );
};
export default RestaurantMenu;
