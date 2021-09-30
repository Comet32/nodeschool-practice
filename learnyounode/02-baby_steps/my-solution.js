const [,,...nums] = process.argv;

const sum = nums.reduce((total, num) => +num + total, 0)

console.log(sum)
