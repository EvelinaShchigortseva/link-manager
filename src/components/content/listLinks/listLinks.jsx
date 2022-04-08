import React from 'react'
import {useSelector} from 'react-redux'
import ItemLinks from './itemLinks/itemLinks'

const ListLinks = () => {
    const groups = useSelector((state) => state.listLinks.listLinks)
    return (
        groups && (
            <div>
                {groups.map((i) => (
                    <ItemLinks key={i.id} link={i} />
                ))}
            </div>
        )
    )
}

export default ListLinks
