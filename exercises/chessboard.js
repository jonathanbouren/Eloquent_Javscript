

function printChessboard(num) {
  let line = '#   '.repeat(num);
  for (let i = 1; i <= num; i++) {
    if (i % 2 !== 0) {
      console.log(' ', line)
    } else {
      console.log(line)
    }
  }
}


printChessboard(20);