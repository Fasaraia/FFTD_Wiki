// Load items page content
function initItemsPage() {
    const itemsContent = document.querySelector('.items-content');
    
    if (!itemsContent) {
        console.error('Items content area not found');
        return;
    }
    
    let html = '';
    
    // Loop through each item type category
    Object.keys(itemsData).forEach(categoryKey => {
        const category = itemsData[categoryKey];
        
        html += `
            <div class="item-type-section">
                <div class="item-type-title">${category.title}</div>
                <div class="items-grid">
        `;
        
        // Add each item in the category
        category.items.forEach(item => {
            const obtainmentList = item.obtainment.map(method => `<li>${method}</li>`).join('');
            
            html += `
                <div class="item-card" data-item-id="${item.id}">
                    <img src="${item.image}" alt="${item.name}" class="item-image">
                    <div class="item-name">${item.name}</div>
                    
                    <div class="item-tooltip">
                        <div class="tooltip-header">
                            <img src="${item.image}" alt="${item.name}" class="tooltip-icon">
                            <div class="tooltip-name">${item.name}</div>
                        </div>
                        
                        <div class="tooltip-section">
                            <div class="tooltip-label">Description:</div>
                            <div class="tooltip-text">${item.description}</div>
                        </div>
                        
                        <div class="tooltip-section">
                            <div class="tooltip-label">How to Obtain:</div>
                            <div class="tooltip-text">
                                <ul>
                                    ${obtainmentList}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
    });
    
    itemsContent.innerHTML = html;
    attachItemEventListeners();
}

// Attach click event listeners to items
function attachItemEventListeners() {
    const itemCards = document.querySelectorAll('.item-card');
    
    itemCards.forEach(card => {
        card.addEventListener('click', () => {
            const itemId = card.dataset.itemId;
            console.log('Item clicked:', itemId);
            // Add any click functionality here (e.g., open detailed view)
        });
    });
}