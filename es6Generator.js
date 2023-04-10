function* someFunc() {
  console.log("Called next()")
  yield "Some message"
}

let some = someFunc()
console.log(some)
let next = some.next()
console.log(next)
let done = some.next()
console.log(done)


function* someFunc2() {
  console.log("msg1")
  yield "one"
  console.log("this is not called until the second next")
  yield "two"
  console.log("another log message")
  yield "three"
  console.log("call when done .")
}

let some2 = someFunc2()
for (let s of some2) {
  console.log(s)
}
