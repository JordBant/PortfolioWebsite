import { CAROUSEL_ICON_MAP, CLASSNAME_IN_USE } from "./constants"

export type SkillIcon = {
    name: string,
    fontColor: string,
}

export type ClassesInUse = (typeof CLASSNAME_IN_USE)[keyof typeof CLASSNAME_IN_USE]

export type IconMapping = Record<Icons, React.ReactElement> & IconMapIndexSignature

export type IconMapIndexSignature = {
    [key: string]: JSX.Element
}

export type Icons = keyof typeof CAROUSEL_ICON_MAP
export type PageTitle = 'About' | 'Projects' | 'Contact'