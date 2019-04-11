function getTopLogs(input, K){

	let map = new Map();
	for(let i = 0; i < input.length; i++){
		let cur = input[i];
		let key = cur.business_url;
		map.set(key, (map.get(key) || 0) + 1);
	}
	
	let iterator = map.entries();
	let finalMap = [...iterator];
	finalMap.sort(function(a, b){return b[1] - a[1]});
	
	for(let k = 0; k < K; k++){
		console.log(finalMap[k]);
	}
}

/*
logs = [{"business_url": "http://yelp.com/daario"},{"business_url": "http://yelp.ft/daario"},{"business_url": "http://yelp.com/sammys"},{"business_url": "http://yelp.com/foodies"},{"business_url": "http://yelp.fr/foodies"}, {"business_url": "http://yelp.com/daario"}, {"business_url": "http://yelp.com/sammys"}, {"business_url": "http://yelp.com/foodies"}, {"business_url": "http://yelp.com/foodies"}, {"business_url": "http://yelp.com/foodies"}]

getTopLogs(logs, 3);
["http://yelp.com/foodies", 4]
["http://yelp.com/daario", 2]
["http://yelp.com/sammys", 2]

*/