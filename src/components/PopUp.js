import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const PopUp = ({ data }) => {
  const [anime, setAnime] = useState(false);

  useEffect(() => {
    setAnime(true);
    // setTimeout(() => {
    //   setAnime(false);
    // }, 3000);
  }, []);

  return createPortal(
    <div
      className={`bg-orange-500 text-white text-lg font-medium relative md:w-[0px max-md:w-[200px] text-ellipsis text-nowrap overflow-hidden rounded-lg ease-linear duration-100 ${
        anime ? "md:w-[400px] md:h-full py-4 px-6" : "md:w-[0px] md:h-[0px]"
      }`}
    >
      <p className={`${anime ? "md:h-auto" : "md:h-[0px]"}`}>{data}</p>
    </div>,
    document.getElementById("pop-up")
  );
};

export default PopUp;
