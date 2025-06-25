# City Defense Z - UI/UX Interactive Mockup

A fast, interactive HTML/CSS/JavaScript prototype demonstrating the improved UI/UX design for City Defense Z tower defense game.

## Features

### 🎮 Core Game Interface
- **Resource Management Panel** - Track Resources, Ammunition, Food, Research Points, and Population
- **Day/Night Cycle** - Prominent day counter with animated progress bar
- **Game Speed Controls** - Pause, Play, 2x, and 3x speed options
- **Base Health Bar** - Visual health indicator with color coding

### 🏗️ Building System
- **Building Cards** - Purchase buildings with resources
- **Affordability Indicators** - Green/red borders showing purchase availability
- **Interactive Cards** - Click to purchase, visual feedback on transactions

### ⚔️ Defense Management
- **Defense Units Panel** - Purchase and deploy various unit types
- **Expandable Drawer** - Click population to view deployed units
- **Unit Placement** - Select units and place them on the battlefield grid
- **Real-time Updates** - Live counts and status updates

### 📰 Information Systems
- **Breaking News Ticker** - Scrolling world updates and story progression
- **Tooltips** - Hover over elements for detailed information
- **Visual Feedback** - Floating text, animations, and state changes

## How to Use

### 🖱️ Interactive Elements

**Resource Panel:**
- Click the **Population** resource to expand/collapse the defense units drawer
- Hover over resources for detailed tooltips

**Defense Units:**
1. Click **+ buttons** to purchase units (requires ammunition)
2. Click **unit buttons** to select for placement
3. Click on the **placement grid** to deploy selected units

**Building Cards:**
- Click cards to purchase buildings (requires resources)
- Green border = affordable, Red border = too expensive

**Game Controls:**
- Use **speed controls** to change game pace
- Click **End Day** to transition to night phase
- **End Day button** changes color based on readiness:
  - Green: Ready to proceed
  - Yellow: Some warnings
  - Red: Critical issues

### 🎯 Game Simulation Features

- **Resource Generation** - Resources slowly generate over time
- **Day/Night Cycle** - Complete day/night transitions with events
- **Combat Simulation** - Night phase includes combat events
- **Dynamic UI States** - UI elements respond to game conditions

## Technical Implementation

### 🛠️ Technologies Used
- **HTML5** - Semantic structure
- **CSS3** - Advanced styling with animations and gradients
- **Vanilla JavaScript** - Interactive functionality and game logic
- **Font Awesome** - Icons and visual elements

### 🎨 Design Features
- **Desert Theme** - Warm color palette matching game aesthetic
- **Responsive Design** - Scales for different screen sizes
- **Smooth Animations** - CSS transitions and keyframe animations
- **Visual Hierarchy** - Clear information priority and layout

### 🔧 Architecture
- **GameState Class** - Manages all game data and state
- **UIManager Class** - Handles all UI interactions and updates
- **Event-Driven Design** - Clean separation of concerns
- **Modular Structure** - Easy to extend and modify

## Getting Started

1. Open `index.html` in a modern web browser
2. The mockup will initialize automatically
3. Check the browser console for feature instructions
4. Interact with all elements to experience the full UI/UX design

## UI/UX Improvements Demonstrated

### ✨ From Original Design
- **Better Visual Hierarchy** - Prominent day counter, organized resource panel
- **Enhanced Interactivity** - Expandable drawers, placement system, tooltips
- **Improved Feedback** - Visual responses, state changes, floating text
- **Clearer Information** - Better labeling, color coding, affordability indicators
- **Responsive Layout** - Adapts to different screen sizes
- **Modern Aesthetics** - Contemporary design with smooth animations

### 🎯 Key UX Enhancements
- **Reduced Cognitive Load** - Grouped related functions
- **Immediate Feedback** - Visual confirmation of all actions
- **Progressive Disclosure** - Expandable sections for detailed information
- **Error Prevention** - Clear affordability and availability states
- **Consistency** - Unified design language throughout interface

## Future Enhancements

This mockup demonstrates the core UI/UX improvements. Additional features could include:
- Building placement grid for base construction
- Research tree interface
- Settings and options menus
- Save/load game functionality
- Multiplayer lobby interface
- Achievement and progression systems

---

**Note:** This is a functional prototype designed to demonstrate UI/UX improvements for the City Defense Z game. All interactions are simulated and represent the intended user experience. 