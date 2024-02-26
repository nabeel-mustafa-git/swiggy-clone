import { Circles } from "react-loader-spinner";

const HeroTopSliderShimmer = () => {
  return (
    <div className="bg-gray-900 text-gray-100 py-28 flex flex-col items-center">
      <Circles color="rgb(243 244 246)" height="50" />
      <p className="text-2xl pt-3">Looking for Great Food near you...</p>
    </div>
  );
};

export default HeroTopSliderShimmer;
