/**const namesOfDays = {
    ru: ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье']
    en: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
}

const getNameOfDay = (day, lang) => {
}*/

function getNameOfDay(date) {
    date = date || new Date();
    let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    let day = date.getDay();

    return days[day];
}
