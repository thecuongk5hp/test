function square1(input: number | number[]): number | number[] {
    if (typeof input === 'number') {
      return input * input;
    } else {
      return input.map((num) => num * num);
    }
  }
  console.log(square1(5)); // Kết quả: 25
  console.log(square1([1, 2, 3])); // Kết quả: [1, 4, 9]