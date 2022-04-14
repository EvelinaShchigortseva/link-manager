import {ConstructionOutlined} from '@mui/icons-material'
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {setGroupAction} from '../../../store/listGroupsReducer'
import {allLinksAction} from '../../../store/listLinksReducer'
import ItemLinks from './itemLinks/itemLinks'

const ListLinks = () => {
    const filterLink = useSelector(({listLinks}) => listLinks.filterLinks)
    const dispatch = useDispatch()
    const onShowAllLinks = () => {
        dispatch(setGroupAction('Все закладки'))
        dispatch(allLinksAction())
    }

    useEffect(() => {
        onShowAllLinks()
    }, [])

    useEffect(() => {}, [filterLink])

    return (
        filterLink && (
            <div>{filterLink.length !== 0 ? filterLink.map((i) => <ItemLinks key={i.id} link={i} />) : <div>Пусто</div>}</div>
        )
    )
}

export default ListLinks
