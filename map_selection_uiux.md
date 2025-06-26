# Map Selection Screen - UI/UX Design Document

## 🎯 Overview
The Map Selection screen serves as the critical gateway between the main menu and gameplay, allowing players to choose their deployment zone based on story progression and unlock status. This interface combines tactical briefing elements with visual storytelling to enhance the survival strategy experience.

## 🎮 Core Functionality

### Primary User Goals
- **Select Available Mission Zone** - Choose from unlocked maps based on progression
- **Review Mission Parameters** - Understand survival objectives, duration, and challenges
- **Assess Environmental Threats** - Evaluate map-specific hazards and conditions
- **Confirm Deployment** - Finalize map selection and start mission

### Secondary User Goals
- **Track Progression** - View completion status and unlock requirements
- **Plan Strategy** - Preview map challenges before deployment
- **Experience Narrative** - Immerse in story context for each location

## 🗺️ Map Cards System

### Card Layout Structure
Each map is represented by a **Zone Card** containing:

#### Header Section
```
[ZONE NAME]
[STATUS INDICATOR] [UNLOCK STATE]
```

#### Progress Section
```
MISSION PROGRESS: DAY X/XX
[Progress Bar with completion percentage]
```

#### Environmental Preview
```
[Background Image - Zone Environment]
[Overlay with environmental hazards]
```

#### Footer Section
```
[HAZARD ICONS] [THREAT LEVEL] [SPECIAL CONDITIONS]
```

### Map-Specific Cards

#### 1. Nevada Desert Outpost
```
┌─ DESERT OUTPOST ────────────────┐
│ ⚠️ CRITICAL PRIORITY            │
│                                 │
│ MISSION: DAY 35/50             │
│ PROGRESS: ████████░░ 70%       │
│                                 │
│ [Desert landscape with crash]   │
│                                 │
│ 🌵 SANDSTORMS  ☢️ RADIATION     │
└─────────────────────────────────┘
```

**Visual Elements:**
- **Color Scheme:** Orange/amber (desert theme)
- **Status:** "CRITICAL PRIORITY" (always available)
- **Background:** Crashed aircraft in desert landscape
- **Hazards:** Sandstorm and radiation warning icons

#### 2. Urban Suburban Stronghold
```
┌─ SUBURBAN STRONGHOLD ───────────┐
│ ✅ READY FOR DEPLOYMENT         │
│                                 │
│ MISSION PROGRESS: DAY 0/75     │
│ STATUS: AVAILABLE              │
│                                 │
│ [Abandoned suburban area]       │
│                                 │
│ 🌊 FLOODING  💀 HOSTILES        │
└─────────────────────────────────┘
```

**Visual Elements:**
- **Color Scheme:** Teal/cyan (urban theme)
- **Status:** "READY FOR DEPLOYMENT" (unlocked after Nevada)
- **Background:** Overgrown suburban neighborhood
- **Hazards:** Flooding and hostile presence indicators

#### 3. Industrial Complex
```
┌─ INDUSTRIAL COMPLEX ────────────┐
│ 🔒 LOCKED - COMPLETE PREVIOUS   │
│                                 │
│ MISSION PROGRESS: DAY 0/90     │
│ STATUS: LOCKED                 │
│                                 │
│ [Darkened industrial facility]  │
│                                 │
│ 🔥 FIRE  ☣️ TOXIC              │
└─────────────────────────────────┘
```

**Visual Elements:**
- **Color Scheme:** Dark gray (locked state)
- **Status:** "LOCKED - COMPLETE PREVIOUS ZONES"
- **Background:** Industrial facility silhouette
- **Hazards:** Fire and toxic material warnings

#### 4. Laboratory Facility
```
┌─ LABORATORY ─────────────────────┐
│ 🔒 LOCKED - COMPLETE PREVIOUS    │
│                                  │
│ DAY 0/100    MUTANTS   UNSTABLE │
│                                  │
│ [Medical research facility]      │
│                                  │
│ ⚗️ EXPERIMENTAL  ☢️ RADIATION    │
└──────────────────────────────────┘
```

**Visual Elements:**
- **Color Scheme:** Dark gray (locked state)
- **Status:** Final challenge indicator
- **Background:** High-tech medical facility
- **Hazards:** Experimental dangers and radiation

## 📋 Mission Brief Panel

### Location: Right Side of Screen
### Purpose: Detailed information for selected map

#### Brief Structure
```
┌─ MISSION BRIEF: [ZONE NAME] ──────────────┐
│                                           │
│ ⏱️ DURATION: XX DAYS                      │
│                                           │
│ 🎯 OBJECTIVE: [Primary Mission Goal]      │
│                                           │
│ 📖 NARRATIVE CONTEXT:                     │
│ "[Story quote from mission commander]"    │
│ — [CHARACTER NAME, ROLE]                  │
│                                           │
│ 🌍 ENVIRONMENTAL CHALLENGES:              │
│ • [Challenge 1]                          │
│ • [Challenge 2]                          │
│ • [Challenge 3]                          │
│                                           │
│ 🏆 UNLOCK REQUIREMENT:                    │
│ [Progression requirement]                 │
└───────────────────────────────────────────┘
```

### Map-Specific Brief Content

#### Nevada Desert Outpost
- **Duration:** 50 Days
- **Objective:** Repair aircraft for evacuation
- **Quote:** *"We have to repair our planes to leave, but it will take 50 days. The aircraft sustained critical damage during the crash. We need to scavenge parts and hold our position against hostile forces while engineering teams work around the clock."*
- **Commander:** Hayes, Desert Outpost Security
- **Challenges:**
  - Limited natural cover
  - Extreme temperature variations
  - Sandstorm visibility reduction
  - Radiation exposure from crash site

#### Urban Suburban Stronghold  
- **Duration:** 75 Days
- **Objective:** Establish secure urban foothold
- **Quote:** *"The suburbs offer better resources but increased zombie density. We need to clear house by house and establish a sustainable base while maintaining defensive perimeters."*
- **Commander:** Rodriguez, Urban Operations
- **Challenges:**
  - High zombie population density
  - Limited sight lines between buildings
  - Structural instability
  - Resource scavenging competition

#### Industrial Complex
- **Duration:** 90 Days (TBD)
- **Objective:** Secure manufacturing capabilities
- **Quote:** *"This facility could provide the manufacturing base we need, but the industrial hazards make it extremely dangerous. Chemical spills and structural damage create multiple threat vectors."*
- **Commander:** Chen, Industrial Safety
- **Challenges:**
  - Toxic chemical exposure
  - Fire hazards from damaged systems
  - Complex multi-level facility layout
  - Heavy equipment obstacles

#### Laboratory Facility
- **Duration:** 100 Days
- **Objective:** Develop zombie vaccine
- **Quote:** *"We finally found the vaccine against the zombies, but it will take 100 days to produce it. Can we survive that long? This is our last chance to end the apocalypse."*
- **Commander:** Dr. Martinez, Research Director
- **Challenges:**
  - Experimental creature containment breaches
  - Radiation from research equipment
  - Complex facility security systems
  - Unstable biological specimens

## 🎨 Visual Design System

### Color Coding
- **🟠 Available/Active:** Orange (#FF8C42) - Desert theme
- **🟢 Unlocked/Ready:** Cyan (#00FFFF) - Ready state
- **⚫ Locked:** Dark Gray (#404040) - Inaccessible
- **🔴 Critical:** Red (#FF4444) - Danger/Priority
- **🟡 Warning:** Gold (#FFD700) - Caution

### Typography Hierarchy
- **Zone Names:** Orbitron Bold, 24px, Letter-spacing: 2px
- **Status Text:** Orbitron Regular, 14px, All caps
- **Progress Text:** Roboto Condensed, 12px
- **Brief Headers:** Orbitron Bold, 18px
- **Brief Body:** Roboto Condensed, 14px, Line-height: 1.4
- **Character Names:** Orbitron Regular, 12px

### Icon System
- **🌵 Environmental:** Desert, Urban, Industrial themes
- **⚠️ Hazards:** Fire, Radiation, Toxic, Flood
- **🎯 Objectives:** Mission-specific goals
- **🔒 Status:** Lock, Unlock, Complete, Available
- **👤 Characters:** Role-based commander icons

## 📱 Interactive Elements

### Zone Card Interactions
- **Hover State:** 
  - Glow effect matching zone color
  - Slight scale increase (1.05x)
  - Enhanced shadow depth
- **Click State:**
  - Select zone for detailed briefing
  - Update mission brief panel
  - Highlight deployment option
- **Disabled State:**
  - Desaturated appearance
  - Lock overlay
  - Tooltip with unlock requirement

### Deployment Confirmation
```
┌─ CONFIRM DEPLOYMENT ─────────────────┐
│                                      │
│ 🚁 DEPLOY TO: [SELECTED ZONE]       │
│                                      │
│ [Large confirmation button]          │
│                                      │
└──────────────────────────────────────┘
```

**Button States:**
- **Default:** Orange gradient with pulse animation
- **Hover:** Brighter orange with enhanced glow
- **Disabled:** Gray with lock icon (if no zone selected)

### Navigation Elements
- **Back to Menu:** Top-left corner button
- **Settings:** Top-right corner gear icon
- **Help/Controls:** Bottom-right question mark

## 🎵 Audio Design

### Sound Effects
- **Zone Selection:** Tactical radio click
- **Hover:** Subtle electronic hum
- **Deployment:** Military confirmation tone
- **Locked Zone:** Negative access beep
- **Background:** Ambient military/survival atmosphere

### Voice Lines
- **Zone Selection:** Brief commander introduction
- **Deployment:** "Mission parameters confirmed. Deploy when ready."
- **Locked Access:** "Previous objectives must be completed first."

## 📱 Responsive Design

### Desktop (1920x1080)
- 4-card grid layout (2x2)
- Full mission brief panel
- Maximum visual detail

### Tablet (768x1024)
- 2-card grid layout (2x1) with scrolling
- Condensed mission brief
- Touch-optimized buttons

### Mobile (375x667)
- Single column card layout
- Collapsible mission brief
- Swipe navigation between zones

## ♿ Accessibility Features

### Visual Accessibility
- **High Contrast Mode:** Alternative color scheme
- **Text Scaling:** Support for 125%-200% zoom
- **Color Blind Support:** Icon + text labeling for all states

### Navigation Accessibility
- **Keyboard Navigation:** Tab order through zones
- **Screen Reader:** Full ARIA labeling
- **Focus Indicators:** Clear visual focus states

### Interaction Accessibility
- **Large Touch Targets:** Minimum 44px interactive areas
- **Clear Feedback:** Visual and audio confirmation
- **Error Prevention:** Confirmation dialogs for critical actions

## 🔄 State Management

### Progression States
1. **First Visit:** Only Nevada available
2. **Nevada Complete:** Urban unlocked
3. **Urban Complete:** Industrial unlocked  
4. **Industrial Complete:** Laboratory unlocked
5. **All Complete:** Free selection mode

### Save Data Integration
- **Current Progress:** Days survived per zone
- **Completion Status:** Which zones are unlocked/completed
- **Best Scores:** Longest survival time per zone
- **Preferences:** Last selected zone, audio settings

## 🚀 Implementation Priority

### Phase 1 (MVP)
- ✅ Basic 4-zone card layout
- ✅ Unlock progression system
- ✅ Mission brief panel
- ✅ Deployment confirmation

### Phase 2 (Enhanced)
- 🔄 Hover animations and transitions
- 🔄 Audio integration
- 🔄 Visual effects (particle systems)
- 🔄 Advanced unlock animations

### Phase 3 (Polish)
- ⏳ Voice acting integration
- ⏳ Dynamic weather effects per zone
- ⏳ 3D preview models
- ⏳ Achievement integration

## 🎯 Success Metrics

### User Experience Goals
- **Selection Time:** < 30 seconds average
- **Comprehension:** 95% understand unlock system
- **Engagement:** Increased mission brief read rate
- **Progression:** Clear understanding of next objectives

### Technical Performance
- **Load Time:** < 2 seconds on target hardware
- **Smooth Transitions:** 60fps animations
- **Memory Usage:** Optimized asset loading
- **Cross-Platform:** Consistent experience across devices

---

*This design document serves as the foundation for implementing the Map Selection screen, ensuring both tactical functionality and immersive storytelling align with the overall City Defense Z experience.* 