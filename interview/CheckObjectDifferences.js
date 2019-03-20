function diff(actual, expected) {
  // Helper function to flatten out the object
  var flatten = function(obj){
      let rObj = {};
      
      for(let key of Object.keys(obj)){
        if(typeof obj[key] === "object" && obj[key] !== null){
          let flatObj = flatten(obj[key]);
          for(let subkey of Object.keys(flatObj)){
              rObj[key + "." + subkey] = flatObj[subkey];
          }
        } else{
            rObj[key] = obj[key];
        }
      }
      return rObj;
  };
  
  //Comparison Logic
  let rMap = [];
  actual = flatten(actual);
  expected = flatten(expected);
  for(let i of Object.keys(actual)){
      if(expected[i]){
        //If expected contains the key:
        if(actual[i] !== expected[i]){
            rMap.push(["-", i, expected[i]]);
        }
      } else{
          rMap.push(["+", i, actual[i]]);
      }
  
  }

  for(let j of Object.keys(expected)){
      if(!actual[j]){
          rMap.push(["-", j, expected[j]]);
      }
  
  }
  return rMap;
}

/*
actual = {
        apples: 3,
        oranges: {
          navel: 5
		}
	  };

expected = {
	apples: 3,
	oranges: {
		valencia: 4
		}
	};

diff(actual, expected)
Output:
[
  [
    "+",
    "oranges.navel",
    5
  ],
  [
    "-",
    "oranges.valencia",
    4
  ]
]

*/