import React, { useEffect, useState } from "react";
import BACKEND_URL from "../api/url";

const Greeting = ({ auth }) => {
  const [greetingState, setGreetingState] = useState("");

  const greetingFunction = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await BACKEND_URL.get("/user/fetch-user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const userName = res.data.data.name;

      const name =
        userName.split(" ")[0].charAt(0).toUpperCase() +
        userName.split(" ")[0].slice(1);

      const hour = new Date().getHours();

      if (hour < 12) {
        setGreetingState(`Good Morning, ${name}`);
      } else if (hour < 18) {
        setGreetingState(`Good Afternoon, ${name}`);
      } else {
        setGreetingState(`Good Evening, ${name}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if(auth)
    greetingFunction()
  }, []);

  return (
    <div>
      {auth && <div className="text-white text-xl mt-2">{greetingState}</div>}
    </div>
  );
};

export default Greeting;
