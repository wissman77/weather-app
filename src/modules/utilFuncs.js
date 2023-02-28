function format(timeElement) {
  return timeElement <= 9 ? `0${timeElement}` : timeElement;
}

function formatLongDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${format(day)}-${format(month)}-${year} ${format(hours)}:${format(
    minutes
  )}`;
}

function formatShortDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  return `${format(day)}-${format(month)}`;
}

function getWeekDay(date) {
  return date.toLocaleDateString('en-US', { weekday: 'long' });
}

function capitalize(sentence) {
  return sentence[0].toUpperCase() + sentence.slice(1);
}

export { formatLongDate, formatShortDate, getWeekDay, capitalize };
