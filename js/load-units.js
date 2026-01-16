// Main units array - will be populated from separate files
let unitsData = [];
let infoOpen = false;
let scriptsLoaded = false;

// Function to load all unit data files
async function loadAllUnitData() {
    try {
        // Import all unit data files

        if (!scriptsLoaded) {
            // Import all unit data files
            const dataFiles = [
                'js/Unit-Data/Grade-3-Units.js',
                'js/Unit-Data/Grade-4-Units.js',
                'js/Unit-Data/Grade-5-Units.js',
                'js/Unit-Data/Secret-Units.js'
            ];
            
            // Load each file as a script
            for (const file of dataFiles) {
                await loadScript(file);
            }
            
            scriptsLoaded = true;
        }
        
        console.log('All unit data loaded successfully. Total units:', unitsData.length);
        
        // Initialize the UI after data is loaded
        initializeUpdateDropdown();
        setupFilterListeners();
        unitsCleanup();
        loadUnits();
        
    } catch (error) {
        console.error('Error loading unit data:', error);
    }
}

// Helper function to load a script dynamically
function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

function unitsCleanup() {
    infoOpen = false;
}

// Function to close unit info panel
function closeUnitInfo() {
    const unitsPage = document.querySelector('.units-page');
    const unitInfo = document.querySelector('.unit-info');
    const unitsDisplay = document.querySelector('.units-display');
    const infoContent = document.querySelector('.unit-info .info-content');
    
    if (!infoOpen) return;

   const elements = infoContent.querySelectorAll('.unit-info-element');
    anime({
        targets: elements,
        opacity: {
            value: [1, 0],
            duration: 200,
            easing: 'linear'
        },
        translateY: {
            value: [0, 20],
            duration: 200,
            easing: 'linear'
        },
        delay: anime.stagger(100, {direction: 'reverse'}),
        complete: () => {
            if (unitInfo) {
                anime({
                    targets: unitInfo,
                    opacity: [1, 0],
                    translateY: [0, 10],
                    duration: 500,
                    easing: 'easeInCubic',
                    complete: () => {
                        if (unitsDisplay) {
                            anime({
                                targets: unitsDisplay,
                                width: '56vw',
                                duration: 300,
                                easing: 'easeInCubic',
                                complete: () => {
                                    infoOpen = false;
                                    // Remove unit-selected class
                                    const unitsPage = document.querySelector('.units-page');
                                    if (unitsPage) {
                                        unitsPage.classList.remove('unit-selected');
                                    }
                                    // Clear content
                                    if (infoContent) {
                                        infoContent.innerHTML = '';
                                    }
                                }
                            });
                        }
                    }
                });
            }
        }
    });
}

// Function to load evolved unit when clicking the evolution image
function loadEvolvedUnit(unitName) {
    const evolvedUnit = unitsData.find(u => u.name === unitName);
    if (evolvedUnit) {
        showUnitInfo(evolvedUnit);
    } else {
        console.warn(`Evolved unit "${unitName}" not found in unitsData`);
        alert(`Evolved unit "${unitName}" not found. Make sure the unit exists in your data files.`);
    }
}

// Initialize update dropdown
function initializeUpdateDropdown() {
    const select = document.getElementById('update-select');
    if (!select) {
        console.error('Update select not found');
        return;
    }
    
    // Get unique updates from unitsData
    const updates = [...new Set(unitsData.map(unit => unit.update))].sort();
    
    console.log('Found updates:', updates);
    
    select.innerHTML = '<option value="all">All Updates</option>';
    
    updates.forEach(update => {
        const option = document.createElement('option');
        option.value = update;
        option.textContent = `Update ${update}`;
        select.appendChild(option);
    });
    
    console.log('Dropdown populated with', select.options.length, 'options');
}

// Apply filters to units
function applyFilters(units, filters) {
    if (!filters) {
        return units;
    }
    
    return units.filter(unit => {
        // Rarity filter
        if (filters.rarity.length > 0 && !filters.rarity.includes(unit.rarity)) {
            return false;
        }
        
        // Class filter
        if (filters.class.length > 0 && !filters.class.includes(unit.class)) {
            return false;
        }
        
        // Update filter
        if (filters.update !== 'all' && unit.update !== filters.update) {
            return false;
        }
        
        // Placement filter
        if (filters.placement.length > 0 && !filters.placement.includes(unit.placement)) {
            return false;
        }
        
        return true;
    });
}

// Get current filter state - ID BASED VERSION
function getCurrentFilters() {
    const filters = {
        rarity: [],
        class: [],
        update: 'all',
        placement: []
    };
    
    // Get rarity filters using IDs
    if (document.getElementById('filter-secret')?.checked) {
        filters.rarity.push('Secret');
    }
    if (document.getElementById('filter-grade5')?.checked) {
        filters.rarity.push('Grade 5');
    }
    if (document.getElementById('filter-grade4')?.checked) {
        filters.rarity.push('Grade 4');
    }
    if (document.getElementById('filter-grade3')?.checked) {
        filters.rarity.push('Grade 3');
    }
    
    // Get class filters using IDs
    if (document.getElementById('filter-paladin')?.checked) {
        filters.class.push('Paladin');
    }
    if (document.getElementById('filter-magician')?.checked) {
        filters.class.push('Magician');
    }
    if (document.getElementById('filter-bishop')?.checked) {
        filters.class.push('Bishop');
    }
    
    // Get update filter
    const updateSelect = document.getElementById('update-select');
    if (updateSelect) {
        filters.update = updateSelect.value;
    }
    
    // Get placement filters using IDs
    if (document.getElementById('filter-ground')?.checked) {
        filters.placement.push('Ground');
    }
    if (document.getElementById('filter-hill')?.checked) {
        filters.placement.push('Hill');
    }
    
    return filters;
}

// Reset all filters
function resetFilters() {
    const filterIds = [
        'filter-secret', 'filter-grade5', 'filter-grade4', 'filter-grade3',
        'filter-paladin', 'filter-magician', 'filter-bishop',
        'filter-ground', 'filter-hill'
    ];
    
    // Uncheck all checkboxes
    filterIds.forEach(id => {
        const checkbox = document.getElementById(id);
        if (checkbox) {
            checkbox.checked = false;
        }
    });
    
    // Reset update dropdown
    const updateSelect = document.getElementById('update-select');
    if (updateSelect) {
        updateSelect.value = 'all';
    }
    
    // Reload units with no filters
    loadUnits(unitsData, null);
}

// Setup filter event listeners
function setupFilterListeners() {
    // Array of all filter checkbox IDs
    const filterIds = [
        'filter-secret', 'filter-grade5', 'filter-grade4', 'filter-grade3',
        'filter-paladin', 'filter-magician', 'filter-bishop',
        'filter-ground', 'filter-hill'
    ];
    
    // Add event listeners to all filter checkboxes by ID
    filterIds.forEach(id => {
        const checkbox = document.getElementById(id);
        if (checkbox) {
            checkbox.addEventListener('change', () => {
                const filters = getCurrentFilters();
                loadUnits(unitsData, filters);
            });
        }
    });
    
    // Add event listener to update dropdown
    const updateSelect = document.getElementById('update-select');
    if (updateSelect) {
        updateSelect.addEventListener('change', () => {
            const filters = getCurrentFilters();
            loadUnits(unitsData, filters);
        });
    }
    
    // Add event listener to reset button
    const resetBtn = document.querySelector('.reset-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            resetFilters();
        });
    }
}

function loadUnits(units = unitsData, filters = null) {
    // Find the units-display container first
    const unitsDisplayContainer = document.querySelector('.units-display');
    
    if (!unitsDisplayContainer) {
        console.error('Units display container not found');
        return;
    }
    
    // Get the scroll-area inside it
    const unitsDisplay = unitsDisplayContainer.querySelector('.scroll-area');
    
    if (!unitsDisplay) {
        console.error('Scroll area not found. Available elements:', unitsDisplayContainer.children);
        return;
    }

    // Filter units if filters are provided
    let filteredUnits = units;
    if (filters) {
        filteredUnits = applyFilters(units, filters);
    }

    // Group units by rarity
    const groupedUnits = groupByRarity(filteredUnits);
    
    // Clear existing content except title and break
    const existingContent = unitsDisplay.querySelectorAll('.units-category, .no-units-message');
    existingContent.forEach(el => el.remove());

    // Create categories for each rarity
    const rarityOrder = ['Secret', 'Grade 5', 'Grade 4', 'Grade 3'];
    
    rarityOrder.forEach(rarity => {
        if (groupedUnits[rarity] && groupedUnits[rarity].length > 0) {
            const categoryDiv = createCategorySection(rarity, groupedUnits[rarity]);
            unitsDisplay.appendChild(categoryDiv);
        }
    });

    // If no units to display
    if (filteredUnits.length === 0) {
        const noUnitsMsg = document.createElement('div');
        noUnitsMsg.className = 'no-units-message';
        noUnitsMsg.textContent = 'No units match the selected filters';
        unitsDisplay.appendChild(noUnitsMsg);
    }
}

function groupByRarity(units) {
    return units.reduce((grouped, unit) => {
        const rarity = unit.rarity;
        if (!grouped[rarity]) {
            grouped[rarity] = [];
        }
        grouped[rarity].push(unit);
        return grouped;
    }, {});
}

function createCategorySection(rarity, units) {
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'units-category';
    
    const categoryTitle = document.createElement('div');
    categoryTitle.className = 'category-title';
    categoryTitle.textContent = rarity;
    
    const unitsGrid = document.createElement('div');
    unitsGrid.className = 'units-grid-inner';
    
    units.forEach(unit => {
        const unitCard = createUnitCard(unit);
        unitsGrid.appendChild(unitCard);
    });
    
    categoryDiv.appendChild(categoryTitle);
    categoryDiv.appendChild(unitsGrid);
    
    return categoryDiv;
}

function createUnitCard(unit) {
    const card = document.createElement('div');
    card.className = 'unit-card';
    
    // Add rarity class for styling
    const rarityClass = unit.rarity.toLowerCase().replace(' ', '-');
    card.classList.add(`rarity-${rarityClass}`);
    
    card.innerHTML = `
        <img src="${unit.imageIcon}">
        <div class="unit-name">${unit.name}</div>
    `;
    
    // Add click event to show unit info
    card.addEventListener('click', () => showUnitInfo(unit));
    
    return card;
}

function showUnitInfo(unit) {
    const infoContent = document.querySelector('.unit-info .info-content');
    const unitsPage = document.querySelector('.units-page');
    const unitInfo = document.querySelector('.unit-info');
    const unitsDisplay = document.querySelector('.units-display');

    if (!infoContent) {
        console.error('Info content element not found');
        return;
    }
    
    // Add class to trigger layout change
    if (unitsPage) {
        unitsPage.classList.add('unit-selected');
    }
    
    // Function to update content with animation
    const updateContent = () => {
        // Build Evolution Table
        let evolutionHTML = '';
        let hasEvolution = false;
        
        // Check if evolution object exists
        if (unit.evolution) {
            const evolvedImageSrc = unit.evolution.evolvedImage;
            const evolvedUnitName = unit.evolution.evolvedUnitName;
            
            evolutionHTML = `
                <div class="evolution-section">
                    <div class="evolution-header">
                        <h4>Evolution</h4>
                        <img src="${evolvedImageSrc}" 
                             alt="Evolved Unit" 
                             class="evolution-unit-image ${evolvedUnitName ? 'clickable' : ''}" 
                             onclick="${evolvedUnitName ? `loadEvolvedUnit('${evolvedUnitName}')` : ''}"
                             style="${evolvedUnitName ? 'cursor: pointer;' : ''}">
                    </div>
                    <div class="evolution-list">
            `;
            
            // Handle tasks if they exist
            if (unit.evolution.tasks) {
                Object.values(unit.evolution.tasks).forEach(task => {
                    evolutionHTML += `<div class="evolution-item task">${task}</div>`;
                });
            }
            
            // Handle resources if they exist
            if (unit.evolution.resources) {
                Object.entries(unit.evolution.resources).forEach(([resourceName, amount]) => {
                    const resourceLower = resourceName.toLowerCase();
                    evolutionHTML += `
                        <div class="evolution-item resource">
                            <img src="images/resources/${resourceLower}.png" alt="${resourceName}" class="resource-icon">
                            <div class="resource-amount">${amount}</div>
                        </div>
                    `;
                });
            }
            
            evolutionHTML += `</div></div>`;
            hasEvolution = true;
        }
        
        // Check if this is a money unit (bishop class with farm property)
        const isMoneyUnit = unit.class === 'Bishop' && unit.farm === true;

        // Build upgrades table
        let upgradesHTML = '';
        if (unit.upgrades) {
            upgradesHTML = `
                <div class="upgrades-section">
                    <h4>Upgrades</h4>
                    <table class="upgrades-table">
                        <thead>
                            <tr>
            `;
            
            if (isMoneyUnit) {
                // Money unit header
                upgradesHTML += `
                                <th>Upgrade</th>
                                <th>Cost</th>
                                <th>Money</th>
                `;
            } else {
                // Standard unit header
                upgradesHTML += `
                                <th>Upgrade</th>
                                <th>Cost</th>
                                <th>Damage</th>
                                <th>Range</th>
                                <th>Cooldown</th>
                                <th>AOE</th>
                                <th>Attack Type</th>
                `;
            }
            
            upgradesHTML += `
                            </tr>
                        </thead>
                        <tbody>
            `;
            
            Object.keys(unit.upgrades).forEach(Upgrade => {
                const upgrade = unit.upgrades[Upgrade];
                
                if (isMoneyUnit) {
                    // Money unit row
                    upgradesHTML += `
                        <tr>
                            <td>${Upgrade}</td>
                            <td>${upgrade.cost}</td>
                            <td>${upgrade.money || 'N/A'}</td>
                        </tr>
                    `;
                } else {
                    // Standard unit row
                    upgradesHTML += `
                        <tr>
                            <td>${Upgrade}</td>
                            <td>${upgrade.cost}</td>
                            <td>${upgrade.damage}</td>
                            <td>${upgrade.range}</td>
                            <td>${upgrade.cooldown}s</td>
                            <td>${upgrade.aoe}</td>
                            <td>${upgrade.attackType}</td>
                        </tr>
                    `;
                }
            });
            
            upgradesHTML += `
                        </tbody>
                    </table>
                </div>
            `;
        }
        
        // Build passives section
        let passivesHTML = '';
        let hasPassives = false;
        if (unit.passive && unit.passive.length > 0) {
            const validPassives = unit.passive.filter(p => p.passiveName && p.passiveName.trim() !== '');
            
            if (validPassives.length > 0) {
                passivesHTML = `
                    <div class="passives-section">
                        <h4>Passives</h4>
                `;
                
                validPassives.forEach((passive) => {
                    passivesHTML += `
                        <div class="passive-item">
                            <p class="item-title"><strong>${passive.passiveName}</strong></p>
                            <img src=${passive.passiveImage} class="item-icon">
                            <div class="item-details">
                                <p class="meta-info"><strong>Type:</strong> ${passive.passiveType}</p>
                                <p class="meta-info"><strong>Cooldown:</strong> ${passive.passiveCooldown}</p>
                                <p class="description">${passive.passiveDescription}</p>
                            </div>
                        </div>
                    `;
                });
                
                passivesHTML += `</div>`;
                hasPassives = true;
            }
        }
        
        // Build abilities section
        let abilitiesHTML = '';
        let hasAbilities = false;
        if (unit.ability && unit.ability.length > 0) {
            const validAbilities = unit.ability.filter(a => a.abilityName && a.abilityName.trim() !== '');
            
            if (validAbilities.length > 0) {
                abilitiesHTML = `
                    <div class="abilities-section">
                        <h4>Abilities</h4>
                `;
                
                validAbilities.forEach((ability) => {
                    abilitiesHTML += `
                        <div class="ability-item">
                            <p class="item-title"><strong>${ability.abilityName}</strong></p>
                            <img src=${ability.abilityImage} class="item-icon">
                            <div class="item-details">
                                <p class="meta-info"><strong>Type:</strong> ${ability.abilityType}</p>
                                <p class="meta-info"><strong>Cooldown:</strong> ${ability.abilityCooldown}</p>
                                <p class="description">${ability.abilityDescription}</p>
                            </div>
                        </div>
                    `;
                });
                
                abilitiesHTML += `</div>`;
                hasAbilities = true;
            }
        }
        
        // Build stats effects HTML
        let statsEffectsHTML = '';
        if (unit.statsEffects && unit.statsEffects.length > 0) {
            statsEffectsHTML = '<div class="stats-effects">';
            unit.statsEffects.forEach((effect) => {
                statsEffectsHTML += `
                    <div class="stats-effect-icon">
                        <img src="${effect.icon}" alt="${effect.name}">
                        <div class="stats-effect-tooltip">
                            <img src="${effect.icon}" alt="${effect.name}" class="tooltip-icon">
                            <div class="tooltip-text">
                                <strong>${effect.name}</strong>
                                <p>${effect.description}</p>
                            </div>
                        </div>
                    </div>
                `;
            });
            statsEffectsHTML += '</div>';
        }
        
        infoContent.innerHTML = `
            <div class="unit-details">
                
                    <img src="${unit.image}" alt="${unit.name}" class="info-image unit-info-element">
                    <div class="unit-title unit-info-element">${unit.name}</div>
                    <div class="unit-stats unit-info-element">
                        <div class="scroll-area">
                            <p><strong>Rarity:</strong> ${unit.rarity}</p>
                            <p><strong>Class:</strong> ${unit.class}</p>
                            <p><strong>Obtainnment:</strong> ${unit.obtainment}</p>
                            <p><strong>Placement:</strong> ${unit.placement}</p>
                            <p><strong>Update:</strong> ${unit.update}</p>
                        </div>
                        ${statsEffectsHTML}
                    </div>
                    ${evolutionHTML}
                    ${upgradesHTML}
                    ${passivesHTML}
                    ${abilitiesHTML}
            </div>
        `;
        
        // Dynamically adjust grid layout based on what sections exist
        const unitDetails = infoContent.querySelector('.unit-details');
        
        let gridTemplateAreas = '';
        let gridTemplateRows = 'auto auto auto';
        
        if (hasEvolution) {
            gridTemplateAreas = '"image title evolution evolution" "image stats evolution evolution"';
        } else {
            gridTemplateAreas = '"image title title title" "image stats stats stats"';
        }
        
        gridTemplateAreas += ' "upgrades upgrades upgrades upgrades"';
        gridTemplateRows += ' auto';
        
        if (hasPassives && hasAbilities) {
            gridTemplateAreas += ' "passives passives abilities abilities"';
            gridTemplateRows += ' auto';
        } else if (hasPassives) {
            gridTemplateAreas += ' "passives passives passives passives"';
            gridTemplateRows += ' auto';
        } else if (hasAbilities) {
            gridTemplateAreas += ' "abilities abilities abilities abilities"';
            gridTemplateRows += ' auto';
        }
        
        if (unitDetails) {
            unitDetails.style.gridTemplateAreas = gridTemplateAreas;
            unitDetails.style.gridTemplateRows = gridTemplateRows;
        }
        
        // Update CSS grid-area assignments
        const evolutionSection = infoContent.querySelector('.evolution-section');
        const upgradesSection = infoContent.querySelector('.upgrades-section');
        const passivesSection = infoContent.querySelector('.passives-section');
        const abilitiesSection = infoContent.querySelector('.abilities-section');
        const imageEl = infoContent.querySelector('.info-image');
        const titleEl = infoContent.querySelector('.unit-title');
        const statsEl = infoContent.querySelector('.unit-stats');
        
        if (imageEl) imageEl.style.gridArea = 'image';
        if (titleEl) titleEl.style.gridArea = 'title';
        if (statsEl) statsEl.style.gridArea = 'stats';
        if (evolutionSection) {
            evolutionSection.style.gridArea = 'evolution';
            evolutionSection.classList.add('unit-info-element');
        }
        if (upgradesSection) {
            upgradesSection.style.gridArea = 'upgrades';
            upgradesSection.classList.add('unit-info-element');
        }
        if (passivesSection) {
            passivesSection.style.gridArea = 'passives';
            passivesSection.classList.add('unit-info-element');
        }
        if (abilitiesSection) {
            abilitiesSection.style.gridArea = 'abilities';
            abilitiesSection.classList.add('unit-info-element');
        }
        infoContent.scrollTop = 0;
    };
    
    if (!infoOpen) {
        if (unitsDisplay) {
            anime({
                targets: unitsDisplay,
                width: '18vw',
                duration: 300,
                easing: 'easeOutCubic',
                complete: () => {
                    if (unitInfo) {
                        anime({
                            targets: unitInfo,
                            opacity: [0,1],
                            translateY: [10, 0],
                            duration: 500,
                            easing: 'easeOutCubic',
                            delay: 100,
                            complete: () => {
                                setTimeout(() => {
                                    updateContent();
                                    const elements = infoContent.querySelectorAll('.unit-info-element');
                                    anime({
                                        targets: elements,
                                        opacity: {
                                            value: [0, 1],
                                            duration: 200,
                                            easing: 'linear'
                                        },
                                        translateY: {
                                            value: [20, 0],
                                            duration: 200,
                                            easing: 'linear'
                                        },
                                        delay: anime.stagger(100)
                                    });
                                }, 200);
                            }   
                        });
                    }
                }
            });
        }
        infoOpen = true;
    } else {
        const currentDetails = infoContent.querySelector('.unit-details');
        if (currentDetails) {
            anime({
                targets: currentDetails,
                opacity: [1, 0],
                duration: 150,
                easing: 'easeInCubic',
                complete: () => {
                    updateContent();
                    const elements = infoContent.querySelectorAll('.unit-info-element');
                    anime({
                        targets: elements,
                        opacity: {
                            value: [0, 1],
                            duration: 200,
                            easing: 'linear'
                        },
                        translateY: {
                            value: [20, 0],
                            duration: 200,
                            easing: 'linear'
                        },
                        delay: anime.stagger(100)
                    });
                }
            });
        } else {
            updateContent();
        }   
    }
}