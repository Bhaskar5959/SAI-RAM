console.time("Contrived example");
try {
    console.group("TRY BLOCK ACTIONS:"); 
    console.log("Trying to reach server...")
    console.warn("It's taking awhile...."); 
    console.log("Still trying...");
    console.groupEnd(); 
    throw new Error("Can't reach server, sorry!"); 
} catch (e) {
    console.error(e.message); 
} finally { 
    console.group("FINALLY BLOCK ACTIONS:"); 
    setTimeout(function () { 
        console.log("Let's run some code independent of the server response:");
        coolFunction(); 
        console.log("Finally done with the example!");
        console.groupEnd(); 
        console.timeEnd("Contrived example");
    }, 900);
}

function coolFunction() {
    console.log("Hello from coolFunction");
}