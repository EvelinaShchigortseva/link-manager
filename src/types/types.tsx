export interface IInitialState {
    id: null | number
    nameLink: string
    url: string
    descriptionLink: string
    currentGroup: string
    read?: boolean
}

export interface IGroup {
    id: number
    group: string
}

export interface IGroups {}
