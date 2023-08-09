import { IconsMap } from "./constants"

export type Icon = {
    name: string,
    fontColor: string,
    iconElement: JSX.Element
}

export type IconMapping = Record<string, JSX.Element> & IconMapIndexSignature

export type IconMapIndexSignature = {
    [key: string]: JSX.Element
}