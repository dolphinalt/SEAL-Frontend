function httpGet() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "http://seal.nighthawkcodingsociety.com/api/users/", false); // false for synchronous request
    xmlHttp.send(null);
    json = JSON.parse(xmlHttp.responseText);
    return json;
}

getResult = httpGet();

getResult = JSON.parse(classes)

function compare(a, b) {
  classesA = getResult[a]["classes"][0];
  classesB = getResult[b]["classes"][0];
  matches = 0
  for (i=1; i<6; i++) {
      clss="per" + i;
      teach = "teach" + i;
      classA=(classesA[clss] + ":" + classesA[teach])
      classB=(classesB[clss] + ":" + classesB[teach])
      if (classA == classB) {
          matches += 1
          console.log("Match found!" + classA + " = " + classB)
      }
  }
  return matches
}

for (a=0; a <= (getResult.length); a++) {
    for (b=a; b <= (getResult.length)-1; b++) {
      if (a==b) {
          continue
      }
      console.log("Comparing " + a + " and " + b)
      matches = compare(a, b)
      console.log("Matches: " + matches)
      console.log("================================")
    }
}