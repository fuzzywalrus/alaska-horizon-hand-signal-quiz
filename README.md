# Alaska Airlines Hand Signals Quiz ✈️

A comprehensive training application for aircraft marshalling hand signals, designed specifically for Alaska Airlines and Horizon Air ground operations teams.

![Alaska Airlines Hand Signals Quiz](https://img.shields.io/badge/Alaska%20Airlines-Hand%20Signals%20Quiz-01426A?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMSA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDMgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K)

This is hosted at [alaska-horizon-hand-signal-quiz.greggant.com](https://alaska-horizon-hand-signal-quiz.greggant.com/)

## Overview

This interactive quiz application helps ground crew personnel master the 26 essential aircraft marshalling hand signals used in Alaska Airlines and Horizon Air operations. Built with modern web technologies and featuring Alaska Airlines branding, it provides a comprehensive training experience with multiple difficulty levels and assessment modes.

## Features

### Multiple Quiz Modes
- **Easy Mode**: 4 multiple choice answers
- **Medium Mode**: 5 multiple choice answers  
- **Hard Mode**: 6 multiple choice answers
- **Expert Typing Mode**: Type the answer manually with spell tolerance

### Comprehensive Assessment Options
- **26 Questions (Complete)**: Every signal tested exactly once
- **40 Questions**: Extended practice with repetition
- **60 Questions**: Intensive training session

### Advanced Distractor System
- **Smart Distractors**: Plausible but incorrect aviation terminology
- **Similar Answers**: Confusing alternatives that test precise knowledge
- **Expert Mode**: Minimum 2 similar distractors for maximum challenge

### Gamification Features
- **Real-time Feedback**: Instant correct/incorrect responses
- **Score Tracking**: Percentage-based performance metrics
- **Confetti Celebration**: Animated reward for 90%+ scores
- **Progress Indicators**: Question counter and completion status

### Alaska Airlines Branding
- **Official Color Scheme**: Alaska Blue, Light Blue, Green, Orange
- **Professional Design**: Clean, modern interface
- **Dark Mode Support**: Optimized for all lighting conditions
- **Responsive Layout**: Works on desktop, tablet, and mobile

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Images**: Next.js Image Optimization
- **Deployment**: Static Site Generation

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd handsingals
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
# Build static site
npm run build

# The static files will be generated in the 'out' directory
```

## 📚 Hand Signals Covered

The quiz includes all 26 standard aircraft marshalling signals:

| Signal | Description |
|--------|-------------|
| ALL CLEAR | Indicates area/operation is clear |
| APPLY AIR | Engage pneumatic systems |
| COME AHEAD | Direct aircraft to move forward |
| CONNECT HEADSET | Establish communication |
| CUT ENGINE | Shut down aircraft engine |
| DISCONNECT PCA | Remove pre-conditioned air |
| DISENGAGE AIR | Release pneumatic systems |
| EMERGENCY STOP | Immediate halt for safety |
| END MARSHALLING | Conclude guidance operations |
| ENGINE FIRE | Alert for engine fire emergency |
| HOLD POSITION | Maintain current location |
| INSERT CHOCKS | Place wheel chocks |
| INSERT GROUND POWER | Connect electrical power |
| LEFT TURN | Direct aircraft to turn left |
| NEGATIVE | Negative response/not clear |
| NEXT MARSHALLER | Transfer to another guide |
| NORMAL STOP | Standard stopping procedure |
| RELEASE BRAKES | Disengage aircraft brakes |
| REMOVE CHOCKS | Remove wheel chocks |
| REMOVE GROUND POWER | Disconnect electrical power |
| RIGHT TURN | Direct aircraft to turn right |
| SET BRAKES | Engage aircraft brakes |
| SLOW DOWN | Reduce aircraft speed |
| START ENGINE | Begin engine start procedure |
| THIS MARSHALLER | Identify current guide |
| THUMBS UP | Positive acknowledgment |

## Usage Guide

### Starting a Quiz
1. Select your preferred difficulty mode
2. Choose number of questions (26 for complete coverage)
3. Toggle distractor answers for added challenge
4. Click "Start Quiz"

### Taking the Quiz
- **Multiple Choice**: Click your answer, then "Submit Answer"
- **Typing Mode**: Type the signal name and press "Submit Answer"
- **Feedback**: Instant visual feedback with correct answer highlighting
- **Auto-progression**: Questions advance automatically after 1.5 seconds

### Understanding Results
- **Score Display**: Shows correct answers out of total
- **Percentage**: Calculated performance rating
- **Performance Messages**: Encouragement based on score
- **Confetti**: Celebrates 90%+ achievement

## Configuration

### Image Management
- Place hand signal images in `public/images/`
- Use `.webp` format for optimal performance
- Images are automatically optimized by Next.js

### Customization
- **Colors**: Modify `tailwind.config.ts` for different branding
- **Signals**: Update `lib/handSignals.ts` to add/modify signals
- **Distractors**: Enhance `similarDistractors` object for new confusing alternatives

## Testing

The application includes comprehensive testing for:
- All 26 hand signals display correctly
- Quiz logic and scoring accuracy
- Distractor system functionality
- Responsive design across devices
- Accessibility compliance

## Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile**: iOS Safari, Chrome Mobile
- **Features**: Progressive Web App capabilities

## Security & Privacy

- **No Data Collection**: No personal information stored
- **Local Storage Only**: Quiz preferences saved locally
- **No Analytics**: Privacy-focused design
- **Static Deployment**: No server-side processing

## Contributing

### Adding New Signals
1. Add image to `public/images/`
2. Update `handSignals` array in `lib/handSignals.ts`
3. Add similar distractors to `similarDistractors` object
4. Test thoroughly across all modes

### Reporting Issues
Please report bugs or feature requests through the appropriate channels.

##  License

This application is designed specifically for Alaska Airlines and Horizon Air training purposes.

## Performance Features

### Optimization
- **Static Generation**: Pre-built pages for fast loading
- **Image Optimization**: Automatic WebP conversion and sizing
- **Code Splitting**: Optimized bundle sizes
- **Caching**: Efficient resource caching

### Accessibility
- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: ARIA labels and semantic HTML
- **High Contrast**: Accessible color combinations
- **Focus Management**: Clear focus indicators

