/* ============================================
   QUIZ APP - ENHANCED JAVASCRIPT v2.0
   Save as: script.js
   ============================================ */

'use strict';

// ============================================
// 1. QUIZ DATA WITH STATISTICS & MATH
// ============================================
const quizData = {
    math: [
        {
            question: "What is the mean of the following dataset: 5, 10, 15, 20, 25?",
            options: ["12", "15", "17.5", "20"],
            correct: 1,
            explanation: "Mean = (5+10+15+20+25)/5 = 75/5 = 15"
        },
        {
            question: "What is the median of: 3, 7, 9, 12, 15?",
            options: ["7", "9", "12", "10"],
            correct: 1,
            explanation: "The median is the middle value when arranged in order: 9"
        },
        {
            question: "If a die is rolled, what is the probability of getting a number greater than 4?",
            options: ["1/6", "1/3", "1/2", "2/3"],
            correct: 1,
            explanation: "Numbers greater than 4 are 5 and 6. Probability = 2/6 = 1/3"
        },
        {
            question: "What is the mode of: 2, 4, 4, 6, 8, 8, 8, 10?",
            options: ["4", "6", "8", "10"],
            correct: 2,
            explanation: "Mode is the most frequently occurring value: 8 appears 3 times"
        },
        {
            question: "What is the range of the dataset: 5, 12, 18, 3, 25, 9?",
            options: ["20", "22", "25", "30"],
            correct: 1,
            explanation: "Range = Maximum - Minimum = 25 - 3 = 22"
        },
        {
            question: "Solve: 3x + 7 = 22. What is x?",
            options: ["3", "5", "7", "9"],
            correct: 1,
            explanation: "3x = 22 - 7 = 15, therefore x = 15/3 = 5"
        },
        {
            question: "What is 25% of 200?",
            options: ["25", "40", "50", "75"],
            correct: 2,
            explanation: "25% of 200 = 0.25 × 200 = 50"
        },
        {
            question: "If you flip two coins, what is the probability of getting two heads?",
            options: ["1/2", "1/4", "1/3", "2/3"],
            correct: 1,
            explanation: "P(HH) = P(H) × P(H) = 1/2 × 1/2 = 1/4"
        },
        {
            question: "What is the standard deviation concept measuring?",
            options: ["Central tendency", "Spread of data", "Correlation", "Causation"],
            correct: 1,
            explanation: "Standard deviation measures how spread out numbers are from the mean"
        },
        {
            question: "In a normal distribution, approximately what percentage of data falls within one standard deviation of the mean?",
            options: ["50%", "68%", "95%", "99.7%"],
            correct: 1,
            explanation: "The 68-95-99.7 rule states that 68% of data falls within 1 standard deviation"
        }
    ],
    science: [
        {
            question: "Which space agency conducted the first all-female spacewalk?",
            options: ["Roscosmos", "NASA", "ISRO", "JAXA"],
            correct: 1,
            explanation: "NASA conducted this historic spacewalk in 2019"
        },
        {
            question: "What is the chemical symbol for gold?",
            options: ["Go", "Gd", "Au", "Ag"],
            correct: 2,
            explanation: "Au comes from the Latin word 'aurum'"
        },
        {
            question: "How many bones are in the adult human body?",
            options: ["186", "206", "226", "246"],
            correct: 1,
            explanation: "Adults have 206 bones (babies have about 270)"
        },
        {
            question: "What is the speed of light in vacuum?",
            options: ["299,792 km/s", "199,792 km/s", "399,792 km/s", "99,792 km/s"],
            correct: 0,
            explanation: "Light travels at approximately 299,792 kilometers per second"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Jupiter", "Mars", "Saturn"],
            correct: 2,
            explanation: "Mars appears red due to iron oxide on its surface"
        },
        {
            question: "What is the powerhouse of the cell?",
            options: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"],
            correct: 1,
            explanation: "Mitochondria produce ATP, the energy currency of cells"
        },
        {
            question: "What is the most abundant gas in Earth's atmosphere?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
            correct: 2,
            explanation: "Nitrogen makes up about 78% of Earth's atmosphere"
        },
        {
            question: "What is the hardest natural substance on Earth?",
            options: ["Gold", "Iron", "Diamond", "Platinum"],
            correct: 2,
            explanation: "Diamond rates 10 on the Mohs hardness scale"
        },
        {
            question: "How long does it take for light from the Sun to reach Earth?",
            options: ["8 minutes", "8 seconds", "8 hours", "8 days"],
            correct: 0,
            explanation: "Sunlight takes about 8 minutes and 20 seconds to reach Earth"
        },
        {
            question: "What is the largest organ in the human body?",
            options: ["Heart", "Brain", "Liver", "Skin"],
            correct: 3,
            explanation: "The skin is the largest organ, covering about 20 square feet"
        }
    ],
    art: [
        {
            question: "Who painted the Mona Lisa?",
            options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
            correct: 1,
            explanation: "Leonardo da Vinci painted this masterpiece in the early 1500s"
        },
        {
            question: "In which century did the Renaissance begin?",
            options: ["12th century", "13th century", "14th century", "15th century"],
            correct: 2,
            explanation: "The Renaissance began in Italy in the 14th century"
        },
        {
            question: "Who wrote 'Romeo and Juliet'?",
            options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
            correct: 1,
            explanation: "Shakespeare wrote this tragedy around 1594-1596"
        },
        {
            question: "What art movement is Salvador Dali associated with?",
            options: ["Impressionism", "Cubism", "Surrealism", "Expressionism"],
            correct: 2,
            explanation: "Dali was a leading figure in the Surrealist movement"
        },
        {
            question: "Who composed 'The Four Seasons'?",
            options: ["Bach", "Mozart", "Vivaldi", "Beethoven"],
            correct: 2,
            explanation: "Antonio Vivaldi composed this violin concerto in 1723"
        },
        {
            question: "Who painted 'The Starry Night'?",
            options: ["Claude Monet", "Vincent van Gogh", "Paul Cézanne", "Edgar Degas"],
            correct: 1,
            explanation: "Van Gogh painted this masterpiece in 1889"
        },
        {
            question: "Which author wrote '1984'?",
            options: ["Aldous Huxley", "Ray Bradbury", "George Orwell", "Ernest Hemingway"],
            correct: 2,
            explanation: "George Orwell published this dystopian novel in 1949"
        },
        {
            question: "What is the art of beautiful handwriting called?",
            options: ["Typography", "Calligraphy", "Lithography", "Photography"],
            correct: 1,
            explanation: "Calligraphy is decorative handwriting or lettering"
        },
        {
            question: "Who sculpted 'David'?",
            options: ["Donatello", "Michelangelo", "Bernini", "Rodin"],
            correct: 1,
            explanation: "Michelangelo created this Renaissance masterpiece (1501-1504)"
        },
        {
            question: "Which playwright wrote 'Hamlet'?",
            options: ["Christopher Marlowe", "William Shakespeare", "Ben Jonson", "John Webster"],
            correct: 1,
            explanation: "Shakespeare wrote Hamlet around 1600"
        }
    ],
    general: [
        {
            question: "What is the capital of France?",
            options: ["London", "Berlin", "Paris", "Madrid"],
            correct: 2,
            explanation: "Paris has been France's capital since 987 AD"
        },
        {
            question: "How many continents are there?",
            options: ["5", "6", "7", "8"],
            correct: 2,
            explanation: "The seven continents are: Asia, Africa, North America, South America, Antarctica, Europe, and Australia"
        },
        {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
            correct: 2,
            explanation: "The Pacific Ocean covers about 63 million square miles"
        },
        {
            question: "In which year did World War II end?",
            options: ["1943", "1944", "1945", "1946"],
            correct: 2,
            explanation: "WWII ended in 1945 with Germany's surrender in May and Japan's in September"
        },
        {
            question: "What is the smallest country in the world?",
            options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
            correct: 1,
            explanation: "Vatican City is 0.17 square miles in area"
        },
        {
            question: "Which country is known as the Land of the Rising Sun?",
            options: ["China", "Thailand", "Japan", "South Korea"],
            correct: 2,
            explanation: "Japan is called this because of its eastern location"
        },
        {
            question: "What is the currency of the United Kingdom?",
            options: ["Euro", "Dollar", "Pound Sterling", "Franc"],
            correct: 2,
            explanation: "The British Pound Sterling (GBP) is one of the oldest currencies"
        },
        {
            question: "How many colors are in a rainbow?",
            options: ["5", "6", "7", "8"],
            correct: 2,
            explanation: "The seven colors are: Red, Orange, Yellow, Green, Blue, Indigo, Violet"
        },
        {
            question: "What is the tallest mountain in the world?",
            options: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
            correct: 2,
            explanation: "Mount Everest stands at 29,032 feet (8,849 meters)"
        },
        {
            question: "Which planet is closest to the Sun?",
            options: ["Venus", "Mars", "Mercury", "Earth"],
            correct: 2,
            explanation: "Mercury orbits at an average distance of 36 million miles from the Sun"
        }
    ],
    technology: [
        {
            question: "Who is known as the father of computers?",
            options: ["Alan Turing", "Charles Babbage", "Steve Jobs", "Bill Gates"],
            correct: 1,
            explanation: "Charles Babbage designed the first mechanical computer in the 1830s"
        },
        {
            question: "What does CPU stand for?",
            options: ["Central Processing Unit", "Computer Personal Unit", "Central Processor Utility", "Core Processing Unit"],
            correct: 0,
            explanation: "CPU is the primary component that processes instructions"
        },
        {
            question: "In what year was the first iPhone released?",
            options: ["2005", "2006", "2007", "2008"],
            correct: 2,
            explanation: "Steve Jobs unveiled the iPhone on January 9, 2007"
        },
        {
            question: "What does HTML stand for?",
            options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
            correct: 0,
            explanation: "HTML is the standard markup language for web pages"
        },
        {
            question: "Who founded Microsoft?",
            options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Elon Musk"],
            correct: 1,
            explanation: "Bill Gates and Paul Allen founded Microsoft in 1975"
        },
        {
            question: "What does WWW stand for?",
            options: ["World Wide Web", "Web World Wide", "Wide World Web", "World Web Wide"],
            correct: 0,
            explanation: "Tim Berners-Lee invented the World Wide Web in 1989"
        },
        {
            question: "What language is known as the 'language of the web'?",
            options: ["Python", "Java", "JavaScript", "C++"],
            correct: 2,
            explanation: "JavaScript enables interactive web pages and runs in browsers"
        },
        {
            question: "What does USB stand for?",
            options: ["Universal Serial Bus", "United Serial Bus", "Universal System Bus", "United System Bus"],
            correct: 0,
            explanation: "USB is an industry standard for cables and connectors"
        },
        {
            question: "Who founded Facebook?",
            options: ["Jack Dorsey", "Mark Zuckerberg", "Elon Musk", "Jeff Bezos"],
            correct: 1,
            explanation: "Mark Zuckerberg launched Facebook in 2004"
        },
        {
            question: "What does AI stand for?",
            options: ["Automated Intelligence", "Artificial Intelligence", "Advanced Intelligence", "Algorithmic Intelligence"],
            correct: 1,
            explanation: "AI refers to machines simulating human intelligence"
        }
    ]
};

// ============================================
// 2. APPLICATION CONFIGURATION
// ============================================
const CONFIG = {
    TIME_PER_QUESTION: 15, // seconds
    POINTS_PER_CORRECT: 10,
    PASSING_SCORE: 70, // percentage
    MAX_QUIZ_HISTORY: 50,
    AUTO_SAVE_INTERVAL: 5000, // ms
    ANIMATION_DURATION: 300 // ms
};

// ============================================
// 3. USER DATA MANAGEMENT
// ============================================
class UserDataManager {
    constructor() {
        this.defaultData = {
            name: "Guest User",
            email: "guest@quizapp.com",
            username: "guest_user",
            bio: "",
            points: 230,
            rank: 1250,
            totalQuizzes: 0,
            averageScore: 0,
            currentStreak: 0,
            totalBadges: 0,
            bestScore: 0,
            preferences: {
                soundEffects: true,
                notifications: true,
                darkMode: false
            },
            quizHistory: [],
            categoryStats: {
                math: { attempted: 0, correct: 0, totalQuestions: 0, bestScore: 0 },
                science: { attempted: 0, correct: 0, totalQuestions: 0, bestScore: 0 },
                art: { attempted: 0, correct: 0, totalQuestions: 0, bestScore: 0 },
                general: { attempted: 0, correct: 0, totalQuestions: 0, bestScore: 0 },
                technology: { attempted: 0, correct: 0, totalQuestions: 0, bestScore: 0 }
            },
            lastPlayed: null
        };
    }

    load() {
        try {
            const stored = localStorage.getItem('quizAppUser');
            if (stored) {
                const parsed = JSON.parse(stored);
                return { ...this.defaultData, ...parsed };
            }
        } catch (error) {
            console.error('Error loading user data:', error);
        }
        return { ...this.defaultData };
    }

    save(data) {
        try {
            localStorage.setItem('quizAppUser', JSON.stringify(data));
            return true;
        } catch (error) {
            console.error('Error saving user data:', error);
            return false;
        }
    }

    reset() {
        localStorage.removeItem('quizAppUser');
        return { ...this.defaultData };
    }
}

const userDataManager = new UserDataManager();
let userData = userDataManager.load();

// ============================================
// 4. QUIZ STATE MANAGER
// ============================================
class QuizState {
    constructor() {
        this.reset();
    }

    reset() {
        this.category = '';
        this.questions = [];
        this.currentIndex = 0;
        this.selectedAnswer = null;
        this.score = 0;
        this.isSubmitted = false;
        this.timeRemaining = 0;
        this.timer = null;
        this.startTime = null;
    }

    init(category) {
        this.reset();
        this.category = category;
        this.questions = [...quizData[category]];
        this.timeRemaining = this.questions.length * CONFIG.TIME_PER_QUESTION;
        this.startTime = Date.now();
    }

    get totalQuestions() {
        return this.questions.length;
    }

    get currentQuestion() {
        return this.questions[this.currentIndex];
    }

    get isLastQuestion() {
        return this.currentIndex >= this.totalQuestions - 1;
    }

    get percentageScore() {
        return Math.round((this.score / this.totalQuestions) * 100);
    }

    get timeTaken() {
        return this.startTime ? Math.floor((Date.now() - this.startTime) / 1000) : 0;
    }

    nextQuestion() {
        this.currentIndex++;
        this.selectedAnswer = null;
        this.isSubmitted = false;
    }
}

const quizState = new QuizState();

// ============================================
// 5. DOM ELEMENT REFERENCES
// ============================================
const DOM = {
    // Screens
    homeScreen: document.getElementById('homeScreen'),
    quizScreen: document.getElementById('quizScreen'),
    resultsScreen: document.getElementById('resultsScreen'),
    
    // Sidebar
    sidebar: document.getElementById('sidebar'),
    sidebarOverlay: document.getElementById('sidebarOverlay'),
    menuBtn: document.getElementById('menuBtn'),
    closeSidebar: document.getElementById('closeSidebar'),
    
    // Profile
    profileModal: document.getElementById('profileModal'),
    profileBtn: document.getElementById('profileBtn'),
    closeProfile: document.getElementById('closeProfile'),
    
    // Quiz elements
    categoryCards: document.querySelectorAll('.category-card'),
    questionText: document.getElementById('questionText'),
    optionsContainer: document.getElementById('optionsContainer'),
    submitBtn: document.getElementById('submitBtn'),
    currentQuestionEl: document.getElementById('currentQuestion'),
    totalQuestionsDisplay: document.getElementById('totalQuestionsDisplay'),
    timeRemainingEl: document.getElementById('timeRemaining'),
    quizCategory: document.getElementById('quizCategory'),
    quizCategoryIcon: document.getElementById('quizCategoryIcon'),
    progressFill: document.getElementById('progressFill'),
    
    // Results
    scorePercentageEl: document.getElementById('scorePercentage'),
    totalQuestionsEl: document.getElementById('totalQuestions'),
    correctAnswersEl: document.getElementById('correctAnswers'),
    performanceBadge: document.getElementById('performanceBadge'),
    resultsTitle: document.getElementById('resultsTitle'),
    timeTaken: document.getElementById('timeTaken'),
    accuracyRate: document.getElementById('accuracyRate'),
    pointsEarned: document.getElementById('pointsEarned'),
    
    // Home stats
    homePoints: document.getElementById('homePoints'),
    homeRank: document.getElementById('homeRank'),
    
    // Profile fields
    profileName: document.getElementById('profileName'),
    profileEmail: document.getElementById('profileEmail'),
    profileUsername: document.getElementById('profileUsername'),
    profileBio: document.getElementById('profileBio'),
    totalQuizzes: document.getElementById('totalQuizzes'),
    averageScore: document.getElementById('averageScore'),
    currentStreak: document.getElementById('currentStreak'),
    totalBadges: document.getElementById('totalBadges'),
    
    // Buttons
    saveProfileBtn: document.getElementById('saveProfileBtn'),
    cancelProfileBtn: document.getElementById('cancelProfileBtn'),
    logoutBtn: document.getElementById('logoutBtn'),
    retryQuizBtn: document.getElementById('retryQuizBtn'),
    homeBtn: document.getElementById('homeBtn'),
    upgradeBtn: document.getElementById('upgradeBtn'),
    closeButtons: document.querySelectorAll('.close-btn'),
    shareIcons: document.querySelectorAll('.share-icon'),
    
    // Nav items
    navItems: document.querySelectorAll('.nav-item'),
    leaderboardBtn: document.getElementById('leaderboardBtn'),
    historyBtn: document.getElementById('historyBtn'),
    achievementsBtn: document.getElementById('achievementsBtn'),
    settingsBtn: document.getElementById('settingsBtn'),
    
    // Loading
    loadingOverlay: document.getElementById('loadingOverlay')
};

// ============================================
// 6. UTILITY FUNCTIONS
// ============================================
const Utils = {
    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    },

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    },

    getPerformanceBadge(percentage) {
        if (percentage === 100) return { icon: '🏆', text: 'Perfect!', class: 'perfect' };
        if (percentage >= 90) return { icon: '⭐', text: 'Excellent', class: 'excellent' };
        if (percentage >= 80) return { icon: '👍', text: 'Great', class: 'great' };
        if (percentage >= 70) return { icon: '👌', text: 'Good', class: 'good' };
        if (percentage >= 60) return { icon: '✓', text: 'Pass', class: 'pass' };
        return { icon: '📚', text: 'Keep Learning', class: 'retry' };
    },

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 25px;
            border-radius: 10px;
            color: white;
            font-weight: 500;
            z-index: 10000;
            animation: slideInRight 0.3s ease;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        `;
        
        const colors = {
            success: 'linear-gradient(135deg, #4caf50 0%, #45a049 100%)',
            error: 'linear-gradient(135deg, #f44336 0%, #e53935 100%)',
            warning: 'linear-gradient(135deg, #ff9800 0%, #f57c00 100%)',
            info: 'linear-gradient(135deg, #ff9a56 0%, #ff7043 100%)'
        };
        
        notification.style.background = colors[type] || colors.info;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    },

    calculateRank(points) {
        return Math.max(1, 10000 - Math.floor(points / 10));
    }
};

// ============================================
// 7. SCREEN MANAGEMENT
// ============================================
const ScreenManager = {
    show(screenName) {
        [DOM.homeScreen, DOM.quizScreen, DOM.resultsScreen].forEach(screen => {
            if (screen) screen.classList.remove('active');
        });

        const screenMap = {
            'home': DOM.homeScreen,
            'quiz': DOM.quizScreen,
            'results': DOM.resultsScreen
        };

        const screen = screenMap[screenName];
        if (screen) {
            screen.classList.add('active');
            if (screenName === 'quiz') {
                this.updateProgressBar();
            }
        }
    },

    updateProgressBar() {
        if (DOM.progressFill && quizState.totalQuestions > 0) {
            const progress = ((quizState.currentIndex + 1) / quizState.totalQuestions) * 100;
            DOM.progressFill.style.width = `${progress}%`;
        }
    }
};

// ============================================
// 8. SIDEBAR MANAGER
// ============================================
const SidebarManager = {
    open() {
        if (DOM.sidebar) DOM.sidebar.classList.add('active');
        if (DOM.sidebarOverlay) DOM.sidebarOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    },

    close() {
        if (DOM.sidebar) DOM.sidebar.classList.remove('active');
        if (DOM.sidebarOverlay) DOM.sidebarOverlay.classList.remove('active');
        document.body.style.overflow = '';
    },

    updateUserInfo() {
        const nameEl = document.getElementById('sidebarUserName');
        const emailEl = document.getElementById('sidebarUserEmail');
        if (nameEl) nameEl.textContent = userData.name;
        if (emailEl) emailEl.textContent = userData.email;
    }
};

// ============================================
// 9. PROFILE MANAGER
// ============================================
const ProfileManager = {
    open() {
        if (DOM.profileModal) {
            DOM.profileModal.classList.add('active');
            document.body.style.overflow = 'hidden';
            this.updateFields();
        }
    },

    close() {
        if (DOM.profileModal) {
            DOM.profileModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    },

    updateFields() {
        if (DOM.profileName) DOM.profileName.value = userData.name;
        if (DOM.profileEmail) DOM.profileEmail.value = userData.email;
        if (DOM.profileUsername) DOM.profileUsername.value = userData.username;
        if (DOM.profileBio) DOM.profileBio.value = userData.bio;
        
        if (DOM.totalQuizzes) DOM.totalQuizzes.textContent = userData.totalQuizzes;
        if (DOM.averageScore) DOM.averageScore.textContent = userData.averageScore + '%';
        if (DOM.currentStreak) DOM.currentStreak.textContent = userData.currentStreak;
        if (DOM.totalBadges) DOM.totalBadges.textContent = userData.totalBadges;
    },

    save() {
        if (!DOM.profileName.value.trim()) {
            Utils.showNotification('Please enter your name', 'error');
            return;
        }

        userData.name = DOM.profileName.value.trim();
        userData.email = DOM.profileEmail.value.trim();
        userData.username = DOM.profileUsername.value.trim();
        userData.bio = DOM.profileBio.value.trim();

        if (userDataManager.save(userData)) {
            SidebarManager.updateUserInfo();
            HomeManager.updateStats();
            this.close();
            Utils.showNotification('Profile updated successfully!', 'success');
        } else {
            Utils.showNotification('Failed to save profile', 'error');
        }
    }
};

// ============================================
// 10. HOME MANAGER
// ============================================
const HomeManager = {
    updateStats() {
        if (DOM.homePoints) DOM.homePoints.textContent = userData.points;
        if (DOM.homeRank) {
            const rank = Utils.calculateRank(userData.points);
            DOM.homeRank.innerHTML = `${rank}<span class="rank-suffix">₂</span>`;
        }
    }
};

// ============================================
// 11. QUIZ MANAGER
// ============================================
const QuizManager = {
    start(category) {
        if (!quizData[category]) {
            Utils.showNotification('Invalid category', 'error');
            return;
        }

        quizState.init(category);
        
        const categoryNames = {
            math: { name: 'Statistics & Math', icon: '📊' },
            science: { name: 'Science & Nature', icon: '🔬' },
            art: { name: 'Art and Literature', icon: '🎨' },
            general: { name: 'General Knowledge', icon: '📦' },
            technology: { name: 'Technology', icon: '💡' }
        };

        const categoryInfo = categoryNames[category];
        if (DOM.quizCategory) DOM.quizCategory.textContent = categoryInfo.name;
        if (DOM.quizCategoryIcon) DOM.quizCategoryIcon.textContent = categoryInfo.icon;
        if (DOM.totalQuestionsDisplay) DOM.totalQuestionsDisplay.textContent = quizState.totalQuestions;

        ScreenManager.show('quiz');
        this.loadQuestion();
        this.startTimer();
    },

    loadQuestion() {
        const question = quizState.currentQuestion;
        if (!question) {
            this.showResults();
            return;
        }

        quizState.selectedAnswer = null;
        quizState.isSubmitted = false;

        if (DOM.submitBtn) {
            DOM.submitBtn.disabled = true;
            DOM.submitBtn.textContent = 'SUBMIT';
        }

        if (DOM.questionText) {
            DOM.questionText.textContent = `${quizState.currentIndex + 1}. ${question.question}`;
        }

        if (DOM.currentQuestionEl) {
            DOM.currentQuestionEl.textContent = quizState.currentIndex + 1;
        }

        if (DOM.optionsContainer) {
            DOM.optionsContainer.innerHTML = '';
            const labels = ['A', 'B', 'C', 'D'];
            
            question.options.forEach((option, index) => {
                const optionEl = document.createElement('div');
                optionEl.className = 'option';
                optionEl.setAttribute('data-index', index);
                optionEl.innerHTML = `
                    <div class="option-label">${labels[index]}</div>
                    <div class="option-text">${option}</div>
                `;
                
                optionEl.addEventListener('click', () => {
                    if (!quizState.isSubmitted) {
                        this.selectOption(index);
                    }
                });
                
                DOM.optionsContainer.appendChild(optionEl);
            });
        }

        ScreenManager.updateProgressBar();
    },

    selectOption(index) {
        if (quizState.isSubmitted) return;

        document.querySelectorAll('.option').forEach(opt => {
            opt.classList.remove('selected');
        });

        const options = document.querySelectorAll('.option');
        if (options[index]) {
            options[index].classList.add('selected');
            quizState.selectedAnswer = index;
            if (DOM.submitBtn) DOM.submitBtn.disabled = false;
        }
    },

    submit() {
        if (quizState.isSubmitted) {
            this.nextQuestion();
            return;
        }

        if (quizState.selectedAnswer === null) return;

        quizState.isSubmitted = true;
        const question = quizState.currentQuestion;
        const options = document.querySelectorAll('.option');

        options.forEach(opt => {
            opt.style.pointerEvents = 'none';
        });

        options.forEach((opt, index) => {
            if (index === question.correct) {
                opt.classList.add('correct');
                opt.classList.remove('selected');
            } else if (index === quizState.selectedAnswer && quizState.selectedAnswer !== question.correct) {
                opt.classList.add('wrong');
                opt.classList.remove('selected');
            }
        });

        if (quizState.selectedAnswer === question.correct) {
            quizState.score++;
        }

        // Update category stats
        const categoryStats = userData.categoryStats[quizState.category];
        if (categoryStats) {
            categoryStats.attempted++;
            categoryStats.totalQuestions++;
            if (quizState.selectedAnswer === question.correct) {
                categoryStats.correct++;
            }
        }

        if (DOM.submitBtn) {
            DOM.submitBtn.textContent = quizState.isLastQuestion ? 'FINISH' : 'NEXT';
            DOM.submitBtn.disabled = false;
        }
    },

    nextQuestion() {
        if (quizState.isLastQuestion) {
            this.showResults();
        } else {
            quizState.nextQuestion();
            this.loadQuestion();
        }
    },

    startTimer() {
        this.updateTimerDisplay();

        quizState.timer = setInterval(() => {
            quizState.timeRemaining--;
            this.updateTimerDisplay();

            if (quizState.timeRemaining <= 0) {
                clearInterval(quizState.timer);
                quizState.timer = null;
                this.showResults();
            }
        }, 1000);
    },

    updateTimerDisplay() {
        if (!DOM.timeRemainingEl) return;

        DOM.timeRemainingEl.textContent = Utils.formatTime(quizState.timeRemaining);

        if (quizState.timeRemaining <= 30) {
            DOM.timeRemainingEl.style.color = '#ff4444';
        } else {
            DOM.timeRemainingEl.style.color = 'rgba(255, 255, 255, 0.7)';
        }
    },

    showResults() {
        if (quizState.timer) {
            clearInterval(quizState.timer);
            quizState.timer = null;
        }

        const percentage = quizState.percentageScore;
        const timeTaken = quizState.timeTaken;
        const pointsEarned = quizState.score * CONFIG.POINTS_PER_CORRECT;

        // Update results display
        if (DOM.scorePercentageEl) DOM.scorePercentageEl.textContent = `${percentage}%`;
        if (DOM.totalQuestionsEl) DOM.totalQuestionsEl.textContent = quizState.totalQuestions;
        if (DOM.correctAnswersEl) DOM.correctAnswersEl.textContent = quizState.score;
        if (DOM.timeTaken) DOM.timeTaken.textContent = Utils.formatTime(timeTaken);
        if (DOM.accuracyRate) DOM.accuracyRate.textContent = `${percentage}%`;
        if (DOM.pointsEarned) DOM.pointsEarned.textContent = `+${pointsEarned}`;

        // Performance badge
        const badge = Utils.getPerformanceBadge(percentage);
        if (DOM.performanceBadge) {
            DOM.performanceBadge.innerHTML = `
                <span class="badge-icon">${badge.icon}</span>
                <span class="badge-text">${badge.text}</span>
            `;
            DOM.performanceBadge.className = `performance-badge ${badge.class}`;
        }

        // Results title
        if (DOM.resultsTitle) {
            DOM.resultsTitle.textContent = percentage >= 70 ? 'Congratulations!' : 'Good Effort!';
        }

        // Update user statistics
        this.updateUserStats(percentage, pointsEarned, timeTaken);

        // Save and update UI
        userDataManager.save(userData);
        HomeManager.updateStats();
        ProfileManager.updateFields();

        ScreenManager.show('results');
    },

    updateUserStats(percentage, pointsEarned, timeTaken) {
        userData.totalQuizzes++;
        userData.points += pointsEarned;

        // Update best score
        if (percentage > userData.bestScore) {
            userData.bestScore = percentage;
        }

        // Calculate average score
        const totalScore = userData.averageScore * (userData.totalQuizzes - 1) + percentage;
        userData.averageScore = Math.round(totalScore / userData.totalQuizzes);

        // Update streak
        if (percentage >= CONFIG.PASSING_SCORE) {
            userData.currentStreak++;
        } else {
            userData.currentStreak = 0;
        }

        // Award badges
        this.awardBadges(percentage);

        // Update category stats
        const categoryStats = userData.categoryStats[quizState.category];
        if (categoryStats && percentage > categoryStats.bestScore) {
            categoryStats.bestScore = percentage;
        }

        // Add to quiz history
        userData.quizHistory.push({
            category: quizState.category,
            score: quizState.score,
            total: quizState.totalQuestions,
            percentage: percentage,
            timeTaken: timeTaken,
            date: new Date().toISOString(),
            timestamp: Date.now()
        });

        // Keep only last records
        if (userData.quizHistory.length > CONFIG.MAX_QUIZ_HISTORY) {
            userData.quizHistory = userData.quizHistory.slice(-CONFIG.MAX_QUIZ_HISTORY);
        }

        userData.lastPlayed = new Date().toISOString();
    },

    awardBadges(percentage) {
        let newBadges = 0;

        if (percentage === 100) newBadges++;
        if (percentage >= 90) newBadges++;
        if (userData.totalQuizzes === 1) newBadges++; // First quiz
        if (userData.totalQuizzes === 10) newBadges++; // 10 quizzes
        if (userData.totalQuizzes === 50) newBadges++; // 50 quizzes
        if (userData.currentStreak === 5) newBadges++; // 5 day streak

        userData.totalBadges += newBadges;

        if (newBadges > 0) {
            Utils.showNotification(`🎉 You earned ${newBadges} new badge${newBadges > 1 ? 's' : ''}!`, 'success');
        }
    },

    stop() {
        if (quizState.timer) {
            clearInterval(quizState.timer);
            quizState.timer = null;
        }
        quizState.reset();
    },

    retry() {
        const category = quizState.category;
        this.stop();
        this.start(category);
    }
};

// ============================================
// 12. SHARE MANAGER
// ============================================
const ShareManager = {
    share(platform) {
        const percentage = quizState.percentageScore;
        const category = quizState.category;
        const categoryNames = {
            math: 'Statistics & Math',
            science: 'Science & Nature',
            art: 'Art and Literature',
            general: 'General Knowledge',
            technology: 'Technology'
        };
        
        const text = `I scored ${percentage}% in ${categoryNames[category]} on Quiz App! Can you beat my score?`;
        const url = window.location.href;

        const shareUrls = {
            whatsapp: `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`,
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`,
            twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`
        };

        if (shareUrls[platform]) {
            window.open(shareUrls[platform], '_blank', 'width=600,height=400');
            Utils.showNotification('Opening share dialog...', 'info');
        }
    }
};

// ============================================
// 13. EVENT HANDLERS
// ============================================
const EventHandlers = {
    init() {
        // Sidebar
        if (DOM.menuBtn) DOM.menuBtn.addEventListener('click', () => SidebarManager.open());
        if (DOM.closeSidebar) DOM.closeSidebar.addEventListener('click', () => SidebarManager.close());
        if (DOM.sidebarOverlay) DOM.sidebarOverlay.addEventListener('click', () => SidebarManager.close());

        // Profile
        if (DOM.profileBtn) DOM.profileBtn.addEventListener('click', () => ProfileManager.open());
        if (DOM.closeProfile) DOM.closeProfile.addEventListener('click', () => ProfileManager.close());
        if (DOM.saveProfileBtn) DOM.saveProfileBtn.addEventListener('click', () => ProfileManager.save());
        if (DOM.cancelProfileBtn) DOM.cancelProfileBtn.addEventListener('click', () => ProfileManager.close());

        // Navigation items
        DOM.navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const screen = item.getAttribute('data-screen');
                
                DOM.navItems.forEach(nav => nav.classList.remove('active'));
                item.classList.add('active');
                
                if (screen === 'home') {
                    SidebarManager.close();
                    ScreenManager.show('home');
                } else if (screen === 'profile') {
                    SidebarManager.close();
                    ProfileManager.open();
                }
            });
        });

        // Category selection
        DOM.categoryCards.forEach(card => {
            card.addEventListener('click', () => {
                const category = card.getAttribute('data-category');
                QuizManager.start(category);
            });
        });

        // Quiz controls
        if (DOM.submitBtn) {
            DOM.submitBtn.addEventListener('click', () => QuizManager.submit());
        }

        // Close buttons
        DOM.closeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                if (DOM.quizScreen.classList.contains('active')) {
                    if (confirm('Are you sure you want to exit? Your progress will be lost.')) {
                        QuizManager.stop();
                        ScreenManager.show('home');
                    }
                } else {
                    ScreenManager.show('home');
                }
            });
        });

        // Results actions
        if (DOM.retryQuizBtn) {
            DOM.retryQuizBtn.addEventListener('click', () => QuizManager.retry());
        }
        if (DOM.homeBtn) {
            DOM.homeBtn.addEventListener('click', () => {
                QuizManager.stop();
                ScreenManager.show('home');
            });
        }

        // Share buttons
        DOM.shareIcons.forEach(icon => {
            icon.addEventListener('click', () => {
                if (icon.classList.contains('whatsapp')) ShareManager.share('whatsapp');
                else if (icon.classList.contains('facebook')) ShareManager.share('facebook');
                else if (icon.classList.contains('twitter')) ShareManager.share('twitter');
            });
        });

        // Other buttons
        if (DOM.logoutBtn) {
            DOM.logoutBtn.addEventListener('click', () => this.handleLogout());
        }
        if (DOM.upgradeBtn) {
            DOM.upgradeBtn.addEventListener('click', () => {
                Utils.showNotification('Upgrade to Premium - Coming Soon!', 'info');
            });
        }

        // Sidebar features
        if (DOM.leaderboardBtn) DOM.leaderboardBtn.addEventListener('click', () => {
            SidebarManager.close();
            Utils.showNotification('Leaderboard feature coming soon!', 'info');
        });
        if (DOM.historyBtn) DOM.historyBtn.addEventListener('click', () => {
            SidebarManager.close();
            Utils.showNotification('Quiz History feature coming soon!', 'info');
        });
        if (DOM.achievementsBtn) DOM.achievementsBtn.addEventListener('click', () => {
            SidebarManager.close();
            Utils.showNotification('Achievements feature coming soon!', 'info');
        });
        if (DOM.settingsBtn) DOM.settingsBtn.addEventListener('click', () => {
            SidebarManager.close();
            Utils.showNotification('Settings feature coming soon!', 'info');
        });

        // Preferences
        const soundCheckbox = document.getElementById('soundEffects');
        const notifCheckbox = document.getElementById('notifications');
        const darkModeCheckbox = document.getElementById('darkMode');

        if (soundCheckbox) {
            soundCheckbox.addEventListener('change', (e) => {
                userData.preferences.soundEffects = e.target.checked;
            });
        }
        if (notifCheckbox) {
            notifCheckbox.addEventListener('change', (e) => {
                userData.preferences.notifications = e.target.checked;
            });
        }
        if (darkModeCheckbox) {
            darkModeCheckbox.addEventListener('change', (e) => {
                userData.preferences.darkMode = e.target.checked;
                this.toggleDarkMode(e.target.checked);
            });
        }

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (DOM.quizScreen.classList.contains('active') && !quizState.isSubmitted) {
                const key = e.key.toLowerCase();
                const optionMap = { 'a': 0, 'b': 1, 'c': 2, 'd': 3 };
                
                if (key in optionMap) {
                    e.preventDefault();
                    QuizManager.selectOption(optionMap[key]);
                } else if (key === 'enter' && quizState.selectedAnswer !== null) {
                    e.preventDefault();
                    QuizManager.submit();
                }
            }

            // ESC to close modals
            if (e.key === 'Escape') {
                if (DOM.profileModal.classList.contains('active')) {
                    ProfileManager.close();
                } else if (DOM.sidebar.classList.contains('active')) {
                    SidebarManager.close();
                }
            }
        });

        // Prevent accidental page reload
        window.addEventListener('beforeunload', (e) => {
            if (DOM.quizScreen.classList.contains('active')) {
                e.preventDefault();
                e.returnValue = 'You have a quiz in progress. Are you sure you want to leave?';
                return e.returnValue;
            }
        });

        // Page visibility handling
        document.addEventListener('visibilitychange', () => {
            if (document.hidden && quizState.timer) {
                clearInterval(quizState.timer);
                quizState.timer = null;
            } else if (!document.hidden && DOM.quizScreen.classList.contains('active') && !quizState.timer && quizState.timeRemaining > 0) {
                QuizManager.startTimer();
            }
        });
    },

    handleLogout() {
        if (confirm('Are you sure you want to logout? Your data will be reset.')) {
            userData = userDataManager.reset();
            SidebarManager.updateUserInfo();
            ProfileManager.updateFields();
            HomeManager.updateStats();
            SidebarManager.close();
            Utils.showNotification('Logged out successfully!', 'success');
        }
    },

    toggleDarkMode(enabled) {
        if (enabled) {
            document.body.style.filter = 'invert(1) hue-rotate(180deg)';
            Utils.showNotification('Light mode enabled', 'success');
        } else {
            document.body.style.filter = '';
            Utils.showNotification('Light mode disabled', 'success');
        }
    }
};

// ============================================
// 14. ANIMATION INJECTOR
// ============================================
function injectAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(400px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(400px); opacity: 0; }
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        .trophy-animation {
            animation: bounce 1s ease-in-out infinite;
        }

        .loading-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(26, 31, 58, 0.95);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }

        .loading-overlay.active {
            opacity: 1;
            visibility: visible;
        }

        .loading-spinner {
            width: 50px;
            height: 50px;
            border: 4px solid rgba(255, 154, 86, 0.3);
            border-top: 4px solid #ff9a56;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-bottom: 20px;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .loading-overlay p {
            color: white;
            font-size: 16px;
        }

        .progress-bar {
            width: 100%;
            height: 4px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 2px;
            overflow: hidden;
            margin-top: 10px;
        }

        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, #ff9a56, #ff7043);
            transition: width 0.3s ease;
            border-radius: 2px;
        }

        .results-stats {
            display: flex;
            gap: 20px;
            justify-content: center;
            margin: 25px 0;
            flex-wrap: wrap;
        }

        .result-stat {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 5px;
            padding: 15px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            min-width: 100px;
        }

        .result-icon {
            font-size: 24px;
        }

        .result-value {
            font-size: 20px;
            font-weight: 700;
            color: #ff9a56;
        }

        .result-label {
            font-size: 12px;
            color: rgba(255, 255, 255, 0.6);
        }

        .performance-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 10px 20px;
            border-radius: 20px;
            margin: 15px 0;
            font-weight: 600;
        }

        .performance-badge.perfect { background: linear-gradient(135deg, #ffd700, #ffed4e); color: #333; }
        .performance-badge.excellent { background: linear-gradient(135deg, #4caf50, #45a049); color: white; }
        .performance-badge.great { background: linear-gradient(135deg, #2196F3, #1976D2); color: white; }
        .performance-badge.good { background: linear-gradient(135deg, #ff9800, #f57c00); color: white; }
        .performance-badge.pass { background: linear-gradient(135deg, #607D8B, #455A64); color: white; }
        .performance-badge.retry { background: linear-gradient(135deg, #f44336, #e53935); color: white; }

        .badge-icon {
            font-size: 20px;
        }

        .results-actions {
            display: flex;
            gap: 15px;
            margin-top: 20px;
            justify-content: center;
        }

        .results-actions button {
            padding: 12px 30px;
            border-radius: 10px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
        }
    `;
    document.head.appendChild(style);
}

// ============================================
// 15. APPLICATION INITIALIZATION
// ============================================
function initApp() {
    console.log('%c 📊 Quiz App v2.0 - Enhanced Edition ', 'background: #ff9a56; color: white; font-size: 16px; padding: 10px; border-radius: 5px;');
    console.log('%c ✨ New: Statistics & Math Category Added! ', 'background: #4caf50; color: white; font-size: 14px; padding: 8px; border-radius: 5px;');

    // Initialize components
    EventHandlers.init();
    SidebarManager.updateUserInfo();
    HomeManager.updateStats();
    ProfileManager.updateFields();
    injectAnimations();

    // Setup auto-save
    setInterval(() => {
        if (userDataManager.save(userData)) {
            console.log('Auto-saved user data');
        }
    }, CONFIG.AUTO_SAVE_INTERVAL);

    console.log('💡 Keyboard Shortcuts:');
    console.log('  - A/B/C/D: Select answer');
    console.log('  - Enter: Submit answer');
    console.log('  - Escape: Close modals');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
}

// ============================================
// 16. DEVELOPER TOOLS
// ============================================
window.quizApp = {
    version: '2.0.0',
    getUserData: () => userData,
    clearData: () => {
        userData = userDataManager.reset();
        HomeManager.updateStats();
        SidebarManager.updateUserInfo();
        Utils.showNotification('All data cleared', 'success');
    },
    addPoints: (points) => {
        userData.points += points;
        userDataManager.save(userData);
        HomeManager.updateStats();
        Utils.showNotification(`Added ${points} points!`, 'success');
    },
    completeQuiz: () => {
        quizState.score = quizState.totalQuestions;
        QuizManager.showResults();
    },
    getStats: () => userData.categoryStats,
    exportData: () => {
        const dataStr = JSON.stringify(userData, null, 2);
        console.log(dataStr);
        return userData;
    }
};

// ============================================
// 17. START APPLICATION
// ============================================
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

console.log('%c Type "quizApp" in console for developer tools ', 'background: #2196F3; color: white; font-size: 12px; padding: 5px 10px; border-radius: 5px;');
