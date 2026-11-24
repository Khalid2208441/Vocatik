const terms = [
  {
    word: "Algorithm",
    meaning: "Algoritma",
    definition: "A step-by-step procedure for solving a problem.",
    example: "The sorting algorithm arranges the scores from highest to lowest.",
    category: "Programming"
  },
  {
    word: "Database",
    meaning: "Basis data",
    definition: "An organized collection of data.",
    example: "The university stores student grades in a database.",
    category: "Software"
  },
  {
    word: "Hardware",
    meaning: "Perangkat keras",
    definition: "The physical parts of a computer.",
    example: "A keyboard and a monitor are examples of hardware.",
    category: "Hardware"
  },
  {
    word: "Software",
    meaning: "Perangkat lunak",
    definition: "Programs that tell a computer what to do.",
    example: "Dev-C++ is software that we use to write C++ programs.",
    category: "Software"
  },
  {
    word: "Network",
    meaning: "Jaringan",
    definition: "Connected computers or devices that communicate.",
    example: "All computers in the lab are connected to one network.",
    category: "Networking"
  },
  {
    word: "Variable",
    meaning: "Variabel",
    definition: "A named storage location for a value.",
    example: "We declare a variable to store the student's score.",
    category: "Programming"
  },
  {
    word: "Keyboard",
    meaning: "Papan ketik",
    definition: "An input device used to enter text.",
    example: "I use the keyboard to type my program code.",
    category: "Hardware"
  },
  {
    word: "Router",
    meaning: "Router jaringan",
    definition: "A device that forwards data between networks.",
    example: "The router sends data from our laptop to the internet.",
    category: "Networking"
  },
  {
    word: "Firewall",
    meaning: "Tembok api jaringan",
    definition: "A security system that controls network traffic.",
    example: "The firewall blocks unknown connections to the server.",
    category: "Cybersecurity"
  },
  {
    word: "Encryption",
    meaning: "Enkripsi",
    definition: "The process of converting data into a protected form.",
    example: "Encryption keeps our messages safe from other people.",
    category: "Cybersecurity"
  },

  {
    word: "Compiler",
    meaning: "Kompilator",
    definition: "A program that translates source code into machine code.",
    example: "The compiler shows an error when we forget a semicolon.",
    category: "Programming"
  },
  {
    word: "Function",
    meaning: "Fungsi",
    definition: "A block of code that performs a specific task and can be called many times.",
    example: "We create a function to calculate the average score.",
    category: "Programming"
  },
  {
    word: "Loop",
    meaning: "Perulangan",
    definition: "A structure that repeats a block of code several times.",
    example: "A for loop prints the numbers from 1 to 10.",
    category: "Programming"
  },
  {
    word: "Array",
    meaning: "Larik",
    definition: "A collection of values of the same type stored under one name.",
    example: "The array stores the scores of five students.",
    category: "Programming"
  },
  {
    word: "Debugging",
    meaning: "Penelusuran kesalahan",
    definition: "The process of finding and fixing errors in a program.",
    example: "Debugging helps us find why the program prints the wrong result.",
    category: "Programming"
  },
  {
    word: "Recursion",
    meaning: "Rekursi",
    definition: "A technique where a function calls itself to solve a smaller problem.",
    example: "Recursion can be used to calculate the factorial of a number.",
    category: "Programming"
  },

  {
    word: "Processor",
    meaning: "Prosesor",
    definition: "The main chip that executes instructions in a computer.",
    example: "A fast processor makes the computer run programs quickly.",
    category: "Hardware"
  },
  {
    word: "RAM",
    meaning: "Memori akses acak",
    definition: "Temporary memory that stores data while programs are running.",
    example: "The computer becomes slow when the RAM is full.",
    category: "Hardware"
  },
  {
    word: "Storage",
    meaning: "Penyimpanan",
    definition: "A device that keeps data permanently, such as an SSD or a hard disk.",
    example: "I need more storage to save my project files.",
    category: "Hardware"
  },
  {
    word: "Motherboard",
    meaning: "Papan induk",
    definition: "The main circuit board that connects all computer components.",
    example: "The processor and RAM are installed on the motherboard.",
    category: "Hardware"
  },
  {
    word: "GPU",
    meaning: "Unit pemroses grafis",
    definition: "A processor specialized in producing images and graphics.",
    example: "The GPU helps the computer display games smoothly.",
    category: "Hardware"
  },
  {
    word: "Monitor",
    meaning: "Layar komputer",
    definition: "An output device that displays information from a computer.",
    example: "The monitor shows the result of our program.",
    category: "Hardware"
  },

  {
    word: "Operating System",
    meaning: "Sistem operasi",
    definition: "Software that manages the hardware and runs other programs.",
    example: "Windows is an operating system used on many laptops.",
    category: "Software"
  },
  {
    word: "Application",
    meaning: "Aplikasi",
    definition: "A program designed for users to do a specific activity.",
    example: "She installed a note-taking application on her phone.",
    category: "Software"
  },
  {
    word: "Source Code",
    meaning: "Kode sumber",
    definition: "The text of a program written by a programmer.",
    example: "We save the source code in a .cpp file.",
    category: "Software"
  },
  {
    word: "Open Source",
    meaning: "Sumber terbuka",
    definition: "Software whose source code can be seen, used, and modified by anyone.",
    example: "Linux is an open source operating system.",
    category: "Software"
  },
  {
    word: "Framework",
    meaning: "Kerangka kerja",
    definition: "A ready-made set of tools and rules that helps developers build software faster.",
    example: "The team uses a framework to build the website.",
    category: "Software"
  },
  {
    word: "Version Control",
    meaning: "Kontrol versi",
    definition: "A system that records changes to files so that old versions can be restored.",
    example: "Git is a popular version control tool for teamwork.",
    category: "Software"
  },

  {
    word: "IP Address",
    meaning: "Alamat IP",
    definition: "A unique number that identifies a device on a network.",
    example: "Every computer on the network has its own IP address.",
    category: "Networking"
  },
  {
    word: "Bandwidth",
    meaning: "Lebar pita",
    definition: "The maximum amount of data that can be sent through a network in a certain time.",
    example: "Video calls need more bandwidth than text messages.",
    category: "Networking"
  },
  {
    word: "Protocol",
    meaning: "Protokol",
    definition: "A set of rules that allows devices to communicate with each other.",
    example: "HTTP is a protocol used to open websites.",
    category: "Networking"
  },
  {
    word: "Server",
    meaning: "Peladen",
    definition: "A computer that provides data or services to other computers.",
    example: "The web server sends the page to our browser.",
    category: "Networking"
  },
  {
    word: "Domain Name",
    meaning: "Nama domain",
    definition: "A readable name that is used to find a website instead of an IP address.",
    example: "A domain name is easier to remember than a number.",
    category: "Networking"
  },
  {
    word: "Cloud Computing",
    meaning: "Komputasi awan",
    definition: "Using servers on the internet to store data and run programs.",
    example: "Cloud Computing lets us open our files from any device.",
    category: "Networking"
  },

  {
    word: "Malware",
    meaning: "Perangkat lunak berbahaya",
    definition: "Software that is made to damage or steal from a computer system.",
    example: "Malware can enter the computer through a fake download.",
    category: "Cybersecurity"
  },
  {
    word: "Phishing",
    meaning: "Pengelabuan",
    definition: "A trick that uses fake messages or websites to steal personal information.",
    example: "Phishing emails often ask you to enter your password.",
    category: "Cybersecurity"
  },
  {
    word: "Authentication",
    meaning: "Autentikasi",
    definition: "The process of checking that a user is really who they claim to be.",
    example: "Authentication with a fingerprint protects the phone.",
    category: "Cybersecurity"
  },
  {
    word: "Backup",
    meaning: "Cadangan data",
    definition: "A copy of data that is kept in case the original is lost.",
    example: "Make a backup of your assignment before reinstalling Windows.",
    category: "Cybersecurity"
  },
  {
    word: "Antivirus",
    meaning: "Antivirus",
    definition: "Software that detects and removes harmful programs.",
    example: "The antivirus found a virus in the flash drive.",
    category: "Cybersecurity"
  },
  {
    word: "Vulnerability",
    meaning: "Kerentanan",
    definition: "A weakness in a system that attackers can use to gain access.",
    example: "The programmer fixed the vulnerability in the login page.",
    category: "Cybersecurity"
  }
];

const searchInput = document.getElementById("searchInput");
const dictionary = document.getElementById("dictionary");
const quiz = document.getElementById("quiz");
const categoryButtons = document.querySelectorAll(".category-btn");

let selectedCategory = "All";

function displayTerms() {
  const search = searchInput.value.toLowerCase().trim();

  const results = terms.filter(function(item) {
    const matchesSearch =
      item.word.toLowerCase().includes(search) ||
      item.meaning.toLowerCase().includes(search) ||
      item.definition.toLowerCase().includes(search) ||
      item.example.toLowerCase().includes(search);

    const matchesCategory =
      selectedCategory === "All" ||
      item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  if (results.length === 0) {
    dictionary.innerHTML =
      "<p>Term not found. Try another word or category.</p>";
    return;
  }

  dictionary.innerHTML = results.map(function(item) {
    return `
      <div class="card">
        <p class="term-category">${item.category}</p>
        <h3>${item.word}</h3>
        <p><strong>Indonesian:</strong> ${item.meaning}</p>
        <p><strong>Definition:</strong> ${item.definition}</p>
        <p class="example"><strong>Example:</strong> <em>${item.example}</em></p>
      </div>
    `;
  }).join("");
}

/* ===== QUIZ ===== */
const totalQuestions = 10;
let questions = [];
let currentQuestion = 0;
let score = 0;
let answered = false;

function shuffle(list) {
  const copy = list.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = copy[i];
    copy[i] = copy[j];
    copy[j] = temp;
  }
  return copy;
}

function makeOptions(correct, field) {
  const others = shuffle(terms.filter(function(item) {
    return item.word !== correct.word && item[field] !== correct[field];
  })).slice(0, 3);

  return shuffle(others.concat(correct)).map(function(item) {
    return { text: item[field], correct: item.word === correct.word };
  });
}

function makeQuestion(item, type) {
  if (type === 2) {
    const pattern = new RegExp(item.word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
    if (!pattern.test(item.example)) {
      type = 0;
    } else {
      return {
        text: "Fill in the blank:",
        sentence: item.example.replace(pattern, "_____"),
        options: makeOptions(item, "word")
      };
    }
  }

  if (type === 1) {
    return {
      text: "Which word matches this definition?",
      sentence: item.definition,
      options: makeOptions(item, "word")
    };
  }

  return {
    text: "What is the Indonesian meaning of",
    sentence: item.word + "?",
    options: makeOptions(item, "meaning")
  };
}

function startQuiz() {
  const picked = shuffle(terms).slice(0, totalQuestions);
  questions = picked.map(function(item, index) {
    return makeQuestion(item, index % 3);
  });
  currentQuestion = 0;
  score = 0;
  answered = false;
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];

  quiz.innerHTML = `
    <div class="quiz-box">
      <p class="quiz-progress">Question ${currentQuestion + 1} of ${totalQuestions} | Score: ${score}</p>
      <h3>${q.text}</h3>
      <p class="quiz-sentence">${q.sentence}</p>
      <div class="quiz-options">
        ${q.options.map(function(option, index) {
          return `<button class="option-btn" data-index="${index}">${option.text}</button>`;
        }).join("")}
      </div>
      <p id="quizFeedback" class="quiz-feedback"></p>
      <button id="nextBtn" class="next-btn" hidden>Next</button>
    </div>
  `;

  answered = false;

  const optionButtons = quiz.querySelectorAll(".option-btn");
  optionButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      if (answered) {
        return;
      }
      answered = true;

      const chosen = q.options[Number(button.dataset.index)];
      const feedback = document.getElementById("quizFeedback");

      optionButtons.forEach(function(btn) {
        if (q.options[Number(btn.dataset.index)].correct) {
          btn.classList.add("correct");
        }
      });

      if (chosen.correct) {
        score++;
        feedback.textContent = "Correct!";
      } else {
        button.classList.add("wrong");
        feedback.textContent = "Wrong. The correct answer is highlighted.";
      }

      const nextBtn = document.getElementById("nextBtn");
      nextBtn.textContent = currentQuestion === totalQuestions - 1 ? "See Result" : "Next";
      nextBtn.hidden = false;
    });
  });

  document.getElementById("nextBtn").addEventListener("click", function() {
    currentQuestion++;
    if (currentQuestion < totalQuestions) {
      showQuestion();
    } else {
      showResult();
    }
  });
}

function showResult() {
  let message = "Keep practicing, you can do better!";
  if (score >= 8) {
    message = "Excellent! Your IT vocabulary is great.";
  } else if (score >= 6) {
    message = "Good job! Keep learning.";
  }

  quiz.innerHTML = `
    <div class="quiz-box">
      <h3>Quiz Finished</h3>
      <p class="quiz-score">${score} / ${totalQuestions}</p>
      <p>${message}</p>
      <button id="restartBtn" class="next-btn">Try Again</button>
    </div>
  `;

  document.getElementById("restartBtn").addEventListener("click", startQuiz);
}

function showMode() {
  if (selectedCategory === "Quiz") {
    searchInput.hidden = true;
    dictionary.hidden = true;
    quiz.hidden = false;
    startQuiz();
  } else {
    searchInput.hidden = false;
    dictionary.hidden = false;
    quiz.hidden = true;
    displayTerms();
  }
}

searchInput.addEventListener("input", displayTerms);

categoryButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    selectedCategory = button.dataset.category;

    categoryButtons.forEach(function(btn) {
      btn.classList.remove("active");
    });

    button.classList.add("active");
    showMode();
  });
});

displayTerms();
