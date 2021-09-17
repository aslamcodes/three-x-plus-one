// eslint-disable-next-line import/no-anonymous-default-export
export default function (n) {
  if (!n) {
    return [];
  }

  let data = [{ x: n }];
  while (n !== 1) {
    if (n % 2 === 1) {
      n = n * 3 + 1;
    } else {
      n = n / 2;
    }
    data.push({ x: n });
  }
  return data;
}
