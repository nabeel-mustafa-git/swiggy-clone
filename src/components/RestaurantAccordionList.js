import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import starIcon from "../images/star-icon.svg";
import { cloudinaryImageUrl } from "../utils/constants";

const RestaurantAccordionList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //dispatch action
    dispatch(addItem(item));
  };
  //   console.log(items[0].card.info.isBestseller);

  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="flex border-b-[1px] py-4 justify-between items-center">
          <div className="">
            {item.card.info.isBestseller === true ? (
              <div className="flex items-center">
                <img src={starIcon} className="w-4"></img>
                <p className="text-sm font-bold px-1 text-yellow-500">Best Seller</p>
              </div>
            ) : (
              ""
            )}
            <h2 className="font-bold text-gray-700 py-1">{item.card.info.name}</h2>
            <p className="text-gray-900 text-sm">₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</p>
            <p className="text-gray-400 text-sm pt-3 pb-6">{item.card.info.description}</p>
          </div>
          <div className="relative ml-3">
            {item.card.info.imageId !== undefined ? (
              <img
                className="max-w-[120px] max-h-[100px] w-[120px] h-[120px] object-cover rounded-lg"
                src={cloudinaryImageUrl + item.card.info.imageId}
              ></img>
            ) : (
              ""
            )}
            <div
              onClick={() => handleAddItem(item)}
              className="absolute left-[50%] translate-x-[-50%] translate-y-[20%] bottom-0 bg-white shadow-lg py-1 px-4 border borer border-gray-300 rounded text-green-600 font-bold flex cursor-pointer"
            >
              <button className="">ADD</button>
              <svg strokeWidth={2} stroke="currentColor" className="w-6 h-6 scale-90">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default RestaurantAccordionList;
