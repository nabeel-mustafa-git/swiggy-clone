import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { corsBypasser, apiUrlRestaurants } from "../utils/constants";
import HeroTopSlider from "./HeroTopSlider";
import HeroTopSliderShimmer from "./HeroTopSliderShimmer";
import NearMeWrapper from "./NearMeWrapper";
import DownloadApp from "./DownloadApp";
import Footer from "./Footer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [resTitle, setResTitle] = useState("");
  const [topSliderData, setTopSliderData] = useState([]);
  const [nearMeData, setNearMeData] = useState([]);
  const [appData, setAppData] = useState([]);
  const [footerData, setFooterData] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const fetchData = async () => {
    try {
      const data = await fetch(corsBypasser + apiUrlRestaurants);

      const json = await data.json();
      const fetchedDataArray = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setListOfRestaurants(fetchedDataArray);
      setFilteredRestaurants(fetchedDataArray);
      setResTitle(json?.data?.cards[1]?.card?.card?.header?.title);
      setTopSliderData(json?.data?.cards[0]?.card?.card);
      setNearMeData([json?.data?.cards[6]?.card?.card, json?.data?.cards[7]?.card?.card, json?.data?.cards[8]?.card?.card]);
      setAppData(json?.data?.cards[9]?.card?.card);
      setFooterData(json?.data?.cards[10]?.card?.card);
    } catch (e) {
      console.log("Error Catched in Body: " + e);
    }
  };

  return (
    <div>
      {topSliderData.length === 0 ? <HeroTopSliderShimmer /> : <HeroTopSlider data={topSliderData} />}
      <div className="body md:w-9/12 m-auto">
        {listOfRestaurants.length === 0 ? (
          <Shimmer />
        ) : (
          <div className="max-md:px-4">
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
                  placeholder="Search Restaurant"
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

            <h2 className="font-bold text-2xl py-3">{resTitle}</h2>
            <div className="res-container flex gap-5 flex-wrap justify-between">
              {filteredRestaurants.map((restaurant) => (
                <Link to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id}>
                  {restaurant.info.avgRating > 4.4 ? <RestaurantCardPromoted resData={restaurant} /> : <RestaurantCard resData={restaurant} />}
                </Link>
              ))}
              {filteredRestaurants.length === 0 ? <p className="py-4 text-gray-400">No Restaurant found!</p> : ""}
            </div>
          </div>
        )}
      </div>
      {listOfRestaurants.length === 0 && nearMeData.length === 0 && appData.length === 0 && footerData.length === 0 ? (
        ""
      ) : (
        <div>
          <NearMeWrapper data={nearMeData} />
          <DownloadApp data={appData} />
          <Footer data={footerData} />
        </div>
      )}
    </div>
  );
};
export default Body;

{
  /*   
      <div className="fliter py-5 lg:px-5">
        <button
          className="button"
          onClick={() => {
            // Filter Logic
            const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
            setListOfRestaurants(filteredList);
          }}
        >
          Show Promoted Restaurant Only!
        </button>
      </div> */
}
