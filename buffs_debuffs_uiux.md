# City Defense Z - Buffs & Debuffs System UI/UX Design

## Overview
The Buffs & Debuffs system provides visual feedback for temporary status effects that modify gameplay mechanics. This includes positive effects from recruited NPCs and negative effects from resource shortages.

## System Categories

### 1. NPC Buffs (Positive Effects)
Active buffs granted by recruited NPCs that enhance various aspects of gameplay.

#### Available NPC Buffs:
- **Soldier's Leadership** (Sgt. Jackson)
  - Effect: +20% damage for all soldiers
  - Icon: Military chevron with upward arrow
  - Color: Green (#00ff80)

- **Medical Support** (Dr. Chen)
  - Effect: +30% healing rate for all units
  - Icon: Medical cross with plus symbol
  - Color: Blue (#0080ff)

- **Engineering Expertise** (Maya Rodriguez)
  - Effect: +25% building construction speed
  - Icon: Gear with hammer
  - Color: Orange (#ff8c42)

- **Scout's Intel** (Marcus Reed)
  - Effect: +15% resource gathering efficiency
  - Icon: Eye with magnifying glass
  - Color: Yellow (#ffcc00)

### 2. Resource Debuffs (Negative Effects)
Penalties applied when critical resources fall below required thresholds.

#### Hunger Debuff (Food Shortage):
- **Trigger**: Current food < (Population × Daily Food Requirement)
- **Effects**: 
  - Soldiers deal 50% less damage
  - All units have 50% less HP (vulnerability)
- **Icon**: Empty plate or skull
- **Color**: Red (#ff4444)
- **Severity Levels**:
  - **Critical** (0-25% of required food): Full debuff effects
  - **Severe** (26-50% of required food): 75% of debuff effects
  - **Moderate** (51-75% of required food): 50% of debuff effects
  - **Mild** (76-99% of required food): 25% of debuff effects

## Visual Design

### Layout Structure
```
┌─────────────────────────────────────┐
│  ACTIVE EFFECTS                     │
├─────────────────────────────────────┤
│  ┌───┐ ┌───┐ ┌───┐     ┌───┐       │
│  │ + │ │ + │ │ + │ ... │ - │       │
│  └───┘ └───┘ └───┘     └───┘       │
│  BUFFS              DEBUFFS         │
└─────────────────────────────────────┘
```

### Effect Card Design
Each buff/debuff displayed as a compact card:
- **Size**: 60x60px base, expandable on hover
- **Background**: Semi-transparent with effect-type color border
- **Icon**: Central symbol representing the effect
- **Border**: 2px solid, color-coded by effect type
- **Animation**: Subtle glow pulse for active effects

### Color Coding System
- **Buffs**: Green border (#00ff80) with positive glow
- **Debuffs**: Red border (#ff4444) with warning glow
- **Neutral**: Gray border (#666666) for informational effects

### Typography
- **Effect Names**: 'Orbitron', 14px, bold
- **Descriptions**: 'Roboto', 12px, regular
- **Values**: 'Orbitron', 13px, bold, color-coded

## Interactive Features

### Hover Details
When hovering over an effect card:
- **Expand**: Card grows to 200x120px
- **Show Details**: 
  - Effect name
  - Description
  - Numerical values
  - Source (which NPC or condition)
  - Duration (if temporary)

### Visual Feedback
- **Positive Effects**: Green glow animation
- **Negative Effects**: Red pulsing warning
- **New Effects**: Brief flash animation when applied
- **Expiring Effects**: Fade-out animation

## Technical Implementation

### Effect Data Structure
```javascript
{
  id: "soldier_leadership",
  name: "Soldier's Leadership",
  type: "buff",
  source: "Sgt. Jackson",
  icon: "fas fa-chevron-up",
  color: "#00ff80",
  description: "Soldiers deal +20% damage",
  value: "+20%",
  category: "combat"
}
```

### Integration Points
- **Main Game UI**: Top-right corner, below resource counters
- **Combat Interface**: Temporary overlay during battles
- **NPC Management**: Show which NPCs provide which buffs
- **Resource Management**: Warning indicators for approaching debuffs

## Responsive Design
- **Desktop**: Full effect cards with hover details
- **Tablet**: Condensed cards, tap for details
- **Mobile**: Icon-only view, tap for popup details

## Accessibility Features
- **Screen Reader**: Full effect descriptions
- **Color Blind**: Icon shapes differentiate effect types
- **High Contrast**: Alternative color scheme option
- **Keyboard Navigation**: Tab through effects, Enter for details

## Animation System
- **Buff Application**: Green sparkle effect
- **Debuff Application**: Red warning flash
- **Effect Stacking**: Number badge for multiple instances
- **Critical Warnings**: Urgent pulsing for severe debuffs

## Performance Considerations
- **Efficient Rendering**: Only update when effects change
- **Memory Management**: Clean up expired effect animations
- **Mobile Optimization**: Reduced particle effects on low-end devices

## Future Enhancements
- **Effect Combinations**: Visual indicators for synergistic effects
- **Temporary Buffs**: Time-based effects from consumables
- **Environmental Effects**: Weather or location-based modifiers
- **Player Customization**: Ability to rearrange effect display order 