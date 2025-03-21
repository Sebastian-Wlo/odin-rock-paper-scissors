console.log("Hello from the external js file");
function getComputerChoice() {
    const max = 3;
    let shape = "";
    let outcome = Math.floor(Math.random() * max);
    switch (outcome) {
        case 1:
            shape = "rock";
            break;
        case 2:
            shape = "paper";
            break
        default:
            shape = "scissors";
            break;
        };
    return shape
}
