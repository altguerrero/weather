const getDay = (date) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dayNumber = new Date(date).getDay();

  return days[dayNumber];
};

export default getDay;
