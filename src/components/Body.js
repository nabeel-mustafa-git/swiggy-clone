import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const corsBypasser = "https://corsproxy.io/?",
    apiUrl = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING:";

  const fetchData = async () => {
    const data = await fetch(corsBypasser + apiUrl);

    const json = await data.json();
    const fetchedDataArray = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestaurants(fetchedDataArray);
    setFilteredRestaurants(fetchedDataArray);
    //  ?. this is called optional chaining.

    // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  };

  return (
    <div className="body">
      <div className="search">
        <form
          className="container"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            placeholder="Search Here"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            type="submit"
            className="button"
            onClick={() => {
              const filtered = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
              setFilteredRestaurants(filtered);
            }}
          >
            SEARCH
          </button>
        </form>
      </div>

      <div className="fliter">
        <button
          className="button"
          onClick={() => {
            // Filter Logic here
            const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurants.length === 0 ? <Shimmer /> : <></>}
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
