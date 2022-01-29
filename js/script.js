
// Creating arrays for storing:

// QUESTIONS
var questionCabinet = ["What is the most popular programming problem?",
                        "What is the golden rule in programming?",
                        "How do programmers enjoy life?",
                        "Can you summarize the life of programmers in four words?",
                        "Why do programmers keep pressing the F5 button?",
                        "How programmers open a Jar?",
                        "As a programmer, where do you see yourself 10 years from now?",
                        "What are the most expensive programming languages?",
                        "The only caffè latte drink by JavaScript developers?",
                        "Can you give me a programming music note?",
                        ]
// CORRECT ANSWERS 
var answerCabinet = ["Missing a Semicolon.",
                    "If it works, don’t touch it.",
                    "When they see their codes run without error.",
                    "Eat. Sleep. Code. Repeat.",
                    "Because it's refreshing.",
                    "They use Java.",
                    "Sitting in front of a computer.",
                    "Ruby and Perl.",
                    "Mocha.",
                    "C#",
                    ]
// ALL OPTIONS
var optionsCabinet = [["Garbage collector.","Missing a Semicolon.","Coin Change.","Dining Philosophers."],
                    ["Never stop","Small codes only","If it works, don’t touch it.","01010101"],
                    ["When they see their codes run without error.","At beaches.","On mountains.","In the Matrix."],
                    ["ctrl + s, ctrl + c, ctrl + x, ctrl + v.","0 1 zero one.","code code code code.","Eat. Sleep. Code. Repeat."],
                    ["F5 is special.","Because it's refreshing.","It enables auto-coding capabilities.","It opens stackoverflow >_<"],
                    ["By opening the Lid.","Break the jar","They use Java.","Write a code to open it."],
                    ["CEO of a massive company.","Chilling in the car.","Sitting in front of a computer.","DED"],
                    ["Java.","HTML.","Python.","Ruby and Perl."],
                    ["Tea.","Coffee.","Mocha.","Hot Choco."],
                    ["C#","B major","E#","G minor"]
                        ]
// ALL OPTIONS CLICKED BY USER
var solvedAnswers = []

// Pushing empty/null values into the "solvedAnswers" array, to make sure it has same length as our ANSWERS array

answerCabinet.forEach(function () {
    solvedAnswers.push("")    
})



// Declaring all our needed variable in one place (globally)

var questionNo = 0                      // which question number are we currently on
var totalQues = questionCabinet.length; // how many total number of questions are there
var totalMarksP = 0                     // what is the % of marks we have currently
var marksAddCoefficient = 100/totalQues // amount of marks that are being awarded for each question
var i = 1                               // random variable for creating question pallette
var clickedOpsNo = 0                    // how many options the user clicked until now
var progress = 0                        // what % of the quiz is completed until now



// Declaring our initial HTML elements that we are going to use later

const quesCard_ques = document.getElementsByClassName("question_card__question")[0];
const quesCard_opts = document.getElementsByClassName("question_card__options")[0];
const quesCard_progressBar = document.getElementsByClassName("question_card__progress_bar")[0];
const infoBar = document.getElementsByClassName("info_bar")[0];


// Creating new question 

const question = document.createElement("p");
question.classList.add("question_text");


// A form for adding options/choices

const optionsForm = document.createElement("form");
optionsForm.classList.add("options_form");


// Creating an easy access question pallette

questionCabinet.forEach(function (que) {
    const quesNoSpan = document.createElement("div");
    quesNoSpan.innerHTML = `<button onclick="queCabButtonClicked(${i})">${i}</button>`;
    i=i+1;
    infoBar.appendChild(quesNoSpan);
})


// Setting questions and options for the first time 

update();
setOptions();


// functions for increasing/decreasing current question number we are on

function incQuesNo(params) {
    if (questionNo!= (totalQues-1)) {
        questionNo = questionNo + 1;
    }
    else{
        confirmSubmition()
    }
    setOptions();
}

function decQuesNo(params) {
    if (questionNo>0) {
        questionNo = questionNo - 1;
    }
    else{
        showRules()
    }
    setOptions();
}


// A function which keeps repeting/updating after 100ms

function update() {

    progress = ((clickedOpsNo)/totalQues)*100;
    // console.log(progress)

    quesCard_progressBar.style.width = `${progress}%`;
    quesCard_progressBar.style.backgroundColor = `rgb(${255-(progress*1.25)}, ${(progress*2)+10}, 43)`;

    if(progress>(100/totalQues) && progress<100){
        quesCard_progressBar.style.borderRadius = "0px 10px 10px 0px";
    }
    else{
        quesCard_progressBar.style.borderRadius = "0px";
    }

    question.innerHTML = `<b>${questionNo+1}.</b> ${questionCabinet[questionNo]}`;
    quesCard_ques.appendChild(question);

    if (questionNo==0) {
        document.getElementById("prev_B").innerHTML = "Rules"
        // document.getElementById("prev_B").style.display = "none"
    }
    else{
        document.getElementById("prev_B").innerHTML = "Previous"
        // document.getElementById("prev_B").style.display = "inherit"
    }

    if (questionNo==totalQues-1) {
        document.getElementById("next_B").innerHTML = "Submit"
        // document.getElementById("next_B").style.display = "none"
    }
    else{
        document.getElementById("next_B").innerHTML = "Next"
        // document.getElementById("next_B").style.display = "inherit"
    }

    setTimeout(update, 100); // repeat the function after 100 ms
}


// Func for setting options for the question we are currently on

function setOptions() {
    optionsForm.innerHTML = `
                        <div>
                            <input onclick="answerClicked()" type="radio" name="que_${questionNo}" id="opt_a" value="${optionsCabinet[questionNo][0]}">
                            <label class="input_label" for="opt_a">A. ${optionsCabinet[questionNo][0]}</label><br>
                        </div>
                        <div>
                            <input onclick="answerClicked()" type="radio" name="que_${questionNo}" id="opt_b" value="${optionsCabinet[questionNo][1]}">
                            <label class="input_label" for="opt_b">B. ${optionsCabinet[questionNo][1]}</label><br>
                        </div>
                        <div>
                            <input onclick="answerClicked()" type="radio" name="que_${questionNo}" id="opt_c" value="${optionsCabinet[questionNo][2]}">
                            <label class="input_label" for="opt_c">C. ${optionsCabinet[questionNo][2]}</label><br>
                        </div>
                        <div>
                            <input onclick="answerClicked()" type="radio" name="que_${questionNo}" id="opt_d" value="${optionsCabinet[questionNo][3]}">
                            <label class="input_label" for="opt_d">D. ${optionsCabinet[questionNo][3]}</label>
                        </div>
                        <div class="clicked_option"><p>Selected option : ${solvedAnswers[questionNo]}</p></div>`
                        
    quesCard_opts.appendChild(optionsForm);
    if (solvedAnswers[questionNo]=="") {
        document.getElementsByClassName("clicked_option")[0].style.display = "none"
    }
    else{
        document.getElementsByClassName("clicked_option")[0].style.display = "inherit"
    }
}


function answerClicked() {
    if (optionsCabinet[questionNo].includes(solvedAnswers[questionNo])) {
        console.log("answer already clicked!")
    }
    else{
        clickedOpsNo = clickedOpsNo+1
    }
    if(document.getElementById("opt_a").checked)
    {
        solvedAnswers[questionNo] = document.getElementById("opt_a").value
    }
    if(document.getElementById("opt_b").checked)
    {
        solvedAnswers[questionNo] = document.getElementById("opt_b").value
    }
    if(document.getElementById("opt_c").checked)
    {
        solvedAnswers[questionNo] = document.getElementById("opt_c").value
    }
    if(document.getElementById("opt_d").checked)
    {
        solvedAnswers[questionNo] = document.getElementById("opt_d").value
    }
    
    setTimeout(incQuesNo,1000);
}


// func which handles direct setting of question number

function queCabButtonClicked(num) {
    questionNo=num-1
    setOptions()
}


// func which handles the confirmation when the submit button is clicked

function confirmSubmition() {
    if (confirm(`Your progress is ${progress}% do you want to submit?`)) {
        submitQuiz()
    }
    else{
        console.log("reviwing the questions again!")
    }
}


// func which submits the quiz

function submitQuiz() {


    for (let j = 0; j < answerCabinet.length; j++) {
        if (answerCabinet[j]==solvedAnswers[j]) {
            totalMarksP = totalMarksP+marksAddCoefficient
        }
    }

    console.log(totalMarksP)

    document.getElementById("submitP").style.display = "block"
    document.getElementById("submitP").innerHTML = `<p style="font-size:30px; text-align:center; margin-top: 40px">Your Score is</p>
                                                    <p style="font-size:60px; text-align:center">${totalMarksP} %</p>
                                                    <button onclick="reloadPage()">Re-Play</button>`
}



// simple self explanatory functions

function reloadPage() {
    location.reload();
}

function showRules() {
    document.getElementById("rulesP").style.display = "block"
}

function closeRules() {
    document.getElementById("rulesP").style.display = "none"
}