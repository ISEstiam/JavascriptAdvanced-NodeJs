let idTimer;

function task_async(callback)
{
    idTimer = setInterval(callback, 5000);
}

console.log("Debut");

task_async(() => {
    console.log("timeOut");
});

console.log("le processus est libre");