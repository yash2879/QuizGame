var questionCabinet = ["abc is abc s111111111o how abc?","xyz xyz xyz so 2222222xyz?","xyz xyz xyz s33333333333o xyz?","xyz xyz xyz s00000000o xyz?","xyz xyzqqqqqqqqqqq xyz so xyz?"];
var questionNo = 0
var totalQues = questionCabinet.length;

const quesCard_ques = document.getElementsByClassName("question_card__question")[0];

const question = document.createElement("p");
question.classList.add("question_text");

update();

function incQuesNo(params) {
    if (questionNo!=(totalQues-1)) {
        questionNo = questionNo + 1;
    }
}
function decQuesNo(params) {
    if (questionNo>0) {
        questionNo = questionNo - 1;
    }
}

function update() {


    var progress = ((questionNo+1)/totalQues)*100;
    console.log(progress)


    question.innerHTML = `<b>${questionNo+1}.</b> ${questionCabinet[questionNo]}`;
    quesCard_ques.appendChild(question);
    setTimeout(update, 100);
}