# City Defense Z - Meta Upgrade System UI/UX Design Document
*Persistent Progression Interface Design*

## Overview

**Interface Type:** Modal Overlay Popup  
**Function:** Persistent meta-progression system using Research Points (RP)  
**Access:** Available between runs or during gameplay via dedicated button  
**Art Style:** Dark theme with warm orange accents matching game aesthetic  
**Layout:** Left sidebar navigation + main content area with upgrade trees  

**Key Design Principles:**
- Clear visual hierarchy showing upgrade progression paths
- Intuitive navigation between different upgrade categories
- Immediate feedback on affordability and upgrade effects
- Visual representation of unlock requirements and dependencies

---

## 1. Interface Layout Structure

### 1.1 Overall Modal Design
**Background:** Dark overlay (80% opacity) over game background  
**Modal Size:** 90% of screen width, 85% of screen height  
**Position:** Centered on screen  
**Border:** Subtle orange/amber glow matching game theme  
**Close Behavior:** 'X' button top-right, ESC key, or click outside modal  

### 1.2 Left Sidebar Navigation
**Width:** 15% of modal width  
**Background:** Darker shade than main content area  
**Function:** Category selection and current RP display  

#### 1.2.1 Research Points Display (Top of Sidebar)
**Location:** Top section of sidebar  
**Elements:**
- **RP Icon:** Laboratory flask symbol
- **Current RP Amount:** Large, prominent number
- **Label:** "Research Points" text below amount
- **Visual:** Glowing effect when RP is sufficient for upgrades

#### 1.2.2 Upgrade Category Icons (Vertical List)
**Layout:** Vertical arrangement of clickable category icons  
**Icon Design:** Consistent circular design with category symbols  
**States:**
- **Active:** Orange border, brighter icon
- **Inactive:** Dimmed appearance
- **Available Upgrades:** Small notification dot/number showing upgradeable items
- **Fully Maxed:** Checkmark overlay or gold tint

**Category Icons (Top to Bottom):**

1. **Buildings** 🏗️
   - Icon: Building/construction symbol
   - Shows: Available building upgrade levels

2. **Soldiers** 👥  
   - Icon: Soldier/military symbol
   - Shows: Soldier enhancement levels

3. **Walls** 🧱
   - Icon: Wall/barrier symbol  
   - Shows: Wall upgrade progression

4. **Farm** 🌾
   - Icon: Wheat/agriculture symbol
   - Shows: Farm enhancement levels

5. **Laboratory** 🧪
   - Icon: Flask/research symbol
   - Shows: Lab productivity upgrades

6. **Expeditions** 🗺️
   - Icon: Map/compass symbol
   - Shows: Expedition efficiency upgrades

7. **NPC Buffs** 👤
   - Icon: Person with buff indicator
   - Shows: NPC enhancement levels

8. **Revive** ❤️
   - Icon: Heart/resurrection symbol
   - Shows: Revive system upgrades
   - **Special:** Most expensive category highlight

9. **Weapons** 🔫
   - Icon: Weapon/firearm symbol
   - Shows: Combat effectiveness upgrades

10. **Airstrike** ✈️
    - Icon: Airplane/bomb symbol
    - Shows: Airstrike enhancement levels

11. **Reroll Cards** 🔄
    - Icon: Refresh/reroll symbol
    - Shows: Card reroll system upgrades

### 1.3 Main Content Area Layout
**Width:** 85% of modal width  
**Function:** Display selected upgrade tree with progression visualization  

#### 1.3.1 Content Header
**Elements:**
- **Category Title:** Large text showing selected category name
- **Progress Indicator:** "X/Y Unlocked" format showing current progress
- **Category Description:** Brief explanation of upgrade category benefits

#### 1.3.2 Upgrade Tree Visualization
**Layout:** Vertical progression tree with connected nodes  
**Visual Style:** Connected upgrade paths showing dependency relationships  

**Node Design Structure:**
- **Circular upgrade nodes** connected by lines
- **Level indicators** (Level 1, 2, 3, etc.)
- **Upgrade names** and **effect descriptions**
- **RP cost** clearly displayed for each upgrade
- **Lock/unlock visual states**

**Connection Lines:**
- **Unlocked path:** Bright orange/amber lines
- **Available next:** Pulsing/animated connection
- **Locked path:** Dim gray lines

#### 1.3.3 Upgrade Node States

**1. Unlocked/Purchased State:**
- **Visual:** Bright orange circular node with checkmark
- **Border:** Solid orange border
- **Icon:** Category-specific symbol inside circle
- **Effect Text:** Green text showing active bonus
- **Background:** Slightly glowing

**2. Available for Purchase:**
- **Visual:** White/light gray circular node
- **Border:** White border with subtle pulse animation
- **Cost:** RP cost prominently displayed
- **Hover Effect:** Enlarged with detailed tooltip
- **Unlock Button:** Integrated or nearby

**3. Locked/Unavailable:**
- **Visual:** Dark gray circular node
- **Border:** Dim gray border
- **Lock Icon:** Small padlock symbol
- **Requirements:** Shows prerequisite upgrades needed
- **Cost:** RP cost shown but grayed out

#### 1.3.4 Upgrade Interaction Elements

**Unlock Button (Bottom-Right of Content Area):**
- **Position:** Fixed bottom-right corner of content area
- **Size:** Large, prominent button
- **States:**
  - **Green:** "UNLOCK" - Can afford selected upgrade
  - **Red:** "INSUFFICIENT RP" - Cannot afford
  - **Gray:** "SELECT UPGRADE" - No upgrade selected
- **Cost Display:** Shows RP cost of selected upgrade

**Upgrade Selection:**
- **Click to Select:** Click available upgrade node to select
- **Visual Feedback:** Selected node gets highlighted border
- **Details Panel:** Shows detailed upgrade information when selected

---

## 2. Upgrade Categories Detailed Design

### 2.1 Building Cards Default Level Increase
**Tree Structure:** Linear progression (5 levels)  
**Visual Theme:** Construction/building icons  

**Level Progression:**
- **Level 1-5:** Each level increases default building card levels
- **Node Design:** Building icon with level number overlay
- **Cost Scaling:** Increasing RP costs per level
- **Effect Display:** "+1 Default Building Level" per upgrade

### 2.2 Trained Soldier's Default Level Increase  
**Tree Structure:** Linear progression (5 levels)  
**Visual Theme:** Military/soldier icons  

**Level Progression:**
- **Level 1-5:** Each level increases default soldier effectiveness
- **Node Design:** Soldier icon with rank indicators
- **Effect Display:** Enhanced soldier stats per level

### 2.3 Placeable Wall's Upgrade
**Tree Structure:** Linear progression (4 levels)  
**Visual Theme:** Wall/barrier progression  

**Level Details:**
- **Level 1:** Wall capacity +20 (Node: Basic wall icon)
- **Level 2:** Capacity +20 + HP boost (Node: Reinforced wall)
- **Level 3:** Capacity +20 (Node: Extended wall)
- **Level 4:** Electrified walls (Node: Electric wall with lightning)

### 2.4 Farm Upgrade
**Tree Structure:** Linear progression (5 levels)  
**Visual Theme:** Agricultural progression  

**Level Details:**
- **Level 1:** +75% harvest (Node: Wheat bundle)
- **Level 2:** Faster growth -1 day (Node: Clock with wheat)
- **Level 3:** +2 crop grids (Node: Expanded farm)
- **Level 4:** +100% harvest (Node: Abundant crops)
- **Level 5:** Faster growth -1 day (Node: Speed growth)

### 2.5 Laboratory Upgrade
**Tree Structure:** Linear progression (3 levels)  
**Visual Theme:** Research/science progression  

**Level Details:**
- **Level 1:** +50% RP generation (Node: Basic flask)
- **Level 2:** Research -1 day faster (Node: Flask with clock)
- **Level 3:** +100% RP generation (Node: Advanced flask)

### 2.6 Expedition Upgrade
**Tree Structure:** Linear progression (3 levels)  
**Visual Theme:** Exploration/adventure progression  

**Level Details:**
- **Level 1:** +20% survival rate (Node: Shield with map)
- **Level 2:** +50% rewards (Node: Treasure chest)
- **Level 3:** Expeditions -1 day (Node: Fast compass)

### 2.7 NPC Upgrade  
**Tree Structure:** Linear progression (3 levels)  
**Visual Theme:** Character enhancement progression  

**Level Details:**
- **Level 1:** +50% NPC buff effects (Node: Person with small aura)
- **Level 2:** +75% NPC buff effects (Node: Person with medium aura)
- **Level 3:** +100% NPC buff effects (Node: Person with large aura)

### 2.8 REVIVE UPGRADE (Premium Category)
**Tree Structure:** Linear progression (3 levels)  
**Visual Theme:** Resurrection/recovery progression  
**Special Design:** Golden/premium visual treatment  

**Level Details:**
- **Level 1:** Revive ability (1 use) (Node: Heart with "1x")
- **Level 2:** Revive ability (2 uses) (Node: Heart with "2x") 
- **Level 3:** Revive ability (3 uses) (Node: Heart with "3x")

**Premium Visual Elements:**
- **Golden borders** for all nodes
- **Special particle effects** around nodes
- **Higher RP costs** prominently displayed
- **Warning text:** "Most Expensive Upgrade" label

### 2.9 Weapons Upgrade
**Tree Structure:** Linear progression (3 levels)  
**Visual Theme:** Combat effectiveness progression  

**Level Details:**
- **Level 1:** Faster fire rate (Node: Gun with speed lines)
- **Level 2:** -50% reload time (Node: Gun with reload symbol)
- **Level 3:** +50% damage (Node: Gun with damage indicator)

### 2.10 Airstrike Upgrade
**Tree Structure:** Linear progression (3 levels)  
**Visual Theme:** Aerial combat progression  

**Level Details:**
- **Level 1:** -50% airstrike cost (Node: Plane with discount)
- **Level 2:** 3-bomb launcher (Node: Plane with multiple bombs)
- **Level 3:** +50% radius (Node: Plane with large explosion)

### 2.11 Reroll Cards Upgrade
**Tree Structure:** Linear progression (4 levels)  
**Visual Theme:** Card manipulation progression  

**Level Details:**
- **Level 1:** Unlock reroll function (Node: Cards with refresh)
- **Level 2-4:** +1 reroll count each (Node: Cards with increasing numbers)

---

## 3. Visual Design Guidelines

### 3.1 Color Palette
**Primary Colors:**
- **Background:** Dark gray (#2C2C2C)
- **Sidebar:** Darker gray (#1E1E1E)  
- **Accent:** Orange/Amber (#FF8C00)
- **Success:** Green (#32CD32)
- **Warning:** Red (#DC143C)
- **Locked:** Gray (#696969)

**Node Color States:**
- **Unlocked:** Bright orange (#FF8C00)
- **Available:** White/Light gray (#F5F5F5)
- **Locked:** Dark gray (#404040)
- **Selected:** Orange with white border

### 3.2 Typography
**Category Titles:** Bold, 24px, Orange color  
**Upgrade Names:** Medium, 16px, White color  
**Descriptions:** Regular, 14px, Light gray color  
**RP Costs:** Bold, 14px, Color varies by affordability  
**Progress Text:** Medium, 12px, Orange color  

### 3.3 Animation & Feedback
**Hover Effects:**
- **Node scaling** (110% size on hover)
- **Glow effects** for interactive elements
- **Smooth transitions** (200ms duration)

**Selection Feedback:**
- **Border animation** for selected upgrades
- **Pulse effect** for affordable upgrades
- **Shake animation** for insufficient RP

**Unlock Animations:**
- **Success particle effect** when upgrade purchased
- **Node transformation** from available to unlocked
- **Connection line illumination** for newly available upgrades

---

## 4. User Experience Flow

### 4.1 Opening the Meta Upgrade Interface
**Trigger:** Click "Meta Upgrades" button from main menu or in-game  
**Animation:** Modal slides in from center with background blur  
**Default State:** Shows Buildings category (first in list)  
**Focus:** Automatically highlights first available upgrade if any  

### 4.2 Navigation Between Categories
**Interaction:** Click category icon in left sidebar  
**Animation:** Smooth content transition (300ms fade)  
**State Preservation:** Remembers selected upgrade when switching categories  
**Visual Feedback:** Active category highlighted with orange accent  

### 4.3 Upgrade Selection & Purchase Flow
**Step 1:** Click available upgrade node → Node becomes selected  
**Step 2:** Review upgrade details and RP cost  
**Step 3:** Click "UNLOCK" button → Confirmation if expensive  
**Step 4:** Success animation → RP deducted → Node becomes unlocked  
**Step 5:** Newly available upgrades become highlighted  

### 4.4 Information Display & Tooltips
**Hover Tooltips:**
- **Upgrade effects:** Detailed benefit descriptions
- **Prerequisites:** Required upgrades for locked nodes
- **RP costs:** Exact cost and current affordability
- **Current bonuses:** Active effects from owned upgrades

---

## 5. Responsive Design Considerations

### 5.1 Screen Resolution Support
**Primary Target:** 1920x1080  
**Secondary:** 1366x768, 2560x1440  
**Scaling:** UI elements scale proportionally  
**Text:** Minimum readable sizes maintained  

### 5.2 Accessibility Features
**Color Blind Support:** Icons and shapes differentiate states  
**Keyboard Navigation:** Tab through upgrades, Enter to select  
**Screen Reader:** Alt text for all interactive elements  
**High Contrast:** Optional high contrast mode  

---

## 6. Technical Implementation Notes

### 6.1 Data Structure Requirements
**Save Data:** Track unlocked upgrades per category  
**Cost Scaling:** Configurable RP costs per upgrade level  
**Effect Stacking:** Multiple upgrade bonuses combine properly  
**Validation:** Prevent impossible upgrade states  

### 6.2 Performance Considerations
**Modal Loading:** Pre-load upgrade tree data  
**Animation Optimization:** Use CSS transforms for smooth animations  
**Image Assets:** Optimize upgrade icons for fast loading  
**State Management:** Efficient tracking of upgrade states  

---

*This document provides complete specifications for implementing the Meta Upgrade system interface, ensuring intuitive navigation, clear progression visualization, and engaging user experience for the persistent progression system.* 