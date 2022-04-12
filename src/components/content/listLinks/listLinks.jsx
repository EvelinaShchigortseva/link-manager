import React from 'react'
import {useSelector} from 'react-redux'
import ItemLinks from './itemLinks/itemLinks'

const ListLinks = () => {
    const filterLink = useSelector(({listLinks}) => listLinks.filterLinks)
    return (
        filterLink && (
            <div>
                {filterLink.map((i) => (
                    <ItemLinks key={i.id} link={i} />
                ))}
            </div>
        )
    )
}

export default ListLinks
