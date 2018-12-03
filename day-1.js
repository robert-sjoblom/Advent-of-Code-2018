// part 1
eval(input) // 416

// part 2
// this is a naive implementation, but my math isn't good enough
// to create a better one
const data = input.split('\n').map(x => Number(x))
let freq = 0
const seen = {}
let a = true
while(a) {
  data.forEach(x => {
    freq += x
    if (seen[freq] != undefined) {
      console.log(freq) // 56752
      a = false
    } else {
      seen[freq] = 1
    }
  })
}
