import React from "react";
import { useSelector } from "react-redux";
import ItemLinks from "./itemLinks/itemLinks";

const ListLinks = () => {
    const groups = useSelector((state) => state.listLinks.links);
    return (
        <div>
            {groups.map((i) => (
                <ItemLinks key={i.id} id={i.id} nameLink={i.nameLink} link={i.url} description={i.description} />
            ))}
        </div>
    );
};

export default ListLinks;
