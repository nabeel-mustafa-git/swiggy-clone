const DownloadApp = ({ data }) => {
  const { title, androidAppImage, iosAppImage, androidAppLink, iosAppLink } = data;
  const imgURL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/";

  return (
    <div className="bg-gray-300 text-gray-800 flex flex-wrap gap-4 justify-evenly p-6">
      <h3 className="font-bold md:text-3xl max-md:text-2xl max-w-[500px]">{title}</h3>
      <div className="flex gap-6 flex-wrap">
        <a href={androidAppLink}>
          <img className="h-16" src={imgURL + androidAppImage} />
        </a>
        <a href={iosAppLink}>
          <img className="h-16" src={imgURL + iosAppImage} />
        </a>
      </div>
    </div>
  );
};

export default DownloadApp;
