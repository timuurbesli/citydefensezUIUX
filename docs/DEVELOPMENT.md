# Development Guide - City Defense Z UI/UX

## 📁 File Structure Overview

The project is now organized with a clean, maintainable structure:

### Source Code (`src/`)
- **`pages/`** - All HTML files for different game screens
- **`styles/`** - CSS stylesheets (currently one main file)
- **`scripts/`** - JavaScript files (currently one main file)
- **`components/`** - For future modular UI components
- **`assets/`** - All media files organized by type

### Assets Organization (`src/assets/`)
- **`images/`** - General images (backgrounds, logos, NPCs)
- **`videos/`** - Video files (main menu video)
- **`cards/`** - Game card images (buildings, upgrades)
- **`maps/`** - Map selection images
- **`npcs/`** - NPC character images (currently empty)

### Documentation (`docs/`)
- **`design/`** - All UI/UX design documentation
- **`DEVELOPMENT.md`** - This development guide

## 🔧 Development Workflow

### Working with HTML Files

All HTML files are in `src/pages/`. When editing these files, you'll need to update asset paths:

**Old paths:**
```html
<img src="background.png" alt="Background">
<link rel="stylesheet" href="style.css">
<script src="script.js"></script>
```

**New paths:**
```html
<img src="../assets/images/background.png" alt="Background">
<link rel="stylesheet" href="../styles/style.css">
<script src="../scripts/script.js"></script>
```

### Asset Path Reference

From any HTML file in `src/pages/`, use these relative paths:

```
Styles:     ../styles/style.css
Scripts:    ../scripts/script.js
Images:     ../assets/images/filename.png
Videos:     ../assets/videos/filename.mp4
Cards:      ../assets/cards/filename.png
Maps:       ../assets/maps/filename.png
NPCs:       ../assets/npcs/filename.png
```

### Adding New Assets

1. **Images** → Place in appropriate subfolder under `src/assets/`
2. **Update references** → Change HTML/CSS paths accordingly
3. **Keep organized** → Use descriptive filenames

## 🎯 Best Practices

### File Naming
- Use lowercase with hyphens: `main-menu.html`
- Be descriptive: `expedition-planning.html`
- Keep consistent: all HTML files in `pages/`

### Asset Management
- **Optimize images** before adding (compress PNGs/JPGs)
- **Group related assets** (all cards together, all maps together)
- **Use descriptive names** (`house-card.png` vs `card1.png`)

### Code Organization
- Keep HTML semantic and clean
- Organize CSS with comments for different sections
- Use consistent JavaScript patterns

## 🚀 Development Setup

### Option 1: Simple Browser Opening
```bash
# Open the main file directly
open src/pages/index.html
# or
start src/pages/index.html
```

### Option 2: Local Server (Recommended)
```bash
# Using Python 3
cd src/pages
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server src/pages -p 8000

# Using PHP
cd src/pages
php -S localhost:8000
```

### Option 3: Live Server (VS Code Extension)
1. Install "Live Server" extension
2. Right-click on `src/pages/index.html`
3. Select "Open with Live Server"

## 📝 Common Tasks

### Adding a New Page
1. Create HTML file in `src/pages/`
2. Link to existing CSS: `<link rel="stylesheet" href="../styles/style.css">`
3. Link to existing JS: `<script src="../scripts/script.js"></script>`
4. Update navigation links in other pages

### Adding New Styles
- Add to `src/styles/style.css`
- Consider breaking into multiple files if it gets large
- Keep styles organized with comments

### Adding New Scripts
- Add to `src/scripts/script.js`
- Consider modular approach for large features
- Keep functions organized and documented

## 🔍 Testing

### Manual Testing Checklist
- [ ] All pages load correctly
- [ ] All images display properly
- [ ] CSS styles apply correctly
- [ ] JavaScript functions work
- [ ] Navigation between pages works
- [ ] Responsive design works on different screen sizes

### Asset Verification
- [ ] No broken image links
- [ ] All videos play correctly
- [ ] All interactive elements work
- [ ] Performance is acceptable

## 📊 File Size Guidelines

### Images
- **Backgrounds**: < 500KB (optimize large images)
- **Cards**: < 100KB each
- **Icons/Logos**: < 50KB each
- **Screenshots**: < 200KB each

### Videos
- **Main menu video**: Consider compression if > 50MB
- **Use appropriate formats**: MP4 for best compatibility

## 🚨 Troubleshooting

### Common Issues

**Images not showing:**
- Check file path (relative to HTML file)
- Verify file exists in correct location
- Check file extension case (`.png` vs `.PNG`)

**CSS not loading:**
- Verify path to `../styles/style.css`
- Check for syntax errors in CSS
- Clear browser cache

**JavaScript not working:**
- Check browser console for errors
- Verify path to `../scripts/script.js`
- Check for syntax errors

### Path Debugging
If unsure about paths, use browser developer tools:
1. Right-click → Inspect Element
2. Check Console tab for 404 errors
3. Fix broken paths accordingly

## 📈 Future Improvements

### Potential Enhancements
1. **Build Process**: Add webpack/parcel for optimization
2. **CSS Preprocessor**: Consider SASS/LESS for better CSS organization
3. **Component System**: Break down into reusable components
4. **Testing**: Add automated testing for JavaScript functions
5. **Optimization**: Image optimization pipeline
6. **Documentation**: Auto-generate documentation from code

### Suggested File Structure Evolution
```
src/
├── components/
│   ├── resource-panel/
│   ├── building-cards/
│   └── defense-units/
├── styles/
│   ├── base.css
│   ├── components.css
│   └── pages.css
├── scripts/
│   ├── game-state.js
│   ├── ui-manager.js
│   └── utils.js
```

---

This structure provides a solid foundation for continued development while maintaining organization and scalability. 