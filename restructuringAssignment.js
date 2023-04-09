let houses = [
  {
    "name": "Blue house",
    "address": "Blue Street 52",
    "owner": "JohnDoe"
  },
   {
    "name": "Red house",
    "address": "Red Street 52",
    "owner": "JaneDoe"
  },
   {
    "name": "Green house",
    "address": "Green Street 52",
    "owner": "JackDoe"
  }  
]

let [,JaneDoe] = houses;

function logAddress({ address }) {
  console.log(address) 
}

logAddress(JaneDoe)
