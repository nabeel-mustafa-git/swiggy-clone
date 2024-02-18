import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    // window.ononline = () => {
    //   setOnlineStatus(true);
    // };
    // window.onoffline = () => {
    //   setOnlineStatus(false);
    // };

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
  }, []);

  return onlineStatus;
};
export default useOnlineStatus;
