# Map Selection Screen UI Elements List

## Overview
This document lists all UI elements present in the map selection screen (`mapselection.html`) for UI designer reference.

## Screen Elements Checklist

### BACKGROUND & EFFECTS

#### Background Elements
- [ ] Gradient background (1a1a2e → 16213e → 0f3460)
- [ ] Background overlay with animated radial gradients
- [ ] Cyan glow effect (20% 30% position)
- [ ] Orange glow effect (80% 70% position)
- [ ] Background shift animation (15s cycle)

### HEADER SECTION

#### Main Header
- [ ] Main title "SELECT MISSION ZONE"
- [ ] Title glow effect (cyan shadow)
- [ ] Subtitle "WASTELAND DEPLOYMENT COORDINATES"
- [ ] Subtitle styling (blue color, spaced lettering)

### NAVIGATION

#### Back Button
- [ ] Back to menu button (top-left)
- [ ] Arrow left icon
- [ ] "BACK TO MENU" text
- [ ] Button hover effects
- [ ] Button backdrop blur
- [ ] Button active state animation

### ZONE SELECTION GRID

#### Grid Layout
- [ ] 4-column responsive grid
- [ ] Grid gap spacing (1.5rem)
- [ ] Grid content alignment

#### Zone Cards (4 Total)
- [ ] **Desert Outpost Card:**
  - [ ] Background map image (firstmap.png)
  - [ ] Background overlay gradient
  - [ ] Available state styling
  - [ ] Critical priority status
- [ ] **Suburban Stronghold Card:**
  - [ ] Background map image (secondmap.png)
  - [ ] Background overlay gradient
  - [ ] Ready state styling
  - [ ] Ready for deployment status
- [ ] **Industrial Complex Card:**
  - [ ] Background map image (thirdmap.png)
  - [ ] Background overlay gradient
  - [ ] Locked state styling
  - [ ] Lock overlay with icon
- [ ] **Laboratory Facility Card:**
  - [ ] Background map image (lastmap.png)
  - [ ] Background overlay gradient
  - [ ] Locked state styling
  - [ ] Lock overlay with icon

#### Card Components (Per Zone)
- [ ] Card header section
- [ ] Zone name display
- [ ] Zone status indicator
- [ ] Status icon (triangle/check/lock)
- [ ] Status text
- [ ] Card content area
- [ ] Card border effects
- [ ] Card hover animations
- [ ] Card selection state

#### Card States & Interactions
- [ ] **Available State:**
  - [ ] Orange border glow
  - [ ] Orange shadow effects
  - [ ] Hover scale animation
  - [ ] Click selection
- [ ] **Ready State:**
  - [ ] Cyan border glow
  - [ ] Cyan shadow effects
  - [ ] Hover scale animation
  - [ ] Click selection
- [ ] **Locked State:**
  - [ ] Gray border styling
  - [ ] Reduced opacity
  - [ ] Lock overlay
  - [ ] Disabled interaction
- [ ] **Selected State:**
  - [ ] Green border glow
  - [ ] Green shadow effects
  - [ ] Scale transformation
  - [ ] Persistent selection

#### Lock Overlays
- [ ] Semi-transparent black overlay
- [ ] Lock icon (centered)
- [ ] Lock text message
- [ ] Blur backdrop filter

### MISSION BRIEF PANEL

#### Panel Layout
- [ ] Two-column grid layout
- [ ] Brief content wrapper (left)
- [ ] Deployment confirmation (right)
- [ ] Panel background gradient
- [ ] Panel border effects
- [ ] Panel backdrop blur

#### Brief Header
- [ ] Header background gradient
- [ ] Mission brief title
- [ ] Title dynamic updates
- [ ] Header border bottom

#### Brief Content Sections
- [ ] **Duration Section:**
  - [ ] Clock icon
  - [ ] Duration heading
  - [ ] Duration text display
- [ ] **Objective Section:**
  - [ ] Crosshairs icon
  - [ ] Objective heading
  - [ ] Objective description
- [ ] **Commander Quote Section:**
  - [ ] Quote icon
  - [ ] Commander name
  - [ ] Quote text styling
  - [ ] Quote background styling
  - [ ] Quote border accent

#### Deployment Confirmation Area
- [ ] Deployment section background
- [ ] Section title with helicopter icon
- [ ] "DEPLOY TO:" text display
- [ ] Zone name display
- [ ] Deploy button

#### Deploy Button States
- [ ] **Active State:**
  - [ ] Orange gradient background
  - [ ] Rocket icon
  - [ ] "DEPLOY" text
  - [ ] Button hover effects
  - [ ] Button glow animation
- [ ] **Disabled State:**
  - [ ] Gray gradient background
  - [ ] Lock icon
  - [ ] "LOCKED" text
  - [ ] Disabled cursor
  - [ ] No hover effects

### DYNAMIC CONTENT UPDATES

#### Zone Selection Updates
- [ ] Mission brief title changes
- [ ] Duration text updates
- [ ] Objective text updates
- [ ] Commander quote updates
- [ ] Commander name updates
- [ ] Deploy zone name updates

#### Interactive Behaviors
- [ ] Zone card selection logic
- [ ] Previous selection removal
- [ ] New selection highlighting
- [ ] Mission brief content refresh
- [ ] Deploy button state management

## RESPONSIVE DESIGN

### Grid Adaptations
- [ ] Zone cards grid responsiveness
- [ ] Mission brief panel layout
- [ ] Mobile viewport adjustments
- [ ] Tablet viewport optimizations

### Typography Scaling
- [ ] Header title responsive sizing
- [ ] Card text scaling
- [ ] Mission brief text sizing
- [ ] Button text responsiveness

## ANIMATIONS & TRANSITIONS

### Background Animations
- [ ] Background shift animation (15s cycle)
- [ ] Gradient opacity changes
- [ ] Glow effect animations

### Card Animations
- [ ] Hover scale transformations
- [ ] Border glow transitions
- [ ] Shadow effect changes
- [ ] Selection state animations

### Button Animations
- [ ] Hover lift effects
- [ ] Active press animations
- [ ] Glow intensity changes
- [ ] Icon transformations

### Content Transitions
- [ ] Mission brief content fade
- [ ] Text update animations
- [ ] Deployment area changes




---

*This checklist ensures all UI elements from the map selection screen are accounted for during design implementation.* 