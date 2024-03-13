import RestaurantAccordionList from "./RestaurantAccordionList";

const RestaurantAccordion = ({ data, showItems, setShowIndex, closeShowIndex }) => {
  const handleClick = () => {
    showItems === true ? closeShowIndex() : setShowIndex();
  };

  return (
    <div className="border-b-8">
      <div className="flex justify-between py-4 font-bold text-lg text-gray-800 cursor-pointer" onClick={handleClick}>
        <span>
          {data.title} ({data.itemCards.length})
        </span>
        <span>
          {showItems === true ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          )}
        </span>
      </div>
      {showItems === true ? <RestaurantAccordionList items={data.itemCards} /> : ""}
    </div>
  );
};

export default RestaurantAccordion;
