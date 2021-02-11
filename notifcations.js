/**
 * Function name: add
 * Description: Adds the two values passed in
 * @param {int} a: first value to add
 * @param {int} b: second value to add
 * @return {int} sum: Value of the two numbers added together
 */
/**
 * When to ask for permission after loading the paging 
 *      or will we input a feature to enable notifs later in the sprints
 * If the premission is denied at load time, do we ask regardless
 * 
 */
var pomoEnd = new Audio();
var pomoStart = new Audio();
 
checkForPermission();

function showPomoNotif(){
    const workNotif = new Notification("Productoro",{
        body: "Your break has ended. A new pomo begins now :)"
        //icon: potentially a logo for the timer?
    });
    //pomoStart.play();
}

function showLongBreakNotif(){
    let title = "Productoro";
    let body = "You have completed a pomo! Your long break begins now :)";
    let icon = 'https://bit.ly/2DYqRrh';
    new Notification(title,{body, icon});
    //workNotif.close();    
    //pomoEnd.play();
}

function showshortBreakNotif(){
    const workNotif = new Notification("Productoro",{
        body: "You have completed a pomo! Your short break begins now:)"
        //icon: potentially a logo for the timer?
    });
    //pomoEnd.play();
}

function checkForPermission(){
     if(Notification.permission === "granted"){
         showLongBreakNotif();
         return true;
     }
     else{
         Notification.requestPermission().then(function(permission) {
             console.log(permission);
             console.log(!window.Notification);
             console.log(document.visibilityState);
             if(permission === "granted"){
                showLongBreakNotif();
                 return true;
             }
             else{
                 return false;
             }
         });
     }
 }
 
/*if (Notification.permission === "granted") {

} else if (Notification.permission !== "denied") {
    Notification.requestPermission();
}*/
 



/*let pomoEndSound = new Audio();
let breakEndSound = new Audio();

function pomoEndNotification() {
    return new Notification("Productoro", {
        body: "Pomodoro session has ended break starts now"
    });
    //pomoEndSound.play();
}

function breakEndNotification() {
    const breakNotification = new Notification("Productoro", {
        body: "Break has ended next pomodoro sessions starts now"
    });
    breakEndSound.play();
}

if (Notification.permission === "granted") {

} else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function(permission) {
        console.log(permission);
        if(permission === "granted") {
            pomoEndNotification();
            console.log("true");
            var not = new Notification("test");
        }
    })
}*/
