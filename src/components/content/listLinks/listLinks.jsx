import React from 'react';
import ItemLinks from "./itemLinks/itemLinks";

const ListLinks = () => {
    const groups = [1,2,3]
    return (
        <div>
            {
                groups.map(group => <ItemLinks/>)
            }
        </div>
    );
};

export default ListLinks;