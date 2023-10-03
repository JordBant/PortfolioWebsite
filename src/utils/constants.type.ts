import { IconMap } from "./constants"

export type Icon = {
    name: string,
    fontColor: string,
    iconElement:() => React.ReactElement
}

export type IconMapping = Record<string, React.ReactElement> & IconMapIndexSignature

export type IconMapIndexSignature = {
    [key: string]: JSX.Element
}