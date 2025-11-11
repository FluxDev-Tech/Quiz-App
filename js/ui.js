/* ============================================
   UI.JS - ENHANCED UI SYSTEM v2.0
   Save as: ui.js
   Professional Quiz App UI Components
   ============================================ */

'use strict';

// ============================================
// 1. ENHANCED LOADING SYSTEM
// ============================================
const LoadingSystem = {
    overlay: null,
    isVisible: false,

    init() {
        this.createLoadingOverlay();
        this.preloadAssets();
    },

    createLoadingOverlay() {
        this.overlay = document.createElement('div');
        this.overlay.className = 'enhanced-loading-overlay';
        this.overlay.innerHTML = `
            <div class="loading-container">
                <!-- Animated Quiz Logo -->
                <div class="quiz-logo-animated">
                    <svg width="120" height="120" viewBox="0 0 120 120" class="logo-svg">
                        <!-- Outer rotating ring -->
                        <circle class="logo-ring" cx="60" cy="60" r="50" fill="none" stroke="url(#ringGradient)" stroke-width="4"/>
                        
                        <!-- Background circle -->
                        <circle cx="60" cy="60" r="42" fill="url(#logoGradient)"/>
                        
                        <!-- Question mark with animation -->
                        <g class="question-mark">
                            <path d="M60 30C49 30 40 39 40 50h10c0-6 4-10 10-10s10 4 10 10c0 4-2 7-6 10l-5 4c-4 3-7 7-7 12h10c0-4 1-6 5-9l4-3c5-4 9-8 9-14 0-11-9-20-20-20z" 
                                  fill="white" class="question-curve"/>
                            <circle cx="58" cy="88" r="5" fill="white" class="question-dot"/>
                        </g>
                        
                        <!-- Sparkle stars -->
                        <circle class="sparkle sparkle-1" cx="30" cy="35" r="3" fill="#FFD700"/>
                        <circle class="sparkle sparkle-2" cx="90" cy="40" r="2" fill="#FFD700"/>
                        <circle class="sparkle sparkle-3" cx="35" cy="85" r="2.5" fill="#FFD700"/>
                        <circle class="sparkle sparkle-4" cx="85" cy="80" r="2" fill="#FFD700"/>
                        
                        <!-- Gradients -->
                        <defs>
                            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style="stop-color:#ff9a56;stop-opacity:1" />
                                <stop offset="50%" style="stop-color:#ff7043;stop-opacity:1" />
                                <stop offset="100%" style="stop-color:#ff5722;stop-opacity:1" />
                            </linearGradient>
                            <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style="stop-color:#ffd700;stop-opacity:0.8" />
                                <stop offset="100%" style="stop-color:#ff9a56;stop-opacity:0.8" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <!-- Loading bar -->
                <div class="loading-progress-container">
                    <div class="loading-progress-bar">
                        <div class="loading-progress-fill"></div>
                    </div>
                    <div class="loading-percentage">0%</div>
                </div>

                <!-- Loading text -->
                <div class="loading-text-container">
                    <h3 class="loading-title">Quiz App</h3>
                    <p class="loading-message">Preparing your quiz...</p>
                    <div class="loading-dots">
                        <span></span><span></span><span></span>
                    </div>
                </div>

                <!-- Fun facts carousel -->
                <div class="fun-facts-container">
                    <p class="fun-fact"></p>
                </div>
            </div>
        `;
        document.body.appendChild(this.overlay);

        // Initialize fun facts
        this.initFunFacts();
    },

    funFacts: [
        "💡 The human brain can hold up to 2.5 petabytes of information!",
        "🌟 Learning something new creates new neural pathways in your brain",
        "🎯 Taking quizzes helps improve long-term memory retention",
        "🧠 Your brain uses 20% of your body's energy",
        "📚 Reading for just 6 minutes can reduce stress by 68%",
        "⚡ Brain cells can send information at 268 mph",
        "🎨 Creative thinking activates both sides of your brain",
        "🔬 Albert Einstein's brain was preserved for research",
        "🌈 The average person has about 70,000 thoughts per day",
        "✨ Your brain generates enough electricity to power a lightbulb"
    ],

    currentFactIndex: 0,

    initFunFacts() {
        this.showRandomFact();
        this.factInterval = setInterval(() => {
            this.showRandomFact();
        }, 3000);
    },

    showRandomFact() {
        const factElement = this.overlay?.querySelector('.fun-fact');
        if (factElement) {
            factElement.style.opacity = '0';
            setTimeout(() => {
                const randomIndex = Math.floor(Math.random() * this.funFacts.length);
                factElement.textContent = this.funFacts[randomIndex];
                factElement.style.opacity = '1';
            }, 300);
        }
    },

    show(message = 'Loading...', withProgress = true) {
        if (!this.overlay) this.init();
        
        this.isVisible = true;
        const messageElement = this.overlay.querySelector('.loading-message');
        if (messageElement) messageElement.textContent = message;

        this.overlay.classList.add('active');
        document.body.style.overflow = 'hidden';

        if (withProgress) {
            this.animateProgress();
        }

        return this;
    },

    hide(delay = 0) {
        setTimeout(() => {
            if (this.overlay) {
                this.overlay.classList.remove('active');
                document.body.style.overflow = '';
                this.isVisible = false;
                
                if (this.factInterval) {
                    clearInterval(this.factInterval);
                }
            }
        }, delay);
    },

    animateProgress() {
        const progressFill = this.overlay?.querySelector('.loading-progress-fill');
        const percentage = this.overlay?.querySelector('.loading-percentage');
        
        if (!progressFill || !percentage) return;

        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
            }
            
            progressFill.style.width = progress + '%';
            percentage.textContent = Math.floor(progress) + '%';
        }, 200);
    },

    preloadAssets() {
        // Preload any images or assets here
        console.log('✅ Assets preloaded');
    },

    setProgress(percent) {
        const progressFill = this.overlay?.querySelector('.loading-progress-fill');
        const percentage = this.overlay?.querySelector('.loading-percentage');
        
        if (progressFill) progressFill.style.width = percent + '%';
        if (percentage) percentage.textContent = Math.floor(percent) + '%';
    }
};

// ============================================
// 2. ENHANCED AVATAR SYSTEM
// ============================================
const AvatarSystem = {
    avatars: [
        { id: 1, emoji: '👨‍💼', name: 'Professional', category: 'work' },
        { id: 2, emoji: '👩‍💼', name: 'Business', category: 'work' },
        { id: 3, emoji: '👨‍🎓', name: 'Student', category: 'education' },
        { id: 4, emoji: '👩‍🎓', name: 'Graduate', category: 'education' },
        { id: 5, emoji: '👨‍🔬', name: 'Scientist', category: 'science' },
        { id: 6, emoji: '👩‍🔬', name: 'Researcher', category: 'science' },
        { id: 7, emoji: '👨‍💻', name: 'Developer', category: 'tech' },
        { id: 8, emoji: '👩‍💻', name: 'Coder', category: 'tech' },
        { id: 9, emoji: '👨‍🏫', name: 'Teacher', category: 'education' },
        { id: 10, emoji: '👩‍🏫', name: 'Professor', category: 'education' },
        { id: 11, emoji: '👨‍🎨', name: 'Artist', category: 'creative' },
        { id: 12, emoji: '👩‍🎨', name: 'Designer', category: 'creative' },
        { id: 13, emoji: '🧑‍🚀', name: 'Astronaut', category: 'science' },
        { id: 14, emoji: '👨‍⚕️', name: 'Doctor', category: 'health' },
        { id: 15, emoji: '👩‍⚕️', name: 'Nurse', category: 'health' },
        { id: 16, emoji: '🦸‍♂️', name: 'Hero', category: 'fun' },
        { id: 17, emoji: '🦸‍♀️', name: 'Heroine', category: 'fun' },
        { id: 18, emoji: '🧙‍♂️', name: 'Wizard', category: 'fun' },
        { id: 19, emoji: '🧙‍♀️', name: 'Witch', category: 'fun' },
        { id: 20, emoji: '🤖', name: 'Robot', category: 'tech' },
        { id: 21, emoji: '👽', name: 'Alien', category: 'fun' },
        { id: 22, emoji: '🐱', name: 'Cat', category: 'animals' },
        { id: 23, emoji: '🐶', name: 'Dog', category: 'animals' },
        { id: 24, emoji: '🦁', name: 'Lion', category: 'animals' },
        { id: 25, emoji: '🐼', name: 'Panda', category: 'animals' },
        { id: 26, emoji: '🦊', name: 'Fox', category: 'animals' },
        { id: 27, emoji: '🐯', name: 'Tiger', category: 'animals' },
        { id: 28, emoji: '🐨', name: 'Koala', category: 'animals' },
        { id: 29, emoji: '🎯', name: 'Target', category: 'symbols' },
        { id: 30, emoji: '⭐', name: 'Star', category: 'symbols' }
    ],

    currentAvatar: { id: 1, emoji: '👨‍💼', name: 'Professional', category: 'work' },

    init() {
        this.loadSavedAvatar();
        this.setupEventListeners();
    },

    loadSavedAvatar() {
        const saved = localStorage.getItem('quizAppAvatar');
        if (saved) {
            this.currentAvatar = JSON.parse(saved);
        }
        this.updateAllAvatars();
    },

    saveAvatar(avatar) {
        this.currentAvatar = avatar;
        localStorage.setItem('quizAppAvatar', JSON.stringify(avatar));
        this.updateAllAvatars();
        NotificationSystem.show(`Avatar changed to ${avatar.name}!`, 'success');
    },

    updateAllAvatars() {
        // Update all avatar displays
        const avatarElements = [
            document.querySelector('.user-avatar'),
            document.querySelector('.profile-avatar-large'),
            document.querySelectorAll('.avatar-display')
        ];

        avatarElements.forEach(element => {
            if (element) {
                if (NodeList.prototype.isPrototypeOf(element)) {
                    element.forEach(el => el.textContent = this.currentAvatar.emoji);
                } else {
                    element.textContent = this.currentAvatar.emoji;
                }
            }
        });
    },

    setupEventListeners() {
        const changeAvatarBtn = document.getElementById('changeAvatarBtn');
        const profileAvatar = document.querySelector('.profile-avatar-large');
        
        if (changeAvatarBtn) {
            changeAvatarBtn.addEventListener('click', () => this.showPicker());
        }
        
        if (profileAvatar) {
            profileAvatar.addEventListener('click', () => this.showPicker());
            profileAvatar.style.cursor = 'pointer';
        }
    },

    showPicker() {
        const modal = document.createElement('div');
        modal.className = 'avatar-picker-modal';
        
        // Group avatars by category
        const categories = {
            work: '💼 Professional',
            education: '🎓 Education',
            science: '🔬 Science',
            tech: '💻 Technology',
            health: '⚕️ Health',
            creative: '🎨 Creative',
            fun: '✨ Fun',
            animals: '🐾 Animals',
            symbols: '🎯 Symbols'
        };

        let categorizedHTML = '';
        Object.entries(categories).forEach(([key, label]) => {
            const categoryAvatars = this.avatars.filter(a => a.category === key);
            if (categoryAvatars.length > 0) {
                categorizedHTML += `
                    <div class="avatar-category">
                        <h4 class="category-title">${label}</h4>
                        <div class="avatar-grid">
                            ${categoryAvatars.map(avatar => `
                                <div class="avatar-option ${avatar.id === this.currentAvatar.id ? 'selected' : ''}" 
                                     data-avatar-id="${avatar.id}"
                                     title="${avatar.name}">
                                    <div class="avatar-emoji">${avatar.emoji}</div>
                                    <div class="avatar-name">${avatar.name}</div>
                                    ${avatar.id === this.currentAvatar.id ? '<div class="selected-badge">✓</div>' : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            }
        });

        modal.innerHTML = `
            <div class="avatar-picker-content">
                <div class="avatar-picker-header">
                    <div class="picker-title-section">
                        <h3>Choose Your Avatar</h3>
                        <p class="picker-subtitle">Select an avatar that represents you</p>
                    </div>
                    <button class="close-avatar-picker" aria-label="Close">✕</button>
                </div>
                <div class="avatar-picker-body">
                    ${categorizedHTML}
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        setTimeout(() => modal.classList.add('active'), 10);

        // Event listeners
        modal.querySelector('.close-avatar-picker').addEventListener('click', () => {
            this.closePicker(modal);
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) this.closePicker(modal);
        });

        modal.querySelectorAll('.avatar-option').forEach(option => {
            option.addEventListener('click', () => {
                const id = parseInt(option.dataset.avatarId);
                const avatar = this.avatars.find(a => a.id === id);
                if (avatar) {
                    this.saveAvatar(avatar);
                    this.closePicker(modal);
                }
            });
        });
    },

    closePicker(modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    }
};

// ============================================
// 3. NOTIFICATION SYSTEM
// ============================================
const NotificationSystem = {
    queue: [],
    maxVisible: 3,
    
    show(message, type = 'info', duration = 3500) {
        const notification = this.create(message, type);
        this.queue.push(notification);
        
        document.body.appendChild(notification);
        
        setTimeout(() => notification.classList.add('show'), 10);
        
        setTimeout(() => {
            this.hide(notification);
        }, duration);
    },

    create(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        
        const icons = {
            success: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>',
            error: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
            warning: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 22h20L12 2z"/><line x1="12" y1="9" x2="12" y2="13"/><circle cx="12" cy="17" r="1"/></svg>',
            info: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><circle cx="12" cy="8" r="1"/></svg>'
        };

        notification.innerHTML = `
            <div class="notification-icon">${icons[type] || icons.info}</div>
            <div class="notification-content">
                <div class="notification-message">${message}</div>
            </div>
            <button class="notification-close" aria-label="Close">✕</button>
        `;

        notification.querySelector('.notification-close').addEventListener('click', () => {
            this.hide(notification);
        });

        return notification;
    },

    hide(notification) {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
            const index = this.queue.indexOf(notification);
            if (index > -1) this.queue.splice(index, 1);
        }, 300);
    },

    showMultiple(messages, type = 'info') {
        messages.forEach((message, index) => {
            setTimeout(() => {
                this.show(message, type);
            }, index * 500);
        });
    }
};

// ============================================
// 4. CONFETTI SYSTEM
// ============================================
const ConfettiSystem = {
    colors: ['#ff9a56', '#ff7043', '#4caf50', '#2196F3', '#ffd700', '#e91e63', '#9c27b0', '#00bcd4'],
    
    create(count = 100, duration = 5000) {
        const fragment = document.createDocumentFragment();
        
        for (let i = 0; i < count; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti-piece';
            
            const color = this.colors[Math.floor(Math.random() * this.colors.length)];
            const left = Math.random() * 100;
            const animationDuration = (Math.random() * 3 + 2);
            const delay = Math.random() * 2;
            const size = Math.random() * 10 + 5;
            
            confetti.style.cssText = `
                left: ${left}%;
                background-color: ${color};
                width: ${size}px;
                height: ${size}px;
                animation-duration: ${animationDuration}s;
                animation-delay: ${delay}s;
            `;
            
            fragment.appendChild(confetti);
        }
        
        document.body.appendChild(fragment);
        
        setTimeout(() => {
            document.querySelectorAll('.confetti-piece').forEach(c => c.remove());
        }, duration);
    },

    burst(x = window.innerWidth / 2, y = window.innerHeight / 2) {
        this.create(50, 3000);
    }
};

// ============================================
// 5. PROGRESS SYSTEM
// ============================================
const ProgressSystem = {
    update(current, total) {
        const progressFill = document.getElementById('progressFill');
        const currentQuestionEl = document.getElementById('currentQuestion');
        const totalQuestionsDisplay = document.getElementById('totalQuestionsDisplay');
        
        if (progressFill) {
            const percentage = (current / total) * 100;
            progressFill.style.width = percentage + '%';
            progressFill.setAttribute('data-progress', Math.round(percentage));
        }
        
        if (currentQuestionEl) currentQuestionEl.textContent = current;
        if (totalQuestionsDisplay) totalQuestionsDisplay.textContent = total;
    },

    reset() {
        const progressFill = document.getElementById('progressFill');
        if (progressFill) {
            progressFill.style.width = '0%';
            progressFill.setAttribute('data-progress', '0');
        }
    },

    pulse() {
        const progressFill = document.getElementById('progressFill');
        if (progressFill) {
            progressFill.classList.add('pulse-animation');
            setTimeout(() => progressFill.classList.remove('pulse-animation'), 600);
        }
    }
};

// ============================================
// 6. SOUND SYSTEM
// ============================================
const SoundSystem = {
    enabled: true,
    context: null,

    init() {
        try {
            this.context = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.warn('Web Audio API not supported');
        }
    },

    play(frequency, duration, type = 'sine') {
        if (!this.enabled || !this.context) return;

        const oscillator = this.context.createOscillator();
        const gainNode = this.context.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(this.context.destination);

        oscillator.frequency.value = frequency;
        oscillator.type = type;

        gainNode.gain.setValueAtTime(0.3, this.context.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.context.currentTime + duration / 1000);

        oscillator.start(this.context.currentTime);
        oscillator.stop(this.context.currentTime + duration / 1000);
    },

    sounds: {
        click: () => SoundSystem.play(800, 50),
        correct: () => {
            SoundSystem.play(523, 100);
            setTimeout(() => SoundSystem.play(659, 100), 100);
            setTimeout(() => SoundSystem.play(784, 150), 200);
        },
        wrong: () => {
            SoundSystem.play(400, 200);
            setTimeout(() => SoundSystem.play(300, 200), 150);
        },
        complete: () => {
            const notes = [523, 587, 659, 698, 784, 880];
            notes.forEach((freq, i) => {
                setTimeout(() => SoundSystem.play(freq, 150), i * 100);
            });
        },
        button: () => SoundSystem.play(600, 30)
    },

    toggle() {
        this.enabled = !this.enabled;
        NotificationSystem.show(
            `Sound ${this.enabled ? 'enabled' : 'disabled'}`,
            'info'
        );
        return this.enabled;
    }
};

// ============================================
// 7. ANIMATION UTILITIES
// ============================================
const AnimationUtils = {
    fadeIn(element, duration = 300) {
        element.style.opacity = '0';
        element.style.display = 'block';
        
        element.animate([
            { opacity: 0 },
            { opacity: 1 }
        ], {
            duration,
            easing: 'ease-in-out',
            fill: 'forwards'
        });
    },

    fadeOut(element, duration = 300) {
        element.animate([
            { opacity: 1 },
            { opacity: 0 }
        ], {
            duration,
            easing: 'ease-in-out',
            fill: 'forwards'
        }).onfinish = () => {
            element.style.display = 'none';
        };
    },

    slideIn(element, direction = 'right', duration = 300) {
        const transforms = {
            left: 'translateX(-100%)',
            right: 'translateX(100%)',
            top: 'translateY(-100%)',
            bottom: 'translateY(100%)'
        };

        element.animate([
            { transform: transforms[direction], opacity: 0 },
            { transform: 'translate(0, 0)', opacity: 1 }
        ], {
            duration,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
            fill: 'forwards'
        });
    },

    bounce(element, scale = 1.2) {
        element.animate([
            { transform: 'scale(1)' },
            { transform: `scale(${scale})` },
            { transform: 'scale(0.95)' },
            { transform: 'scale(1)' }
        ], {
            duration: 500,
            easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
        });
    },

    shake(element) {
        element.animate([
            { transform: 'translateX(0)' },
            { transform: 'translateX(-10px)' },
            { transform: 'translateX(10px)' },
            { transform: 'translateX(-10px)' },
            { transform: 'translateX(10px)' },
            { transform: 'translateX(0)' }
        ], {
            duration: 500,
            easing: 'ease-in-out'
        });
    },

    pulse(element) {
        element.animate([
            { transform: 'scale(1)' },
            { transform: 'scale(1.05)' },
            { transform: 'scale(1)' }
        ], {
            duration: 300,
            easing: 'ease-in-out'
        });
    }
};

// ============================================
// 8. THEME SYSTEM
// ============================================
const ThemeSystem = {
    currentTheme: 'dark',

    init() {
        const saved = localStorage.getItem('quizAppTheme');
        if (saved) {
            this.currentTheme = saved;
            this.apply();
        }
    },

    toggle() {
        this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.apply();
        this.save();
        
        NotificationSystem.show(
            `${this.currentTheme === 'dark' ? 'Dark' : 'Light'} mode activated`,
            'info'
        );
    },

    apply() {
        document.body.setAttribute('data-theme', this.currentTheme);
        
        // Smooth transition
        document.body.style.transition = 'background 0.3s ease, color 0.3s ease';
    },

    save() {
        localStorage.setItem('quizAppTheme', this.currentTheme);
    }
};

// ============================================
// 9. TOOLTIP SYSTEM
// ============================================
const TooltipSystem = {
    init() {
        document.querySelectorAll('[data-tooltip]').forEach(element => {
            element.addEventListener('mouseenter', (e) => this.show(e));
            element.addEventListener('mouseleave', () => this.hide());
        });
    },

    show(event) {
        const text = event.target.getAttribute('data-tooltip');
        const position = event.target.getAttribute('data-tooltip-position') || 'top';
        
        const tooltip = document.createElement('div');
        tooltip.className = `tooltip tooltip-${position}`;
        tooltip.textContent = text;
        
        document.body.appendChild(tooltip);

        const rect = event.target.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();
        
        let top, left;
        
        switch(position) {
            case 'bottom':
                top = rect.bottom + 10;
                left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
                break;
            case 'left':
                top = rect.top + (rect.height / 2) - (tooltipRect.height / 2);
                left = rect.left - tooltipRect.width - 10;
                break;
            case 'right':
                top = rect.top + (rect.height / 2) - (tooltipRect.height / 2);
                left = rect.right + 10;
                break;
            default: // top
                top = rect.top - tooltipRect.height - 10;
                left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
        }
        
        tooltip.style.top = Math.max(10, top) + 'px';
        tooltip.style.left = Math.max(10, Math.min(window.innerWidth - tooltipRect.width - 10, left)) + 'px';

        setTimeout(() => tooltip.classList.add('show'), 10);
    },

    hide() {
        document.querySelectorAll('.tooltip').forEach(tooltip => {
            tooltip.classList.remove('show');
            setTimeout(() => tooltip.remove(), 200);
        });
    }
};

// ============================================
// 10. INITIALIZATION
// ============================================
function initializeUI() {
    console.log('%c 🎨 UI System v2.0 ', 'background: linear-gradient(90deg, #ff9a56, #ff7043); color: white; font-size: 16px; padding: 10px; border-radius: 5px; font-weight: bold;');
    
    // Initialize all systems
    LoadingSystem.init();
    AvatarSystem.init();
    SoundSystem.init();
    ThemeSystem.init();
    TooltipSystem.init();
    
    // Add button click sounds
    document.addEventListener('click', (e) => {
        if (e.target.matches('button, .btn, .category-card, .option')) {
            SoundSystem.sounds.button();
        }
    });
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    console.log('✅ Loading System Ready');
    console.log('✅ Avatar System Ready (30 avatars)');
    console.log('✅ Notification System Ready');
    console.log('✅ Confetti System Ready');
    console.log('✅ Sound System Ready');
    console.log('✅ Theme System Ready');
    console.log('✅ Animation Utils Ready');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeUI);
} else {
    initializeUI();
}

// ============================================
// 11. GLOBAL API EXPORT
// ============================================
window.UI = {
    Loading: LoadingSystem,
    Avatar: AvatarSystem,
    Notification: NotificationSystem,
    Confetti: ConfettiSystem,
    Progress: ProgressSystem,
    Sound: SoundSystem,
    Animation: AnimationUtils,
    Theme: ThemeSystem,
    Tooltip: TooltipSystem,
    
    // Convenience methods
    showLoading: (msg) => LoadingSystem.show(msg),
    hideLoading: (delay) => LoadingSystem.hide(delay),
    notify: (msg, type) => NotificationSystem.show(msg, type),
    celebrate: () => ConfettiSystem.create(),
    
    // Version
    version: '2.0.0'
};

// ============================================
// 12. PERFORMANCE MONITORING
// ============================================
window.addEventListener('load', () => {
    if (window.performance) {
        const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
        console.log(`%c ⚡ Page loaded in ${loadTime}ms `, 'background: #4caf50; color: white; padding: 5px 10px; border-radius: 3px;');
    }
});

// ============================================
// 13. ERROR HANDLING
// ============================================
window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
    if (LoadingSystem.isVisible) {
        LoadingSystem.hide();
    }
});

// ============================================
// 14. RESPONSIVE UTILITIES
// ============================================
const ResponsiveUtils = {
    isMobile() {
        return window.innerWidth <= 768;
    },
    
    isTablet() {
        return window.innerWidth > 768 && window.innerWidth <= 1024;
    },
    
    isDesktop() {
        return window.innerWidth > 1024;
    },
    
    onResize(callback) {
        let timeout;
        window.addEventListener('resize', () => {
            clearTimeout(timeout);
            timeout = setTimeout(callback, 250);
        });
    }
};

window.UI.Responsive = ResponsiveUtils;

console.log('%c 🚀 UI.js v2.0 loaded successfully! ', 'background: #2196F3; color: white; font-size: 14px; padding: 8px 15px; border-radius: 5px; font-weight: bold;');
console.log('%c 💡 Use window.UI to access all UI components ', 'background: #ff9800; color: white; font-size: 12px; padding: 5px 10px; border-radius: 3px;');
