const input = "2 3 0 3 10 11 12 1 1 0 1 99 2 1 1 2"
const values = input.split(' ').map(x => Number(x))
values.slice(0, 3) /*?*/
let sum = 0

function chomper2(c, m, p) {
  let sum = 0
  if (c != 0) {
    const results = []
    for (let i = 0; i < c; i++) {
      const result = chomper2(values[p], values[p + 1], p + 2)
      const child_sum = result[0]
      results.push(child_sum)
      p = result[1]
    }
  }
}



/*
PART 1 co-authored with Andreas Lymalm
function chomper(c, m, p) {
  let sum = 0
  if (c != 0) {
    for (let i = 0; i < c; i++) {
      const result = chomper(values[p], values[p+1], p+2)
      sum += result[0]
      p = result[1]
    }
  }

  const result = sum_of_m(m, p)
  return [result[0]+sum, result[1]]
}

function sum_of_m(m, p) {
  return [values.slice(p, p+m).reduce((a, b) => a+b, 0), p+m]
}

console.log(chomper(values[0], values[1], 2))

*/