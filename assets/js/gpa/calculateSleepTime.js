// 1 means completed, 0 means not
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
    return SleepTime;
}