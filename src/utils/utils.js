import { week } from '../config/weatherConfigs';

export const getWeekDay = (date) => {
    const day = date.getDay();
    const weekday = isToday(date) ? 'Today' : week[day]
    return weekday;
}

export const isToday = (someDate) => {
    const today = new Date()
    return someDate.getDate() == today.getDate() &&
        someDate.getMonth() == today.getMonth() &&
        someDate.getFullYear() == today.getFullYear()
}

export const getKeyFromString = (root, string) => {
    console.log(string);
    const splits = string.split('.')
    console.log(splits);
    console.log(root[splits]);
    return root[splits]
}