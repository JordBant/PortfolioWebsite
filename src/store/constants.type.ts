import { IconMap } from "./constants"

export type SkillIcon = {
    name: string,
    fontColor: string,
}

export type IconMapping = Record<Icons, React.ReactElement> & IconMapIndexSignature

export type IconMapIndexSignature = {
    [key: string]: JSX.Element
}

export type Icons = keyof typeof IconMap
export type PageTitle = 'About'| 'Projects' | 'Contact'