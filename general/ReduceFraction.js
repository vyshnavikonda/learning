function reduceFraction (input) {
  let getGcd = function (num, den) {
    return den ? getGcd(den, num%den) : num;
  };
  
  let num = input[0];
  let den = input[1];
  let gcd = getGcd (num, den);
  return [num/gcd, den/gcd];
}

console.log(reduceFraction([3413358, 13427]));

//[ 117702, 463 ]