import React from "react";
import FontAwesomeIcon from "react-fontawesome";

const NavbarList = ({ items }) => {
  const getItem = (item) => {
    let itemList = null;
    switch (item.type) {
      case "logo":
        itemList = (
          <img src={item.src} className="h-5 min-w-[154px]" alt={item.name} />
        );
        break;
      case "icon":
        itemList = <FontAwesomeIcon name={item.name}  size="lg"/>;
        break;

      default:
        itemList = <p>{item.name}</p>;
        break;
    }
    return itemList;
  };

  return (
    <ul className="flex gap-7">
      {items.map((item) => {
        return <li>{getItem(item)}</li>;
      })}
    </ul>
  );
};

export default NavbarList;
