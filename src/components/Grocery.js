import groceryData from "../utils/groceryData";

const Grocery = () => {
  const cloudImageId = "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_200,w_200/";

  return (
    <div className="md:w-8/12 m-auto py-10 max-md:px-6">
      <h2 className="py-4 font-semibold text-lg">Shop Grocery by Category</h2>
      <div className="flex flex-wrap gap-4 justify-between">
        {groceryData.map((item) => (
          <div key={item.nodeId} className="flex flex-col items-center w-[120px]">
            <img src={cloudImageId + item.imageId} className="" />
            <p className="text-gray-600 py-1 text-xs text-center">{item.displayName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Grocery;
