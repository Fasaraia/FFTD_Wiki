// Game mode data mapping
const gameModeData = {
    journey: journeyMode,
    endless: endlessMode,
    fatesPath: fatesPathMode
};

// Load game mode content dynamically
function loadModeContent(mode) {
    const contentArea = document.querySelector('.content-area');
    const modeData = gameModeData[mode];
    
    if (!modeData) {
        console.error('Mode data not found:', mode);
        return;
    }
    
    let html = '';
    
    // Build content based on mode type
    if (mode === 'journey') {
        html = `
            <div class="mode-data active" id="journey-content">
                <div class="mode-description">
                    <h3>${modeData.description.heading}</h3>
                    <p>${modeData.description.text}</p>
                </div>
                <div class="story-select">
                    <h3>${modeData.storySelect.heading}</h3>
                    <div class="story-grid">
                        ${modeData.storySelect.stories.map(story => `
                            <div class="story-card ${story.locked ? 'locked' : ''}" data-story-name="${story.name}">
                                <div class="story-header">${story.name}</div>
                                <div class="story-image">
                                    <img src="${story.image}" alt="${story.name}" onerror="this.style.display='none'; this.parentElement.textContent='${story.name}';">
                                </div>
                                <div class="story-drop-table">
                                    <div class="drop-table-title">Drop Table</div>
                                    <div class="drop-items-grid">
                                        ${(story.dropTable || []).map(drop => {
                                            const difficultyClass = drop.Difficulty ? drop.Difficulty.toLowerCase().replace(/\+/g, '-plus') : '';
                                            const difficultyHTML = drop.Difficulty ? 
                                                `<div class="drop-item-difficulty difficulty-${difficultyClass}">${drop.Difficulty}</div>` : 
                                                '';
                                            return `
                                            <div class="drop-item">
                                                <div class="drop-item-image">
                                                    <img src="${drop.Image}" alt="${drop.Name}" onerror="this.style.display='none';">
                                                </div>
                                                <div class="drop-item-name">${drop.Name}</div>
                                                ${difficultyHTML}
                                            </div>
                                        `}).join('')}
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    } else if (mode === 'endless') {
        html = `
            <div class="mode-data active" id="endless-content">
                <div class="endless-grid">
                    <div class="endless-descriptions">
                        <div class="endless-desc-title">Mode Information</div>
                        <div class="endless-desc-content">
                            ${modeData.endlessGroup.descriptions.map(desc => `
                                <div class="endless-desc-item">
                                    <h4>${desc.title}</h4>
                                    <p>${desc.text}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="endless-drops-section">
                        <div class="endless-drop-title">Item Drops</div>
                        <div class="scroll-area">
                            <div class="endless-drop-items">
                                ${(modeData.endlessGroup.dropTable || []).map(drop => `
                                    <div class="drop-item">
                                        <div class="drop-item-image">
                                            <img src="${drop.Image}" alt="${drop.Name}" onerror="this.style.display='none';">
                                        </div>
                                        <div class="drop-item-name">${drop.Name}</div>
                                    </div>
                                
                                `).join('')}
                            </div>
                        </div>
                    </div>
                    <div class="endless-image-section">
                        <img src="${modeData.endlessGroup.image}" alt="Endless Mode" onerror="this.style.display='none'; this.parentElement.textContent='Endless Mode';">
                    </div>
                </div>
            </div>
        `;
    } else if (mode === 'fatesPath') {
        html = `
            <div class="mode-data active" id="fates-path-content">
                <div class="endless-grid">
                    <div class="endless-descriptions">
                        <div class="endless-desc-title">Fates Path Information</div>
                        <div class="endless-desc-content">
                            ${modeData.fatesGroup.descriptions.map(desc => `
                                <div class="endless-desc-item">
                                    <h4>${desc.title}</h4>
                                    <p>${desc.text}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="endless-drops-section">
                        <div class="endless-drop-title">Path Rewards</div>
                        <div class="endless-drop-items">
                            ${(modeData.fatesGroup.dropTable || []).map(drop => {
                                const difficultyClass = drop.Difficulty ? drop.Difficulty.toLowerCase().replace(/\+/g, '-plus') : '';
                                const difficultyHTML = drop.Difficulty ? 
                                    `<div class="drop-item-difficulty difficulty-${difficultyClass}">${drop.Difficulty}</div>` : 
                                    '';
                                return `
                                <div class="drop-item">
                                    <div class="drop-item-image">
                                        <img src="${drop.Image}" alt="${drop.Name}" onerror="this.style.display='none';">
                                    </div>
                                    <div class="drop-item-name">${drop.Name}</div>
                                    ${difficultyHTML}
                                </div>
                            `}).join('')}
                        </div>
                    </div>
                    <div class="endless-image-section">
                        <img src="${modeData.fatesGroup.image}" alt="Fate's Path" onerror="this.style.display='none'; this.parentElement.textContent='Fate\\'s Path';">
                    </div>
                </div>
                
            </div>
        `;
    }
    
    contentArea.innerHTML = html;
    attachEventListeners();
}

function attachEventListeners() {
    const storyCards = document.querySelectorAll('.story-card:not(.locked)');
    storyCards.forEach(card => {
        card.addEventListener('click', () => {
            const storyName = card.dataset.storyName;
            console.log('Story card clicked:', storyName);
        });
    });
    
    const endlessDropItems = document.querySelectorAll('.endless-drop-panel .drop-item');
    endlessDropItems.forEach(item => {
        item.addEventListener('click', () => {
            const itemName = item.querySelector('.drop-item-name').textContent;
            console.log('Endless drop item clicked:', itemName);
        });
    });
    
    const fatepathItems = document.querySelectorAll('.fate-item');
    fatepathItems.forEach(item => {
        item.addEventListener('click', () => {
            const pathId = item.dataset.pathId;
            console.log("Fate's Path clicked:", pathId);
        });
    });
}

function initGameModesPage() {
    const modeButtons = document.querySelectorAll('.mode-btn');
    const modeTitle = document.querySelector('.mode-title');
    
    loadModeContent('journey');
    
    modeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const mode = button.dataset.mode;
            const modeKey = mode === 'fates-path' ? 'fatesPath' : mode;
            
            modeButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            loadModeContent(modeKey);
            
            const modeData = gameModeData[modeKey];
            if (modeData) { modeTitle.textContent = modeData.title; }
        });
    });
}