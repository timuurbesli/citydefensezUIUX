# End Game Screen Feature

## Overview
The end game screen is triggered when the player's base health reaches 0, displaying game statistics and allowing players to claim research points for meta upgrades.

## Features

### 1. Game Statistics Display
- **Days Survived**: Shows how many days the player survived
- **Zombies Killed**: Displays total number of zombies eliminated
- **Research Points Earned**: Shows research points reward with tooltip explanation

### 2. Research Points System
- **Calculation**: Research points are calculated based on:
  - Base points per day survived (5 points/day)
  - Health bonus (1 point per 10% health above 50%)
  - Defense units bonus (2 points per unit)
  - Minimum reward of 10 points
- **Tooltip**: Explains that research points can be spent on meta upgrades for future runs
- **Claim System**: One-time claim that adds points to global storage

### 3. Navigation
- **Claim Button**: Claims research points and enables continue button
- **Continue Button**: Navigates to meta upgrade screen
- **Integration**: Seamlessly connects to existing meta upgrade system

## Technical Implementation

### Files Created/Modified
1. **`src/pages/end-game.html`** - New end game screen
2. **`src/scripts/script.js`** - Added game over logic and statistics calculation
3. **`src/pages/game.html`** - Added test button for triggering end game
4. **`src/pages/index.html`** - Added test button in main menu

### Key Methods Added
- `triggerGameOver()` - Handles game over condition
- `calculateZombiesKilled()` - Calculates total zombies killed
- `calculateResearchReward()` - Calculates research points reward
- `EndGameManager` class - Manages end game screen functionality

### Local Storage Integration
- `cityDefenseZ_endGameStats` - Stores game statistics
- `cityDefenseZ_researchPoints` - Global research points storage
- `cityDefenseZ_researchClaimed` - Tracks claim status

## Testing

### Test Buttons Added
1. **Main Menu**: Red "TEST END GAME" button
2. **Game Screen**: Red skull button next to settings

### Test Data
Default test values when no saved game exists:
- Days Survived: 15
- Zombies Killed: 2,347
- Research Reward: 150

## Styling
- Consistent with existing game UI/UX design
- Responsive design for different screen sizes
- Smooth animations and transitions
- Sound effects integration with existing audio system

## Integration Points
- **Game Over Trigger**: Automatically triggered when base health reaches 0
- **Meta Upgrade System**: Research points are added to global storage
- **Save System**: Integrates with existing save/load functionality
- **Audio System**: Uses existing sound effects for consistency

## Future Enhancements
- Leaderboard integration
- Achievement system
- Social sharing features
- Additional statistics tracking
- Customizable research point calculations 