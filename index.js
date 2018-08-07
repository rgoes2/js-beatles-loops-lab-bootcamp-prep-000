function theBeatlesPlay (musicians,instruments){
  var newArray = [];
  for (var i = 0; i < 4; i++){
  
  newArray[i] = `${musicians[i]} plays ${instruments[i]}`; 
  }
  return newArray;
}
function johnLennonFacts (facts){
  var countdown = facts.length;
  while (countdown >= 0){
    facts[countdown] = `${facts[countdown]}!!!`;
    --countdown
  }
  return facts
}