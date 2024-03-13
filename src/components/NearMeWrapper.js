import NearMe from "./NearMe";

const NearMeWrapper = ({ data }) => {
  return (
    <div className="w-10/12 m-auto">
      {data.map((list) => (
        <div key={list.title}>
          <h2 className="font-bold text-2xl py-3">{list.title}</h2>
          <NearMe data={list.brands} />
        </div>
      ))}
    </div>
  );
};

export default NearMeWrapper;
