import React, { useState } from "react";
import Header from "./Header";
import Additem from "./Additem";
import Cards from "./Cards";
import CardsData from "./CardsData";


const Home = () => {
  const [data,setdata]=useState(CardsData);
  const [isAdding, setIsAdding] = useState(false);


  return (
    <>
      <div>
        {/* list */}

         {!isAdding && (
          <>
            <Header setIsAdding={setIsAdding} />
            <Cards />
          </>
        )} 
        {/* Add */}
        {isAdding && (
          <Additem data={data} setdata={setdata}  setIsAdding={setIsAdding}  />
        )}
      </div> 
    </>
  );
};
export default Home;
