// Quiz App JavaScript - Save as script.js

// Quiz Data - Extensive question bank for each category
const quizData = {
    science: [
        {
            question: "Which space agency has decided to carry out first all-female spacewalk at the International Space Station (ISS)?",
            options: ["Roscosmos", "NASA", "ISRO", "JAXA"],
            correct: 1
        },
        {
            question: "What is the chemical symbol for gold?",
            options: ["Go", "Gd", "Au", "Ag"],
            correct: 2
        },
        {
            question: "How many bones are in the adult human body?",
            options: ["186", "206", "226", "246"],
            correct: 1
        },
        {
            question: "What is the speed of light in vacuum?",
            options: ["299,792 km/s", "199,792 km/s", "399,792 km/s", "99,792 km/s"],
            correct: 0
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Jupiter", "Mars", "Saturn"],
            correct: 2
        },
        {
            question: "What is the powerhouse of the cell?",
            options: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"],
            correct: 1
        },
        {
            question: "What is the most abundant gas in Earth's atmosphere?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
            correct: 2
        },
        {
            question: "What is the hardest natural substance on Earth?",
            options: ["Gold", "Iron", "Diamond", "Platinum"],
            correct: 2
        },
        {
            question: "How long does it take for light from the Sun to reach Earth?",
            options: ["8 minutes", "8 seconds", "8 hours", "8 days"],
            correct: 0
        },
        {
            question: "What is the largest organ in the human body?",
            options: ["Heart", "Brain", "Liver", "Skin"],
            correct: 3
        }
    ],
    art: [
        {
            question: "Who painted the Mona Lisa?",
            options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
            correct: 1
        },
        {
            question: "In which century did the Renaissance begin?",
            options: ["12th century", "13th century", "14th century", "15th century"],
            correct: 2
        },
        {
            question: "Who wrote 'Romeo and Juliet'?",
            options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
            correct: 1
        },
        {
            question: "What art movement is Salvador Dali associated with?",
            options: ["Impressionism", "Cubism", "Surrealism", "Expressionism"],
            correct: 2
        },
        {
            question: "Who composed 'The Four Seasons'?",
            options: ["Bach", "Mozart", "Vivaldi", "Beethoven"],
            correct: 2
        },
        {
            question: "Who painted 'The Starry Night'?",
            options: ["Claude Monet", "Vincent van Gogh", "Paul Cézanne", "Edgar Degas"],
            correct: 1
        },
        {
            question: "Which famous author wrote '1984'?",
            options: ["Aldous Huxley", "Ray Bradbury", "George Orwell", "Ernest Hemingway"],
            correct: 2
        },
        {
            question: "What is the art of beautiful handwriting called?",
            options: ["Typography", "Calligraphy", "Lithography", "Photography"],
            correct: 1
        },
        {
            question: "Who sculpted 'David'?",
            options: ["Donatello", "Michelangelo", "Bernini", "Rodin"],
            correct: 1
        },
        {
            question: "Which playwright wrote 'Hamlet'?",
            options: ["Christopher Marlowe", "William Shakespeare", "Ben Jonson", "John Webster"],
            correct: 1
        }
    ],
    general: [
        {
            question: "What is the capital of France?",
            options: ["London", "Berlin", "Paris", "Madrid"],
            correct: 2
        },
        {
            question: "How many continents are there?",
            options: ["5", "6", "7", "8"],
            correct: 2
        },
        {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
            correct: 2
        },
        {
            question: "In which year did World War II end?",
            options: ["1943", "1944", "1945", "1946"],
            correct: 2
        },
        {
            question: "What is the smallest country in the world?",
            options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
            correct: 1
        },
        {
            question: "Which country is known as the Land of the Rising Sun?",
            options: ["China", "Thailand", "Japan", "South Korea"],
            correct: 2
        },
        {
            question: "What is the currency of the United Kingdom?",
            options: ["Euro", "Dollar", "Pound Sterling", "Franc"],
            correct: 2
        },
        {
            question: "How many colors are in a rainbow?",
            options: ["5", "6", "7", "8"],
            correct: 2
        },
        {
            question: "What is the tallest mountain in the world?",
            options: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
            correct: 2
        },
        {
            question: "Which planet is closest to the Sun?",
            options: ["Venus", "Mars", "Mercury", "Earth"],
            correct: 2
        }
    ],
    technology: [
        {
            question: "Who is known as the father of computers?",
            options: ["Alan Turing", "Charles Babbage", "Steve Jobs", "Bill Gates"],
            correct: 1
        },
        {
            question: "What does CPU stand for?",
            options: ["Central Processing Unit", "Computer Personal Unit", "Central Processor Utility", "Core Processing Unit"],
            correct: 0
        },
        {
            question: "In what year was the first iPhone released?",
            options: ["2005", "2006", "2007", "2008"],
            correct: 2
        },
        {
            question: "What does HTML stand for?",
            options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
            correct: 0
        },
        {
            question: "Who founded Microsoft?",
            options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Elon Musk"],
            correct: 1
        },
        {
            question: "What does WWW stand for in a website URL?",
            options: ["World Wide Web", "World Web Wide", "Web World Wide", "Wide World Web"],
            correct: 0
        },
        {
            question: "What programming language is known as the 'language of the web'?",
            options: ["Python", "Java", "JavaScript", "C++"],
            correct: 2
        },
        {
            question: "What does USB stand for?",
            options: ["Universal Serial Bus", "United Serial Bus", "Universal System Bus", "United System Bus"],
            correct: 0
        },
        {
            question: "Who is the founder of Facebook?",
            options: ["Jack Dorsey", "Mark Zuckerberg", "Elon Musk", "Jeff Bezos"],
            correct: 1
        },
        {
            question: "What does AI stand for?",
            options: ["Automated Intelligence", "Artificial Intelligence", "Advanced Intelligence", "Algorithmic Intelligence"],
            correct: 1
        }
    ]
};

// Application State
let currentCategory = '';
let currentQuestionIndex = 0;
let selectedAnswer = null;
let score = 0;
let totalQuestions = 0;
let answeredQuestions = 0;
let timer = null;
let timeRemaining = 180; // 3 minutes in seconds
let isAnswerSubmitted = false;

// DOM Elements
const homeScreen = document.getElementById('homeScreen');
const quizScreen = document.getElementById('quizScreen');
const resultsScreen = document.getElementById('resultsScreen');
const categoryCards = document.querySelectorAll('.category-card');
const closeButtons = document.querySelectorAll('.close-btn');
const submitBtn = document.getElementById('submitBtn');
const optionsContainer = document.getElementById('optionsContainer');
const questionText = document.getElementById('questionText');
const quizCategory = document.getElementById('quizCategory');
const currentQuestionEl = document.getElementById('currentQuestion');
const timeRemainingEl = document.getElementById('timeRemaining');
const scorePercentageEl = document.getElementById('scorePercentage');
const totalQuestionsEl = document.getElementById('totalQuestions');
const correctAnswersEl = document.getElementById('correctAnswers');

// Initialize App
function init() {
    setupEventListeners();
    updateStats();
}

// Setup Event Listeners
function setupEventListeners() {
    // Category selection
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.getAttribute('data-category');
            startQuiz(category);
        });
    });

    // Close buttons
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (confirm('Are you sure you want to exit? Your progress will be lost.')) {
                stopQuiz();
                showScreen('home');
            }
        });
    });

    // Submit button
    submitBtn.addEventListener('click', handleSubmit);

    // Share buttons
    document.querySelectorAll('.share-icon').forEach(icon => {
        icon.addEventListener('click', handleShare);
    });

    // Menu and profile buttons (placeholder functionality)
    document.querySelector('.menu-btn')?.addEventListener('click', () => {
        alert('Menu functionality - Add your custom menu here!');
    });

    document.querySelector('.profile-btn')?.addEventListener('click', () => {
        alert('Profile functionality - Add your profile page here!');
    });

    document.querySelector('.upgrade-btn')?.addEventListener('click', () => {
        alert('Upgrade to Premium - Add your payment integration here!');
    });
}

// Screen Management
function showScreen(screen) {
    homeScreen.classList.remove('active');
    quizScreen.classList.remove('active');
    resultsScreen.classList.remove('active');

    switch(screen) {
        case 'home':
            homeScreen.classList.add('active');
            break;
        case 'quiz':
            quizScreen.classList.add('active');
            break;
        case 'results':
            resultsScreen.classList.add('active');
            break;
    }
}

// Quiz Management
function startQuiz(category) {
    // Reset quiz state
    currentCategory = category;
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    answeredQuestions = 0;
    isAnswerSubmitted = false;
    
    // Set time based on number of questions (30 seconds per question)
    const questions = quizData[category];
    totalQuestions = questions.length;
    timeRemaining = totalQuestions * 30;
    
    // Set category display name
    const categoryNames = {
        science: 'Science and Nature',
        art: 'Art and Literature',
        general: 'General Knowledge',
        technology: 'Technology'
    };
    
    quizCategory.textContent = categoryNames[category];
    
    // Show quiz screen and start
    showScreen('quiz');
    loadQuestion();
    startTimer();
}

function stopQuiz() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
    resetQuizState();
}

function resetQuizState() {
    currentCategory = '';
    currentQuestionIndex = 0;
    selectedAnswer = null;
    score = 0;
    answeredQuestions = 0;
    timeRemaining = 180;
    isAnswerSubmitted = false;
    submitBtn.textContent = 'SUBMIT';
}

// Question Management
function loadQuestion() {
    const questions = quizData[currentCategory];
    
    if (currentQuestionIndex >= questions.length) {
        showResults();
        return;
    }
    
    const question = questions[currentQuestionIndex];
    
    // Reset state for new question
    selectedAnswer = null;
    isAnswerSubmitted = false;
    submitBtn.disabled = true;
    submitBtn.textContent = 'SUBMIT';
    
    // Update question display
    questionText.textContent = `${currentQuestionIndex + 1}. ${question.question}`;
    currentQuestionEl.textContent = currentQuestionIndex + 1;
    
    // Clear previous options
    optionsContainer.innerHTML = '';
    
    // Create option elements
    const optionLabels = ['A', 'B', 'C', 'D'];
    question.options.forEach((option, index) => {
        const optionEl = document.createElement('div');
        optionEl.className = 'option';
        optionEl.setAttribute('data-index', index);
        optionEl.innerHTML = `
            <div class="option-label">${optionLabels[index]}</div>
            <div class="option-text">${option}</div>
        `;
        
        optionEl.addEventListener('click', () => {
            if (!isAnswerSubmitted) {
                selectOption(index);
            }
        });
        
        optionsContainer.appendChild(optionEl);
    });
}

function selectOption(index) {
    if (isAnswerSubmitted) return;
    
    // Remove previous selection
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Add selection to clicked option
    const options = document.querySelectorAll('.option');
    options[index].classList.add('selected');
    selectedAnswer = index;
    submitBtn.disabled = false;
}

function handleSubmit() {
    if (isAnswerSubmitted) {
        // Move to next question
        nextQuestion();
        return;
    }
    
    if (selectedAnswer === null) return;
    
    isAnswerSubmitted = true;
    answeredQuestions++;
    
    const questions = quizData[currentCategory];
    const question = questions[currentQuestionIndex];
    const options = document.querySelectorAll('.option');
    
    // Disable all options
    options.forEach(opt => {
        opt.style.pointerEvents = 'none';
    });
    
    // Show correct/wrong answers
    options.forEach((opt, index) => {
        if (index === question.correct) {
            opt.classList.add('correct');
            opt.classList.remove('selected');
        } else if (index === selectedAnswer && selectedAnswer !== question.correct) {
            opt.classList.add('wrong');
            opt.classList.remove('selected');
        }
    });
    
    // Update score
    if (selectedAnswer === question.correct) {
        score++;
    }
    
    // Change button text to NEXT
    submitBtn.textContent = 'NEXT';
    submitBtn.disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex >= quizData[currentCategory].length) {
        showResults();
    } else {
        loadQuestion();
    }
}

// Timer Management
function startTimer() {
    updateTimerDisplay();
    
    timer = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        
        if (timeRemaining <= 0) {
            clearInterval(timer);
            showResults();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timeRemainingEl.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} min`;
    
    // Change color if time is running low
    if (timeRemaining <= 30) {
        timeRemainingEl.style.color = '#ff4444';
    } else {
        timeRemainingEl.style.color = 'rgba(255, 255, 255, 0.7)';
    }
}

// Results Management
function showResults() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
    
    const questions = quizData[currentCategory];
    const percentage = Math.round((score / questions.length) * 100);
    
    // Update results display
    scorePercentageEl.textContent = `${percentage}%`;
    totalQuestionsEl.textContent = questions.length;
    correctAnswersEl.textContent = score;
    
    // Update stats on home screen
    updateStats();
    
    showScreen('results');
}

// Stats Management (for home screen)
function updateStats() {
    // This is a simple implementation
    // In a real app, you would store and retrieve these from a database
    const currentPoints = parseInt(document.querySelector('.stat-value').textContent) || 230;
    const pointsToAdd = score * 10;
    
    // Update points display
    document.querySelector('.stat-value').textContent = currentPoints + pointsToAdd;
}

// Share Functionality
function handleShare(e) {
    const shareButton = e.currentTarget;
    const percentage = scorePercentageEl.textContent;
    const category = quizCategory.textContent;
    const shareText = `I scored ${percentage} in ${category} on Quiz App! Can you beat my score?`;
    
    if (shareButton.classList.contains('whatsapp')) {
        window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, '_blank');
    } else if (shareButton.classList.contains('facebook')) {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(shareText)}`, '_blank');
    } else if (shareButton.classList.contains('twitter')) {
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`, '_blank');
    }
}

// Utility Functions
function shuffleArray(array) {
    // Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (quizScreen.classList.contains('active') && !isAnswerSubmitted) {
        const key = e.key.toLowerCase();
        const optionMap = { 'a': 0, 'b': 1, 'c': 2, 'd': 3 };
        
        if (key in optionMap) {
            selectOption(optionMap[key]);
        } else if (key === 'enter' && selectedAnswer !== null) {
            handleSubmit();
        }
    }
});

// Prevent accidental page reload during quiz
window.addEventListener('beforeunload', (e) => {
    if (quizScreen.classList.contains('active')) {
        e.preventDefault();
        e.returnValue = '';
    }
});

// Initialize the app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Console message
console.log('%c Quiz App Loaded Successfully! ', 'background: #ff9a56; color: white; font-size: 16px; padding: 10px; border-radius: 5px;');
console.log('Tip: You can use A, B, C, D keys to select answers and Enter to submit!');