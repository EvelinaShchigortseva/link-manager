import React from 'react'

export function useForm(initialValue) {
    const [bookmark, setBookmark] = React.useState(initialValue)
    const [error, setError] = React.useState({})

    const validate = () => {
        let temp = []
        temp.nameLink = bookmark.nameLink ? '' : 'Это поле обязательно к заполнению'
        temp.url =
            /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=,\w]+@)[A-Za-z0-9.-]+)((?:\/[~%.\w-_]*)?\??(?:[-=&;%@.\w_]*)#?(?:[\w]*))?)/.test(
                bookmark.url,
            )
                ? ''
                : 'Url-адрес недействителен'
        temp.descriptionLink = bookmark.descriptionLink ? '' : `Поле 'описание' обязательно для заполнения`
        setError({...temp})
        return Object.values(temp).every((x) => x === '')
    }

    return {
        bookmark,
        setBookmark,
        validate,
        error,
        setError,
    }
}
