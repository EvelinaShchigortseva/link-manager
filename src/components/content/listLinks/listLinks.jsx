import React from "react";
import { useSelector } from "react-redux";
import ItemLinks from "./itemLinks/itemLinks";

const ListLinks = () => {
  const groups = useSelector((state) => state.listLinks.listLinks);
  return (
    groups && (
      <div>
        {groups.map((i) => (
          <ItemLinks
            key={i.id}
            id={i.id}
            nameLink={i.nameLink}
            link={i.url}
            description={i.descriptionLink}
          />
        ))}
      </div>
    )
  );
};

export default ListLinks;
