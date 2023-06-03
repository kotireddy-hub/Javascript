function handleToVote() {
    const age = document.getElementById("age").value;
    const Vote_age = 18;
    if(age){
        if (age >= Vote_age) {
            console.log("Yes you can vote");
        }else{
            console.log(`YOu can't beacuse you age is ${age}`);
        }
    }else{
        console.log("Please enter the age ")
    }
}