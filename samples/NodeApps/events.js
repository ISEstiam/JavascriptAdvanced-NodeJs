const eventEmitter = require('events');
const timer = new eventEmitter();

function launchTimer()
{
    //setTimeout(() => {timer.emit('timer1')}, 1000);
    //setTimeout(() => {timer.emit('timer2')}, 2000);
    setTimeout(() => {timer.emit('timer3')}, 3000);
}

console.log("debut");
timer.on('timer1', () => console.log("timer 1 déclanché"));
timer.on('timer2', () => console.log("timer 2 déclanché"));
timer.on('timer3', () => console.log("timer 3 déclanché"));
launchTimer();
console.log("le processus est libre");