export default function checkDuplicated(arr) {
  const finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      finalArr.push(arr[i]);
    }
  }
  return finalArr;
}