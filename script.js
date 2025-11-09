/* ============================================
   QUIZ APP - COMPLETE JAVASCRIPT
   Save as: script.js
   ============================================ */

// ============================================
// 1. QUIZ DATA - QUESTION BANK
// ============================================
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
            options: ["World Wide Web", "Web World Wide", "Wide World Web", "World Web Wide"],
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

// ============================================
// 2. USER DATA MANAGEMENT (LocalStorage)
// ============================================

/**
 * Get user data from localStorage or return default values
 */
const getUserData = () => {
    const defaultData = {
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
            science: { attempted: 0, correct: 0, total: 0 },
            art: { attempted: 0, correct: 0, total: 0 },
            general: { attempted: 0, correct: 0, total: 0 },
            technology: { attempted: 0, correct: 0, total: 0 }
        }
    };
    
    try {
        const stored = localStorage.getItem('quizAppUser');
        if (stored) {
            const parsedData = JSON.parse(stored);
            // Merge with default data to ensure all properties exist
            return { ...defaultData, ...parsedData };
        }
        return defaultData;
    } catch (error) {
        console.error('Error loading user data:', error);
        return defaultData;
    }
};

/**
 * Save user data to localStorage
 */
const saveUserData = (data) => {
    try {
        localStorage.setItem('quizAppUser', JSON.stringify(data));
        console.log('User data saved successfully');
    } catch (error) {
        console.error('Error saving user data:', error);
    }
};

// Initialize user data
let userData = getUserData();

// ============================================
// 3. APPLICATION STATE VARIABLES
// ============================================
let currentCategory = '';
let currentQuestionIndex = 0;
let selectedAnswer = null;
let score = 0;
let totalQuestions = 0;
let answeredQuestions = 0;
let timer = null;
let timeRemaining = 180;
let isAnswerSubmitted = false;
let quizStartTime = null;

// ============================================
// 4. DOM ELEMENTS
// ============================================
const homeScreen = document.getElementById('homeScreen');
const quizScreen = document.getElementById('quizScreen');
const resultsScreen = document.getElementById('resultsScreen');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const profileModal = document.getElementById('profileModal');
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

// ============================================
// 5. INITIALIZATION
// ============================================

/**
 * Initialize the application
 */
function init() {
    console.log('%c Quiz App Initializing... ', 'background: #ff9a56; color: white; font-size: 16px; padding: 10px; border-radius: 5px;');
    
    setupEventListeners();
    updateHomeStats();
    updateSidebarUserInfo();
    updateProfileData();
    
    console.log('%c Quiz App Loaded Successfully! ', 'background: #4caf50; color: white; font-size: 16px; padding: 10px; border-radius: 5px;');
    console.log('💡 Tip: You can use A, B, C, D keys to select answers and Enter to submit!');
    console.log('💡 Press Escape to close modals and sidebar!');
}

// ============================================
// 6. EVENT LISTENERS SETUP
// ============================================

/**
 * Setup all event listeners
 */
function setupEventListeners() {
    // === SIDEBAR CONTROLS ===
    const menuBtn = document.getElementById('menuBtn');
    const closeSidebarBtn = document.getElementById('closeSidebar');
    
    if (menuBtn) menuBtn.addEventListener('click', openSidebar);
    if (closeSidebarBtn) closeSidebarBtn.addEventListener('click', closeSidebar);
    if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebar);
    
    // === PROFILE CONTROLS ===
    const profileBtn = document.getElementById('profileBtn');
    const closeProfileBtn = document.getElementById('closeProfile');
    const saveProfileBtn = document.getElementById('saveProfileBtn');
    const cancelProfileBtn = document.getElementById('cancelProfileBtn');
    const changeAvatarBtn = document.getElementById('changeAvatarBtn');
    
    if (profileBtn) profileBtn.addEventListener('click', openProfile);
    if (closeProfileBtn) closeProfileBtn.addEventListener('click', closeProfile);
    if (saveProfileBtn) saveProfileBtn.addEventListener('click', saveProfile);
    if (cancelProfileBtn) cancelProfileBtn.addEventListener('click', closeProfile);
    if (changeAvatarBtn) changeAvatarBtn.addEventListener('click', handleAvatarChange);
    
    // === SIDEBAR NAVIGATION ===
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            handleNavigation(item);
        });
    });
    
    // === OTHER SIDEBAR BUTTONS ===
    const logoutBtn = document.getElementById('logoutBtn');
    const leaderboardBtn = document.getElementById('leaderboardBtn');
    const achievementsBtn = document.getElementById('achievementsBtn');
    const historyBtn = document.getElementById('historyBtn');
    const settingsBtn = document.getElementById('settingsBtn');
    const helpBtn = document.getElementById('helpBtn');
    
    if (logoutBtn) logoutBtn.addEventListener('click', handleLogout);
    if (leaderboardBtn) leaderboardBtn.addEventListener('click', () => showComingSoon('Leaderboard'));
    if (achievementsBtn) achievementsBtn.addEventListener('click', () => showComingSoon('Achievements'));
    if (historyBtn) historyBtn.addEventListener('click', () => showComingSoon('Quiz History'));
    if (settingsBtn) settingsBtn.addEventListener('click', () => showComingSoon('Settings'));
    if (helpBtn) helpBtn.addEventListener('click', () => showComingSoon('Help & Support'));
    
    // === CATEGORY SELECTION ===
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.getAttribute('data-category');
            startQuiz(category);
        });
    });

    // === QUIZ CONTROLS ===
    closeButtons.forEach(btn => {
        btn.addEventListener('click', handleCloseQuiz);
    });

    if (submitBtn) submitBtn.addEventListener('click', handleSubmit);

    // === SHARE BUTTONS ===
    document.querySelectorAll('.share-icon').forEach(icon => {
        icon.addEventListener('click', handleShare);
    });

    // === UPGRADE BUTTON ===
    const upgradeBtn = document.querySelector('.upgrade-btn');
    if (upgradeBtn) upgradeBtn.addEventListener('click', handleUpgrade);
    
    // === PREFERENCE CHECKBOXES ===
    const soundEffectsCheckbox = document.getElementById('soundEffects');
    const notificationsCheckbox = document.getElementById('notifications');
    const darkModeCheckbox = document.getElementById('darkMode');
    
    if (soundEffectsCheckbox) {
        soundEffectsCheckbox.addEventListener('change', (e) => {
            userData.preferences.soundEffects = e.target.checked;
        });
    }
    
    if (notificationsCheckbox) {
        notificationsCheckbox.addEventListener('change', (e) => {
            userData.preferences.notifications = e.target.checked;
        });
    }
    
    if (darkModeCheckbox) {
        darkModeCheckbox.addEventListener('change', (e) => {
            userData.preferences.darkMode = e.target.checked;
            toggleDarkMode(e.target.checked);
        });
    }
}

// ============================================
// 7. SIDEBAR FUNCTIONS
// ============================================

/**
 * Open the sidebar menu
 */
function openSidebar() {
    if (sidebar) sidebar.classList.add('active');
    if (sidebarOverlay) sidebarOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

/**
 * Close the sidebar menu
 */
function closeSidebar() {
    if (sidebar) sidebar.classList.remove('active');
    if (sidebarOverlay) sidebarOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

/**
 * Update sidebar user information
 */
function updateSidebarUserInfo() {
    const sidebarUserName = document.getElementById('sidebarUserName');
    const sidebarUserEmail = document.getElementById('sidebarUserEmail');
    
    if (sidebarUserName) sidebarUserName.textContent = userData.name;
    if (sidebarUserEmail) sidebarUserEmail.textContent = userData.email;
}

/**
 * Handle navigation item clicks
 */
function handleNavigation(navItem) {
    const screen = navItem.getAttribute('data-screen');
    
    // Update active state
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    navItem.classList.add('active');
    
    closeSidebar();
    
    if (screen === 'home') {
        showScreen('home');
    } else if (screen === 'profile') {
        openProfile();
    }
}

// ============================================
// 8. PROFILE FUNCTIONS
// ============================================

/**
 * Open the profile modal
 */
function openProfile() {
    if (profileModal) {
        profileModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        updateProfileData();
    }
}

/**
 * Close the profile modal
 */
function closeProfile() {
    if (profileModal) {
        profileModal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

/**
 * Update profile data in the modal
 */
function updateProfileData() {
    const profileName = document.getElementById('profileName');
    const profileEmail = document.getElementById('profileEmail');
    const profileUsername = document.getElementById('profileUsername');
    const profileBio = document.getElementById('profileBio');
    const totalQuizzesEl = document.getElementById('totalQuizzes');
    const averageScoreEl = document.getElementById('averageScore');
    const currentStreakEl = document.getElementById('currentStreak');
    const totalBadgesEl = document.getElementById('totalBadges');
    const soundEffectsCheckbox = document.getElementById('soundEffects');
    const notificationsCheckbox = document.getElementById('notifications');
    const darkModeCheckbox = document.getElementById('darkMode');
    
    if (profileName) profileName.value = userData.name;
    if (profileEmail) profileEmail.value = userData.email;
    if (profileUsername) profileUsername.value = userData.username;
    if (profileBio) profileBio.value = userData.bio;
    
    if (totalQuizzesEl) totalQuizzesEl.textContent = userData.totalQuizzes;
    if (averageScoreEl) averageScoreEl.textContent = userData.averageScore + '%';
    if (currentStreakEl) currentStreakEl.textContent = userData.currentStreak;
    if (totalBadgesEl) totalBadgesEl.textContent = userData.totalBadges;
    
    if (soundEffectsCheckbox) soundEffectsCheckbox.checked = userData.preferences.soundEffects;
    if (notificationsCheckbox) notificationsCheckbox.checked = userData.preferences.notifications;
    if (darkModeCheckbox) darkModeCheckbox.checked = userData.preferences.darkMode;
}

/**
 * Save profile changes
 */
function saveProfile() {
    const profileName = document.getElementById('profileName');
    const profileEmail = document.getElementById('profileEmail');
    const profileUsername = document.getElementById('profileUsername');
    const profileBio = document.getElementById('profileBio');
    
    // Validate inputs
    if (profileName && !profileName.value.trim()) {
        showNotification('Please enter your name', 'error');
        return;
    }
    
    if (profileEmail && !profileEmail.value.trim()) {
        showNotification('Please enter your email', 'error');
        return;
    }
    
    // Update user data
    if (profileName) userData.name = profileName.value.trim();
    if (profileEmail) userData.email = profileEmail.value.trim();
    if (profileUsername) userData.username = profileUsername.value.trim();
    if (profileBio) userData.bio = profileBio.value.trim();
    
    // Save to localStorage
    saveUserData(userData);
    
    // Update UI
    updateSidebarUserInfo();
    updateHomeStats();
    
    // Close modal
    closeProfile();
    
    // Show success message
    showNotification('Profile updated successfully!', 'success');
}

/**
 * Handle avatar change
 */
function handleAvatarChange() {
    showNotification('Avatar change feature - Connect to your avatar selection system here!', 'info');
}

/**
 * Handle logout
 */
function handleLogout() {
    if (confirm('Are you sure you want to logout?')) {
        // Reset to default data
        localStorage.removeItem('quizAppUser');
        userData = getUserData();
        updateSidebarUserInfo();
        updateProfileData();
        updateHomeStats();
        closeSidebar();
        showNotification('Logged out successfully!', 'success');
    }
}

// ============================================
// 9. SCREEN MANAGEMENT
// ============================================

/**
 * Show specific screen
 */
function showScreen(screen) {
    if (homeScreen) homeScreen.classList.remove('active');
    if (quizScreen) quizScreen.classList.remove('active');
    if (resultsScreen) resultsScreen.classList.remove('active');

    switch(screen) {
        case 'home':
            if (homeScreen) homeScreen.classList.add('active');
            break;
        case 'quiz':
            if (quizScreen) quizScreen.classList.add('active');
            break;
        case 'results':
            if (resultsScreen) resultsScreen.classList.add('active');
            break;
    }
}

// ============================================
// 10. QUIZ MANAGEMENT
// ============================================

/**
 * Start a quiz for the selected category
 */
function startQuiz(category) {
    // Validate category
    if (!quizData[category]) {
        showNotification('Invalid category selected', 'error');
        return;
    }
    
    // Reset quiz state
    currentCategory = category;
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    answeredQuestions = 0;
    isAnswerSubmitted = false;
    quizStartTime = Date.now();
    
    // Set up quiz parameters
    const questions = quizData[category];
    totalQuestions = questions.length;
    timeRemaining = totalQuestions * 30; // 30 seconds per question
    
    // Set category display name
    const categoryNames = {
        science: 'Science and Nature',
        art: 'Art and Literature',
        general: 'General Knowledge',
        technology: 'Technology'
    };
    
    if (quizCategory) {
        quizCategory.textContent = categoryNames[category] || category;
    }
    
    // Show quiz screen and start
    showScreen('quiz');
    loadQuestion();
    startTimer();
    
    console.log(`Quiz started: ${category} - ${totalQuestions} questions`);
}

/**
 * Stop the current quiz
 */
function stopQuiz() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
    resetQuizState();
}

/**
 * Reset quiz state variables
 */
function resetQuizState() {
    currentCategory = '';
    currentQuestionIndex = 0;
    selectedAnswer = null;
    score = 0;
    answeredQuestions = 0;
    timeRemaining = 180;
    isAnswerSubmitted = false;
    quizStartTime = null;
    if (submitBtn) submitBtn.textContent = 'SUBMIT';
}

/**
 * Handle quiz close button
 */
function handleCloseQuiz() {
    if (quizScreen && quizScreen.classList.contains('active')) {
        if (confirm('Are you sure you want to exit? Your progress will be lost.')) {
            stopQuiz();
            showScreen('home');
        }
    } else {
        showScreen('home');
    }
}

// ============================================
// 11. QUESTION MANAGEMENT
// ============================================

/**
 * Load current question
 */
function loadQuestion() {
    const questions = quizData[currentCategory];
    
    if (!questions || currentQuestionIndex >= questions.length) {
        showResults();
        return;
    }
    
    const question = questions[currentQuestionIndex];
    
    // Reset state for new question
    selectedAnswer = null;
    isAnswerSubmitted = false;
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'SUBMIT';
    }
    
    // Update question display
    if (questionText) {
        questionText.textContent = `${currentQuestionIndex + 1}. ${question.question}`;
    }
    if (currentQuestionEl) {
        currentQuestionEl.textContent = currentQuestionIndex + 1;
    }
    
    // Clear previous options
    if (optionsContainer) {
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
}

/**
 * Select an option
 */
function selectOption(index) {
    if (isAnswerSubmitted) return;
    
    // Remove previous selection
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Add selection to clicked option
    const options = document.querySelectorAll('.option');
    if (options[index]) {
        options[index].classList.add('selected');
        selectedAnswer = index;
        if (submitBtn) submitBtn.disabled = false;
    }
}

/**
 * Handle submit button click
 */
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
    
    // Update category stats
    if (userData.categoryStats[currentCategory]) {
        userData.categoryStats[currentCategory].attempted++;
        userData.categoryStats[currentCategory].total++;
        if (selectedAnswer === question.correct) {
            userData.categoryStats[currentCategory].correct++;
        }
    }
    
    // Change button text to NEXT
    if (submitBtn) {
        submitBtn.textContent = 'NEXT';
        submitBtn.disabled = false;
    }
}

/**
 * Move to next question
 */
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex >= quizData[currentCategory].length) {
        showResults();
    } else {
        loadQuestion();
    }
}

// ============================================
// 12. TIMER MANAGEMENT
// ============================================

/**
 * Start the quiz timer
 */
function startTimer() {
    updateTimerDisplay();
    
    timer = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        
        if (timeRemaining <= 0) {
            clearInterval(timer);
            timer = null;
            showResults();
        }
    }, 1000);
}

/**
 * Update timer display
 */
function updateTimerDisplay() {
    if (!timeRemainingEl) return;
    
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

// ============================================
// 13. RESULTS MANAGEMENT
// ============================================

/**
 * Show quiz results
 */
function showResults() {
    // Stop timer
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
    
    const questions = quizData[currentCategory];
    const percentage = Math.round((score / questions.length) * 100);
    const timeTaken = quizStartTime ? Math.floor((Date.now() - quizStartTime) / 1000) : 0;
    
    // Update results display
    if (scorePercentageEl) scorePercentageEl.textContent = `${percentage}%`;
    if (totalQuestionsEl) totalQuestionsEl.textContent = questions.length;
    if (correctAnswersEl) correctAnswersEl.textContent = score;
    
    // Update user statistics
    userData.totalQuizzes++;
    userData.points += score * 10;
    
    // Update best score
    if (percentage > userData.bestScore) {
        userData.bestScore = percentage;
    }
    
    // Calculate average score
    const totalScore = userData.averageScore * (userData.totalQuizzes - 1) + percentage;
    userData.averageScore = Math.round(totalScore / userData.totalQuizzes);
    
    // Update streak (simplified - you can make this more complex)
    if (percentage >= 70) {
        userData.currentStreak++;
    } else {
        userData.currentStreak = 0;
    }
    
    // Award badges based on achievements
    updateBadges(percentage, score, questions.length);
    
    // Add to quiz history
    userData.quizHistory.push({
        category: currentCategory,
        score: score,
        total: questions.length,
        percentage: percentage,
        timeTaken: timeTaken,
        date: new Date().toISOString(),
        timestamp: Date.now()
    });
    
    // Keep only last 50 quiz records
    if (userData.quizHistory.length > 50) {
        userData.quizHistory = userData.quizHistory.slice(-50);
    }
    
    // Save updated user data
    saveUserData(userData);
    
    // Update UI
    updateHomeStats();
    updateProfileData();
    
    // Show results screen
    showScreen('results');
    
    console.log(`Quiz completed: ${score}/${questions.length} (${percentage}%)`);
}

/**
 * Update user badges based on performance
 */
function updateBadges(percentage, score, total) {
    let newBadges = 0;
    
    // Perfect score badge
    if (percentage === 100) {
        newBadges++;
    }
    
    // High scorer badge
    if (percentage >= 90) {
        newBadges++;
    }
    
    // Milestone badges
    if (userData.totalQuizzes === 10 || userData.totalQuizzes === 50 || userData.totalQuizzes === 100) {
        newBadges++;
    }
    
    userData.totalBadges += newBadges;
}

// ============================================
// 14. HOME STATS UPDATE
// ============================================

/**
 * Update home screen statistics
 */
function updateHomeStats() {
    const homePoints = document.getElementById('homePoints');
    const homeRank = document.getElementById('homeRank');
    
    if (homePoints) {
        homePoints.textContent = userData.points;
    }
    
    if (homeRank) {
        // Calculate rank based on points (simplified algorithm)
        const calculatedRank = Math.max(1, 10000 - Math.floor(userData.points / 10));
        userData.rank = calculatedRank;
        homeRank.innerHTML = `${calculatedRank}<span class="rank-suffix">₂</span>`;
    }
}

// ============================================
// 15. SHARE FUNCTIONALITY
// ============================================

/**
 * Handle social media sharing
 */
function handleShare(e) {
    const shareButton = e.currentTarget;
    const percentage = scorePercentageEl ? scorePercentageEl.textContent : '0%';
    const category = quizCategory ? quizCategory.textContent : 'Quiz';
    const shareText = `I scored ${percentage} in ${category} on Quiz App! Can you beat my score?`;
    const shareUrl = window.location.href;
    
    if (shareButton.classList.contains('whatsapp')) {
        window.open(`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`, '_blank');
    } else if (shareButton.classList.contains('facebook')) {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`, '_blank');
    } else if (shareButton.classList.contains('twitter')) {
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
    }
    
    showNotification('Opening share dialog...', 'info');
}

// ============================================
// 16. NOTIFICATION SYSTEM
// ============================================

/**
 * Show notification toast
 * @param {string} message - The message to display
 * @param {string} type - 'success', 'error', 'info', 'warning'
 */
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    
    // Set colors based on type
    const colors = {
        success: 'linear-gradient(135deg, #4caf50 0%, #45a049 100%)',
        error: 'linear-gradient(135deg, #f44336 0%, #e53935 100%)',
        info: 'linear-gradient(135deg, #ff9a56 0%, #ff7043 100%)',
        warning: 'linear-gradient(135deg, #ff9800 0%, #f57c00 100%)'
    };
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${colors[type] || colors.info};
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        max-width: 300px;
        font-size: 14px;
        font-weight: 500;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============================================
// 17. UTILITY FUNCTIONS
// ============================================

/**
 * Show coming soon message for features
 */
function showComingSoon(featureName) {
    showNotification(`${featureName} feature coming soon!`, 'info');
    closeSidebar();
}

/**
 * Handle upgrade button click
 */
function handleUpgrade() {
    showNotification('Upgrade to Premium - Add your payment integration here!', 'info');
}

/**
 * Toggle dark mode
 */
function toggleDarkMode(enabled) {
    if (enabled) {
        document.body.style.filter = 'invert(1) hue-rotate(180deg)';
        showNotification('Light mode enabled', 'success');
    } else {
        document.body.style.filter = '';
        showNotification('Light mode disabled', 'success');
    }
}

/**
 * Shuffle array (Fisher-Yates algorithm)
 */
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

/**
 * Format time duration
 */
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Get greeting based on time of day
 */
function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
}

// ============================================
// 18. KEYBOARD SHORTCUTS
// ============================================

/**
 * Handle keyboard shortcuts
 */
document.addEventListener('keydown', (e) => {
    // Quiz shortcuts (A, B, C, D, Enter)
    if (quizScreen && quizScreen.classList.contains('active') && !isAnswerSubmitted) {
        const key = e.key.toLowerCase();
        const optionMap = { 'a': 0, 'b': 1, 'c': 2, 'd': 3 };
        
        if (key in optionMap) {
            e.preventDefault();
            selectOption(optionMap[key]);
        } else if (key === 'enter' && selectedAnswer !== null) {
            e.preventDefault();
            handleSubmit();
        }
    }
    
    // Close modals with Escape
    if (e.key === 'Escape') {
        if (profileModal && profileModal.classList.contains('active')) {
            closeProfile();
        } else if (sidebar && sidebar.classList.contains('active')) {
            closeSidebar();
        }
    }
});

// ============================================
// 19. PAGE VISIBILITY & LIFECYCLE
// ============================================

/**
 * Prevent accidental page reload during quiz
 */
window.addEventListener('beforeunload', (e) => {
    if (quizScreen && quizScreen.classList.contains('active')) {
        e.preventDefault();
        e.returnValue = 'You have a quiz in progress. Are you sure you want to leave?';
        return e.returnValue;
    }
});

/**
 * Handle page visibility changes (pause timer when tab is hidden)
 */
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Page is hidden - pause timer
        if (timer && quizScreen && quizScreen.classList.contains('active')) {
            clearInterval(timer);
            timer = null;
            console.log('Quiz paused - tab hidden');
        }
    } else {
        // Page is visible - resume timer
        if (!timer && quizScreen && quizScreen.classList.contains('active') && timeRemaining > 0) {
            startTimer();
            console.log('Quiz resumed - tab visible');
        }
    }
});

// ============================================
// 20. ANIMATION STYLES (Injected)
// ============================================

/**
 * Inject animation keyframes into document
 */
const injectAnimationStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
        
        @keyframes pulse {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.05);
            }
        }
        
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
            20%, 40%, 60%, 80% { transform: translateX(10px); }
        }
    `;
    document.head.appendChild(style);
};

// ============================================
// 21. LOCAL STORAGE UTILITIES
// ============================================

/**
 * Clear all local storage data
 */
function clearAllData() {
    if (confirm('This will delete all your quiz data. Are you sure?')) {
        localStorage.clear();
        userData = getUserData();
        updateHomeStats();
        updateSidebarUserInfo();
        updateProfileData();
        showNotification('All data cleared successfully', 'success');
    }
}

/**
 * Export user data as JSON
 */
function exportData() {
    const dataStr = JSON.stringify(userData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `quiz-app-data-${Date.now()}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showNotification('Data exported successfully', 'success');
}

/**
 * Import user data from JSON file
 */
function importData(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const importedData = JSON.parse(e.target.result);
            userData = { ...getUserData(), ...importedData };
            saveUserData(userData);
            updateHomeStats();
            updateSidebarUserInfo();
            updateProfileData();
            showNotification('Data imported successfully', 'success');
        } catch (error) {
            showNotification('Error importing data: Invalid file format', 'error');
            console.error('Import error:', error);
        }
    };
    reader.readAsText(file);
}

// ============================================
// 22. PERFORMANCE MONITORING
// ============================================

/**
 * Log performance metrics
 */
function logPerformance() {
    if (window.performance && window.performance.timing) {
        const timing = window.performance.timing;
        const loadTime = timing.loadEventEnd - timing.navigationStart;
        console.log(`Page load time: ${loadTime}ms`);
    }
}

// ============================================
// 23. ERROR HANDLING
// ============================================

/**
 * Global error handler
 */
window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
    showNotification('An error occurred. Please refresh the page.', 'error');
});

/**
 * Unhandled promise rejection handler
 */
window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
    showNotification('An error occurred. Please try again.', 'error');
});

// ============================================
// 24. INITIALIZATION SEQUENCE
// ============================================

/**
 * Initialize app when DOM is ready
 */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        init();
        injectAnimationStyles();
        logPerformance();
    });
} else {
    init();
    injectAnimationStyles();
    logPerformance();
}

// ============================================
// 25. DEVELOPMENT HELPERS (Console Commands)
// ============================================

// Make these functions available in console for debugging
window.quizApp = {
    getUserData: () => userData,
    clearData: clearAllData,
    exportData: exportData,
    addPoints: (points) => {
        userData.points += points;
        saveUserData(userData);
        updateHomeStats();
        showNotification(`Added ${points} points!`, 'success');
    },
    resetQuiz: () => {
        stopQuiz();
        showScreen('home');
        showNotification('Quiz reset', 'info');
    },
    completeQuiz: () => {
        score = totalQuestions;
        showResults();
    },
    version: '1.0.0'
};

// ============================================
// END OF SCRIPT
// ============================================

console.log('%c Quiz App v1.0.0 ', 'background: #4caf50; color: white; font-size: 14px; padding: 5px 10px; border-radius: 5px;');
console.log('%c Development Mode Active ', 'background: #ff9800; color: white; font-size: 12px; padding: 5px 10px; border-radius: 5px;');
console.log('💡 Type "quizApp" in console to see available debugging commands');
console.log('💡 Available commands: getUserData(), clearData(), exportData(), addPoints(n), resetQuiz(), completeQuiz()');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
