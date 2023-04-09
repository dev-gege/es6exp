let color = "blue";
let grade = 10
let type = "go"

let obj = {
  color,
  grade,
  [type]: function() {
    console.log("trigger function")
  }
}

console.log(obj.color)
console.log(obj.grade)

obj.go();
