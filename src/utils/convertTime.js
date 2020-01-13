function timeConverter(UNIX_timestamp) {
  const timeInMs = new Date(UNIX_timestamp);
  const year = timeInMs.getFullYear();
  const month = timeInMs.getMonth();
  const date = timeInMs.getDate();
  const time = date + '.' + month + '.' + year;
  return time;
}

export default timeConverter;
