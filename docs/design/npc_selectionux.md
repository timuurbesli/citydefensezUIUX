# NPC Selection UX Design Document - City Defense Z

## 🧭 Context & Purpose

The NPC Selection screen is a critical decision point that appears between days or after key progression milestones (e.g., completing a campaign segment, winning an expedition). This interface allows players to recruit one of two available NPCs into their base, with each selection providing permanent strategic benefits for the current run.

### Trigger Conditions
- Between day transitions
- After completing campaign segments
- Post-expedition victory
- Key progression milestones

## 🎯 Design Objective

Create a visually immersive and strategic UI that presents two fully-voiced, lore-driven characters with different gameplay effects — making the player feel the weight of their decision both narratively and strategically.

## 🖼️ Visual Design Specifications

### Layout Structure

#### Background Design
- **Primary Background**: Blurred base environment or darkened HQ tent interior
- **Atmospheric Effects**: Radio static overlay with subtle signal noise motion
- **Aspect Ratio**: 16:9 (1920x1080 recommended)
- **Visual Treatment**: Dark, tactical command center aesthetic

#### NPC Card Design (Dossier Style)
Each NPC is presented in a vertical card format designed like a military/scientific dossier:

**Card Dimensions**:
- Width: ~600px each
- Spacing Between Cards: ~150px
- Height: Full vertical layout

**Card Components**:
1. **Group Header**
   - Division name (e.g., "RESEARCH DIVISION", "MILITARY DIVISION")
   - Role title (e.g., "RESEARCH OFFICER", "DEFENSE COORDINATOR")
   - Group icon with color coding

2. **Portrait Section**
   - Half-body illustrated character art
   - Professional pose with faction-appropriate attire
   - High-quality character illustration

3. **Character Information**
   - **Name & Rank**: (e.g., "Dr. Sarah Chen", "Sgt. Marcus Daniels")
   - **Flavor Quote**: Subtitle-style presentation with quotation marks
   - **Voice Waveform**: Optional radio static animation for immersion

4. **Specialist Benefits Section**
   - Clear header: "SPECIALIST BENEFITS"
   - Bulleted list with percentage bonuses
   - Color-coded benefit indicators (green "+")

5. **Call-to-Action Button**
   - Full-width button: "SELECT [CHARACTER NAME]"
   - Color coordination with faction theme
   - Hover state with enhanced visual feedback

### Central UI Elements

#### Header Section
- **Primary Text**: "CHOOSE YOUR NEXT SPECIALIST"
- **Context Information**: Day and sector details (e.g., "DAY 14 - SECTOR 7")
- **Typography**: Clean sci-fi sans-serif (Orbitron, Roboto Condensed)

#### Optional UI Components
- **Tooltip Access**: "What do these groups do?" button
- **Cancel/Skip Option**: Bottom-positioned escape option (if applicable)
- **Progress Indicators**: Visual cues for selection timeline

## 🎮 User Experience Flow

### Screen Transition Sequence
1. **Entry Animation**: Screen fades in with tactical overlay effect
2. **Card Presentation**: Both NPC cards animate in with slight flicker/static effect
3. **Interactive State**: Hover states activate voice lines and visual highlights
4. **Selection Process**: Click confirmation with audio feedback
5. **Exit Transition**: Selected card confirmation, screen fade, VO acknowledgment

### Interaction Design
- **Hover Effects**:
  - Voice line playback for character immersion
  - Buff highlights with glow effect
  - Dynamic backlighting in faction colors
- **Click Feedback**:
  - Analog radio confirmation sound
  - Visual selection confirmation
  - Character acknowledgment voice line

## 🧩 Faction System Integration

### Four Core Groups
1. **🌾 Farm Division**: Agricultural and resource management
2. **⚔️ Military Division**: Combat and defense systems
3. **🔬 Research Division**: Technology and innovation
4. **🎯 Expedition Division**: Exploration and reconnaissance

### Specialist Examples

#### Research Division - Dr. Sarah Chen
- **Quote**: *"If only I had more test subjects... We could solve this crisis in weeks, not years."*
- **Benefits**:
  - +100% Research Speed
  - +30% Weapon Efficiency
- **Visual Theme**: Blue color scheme with laboratory elements

#### Military Division - Sgt. Marcus Daniels
- **Quote**: *"These walls won't hold themselves. Give me a week, and I'll turn this camp into a fortress."*
- **Benefits**:
  - +75% Wall Durability
  - +50% Guard Efficiency
- **Visual Theme**: Green/brown military color scheme

## 🎨 Polish & Enhancement Features

### Dynamic Visual Effects
- **Faction Color Backlighting**: Cards glow in faction colors when hovered
- **Background Theming**: Subtle faction-specific backgrounds (lab grids, tactical maps)
- **Selection Confirmation**: Visual and audio feedback system

### Audio Design
- **Voice Acting**: Fully voiced character lines for immersion
- **Sound Effects**: Radio static, confirmation beeps, tactical interface sounds
- **Ambient Audio**: Command center atmosphere

### Accessibility Considerations
- **High Contrast**: Clear visual separation between elements
- **Typography**: Readable sci-fi fonts with appropriate sizing
- **Color Coding**: Faction colors with alternative indicators for colorblind users
- **Audio Cues**: Sound feedback for all interactive elements

## 📐 Technical Specifications

### Display Requirements
- **Resolution**: 1920x1080 native, scalable
- **Color Space**: RGB with high contrast ratios
- **Animation**: 60fps smooth transitions
- **Audio**: High-quality voice compression

### Performance Considerations
- **Loading Time**: Minimize assets for quick screen transitions
- **Memory Usage**: Efficient character portrait rendering
- **Responsive Design**: Maintain quality across different screen sizes

## 🔄 Iteration & Testing Notes

### User Testing Focus Areas
- **Decision Weight**: Does the interface convey the importance of the choice?
- **Character Appeal**: Are both options equally compelling?
- **Information Clarity**: Are benefits clearly communicated?
- **Selection Confidence**: Do players feel confident in their choice?

### Potential Improvements
- **Character Customization**: Allow minor specialization choices
- **Preview System**: Show potential base improvements
- **Lore Integration**: Deeper narrative connections to world events
- **Progressive Unlocks**: More specialists available as game progresses

---

*This document serves as the comprehensive guide for implementing the NPC Selection screen in City Defense Z, ensuring both strategic depth and narrative immersion in the player's specialist recruitment experience.* 