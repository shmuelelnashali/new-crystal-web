import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ExclusionsSearch(props) {
  const { selectedOption, setSelectedOption } = props;

  const [color, setColor] = useState(false);
  const [user, setUser] = useState([]);
  const [v, setV] = useState(Array.from({ length: user.length }, () => false));
  const handleSearch = () => {
    setColor(!color);
  };

  const handleV = (i) => {
    // צור עותק של מערך ה־v
    const updatedV = [...v];
    // עדכן את הערך באינדקס i
    updatedV[i] = !updatedV[i];
    // הגדר את מערך ה־v המעודכן כמצב החדש
    setV(updatedV);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/users");
      setUser(response.data.users);
      //   console.log(`יוזר${response.data.users}`);
      // console.log(`יוזר${JSON.stringify(response.data.users)}`);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
   
      <div dir="ltr" className=" border bg-white p-2  absolute w-full z-50 overflow-auto">
        <div
     
          className={`
           ${
            color ? "h-[15vh]" : "h-[27vh] "
          } `}
        >
          {user.map((user, i) => (
            <div key={i}>
              <div dir="rtl" className="flex ">
                <div className="flex justify-center items-center">
                  <div
                    onClick={() => handleV(i)}
                    className={`flex justify-center items-center mr-2 border border-[#002A78] w-4 h-4 ${
                      v[i] ? "bg-[#002A78] " : ""
                    }`}
                  >
                    {v[i] && (
                      <svg
                        width="10"
                        height="9"
                        viewBox="0 0 10 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 4.5L4 8L9 1"
                          stroke="white"
                          stroke-linecap="round"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                <div onClick={handleSearch} className="p-2">
                  <div>{user.firstName}</div>
                  <div>{user.id}</div>
                </div>
              </div>
              <div className=" mx-4 border border-b-[#002A78]"></div>
            </div>
          ))}
        </div>
      </div>
  
  );
}
