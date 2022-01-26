const namesOfDays = {
  ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
  en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
};

// function getNameOfDay(date) { // should be two arguments
//     date = date || new Date();
//     let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
//     let day = date.getDay();

//     return days[day];
// }

const getNameOfDay = (day, lang = 'en') => {
  // get values by properties
  console.log(namesOfDays[lang][day - 1]);
};
