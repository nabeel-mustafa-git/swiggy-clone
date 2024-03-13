import { useEffect, useState } from "react";

const NearMe = ({ data }) => {
  const [brandsData, setBrandsData] = useState(data);
  const [showMoreBtn, setShowMoreBtn] = useState(false);

  useEffect(() => {
    if (data.length > 15) {
      setBrandsData(data.slice(0, 15));
      setShowMoreBtn(true);
    }
  }, []);

  const handleShowMore = () => {
    setBrandsData(data);
    setShowMoreBtn(false);
  };

  const handleShowLess = () => {
    setBrandsData(data.slice(0, 15));
    setShowMoreBtn(true);
  };

  return (
    <div className="flex flex-wrap gap-x-6 gap-y-4 justify-evenly pb-10">
      {brandsData.map((brand) => (
        <div
          key={brand.text}
          className="text-gray-600 w-[250px] max-md:w-[160px] text-ellipsis text-nowrap overflow-hidden border py-3 px-6 rounded-lg"
        >
          <a href={brand.link}>{brand.text}</a>
        </div>
      ))}
      {data.length > 15 ? (
        <div>
          {showMoreBtn === true ? (
            <div
              onClick={handleShowMore}
              className="flex items-center justify-center text-gray-900 w-[250px] border py-3 px-6 rounded-lg font-bold cursor-pointer"
            >
              <button className="">Show More</button>
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          ) : (
            <div
              onClick={handleShowLess}
              className="flex items-center justify-center text-gray-900 w-[250px] border py-3 px-6 rounded-lg font-bold cursor-pointer"
            >
              <button className="">Show Less</button>
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
              </svg>
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default NearMe;
