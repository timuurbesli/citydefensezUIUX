# Main Game HUD UI Elements List

## Overview
This document lists all UI elements present in the main game HUD screen (`game.html`) for UI designer reference.

## Screen Elements Checklist

### TOP HUD PANEL

#### Resource Panel (Top-Left)
- [ ] Scrap/Materials resource display
- [ ] Ammunition resource display  
- [ ] Food resource display
- [ ] Research Points resource display
- [ ] Population display (expandable)
- [ ] Population expand/collapse icon
- [ ] **Defense Drawer** (expandable panel):
  - [ ] Soldiers unit count
  - [ ] Machine Gun unit count
  - [ ] Rockets unit count
  - [ ] Mortars unit count
  - [ ] Mines unit count
  - [ ] Walls unit count
  - [ ] Outposts unit count
  - [ ] Population cost indicators

#### Effects Panel (Left side, middle)
- [ ] Buff icons (vertical list)
- [ ] Debuff icons (vertical list)
- [ ] Effect tooltips on hover
- [ ] Effect icon animations

#### Unified Command Panel (Top-Center)
- [ ] Base health icon
- [ ] Base health bar
- [ ] Health percentage text
- [ ] Sun/Moon day/night icon
- [ ] Day counter display
- [ ] Day progress circular border
- [ ] Progress fill animation
- [ ] "END DAY" button

#### Game Controls (Top-Right)
- [ ] Pause button
- [ ] Play button (with active state)
- [ ] 2x Speed button
- [ ] 3x Speed button  
- [ ] Settings button

### BOTTOM HUD PANEL

#### Building Cards Container (Bottom-Center)
- [ ] Refresh cards button
- [ ] Refresh counter display
- [ ] Factory building card
- [ ] House/Barracks building card
- [ ] Ammo building card
- [ ] Card hover cost overlay
- [ ] Card affordability states

### DEFENSE UNITS SECTION (Bottom-Left)
- [ ] "Defense Units" section title
- [ ] **Unit Rows** (7 total):
  - [ ] Soldiers row
  - [ ] Machine Gun row  
  - [ ] Rockets row
  - [ ] Mortars row
  - [ ] Mines row
  - [ ] Walls row
  - [ ] Outposts row
- [ ] Unit icons
- [ ] Unit names
- [ ] Plus buttons (for purchasable units)
- [ ] Unit count buttons

### BREAKING NEWS TICKER (Fixed Bottom)
- [ ] "BREAKING NEWS" label
- [ ] Scrolling news text
- [ ] News ticker animation

### RIGHT SIDE BUTTONS

#### Trade Button
- [ ] Circular trade button
- [ ] Store icon
- [ ] "TRADE" text
- [ ] Button glow animation
- [ ] Pulsing animation

#### Boosters Button  
- [ ] Circular boosters button
- [ ] Bolt icon
- [ ] "BOOSTERS" text
- [ ] Expand/collapse chevron icon
- [ ] **Boosters Drawer** (expandable):
  - [ ] Booster items grid
  - [ ] Booster icons
  - [ ] Booster count badges
  - [ ] Booster tooltips

#### Expedition Planning Button
- [ ] Circular expedition button
- [ ] Map icon
- [ ] "EXPEDITIONS" text
- [ ] Button pulsing animation

### EXPEDITION SLOTS (Below Expedition Button)
- [ ] **3 Expedition Slots:**
  - [ ] Slot 1 (left position)
  - [ ] Slot 2 (center, lower)
  - [ ] Slot 3 (right position)
- [ ] Slot state indicators (Empty/Active/Completed/Failed)
- [ ] Slot icons and text
- [ ] Slot click interactions

### CLICKABLE GAME AREAS
- [ ] Home building clickable area
- [ ] Home building overlay (tools icon + "UPGRADES")
- [ ] NPC Recruit button (circular)
- [ ] NPC Recruit overlay (plus icon + "RECRUIT")
- [ ] Soldier NPC clickable area
- [ ] Soldier NPC overlay (shield icon + "Talk")
- [ ] Farmer NPC clickable area  
- [ ] Farmer NPC overlay (seedling icon + "Talk")

## MODAL OVERLAYS

### NPC Dialogue Popup
- [ ] **Character Panel:**
  - [ ] Character avatar
  - [ ] Character name
  - [ ] Character title
  - [ ] Audio indicator bars
- [ ] **Transmission Panel:**
  - [ ] Transmission header
  - [ ] Signal strength indicator
  - [ ] Audio controls
  - [ ] Dialogue text
  - [ ] Waveform display
  - [ ] Timestamp display

### Trade Modal
- [ ] Full-screen iframe overlay
- [ ] Close button (top-right X)
- [ ] Blurred backdrop

### Expedition Planning Modal  
- [ ] Full-screen iframe overlay
- [ ] Close button (top-right X)
- [ ] Blurred backdrop

### NPC Selection Modal
- [ ] Full-screen iframe overlay  
- [ ] Close button (top-right X)
- [ ] Blurred backdrop

### Expedition Summary Modal
- [ ] Modal header with title
- [ ] Close button
- [ ] **Progress Section:**
  - [ ] Expedition name
  - [ ] Location display
  - [ ] Time remaining
  - [ ] Progress bar
  - [ ] Progress text
- [ ] **Team Section:**
  - [ ] Team member list
  - [ ] Member portraits
  - [ ] Member names and roles
- [ ] **Stats Section:**
  - [ ] Success chance display

### Post-Expedition Rewards Modal
- [ ] Modal header with title
- [ ] Close button
- [ ] Success/failure badge
- [ ] Expedition details
- [ ] **Rewards Section:**
  - [ ] Resource rewards grid
  - [ ] Resource icons
  - [ ] Resource amounts
- [ ] **Team Return Section:**
  - [ ] Returned team members list
- [ ] "CLAIM REWARDS" button

### Booster Confirmation Modal
- [ ] Modal background overlay
- [ ] Confirmation box
- [ ] Booster icon display
- [ ] "Use Booster?" title
- [ ] Confirmation message text
- [ ] "Yes" button
- [ ] "No" button

### AOE Targeting Overlay
- [ ] Full-screen targeting overlay
- [ ] Semi-transparent background
- [ ] Circular targeting reticle
- [ ] Crosshair cursor
- [ ] Targeting circle animation

## INTERACTIONS & BEHAVIORS

### Hover Effects
- [ ] Card scaling and glow
- [ ] Button glow enhancement
- [ ] Icon scale increases
- [ ] Tooltip displays

### Click/Tap Actions
- [ ] Resource detail breakdown
- [ ] Unit purchase confirmations
- [ ] Speed control changes
- [ ] Building area management
- [ ] NPC dialogue opening
- [ ] Modal opening/closing

### Expandable Elements
- [ ] Population drawer slide animation
- [ ] Boosters drawer slide animation
- [ ] Drawer content population






---

*This checklist ensures all UI elements from the main game HUD are accounted for during design implementation.* 