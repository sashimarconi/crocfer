const overlayLoading = document.getElementById("overlay-loading");
const soundEffect = document.getElementById("click-sound");

const questions = [
  {
    question: "Qual modelo de Crocs combina mais com o seu estilo?",
    image: "images/img/crocs1.jpg",
    answers: [
      "🐊 Crocs Classic confortável e versátil",
      "🎨 Crocs colorido e estiloso pra se destacar",
      "⭐ Crocs com Jibbitz para personalizar do seu jeito",
      "👟 Crocs mais discreto para usar no dia a dia"
    ]
  },
  {
    question: "O que você mais valoriza nos calçados da Crocs?",
    image: "images/img/crocs2.jpg",
    answers: [
      "🪶 Leveza e conforto o dia inteiro",
      "🌈 Cores vibrantes e diferentes",
      "🧼 Facilidade de limpar e cuidar",
      "✨ Estilo único que só a Crocs tem"
    ]
  },
  {
    question: "Qual seria sua vibe perfeita usando Crocs?",
    image: "images/img/crocs3.jpg",
    answers: [
      "🌞 Passeio leve no dia a dia",
      "🎉 Look estiloso e descontraído",
      "🛍️ Visual casual para qualquer ocasião",
      "🔥 Combinação moderna com acessórios"
    ]
  },
  {
    question: "Como você gosta de personalizar seu Crocs?",
    image: "images/img/crocs4.jpg",
    answers: [
      "🧩 Muitos Jibbitz divertidos",
      "⭐ Poucos detalhes mas bem escolhidos",
      "🎨 Temáticos (games, personagens, hobbies)",
      "❌ Sem Jibbitz — prefiro o visual clean"
    ]
  },
  {
    question: "Qual motivo faz você amar Crocs?",
    image: "images/img/crocs5.jpg",
    answers: [
      "🛌 Conforto absurdo que não existe igual",
      "🔥 Estilo único e autêntico",
      "💧 Super prático e resistente",
      "🌈 Variedade enorme de cores e modelos"
    ]
  }
];







let currentQuestionIndex = 0;

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showFinalScreen();
        return;
    }

    const questionImage = document.getElementById("question-image");
    questionImage.onerror = () => {
      questionImage.onerror = null;
      questionImage.src = "images/logo.png";
    };
    questionImage.src = questions[currentQuestionIndex].image;
    document.getElementById("question").innerText = questions[currentQuestionIndex].question;

    const answersContainer = document.getElementById("answers");
    answersContainer.innerHTML = "";

    questions[currentQuestionIndex].answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.onclick = () => selectAnswer();
        answersContainer.appendChild(button);
    });

    document.querySelector(".progress").style.width = ((currentQuestionIndex + 1) / questions.length) * 100 + "%";
}

function selectAnswer() {
    soundEffect.play();
    overlayLoading.classList.add("active");

    setTimeout(() => {
        overlayLoading.classList.remove("active");
        currentQuestionIndex++;
        loadQuestion();
    }, 2000);
}

function startConfetti() {
    var duration = 1 * 1000; 
    var end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
        });

        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}


function showFinalScreen() {
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("final-screen").classList.remove("hidden");
    startConfetti(); 
}


function showFinalScreen() {
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("final-screen").classList.remove("hidden");
    startConfetti();
}

function resgatarPremio() {
    window.location.href = "https://loja.levando.fun/";
}

window.onload = loadQuestion;

document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("close-popup");

    closePopup.addEventListener("click", function () {
        popup.classList.add("hidden");
    });
});
