# City Defense Z - UI/UX Design Document
*For Freelancer/Outsourcing Team*

## Project Overview

**Game Type:** City Defense / Tower Defense with Resource Management  
**Platform:** PC (Steam)  
**Art Style:** Stylized 3D with warm, desert-themed environments  
**Current Status:** Demo version completed, UI/UX redesign needed for full release  

**Key Resources Provided:**
- Demo version of the game (for hands-on experience)
- Complete feature documentation (fandom-site wiki)
- Current UI screenshots and gameplay videos
- This design specification document

---

## 1. Game HUD (Heads-Up Display)

### 1.1 Current State Analysis
**From Demo Screenshot:**
- Top resource bar with 5 currency types
- Day counter and End Day button
- Bottom building cards with costs
- Bottom-left UI panel with various icons and numbers

### 1.2 Required HUD Elements

#### 1.2.1 Top Panel Layout
**Location:** Entire top section of screen  
**Layout:** Horizontal arrangement with multiple functional areas

**1. Resource & Defense Management Panel (Top-Left)**
**Layout:** Vertical arrangement - all resource and military management in one logical area

**Resource Display Section:**
- **Resource (Yellow) Display**
  - Icon: Factory/gear symbol
  - Value: Current amount
  - Max display: 999+ (show as "999+")
  - Visual feedback: Pulse/glow when collected

- **Ammunition (Green) Display**
  - Icon: Bullet/ammunition symbol
  - Value: Current amount
  - Critical state: Red warning when < 20
  - Visual feedback: Shake animation when low

- **Food (Brown/Red) Display**
  - Icon: Apple/wheat symbol
  - Value: Current amount
  - Warning states: Yellow when Food < Population
  - Critical state: Red with "HUNGER" warning

- **Research Points (Blue/Purple) Display**
  - Icon: Flask/laboratory symbol
  - Value: Current amount
  - Special state: Glow when new research available

- **Population (Gray) Display** - *Positioned at bottom of resource list*
  - Icon: House/people symbol
  - Format: "Current/Max" (e.g., "45/60")
  - Visual feedback: Red when at capacity
  - **Interactive Element:** Clickable to open Defense Unit Drawer
  - **Expand Indicator:** Small arrow or plus icon indicating it's expandable

**Defense Unit Drawer** (Integrated with Population):
- **Trigger:** Click on Population resource section
- **Animation:** Horizontal slide-out drawer expanding to the right
- **Content:** Shows current defense unit counts deployed on battlefield
- **Layout:** Horizontal list of unit icons with counts
- **Units Displayed:**
  - Basic Soldiers (current count on field)
  - Machine Gun (Bixi) (deployed count)
  - Rocket Launcher (deployed count)
  - Mortar (deployed count)
  - Landmines (active count)
  - Defense Walls (placed count)
  - Outpost Towers (active count)
- **Close Behavior:** Click population again, click elsewhere, or auto-close after set time
- **Visual Design:** Matches population section styling with smooth transitions

**Defense Units Interaction Section** (Below Resources):
**Function:** Purchase and deploy defensive units using ammunition  
**Layout:** Vertical arrangement under resource panel
**Required Elements:**

1. **Basic Soldier Display**
   - Icon with current count (no plus button)
   - Generated from Barracks buildings
   - Shows available soldiers ready for deployment
   - Click to select and place on battlefield

2. **Purchasable Defense Units** (Each with Plus Button + Unit Button):
   
   **Machine Gun (Bixi)**
   - Plus button: Purchase with ammunition
   - Unit button: Select for placement on defense grid
   - Shows current count owned
   
   **Rocket Launcher**
   - Plus button: Purchase with ammunition  
   - Unit button: Select for placement on defense grid
   - Shows current count owned
   
   **Mortar**
   - Plus button: Purchase with ammunition
   - Unit button: Select for placement on defense grid  
   - Shows current count owned
   
   **Landmines**
   - Plus button: Purchase with ammunition
   - Unit button: Select for placement on defense grid
   - Shows current count owned
   
   **Defense Walls**
   - Plus button: Purchase with ammunition
   - Unit button: Select for placement on defense grid
   - Shows current count owned
   
   **Outpost Towers**
   - Plus button: Purchase with ammunition
   - Unit button: Select for placement on defense grid
   - Shows current count owned

3. **Interaction Flow Design**
   - **Step 1:** Click Plus Button → Spend ammunition → Unit added to inventory
   - **Step 2:** Click Unit Button → Enter placement mode → Click on defense zone grid to deploy
   - **Visual Feedback:** 
     - Plus buttons grayed out when insufficient ammunition
     - Unit buttons highlighted when selected for placement
     - Grid highlights valid placement zones when in placement mode

4. **UI Layout Requirements**
   - **Vertical arrangement:** All units displayed vertically under resources
   - **Two-button layout:** Plus button left, unit button right for each unit
   - Clear visual separation between purchase (plus) and deploy (unit) buttons
   - Ammunition cost displayed on hover over plus buttons
   - Current inventory count clearly visible for each unit type
   - Consistent icon design and sizing across all units

**2. Base Health Bar (Top-Center-Left)**
**Function:** Shows main base HP status
- **Location:** Top area, positioned left of the prominent Day counter
- **Display:** Percentage format (100%) with visual health bar
- **Visual:** Health bar with color coding:
  - Green: 70-100%
  - Yellow: 40-69%
  - Red: 0-39%
- **Positioning:** Visible but not competing with Day counter prominence

**3. Day Progress Section (TOP-CENTER - PROMINENT)**
**Layout:** **MOST IMPORTANT UI ELEMENT** - Center positioning for maximum focus
**Function:** Primary game flow control - **STANDALONE HERO ELEMENT**

**Day Progress Display:**
- **Day/Night Icon:** Changes between sun (day) and moon (night) icons (positioned left of text)
- **Day Counter:** "Day-1" format text display - **LARGE AND PROMINENT**
- **Progress Bar:** Around the corners of the entire section
  - Only visible during day mode
  - Shows time remaining until night phase
  - Disappears completely during night mode

**4. Game Controls & Management Section (Top-Right)**
**Layout:** Integrated control center for all game management
**Function:** Secondary controls grouped logically

**Game Speed Controls:**
- **Pause Button:** Pause game completely
- **Play Button:** Normal speed (1x)
- **Fast Forward (2x):** Double speed
- **Fast Forward (3x):** Triple speed  

**Day Management:**
- **End Day Button:** Positioned below speed controls
  - Color changes based on readiness state:
    - Green: Ready to proceed to night phase
    - Yellow: Some warnings (low ammo, insufficient defenses, etc.)
    - Red: Critical issues (no soldiers, critical resource shortages, etc.)
  - Large, accessible button for easy clicking

**Breaking News Section:** 
- **Location:** Top area above controls
- **Function:** Scrolling world news and story updates
- **Text Animation:** Right-to-left scrolling text
- **Content Examples:** 
  - "Infection has spread to every city in USA"
  - World events and story progression updates
- **Design:** Subtle, non-intrusive but readable
- **Positioning:** Complements the controls without crowding

**Settings:**
- **Settings Gear:** Access to game settings (very top-right corner)

**5. Building Cards Panel (Bottom Center)**
**Function:** Purchase and place buildings into base grid zone using Resource currency  
**Layout:** 3 building cards arranged horizontally  
**Daily System:** 3 random building cards available per day

**Card Design Structure:**

1. **Top Left Corner**
   - Building level number in circle
   - Clear, readable typography
   - Consistent circle design across all cards

2. **Top Right Corner**
   - Primary output icon of the building:
     - **Factory Card:** Resource icon (produces resources)
     - **Barracks Card:** Basic soldier icon (produces soldiers)
     - **Ammunition Card:** Ammunition icon (produces ammunition)
     - **Laboratory Card:** Research Points icon (produces RP)
     - **House Card:** Population icon (provides population capacity)

3. **Bottom Center (with margin from bottom)**
   - Building name clearly displayed
   - Consistent typography and positioning

4. **Below Building Name**
   - **Resource cost** prominently displayed
   - **Building description** explaining what the building provides

**Required Improvements:**
1. **Card Size & Readability**
   - Increase card size by 20-30% from current demo
   - Larger, clearer cost numbers and text
   - Better contrast for all text elements

2. **Affordability Indicators**
   - Green border: Can afford with current resources
   - Red border: Cannot afford 
   - Grayed out state: Cannot afford with clear cost deficit shown

3. **Visual Polish**
   - Smooth hover animations
   - Click feedback animations
   - Clear visual hierarchy within card layout

4. **Interaction Flow**
   - Click card to purchase with Resource currency
   - After purchase, enter placement mode for base grid
   - Visual feedback for valid placement zones

#### 1.2.4 Defense Units Interaction Panel (Bottom-Left)
**Function:** Purchase and deploy defensive units using ammunition  
**Required Elements:**

1. **Basic Soldier Display**
   - Icon with current count (no plus button)
   - Generated from Barracks buildings
   - Shows available soldiers ready for deployment
   - Click to select and place on battlefield

2. **Purchasable Defense Units** (Each with Plus Button + Unit Button):
   
   **Machine Gun (Bixi)**
   - Plus button: Purchase with ammunition
   - Unit button: Select for placement on defense grid
   - Shows current count owned
   
   **Rocket Launcher**
   - Plus button: Purchase with ammunition  
   - Unit button: Select for placement on defense grid
   - Shows current count owned
   
   **Mortar**
   - Plus button: Purchase with ammunition
   - Unit button: Select for placement on defense grid  
   - Shows current count owned
   
   **Landmines**
   - Plus button: Purchase with ammunition
   - Unit button: Select for placement on defense grid
   - Shows current count owned
   
   **Defense Walls**
   - Plus button: Purchase with ammunition
   - Unit button: Select for placement on defense grid
   - Shows current count owned
   
   **Outpost Towers**
   - Plus button: Purchase with ammunition
   - Unit button: Select for placement on defense grid
   - Shows current count owned

3. **Interaction Flow Design**
   - **Step 1:** Click Plus Button → Spend ammunition → Unit added to inventory
   - **Step 2:** Click Unit Button → Enter placement mode → Click on defense zone grid to deploy
   - **Visual Feedback:** 
     - Plus buttons grayed out when insufficient ammunition
     - Unit buttons highlighted when selected for placement
     - Grid highlights valid placement zones when in placement mode

4. **UI Layout Requirements**
   - **Horizontal arrangement:** All units displayed in a single row across the bottom-left
   - **Two-tier button layout:** Plus button above, unit button below for each unit
   - Clear visual separation between purchase (plus) and deploy (unit) buttons
   - Ammunition cost displayed on hover over plus buttons
   - Current inventory count clearly visible for each unit type
   - Consistent icon design and sizing across all units

### 1.3 HUD Layout Priorities

#### 1.3.1 Information Hierarchy
1. **Primary:** Resource counts (most frequently checked)
2. **Secondary:** Day progress and building cards
3. **Tertiary:** Military status and warnings

#### 1.3.2 Screen Real Estate Usage
- **Top 15%:** Resource and day management
- **Bottom 20%:** Building cards and military status
- **Sides:** Minimal usage, keep clear for gameplay
- **Center:** Reserved for main game view

#### 1.3.3 Responsive Design Considerations
- Support for 1920x1080 (primary target)
- Scalable UI for 1366x768 and 2560x1440
- Maintain readability at all supported resolutions
- Consider ultrawide monitor support (21:9 aspect ratio)

### 1.4 Visual Design Guidelines

#### 1.4.1 Color Scheme
- **Resource Yellow:** #FFD700 (Gold)
- **Ammunition Green:** #32CD32 (Lime Green)
- **Food Red:** #DC143C (Crimson)
- **Population Gray:** #696969 (Dim Gray)
- **Research Blue:** #4169E1 (Royal Blue)

#### 1.4.2 Typography
- **Headers:** Bold, sans-serif, minimum 16px
- **Numbers:** Monospace font for consistent alignment
- **Labels:** Clean sans-serif, 12px minimum
- **High contrast required for accessibility

#### 1.4.3 Feedback Systems
- **Visual:** Color changes, animations, particle effects
- **Haptic:** Controller vibration for critical events (future)

**6. Breaking News Section (Bottom-Left)**
**Function:** Scrolling world news and story updates
**Location:** Bottom-left area (replacing old defense units location)
**Layout:** Horizontal scrolling text area

**Content & Animation:**
- **Text Animation:** Right-to-left scrolling text
- **Content Examples:** 
  - "Infection has spread to every city in USA"
  - "Military establishing safe zones. Survivors advised to fortify positions"
  - World events and story progression updates
- **Design:** Readable but non-intrusive
- **Positioning:** Fills bottom-left space without interfering with building cards

**Design Requirements:**
- Clean, readable typography (minimum 14px)
- Distinct color coding matching resource types
- Smooth counter animations when values change
- Tooltips showing resource descriptions on hover
- Clear visual separation between functional areas

---

## Next Sections to Cover:
2. Menu Systems & Navigation
3. In-Game Popups & Overlays
4. Research/Progression Interface
5. NPC & Expedition Interface
6. Settings & Options Menus
7. Game Flow & Transitions

---

*This document will be expanded section by section. Each section will include detailed mockups, user flow diagrams, and specific implementation requirements.* 