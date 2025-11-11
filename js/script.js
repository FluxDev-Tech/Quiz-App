/* ============================================
   QUIZ APP - PROFESSIONAL EDITION v3.0
   Enhanced with smooth animations & modern design
   ============================================ */

'use strict';

// ============================================
// 1. ENHANCED QUIZ DATA
// ============================================
const quizData = {
    math: [
        {
            question: "What is the probability of rolling two dice and getting a sum of 7?",
            options: ["1/6", "1/4", "1/3", "1/2"],
            correct: 0,
            explanation: "There are 6 favorable outcomes (1+6, 2+5, 3+4, 4+3, 5+2, 6+1) out of 36 total: 6/36 = 1/6"
        },
        {
            question: "Calculate the variance of this dataset: 2, 4, 6, 8, 10",
            options: ["4", "6", "8", "10"],
            correct: 2,
            explanation: "Mean = 6, Variance = Σ(x-mean)²/n = [(4²+2²+0²+2²+4²)/5] = 8"
        },
        {
            question: "If 3x - 5 = 16, what is the value of 2x + 3?",
            options: ["11", "13", "15", "17"],
            correct: 2,
            explanation: "3x = 21, so x = 7. Therefore 2(7) + 3 = 17"
        },
        {
            question: "What is the interquartile range (IQR) of: 5, 7, 9, 11, 13, 15, 17?",
            options: ["6", "8", "10", "12"],
            correct: 1,
            explanation: "Q1 = 7, Q3 = 15, IQR = Q3 - Q1 = 15 - 7 = 8"
        },
        {
            question: "A bag contains 3 red and 7 blue balls. What's the probability of drawing 2 red balls consecutively without replacement?",
            options: ["3/45", "1/15", "3/50", "2/25"],
            correct: 1,
            explanation: "P = (3/10) × (2/9) = 6/90 = 1/15"
        },
        {
            question: "What is 35% of 240?",
            options: ["72", "84", "96", "108"],
            correct: 1,
            explanation: "35% of 240 = 0.35 × 240 = 84"
        },
        {
            question: "Find the median of: 15, 22, 8, 31, 19, 27, 12",
            options: ["15", "19", "22", "27"],
            correct: 1,
            explanation: "Ordered: 8, 12, 15, 19, 22, 27, 31. The median (middle value) is 19"
        },
        {
            question: "If f(x) = 2x² - 3x + 1, what is f(3)?",
            options: ["8", "10", "12", "14"],
            correct: 1,
            explanation: "f(3) = 2(3)² - 3(3) + 1 = 18 - 9 + 1 = 10"
        },
        {
            question: "What percentage of data in a normal distribution falls within 2 standard deviations?",
            options: ["68%", "95%", "99.7%", "100%"],
            correct: 1,
            explanation: "According to the empirical rule, 95% of data falls within 2σ of the mean"
        },
        {
            question: "Simplify: (x³ × x⁵) ÷ x⁴",
            options: ["x²", "x⁴", "x⁶", "x⁸"],
            correct: 1,
            explanation: "x³⁺⁵⁻⁴ = x⁸⁻⁴ = x⁴"
        }
    ],
    science: [
        {
            question: "What is the smallest unit of life that can function independently?",
            options: ["Atom", "Molecule", "Cell", "Tissue"],
            correct: 2,
            explanation: "The cell is the basic structural and functional unit of all living organisms"
        },
        {
            question: "Which element has the atomic number 6?",
            options: ["Oxygen", "Nitrogen", "Carbon", "Helium"],
            correct: 2,
            explanation: "Carbon has 6 protons, giving it an atomic number of 6"
        },
        {
            question: "What type of bond involves the sharing of electron pairs?",
            options: ["Ionic", "Covalent", "Metallic", "Hydrogen"],
            correct: 1,
            explanation: "Covalent bonds form when atoms share electrons to achieve stability"
        },
        {
            question: "Which planet has the most moons?",
            options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
            correct: 1,
            explanation: "Saturn has 146 confirmed moons, more than any other planet"
        },
        {
            question: "What is the pH of pure water at 25°C?",
            options: ["0", "7", "10", "14"],
            correct: 1,
            explanation: "Pure water is neutral with a pH of 7 at standard temperature"
        },
        {
            question: "Which organ produces insulin?",
            options: ["Liver", "Kidney", "Pancreas", "Spleen"],
            correct: 2,
            explanation: "The pancreas produces insulin, which regulates blood sugar levels"
        },
        {
            question: "What is the formula for photosynthesis?",
            options: ["CO₂ + H₂O → C₆H₁₂O₆ + O₂", "O₂ + C₆H₁₂O₆ → CO₂ + H₂O", "H₂O + O₂ → CO₂", "CO₂ → O₂"],
            correct: 0,
            explanation: "Plants convert carbon dioxide and water into glucose and oxygen using sunlight"
        },
        {
            question: "Which force keeps planets in orbit around the Sun?",
            options: ["Electromagnetic", "Nuclear", "Gravitational", "Frictional"],
            correct: 2,
            explanation: "Gravity provides the centripetal force that keeps planets in their orbits"
        },
        {
            question: "What is the boiling point of water at sea level in Celsius?",
            options: ["90°C", "95°C", "100°C", "105°C"],
            correct: 2,
            explanation: "Water boils at 100°C (212°F) at standard atmospheric pressure"
        },
        {
            question: "Which vitamin is produced when skin is exposed to sunlight?",
            options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"],
            correct: 2,
            explanation: "UVB radiation triggers vitamin D synthesis in the skin"
        }
    ],
    art: [
        {
            question: "Which art period is characterized by dramatic use of light and shadow?",
            options: ["Renaissance", "Baroque", "Impressionism", "Cubism"],
            correct: 1,
            explanation: "Baroque art (1600-1750) featured dramatic lighting and emotional intensity"
        },
        {
            question: "Who wrote 'Pride and Prejudice'?",
            options: ["Charlotte Brontë", "Jane Austen", "Emily Dickinson", "Virginia Woolf"],
            correct: 1,
            explanation: "Jane Austen published this classic romance novel in 1813"
        },
        {
            question: "What musical term means 'gradually getting louder'?",
            options: ["Diminuendo", "Crescendo", "Staccato", "Legato"],
            correct: 1,
            explanation: "Crescendo indicates a gradual increase in volume"
        },
        {
            question: "Which architect designed the Guggenheim Museum in New York?",
            options: ["Frank Lloyd Wright", "Le Corbusier", "Zaha Hadid", "Antoni Gaudí"],
            correct: 0,
            explanation: "Frank Lloyd Wright designed this iconic spiral building, completed in 1959"
        },
        {
            question: "What is the primary color triad in painting?",
            options: ["Red, Green, Blue", "Red, Yellow, Blue", "Cyan, Magenta, Yellow", "Orange, Purple, Green"],
            correct: 1,
            explanation: "Red, yellow, and blue are the traditional primary colors in art"
        },
        {
            question: "Who composed 'The Magic Flute'?",
            options: ["Beethoven", "Mozart", "Bach", "Haydn"],
            correct: 1,
            explanation: "Wolfgang Amadeus Mozart composed this opera in 1791"
        },
        {
            question: "Which literary device compares two things using 'like' or 'as'?",
            options: ["Metaphor", "Simile", "Personification", "Hyperbole"],
            correct: 1,
            explanation: "A simile makes comparisons using 'like' or 'as' (e.g., 'as brave as a lion')"
        },
        {
            question: "Who painted 'The Persistence of Memory' with melting clocks?",
            options: ["Pablo Picasso", "Salvador Dalí", "René Magritte", "Joan Miró"],
            correct: 1,
            explanation: "Salvador Dalí created this surrealist masterpiece in 1931"
        },
        {
            question: "What is the term for a Japanese form of poetry with 5-7-5 syllable structure?",
            options: ["Sonnet", "Haiku", "Limerick", "Tanka"],
            correct: 1,
            explanation: "Haiku consists of three lines with 5, 7, and 5 syllables"
        },
        {
            question: "Which artist is famous for the 'Blue Period'?",
            options: ["Vincent van Gogh", "Claude Monet", "Pablo Picasso", "Henri Matisse"],
            correct: 2,
            explanation: "Picasso's Blue Period (1901-1904) featured melancholic blue-toned paintings"
        }
    ],
    general: [
        {
            question: "Which river is the longest in the world?",
            options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
            correct: 1,
            explanation: "The Nile River in Africa is approximately 6,650 km long"
        },
        {
            question: "In which year did the Berlin Wall fall?",
            options: ["1987", "1989", "1991", "1993"],
            correct: 1,
            explanation: "The Berlin Wall fell on November 9, 1989, reunifying Germany"
        },
        {
            question: "What is the capital of Australia?",
            options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
            correct: 2,
            explanation: "Canberra has been Australia's capital since 1913"
        },
        {
            question: "Which language has the most native speakers worldwide?",
            options: ["English", "Spanish", "Mandarin Chinese", "Hindi"],
            correct: 2,
            explanation: "Mandarin Chinese has over 900 million native speakers"
        },
        {
            question: "Mount Kilimanjaro is located in which country?",
            options: ["Kenya", "Tanzania", "Uganda", "Ethiopia"],
            correct: 1,
            explanation: "Africa's highest mountain is in northeastern Tanzania"
        },
        {
            question: "What is the currency of Switzerland?",
            options: ["Euro", "Swiss Franc", "Krone", "Pound"],
            correct: 1,
            explanation: "Switzerland uses the Swiss Franc (CHF), not the Euro"
        },
        {
            question: "Which ocean is the deepest?",
            options: ["Atlantic", "Indian", "Pacific", "Arctic"],
            correct: 2,
            explanation: "The Pacific Ocean's Mariana Trench reaches 10,994 meters deep"
        },
        {
            question: "How many time zones does Russia span?",
            options: ["7", "9", "11", "13"],
            correct: 2,
            explanation: "Russia spans 11 time zones, more than any other country"
        },
        {
            question: "Which country gifted the Statue of Liberty to the USA?",
            options: ["England", "France", "Spain", "Italy"],
            correct: 1,
            explanation: "France gifted the statue in 1886 as a symbol of friendship"
        },
        {
            question: "What is the most populated city in the world?",
            options: ["Shanghai", "Tokyo", "Delhi", "São Paulo"],
            correct: 1,
            explanation: "Tokyo metropolitan area has over 37 million residents"
        }
    ],
    technology: [
        {
            question: "What does API stand for?",
            options: ["Application Programming Interface", "Advanced Programming Integration", "Automated Process Integration", "Application Process Interface"],
            correct: 0,
            explanation: "APIs allow different software applications to communicate with each other"
        },
        {
            question: "Which company developed the Android operating system?",
            options: ["Apple", "Microsoft", "Google", "Samsung"],
            correct: 2,
            explanation: "Google acquired and developed Android, released in 2008"
        },
        {
            question: "What does RAM stand for?",
            options: ["Random Access Memory", "Read Access Memory", "Rapid Access Memory", "Remote Access Memory"],
            correct: 0,
            explanation: "RAM is temporary storage that the computer uses for active tasks"
        },
        {
            question: "Who is credited with inventing the World Wide Web?",
            options: ["Bill Gates", "Steve Jobs", "Tim Berners-Lee", "Larry Page"],
            correct: 2,
            explanation: "Tim Berners-Lee invented the WWW in 1989 at CERN"
        },
        {
            question: "What is the binary equivalent of the decimal number 10?",
            options: ["1010", "1100", "1001", "1110"],
            correct: 0,
            explanation: "10 in decimal = 1×8 + 0×4 + 1×2 + 0×1 = 1010 in binary"
        },
        {
            question: "Which programming language is known for its snake logo?",
            options: ["Java", "Python", "Ruby", "C++"],
            correct: 1,
            explanation: "Python uses a snake logo and is named after Monty Python"
        },
        {
            question: "What does VPN stand for?",
            options: ["Virtual Private Network", "Visual Programming Network", "Verified Protection Network", "Variable Process Node"],
            correct: 0,
            explanation: "VPNs create secure, encrypted connections over the internet"
        },
        {
            question: "Which company owns Instagram?",
            options: ["Twitter", "Google", "Meta (Facebook)", "Microsoft"],
            correct: 2,
            explanation: "Meta (formerly Facebook) acquired Instagram in 2012"
        },
        {
            question: "What is the maximum character limit for a traditional SMS text message?",
            options: ["100", "140", "160", "200"],
            correct: 2,
            explanation: "Standard SMS messages are limited to 160 characters"
        },
        {
            question: "Which protocol is used to send emails?",
            options: ["HTTP", "FTP", "SMTP", "TCP"],
            correct: 2,
            explanation: "SMTP (Simple Mail Transfer Protocol) is used for sending emails"
        }
    ]
};

// ============================================
// 2. ENHANCED CONFIGURATION
// ============================================
const CONFIG = {
    TIME_PER_QUESTION: 30,
    POINTS_PER_CORRECT: 10,
    PASSING_SCORE: 70,
    MAX_QUIZ_HISTORY: 50,
    AUTO_SAVE_INTERVAL: 5000,
    ANIMATION_DURATION: 400,
    FEEDBACK_DELAY: 1500
};

// ============================================
// 3. USER DATA MANAGER
// ============================================
class UserDataManager {
    constructor() {
        this.defaultData = {
            name: "Quiz Master",
            email: "user@quizpro.com",
            username: "quiz_master",
            bio: "Passionate learner",
            points: 150,
            rank: 2847,
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
        this.answers = [];
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

    recordAnswer(questionIndex, selectedOption, correct) {
        this.answers.push({
            questionIndex,
            selectedOption,
            correct,
            timestamp: Date.now()
        });
    }
}

const quizState = new QuizState();

// ============================================
// 5. DOM REFERENCES
// ============================================
const DOM = {
    homeScreen: document.getElementById('homeScreen'),
    quizScreen: document.getElementById('quizScreen'),
    resultsScreen: document.getElementById('resultsScreen'),
    sidebar: document.getElementById('sidebar'),
    sidebarOverlay: document.getElementById('sidebarOverlay'),
    menuBtn: document.getElementById('menuBtn'),
    closeSidebar: document.getElementById('closeSidebar'),
    profileModal: document.getElementById('profileModal'),
    profileBtn: document.getElementById('profileBtn'),
    closeProfile: document.getElementById('closeProfile'),
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
    scorePercentageEl: document.getElementById('scorePercentage'),
    totalQuestionsEl: document.getElementById('totalQuestions'),
    correctAnswersEl: document.getElementById('correctAnswers'),
    performanceBadge: document.getElementById('performanceBadge'),
    resultsTitle: document.getElementById('resultsTitle'),
    timeTaken: document.getElementById('timeTaken'),
    accuracyRate: document.getElementById('accuracyRate'),
    pointsEarned: document.getElementById('pointsEarned'),
    homePoints: document.getElementById('homePoints'),
    homeRank: document.getElementById('homeRank'),
    profileName: document.getElementById('profileName'),
    profileEmail: document.getElementById('profileEmail'),
    profileUsername: document.getElementById('profileUsername'),
    profileBio: document.getElementById('profileBio'),
    totalQuizzes: document.getElementById('totalQuizzes'),
    averageScore: document.getElementById('averageScore'),
    currentStreak: document.getElementById('currentStreak'),
    totalBadges: document.getElementById('totalBadges'),
    saveProfileBtn: document.getElementById('saveProfileBtn'),
    cancelProfileBtn: document.getElementById('cancelProfileBtn'),
    logoutBtn: document.getElementById('logoutBtn'),
    retryQuizBtn: document.getElementById('retryQuizBtn'),
    homeBtn: document.getElementById('homeBtn'),
    upgradeBtn: document.getElementById('upgradeBtn'),
    closeButtons: document.querySelectorAll('.close-btn'),
    shareIcons: document.querySelectorAll('.share-icon'),
    navItems: document.querySelectorAll('.nav-item'),
    loadingOverlay: document.getElementById('loadingOverlay')
};

// ============================================
// 6. ENHANCED UTILITIES
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
        if (percentage === 100) return { icon: '🏆', text: 'Perfect Score!', class: 'perfect' };
        if (percentage >= 90) return { icon: '⭐', text: 'Excellent Work', class: 'excellent' };
        if (percentage >= 80) return { icon: '👍', text: 'Great Job', class: 'great' };
        if (percentage >= 70) return { icon: '👌', text: 'Good Performance', class: 'good' };
        if (percentage >= 60) return { icon: '✓', text: 'Passed', class: 'pass' };
        return { icon: '📚', text: 'Keep Practicing', class: 'retry' };
    },

    showNotification(message, type = 'info', duration = 3000) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">${this.getNotificationIcon(type)}</span>
                <span class="notification-message">${message}</span>
            </div>
        `;
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 16px 24px;
            border-radius: 12px;
            color: white;
            font-weight: 500;
            z-index: 10000;
            animation: slideInRight 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            box-shadow: 0 10px 40px rgba(0,0,0,0.3);
            min-width: 280px;
            backdrop-filter: blur(10px);
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
            notification.style.animation = 'slideOutRight 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            setTimeout(() => notification.remove(), 400);
        }, duration);
    },

    getNotificationIcon(type) {
        const icons = {
            success: '✓',
            error: '✕',
            warning: '⚠',
            info: 'ℹ'
        };
        return icons[type] || icons.info;
    },

    calculateRank(points) {
        return Math.max(1, 10000 - Math.floor(points / 10));
    },

    animateValue(element, start, end, duration = 1000) {
        if (!element) return;
        
        const range = end - start;
        const increment = range / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
                current = end;
                clearInterval(timer);
            }
            element.textContent = Math.round(current);
        }, 16);
    }
};

// ============================================
// 7. SCREEN MANAGER
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
            setTimeout(() => screen.classList.add('active'), 50);
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
            Utils.showNotification('✓ Profile updated successfully!', 'success');
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
        if (DOM.homePoints) {
            Utils.animateValue(DOM.homePoints, parseInt(DOM.homePoints.textContent) || 0, userData.points, 800);
        }
        if (DOM.homeRank) {
            const rank = Utils.calculateRank(userData.points);
            DOM.homeRank.innerHTML = `${rank}<span class="rank-suffix">th</span>`;
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
            art: { name: 'Art & Literature', icon: '🎨' },
            general: { name: 'General Knowledge', icon: '🌍' },
            technology: { name: 'Technology', icon: '💻' }
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
            DOM.submitBtn.textContent = 'SUBMIT ANSWER';
            DOM.submitBtn.classList.remove('next-btn');
        }

        if (DOM.questionText) {
            DOM.questionText.style.opacity = '0';
            setTimeout(() => {
                DOM.questionText.textContent = question.question;
                DOM.questionText.style.opacity = '1';
            }, 200);
        }

        if (DOM.currentQuestionEl) {
            DOM.currentQuestionEl.textContent = quizState.currentIndex + 1;
        }

        if (DOM.optionsContainer) {
            DOM.optionsContainer.style.opacity = '0';
            
            setTimeout(() => {
                DOM.optionsContainer.innerHTML = '';
                const labels = ['A', 'B', 'C', 'D'];
                
                question.options.forEach((option, index) => {
                    const optionEl = document.createElement('div');
                    optionEl.className = 'option';
                    optionEl.setAttribute('data-index', index);
                    optionEl.style.animationDelay = `${index * 0.1}s`;
                    optionEl.innerHTML = `
                        <div class="option-label">${labels[index]}</div>
                        <div class="option-text">${option}</div>
                        <div class="option-check">✓</div>
                    `;
                    
                    optionEl.addEventListener('click', () => {
                        if (!quizState.isSubmitted) {
                            this.selectOption(index);
                        }
                    });
                    
                    DOM.optionsContainer.appendChild(optionEl);
                });
                
                DOM.optionsContainer.style.opacity = '1';
            }, 250);
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
            if (DOM.submitBtn) {
                DOM.submitBtn.disabled = false;
                DOM.submitBtn.classList.add('pulse');
                setTimeout(() => DOM.submitBtn.classList.remove('pulse'), 600);
            }
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
        const isCorrect = quizState.selectedAnswer === question.correct;

        options.forEach(opt => {
            opt.style.pointerEvents = 'none';
        });

        options.forEach((opt, index) => {
            setTimeout(() => {
                if (index === question.correct) {
                    opt.classList.add('correct');
                    opt.classList.remove('selected');
                } else if (index === quizState.selectedAnswer && !isCorrect) {
                    opt.classList.add('wrong');
                    opt.classList.remove('selected');
                }
            }, 200);
        });

        if (isCorrect) {
            quizState.score++;
            Utils.showNotification('✓ Correct Answer!', 'success', 1500);
        } else {
            Utils.showNotification('✗ Incorrect Answer', 'error', 1500);
        }

        quizState.recordAnswer(quizState.currentIndex, quizState.selectedAnswer, isCorrect);

        const categoryStats = userData.categoryStats[quizState.category];
        if (categoryStats) {
            categoryStats.attempted++;
            categoryStats.totalQuestions++;
            if (isCorrect) {
                categoryStats.correct++;
            }
        }

        setTimeout(() => {
            if (DOM.submitBtn) {
                DOM.submitBtn.textContent = quizState.isLastQuestion ? 'VIEW RESULTS' : 'NEXT QUESTION';
                DOM.submitBtn.disabled = false;
                DOM.submitBtn.classList.add('next-btn');
            }
        }, CONFIG.FEEDBACK_DELAY);
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
                Utils.showNotification('⏱ Time\'s up!', 'warning');
                setTimeout(() => this.showResults(), 1000);
            }
        }, 1000);
    },

    updateTimerDisplay() {
        if (!DOM.timeRemainingEl) return;

        DOM.timeRemainingEl.textContent = Utils.formatTime(quizState.timeRemaining);

        if (quizState.timeRemaining <= 30) {
            DOM.timeRemainingEl.style.color = '#ff4444';
            DOM.timeRemainingEl.classList.add('timer-warning');
        } else if (quizState.timeRemaining <= 60) {
            DOM.timeRemainingEl.style.color = '#ff9800';
            DOM.timeRemainingEl.classList.remove('timer-warning');
        } else {
            DOM.timeRemainingEl.style.color = 'rgba(255, 255, 255, 0.7)';
            DOM.timeRemainingEl.classList.remove('timer-warning');
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

        if (DOM.scorePercentageEl) {
            Utils.animateValue(DOM.scorePercentageEl, 0, percentage, 1500);
            DOM.scorePercentageEl.textContent = '0';
            setTimeout(() => {
                DOM.scorePercentageEl.textContent = `${percentage}%`;
            }, 100);
        }
        
        if (DOM.totalQuestionsEl) DOM.totalQuestionsEl.textContent = quizState.totalQuestions;
        if (DOM.correctAnswersEl) DOM.correctAnswersEl.textContent = quizState.score;
        if (DOM.timeTaken) DOM.timeTaken.textContent = Utils.formatTime(timeTaken);
        if (DOM.accuracyRate) DOM.accuracyRate.textContent = `${percentage}%`;
        if (DOM.pointsEarned) {
            DOM.pointsEarned.textContent = `+${pointsEarned}`;
            DOM.pointsEarned.classList.add('pulse');
        }

        const badge = Utils.getPerformanceBadge(percentage);
        if (DOM.performanceBadge) {
            DOM.performanceBadge.innerHTML = `
                <span class="badge-icon">${badge.icon}</span>
                <span class="badge-text">${badge.text}</span>
            `;
            DOM.performanceBadge.className = `performance-badge ${badge.class}`;
        }

        if (DOM.resultsTitle) {
            DOM.resultsTitle.textContent = percentage >= 70 ? '🎉 Congratulations!' : '💪 Good Effort!';
        }

        this.updateUserStats(percentage, pointsEarned, timeTaken);

        userDataManager.save(userData);
        HomeManager.updateStats();
        ProfileManager.updateFields();

        ScreenManager.show('results');
    },

    updateUserStats(percentage, pointsEarned, timeTaken) {
        userData.totalQuizzes++;
        userData.points += pointsEarned;

        if (percentage > userData.bestScore) {
            userData.bestScore = percentage;
        }

        const totalScore = userData.averageScore * (userData.totalQuizzes - 1) + percentage;
        userData.averageScore = Math.round(totalScore / userData.totalQuizzes);

        if (percentage >= CONFIG.PASSING_SCORE) {
            userData.currentStreak++;
        } else {
            userData.currentStreak = 0;
        }

        this.awardBadges(percentage);

        const categoryStats = userData.categoryStats[quizState.category];
        if (categoryStats && percentage > categoryStats.bestScore) {
            categoryStats.bestScore = percentage;
        }

        userData.quizHistory.push({
            category: quizState.category,
            score: quizState.score,
            total: quizState.totalQuestions,
            percentage: percentage,
            timeTaken: timeTaken,
            date: new Date().toISOString(),
            timestamp: Date.now()
        });

        if (userData.quizHistory.length > CONFIG.MAX_QUIZ_HISTORY) {
            userData.quizHistory = userData.quizHistory.slice(-CONFIG.MAX_QUIZ_HISTORY);
        }

        userData.lastPlayed = new Date().toISOString();
    },

    awardBadges(percentage) {
        let newBadges = 0;

        if (percentage === 100) newBadges++;
        if (percentage >= 90) newBadges++;
        if (userData.totalQuizzes === 1) newBadges++;
        if (userData.totalQuizzes === 10) newBadges++;
        if (userData.totalQuizzes === 50) newBadges++;
        if (userData.currentStreak === 5) newBadges++;

        userData.totalBadges += newBadges;

        if (newBadges > 0) {
            setTimeout(() => {
                Utils.showNotification(`🎉 You earned ${newBadges} new badge${newBadges > 1 ? 's' : ''}!`, 'success');
            }, 1000);
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
            art: 'Art & Literature',
            general: 'General Knowledge',
            technology: 'Technology'
        };
        
        const text = `🎯 I scored ${percentage}% in ${categoryNames[category]} on Quiz Pro! Can you beat my score?`;
        const url = window.location.href;

        const shareUrls = {
            whatsapp: `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`,
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`,
            twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`
        };

        if (shareUrls[platform]) {
            window.open(shareUrls[platform], '_blank', 'width=600,height=400');
            Utils.showNotification('📤 Opening share dialog...', 'info');
        }
    }
};

// ============================================
// 13. EVENT HANDLERS
// ============================================
const EventHandlers = {
    init() {
        if (DOM.menuBtn) DOM.menuBtn.addEventListener('click', () => SidebarManager.open());
        if (DOM.closeSidebar) DOM.closeSidebar.addEventListener('click', () => SidebarManager.close());
        if (DOM.sidebarOverlay) DOM.sidebarOverlay.addEventListener('click', () => SidebarManager.close());

        if (DOM.profileBtn) DOM.profileBtn.addEventListener('click', () => ProfileManager.open());
        if (DOM.closeProfile) DOM.closeProfile.addEventListener('click', () => ProfileManager.close());
        if (DOM.saveProfileBtn) DOM.saveProfileBtn.addEventListener('click', () => ProfileManager.save());
        if (DOM.cancelProfileBtn) DOM.cancelProfileBtn.addEventListener('click', () => ProfileManager.close());

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

        DOM.categoryCards.forEach(card => {
            card.addEventListener('click', () => {
                const category = card.getAttribute('data-category');
                card.classList.add('card-click');
                setTimeout(() => {
                    card.classList.remove('card-click');
                    QuizManager.start(category);
                }, 300);
            });
        });

        if (DOM.submitBtn) {
            DOM.submitBtn.addEventListener('click', () => QuizManager.submit());
        }

        DOM.closeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                if (DOM.quizScreen.classList.contains('active')) {
                    if (confirm('⚠️ Are you sure you want to exit? Your progress will be lost.')) {
                        QuizManager.stop();
                        ScreenManager.show('home');
                    }
                } else {
                    ScreenManager.show('home');
                }
            });
        });

        if (DOM.retryQuizBtn) {
            DOM.retryQuizBtn.addEventListener('click', () => QuizManager.retry());
        }
        if (DOM.homeBtn) {
            DOM.homeBtn.addEventListener('click', () => {
                QuizManager.stop();
                ScreenManager.show('home');
            });
        }

        DOM.shareIcons.forEach(icon => {
            icon.addEventListener('click', () => {
                if (icon.classList.contains('whatsapp')) ShareManager.share('whatsapp');
                else if (icon.classList.contains('facebook')) ShareManager.share('facebook');
                else if (icon.classList.contains('twitter')) ShareManager.share('twitter');
            });
        });

        if (DOM.logoutBtn) {
            DOM.logoutBtn.addEventListener('click', () => this.handleLogout());
        }
        if (DOM.upgradeBtn) {
            DOM.upgradeBtn.addEventListener('click', () => {
                Utils.showNotification('⭐ Upgrade to Premium - Coming Soon!', 'info');
            });
        }

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

            if (e.key === 'Escape') {
                if (DOM.profileModal && DOM.profileModal.classList.contains('active')) {
                    ProfileManager.close();
                } else if (DOM.sidebar && DOM.sidebar.classList.contains('active')) {
                    SidebarManager.close();
                }
            }
        });

        window.addEventListener('beforeunload', (e) => {
            if (DOM.quizScreen && DOM.quizScreen.classList.contains('active')) {
                e.preventDefault();
                e.returnValue = 'You have a quiz in progress. Are you sure you want to leave?';
                return e.returnValue;
            }
        });

        document.addEventListener('visibilitychange', () => {
            if (document.hidden && quizState.timer) {
                clearInterval(quizState.timer);
                quizState.timer = null;
            } else if (!document.hidden && DOM.quizScreen && DOM.quizScreen.classList.contains('active') && !quizState.timer && quizState.timeRemaining > 0) {
                QuizManager.startTimer();
            }
        });
    },

    handleLogout() {
        if (confirm('⚠️ Are you sure you want to logout? Your data will be reset.')) {
            userData = userDataManager.reset();
            SidebarManager.updateUserInfo();
            ProfileManager.updateFields();
            HomeManager.updateStats();
            SidebarManager.close();
            Utils.showNotification('👋 Logged out successfully!', 'success');
        }
    }
};

// ============================================
// 14. ANIMATION STYLES
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
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        .option {
            animation: fadeIn 0.5s ease forwards;
            opacity: 0;
        }

        .option.selected {
            transform: scale(1.02);
            box-shadow: 0 8px 30px rgba(255, 154, 86, 0.3);
        }

        .option.correct {
            animation: correctAnswer 0.6s ease;
        }

        .option.wrong {
            animation: wrongAnswer 0.6s ease;
        }

        @keyframes correctAnswer {
            0% { background: rgba(255, 255, 255, 0.05); }
            50% { background: rgba(76, 175, 80, 0.3); transform: scale(1.03); }
            100% { background: rgba(76, 175, 80, 0.2); }
        }

        @keyframes wrongAnswer {
            0% { background: rgba(255, 255, 255, 0.05); }
            25% { transform: translateX(-5px); }
            50% { background: rgba(244, 67, 54, 0.3); transform: translateX(5px); }
            75% { transform: translateX(-3px); }
            100% { background: rgba(244, 67, 54, 0.2); transform: translateX(0); }
        }

        .card-click {
            animation: cardClick 0.3s ease;
        }

        @keyframes cardClick {
            0% { transform: scale(1); }
            50% { transform: scale(0.95); }
            100% { transform: scale(1); }
        }

        .timer-warning {
            animation: timerPulse 1s ease-in-out infinite;
        }

        @keyframes timerPulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.6; }
        }

        .notification-content {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .notification-icon {
            font-size: 20px;
            font-weight: bold;
        }

        .option-check {
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%) scale(0);
            font-size: 24px;
            color: #4caf50;
            font-weight: bold;
            transition: transform 0.3s ease;
        }

        .option.correct .option-check {
            transform: translateY(-50%) scale(1);
        }

        .pulse {
            animation: pulse 0.6s ease;
        }

        .next-btn {
            background: linear-gradient(135deg, #4caf50 0%, #45a049 100%) !important;
        }

        .performance-badge {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 12px 24px;
            border-radius: 25px;
            margin: 20px 0;
            font-weight: 600;
            font-size: 16px;
            animation: fadeIn 0.6s ease;
        }

        .performance-badge.perfect { 
            background: linear-gradient(135deg, #ffd700, #ffed4e); 
            color: #333;
            box-shadow: 0 10px 40px rgba(255, 215, 0, 0.4);
        }
        .performance-badge.excellent { 
            background: linear-gradient(135deg, #4caf50, #45a049); 
            color: white;
            box-shadow: 0 10px 40px rgba(76, 175, 80, 0.4);
        }
        .performance-badge.great { 
            background: linear-gradient(135deg, #2196F3, #1976D2); 
            color: white;
            box-shadow: 0 10px 40px rgba(33, 150, 243, 0.4);
        }
        .performance-badge.good { 
            background: linear-gradient(135deg, #ff9800, #f57c00); 
            color: white;
            box-shadow: 0 10px 40px rgba(255, 152, 0, 0.4);
        }
        .performance-badge.pass { 
            background: linear-gradient(135deg, #607D8B, #455A64); 
            color: white;
        }
        .performance-badge.retry { 
            background: linear-gradient(135deg, #f44336, #e53935); 
            color: white;
        }

        .badge-icon {
            font-size: 24px;
        }
    `;
    document.head.appendChild(style);
}

// ============================================
// 15. APP INITIALIZATION
// ============================================
function initApp() {
    console.log('%c 🚀 Quiz App v3.0 - Professional Edition ', 'background: #ff9a56; color: white; font-size: 18px; padding: 12px; border-radius: 8px; font-weight: bold;');
    console.log('%c ✨ Enhanced with smooth animations & modern design ', 'background: #4caf50; color: white; font-size: 14px; padding: 8px; border-radius: 5px;');

    EventHandlers.init();
    SidebarManager.updateUserInfo();
    HomeManager.updateStats();
    ProfileManager.updateFields();
    injectAnimations();

    setInterval(() => {
        if (userDataManager.save(userData)) {
            console.log('💾 Auto-saved user data');
        }
    }, CONFIG.AUTO_SAVE_INTERVAL);

    console.log('%c 💡 Keyboard Shortcuts ', 'background: #2196F3; color: white; font-size: 14px; padding: 8px; border-radius: 5px; font-weight: bold;');
    console.log('  📝 A/B/C/D: Select answer');
    console.log('  ✓ Enter: Submit answer');
    console.log('  ✕ Escape: Close modals');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
}

// ============================================
// 16. DEVELOPER TOOLS
// ============================================
window.quizApp = {
    version: '3.0.0',
    getUserData: () => userData,
    clearData: () => {
        userData = userDataManager.reset();
        HomeManager.updateStats();
        SidebarManager.updateUserInfo();
        Utils.showNotification('🗑️ All data cleared', 'success');
    },
    addPoints: (points) => {
        userData.points += points;
        userDataManager.save(userData);
        HomeManager.updateStats();
        Utils.showNotification(`💰 Added ${points} points!`, 'success');
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
    },
    help: () => {
        console.log('%c Quiz App Developer Tools ', 'background: #ff9a56; color: white; font-size: 16px; padding: 10px; border-radius: 5px; font-weight: bold;');
        console.log('%c Available Commands: ', 'color: #4caf50; font-weight: bold; font-size: 14px;');
        console.log('  quizApp.getUserData() - View user data');
        console.log('  quizApp.clearData() - Clear all data');
        console.log('  quizApp.addPoints(n) - Add points');
        console.log('  quizApp.completeQuiz() - Auto-complete quiz');
        console.log('  quizApp.getStats() - View category stats');
        console.log('  quizApp.exportData() - Export user data');
        console.log('  quizApp.version - Show version');
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

console.log('%c 💻 Type "quizApp.help()" in console for developer tools ', 'background: #2196F3; color: white; font-size: 12px; padding: 6px 12px; border-radius: 5px; margin-top: 10px;');

/* ============================================
   END OF QUIZ APP - PROFESSIONAL EDITION v3.0
   ============================================ */
