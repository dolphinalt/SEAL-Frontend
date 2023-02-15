// // 1 means completed, 0 means not

function GET () {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "http://seal.nighthawkcodingsociety.com/api/users/", false); // false for synchronous request
    xmlHttp.send(null);
    json = JSON.parse(xmlHttp.responseText);
    console.log(json);
    return json;
}
function PUT (username, tasks, time) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("PUT", "https://seal.nighthawkcodingsociety.com/api/users/time/create", false); // false for synchronous request
    xmlHttp.send("{\"username\": \"" + username + "\", \"tasks\": \"" + tasks + "\", \"time\": \"" + time + "\"}");
    json = JSON.parse(xmlHttp.responseText);
    return json;
}

get = GET();

getTasks = get[0]["tasks"];
getTimes = get[0]["times"];
getTasksCompleted = get[0]["tasksCompleted"];

for (let i = 0; i < getTasks.length; i++) {
    push2(getTasks[i], getTimes[i]);
}



// console.log(getTasks[0]["tasks"]);

function calculateSleepTime(taskCompleted, times) {
    let length = taskCompleted.length;
    var totaltime = 0;
    for (let i = 0; i < length; i++) {
        if (taskCompleted[i] == "0") {
            totaltime = totaltime + parseInt(times[i]);
        }
    }
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    
    var taskMinutes = totaltime % 60;
    totaltime = totaltime - taskMinutes;
    var taskHours = totaltime / 60;
    
    hours = hours + taskHours;
    minutes = minutes + taskMinutes;



    if (minutes >= 60) {
        hours = hours + 1;
        minutes = minutes - 60;
    }

    var SleepTime = String(hours) + ":" + String(minutes);
    document.getElementById("task0").innerHTML = "Estimated Sleep Time: " + SleepTime;
    return SleepTime;
}