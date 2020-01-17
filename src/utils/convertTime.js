function timeConverter(UNIX_timestamp) {
  const timeInMs = new Date(UNIX_timestamp);
  const year = timeInMs.getFullYear();
  // Отсчет индекса месяца с "1"
  const month = timeInMs.getMonth()+1;
  const date = timeInMs.getDate();
  const time = date + '.' + month + '.' + year;
  return time;
}

export default timeConverter;
