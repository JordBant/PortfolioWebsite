import { CLASSNAME_IN_USE } from "../../store/constants";
/**
 * Checks to see if you're trying
 * to use a className you've blacklisted or
 * not
 *
 * @param classList
 * @returns
 */
export function classNamesChecker (classList: string) {
    console.log(classList);
    const checkClasses = classList.includes(" ") ? classList.split(" ") : [ classList ];
    checkClasses.some((name) => CLASSNAME_IN_USE.includes(name));
}
