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
                        ];
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
var optionsCabinet = [["Garbage collector.","Missing a Semicolon.","Coin Change.","Dining Philosophers."],
                    ["Never stop","Small codes only","If it works, don’t touch it.","01010101"],
                    ["When they see their codes run without error.","At beaches.","On moountains.","In the Matrix."],
                    ["ctrl + s ctrl + c ctrl + x ctrl + v","0 1 zero one.","code code code code.","Eat. Sleep. Code. Repeat."],
                    ["F5 is special.","Because it's refreshing.","It enables auto-coding capabilities.","It opens stackoverflow >_<"],
                    ["By opening the Lid.","Break the jar","They use Java.","Write a code to open it."],
                    ["CEO of a massive company.","Chilling in the car.","Sitting in front of a computer.","DED"],
                    ["Java.","HTML.","Python.","Ruby and Perl."],
                    ["Tea.","Coffee.","Mocha.","Hot Choco."],
                    ["C#","B major","E#","G minor"]]

var questionNo = 0
var totalQues = questionCabinet.length;

var clickedOption = null;
var totalMarksP = 0;
var marksAddCoefficient = 100/totalQues;


const quesCard_ques = document.getElementsByClassName("question_card__question")[0];
const quesCard_opts = document.getElementsByClassName("question_card__options")[0];
const quesCard_progressBar = document.getElementsByClassName("question_card__progress_bar")[0];

const infoBar = document.getElementsByClassName("info_bar")[0];

const question = document.createElement("p");
question.classList.add("question_text");


const optionsForm = document.createElement("form");
optionsForm.classList.add("options_form");

const quesNoSpan = document.createElement("span");

// const option = document.createElement("input");
// option.setAttribute("type", "radio");
// option.classList.add("input_options");

// const label = document.createElement("label");

update();
setOptions(questionNo);
function incQuesNo(params) {
    if (questionNo!= (totalQues-1)) {
        questionNo = questionNo + 1;
    }
    setOptions(questionNo);
}
function decQuesNo(params) {
    if (questionNo>0) {
        questionNo = questionNo - 1;
    }
    setOptions(questionNo);
}

function update() {


    var progress = ((questionNo+1)/totalQues)*100;
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

    setTimeout(update, 100);
}

function setOptions(quesNum) {
    optionsForm.innerHTML = `
                        <div>
                            <input onclick="answerClicked()" type="radio" name="que_${questionNo}" id="opt_a" value="${optionsCabinet[quesNum][0]}">
                            <label class="input_label" for="opt_a">A. ${optionsCabinet[quesNum][0]}</label><br>
                        </div>
                        <div>
                            <input onclick="answerClicked()" type="radio" name="que_${questionNo}" id="opt_b" value="${optionsCabinet[quesNum][1]}">
                            <label class="input_label" for="opt_b">B. ${optionsCabinet[quesNum][1]}</label><br>
                        </div>
                        <div>
                            <input onclick="answerClicked()" type="radio" name="que_${questionNo}" id="opt_c" value="${optionsCabinet[quesNum][2]}">
                            <label class="input_label" for="opt_c">C. ${optionsCabinet[quesNum][2]}</label><br>
                        </div>
                        <div>
                            <input onclick="answerClicked()" type="radio" name="que_${questionNo}" id="opt_d" value="${optionsCabinet[quesNum][3]}">
                            <label class="input_label" for="opt_d">D. ${optionsCabinet[quesNum][3]}</label>
                        </div>`;
    quesCard_opts.appendChild(optionsForm);
}

function answerClicked() {
    if(document.getElementById("opt_a").checked)
    {
        clickedOption = document.getElementById("opt_a").value;
    }
    if(document.getElementById("opt_b").checked)
    {
        clickedOption = document.getElementById("opt_b").value;
    }
    if(document.getElementById("opt_c").checked)
    {
        clickedOption = document.getElementById("opt_c").value;
    }
    if(document.getElementById("opt_d").checked)
    {
        clickedOption = document.getElementById("opt_d").value;
    }
    if(checkCorrect())
    {
        totalMarksP = marksAddCoefficient+totalMarksP;
        console.log(totalMarksP);
    }
    setTimeout(incQuesNo,1000);
}

function checkCorrect() {
    if (clickedOption == answerCabinet[questionNo]) {
        return true;
    }
}

questionCabinet.forEach(function (que) {
    var i = 1;

    quesNoSpan.innerHTML = `${i}`;
    i=i+1;

    infoBar.appendChild(quesNoSpan);

})