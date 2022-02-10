let helloIterator = 'Hello'[Symbol.iterator]();

// console.log(helloIterator.next())
// console.log(helloIterator.next())
// console.log(helloIterator.next())
// console.log(helloIterator.next())
// console.log(helloIterator.next())
// console.log(helloIterator.next())
class Matrix {
  constructor(width, height, element = (x, y) => undefined) {
    this.width = width;
    this.height = height;
    this.content = [];
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this.content[y * width + x] = element(x, y);
      }
} }
  get(x, y) {
    return this.content[y * this.width + x];
  }
  set(x, y, value) {
    this.content[y * this.width + x] = value;
  }
}
let nums = [5, 6]

let box = new Matrix(3, 3,nums);
console.log(box);