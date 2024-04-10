const Shimmer = () => {
  return (
    <div>
      <div className="w-4/12 h-[50px] m-auto bg-gray-300 mt-4 mb-10 rounded-md"></div>
      <div className="shimmer-container flex gap-7 flex-wrap justify-evenly">
        <div className="shimmer-card aspect-[2/2.5] max-w-[220px] w-[220px] bg-gray-300 my-2 rounded-xl"></div>
        <div className="shimmer-card aspect-[2/2.5] max-w-[220px] w-[220px] bg-gray-300 my-2 rounded-xl"></div>
        <div className="shimmer-card aspect-[2/2.5] max-w-[220px] w-[220px] bg-gray-300 my-2 rounded-xl"></div>
        <div className="shimmer-card aspect-[2/2.5] max-w-[220px] w-[220px] bg-gray-300 my-2 rounded-xl"></div>
      </div>
    </div>
  );
};
export default Shimmer;
