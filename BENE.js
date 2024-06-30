// BENE.js

document.addEventListener('DOMContentLoaded', () => {
    // Mapping each flag to its respective country
    const flagMap = {
        'usa-flag': 'usa.html',
        'uk-flag': 'uk.html',
        'jap-flag': 'japan.html',
        'aus-flag': 'australia.html',
        'can-flag': 'canada.html'
    };

    // Adding event listeners to each flag
    Object.keys(flagMap).forEach(flagId => {
        const flagElement = document.getElementById(flagId);
        if (flagElement) {
            flagElement.addEventListener('click', () => {
                window.location.href = flagMap[flagId];
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const princetonCard = document.getElementById('princeton');
    const mitCard = document.getElementById('mit');
    const harvardCard = document.getElementById('harvard');
    const stanfordCard = document.getElementById('stanford');
    const yaleCard = document.getElementById('yale');

    princetonCard.addEventListener('click', () => {
        window.location.href = 'princeton.html';
    });

    mitCard.addEventListener('click', () => {
        window.location.href = 'mit.html';
    });

    harvardCard.addEventListener('click', () => {
        window.location.href = 'harvard.html';
    });

    stanfordCard.addEventListener('click', () => {
        window.location.href = 'stanford.html';
    });

    yaleCard.addEventListener('click', () => {
        window.location.href = 'yale.html';
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const tokyoCard = document.getElementById('tokyo');
    const kyotoCard = document.getElementById('kyoto');
    const osakaCard = document.getElementById('osaka');
    const tohokuCard = document.getElementById('tohoku');
    const tutCard = document.getElementById('tut');

    tokyoCard.addEventListener('click', () => {
        window.location.href = 'tokyo.html';
    });

    kyotoCard.addEventListener('click', () => {
        window.location.href = 'kyoto.html';
    });

    osakaCard.addEventListener('click', () => {
        window.location.href = 'osaka.html';
    });

    tohokuCard.addEventListener('click', () => {
        window.location.href = 'tohoku.html';
    });

    tutCard.addEventListener('click', () => {
        window.location.href = 'tut.html';
    });
});
// BENE.js

// Add event listeners to each university card link
document.querySelectorAll('.uni-card').forEach(card => {
    card.addEventListener('click', function() {
        // Get the href attribute of the clicked link
        const href = this.getAttribute('href');
        // Navigate to the linked page
        window.location.href = href;
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const uniCards = document.querySelectorAll('.uni-card');

    uniCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
        });
    });
});

