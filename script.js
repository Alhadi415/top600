document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
});

function renderMenu() {
  const container = document.getElementById('quiz-container');
  container.innerHTML = ""; // تنظيف الحاوية

  const menu = document.createElement('div');
  menu.className = 'menu';

  // إنشاء قائمة المحاضرات
  for (let i = 1; i <= 28; i++) {
    const button = document.createElement('button');
    button.textContent = `Lecture ${i}`;
    button.className = 'lecture-button';
    button.addEventListener('click', () => loadLecture(i));
    menu.appendChild(button);
  }

  container.appendChild(menu);
}

function loadLecture(lectureNumber) {
  const scriptId = `lecture-${lectureNumber}-script`;

  // إزالة الملف السابق إذا كان موجودًا
  const oldScript = document.getElementById(scriptId);
  if (oldScript) {
    oldScript.remove();
  }

  // تحميل ملف المحاضرة ديناميكيًا
  const script = document.createElement('script');
  script.src = `lecture${lectureNumber}.js`;
  script.id = scriptId;

  script.onload = () => {
    renderQuiz();
  };

  document.body.appendChild(script);
}

function renderQuiz() {
  const quizContainer = document.getElementById('quiz-container');
  quizContainer.innerHTML = ""; // تنظيف الحاوية

  const backButton = document.createElement('button');
  backButton.textContent = "Back to Menu";
  backButton.className = 'back-button';
  backButton.addEventListener('click', renderMenu);
  quizContainer.appendChild(backButton);

  questions.forEach((q, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';

    // عرض السؤال
    const questionTitle = document.createElement('h3');
    questionTitle.textContent = `${index + 1}. ${q.question}`;
    questionDiv.appendChild(questionTitle);

    // عرض الصورة الخاصة بالسؤال إن وجدت
    if (q.questionImage) {
      const questionImage = document.createElement('img');
      questionImage.src = q.questionImage;
      questionImage.alt = `Image for question ${index + 1}`;
      questionImage.style = "max-width: 100%; height: auto; margin-top: 10px;";
      questionDiv.appendChild(questionImage);
    }

    // عرض الخيارات
    const optionsList = document.createElement('ul');
    optionsList.className = 'options';
    q.options.forEach(option => {
      const optionItem = document.createElement('li');
      const optionInput = document.createElement('input');
      optionInput.type = 'radio';
      optionInput.name = `question-${index}`;
      optionInput.value = option;
      optionInput.addEventListener('change', () => checkAnswer(index, option));

      const optionLabel = document.createElement('label');
      optionLabel.textContent = option;

      optionItem.appendChild(optionInput);
      optionItem.appendChild(optionLabel);
      optionsList.appendChild(optionItem);
    });
    questionDiv.appendChild(optionsList);

    // مكان عرض النتيجة
    const feedbackDiv = document.createElement('div');
    feedbackDiv.id = `feedback-${index}`;
    questionDiv.appendChild(feedbackDiv);

    quizContainer.appendChild(questionDiv);
  });
}

function checkAnswer(questionIndex, selectedOption) {
  const feedbackDiv = document.getElementById(`feedback-${questionIndex}`);
  const correctAnswer = questions[questionIndex].answer;
  const explanation = questions[questionIndex].explanation;
  const explanationImage = questions[questionIndex].explanationImage;

  const radioButtons = document.querySelectorAll(`input[name='question-${questionIndex}']`);
  radioButtons.forEach((button) => {
    button.classList.remove('correct', 'incorrect');
    if (button.value === correctAnswer) button.classList.add('correct');
    if (button.value === selectedOption && selectedOption !== correctAnswer) button.classList.add('incorrect');
  });

  // عرض النتيجة مع الشرح
  feedbackDiv.innerHTML = ""; // تنظيف المحتوى السابق
  if (selectedOption === correctAnswer) {
    feedbackDiv.innerHTML = `Correct! ${explanation}`;
    feedbackDiv.style.color = "#00008B";
  } else {
    feedbackDiv.innerHTML = `Wrong answer! The correct answer is: ${correctAnswer}. ${explanation}`;
    feedbackDiv.style.color = "#00008B";
  }

  // عرض الصورة الخاصة بالشرح إن وجدت
  if (explanationImage) {
    const explanationImg = document.createElement('img');
    explanationImg.src = explanationImage;
    explanationImg.alt = `Explanation image for question ${questionIndex + 1}`;
    explanationImg.style = "max-width: 100%; height: auto; margin-top: 10px;";
    feedbackDiv.appendChild(explanationImg);
  }
}

