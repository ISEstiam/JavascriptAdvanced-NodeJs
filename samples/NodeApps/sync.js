function task_sync()
{
    let timeOut = Date.now() + 5000;

    while(Date.now() < timeOut){};

    return "Tache est terminée";
}

console.log("Debut");
reponse = task_sync();
console.log(reponse);
console.log("processus est libre");