import { StarIcon } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, areaName, avgRating, cuisines, sla } = resData?.info;
  const header = resData?.info?.aggregatedDiscountInfoV3?.header;
  const subHeader = resData?.info?.aggregatedDiscountInfoV3?.subHeader;

  return (
    <div className="res-card flex flex-col aspect-[2/2.5] md:max-w-[220px] max-md:max-w-[180px] hover:shadow-2xl shadow-gray-500 my-2 rounded-2xl ease duration-300">
      <div className="relative rounded-2xl overflow-hidden">
        <img
          className="res-card-img md:max-w-[220px] max-md:max-w-[180px] aspect-[3/2] object-cover"
          src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}
          alt={name}
        ></img>
        {header && subHeader ? (
          <p className="absolute bottom-0 w-[100%] h-[50%] flex items-end bg-gradient-to-t from-gray-800 text-white px-2 pb-1 font-black text-[1.5rem] text-ellipsis text-nowrap overflow-hidden">
            {header + " " + subHeader}
          </p>
        ) : (
          ""
        )}
      </div>
      <h3 className="res-card-name font-medium text-lg px-3 pt-1 text-gray-700 text-ellipsis text-nowrap overflow-hidden">{name}</h3>
      <div className="rating-container px-3 flex items-center gap-2 font-medium text-gray-700">
        <div className="star-icon w-[20px] h-[20px] p-[2px] bg-green-600 rounded-full text-white flex items-center justify-center">
          <StarIcon />
        </div>
        <h4 className="rating">{avgRating}</h4>
        <h4 className="delivery">&#183; {sla.slaString}</h4>
      </div>
      <p className="dishes px-3 text-ellipsis text-nowrap font-normal overflow-hidden text-gray-400">{cuisines.join(", ")}</p>
      <p className="text-gray-400 px-3 font-noraml">{areaName}</p>
    </div>
  );
};

//Higher Order Component

//input -> RestaurantCard ==>> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="">
        <label className="absolute bg-gray-200 z-10 px-2 font-bold rounded-br-md">Promoted!</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
