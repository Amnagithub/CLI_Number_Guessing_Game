import inquirer from "inquirer";
const randomenumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userguessednumber",
        type: "number",
        message: "please guess a number between 1-6",
    },
]);
if (answer.userguessednumber === randomenumber) {
    console.log("you guess right number ");
}
else {
    console.log("you guess wrong number");
}
