export interface RankItemProps {
    avatar: string,
    onClick: () => void,
    price: number,
    rank: number,
    username: string,
}

export interface ActivityListItemProps {
    avatar: string,
    toAvatar: string,
    isBet: boolean,
    isSold: boolean,
    eventName: string,
    onClick: () => void,
    price: number,
    laterTime: number,
    count?: number,
    username: string,
    position: number,
    volume: number,
    address: string,
}