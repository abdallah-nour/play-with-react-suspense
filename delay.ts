export default function delay<T>(fn: Promise<T> | T, ms = 1000) {
  return new Promise<T>((res) => {
    setTimeout(() => {
      console.log('Delay done!');
      res(fn);
    }, ms);
  });
}
