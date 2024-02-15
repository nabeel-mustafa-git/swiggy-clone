import starIcon from "../images/star-icon.svg";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, avgRating, cuisines, sla } = resData?.info;

  return (
    <div className="res-card">
      <img
        className="res-card-img"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}
        alt={name}
      ></img>
      <h3 className="res-card-name">{name}</h3>
      <p className="dishes">{cuisines.join(", ")}</p>
      <div className="rating-container">
        <img src={starIcon} className="star-icon" />
        <h4 className="rating">{avgRating}</h4>
        <h4 className="delivery"> - Get in: {sla.deliveryTime}m</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
