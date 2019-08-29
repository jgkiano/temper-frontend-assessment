export default function moveArrayItem(array = [], from, to) {
  const item = array[from];
  const newArray = array.filter((_, index) => index !== from);
  newArray.splice(to, 0, item);
  return newArray;
}
