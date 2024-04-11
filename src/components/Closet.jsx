import React from "react";
import ClosetItem from "./ClosetItem/ClosetItem.jsx";


const Closet = ({ items }) => {
  return (
    <div className="closet">
      {items.map((item) => (
        <ClosetItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Closet;
