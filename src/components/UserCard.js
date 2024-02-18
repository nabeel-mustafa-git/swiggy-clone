import { useEffect, useState } from "react";

const UserCard = ({ nameProp }) => {
  const [data, setData] = useState({ name: "dummy" });

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("https://api.github.com/users/akshaymarch7");
      const json = await data.json();

      setData(json);
    }
    fetchData();
  }, []);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     console.log("interval");
  //   }, 1000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  return (
    <div className="user-card">
      <h2>Name: {data.name}</h2>
      <p>Location: pk</p>
      <p>Contact: @aks.google.web</p>
    </div>
  );
};
export default UserCard;
