import { useState } from "react";
import { cloudinaryImageUrl, arrowRight, arrowLeft } from "../utils/constants";

const HeroTopSlider = ({ data }) => {
  const [firstIndex, setFirstIndex] = useState(0);

  const { title } = data.header;
  const originalItems = data.imageGridCards.info;
  const itemsLength = originalItems.length;
  const itemsToShow = 6;
  const itemsToMove = 3;
  const lastIndex = firstIndex + itemsToShow;
  const newItems = originalItems.slice(firstIndex, lastIndex);

  const handleNextClick = () => {
    firstIndex < itemsLength - itemsToShow ? setFirstIndex(firstIndex + itemsToMove) : "";

    // console.log("Next click");
  };
  const handleBackClick = () => {
    firstIndex > itemsToMove ? setFirstIndex(firstIndex - itemsToMove) : setFirstIndex(0);

    // console.log("Back click");
  };

  // console.log(newItems);

  return (
    <div className="overflow-hidden max-width">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-2xl py-3">{title}</h2>
        <div className="flex gap-3">
          <div
            onClick={handleBackClick}
            className="bg-gray-200 w-[33px] h-[33px] aspect-square rounded-full flex items-center justify-center hover:bg-gray-100 cursor-pointer"
          >
            {arrowLeft}
          </div>
          <div
            onClick={handleNextClick}
            className="bg-gray-200 w-[33px] h-[33px] aspect-square rounded-full flex items-center justify-center hover:bg-gray-100 cursor-pointer"
          >
            {arrowRight}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6 overflow-hidde border-b-[1px] pb-10 select-none">
        {newItems.map((item) => (
          <img
            key={item.id}
            src={cloudinaryImageUrl + item.imageId}
            className="w-[144px] cursor-pointer hover:scale-110 ease-linear duration-100 delay-0"
          />
        ))}
      </div>
    </div>
  );
};

export default HeroTopSlider;
