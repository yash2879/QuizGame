var questionCabinet = ["abc is abc s111111111o how abc?",
                        "xyz xyz xyz so 2222222xyz?",
                        "xyz xyz xyz s33333333333o xyz?",
                        "xyz xyz xyz s00000000o xyz?",
                        "xyz xyzqqqqqqqqqqq xyz so xyz?",
                        "abc is abc s111111111o how abc?",
                        "xyz xyz xyz so 2222222xyz?",
                        "xyz xyz xyz s33333333333o xyz?",
                        "xyz xyz xyz s00000000o xyz?",
                        "abc is abc s111111111o how abc?",
                        "xyz xyz xyz so 2222222xyz?",
                        "xyz xyz xyz s33333333333o xyz?",
                        "xyz xyz xyz s00000000o xyz?",
                        "abc is abc s111111111o how abc?",
                        "xyz xyz xyz so 2222222xyz?",
                        "xyz xyz xyz s33333333333o xyz?",
                        "xyz xyz xyz s00000000o xyz?",
                        "abc is abc s111111111o how abc?",
                        "xyz xyz xyz so 2222222xyz?",
                        "xyz xyz xyz s33333333333o xyz?"];
var answerCabinet = []
var optionsCabinet = [["a","b","c","d"],
                    ["a1","b1","c1","d1"],
                    ["a2","b2","c2","d2"],
                    ["a3","b3","c3","d3"],
                    ["a","b","c","d"],
                    ["a","b","c","d"],
                    ["a","b","c","d"],
                    ["a","b","c","d"],
                    ["a","b","c","d"],
                    ["a","b","c","d"],
                    ["a","b","c","d"],
                    ["a","b","c","d"],
                    ["a","b","c","d"],
                    ["a","b","c","d"],
                    ["a","b","c","d"],
                    ["a","b","c","d"],
                    ["a","b","c","d"],
                    ["a","b","c","d"],
                    ["a","b","c","d"],
                    ["a","b","c","d"],
                    ["a","b","c","d"]]

var questionNo = 0
var totalQues = questionCabinet.length;

const quesCard_ques = document.getElementsByClassName("question_card__question")[0];
const quesCard_opts = document.getElementsByClassName("question_card__options")[0];
const quesCard_progressBar = document.getElementsByClassName("question_card__progress_bar")[0];

const question = document.createElement("p");
question.classList.add("question_text");


const optionsForm = document.createElement("form");
optionsForm.classList.add("options_form");

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
    console.log(progress)
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
                            <input type="radio" name="opt1" id="opt_a" value="${optionsCabinet[quesNum][0]}">
                            <label for="opt_a">${optionsCabinet[quesNum][0]}</label><br>
                            <input type="radio" name="opt2" id="opt_b" value="${optionsCabinet[quesNum][1]}">
                            <label for="opt_b">${optionsCabinet[quesNum][1]}</label><br>
                            <input type="radio" name="opt3" id="opt_c" value="${optionsCabinet[quesNum][2]}">
                            <label for="opt_c">${optionsCabinet[quesNum][2]}</label><br>
                            <input type="radio" name="opt4" id="opt_d" value="${optionsCabinet[quesNum][3]}">
                            <label for="opt_d">${optionsCabinet[quesNum][3]}</label>`;
    quesCard_opts.appendChild(optionsForm);
}