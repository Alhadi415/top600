document.addEventListener('DOMContentLoaded', () => {
  renderMenu();

  // إضافة حدث للنقر على رابط "Coloring"
  document.getElementById('coloring-link').addEventListener('click', () => {
    toggleColorControls();
  });

  // إضافة حدث للنقر على رابط "Contact"
  document.getElementById('contact-link').addEventListener('click', () => {
    openContactPopup();
  });
});

function toggleColorControls() {
  const colorControls = document.getElementById('color-controls');
  if (colorControls.style.display === 'block') {
    colorControls.style.display = 'none'; // إخفاء واجهة تحكم الألوان
  } else {
    colorControls.style.display = 'block'; // إظهار واجهة تحكم الألوان
  }
}

function renderMenu() {
  const container = document.getElementById('quiz-container');
  container.innerHTML = "";

  const menu = document.createElement('div');
  menu.className = 'menu';

  for (let i = 1; i <= 25; i++) {
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

  const oldScript = document.getElementById(scriptId);
  if (oldScript) {
    oldScript.remove();
  }

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
  quizContainer.innerHTML = "";

  // إضافة زر التبديل داخل quiz-container
  const toggleContainer = document.createElement('div');
  toggleContainer.style.marginBottom = '20px';

  const toggleLabel = document.createElement('label');
  toggleLabel.className = 'switch';
  const toggleInput = document.createElement('input');
  toggleInput.type = 'checkbox';
  toggleInput.id = 'toggle-submit';
  const toggleSlider = document.createElement('span');
  toggleSlider.className = 'slider round';
  toggleLabel.appendChild(toggleInput);
  toggleLabel.appendChild(toggleSlider);
  toggleContainer.appendChild(toggleLabel);

  const toggleText = document.createElement('span');
  toggleText.textContent = ' DON'T SHOW ANSWERS';
  toggleText.style.marginLeft = '10px';
  toggleContainer.appendChild(toggleText);

  quizContainer.appendChild(toggleContainer);

  // إضافة زر "Back to Menu"
  const backButton = document.createElement('button');
  backButton.textContent = "Back to Menu";
  backButton.className = 'back-button';
  backButton.addEventListener('click', renderMenu);
  quizContainer.appendChild(backButton);

  // عرض الأسئلة
  questions.forEach((q, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';

    const questionTitle = document.createElement('h3');
    questionTitle.textContent = `${index + 1}. ${q.question}`;
    questionDiv.appendChild(questionTitle);

    if (q.questionImage) {
      const questionImage = document.createElement('img');
      questionImage.src = q.questionImage;
      questionImage.alt = `Image for question ${index + 1}`;
      questionImage.style = "max-width: 100%; height: auto; margin-top: 10px;";
      questionDiv.appendChild(questionImage);
    }

    const optionsList = document.createElement('ul');
    optionsList.className = 'options';
    q.options.forEach(option => {
      const optionItem = document.createElement('li');
      const optionInput = document.createElement('input');
      optionInput.type = 'radio';
      optionInput.name = `question-${index}`;
      optionInput.value = option;
      optionInput.addEventListener('change', () => {
        if (!toggleInput.checked) {
          checkAnswer(index, option);
        }
      });

      const optionLabel = document.createElement('label');
      optionLabel.textContent = option;

      optionItem.appendChild(optionInput);
      optionItem.appendChild(optionLabel);
      optionsList.appendChild(optionItem);
    });
    questionDiv.appendChild(optionsList);

    const feedbackDiv = document.createElement('div');
    feedbackDiv.id = `feedback-${index}`;
    questionDiv.appendChild(feedbackDiv);

    quizContainer.appendChild(questionDiv);
  });

  // إضافة زر "Submit" في أسفل الأسئلة
  const submitButton = document.createElement('button');
  submitButton.textContent = "Submit";
  submitButton.id = 'submit-button';
  submitButton.style.display = 'none'; // مخفي بشكل افتراضي
  quizContainer.appendChild(submitButton);

  // إضافة حدث لزر التبديل
  toggleInput.addEventListener('change', () => {
    if (toggleInput.checked) {
      submitButton.style.display = 'block'; // إظهار زر "Submit"
    } else {
      submitButton.style.display = 'none'; // إخفاء زر "Submit"
    }
  });

  // إضافة حدث لزر "Submit"
  submitButton.addEventListener('click', () => {
    let score = 0;
    questions.forEach((q, index) => {
      const selectedOption = document.querySelector(`input[name='question-${index}']:checked`);
      if (selectedOption) {
        if (selectedOption.value === q.answer) {
          score++;
        }
        checkAnswer(index, selectedOption.value);
      }
    });
    alert(`Your score is: ${score}/${questions.length}`);
  });
}

function checkAnswer(questionIndex, selectedOption) {
  const feedbackDiv = document.getElementById(`feedback-${questionIndex}`);
  const correctAnswer = questions[questionIndex].answer;
  const explanation = questions[questionIndex].explanation;
  const explanationImage = questions[questionIndex].explanationImage;

  // الحصول على الألوان المحددة من قبل المستخدم
  const correctColor = document.getElementById('correct-color').value;
  const incorrectColor = document.getElementById('incorrect-color').value;

  const radioButtons = document.querySelectorAll(`input[name='question-${questionIndex}']`);
  radioButtons.forEach((button) => {
    button.classList.remove('correct', 'incorrect');
    if (button.value === correctAnswer) button.classList.add('correct');
    if (button.value === selectedOption && selectedOption !== correctAnswer) button.classList.add('incorrect');
  });

  // عرض النتيجة مع الشرح
  feedbackDiv.innerHTML = "";
  if (selectedOption === correctAnswer) {
    feedbackDiv.innerHTML = `Correct! ${explanation}`;
    feedbackDiv.style.color = correctColor;
  } else {
    feedbackDiv.innerHTML = `Wrong answer! The correct answer is: ${correctAnswer}. ${explanation}`;
    feedbackDiv.style.color = incorrectColor;
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

function openSideMenu() {
  document.getElementById("side-menu").style.width = "250px";
  document.getElementById("quiz-container").style.marginRight = "250px";
}

function closeSideMenu() {
  document.getElementById("side-menu").style.width = "0";
  document.getElementById("quiz-container").style.marginRight = "50px";
}

// إظهار نافذة Contact المنبثقة
function openContactPopup() {
  const contactPopup = document.getElementById('contact-popup');
  if (contactPopup) {
    contactPopup.style.display = 'block';
  }
}

// إخفاء نافذة Contact المنبثقة
function closeContactPopup() {
  const contactPopup = document.getElementById('contact-popup');
  if (contactPopup) {
    contactPopup.style.display = 'none';
  }
}

// إرسال النموذج
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault(); // منع إعادة تحميل الصفحة

  // جمع بيانات النموذج
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // إرسال البيانات (هنا يمكنك إضافة كود لإرسال البيانات إلى الخادم)
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  // إغلاق النافذة بعد الإرسال
  closeContactPopup();

  // إظهار رسالة نجاح
  alert("تم إرسال الرسالة بنجاح!");
});
