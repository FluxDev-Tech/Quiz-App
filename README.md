# 🎯 Quiz App - Interactive Learning Platform

A beautiful, fully-functional quiz application built with vanilla HTML, CSS, and JavaScript. Features multiple categories, real-time scoring, user profiles, and comprehensive statistics tracking.

![Quiz App Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## 📋 Table of Contents

- [Features](#-features)
- [Demo](#-demo)
- [Installation](#-installation)
- [File Structure](#-file-structure)
- [Usage Guide](#-usage-guide)
- [Keyboard Shortcuts](#-keyboard-shortcuts)
- [Customization](#-customization)
- [Browser Support](#-browser-support)
- [Contributing](#-contributing)
- [License](#-license)
- [Credits](#-credits)

---

## ✨ Features

### 🎮 Core Functionality
- **4 Quiz Categories**: Science & Nature, Art & Literature, General Knowledge, Technology
- **40+ Questions**: 10 questions per category with multiple-choice answers
- **Real-time Scoring**: Instant feedback on correct/incorrect answers
- **Timer System**: 30 seconds per question with visual countdown
- **Progress Tracking**: Track current question and remaining time

### 👤 User Management
- **Profile System**: Edit name, email, username, and bio
- **Avatar Support**: Customizable user avatar
- **Statistics Dashboard**: View quizzes taken, average score, streaks, and badges
- **Preferences**: Toggle sound effects, notifications, and dark mode
- **Data Persistence**: All data saved to localStorage

### 📊 Statistics & Progress
- **Points System**: Earn 10 points per correct answer
- **Global Ranking**: Dynamic rank calculation based on points
- **Average Score**: Automatic calculation across all quizzes
- **Streak Tracking**: Track consecutive days of high performance
- **Badge System**: Unlock achievements based on performance
- **Quiz History**: View last 50 completed quizzes

### 🎨 UI/UX Features
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Smooth Animations**: Professional transitions and effects
- **Sidebar Menu**: Easy navigation with slide-in menu
- **Modal System**: Profile and results in elegant modals
- **Notification Toasts**: Real-time feedback messages
- **Dark Mode**: Toggle between light and dark themes

### 🔧 Advanced Features
- **Keyboard Navigation**: Full keyboard support (A/B/C/D/Enter/Escape)
- **Auto-save**: Automatic data persistence
- **Data Export/Import**: Backup and restore your progress
- **Tab Visibility**: Auto-pause timer when tab is inactive
- **Error Handling**: Global error catching and recovery
- **Developer Tools**: Console debugging commands

### 🌐 Social Features
- **Social Sharing**: Share results on WhatsApp, Facebook, Twitter
- **Leaderboard**: (Coming Soon) Compare scores with other players
- **Achievements**: (Coming Soon) Unlock special badges

---

## 🎥 Demo

### Screenshots

**Home Screen**
- View your points and world rank
- Select from 4 quiz categories
- Access menu and profile

**Quiz Screen**
- Answer multiple-choice questions
- Real-time timer countdown
- Visual feedback on answers
- Track progress through quiz

**Results Screen**
- View final score percentage
- See correct vs total answers
- Share results on social media
- Return to home screen

**Profile Modal**
- Edit personal information
- View comprehensive statistics
- Adjust preferences
- Save changes instantly

**Sidebar Menu**
- Quick navigation
- User information display
- Access all features
- Logout option

---

## 💻 Installation

### Quick Start

1. **Download the files**
   ```bash
   # Clone or download the repository
   git clone https://github.com/yourusername/quiz-app.git
   cd quiz-app
   ```

2. **File Structure**
   ```
   quiz-app/
   ├── index.html
   ├── styles.css
   ├── script.js
   └── README.md
   ```

3. **Open in browser**
   - Simply open `index.html` in your web browser
   - No server or build process required!

### Alternative Methods

**Method 1: Direct Download**
- Download all 3 files (HTML, CSS, JS)
- Place them in the same folder
- Open `index.html` in your browser

**Method 2: Live Server (Recommended for Development)**
```bash
# Using VS Code Live Server extension
# Or using Python
python -m http.server 8000

# Or using Node.js
npx serve
```

---

## 📁 File Structure

```
quiz-app/
│
├── index.html           # Main HTML structure
│   ├── Home Screen
│   ├── Quiz Screen
│   ├── Results Screen
│   ├── Sidebar Menu
│   └── Profile Modal
│
├── styles.css          # Complete styling
│   ├── Base Styles
│   ├── Sidebar Styles
│   ├── Profile Modal
│   ├── Quiz Interface
│   ├── Animations
│   └── Responsive Design
│
├── script.js           # Full functionality
│   ├── Quiz Data (40 questions)
│   ├── User Management
│   ├── Quiz Logic
│   ├── Timer System
│   ├── Statistics Tracking
│   ├── LocalStorage
│   └── Event Handlers
│
└── README.md           # Documentation
```

---

## 📖 Usage Guide

### Getting Started

1. **First Launch**
   - App loads with default "Guest User" profile
   - 230 points and rank 1250 displayed
   - 4 quiz categories available

2. **Taking a Quiz**
   - Click any category card to start
   - Read the question carefully
   - Click an option (A, B, C, or D)
   - Click SUBMIT to check answer
   - Green = Correct, Red = Wrong
   - Click NEXT to continue
   - Complete all questions to see results

3. **Using the Profile**
   - Click profile icon (👤) in top-right
   - Edit your name, email, username, bio
   - View your statistics
   - Toggle preferences
   - Click "Save Changes"

4. **Navigating the Menu**
   - Click menu icon (☰) in top-left
   - Access Home, Profile, and other features
   - View your user info
   - Logout when done

### Features Walkthrough

#### Quiz Categories

| Category | Icon | Questions | Topics |
|----------|------|-----------|---------|
| Science & Nature | 🔬 | 10 | Physics, Chemistry, Biology, Astronomy |
| Art & Literature | 🎨 | 10 | Painting, Music, Literature, History |
| General Knowledge | 📦 | 10 | Geography, History, Culture, Trivia |
| Technology | 💡 | 10 | Computing, Internet, Programming, Tech History |

#### Scoring System

- **Correct Answer**: +10 points
- **Wrong Answer**: 0 points
- **Perfect Score (100%)**: Special badge
- **High Score (90%+)**: Achievement badge
- **Quiz Completion**: Updates average score

#### Statistics Tracked

1. **Total Quizzes**: Number of completed quizzes
2. **Average Score**: Mean percentage across all quizzes
3. **Current Streak**: Consecutive high-performing days
4. **Total Badges**: Achievements unlocked
5. **Points**: Cumulative score from all quizzes
6. **World Rank**: Position based on total points

---

## ⌨️ Keyboard Shortcuts

### Quiz Navigation
- **A** - Select option A
- **B** - Select option B
- **C** - Select option C
- **D** - Select option D
- **Enter** - Submit answer / Next question
- **Escape** - Close quiz (with confirmation)

### Modal Controls
- **Escape** - Close profile modal
- **Escape** - Close sidebar menu

### Tips
- Use keyboard shortcuts for faster quiz completion
- Combine mouse and keyboard for best experience
- All shortcuts work in quiz screen only

---

## 🎨 Customization

### Adding Questions

Edit `script.js` to add more questions:

```javascript
const quizData = {
    science: [
        {
            question: "Your question here?",
            options: ["Option A", "Option B", "Option C", "Option D"],
            correct: 2  // Index of correct answer (0-3)
        },
        // Add more questions...
    ]
};
```

### Changing Colors

Edit `styles.css` to customize colors:

```css
/* Primary color (orange gradient) */
background: linear-gradient(135deg, #ff9a56 0%, #ff7043 100%);

/* Background color (dark blue) */
background: linear-gradient(180deg, #1a1f3a 0%, #2d3561 100%);

/* Success color (green) */
background: linear-gradient(135deg, #4caf50 0%, #45a049 100%);

/* Error color (red) */
background: linear-gradient(135deg, #f44336 0%, #e53935 100%);
```

### Modifying Timer

Change time per question in `script.js`:

```javascript
// Line ~420
timeRemaining = totalQuestions * 30; // Change 30 to desired seconds
```

### Adjusting Points

Modify points per correct answer:

```javascript
// Line ~575
userData.points += score * 10; // Change 10 to desired points
```

### Custom Categories

Add new categories:

1. Add category to `quizData` object
2. Add category card in `index.html`
3. Add category icon (emoji or image)
4. Update `categoryNames` mapping

---

## 🌐 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ Fully Supported |
| Firefox | 88+ | ✅ Fully Supported |
| Safari | 14+ | ✅ Fully Supported |
| Edge | 90+ | ✅ Fully Supported |
| Opera | 76+ | ✅ Fully Supported |
| Mobile Safari | 14+ | ✅ Fully Supported |
| Chrome Android | 90+ | ✅ Fully Supported |

### Requirements
- JavaScript enabled
- LocalStorage enabled (for data persistence)
- Modern browser with ES6 support
- Screen resolution: 320px minimum width

---

## 🔧 Troubleshooting

### Common Issues

**Q: Data not saving?**
- Check if cookies/localStorage are enabled
- Try clearing browser cache
- Check browser console for errors

**Q: Timer not working?**
- Refresh the page
- Check if JavaScript is enabled
- Ensure page has focus (click on page)

**Q: Profile not updating?**
- Click "Save Changes" button
- Check console for errors
- Try logging out and back in

**Q: Quiz not loading?**
- Check internet connection (for CDN resources)
- Clear browser cache
- Try different browser
- Check browser console

**Q: Keyboard shortcuts not working?**
- Click on the page to give it focus
- Ensure quiz screen is active
- Check if answer is already submitted

### Debug Mode

Open browser console and type:

```javascript
// View current user data
quizApp.getUserData()

// Add test points
quizApp.addPoints(100)

// Export data
quizApp.exportData()

// Reset quiz
quizApp.resetQuiz()

// Complete quiz instantly
quizApp.completeQuiz()

// Clear all data
quizApp.clearData()
```

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### Ways to Contribute

1. **Report Bugs**
   - Open an issue with bug description
   - Include browser and OS information
   - Add screenshots if possible

2. **Suggest Features**
   - Open an issue with feature request
   - Describe use case and benefits
   - Provide examples if possible

3. **Submit Pull Requests**
   - Fork the repository
   - Create feature branch
   - Make your changes
   - Submit pull request with description

4. **Improve Documentation**
   - Fix typos or unclear sections
   - Add more examples
   - Translate to other languages

### Development Guidelines

- Follow existing code style
- Comment your code
- Test on multiple browsers
- Update README if needed
- Keep commits atomic and descriptive

---

## 📄 License

This project is licensed under the MIT License.

```
MIT License

Copyright (c) 2025 Quiz App

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👏 Credits

### Design Inspiration
- Original design concept from provided mockup
- Color scheme: Material Design principles
- Icons: Emoji (Unicode standard)
- Typography: System fonts for best performance

### Technologies Used
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with flexbox and grid
- **JavaScript ES6+**: Modern JavaScript features
- **LocalStorage API**: Data persistence
- **SVG**: Scalable vector graphics for icons

### Special Thanks
- All contributors and testers
- Open source community
- Users who provided feedback

---

## 📞 Support

### Get Help
- 📧 Email: support@quizapp.com
- 💬 GitHub Issues: [Report a bug](https://github.com/yourusername/quiz-app/issues)
- 📖 Documentation: [Read the docs](https://github.com/yourusername/quiz-app/wiki)

### Stay Updated
- ⭐ Star this repository
- 👁️ Watch for updates
- 🔔 Enable notifications

---

## 🗺️ Roadmap

### Version 1.1 (Planned)
- [ ] Add more question categories
- [ ] Implement difficulty levels
- [ ] Add timed challenges
- [ ] Sound effects for interactions

### Version 1.2 (Planned)
- [ ] Global leaderboard
- [ ] User achievements system
- [ ] Quiz history with detailed analytics
- [ ] Export quiz results as PDF

### Version 2.0 (Future)
- [ ] Multiplayer mode
- [ ] Custom quiz creation
- [ ] API integration
- [ ] Mobile app version

---

## 📊 Stats

![GitHub stars](https://img.shields.io/github/stars/yourusername/quiz-app?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/quiz-app?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/yourusername/quiz-app?style=social)

---

## 🎉 Quick Start Checklist

- [ ] Download all 3 files (HTML, CSS, JS)
- [ ] Place files in same folder
- [ ] Open `index.html` in browser
- [ ] Click profile to set your name
- [ ] Choose a category to start
- [ ] Complete your first quiz
- [ ] Check your statistics
- [ ] Share your score!

---

<div align="center">

### Made with ❤️ by FluxDev-Tech 

**[⬆ Back to Top](#-quiz-app---interactive-learning-platform)**

</div>
