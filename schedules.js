function httpGet() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "http://seal.nighthawkcodingsociety.com/api/users/", false); // false for synchronous request
    xmlHttp.send(null);
    json = JSON.parse(xmlHttp.responseText);
    return json;
}

// getResult = httpGet();

classes = `
[
  {
    "GPA": [
      {
        "fives": 12,
        "fours": 22,
        "ones": 0,
        "threes": 0,
        "twos": 0,
        "userID": 1,
        "zeroes": 0
      }
    ],
    "classReviews": [
      {
        "className": "AP CSP",
        "comments": "Lots of projects",
        "daysBtwTest": "0",
        "difficulty": "3",
        "hoursOfHw": "1",
        "memorizationLevel": "0",
        "userID": 1
      },
      {
        "className": "AP US History",
        "comments": "Wayyyyy too much memorization",
        "daysBtwTest": "7",
        "difficulty": "3",
        "hoursOfHw": "1",
        "memorizationLevel": "5",
        "userID": 1
      }
    ],
    "classes": [
      {
        "per1": "AP English Language",
        "per2": "AP Calculus BC",
        "per3": "AP Physics C: Mechanics",
        "per4": "Court Sports",
        "per5": "AP Computer Science: Principles",
        "teach1": "Cara-Lisa Jenkins",
        "teach2": "Michelle Lanzi-Sheaman",
        "teach3": "Ifeng Liao",
        "teach4": "Dale Hanover",
        "teach5": "Sean Yeung",
        "userID": 1
      }
    ],
    "fullname": "Alexander Lu",
    "grade": 11,
    "id": 1,
    "tasks": [
      {
        "taskName": "Backend stuff,APEL HW",
        "time": "300,50",
        "userID": 1
      }
    ],
    "username": "eris29"
  },
  {
    "GPA": [
      {
        "fives": 2,
        "fours": 13,
        "ones": 0,
        "threes": 2,
        "twos": 0,
        "userID": 2,
        "zeroes": 0
      }
    ],
    "classReviews": [
      {
        "className": "AP Biology",
        "comments": "Lots of memorization",
        "daysBtwTest": "21",
        "difficulty": "2",
        "hoursOfHw": "1",
        "memorizationLevel": "4",
        "userID": 2
      }
    ],
    "classes": [
      {
        "per1": "AP Calculus AB",
        "per2": "AP Biology",
        "per3": "Honors Humanities 2",
        "per4": "AP Chinese",
        "per5": "AP Computer Science: Principles",
        "teach1": "Briana West",
        "teach2": "Julia Cheskaty",
        "teach3": "Jennifer Philyaw",
        "teach4": "Ying Tzy Lin",
        "teach5": "Sean Yeung",
        "userID": 2
      }
    ],
    "fullname": "Ethan Zhao",
    "grade": 10,
    "id": 2,
    "tasks": [
      {
        "taskName": "Frontend stuff,AP Calc Study",
        "time": "300,30",
        "userID": 2
      }
    ],
    "username": "dolfin"
  },
  {
    "GPA": [
      {
        "fives": 0,
        "fours": 11,
        "ones": 0,
        "threes": 0,
        "twos": 1,
        "userID": 3,
        "zeroes": 0
      }
    ],
    "classReviews": [
      {
        "className": "AP Calculus AB",
        "comments": "Need to understand the concepts",
        "daysBtwTest": "21",
        "difficulty": "4",
        "hoursOfHw": "2",
        "memorizationLevel": "3",
        "userID": 3
      }
    ],
    "classes": [
      {
        "per1": "AP Chemistry",
        "per2": "Intro to Finance",
        "per3": "AP World History",
        "per4": "AP Calculus AB",
        "per5": "AP Computer Science: Principles",
        "teach1": "Kenneth Ozuna",
        "teach2": "Amanda Nelson",
        "teach3": "Megan Volger",
        "teach4": "Cherie Nydam",
        "teach5": "Sean Yeung",
        "userID": 3
      }
    ],
    "fullname": "Sophia Tang",
    "grade": 10,
    "id": 3,
    "tasks": [
      {
        "taskName": "AP Chem Lab,APCSP Backend",
        "time": "60,300",
        "userID": 3
      }
    ],
    "username": "shattered"
  },
  {
    "GPA": [
      {
        "fives": 17,
        "fours": 11,
        "ones": 0,
        "threes": 0,
        "twos": 0,
        "userID": 4,
        "zeroes": 0
      }
    ],
    "classReviews": [
      {
        "className": "AP US History",
        "comments": "Wayy too much memorization",
        "daysBtwTest": "7",
        "difficulty": "3",
        "hoursOfHw": "1",
        "memorizationLevel": "5",
        "userID": 4
      }
    ],
    "classes": [
      {
        "per1": "AP English Language",
        "per2": "AP Computer Science A",
        "per3": "AP US History",
        "per4": "AP Statistics",
        "per5": "AP Computer Science: Principles",
        "teach1": "Cara-Lisa Jenkins",
        "teach2": "John Mortensen",
        "teach3": "Thomas Swanson",
        "teach4": "Michelle Derksen",
        "teach5": "Sean Yeung",
        "userID": 4
      }
    ],
    "fullname": "Lily Wu",
    "grade": 11,
    "id": 4,
    "tasks": [
      {
        "taskName": "APEL HW,APCSA HW",
        "time": "50,60",
        "userID": 4
      }
    ],
    "username": "calicocat"
  }
]`
getResult = JSON.parse(classes)

function compare(a, b) {
    classesA = getResult[a]["classes"][0];
    classesB = getResult[b]["classes"][0];
    for (i=1; i<6; i++) {
        clss="per" + i;
        teach = "teach" + i;
        classA=(classesA[clss] + ":" + classesA[teach])
        classB=(classesB[clss] + ":" + classesB[teach])
        if (classA == classB) {
            console.log("Match found!" + classA + " = " + classB)
        }
    }
}

console.log(getResult[0]["classes"]);