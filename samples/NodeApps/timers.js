
var cpt = 1;

var idIntervall = setInterval(()=>{ console.log("setInterval : ", cpt++)}, 1000);
setTimeout(()=>{ clearInterval(idIntervall)}, 10000);