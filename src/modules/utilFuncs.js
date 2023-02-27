function formatLongDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${day <= 9 ? `0${day}` : day}-${
    month <= 9 ? `0${month}` : month
  }-${year} ${hours}:${minutes}`;
}

function formatShortDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  return `${day <= 9 ? `0${day}` : day}-${month <= 9 ? `0${month}` : month}`;
}

function getWeekDay(date) {
  return date.toLocaleDateString('en-US', { weekday: 'long' });
}

export { formatLongDate, formatShortDate, getWeekDay };
