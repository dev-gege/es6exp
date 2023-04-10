let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      resolve("Tada 1")
    } else {
      resolve("Tada 2")
    }
  }, 3000)
  
});

p.then((data) => {
  console.log("success: :", data))
  throw new Error("Error thrown ...")
  return "blaa" // we have to return something to get value from second then
}).
  then((data) => { // data should be blaa
    console.log("success2: " + data)
  }).
  catch((error) => console.error("error :", error)) // catch should trigger when error is thrown
