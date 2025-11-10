/* ============================================
   UI COMPONENTS - Additional CSS
   Add this to your styles.css or create ui.css
   ============================================ */

/* ============================================
   AVATAR PICKER MODAL
   ============================================ */
.avatar-picker-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3000;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    padding: 20px;
}

.avatar-picker-modal.active {
    opacity: 1;
    visibility: visible;
}

.avatar-picker-content {
    background: linear-gradient(180deg, #2d3561 0%, #1a1f3a 100%);
    border-radius: 25px;
    max-width: 600px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    transform: scale(0.9);
    transition: transform 0.3s ease;
}

.avatar-picker-modal.active .avatar-picker-content {
    transform: scale(1);
}

.avatar-picker-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.avatar-picker-header h3 {
    color: #fff;
    font-size: 24px;
    font-weight: 600;
}

.close-avatar-picker {
    background: transparent;
    border: none;
    color: #fff;
    font-size: 28px;
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.3s;
}

.close-avatar-picker:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: rotate(90deg);
}

.avatar-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 15px;
    padding: 25px;
}

.avatar-option {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 15px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
    cursor: pointer;
    transition: all 0.3s;
    border: 2px solid transparent;
}

.avatar-option:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-5px);
}

.avatar-option.selected {
    background: linear-gradient(135deg, #ff9a56 0%, #ff7043 100%);
    border-color: #ff9a56;
    box-shadow: 0 5px 20px rgba(255, 154, 86, 0.4);
}

.avatar-emoji {
    font-size: 48px;
    line-height: 1;
}

.avatar-name {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
    font-weight: 500;
}

.avatar-option.selected .avatar-name {
    color: #fff;
    font-weight: 600;
}

/* ============================================
   ENHANCED LOADING OVERLAY
   ============================================ */
.loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(26, 31, 58, 0.98) 0%, rgba(45, 53, 97, 0.98) 100%);
    display: flex;
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

.loading-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
}

.loading-logo {
    animation: float 3s ease-in-out infinite;
}

@keyframes float {
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-20px);
    }
}

.loading-spinner {
    width: 60px;
    height: 60px;
    border: 5px solid rgba(255, 154, 86, 0.2);
    border-top: 5px solid #ff9a56;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.loading-text {
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
}

/* ============================================
   NOTIFICATION SYSTEM
   ============================================ */
.notification {
    position: fixed;
    top: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 15px 20px;
    border-radius: 12px;
    color: white;
    font-weight: 500;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    z-index: 10000;
    transform: translateX(400px);
    transition: transform 0.3s ease;
    min-width: 250px;
    max-width: 400px;
}

.notification.show {
    transform: translateX(0);
}

.notification-success {
    background: linear-gradient(135deg, #4caf50 0%, #45a049 100%);
}

.notification-error {
    background: linear-gradient(135deg, #f44336 0%, #e53935 100%);
}

.notification-warning {
    background: linear-gradient(135deg, #ff9800 0%, #f57c00 100%);
}

.notification-info {
    background: linear-gradient(135deg, #2196F3 0%, #1976D2 100%);
}

.notification-icon {
    width: 28px;
    height: 28px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: bold;
    flex-shrink: 0;
}

.notification-message {
    flex: 1;
    font-size: 14px;
}

/* ============================================
   CONFETTI ANIMATION
   ============================================ */
.confetti {
    position: fixed;
    width: 10px;
    height: 10px;
    top: -10px;
    z-index: 9998;
    animation: confettiFall linear forwards;
}

@keyframes confettiFall {
    to {
        transform: translateY(100vh) rotate(360deg);
    }
}

/* ============================================
   TOOLTIP SYSTEM
   ============================================ */
.tooltip {
    position: fixed;
    background: rgba(0, 0, 0, 0.9);
    color: white;
    padding: 8px 12px;
    border-radius: 6px;
    font-size: 13px;
    z-index: 10001;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s;
    white-space: nowrap;
}

.tooltip.show {
    opacity: 1;
}

.tooltip::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    border-top-color: rgba(0, 0, 0, 0.9);
}

/* ============================================
   ENHANCED AVATAR DISPLAY
   ============================================ */
.user-avatar,
.profile-avatar-large {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    font-size: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
    transition: all 0.3s;
}

.user-avatar:hover,
.profile-avatar-large:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 30px rgba(102, 126, 234, 0.6);
}

.profile-avatar-large {
    font-size: 60px;
    cursor: pointer;
}

/* ============================================
   PROGRESS BAR ENHANCEMENT
   ============================================ */
.progress-bar {
    width: 100%;
    height: 6px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    overflow: hidden;
    margin-top: 10px;
    position: relative;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #ff9a56, #ff7043, #ffd700);
    background-size: 200% 100%;
    animation: progressShimmer 2s linear infinite;
    transition: width 0.3s ease;
    border-radius: 3px;
    box-shadow: 0 0 10px rgba(255, 154, 86, 0.5);
}

@keyframes progressShimmer {
    0% {
        background-position: 100% 0;
    }
    100% {
        background-position: -100% 0;
    }
}

/* ============================================
   THEME VARIATIONS
   ============================================ */
[data-theme="light"] {
    --bg-primary: #f5f5f5;
    --bg-secondary: #ffffff;
    --text-primary: #333333;
    --text-secondary: #666666;
}

[data-theme="light"] .container {
    background: var(--bg-secondary);
}

[data-theme="light"] .question,
[data-theme="light"] h1,
[data-theme="light"] h2 {
    color: var(--text-primary);
}

/* ============================================
   BUTTON ANIMATIONS
   ============================================ */
.btn-animated {
    position: relative;
    overflow: hidden;
}

.btn-animated::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
}

.btn-animated:active::before {
    width: 300px;
    height: 300px;
}

/* ============================================
   MOBILE OPTIMIZATIONS
   ============================================ */
@media (max-width: 480px) {
    .avatar-grid {
        grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
        gap: 10px;
        padding: 15px;
    }

    .avatar-emoji {
        font-size: 36px;
    }

    .avatar-name {
        font-size: 10px;
    }

    .notification {
        right: 10px;
        left: 10px;
        min-width: auto;
    }

    .loading-logo {
        width: 60px;
        height: 60px;
    }

    .loading-spinner {
        width: 40px;
        height: 40px;
    }
}

/* ============================================
   ACCESSIBILITY IMPROVEMENTS
   ============================================ */
.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}

/* Focus styles for keyboard navigation */
*:focus-visible {
    outline: 2px solid #ff9a56;
    outline-offset: 2px;
}

button:focus-visible,
a:focus-visible {
    outline: 2px solid #ff9a56;
    outline-offset: 2px;
}

/* ============================================
   PRINT STYLES
   ============================================ */
@media print {
    .sidebar,
    .loading-overlay,
    .notification,
    .confetti {
        display: none !important;
    }
}

/* ============================================
   SCROLLBAR STYLING
   ============================================ */
.avatar-picker-content::-webkit-scrollbar {
    width: 8px;
}

.avatar-picker-content::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
}

.avatar-picker-content::-webkit-scrollbar-thumb {
    background: rgba(255, 154, 86, 0.5);
    border-radius: 4px;
}

.avatar-picker-content::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 154, 86, 0.7);
}
