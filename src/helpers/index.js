export function arrToMap(array) {
  return array.reduce((newArray, item) => {
    newArray[item.id] = item;
    return newArray;
  }, {});
}

export function mapToArr(obj) {
  return Object.keys(obj).map(id => obj[id]);
}
