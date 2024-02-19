import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const corsBypasser = "https://corsproxy.io/?",
    apiUrl = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING";

  const fetchData = async () => {
    try {
      const data = await fetch(corsBypasser + apiUrl);

      const json = await data.json();
      const fetchedDataArray = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setListOfRestaurants(fetchedDataArray);
      setFilteredRestaurants(fetchedDataArray);
    } catch (e) {
      console.log("Error Catched: " + e);
    }

    // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>No Internet</h1>;

  return (
    <div className="body max-width max-lg:mx-7">
      <div className="search text-center py-5">
        <form
          className="container"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            className="bg-transparent outline-none rounded-full px-2 mx-4"
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

      <div className="fliter py-5 lg:px-5">
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

      <div className="res-container flex gap-5 flex-wrap justify-evenly">
        {listOfRestaurants.length === 0 ? <Shimmer /> : <></>}
        {filteredRestaurants.map((restaurant) => (
          <Link to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
