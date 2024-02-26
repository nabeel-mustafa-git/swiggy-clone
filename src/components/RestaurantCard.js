import starIcon from "../images/star-icon.svg";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, areaName, avgRating, cuisines, sla } = resData?.info;

  return (
    <div className="res-card flex flex-col aspect-[2/2.5] max-w-[220px] shadow-lg shadow-gray-300 my-2 rounded-xl overflow-hidden">
      <img
        className="res-card-img max-w-[220px] aspect-[3/2] object-cover hover:scale-110 ease duration-300"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}
        alt={name}
      ></img>
      <h3 className="res-card-name font-bold text-lg px-3 pt-1 text-gray-700 text-ellipsis text-nowrap overflow-hidden">{name}</h3>
      <div className="rating-container px-3 py-1 flex items-center gap-2 font-bold text-gray-700">
        <img src={starIcon} className="star-icon w-[20px] h-[20px] p-[3px] bg-green-600 rounded-full" />
        <h4 className="rating">{avgRating}</h4>
        <h4 className="delivery">&#183; {sla.slaString}</h4>
      </div>
      <p className="dishes px-3 text-ellipsis text-nowrap overflow-hidden text-gray-500">{cuisines.join(", ")}</p>
      <p className="text-gray-400 px-3">{areaName}</p>
    </div>
  );
};

//Higher Order Component

//input -> RestaurantCard ==>> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-gray-200 z-10 px-2 font-bold rounded-br-md">Promoted!</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
