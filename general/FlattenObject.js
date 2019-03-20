var flatten = function(obj){
	let rObj = {};
	for(let key of Object.keys(obj)){
            if(typeof obj[key] === "object" && obj[key] !== null){
                let flatObj = flatten(obj[key]);
                for(let subkey of Object.keys(obj[key])){
                    rObj[key + "." + subkey] = flatObj[subkey];			
                }
            } else{
                rObj[key] = obj[key];
            }
    }
    return rObj;
}

//obj = {"Apple":3, "Orange":{"banana":0, "lemon":0}} flatten(obj)
//Output: {  "Apple": 3,  "Orange.banana": 0,  "Orange.lemon": 0};