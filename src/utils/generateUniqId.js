function generateUniqId(min, max) {
  return Math.floor( min + Math.random() * (max-min) );
}

export default generateUniqId;
