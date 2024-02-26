import { useDispatch, useSelector } from "react-redux";
import { removeItem, clearCart } from "../utils/cartSlice";
import { cloudinaryImageUrl } from "../utils/constants";
import starIcon from "../images/star-icon.svg";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
    // console.log(item.card.info.id);
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="max-w-[720px] m-auto pt-5">
      <div className="flex items-center justify-between pb-5 border-b-[1px] border-dashed">
        <h2 className="font-bold text-2xl">Cart</h2>
        {items.length === 0 ? (
          <p className="text-red-500">No Items in Cart!</p>
        ) : (
          <button onClick={handleClearCart} className="bg-red-500 hover:bg-red-400 text-white px-4 py-1 rounded-md">
            Clear Cart
          </button>
        )}
      </div>
      {items.map((item, index) => (
        <div key={index} className="flex border-b-[1px] py-4 justify-between items-center">
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
              onClick={() => handleRemoveItem(item)}
              className="absolute left-[50%] translate-x-[-50%] translate-y-[20%] bottom-0 bg-white shadow-lg py-1 px-2 border borer border-gray-300 rounded text-green-600 font-bold flex cursor-pointer"
            >
              <button className="">REMOVE</button>
              <svg strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 scale-90">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
