const Guess = document.querySelector('.guess');
const Message = document.querySelector('.message');
const Submit = document.querySelector('.submit');
const Reset = document.querySelector('.reset');
const Remains = document.querySelector('.remains');


let min = 1;
let max = 100;
let Answer;

function Ans() {
    Answer = Math.round(Math.random() * (max - min) * min + 1);
    return Answer;
}
let chanse = 1;
let remainsNum = 10;
let run = true;

Answer = Ans();
Remains.textContent = remainsNum;

Submit.addEventListener('click', function() {

    Message.textContent = "";
    let guessValue = parseInt(Guess.value);

    if (!isNaN(guessValue) && guessValue >= min && guessValue <= max && chanse < 10) {

        if (guessValue == Answer) {
            Message.textContent = "!!CONGRATULATIONS!! You Got it Right in " + (chanse + 1) + " Attempts.";
            run = false;
        } else if (guessValue < Answer + 5 && guessValue > Answer - 5) {
            Message.textContent = "You're Almost There!";
        } else if (guessValue > Answer) {
            Message.textContent = "It's TOO HIGH!";
        } else if (guessValue < Answer) {
            Message.textContent = "It's TOO LOW!";
        }

        chanse++;
        remainsNum--;

    } else if (chanse > 9) {
        Message.textContent = "SORRY!!You are Out of Attempts!. Answer is " + Answer;
        Submit.disabled = true;
    } else {
        Message.textContent = "Please enter a Valid Number";
    }

    Remains.textContent = remainsNum;
});

Reset.addEventListener('click', function() {
    chanse = 0;
    remainsNum = 10;
    Submit.disabled = false;
    Answer = Ans();
    Message.textContent = "";
    Guess.value = "";
    Remains.textContent = remainsNum;
});
