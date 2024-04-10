import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantAccordion from "./RestaurantAccordion";
import ResMenuShimmer from "./ResMenuShimmer";
import { useState } from "react";

const RestaurantMenu = () => {
  const resId = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) {
    return <ResMenuShimmer />;
  }

  console.log(resInfo);

  const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  const { name, areaName, avgRating, cuisines, sla, city } = resInfo?.data?.cards[2]?.card?.card?.info;

  return (
    <div className="max-w-[720px] m-auto px-4">
      <div className="flex justify-between items-center pb-2 pt-8">
        <h1 className="text-2xl font-bold">{name}</h1>
        <div className="text-gray-500 flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
              clipRule="evenodd"
            />
          </svg>
          <p className="font-bold">{avgRating}</p>
        </div>
      </div>
      <p className="text-gray-500 text-sm">{cuisines.join(", ")}</p>
      <p className="text-gray-500 text-sm pb-5 border-b-[1px] border-dashed">
        {areaName + ", "}
        {sla.lastMileTravelString || city}
      </p>

      {categories.map((category, index) => (
        <RestaurantAccordion
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={showIndex === index && true}
          setShowIndex={() => setShowIndex(index)}
          closeShowIndex={() => setShowIndex(null)}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
