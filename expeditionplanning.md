# City Defense Z - Expedition Planning UI/UX Design Document
*Strategic NPC Deployment Interface Design*

## Overview

**Interface Type:** Full Screen Interactive Interface  
**Function:** NPC selection and expedition planning for resource gathering missions  
**Access:** From main game interface via "Expeditions" button  
**Art Style:** Post-apocalyptic tactical command center with dark theme and orange accents  
**Layout:** Top expedition selector + center NPC grid + right summary panel  

**Key Design Principles:**
- Clear risk assessment and reward communication
- Intuitive NPC selection with visual feedback
- Strategic resource cost transparency
- Streamlined expedition deployment workflow

---

## 1. Interface Layout Structure

### 1.1 Overall Screen Design
**Background:** Dusty outpost command center with tactical hologram overlay  
**Screen Size:** Full viewport (1920x1080 reference)  
**Theme:** Dark military interface with warm amber/orange accents  
**Typography:** Clean sci-fi fonts (Orbitron for headers, Rajdhani for body text)  
**Navigation:** Back button to main game, resource counters persistent in header  

### 1.2 Header Resource Display
**Location:** Top-right corner of screen  
**Elements:**
- **Food Counter:** 🥫 124 units with food icon
- **Ammo Counter:** 🔫 550 rounds with bullet icon  
- **Research Points:** 🧬 75 RP with flask icon
- **General Resources:** ⚙️ 42 units with gear icon
**Visual:** Semi-transparent dark background with orange glow on sufficient resources

### 1.3 Main Title
**Location:** Top-left of screen  
**Text:** "EXPEDITION PLANNING"  
**Font:** Large, bold Orbitron font  
**Color:** White with subtle orange glow  
**Size:** Prominent but not overwhelming other elements  

---

## 2. Expedition Type Selection (Top Section)

### 2.1 Expedition Selector Layout
**Position:** Upper portion of screen, centered  
**Layout:** Three horizontal expedition cards side by side  
**Spacing:** Even distribution with clear visual separation  
**Selection:** Click to select, visual highlighting of active selection  

### 2.2 Small Expedition Card
**Visual State:** Available from start  
**Background:** Dark card with green accent trim  
**Risk Indicator:** "LOW RISK" badge in green  
**Content Structure:**
- **Icon:** 🏠 Desert ruins building symbol
- **Title:** "Small Expedition"  
- **Location:** "Desert Ruins"  
- **Duration:** "Duration: 3 Days"  
- **Status:** "Unlocked" in green text
- **Hover Effect:** Subtle glow and tooltip showing detailed risk/reward info

### 2.3 Medium Expedition Card (Featured/Selected)
**Visual State:** Available and currently selected  
**Background:** Dark card with prominent orange accent border  
**Risk Indicator:** "HIGH RISK" badge in orange  
**Content Structure:**
- **Icon:** 🏢 Abandoned suburbs building cluster
- **Title:** "Medium Expedition"  
- **Location:** "Abandoned Suburbs"  
- **Duration:** "Duration: 4 Days"  
- **Status:** "Unlocked" in orange text
- **Selection State:** Glowing orange border indicating active selection

### 2.4 Large Expedition Card
**Visual State:** Locked/Unavailable  
**Background:** Dark card with red accent trim  
**Risk Indicator:** "HIGH RISK" badge in red  
**Content Structure:**
- **Icon:** 🏭 Military lab complex with lock overlay
- **Title:** "Large Expedition"  
- **Location:** "Military Lab Complex"  
- **Duration:** "Duration: 5 Days"  
- **Status:** "🔒 Locked" with lock icon
- **Lock State:** Dimmed overall appearance with clear lock indicator

### 2.5 Expedition Card Interaction
**Hover Effects:**
- **Available Cards:** Subtle brightness increase and border glow
- **Locked Cards:** Tooltip explaining unlock requirements
- **Selected Card:** Pulsing orange glow animation

**Tooltips (Hover Information):**
- **Risk Details:** Specific failure percentages and consequences
- **Reward Tiers:** Expected loot quality and types
- **Unlock Requirements:** Research point or progression prerequisites

---

## 3. NPC Selection Area (Center Section)

### 3.1 NPC Grid Layout
**Position:** Center of screen below expedition selector  
**Layout:** 2x2 grid of NPC selection cards  
**Title:** "SELECT EXPEDITION MEMBERS" with selection counter "2 of 4 selected"  
**Maximum Selection:** 2 NPCs maximum enforced via UI state  

### 3.2 Individual NPC Card Design

#### 3.2.1 Marcus Reed (Scout) - Selected State
**Background:** Dark card with green accent border (selected state)  
**Portrait:** Character portrait with post-apocalyptic scout appearance  
**Layout Structure:**
- **Portrait:** Left side of card (square aspect ratio)
- **Info Panel:** Right side with character details
- **Selection Indicator:** Green checkmark or glow effect

**Character Information:**
- **Name:** "Marcus Reed" in prominent white text
- **Role:** "Scout" badge in top-right corner
- **Primary Trait:** "+ +20% Survival Chance" in green text
- **Expedition Power:** "70" displayed prominently
- **Selection State:** Visual highlighting with green border

#### 3.2.2 Dr. Chen (Medic) - Selected State  
**Background:** Dark card with green accent border (selected state)  
**Portrait:** Medical character with face mask and professional appearance  
**Character Information:**
- **Name:** "Dr. Chen" in prominent white text
- **Role:** "Medic" badge in top-right corner  
- **Primary Trait:** "+ +25% Injury Recovery" in green text
- **Expedition Power:** "40" displayed prominently
- **Selection State:** Visual highlighting with green border

#### 3.2.3 Sgt. Jackson (Soldier) - Available State
**Background:** Dark card with dimmed appearance (unselected but available)  
**Portrait:** Military character with combat gear  
**Character Information:**
- **Name:** "Sgt. Jackson" in white text
- **Role:** "Soldier" badge in top-right corner
- **Primary Trait:** "+30% Combat Efficiency" in white text  
- **Expedition Power:** "85" displayed prominently
- **Selection State:** Normal dimmed state, clickable

#### 3.2.4 Maya Rodriguez (Engineer) - Available State
**Background:** Dark card with dimmed appearance (unselected but available)  
**Portrait:** Technical character with engineering equipment  
**Character Information:**
- **Name:** "Maya Rodriguez" in white text
- **Role:** "Engineer" badge in top-right corner
- **Primary Trait:** "+ +25% Resource Scavenging" in white text
- **Expedition Power:** "60" displayed prominently  
- **Selection State:** Normal dimmed state, clickable

### 3.3 NPC Selection Interaction

**Selection States:**
- **Available:** Normal appearance, full brightness, clickable
- **Selected:** Green border glow, slight brightness increase, selected indicator
- **Dimmed:** When 2 NPCs selected, remaining cards dim to 60% opacity
- **Disabled:** When maximum selection reached, unselected cards become unclickable

**Hover Effects:**
- **Available NPCs:** Brightness increase and border highlight
- **Selected NPCs:** Pulsing green glow
- **Dimmed NPCs:** Tooltip explaining selection limit reached

**Advanced Tooltips (On Hover):**
- **Secondary Traits:** Additional character bonuses and specializations
- **Health Status:** Current injury status or medical conditions
- **Expedition History:** Success rates and previous mission performance
- **Synergy Bonuses:** Special bonuses when paired with specific NPCs

---

## 4. Expedition Summary Panel (Right Section)

### 4.1 Summary Panel Layout
**Position:** Right side of screen, full height  
**Width:** Approximately 25% of screen width  
**Background:** Dark panel with subtle orange accent trim  
**Title:** "EXPEDITION SUMMARY" in header  

### 4.2 Risk & Reward Section
**Section Title:** "Risk & Reward"  
**Layout:** Compact information blocks with clear visual hierarchy  

#### 4.2.1 Risk Assessment Display
**Risk Level Badge:** "MEDIUM RISK +25% FAILURE"  
**Visual:** Orange badge with warning styling  
**Context Text:** "Based on expedition type and team composition"  
**Format:** Clear percentage with explanatory subtext  

#### 4.2.2 Potential Rewards Display
**Title:** "POTENTIAL REWARDS"  
**Layout:** Horizontal row of reward type icons  
**Reward Icons:**
- **🧬 Research:** Laboratory flask icon
- **🔫 Ammo:** Bullet/ammunition icon  
- **🥫 Food:** Food can icon
- **⚙️ Resources:** Gear/component icon

**Reward Tier:** "Expected Reward Tier: Moderate" in subtitle text  
**Hover Details:** Individual icon tooltips explaining reward types

### 4.3 Resource Cost Section
**Section Title:** "Resource Cost"  
**Layout:** Simple cost breakdown with clear visual presentation  

**Cost Display:**
- **🥫 Food:** "18 units" with food icon
- **🔫 Ammo:** "50 rounds" with ammunition icon

**Cost Calculation Tooltip:** "2 NPCs × 4 Days = 18 food" explaining cost formula  
**Affordability Indicator:** Green text if affordable, red if insufficient resources  

### 4.4 Send Expedition Button
**Position:** Bottom of summary panel  
**Size:** Large, prominent action button  
**States:**
- **Enabled:** "SEND EXPEDITION" with green background (when 2 NPCs selected and resources sufficient)
- **Disabled - Selection:** "SELECT 2 NPCS" with gray background  
- **Disabled - Resources:** "INSUFFICIENT RESOURCES" with red background

**Button Interaction:**
- **Click Behavior:** Triggers confirmation dialog before expedition deployment
- **Hover Effect:** Brightness increase and subtle glow animation
- **Confirmation Dialog:** "Send Dr. Chen and Maya Rodriguez on a 4-day mission? Medium risk. Potential reward: Research + Resources."

---

## 5. Visual Design System

### 5.1 Color Palette
**Primary Colors:**
- **Background:** Deep dark gray (#1a1a1a)
- **Card Background:** Slightly lighter gray (#2d2d2d)
- **Accent Orange:** Warm orange (#ff8c42) for highlights and selection
- **Success Green:** Bright green (#4ade80) for positive states
- **Warning Orange:** Alert orange (#f59e0b) for medium risk
- **Danger Red:** Warning red (#ef4444) for high risk and locked states
- **Text Primary:** Clean white (#ffffff)
- **Text Secondary:** Light gray (#d1d5db)

### 5.2 Typography System
**Header Font:** Orbitron - Bold, sci-fi styling for titles and important elements  
**Body Font:** Rajdhani - Clean, readable for descriptions and stats  
**UI Font:** System fonts for buttons and interface elements  

**Font Sizes:**
- **Main Title:** 48px Orbitron Bold
- **Section Headers:** 24px Orbitron Regular
- **Character Names:** 18px Rajdhani Bold
- **Body Text:** 14px Rajdhani Regular
- **UI Elements:** 16px System Font

### 5.3 Visual Effects
**Glow Effects:** Subtle orange glow on interactive elements and selections  
**Hover Animations:** Smooth brightness transitions (0.3s duration)  
**Selection Indicators:** Pulsing glow animation for active selections  
**Loading States:** Subtle shimmer effects for processing states  
**Particle Effects:** Light dust particles in background for atmosphere  

### 5.4 Iconography
**Icon Style:** Consistent post-apocalyptic theme with clear, recognizable symbols  
**Icon Colors:** Monochromatic with accent color highlights  
**Icon Sizes:** Standardized sizing system (16px, 24px, 32px, 48px)  
**Icon States:** Normal, hover, selected, and disabled variations  

---

## 6. User Experience Flow

### 6.1 Entry Flow
1. **Access:** Player clicks "Expeditions" from main interface
2. **Load:** Screen loads with default Medium expedition selected
3. **Context:** Player sees current resources and available expeditions
4. **Guidance:** Clear visual hierarchy guides player through selection process

### 6.2 Selection Process
1. **Expedition Choice:** Player selects expedition type (if different from default)
2. **NPC Selection:** Player clicks on NPCs to select expedition team
3. **Visual Feedback:** Selected NPCs highlight, summary panel updates
4. **Validation:** System enforces 2-NPC maximum selection
5. **Cost Check:** Resource costs automatically calculated and validated

### 6.3 Confirmation Flow
1. **Ready State:** Send button enables when conditions met
2. **Click Action:** Player clicks "SEND EXPEDITION"
3. **Confirmation:** Modal dialog summarizes expedition details
4. **Final Approval:** Player confirms or cancels expedition
5. **Deployment:** Expedition begins, interface transitions to management view

### 6.4 Error Handling
**Insufficient Resources:** Clear messaging with specific resource shortfalls  
**Selection Errors:** Visual feedback preventing invalid selections  
**System Errors:** Graceful error messages with retry options  
**Locked Content:** Clear explanation of unlock requirements  

---

## 7. Responsive Design Considerations

### 7.1 Screen Size Adaptations
**4K Displays:** Maintain proportional scaling with larger fonts and elements  
**1080p Standard:** Primary design target with optimal element sizing  
**Lower Resolutions:** Responsive layout with adjusted element positioning  

### 7.2 Accessibility Features
**High Contrast Mode:** Enhanced color contrast for visibility  
**Text Scaling:** Support for larger text sizing options  
**Keyboard Navigation:** Full keyboard accessibility for all interactive elements  
**Screen Reader Support:** Proper ARIA labels and semantic structure  

---

## 8. Technical Implementation Notes

### 8.1 Performance Considerations
**Asset Loading:** Preload character portraits and expedition backgrounds  
**Animation Optimization:** Use CSS transforms for smooth animations  
**State Management:** Efficient tracking of selection states and resource costs  
**Memory Management:** Proper cleanup of event listeners and unused assets  

### 8.2 Data Requirements
**NPC Database:** Character stats, traits, portraits, and availability status  
**Expedition Config:** Risk levels, costs, rewards, and unlock requirements  
**Resource Tracking:** Real-time resource availability and cost calculations  
**Save State:** Persistent expedition progress and NPC status  

### 8.3 Integration Points
**Main Game Interface:** Seamless transition to/from expedition planning  
**Resource System:** Live updates from global resource management  
**Progression System:** Integration with unlock requirements and meta upgrades  
**Save System:** Persistent expedition state across game sessions  

---

## 9. Testing & Validation

### 9.1 Usability Testing
**First-Time Experience:** New player can understand and use interface intuitively  
**Expert Usage:** Experienced players can quickly plan expeditions efficiently  
**Error Recovery:** Players can easily recover from selection mistakes  
**Accessibility:** Interface works with assistive technologies  

### 9.2 Performance Testing
**Load Times:** Interface loads quickly with all assets  
**Animation Performance:** Smooth 60fps animations across target hardware  
**Memory Usage:** Efficient memory usage during extended planning sessions  
**Responsiveness:** UI remains responsive during all interactions  

### 9.3 Integration Testing
**Resource Sync:** Resource costs accurately reflect current availability  
**Save/Load:** Expedition plans persist correctly across game sessions  
**State Management:** UI state accurately reflects game state changes  
**Cross-Platform:** Consistent experience across different platforms  

---

## 10. Future Enhancement Opportunities

### 10.1 Advanced Features
**Expedition History:** Track and display previous expedition outcomes  
**Advanced Tooltips:** More detailed statistical information and projections  
**Favorites System:** Save preferred NPC combinations for quick selection  
**Batch Planning:** Plan multiple expeditions simultaneously  

### 10.2 Quality of Life Improvements
**Auto-Selection:** AI-assisted NPC selection based on expedition requirements  
**Quick Deploy:** Streamlined interface for repeat expeditions  
**Resource Alerts:** Warnings when resources are insufficient for planned expeditions  
**Success Predictions:** Advanced algorithms for more accurate success forecasting  

### 10.3 Visual Enhancements
**3D Character Models:** Upgraded from portraits to 3D character representations  
**Dynamic Backgrounds:** Expedition-specific background environments  
**Advanced Animations:** Character interaction animations and deployment sequences  
**Particle Systems:** Enhanced atmospheric effects and visual feedback  

---

*This document serves as the comprehensive design specification for the Expedition Planning interface, ensuring consistent implementation across development phases and providing clear guidance for both design and development teams.* 