# City Defense Z - UI/UX Interactive Mockup

A fast, interactive HTML/CSS/JavaScript prototype demonstrating the improved UI/UX design for City Defense Z tower defense game.

## 📁 Project Structure

```
citydefensezUIUX/
├── src/                          # Source code
│   ├── pages/                    # HTML pages
│   │   ├── index.html           # Main menu
│   │   ├── game.html            # Game interface
│   │   ├── mapselection.html    # Map selection
│   │   ├── leaderboard.html     # Leaderboard
│   │   ├── meta-upgrade.html    # Meta upgrades
│   │   ├── expedition-planning.html # Expedition planning
│   │   ├── buffs-debuffs.html   # Buffs/Debuffs interface
│   │   ├── npcdialogue.html     # NPC dialogue
│   │   ├── npcselection.html    # NPC selection
│   │   ├── save-selection.html  # Save selection
│   │   └── test.html           # Test page
│   ├── styles/                  # CSS stylesheets
│   │   └── style.css           # Main stylesheet
│   ├── scripts/                 # JavaScript files
│   │   └── script.js           # Main script
│   ├── components/              # Reusable UI components
│   └── assets/                  # Static assets
│       ├── images/             # General images
│       ├── videos/             # Video files
│       ├── cards/              # Game card images
│       ├── maps/               # Map images
│       └── npcs/               # NPC images
├── docs/                        # Documentation
│   └── design/                 # Design documentation
│       ├── City_Defense_Z_UI_UX_Document.md
│       ├── buffs_debuffs_uiux.md
│       ├── expeditionplanning.md
│       ├── leaderboard_uiux.md
│       ├── map_selection_uiux.md
│       ├── Meta_Upgrade_UX_Design.md
│       ├── npc_dialogue_uiux.md
│       └── npc_selectionux.md
├── tests/                       # Test files
├── public/                      # Public build files
├── package.json                 # Project configuration
└── README.md                   # This file
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd citydefensezUIUX
   ```

2. **Open the project**
   - Open `src/pages/index.html` in a modern web browser
   - Or use a local server for better development experience

3. **Development**
   - All HTML files are in `src/pages/`
   - CSS is in `src/styles/style.css`
   - JavaScript is in `src/scripts/script.js`
   - Assets are organized in `src/assets/`

## 🎮 Features

### Core Game Interface
- **Resource Management Panel** - Track Resources, Ammunition, Food, Research Points, and Population
- **Day/Night Cycle** - Prominent day counter with animated progress bar
- **Game Speed Controls** - Pause, Play, 2x, and 3x speed options
- **Base Health Bar** - Visual health indicator with color coding

### Building System
- **Building Cards** - Purchase buildings with resources
- **Affordability Indicators** - Green/red borders showing purchase availability
- **Interactive Cards** - Click to purchase, visual feedback on transactions

### Defense Management
- **Defense Units Panel** - Purchase and deploy various unit types
- **Expandable Drawer** - Click population to view deployed units
- **Unit Placement** - Select units and place them on the battlefield grid
- **Real-time Updates** - Live counts and status updates

### Information Systems
- **Breaking News Ticker** - Scrolling world updates and story progression
- **Tooltips** - Hover over elements for detailed information
- **Visual Feedback** - Floating text, animations, and state changes

## 🛠️ Technical Implementation

### Technologies Used
- **HTML5** - Semantic structure
- **CSS3** - Advanced styling with animations and gradients
- **Vanilla JavaScript** - Interactive functionality and game logic
- **Font Awesome** - Icons and visual elements

### Design Features
- **Desert Theme** - Warm color palette matching game aesthetic
- **Responsive Design** - Scales for different screen sizes
- **Smooth Animations** - CSS transitions and keyframe animations
- **Visual Hierarchy** - Clear information priority and layout

### Architecture
- **GameState Class** - Manages all game data and state
- **UIManager Class** - Handles all UI interactions and updates
- **Event-Driven Design** - Clean separation of concerns
- **Modular Structure** - Easy to extend and modify

## 📖 Documentation

Detailed design documentation is available in the `docs/design/` directory:

- **City_Defense_Z_UI_UX_Document.md** - Main UI/UX design document
- **buffs_debuffs_uiux.md** - Buffs/Debuffs interface design
- **expeditionplanning.md** - Expedition planning interface
- **leaderboard_uiux.md** - Leaderboard design specifications
- **map_selection_uiux.md** - Map selection interface
- **Meta_Upgrade_UX_Design.md** - Meta upgrade system design
- **npc_dialogue_uiux.md** - NPC dialogue system
- **npc_selectionux.md** - NPC selection interface

## 🎯 Key UX Improvements

### From Original Design
- **Better Visual Hierarchy** - Prominent day counter, organized resource panel
- **Enhanced Interactivity** - Expandable drawers, placement system, tooltips
- **Improved Feedback** - Visual responses, state changes, floating text
- **Clearer Information** - Better labeling, color coding, affordability indicators
- **Responsive Layout** - Adapts to different screen sizes
- **Modern Aesthetics** - Contemporary design with smooth animations

### UX Enhancements
- **Reduced Cognitive Load** - Grouped related functions
- **Immediate Feedback** - Visual confirmation of all actions
- **Progressive Disclosure** - Expandable sections for detailed information
- **Error Prevention** - Clear affordability and availability states
- **Consistency** - Unified design language throughout interface

## 🔧 Development Guidelines

### File Organization
- Keep HTML files in `src/pages/`
- CSS goes in `src/styles/`
- JavaScript in `src/scripts/`
- Assets organized by type in `src/assets/`
- Documentation in `docs/design/`

### Asset Management
- **Images**: General images in `src/assets/images/`
- **Cards**: Game cards in `src/assets/cards/`
- **Maps**: Map images in `src/assets/maps/`
- **Videos**: Video files in `src/assets/videos/`
- **NPCs**: NPC images in `src/assets/npcs/`

## 📝 License

MIT License - See LICENSE file for details

---

**Note:** This is a functional prototype designed to demonstrate UI/UX improvements for the City Defense Z game. All interactions are simulated and represent the intended user experience. 