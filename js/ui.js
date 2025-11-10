/* ============================================
   UI.JS - UI COMPONENTS & ANIMATIONS
   Save as: ui.js
   This file handles all UI-related functionality
   ============================================ */

'use strict';

// ============================================
// 1. AVATAR SYSTEM
// ============================================
const AvatarSystem = {
    avatars: [
        { id: 1, emoji: '👨‍💼', name: 'Professional' },
        { id: 2, emoji: '👩‍💼', name: 'Business Woman' },
        { id: 3, emoji: '👨‍🎓', name: 'Student' },
        { id: 4, emoji: '👩‍🎓', name: 'Graduate' },
        { id: 5, emoji: '👨‍🔬', name: 'Scientist' },
        { id: 6, emoji: '👩‍🔬', name: 'Researcher' },
        { id: 7, emoji: '👨‍💻', name: 'Developer' },
        { id: 8, emoji: '👩‍💻', name: 'Programmer' },
        { id: 9, emoji: '👨‍🏫', name: 'Teacher' },
        { id: 10, emoji: '👩‍🏫', name: 'Professor' },
        { id: 11, emoji: '👨‍🎨', name: 'Artist' },
        { id: 12, emoji: '👩‍🎨', name: 'Designer' },
        { id: 13, emoji: '🧑‍🚀', name: 'Astronaut' },
        { id: 14, emoji: '👨‍⚕️', name: 'Doctor' },
        { id: 15, emoji: '👩‍⚕️', name: 'Nurse' },
        { id: 16, emoji: '🦸‍♂️', name: 'Superhero' },
        { id: 17, emoji: '🦸‍♀️', name: 'Superheroine' },
        { id: 18, emoji: '🧙‍♂️', name: 'Wizard' },
        { id: 19, emoji: '🧙‍♀️', name: 'Witch' },
        { id: 20, emoji: '🤖', name: 'Robot' },
        { id: 21, emoji: '👽', name: 'Alien' },
        { id: 22, emoji: '🐱', name: 'Cat' },
        { id: 23, emoji: '🐶', name: 'Dog' },
        { id: 24, emoji: '🦁', name: 'Lion' }
    ],

    currentAvatar: { id: 1, emoji: '👨‍💼', name: 'Professional' },

    init() {
        this.loadSavedAvatar();
        this.setupAvatarModal();
    },

    loadSavedAvatar() {
        const saved = localStorage.getItem('quizAppAvatar');
        if (saved) {
            this.currentAvatar = JSON.parse(saved);
        }
        this.updateAvatarDisplay();
    },

    saveAvatar(avatar) {
        this.currentAvatar = avatar;
        localStorage.setItem('quizAppAvatar', JSON.stringify(avatar));
        this.updateAvatarDisplay();
    },

    updateAvatarDisplay() {
        // Update sidebar avatar
        const sidebarAvatar = document.querySelector('.user-avatar');
        if (sidebarAvatar) {
            sidebarAvatar.textContent = this.currentAvatar.emoji;
        }

        // Update profile avatar
        const profileAvatar = document.querySelector('.profile-avatar-large');
        if (profileAvatar) {
            profileAvatar.textContent = this.currentAvatar.emoji;
        }
    },

    setupAvatarModal() {
        const changeAvatarBtn = document.getElementById('changeAvatarBtn');
        if (changeAvatarBtn) {
            changeAvatarBtn.addEventListener('click', () => this.showAvatarPicker());
        }
    },

    showAvatarPicker() {
        // Create modal
        const modal = document.createElement('div');
        modal.className = 'avatar-picker-modal';
        modal.innerHTML = `
            <div class="avatar-picker-content">
                <div class="avatar-picker-header">
                    <h3>Choose Your Avatar</h3>
                    <button class="close-avatar-picker">✕</button>
                </div>
                <div class="avatar-grid">
                    ${this.avatars.map(avatar => `
                        <div class="avatar-option ${avatar.id === this.currentAvatar.id ? 'selected' : ''}" 
                             data-avatar-id="${avatar.id}">
                            <div class="avatar-emoji">${avatar.emoji}</div>
                            <div class="avatar-name">${avatar.name}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Animate in
        setTimeout(() => modal.classList.add('active'), 10);

        // Setup event listeners
        modal.querySelector('.close-avatar-picker').addEventListener('click', () => {
            this.closeAvatarPicker(modal);
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeAvatarPicker(modal);
            }
        });

        modal.querySelectorAll('.avatar-option').forEach(option => {
            option.addEventListener('click', () => {
                const avatarId = parseInt(option.dataset.avatarId);
                const selectedAvatar = this.avatars.find(a => a.id === avatarId);
                if (selectedAvatar) {
                    this.saveAvatar(selectedAvatar);
                    this.closeAvatarPicker(modal);
                    NotificationSystem.show('Avatar updated successfully!', 'success');
                }
            });
        });
    },

    closeAvatarPicker(modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    }
};

// ============================================
// 2. LOADING SYSTEM
// ============================================
const LoadingSystem = {
    overlay: null,

    init() {
        this.overlay = document.getElementById('loadingOverlay');
        if (!this.overlay) {
            this.createLoadingOverlay();
        }
    },

    createLoadingOverlay() {
        this.overlay = document.createElement('div');
        this.overlay.id = 'loadingOverlay';
        this.overlay.className = 'loading-overlay';
        this.overlay.innerHTML = `
            <div class="loading-content">
                <svg class="loading-logo" width="80" height="80" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="url(#loadingGradient)"/>
                    <path d="M50 25C41 25 34 32 34 41H42C42 36 45.5 33 50 33C54.5 33 58 36 58 41C58 44 56 46 53 48L49 51C46 53 44 56 44 60H52C52 57 53 55 56 53L59 51C63 48 66 45 66 41C66 32 59 25 50 25Z" fill="white"/>
                    <circle cx="48" cy="68" r="4" fill="white"/>
                    <defs>
                        <linearGradient id="loadingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style="stop-color:#ff9a56;stop-opacity:1" />
                            <stop offset="100%" style="stop-color:#ff7043;stop-opacity:1" />
                        </linearGradient>
                    </defs>
                </svg>
                <div class="loading-spinner"></div>
                <p class="loading-text">Loading Quiz...</p>
            </div>
        `;
        document.body.appendChild(this.overlay);
    },

    show(text = 'Loading...') {
        if (!this.overlay) this.init();
        const loadingText = this.overlay.querySelector('.loading-text');
        if (loadingText) loadingText.textContent = text;
        this.overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    },

    hide() {
        if (this.overlay) {
            this.overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    },

    showWithDelay(text = 'Loading...', delay = 1000) {
        this.show(text);
        return new Promise(resolve => {
            setTimeout(() => {
                this.hide();
                resolve();
            }, delay);
        });
    }
};

// ============================================
// 3. NOTIFICATION SYSTEM
// ============================================
const NotificationSystem = {
    show(message, type = 'info', duration = 3000) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        
        // Icon based on type
        const icons = {
            success: '✓',
            error: '✕',
            warning: '⚠',
            info: 'ℹ'
        };

        notification.innerHTML = `
            <div class="notification-icon">${icons[type] || icons.info}</div>
            <div class="notification-message">${message}</div>
        `;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => notification.classList.add('show'), 10);

        // Auto remove
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, duration);
    }
};

// ============================================
// 4. ANIMATION UTILITIES
// ============================================
const AnimationUtils = {
    fadeIn(element, duration = 300) {
        element.style.opacity = '0';
        element.style.display = 'block';
        
        let start = null;
        const animate = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const opacity = Math.min(progress / duration, 1);
            
            element.style.opacity = opacity;
            
            if (progress < duration) {
                requestAnimationFrame(animate);
            }
        };
        
        requestAnimationFrame(animate);
    },

    fadeOut(element, duration = 300) {
        let start = null;
        const initialOpacity = parseFloat(window.getComputedStyle(element).opacity);
        
        const animate = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const opacity = Math.max(initialOpacity * (1 - progress / duration), 0);
            
            element.style.opacity = opacity;
            
            if (progress < duration) {
                requestAnimationFrame(animate);
            } else {
                element.style.display = 'none';
            }
        };
        
        requestAnimationFrame(animate);
    },

    slideIn(element, direction = 'right', duration = 300) {
        const translations = {
            left: 'translateX(-100%)',
            right: 'translateX(100%)',
            top: 'translateY(-100%)',
            bottom: 'translateY(100%)'
        };

        element.style.transform = translations[direction];
        element.style.display = 'block';

        setTimeout(() => {
            element.style.transition = `transform ${duration}ms ease`;
            element.style.transform = 'translate(0, 0)';
        }, 10);
    },

    pulse(element, scale = 1.1, duration = 300) {
        element.style.transition = `transform ${duration}ms ease`;
        element.style.transform = `scale(${scale})`;
        
        setTimeout(() => {
            element.style.transform = 'scale(1)';
        }, duration);
    }
};

// ============================================
// 5. CONFETTI ANIMATION (for quiz completion)
// ============================================
const ConfettiSystem = {
    create() {
        const colors = ['#ff9a56', '#ff7043', '#4caf50', '#2196F3', '#ffd700', '#e91e63'];
        const confettiCount = 50;

        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 3 + 's';
            confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            
            document.body.appendChild(confetti);

            setTimeout(() => confetti.remove(), 5000);
        }
    }
};

// ============================================
// 6. PROGRESS INDICATOR
// ============================================
const ProgressIndicator = {
    update(current, total) {
        const progressFill = document.getElementById('progressFill');
        if (progressFill) {
            const percentage = (current / total) * 100;
            progressFill.style.width = percentage + '%';
        }
    },

    reset() {
        const progressFill = document.getElementById('progressFill');
        if (progressFill) {
            progressFill.style.width = '0%';
        }
    }
};

// ============================================
// 7. MODAL SYSTEM
// ============================================
const ModalSystem = {
    show(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    },

    hide(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    },

    hideAll() {
        document.querySelectorAll('.modal, .profile-modal, .sidebar').forEach(modal => {
            modal.classList.remove('active');
        });
        document.body.style.overflow = '';
    }
};

// ============================================
// 8. TOOLTIP SYSTEM
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
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = text;
        
        document.body.appendChild(tooltip);

        const rect = event.target.getBoundingClientRect();
        tooltip.style.top = (rect.top - tooltip.offsetHeight - 10) + 'px';
        tooltip.style.left = (rect.left + rect.width / 2 - tooltip.offsetWidth / 2) + 'px';

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
// 9. SOUND SYSTEM (Optional)
// ============================================
const SoundSystem = {
    enabled: true,

    sounds: {
        click: () => this.playBeep(800, 50),
        correct: () => this.playBeep(1200, 150),
        wrong: () => this.playBeep(400, 200),
        complete: () => this.playMelody()
    },

    playBeep(frequency, duration) {
        if (!this.enabled) return;

        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.value = frequency;
        oscillator.type = 'sine';

        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration / 1000);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration / 1000);
    },

    playMelody() {
        if (!this.enabled) return;
        
        const notes = [523, 587, 659, 698, 784];
        notes.forEach((freq, index) => {
            setTimeout(() => this.playBeep(freq, 100), index * 120);
        });
    },

    toggle() {
        this.enabled = !this.enabled;
        return this.enabled;
    }
};

// ============================================
// 10. THEME SYSTEM
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
    },

    apply() {
        document.body.setAttribute('data-theme', this.currentTheme);
    },

    save() {
        localStorage.setItem('quizAppTheme', this.currentTheme);
    }
};

// ============================================
// 11. INITIALIZATION
// ============================================
function initUI() {
    console.log('%c UI System Initialized ', 'background: #2196F3; color: white; padding: 5px 10px; border-radius: 3px;');
    
    // Initialize all systems
    AvatarSystem.init();
    LoadingSystem.init();
    ThemeSystem.init();
    TooltipSystem.init();
    
    // Add loading animation to quiz start
    document.addEventListener('quizStart', () => {
        LoadingSystem.show('Preparing your quiz...');
        setTimeout(() => LoadingSystem.hide(), 800);
    });

    // Add confetti to perfect scores
    document.addEventListener('quizComplete', (e) => {
        if (e.detail && e.detail.percentage === 100) {
            setTimeout(() => ConfettiSystem.create(), 500);
        }
    });

    console.log('✨ Avatar System Ready');
    console.log('⏳ Loading System Ready');
    console.log('🔔 Notification System Ready');
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initUI);
} else {
    initUI();
}

// Export for use in other scripts
window.UI = {
    Avatar: AvatarSystem,
    Loading: LoadingSystem,
    Notification: NotificationSystem,
    Animation: AnimationUtils,
    Confetti: ConfettiSystem,
    Progress: ProgressIndicator,
    Modal: ModalSystem,
    Tooltip: TooltipSystem,
    Sound: SoundSystem,
    Theme: ThemeSystem
};

console.log('%c UI.js loaded successfully! ', 'background: #4caf50; color: white; padding: 5px 10px; border-radius: 3px;');
