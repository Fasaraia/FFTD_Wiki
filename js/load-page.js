function loadPage(page) {
    fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error('Page not found');
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('content').innerHTML = html;
            const elements = document.querySelectorAll('#content-box');
            elements.forEach(el => el.style.opacity = 0);
            animatePageContent();
            if (page.includes('units-page.html')) {
                loadAllUnitData();
            }
            else if (page.includes('gamemodes-page.html')){
                initGameModesPage();
            }
        })
        .catch(error => {
            console.error('Load error:', error);
            document.getElementById('content').innerHTML = 
                '<div class="section"><h2>Error</h2><p>Could not load page: ' + page + '</p></div>';
        });
}


function animatePageContent() {
    // Generic animation for other pages
    const elements = document.querySelectorAll('#content-box:not(.unit-info)');
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

loadPage('html/main.html');