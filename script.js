// Game State Management
console.log('Script loading...');

class GameState {
    constructor() {
        this.resources = {
            resource: 245,
            ammunition: 78,
            food: 52,
            research: 19,
            population: { current: 45, max: 60 }
        };
        
        this.defenseUnits = {
            soldier: 25,
            mg: 8,
            rocket: 5,
            mortar: 2,
            mine: 12,
            wall: 18,
            outpost: 4
        };
        
        this.gameSpeed = 1;
        this.isPaused = false;
        this.dayProgress = 1; // percentage
        this.isNight = false;
        this.currentDay = 5; // Track current day number
        this.baseHealth = 78;
        this.selectedUnit = null;
        this.placementMode = false;
        this.refreshCount = 5;
        this.maxRefreshCount = 5;
    }
    
    updateResource(type, amount) {
        if (type === 'population') {
            this.resources.population.current = Math.max(0, Math.min(this.resources.population.max, this.resources.population.current + amount));
        } else {
            this.resources[type] = Math.max(0, this.resources[type] + amount);
        }
        this.updateResourceDisplay();
    }
    
    updateDefenseUnit(type, amount) {
        this.defenseUnits[type] = Math.max(0, this.defenseUnits[type] + amount);
        this.updateDefenseUnitsDisplay();
        this.updateDrawerDisplay();
    }
    
    updateResourceDisplay() {
        document.getElementById('resource-display').querySelector('.resource-value').textContent = this.resources.resource;
        document.getElementById('ammunition-display').querySelector('.resource-value').textContent = this.resources.ammunition;
        document.getElementById('food-display').querySelector('.resource-value').textContent = this.resources.food;
        document.getElementById('research-display').querySelector('.resource-value').textContent = this.resources.research;
        document.getElementById('population-display').querySelector('.resource-value').textContent = 
            `${this.resources.population.current}/${this.resources.population.max}`;
        
        // Update building card affordability
        this.updateBuildingCardStates();
        this.updatePlusButtonStates();
    }
    
    updateDefenseUnitsDisplay() {
        Object.keys(this.defenseUnits).forEach(unit => {
            const unitButtons = document.querySelectorAll(`[data-unit="${unit}"]`);
            unitButtons.forEach(button => {
                const countSpan = button.querySelector('span');
                if (countSpan) {
                    countSpan.textContent = this.defenseUnits[unit];
                }
            });
        });
    }
    
    updateDrawerDisplay() {
        const drawerItems = document.querySelectorAll('.drawer-item');
        const units = ['soldier', 'mg', 'rocket', 'mortar', 'mine', 'wall', 'outpost'];
        
        drawerItems.forEach((item, index) => {
            if (index < units.length) {
                const span = item.querySelector('span');
                if (span) {
                    span.textContent = this.defenseUnits[units[index]];
                }
            }
        });
    }
    
    updateBuildingCardStates() {
        const cards = document.querySelectorAll('.building-card-img');
        cards.forEach(card => {
            const cost = parseInt(card.dataset.cost);
            card.className = card.className.replace(/(affordable|unaffordable)/g, '');
            
            if (this.resources.resource >= cost) {
                card.classList.add('affordable');
            } else {
                card.classList.add('unaffordable');
            }
        });
    }
    
    updatePlusButtonStates() {
        const plusButtons = document.querySelectorAll('.plus-button');
        plusButtons.forEach(button => {
            const cost = parseInt(button.dataset.cost);
            if (this.resources.ammunition >= cost) {
                button.classList.remove('disabled');
            } else {
                button.classList.add('disabled');
            }
        });
    }
}

// Card Pool Data
const cardPool = [
    { src: 'Cards/Factory.png', alt: 'Factory', cost: 150, name: 'Factory' },
    { src: 'Cards/House.png', alt: 'House', cost: 120, name: 'House' },
    { src: 'Cards/Ammo.png', alt: 'Ammo Factory', cost: 400, name: 'Ammo Factory' },
    { src: 'Cards/Labotatory.png', alt: 'Laboratory', cost: 300, name: 'Laboratory' },
    { src: 'Cards/movecardd.png', alt: 'Move Card', cost: 50, name: 'Move Card' },
    { src: 'Cards/directlevelupcard.png', alt: 'Direct Level Up', cost: 200, name: 'Direct Level Up' }
];

// Initialize game state
const gameState = new GameState();

// UI Event Handlers
class UIManager {
    constructor() {
        console.log('UIManager constructor called');
        this.tooltip = document.getElementById('tooltip');
        this.initializeEventListeners();
        this.initializePlacementGrid();
        this.updateRefreshCountDisplay();
        this.startGameLoop();
        console.log('UIManager initialization complete');
    }
    
    initializeEventListeners() {
        // Population drawer toggle
        const populationItem = document.getElementById('population-display');
        const defenseDrawer = document.getElementById('defense-drawer');
        
        populationItem.addEventListener('click', () => {
            populationItem.classList.toggle('expanded');
            defenseDrawer.classList.toggle('active');
        });
        
        // Plus buttons for purchasing units
        document.querySelectorAll('.plus-button').forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                this.handleUnitPurchase(button);
            });
        });
        
        // Unit buttons for placement
        document.querySelectorAll('.unit-button').forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                this.handleUnitSelection(button);
            });
        });
        
        // Building cards
        document.querySelectorAll('.building-card-img').forEach(card => {
            card.addEventListener('click', () => {
                this.handleBuildingPurchase(card);
            });
        });
        
        // Game speed controls
        document.querySelectorAll('.control-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.handleSpeedControl(btn);
            });
        });
        
        // End day button
        document.getElementById('end-day-btn').addEventListener('click', () => {
            this.handleEndDay();
        });
        
        // Refresh cards button
        document.getElementById('refresh-cards-btn').addEventListener('click', () => {
            this.refreshCards();
        });
        
        // Home building click handler
        const homeBuildingElement = document.getElementById('home-building');
        if (homeBuildingElement) {
            homeBuildingElement.addEventListener('click', () => {
                console.log('Home building clicked!'); // Debug log
                this.handleHomeBuildingClick();
            });
        } else {
            console.error('Home building element not found!');
        }
        
        // Soldier NPC click handler
        const soldierNpcElement = document.getElementById('soldier-npc');
        if (soldierNpcElement) {
            soldierNpcElement.addEventListener('click', () => {
                console.log('Soldier NPC clicked!'); // Debug log
                this.handleSoldierNpcClick();
            });
        } else {
            console.error('Soldier NPC element not found!');
        }
        
        // Farmer NPC click handler
        const farmerNpcElement = document.getElementById('farmer-npc');
        if (farmerNpcElement) {
            farmerNpcElement.addEventListener('click', () => {
                console.log('Farmer NPC clicked!'); // Debug log
                this.handleFarmerNpcClick();
            });
        } else {
            console.error('Farmer NPC element not found!');
        }
        
        // Add tooltip to refresh button
        this.addTooltip(document.getElementById('refresh-cards-btn'), 
            '<div class="tooltip-main">Refresh the available building cards. Shuffles 3 random cards from your collection.</div><div class="tooltip-meta"><em>You can upgrade from meta upgrades section to increase the max refresh count.</em></div>');
        
        // Tooltip handlers
        this.initializeTooltips();
        
        // Initialize NPC Dialogue System
        this.initializeNPCDialogueSystem();
        
        // Add keyboard controls for dialogue
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isDialogueActive) {
                this.hideNPCDialogue();
            }
        });
        
        // Click outside to deselect
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.unit-button')) {
                this.clearUnitSelection();
            }
        });
    }
    
    initializePlacementGrid() {
        // Grid functionality removed for UI/UX mockup
    }
    
    handleUnitPurchase(button) {
        const cost = parseInt(button.dataset.cost);
        const unit = button.dataset.unit;
        
        if (gameState.resources.ammunition >= cost && !button.classList.contains('disabled')) {
            gameState.updateResource('ammunition', -cost);
            gameState.updateDefenseUnit(unit, 1);
            
            // Visual feedback
            this.showFloatingText(button, '-' + cost, '#32CD32');
            button.style.transform = 'scale(1.2)';
            setTimeout(() => {
                button.style.transform = '';
            }, 200);
        }
    }
    
    handleUnitSelection(button) {
        const unit = button.dataset.unit;
        const count = gameState.defenseUnits[unit];
        
        if (count > 0) {
            // Clear previous selection
            document.querySelectorAll('.unit-button').forEach(btn => {
                btn.classList.remove('selected');
            });
            
            // Select this unit (visual feedback only for UI/UX mockup)
            button.classList.add('selected');
            gameState.selectedUnit = unit;
            
            // Show notification instead of grid
            this.showNotification(`${unit.toUpperCase()} selected for placement`);
        }
    }
    
    clearUnitSelection() {
        document.querySelectorAll('.unit-button').forEach(btn => {
            btn.classList.remove('selected');
        });
        gameState.selectedUnit = null;
    }
    
    // Grid cell functionality removed for UI/UX mockup
    
    handleBuildingPurchase(card) {
        const cost = parseInt(card.dataset.cost);
        
        if (gameState.resources.resource >= cost && card.classList.contains('affordable')) {
            gameState.updateResource('resource', -cost);
            
            // Visual feedback
            this.showFloatingText(card, '-' + cost, '#FFD700');
            card.style.transform = 'scale(1.1) rotate(2deg)';
            setTimeout(() => {
                card.style.transform = '';
            }, 300);
            
            // Simulate building placement (could expand this)
            this.showNotification('Building purchased successfully!');
        }
    }
    
    handleSpeedControl(btn) {
        // Clear active states
        document.querySelectorAll('.control-btn').forEach(b => {
            b.classList.remove('active');
        });
        
        // Set new active state
        btn.classList.add('active');
        
        // Update game speed
        if (btn.id === 'pause-btn') {
            gameState.isPaused = true;
            gameState.gameSpeed = 0;
        } else if (btn.id === 'play-btn') {
            gameState.isPaused = false;
            gameState.gameSpeed = 1;
        } else if (btn.id === 'speed-2x-btn') {
            gameState.isPaused = false;
            gameState.gameSpeed = 2;
        } else if (btn.id === 'speed-3x-btn') {
            gameState.isPaused = false;
            gameState.gameSpeed = 3;
        }
    }
    
    handleEndDay() {
        // Prevent manual day ending during night
        if (gameState.isNight) {
            this.showNotification('Cannot end day during night!');
            return;
        }
        
        const endDayBtn = document.getElementById('end-day-btn');
        
        // Visual feedback
        endDayBtn.style.transform = 'scale(0.95)';
        endDayBtn.textContent = 'TRANSITIONING...';
        
        setTimeout(() => {
            this.transitionToNight();
            endDayBtn.style.transform = '';
            endDayBtn.textContent = 'END DAY';
        }, 1000);
    }
    
    transitionToNight() {
        const dayIcon = document.getElementById('day-night-icon');
        const progressBorder = document.getElementById('progress-border');
        const dayCounter = document.querySelector('.day-counter');
        
        if (!gameState.isNight) {
            // Transitioning from day to night
            gameState.isNight = true;
            
            // Add night mode background
            document.body.classList.add('night-mode');
            
            // Update visual elements for night
            dayIcon.className = 'fas fa-moon';
            dayIcon.style.color = '#C0C0C0';
            progressBorder.style.display = 'none';
            
            // Update day counter when transitioning to night
            gameState.currentDay++;
            dayCounter.textContent = `NIGHT-${gameState.currentDay}`;
            
            // Hide END DAY button during night
            this.updateEndDayButtonVisibility();
            
            // Show night transition notification
            this.showNotification('Night falls...');
            
            // Simulate night phase
            setTimeout(() => {
                this.simulateNightPhase();
            }, 2000);
            
        } else {
            // Transitioning from night to day
            gameState.isNight = false;
            
            // Remove night mode background
            document.body.classList.remove('night-mode');
            
            // Update visual elements for day
            dayIcon.className = 'fas fa-sun';
            dayIcon.style.color = '#FFA500';
            progressBorder.style.display = 'block';
            gameState.dayProgress = 0;
            
            // Update day counter display
            dayCounter.textContent = `DAY-${gameState.currentDay}`;
            
            // Show END DAY button during day
            this.updateEndDayButtonVisibility();
            
            // Show day transition notification
            this.showNotification('Day breaks!');
            
            // Update progress bar
            const progressFill = document.getElementById('progress-fill');
            if (progressFill) {
                progressFill.style.width = '0%';
            }
        }
    }
    
    simulateNightPhase() {
        // Simulate combat and resource changes
        const events = [
         
        ];
        
        events.forEach((event, index) => {
            setTimeout(() => {
                this.showNotification(event);
            }, index * 1000);
        });
        
        // Random resource changes during night
        setTimeout(() => {
            gameState.updateResource('resource', Math.floor(Math.random() * 20) + 5);
            gameState.updateResource('ammunition', Math.floor(Math.random() * 15) - 5);
            gameState.updateResource('food', Math.floor(Math.random() * 10) - 3);
            
            // Random health changes during night (small fluctuations)
            const healthChange = Math.floor(Math.random() * 6) - 3; // -3 to +2
            if (healthChange !== 0) {
                gameState.baseHealth = Math.max(0, Math.min(100, gameState.baseHealth + healthChange));
                this.updateHealthBarVisuals();
            }
            
            // Show final night message
            this.showNotification('Dawn approaches...');
            
            // Transition back to day after night events complete
            setTimeout(() => {
                this.transitionToNight(); // This will now transition back to day
            }, 2000);
        }, 4000);
    }
    
    refreshCards() {
        // Check if we have refresh counts left
        if (gameState.refreshCount <= 0) {
            this.showNotification('No refresh counts remaining!');
            return;
        }
        
        // Decrease refresh count
        gameState.refreshCount--;
        this.updateRefreshCountDisplay();
        
        // Shuffle the card pool and select 3 random cards
        const shuffledCards = [...cardPool].sort(() => Math.random() - 0.5);
        const selectedCards = shuffledCards.slice(0, 3);
        
        // Get the cards container
        const cardsContainer = document.querySelector('.building-cards');
        
        // Clear existing cards
        cardsContainer.innerHTML = '';
        
        // Add new random cards
        selectedCards.forEach(card => {
            const imgElement = document.createElement('img');
            imgElement.src = card.src;
            imgElement.alt = card.alt;
            imgElement.className = 'building-card-img';
            imgElement.dataset.cost = card.cost;
            
            // Add click event listener
            imgElement.addEventListener('click', () => {
                this.handleBuildingPurchase(imgElement);
            });
            
            cardsContainer.appendChild(imgElement);
        });
        
        // Update affordability states
        gameState.updateBuildingCardStates();
        
        // Visual feedback
        const refreshBtn = document.getElementById('refresh-cards-btn');
        refreshBtn.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            refreshBtn.style.transform = '';
        }, 300);
        
        this.showNotification('Cards refreshed!');
    }
    
    updateRefreshCountDisplay() {
        const refreshCountElement = document.getElementById('refresh-count');
        refreshCountElement.textContent = `${gameState.refreshCount}/${gameState.maxRefreshCount}`;
        
        const refreshButton = document.getElementById('refresh-cards-btn');
        refreshButton.classList.toggle('disabled', gameState.refreshCount <= 0);
        
        if (gameState.refreshCount <= 0) {
            refreshButton.style.pointerEvents = 'none';
        } else {
            refreshButton.style.pointerEvents = 'auto';
        }
    }
    
    handleHomeBuildingClick() {
        console.log('handleHomeBuildingClick called!'); // Debug log
        
        // Show notification
        this.showNotification('Opening Meta Upgrade System...');
        
        // Show floating text
        const homeBuilding = document.getElementById('home-building');
        if (homeBuilding) {
            this.showFloatingText(homeBuilding, 'META UPGRADES', '#FFD700');
        }
        
        // Open the Meta Upgrade popup
        this.openMetaUpgradePopup();
        
        console.log('Home building clicked! Opening Meta Upgrade System');
        
        // Example: Flash the health bar to show connection
        const healthBar = document.querySelector('.health-fill');
        if (healthBar) {
            healthBar.style.animation = 'healthPulse 0.5s ease-in-out';
            setTimeout(() => {
                healthBar.style.animation = '';
            }, 500);
        }
        
        // Add attention animation to home building for 3 seconds
        const homeBuildingElement = document.getElementById('home-building');
        homeBuildingElement.classList.add('attention');
        setTimeout(() => {
            homeBuildingElement.classList.remove('attention');
        }, 3000);
    }
    
    openMetaUpgradePopup() {
        // Navigate to the meta-upgrade.html page
        window.location.href = 'meta-upgrade.html';
    }
    
    handleSoldierNpcClick() {
        console.log('handleSoldierNpcClick called!'); // Debug log
        
        // Show NPC dialogue popup
        this.showNPCDialogue('soldier');
        
        // Add attention animation to soldier NPC for 3 seconds
        const soldierNpcElement = document.getElementById('soldier-npc');
        soldierNpcElement.classList.add('attention');
        setTimeout(() => {
            soldierNpcElement.classList.remove('attention');
        }, 3000);
    }
    
    handleFarmerNpcClick() {
        console.log('handleFarmerNpcClick called!'); // Debug log
        
        // Show NPC dialogue popup
        this.showNPCDialogue('farmer');
        
        // Add attention animation to farmer NPC for 3 seconds
        const farmerNpcElement = document.getElementById('farmer-npc');
        farmerNpcElement.classList.add('attention');
        setTimeout(() => {
            farmerNpcElement.classList.remove('attention');
        }, 3000);
    }
    
    initializeTooltips() {
        // Resource tooltips
        const resourceItems = document.querySelectorAll('.resource-item');
        const resourceDescriptions = {
            'resource-display': 'Resources - Used to purchase buildings',
            'ammunition-display': 'Ammunition - Used to purchase defense units',
            'food-display': 'Food - Required to feed population',
            'research-display': 'Research Points - Used for technology upgrades',
            'population-display': 'Population - Current/Maximum capacity (Click to expand defense drawer)'
        };
        
        resourceItems.forEach(item => {
            const description = resourceDescriptions[item.id];
            if (description) {
                this.addTooltip(item, description);
            }
        });
        
        // Plus button tooltips
        document.querySelectorAll('.plus-button').forEach(button => {
            const cost = button.dataset.cost;
            const unit = button.dataset.unit;
            this.addTooltip(button, `Purchase ${unit} for ${cost} ammunition`);
        });
    }
    
    addTooltip(element, text) {
        element.addEventListener('mouseenter', (e) => {
            this.showTooltip(e, text);
        });
        
        element.addEventListener('mouseleave', () => {
            this.hideTooltip();
        });
        
        element.addEventListener('mousemove', (e) => {
            this.updateTooltipPosition(e);
        });
    }
    
    showTooltip(e, text) {
        this.tooltip.innerHTML = text;
        this.tooltip.classList.add('show');
        this.updateTooltipPosition(e);
    }
    
    hideTooltip() {
        this.tooltip.classList.remove('show');
    }
    
    updateTooltipPosition(e) {
        const tooltipRect = this.tooltip.getBoundingClientRect();
        let x = e.clientX + 10;
        let y = e.clientY - tooltipRect.height - 10;
        
        // Keep tooltip in viewport
        if (x + tooltipRect.width > window.innerWidth) {
            x = e.clientX - tooltipRect.width - 10;
        }
        if (y < 0) {
            y = e.clientY + 10;
        }
        
        this.tooltip.style.left = x + 'px';
        this.tooltip.style.top = y + 'px';
    }
    
    showFloatingText(element, text, color) {
        const floatingText = document.createElement('div');
        floatingText.textContent = text;
        
        // Create a unique animation name for this floating text
        const animationId = 'floatUp_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
        
        floatingText.style.cssText = `
            position: fixed;
            color: ${color};
            font-weight: bold;
            font-size: 14px;
            pointer-events: none;
            z-index: 1000;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
            animation: ${animationId} 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        `;
        
        const rect = element.getBoundingClientRect();
        floatingText.style.left = (rect.left + rect.width / 2) + 'px';
        floatingText.style.top = rect.top + 'px';
        
        // Create dynamic CSS animation for this specific floating text
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ${animationId} {
                0% { 
                    opacity: 0; 
                    transform: translate(-50%, 0) scale(0.8);
                }
                20% { 
                    opacity: 1; 
                    transform: translate(-50%, -10px) scale(1.1);
                }
                50% { 
                    opacity: 1; 
                    transform: translate(-50%, -25px) scale(1);
                }
                80% { 
                    opacity: 0.7; 
                    transform: translate(-50%, -35px) scale(0.9);
                }
                100% { 
                    opacity: 0; 
                    transform: translate(-50%, -50px) scale(0.7);
                }
            }
        `;
        
        document.head.appendChild(style);
        document.body.appendChild(floatingText);
        
        setTimeout(() => {
            if (document.body.contains(floatingText)) {
                document.body.removeChild(floatingText);
            }
            if (document.head.contains(style)) {
                document.head.removeChild(style);
            }
        }, 2500);
    }
    
    showNotification(message) {
        // Enhanced notification system with flowing animation
        const notification = document.createElement('div');
        notification.textContent = message;
        
        // Random starting position around the center
        const randomAngle = Math.random() * 2 * Math.PI;
        const startRadius = 200 + Math.random() * 150; // 200-350px from center
        const startX = Math.cos(randomAngle) * startRadius;
        const startY = Math.sin(randomAngle) * startRadius;
        
        // Create a unique animation name for this notification
        const animationId = 'notificationFlow_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
        
        notification.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) translate(${startX}px, ${startY}px) scale(0.3);
            background: rgba(0, 0, 0, 0.9);
            color: white;
            padding: 12px 20px;
            border-radius: 10px;
            border: 2px solid rgba(255, 215, 0, 0.8);
            font-weight: bold;
            z-index: 2000;
            font-size: 14px;
            white-space: nowrap;
            backdrop-filter: blur(8px);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
            opacity: 0;
            animation: ${animationId} 4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        `;
        
        // Create dynamic CSS animation for this specific notification
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ${animationId} {
                0% { 
                    opacity: 0;
                    transform: translate(-50%, -50%) translate(${startX}px, ${startY}px) scale(0.3);
                }
                20% { 
                    opacity: 1;
                    transform: translate(-50%, -50%) translate(${startX * 0.7}px, ${startY * 0.7}px) scale(0.8);
                }
                50% { 
                    opacity: 1;
                    transform: translate(-50%, -50%) translate(${startX * 0.3}px, ${startY * 0.3}px) scale(1);
                }
                70% { 
                    opacity: 1;
                    transform: translate(-50%, -50%) translate(0px, 0px) scale(1);
                }
                85% { 
                    opacity: 0.8;
                    transform: translate(-50%, -50%) translate(0px, 0px) scale(0.95);
                }
                100% { 
                    opacity: 0;
                    transform: translate(-50%, -50%) translate(0px, -20px) scale(0.8);
                }
            }
        `;
        
        document.head.appendChild(style);
        document.body.appendChild(notification);
        
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
            if (document.head.contains(style)) {
                document.head.removeChild(style);
            }
        }, 4000);
    }
    
    startGameLoop() {
        // Simple game loop for progress bar and other time-based updates
        setInterval(() => {
            if (!gameState.isPaused && !gameState.isNight) {
                // Update day progress
                gameState.dayProgress += gameState.gameSpeed * 0.5;
                
                // Check if day is complete (progress reaches 100%)
                if (gameState.dayProgress >= 100) {
                    gameState.dayProgress = 100;
                    this.transitionToNight();
                }
                
                // Update progress bar
                const progressFill = document.getElementById('progress-fill');
                if (progressFill) {
                    progressFill.style.width = gameState.dayProgress + '%';
                }
                
                // Random resource generation (very simple simulation)
                if (Math.random() < 0.02 * gameState.gameSpeed) {
                    gameState.updateResource('resource', Math.floor(Math.random() * 3) + 1);
                }
            }
            
            // Update End Day button state and visibility based on game conditions
            this.updateEndDayButtonState();
            
        }, 1000);
    }
    
    updateEndDayButtonVisibility() {
        const endDaySection = document.querySelector('.end-day-section');
        const endDayBtn = document.getElementById('end-day-btn');
        
        if (gameState.isNight) {
            // Hide END DAY button during night
            endDaySection.style.display = 'none';
        } else {
            // Show END DAY button during day
            endDaySection.style.display = 'flex';
        }
    }
    
    updateEndDayButtonState() {
        const endDayBtn = document.getElementById('end-day-btn');
        const { food, population, ammunition } = gameState.resources;
        
        // Only update button state if it's visible (during day)
        if (!gameState.isNight && endDayBtn) {
            // Reset classes
            endDayBtn.className = 'end-day-btn';
            
            // Check conditions
            if (ammunition < 10 || food < population.current) {
                endDayBtn.classList.add('critical');
            } else if (ammunition < 20 || food < population.current + 10) {
                endDayBtn.classList.add('warning');
            }
        }
        
        // Update button visibility based on day/night state
        this.updateEndDayButtonVisibility();
    }
    
    updateHealthBarVisuals() {
        const healthFill = document.querySelector('.health-fill');
        const healthText = document.querySelector('.health-text');
        const healthPercentage = gameState.baseHealth;
        
        if (healthFill && healthText) {
            // Update width
            healthFill.style.width = healthPercentage + '%';
            
            // Update text
            healthText.textContent = healthPercentage + '%';
            
            // Remove existing health state classes
            healthFill.classList.remove('health-critical', 'health-warning', 'health-good');
            
            // Add appropriate class based on health level
            if (healthPercentage <= 25) {
                healthFill.classList.add('health-critical');
            } else if (healthPercentage <= 50) {
                healthFill.classList.add('health-warning');
            } else {
                healthFill.classList.add('health-good');
            }
        }
    }
    
    // Method to change base health (for testing or game events)
    updateBaseHealth(newHealth) {
        gameState.baseHealth = Math.max(0, Math.min(100, newHealth));
        this.updateHealthBarVisuals();
        
        // Show floating text for health changes
        const healthSection = document.querySelector('.health-section');
        if (healthSection) {
            const healthChange = newHealth - gameState.baseHealth;
            const color = healthChange > 0 ? '#32CD32' : '#DC143C';
            const text = healthChange > 0 ? `+${healthChange}%` : `${healthChange}%`;
            this.showFloatingText(healthSection, text, color);
        }
    }

    // NPC Dialogue System
    initializeNPCDialogueSystem() {
        // NPC Dialogue Data
        this.npcData = {
            farmer: {
                names: ["Jake Morrison", "Maria Santos", "Tom Bradley"],
                titles: ["Crop Specialist", "Livestock Manager", "Supply Coordinator"],
                avatar: "👨‍🌾",
                avatarClass: "farmer-avatar",
                dialogues: [
                    "Harvest is coming in strong this season, should keep the city fed for months.",
                    "Water reserves are running low - we need to prioritize the irrigation systems.",
                    "New families arrived yesterday, they'll need housing near the farming district.",
                    "Storm season's coming early this year, better secure the equipment.",
                    "Kids are learning to read again - first time in years we've had a proper school.",
                    "Found some seeds in the old world ruins, might grow something special.",
                    "Community feast is planned for next week - everyone's contributing something.",
                    "Built new watchtowers around the perimeter, feel safer knowing they're there.",
                    "Radiation levels dropped near the east fields - safe to expand there now.",
                    "Every seed we plant is a promise that tomorrow will be better than today."
                ]
            },
            soldier: {
                names: ["Sergeant Alex Torres", "Lieutenant Sarah Kim", "Corporal Mike Chen"],
                titles: ["Defense Coordinator", "Patrol Leader", "Weapons Specialist"],
                avatar: "🪖",
                avatarClass: "soldier-avatar",
                dialogues: [
                    "Perimeter is secure, but we've spotted movement three clicks south.",
                    "Lost two good soldiers in yesterday's skirmish, but we held the line.",
                    "Command wants us to expand the safe zone, but we don't have the manpower.",
                    "Maintenance crew got the generators running at full capacity again.",
                    "Morale's high despite everything - these people are tougher than they look.",
                    "Ammunition stockpile is running dangerously low - need to prioritize production.",
                    "Enemy's using new tactics - they're getting smarter and more organized.",
                    "Intel suggests a major faction is moving into our territory from the west.",
                    "Communication array is picking up strange signals from the dead zones.",
                    "Every day we hold this ground is another day humanity survives."
                ]
            }
        };

        this.currentNPC = null;
        this.isDialogueActive = false;
        
        // Initialize timestamp update
        this.updateTimestamp();
        setInterval(() => this.updateTimestamp(), 1000);
    }

    // Update timestamp for dialogue
    updateTimestamp() {
        const now = new Date();
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const timestampElement = document.getElementById('timestamp');
        if (timestampElement) {
            timestampElement.textContent = `REC ${minutes}:${seconds} :14`;
        }
    }

    // Show NPC dialogue with random selection
    showNPCDialogue(npcType) {
        if (this.isDialogueActive) return;
        
        const npc = this.npcData[npcType];
        this.currentNPC = npcType;
        
        // Random character and dialogue selection
        const nameIndex = Math.floor(Math.random() * npc.names.length);
        const dialogueIndex = Math.floor(Math.random() * npc.dialogues.length);
        
        // Update UI elements
        const characterName = document.getElementById('characterName');
        const characterTitle = document.getElementById('characterTitle');
        const characterAvatar = document.getElementById('characterAvatar');
        const dialogueText = document.getElementById('dialogueText');
        
        if (characterName) characterName.textContent = npc.names[nameIndex];
        if (characterTitle) characterTitle.textContent = npc.titles[nameIndex];
        if (characterAvatar) {
            characterAvatar.textContent = npc.avatar;
            characterAvatar.className = `character-avatar ${npc.avatarClass}`;
        }
        // Show dialogue popup first
        const npcDialogue = document.getElementById('npcDialogue');
        if (npcDialogue) {
            npcDialogue.classList.add('active');
        }
        
        this.isDialogueActive = true;
        
        // Start typewriter effect for dialogue text
        if (dialogueText) {
            this.typewriterEffect(dialogueText, `"${npc.dialogues[dialogueIndex]}"`);
        }
        
        // Start audio/waveform animations
        this.startAudioAnimation();
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            if (this.isDialogueActive) {
                this.hideNPCDialogue();
            }
        }, 5000);
    }

    // Hide dialogue
    hideNPCDialogue() {
        const npcDialogue = document.getElementById('npcDialogue');
        if (npcDialogue) {
            npcDialogue.classList.remove('active');
        }
        this.stopAudioAnimation();
        this.clearTypewriterEffect();
        this.isDialogueActive = false;
        this.currentNPC = null;
    }

    // Start audio animation
    startAudioAnimation() {
        const audioBars = document.querySelectorAll('.audio-bar');
        const waveBars = document.querySelectorAll('.wave-bar');
        
        audioBars.forEach((bar, index) => {
            setTimeout(() => {
                bar.classList.add('active');
            }, index * 100);
        });
        
        waveBars.forEach((bar, index) => {
            setTimeout(() => {
                bar.classList.add('active');
            }, index * 50);
        });
    }

    // Stop audio animation
    stopAudioAnimation() {
        const audioBars = document.querySelectorAll('.audio-bar');
        const waveBars = document.querySelectorAll('.wave-bar');
        
        audioBars.forEach(bar => bar.classList.remove('active'));
        waveBars.forEach(bar => bar.classList.remove('active'));
    }

    // Typewriter effect for dialogue text
    typewriterEffect(element, text, speed = 25) {
        // Clear existing text and remove previous animation classes
        element.textContent = '';
        element.classList.remove('typewriter-active', 'typewriter-complete');
        
        // Add typewriter class for styling
        element.classList.add('typewriter-active');
        
        let index = 0;
        
        const typeCharacter = () => {
            if (index < text.length && this.isDialogueActive) {
                element.textContent += text.charAt(index);
                index++;
                
                // Add slight random variation to typing speed for more natural feel
                const randomDelay = speed + (Math.random() * 20 - 10);
                this.currentTypewriterTimeout = setTimeout(typeCharacter, randomDelay);
            } else {
                // Typing complete
                element.classList.remove('typewriter-active');
                element.classList.add('typewriter-complete');
                this.currentTypewriterTimeout = null;
            }
        };
        
        // Start typing
        this.currentTypewriterTimeout = setTimeout(typeCharacter, speed);
    }

    // Clear typewriter effect (useful when hiding dialogue early)
    clearTypewriterEffect() {
        if (this.currentTypewriterTimeout) {
            clearTimeout(this.currentTypewriterTimeout);
            this.currentTypewriterTimeout = null;
        }
        
        const dialogueText = document.getElementById('dialogueText');
        if (dialogueText) {
            dialogueText.classList.remove('typewriter-active', 'typewriter-complete');
        }
    }
}

// Initialize the UI when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded - Initializing UI Manager');
    const uiManager = new UIManager();
    
    // Initial state update
    gameState.updateResourceDisplay();
    gameState.updateDefenseUnitsDisplay();
    gameState.updateDrawerDisplay();
    uiManager.updateHealthBarVisuals();
    
    console.log('City Defense Z UI Mockup Initialized');
    console.log('Features:');
    console.log('- Click population to expand defense unit drawer');
    console.log('- Click + buttons to purchase units (requires ammunition)');
    console.log('- Click unit buttons to select for placement');
    console.log('- Click building cards to purchase (requires resources)');
    console.log('- Use speed controls and End Day button');
    console.log('- Hover over elements for tooltips');
}); 