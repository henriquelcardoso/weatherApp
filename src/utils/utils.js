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