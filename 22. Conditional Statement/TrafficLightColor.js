let color = prompt("Enter the Traffic light color i.e red, yellow, green :").toLowerCase();

if(color === "red"){
    console.log("STOP: Wait until the light turns green.");
}
else if (color === "yellow"){
    console.log("CAUTION: Prepare to stop or proceed with caution.");
}
else if(color === "green"){
    console.log("GO: You can proceed.");
}
else{
    console.log("INVALID INPUT: Please enter 'red', 'yellow', or 'green'.");
}