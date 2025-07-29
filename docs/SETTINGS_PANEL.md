# Settings Panel Documentation

## Overview
The Settings Panel is a comprehensive configuration interface for City Defense Z that allows players to customize their gaming experience across graphics, audio, and language preferences.

## Features

### Graphics Settings
- **Full Screen Toggle**: Enable/disable fullscreen mode
- **V-Sync Toggle**: Enable/disable vertical synchronization for smoother gameplay
- **Resolution Dropdown**: Select from multiple resolution options:
  - 1920x1080 (Full HD) - Default
  - 2560x1440 (2K)
  - 3840x2160 (4K)
  - 1366x768 (HD)
  - 1280x720 (HD)

### Sound Settings
- **Master Volume**: Control overall game volume (0-100%)
- **Music Volume**: Adjust background music volume (0-100%)
- **SFX Volume**: Control sound effects volume (0-100%)
- **Dialogue Volume**: Adjust NPC dialogue and voice volume (0-100%)

### Language Settings
- **Language Selection**: Choose from 7 supported languages with colored national flags and native script:
  - 🇺🇸 English (en) - Default
  - 🇨🇳 Chinese (Simplified) (zh) - 中文 (简体)
  - 🇫🇷 French (fr) - Français
  - 🇩🇪 German (de) - Deutsch
  - 🇷🇺 Russian (ru) - Русский
  - 🇪🇸 Spanish (es) - Español
  - 🇹🇷 Turkish (tr) - Türkçe

## User Interface

### Design Features
- **Consistent Theme**: Matches the game's cyberpunk aesthetic with cyan accents
- **Responsive Layout**: Adapts to different screen sizes
- **Custom Cursor**: Maintains the game's custom cursor throughout
- **Smooth Animations**: Hover effects and transitions for better UX
- **Visual Feedback**: Color-coded volume levels and interactive elements

### Navigation
- **Access Points**:
  - Main Menu → Settings button
  - In-Game → Settings button in top HUD
- **Return Navigation**: Automatically detects previous page and returns appropriately
- **Keyboard Shortcuts**:
  - `Escape`: Return to previous page
  - `Ctrl/Cmd + S`: Save settings
  - `Ctrl/Cmd + R`: Reset to default

## Technical Implementation

### Data Persistence
- Settings are stored in `localStorage` as `cityDefenseZSettings`
- JSON format for easy serialization/deserialization
- Automatic loading on page initialization
- Real-time saving when "Apply Settings" is clicked

### Default Values
```javascript
{
  graphics: {
    fullscreen: false,
    vsync: true,
    resolution: '1920x1080'
  },
  sounds: {
    master: 80,
    music: 70,
    sfx: 90,
    dialogue: 85
  },
  language: 'en'
}
```

### File Structure
- **Main Page**: `src/pages/settings.html`
- **Integration**: Updated `src/pages/index.html` and `src/pages/game.html`
- **Documentation**: `docs/SETTINGS_PANEL.md`

## Usage Instructions

### Accessing Settings
1. From Main Menu: Click the "SETTINGS" button
2. From Game: Click the gear icon in the top HUD

### Modifying Settings
1. **Graphics**: Use toggles for fullscreen/vsync, dropdown for resolution
2. **Sounds**: Drag sliders to adjust volume levels (visual feedback shows percentage)
3. **Language**: Click on language display to open dropdown with colored flags and native names, then select desired language

### Saving Changes
- Click "Apply Settings" to save changes
- Click "Reset to Default" to restore factory settings
- Click "Cancel" to return without saving

### Visual Indicators
- **Volume Levels**: Color-coded feedback (Green >80%, Yellow >50%, Orange >20%, Red ≤20%)
- **Toggle States**: Active toggles show cyan background
- **Language Flags**: Colored national flags with authentic designs and native language names
- **Notifications**: Success/info messages appear in top-right corner

## Future Enhancements

### Planned Features
- **Advanced Graphics**: Anti-aliasing, texture quality, shadow settings
- **Audio Profiles**: Preset configurations for different scenarios
- **Accessibility**: High contrast mode, text size options
- **Performance**: FPS counter, performance monitoring
- **Cloud Sync**: Settings synchronization across devices

### Technical Improvements
- **Real-time Preview**: See changes before applying
- **Profile System**: Multiple setting profiles
- **Export/Import**: Share settings between players
- **Auto-save**: Automatic saving of changes

## Browser Compatibility
- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Required Features**: HTML5, CSS3, ES6+
- **Storage**: localStorage support required
- **Video**: MP4 video background support

## Troubleshooting

### Common Issues
1. **Settings Not Saving**: Check localStorage permissions
2. **Video Background Not Playing**: Ensure MP4 support and file path
3. **Styling Issues**: Verify CSS3 support and font loading
4. **Navigation Problems**: Check JavaScript console for errors

### Reset Options
- **Individual Settings**: Use reset button for specific sections
- **All Settings**: Use "Reset to Default" for complete reset
- **Manual Reset**: Clear localStorage manually if needed

## Development Notes

### Code Organization
- **HTML**: Semantic structure with proper accessibility
- **CSS**: Modular styling with consistent naming conventions
- **JavaScript**: Event-driven architecture with clear separation of concerns

### Performance Considerations
- **Lazy Loading**: Settings load only when accessed
- **Efficient Updates**: Minimal DOM manipulation
- **Memory Management**: Proper event listener cleanup

### Security
- **Input Validation**: All user inputs are validated
- **XSS Prevention**: Proper escaping of user-generated content
- **Data Sanitization**: Settings data is sanitized before storage 