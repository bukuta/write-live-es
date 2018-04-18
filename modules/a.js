export default function add(x, y) {
  return x + y;
}

let wait = ms => new Promise(resolve => setTimeout(resolve, ms))

class Rect {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  async area() {
    let x = this.x;
    let y = this.y;
    await wait(2000);
    return x * x + y * y;
  }
}

class Cube extends Rect {
  constructor(x) {
    super(x, x);
  }
}

export { Rect, Cube };
