// eslint-disable-next-line import/no-anonymous-default-export
export default function (n) {
  if (!n) {
    return [];
  }
  let x = n;
  let data = [{ x: n }];
  while (x !== 1) {
    if (x % 2 === 1) {
      x = x * 3 + 1;
    } else {
      x = x / 2;
    }
    data.push({ x: x });
  }
  return data;
}
