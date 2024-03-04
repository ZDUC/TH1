const questions = [
    { group: 1, question: "Câu hỏi 1", type: "trueFalse", answer: "true" },
    { group: 1, question: "Câu hỏi 2", type: "trueFalse", answer: "false" },
    { group: 1, question: "Câu hỏi 3", type: "trueFalse", answer: "true" },
    { group: 1, question: "Câu hỏi 4", type: "trueFalse", answer: "false" },
    { group: 1, question: "Câu hỏi 5", type: "trueFalse", answer: "true" },
    { group: 1, question: "Câu hỏi 6", type: "trueFalse", answer: "true" },
    { group: 1, question: "Câu hỏi 7", type: "trueFalse", answer: "false" },
    { group: 1, question: "Câu hỏi 8", type: "trueFalse", answer: "false" },
    { group: 1, question: "Câu hỏi 9", type: "trueFalse", answer: "true" },
    { group: 1, question: "Câu hỏi 10", type: "trueFalse", answer: "false" },
    { group: 2, question: "Câu hỏi 11", type: "multipleChoice", options: ["Tùy chọn 1", "Tùy chọn 2", "Tùy chọn 3", "Tùy chọn 4"], answer: "Tùy chọn 1" },
    { group: 2, question: "Câu hỏi 12", type: "multipleChoice", options: ["Tùy chọn 1", "Tùy chọn 2", "Tùy chọn 3", "Tùy chọn 4"], answer: "Tùy chọn 2" },
    { group: 2, question: "Câu hỏi 13", type: "multipleChoice", options: ["Tùy chọn 1", "Tùy chọn 2", "Tùy chọn 3", "Tùy chọn 4"], answer: "Tùy chọn 3" },
    { group: 2, question: "Câu hỏi 14", type: "multipleChoice", options: ["Tùy chọn 1", "Tùy chọn 2", "Tùy chọn 3", "Tùy chọn 4"], answer: "Tùy chọn 4" },
    { group: 2, question: "Câu hỏi 15", type: "multipleChoice", options: ["Tùy chọn 1", "Tùy chọn 2", "Tùy chọn 3", "Tùy chọn 4"], answer: "Tùy chọn 2" },
    { group: 2, question: "Câu hỏi 16", type: "multipleChoice", options: ["Tùy chọn 1", "Tùy chọn 2", "Tùy chọn 3", "Tùy chọn 4"], answer: "Tùy chọn 1" },
    { group: 2, question: "Câu hỏi 17", type: "multipleChoice", options: ["Tùy chọn 1", "Tùy chọn 2", "Tùy chọn 3", "Tùy chọn 4"], answer: "Tùy chọn 3" },
    { group: 2, question: "Câu hỏi 18", type: "multipleChoice", options: ["Tùy chọn 1", "Tùy chọn 2", "Tùy chọn 3", "Tùy chọn 4"], answer: "Tùy chọn 4" },
    { group: 2, question: "Câu hỏi 19", type: "multipleChoice", options: ["Tùy chọn 1", "Tùy chọn 2", "Tùy chọn 3", "Tùy chọn 4"], answer: "Tùy chọn 2" },
    { group: 2, question: "Câu hỏi 20", type: "multipleChoice", options: ["Tùy chọn 1", "Tùy chọn 2", "Tùy chọn 3", "Tùy chọn 4"], answer: "Tùy chọn 3" },

    { group: 3, question: "Câu hỏi 21", type: "multipleAnswer", options: ["Tùy chọn 1", "Tùy chọn 2", "Tùy chọn 3", "Tùy chọn 4"], answer: ["Tùy chọn 1", "Tùy chọn 3"] },
    { group: 3, question: "Câu hỏi 22", type: "multipleAnswer", options: ["Tùy chọn 1", "Tùy chọn 2", "Tùy chọn 3", "Tùy chọn 4"], answer: ["Tùy chọn 1", "Tùy chọn 2"] },
    { group: 3, question: "Câu hỏi 23", type: "multipleAnswer", options: ["Tùy chọn 1", "Tùy chọn 2", "Tùy chọn 3", "Tùy chọn 4"], answer: ["Tùy chọn 2", "Tùy chọn 3"] },
    { group: 3, question: "Câu hỏi 24", type: "multipleAnswer", options: ["Tùy chọn 1", "Tùy chọn 2", "Tùy chọn 3", "Tùy chọn 4"], answer: ["Tùy chọn 1", "Tùy chọn 4"] },
    { group: 3, question: "Câu hỏi 25", type: "multipleAnswer", options: ["Tùy chọn 1", "Tùy chọn 2", "Tùy chọn 3", "Tùy chọn 4"], answer: ["Tùy chọn 3", "Tùy chọn 4"] },
    { group: 3, question: "Câu hỏi 26", type: "multipleAnswer", options: ["Tùy chọn 1", "Tùy chọn 2", "Tùy chọn 3", "Tùy chọn 4"], answer: ["Tùy chọn 1", "Tùy chọn 2", "Tùy chọn 3"] },
    { group: 3, question: "Câu hỏi 27", type: "multipleAnswer", options: ["Tùy chọn 1", "Tùy chọn 2", "Tùy chọn 3", "Tùy chọn 4"], answer: ["Tùy chọn 2", "Tùy chọn 3"] },
    { group: 3, question: "Câu hỏi 28", type: "multipleAnswer", options: ["Tùy chọn 1", "Tùy chọn 2", "Tùy chọn 3", "Tùy chọn 4"], answer: ["Tùy chọn 2", "Tùy chọn 3", "Tùy chọn 4"] },
    { group: 3, question: "Câu hỏi 29", type: "multipleAnswer", options: ["Tùy chọn 1", "Tùy chọn 2", "Tùy chọn 3", "Tùy chọn 4"], answer: ["Tùy chọn 1", "Tùy chọn 3"] },
    { group: 3, question: "Câu hỏi 30", type: "multipleAnswer", options: ["Tùy chọn 1", "Tùy chọn 2", "Tùy chọn 3", "Tùy chọn 4"], answer: ["Tùy chọn 1", "Tùy chọn 4"] },
    
    { group: 4, question: "Câu hỏi 31", type: "freeText", answer: "1" },
    { group: 4, question: "Câu hỏi 32", type: "freeText", answer: "2" },
    { group: 4, question: "Câu hỏi 33", type: "freeText", answer: "3" },
    { group: 4, question: "Câu hỏi 34", type: "freeText", answer: "4" },
    { group: 4, question: "Câu hỏi 35", type: "freeText", answer: "5" },
    { group: 4, question: "Câu hỏi 36", type: "freeText", answer: "6" },
    { group: 4, question: "Câu hỏi 37", type: "freeText", answer: "7" },
    { group: 4, question: "Câu hỏi 38", type: "freeText", answer: "8" },
    { group: 4, question: "Câu hỏi 39", type: "freeText", answer: "9" },
    { group: 4, question: "Câu hỏi 40", type: "freeText", answer: "10" },
];

const form = document.getElementById('surveyForm');
const questionContainer = document.getElementById('questionContainer');
const resultContainer = document.getElementById('result');
const loadQuestionsButton = document.getElementById('loadQuestionsButton');
const submitButton = document.getElementById('submitButton');

function loadQuestions() {
    if (!form.checkValidity()) {
        alert("Vui lòng điền đầy đủ thông tin cần thiết!");
        return;
    }

    let html = "";
    let questionNumber = 1;
    questions.forEach((q, index) => {
        html += `<div><p><strong>Câu hỏi ${questionNumber}:</strong></p>`;
        if (q.type === "trueFalse") {
            html += `<label><input type="radio" name="question${questionNumber}" value="true"> Đúng</label>
                     <label><input type="radio" name="question${questionNumber}" value="false"> Sai</label>`;
        } else if (q.type === "multipleChoice") {
            q.options.forEach(option => {
                html += `<label><input type="radio" name="question${questionNumber}" value="${option}">${option}</label>`;
            });
        } else if (q.type === "multipleAnswer") {
            q.options.forEach(option => {
                html += `<label><input type="checkbox" name="question${questionNumber}" value="${option}">${option}</label>`;
            });
        } else if (q.type === "freeText") {
            html += `<textarea name="question${questionNumber}" rows="4" cols="50"></textarea>`;
        }
        html += `</div>`;
        questionNumber++;
    });
    questionContainer.innerHTML = html;
    questionContainer.style.display = "block";
    loadQuestionsButton.style.display = "none";
    submitButton.style.display = "block";
}

function showResult() {
    let correctAnswers = 0;
    let resultHTML = "<h2>Kết quả:</h2>";
    const formData = new FormData(form);
    let questionNumber = 1;
    questions.forEach((question, index) => {
        resultHTML += `<p><strong>Câu hỏi ${questionNumber}:</strong></p>`;
        const answer = formData.get(`question${questionNumber}`) || "Chưa chọn";
        if (Array.isArray(question.answer)) {
            const correctOptions = question.answer;
            resultHTML += `<p>Đáp án: ${correctOptions.join(', ')}</p>`;
            if (Array.isArray(answer)) {
                const sortedAnswer = answer.sort().join(',');
                const sortedCorrectAnswer = correctOptions.sort().join(',');
                if (sortedAnswer === sortedCorrectAnswer) {
                    resultHTML += `<p style="color: green;">Câu trả lời của bạn: ${answer.join(', ')} (Chính xác)</p>`;
                    correctAnswers++;
                } else {
                    resultHTML += `<p style="color: red;">Câu trả lời của bạn: ${answer.join(', ')} (Sai)</p>`;
                }
            } else {
                resultHTML += `<p>Câu trả lời của bạn: ${answer}</p>`;
                if (correctOptions.includes(answer)) {
                    resultHTML += `<p style="color: green;">(Chính xác)</p>`;
                    correctAnswers++;
                } else {
                    resultHTML += `<p style="color: red;">(Sai)</p>`;
                }
            }
        } else {
            const correctAnswer = question.answer;
            resultHTML += `<p>Đáp án: ${correctAnswer}</p>`;
            if (answer === correctAnswer) {
                resultHTML += `<p style="color: green;">Câu trả lời của bạn: ${answer} (Chính xác)</p>`;
                correctAnswers++;
            } else {
                resultHTML += `<p style="color: red;">Câu trả lời của bạn: ${answer} (Sai)</p>`;
            }
        }
        questionNumber++;
    });

    const score = (correctAnswers / questions.length) * 10;
    resultHTML += `<p>Số câu trả lời đúng: ${correctAnswers}</p>`;
    resultHTML += `<p>Điểm số: ${score}</p>`;
    resultContainer.innerHTML = resultHTML;
    form.querySelectorAll('input, textarea, button').forEach(elem => {
        elem.disabled = true;
    });
}

loadQuestionsButton.addEventListener('click', function(event) {
    event.preventDefault();
    loadQuestions();
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    showResult();
});