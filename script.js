// Cherry Chase Kids Group - Interactive Features

// Kids data
const kids = ['Mia', '晚晚', '卷儿', 'Ella', '团团', '星星'];

// Event voting data
let eventVotes = {
    'art-craft': {},
    'music-dance': {},
    'outdoor': {},
    'farmers-market': {}
};

// Recipe data
const recipes = {
    'cookies': {
        title: 'Easy Chocolate Chip Cookies 🍪',
        difficulty: '⭐⭐ (Easy)',
        time: '30 minutes',
        ingredients: [
            '2 cups all-purpose flour',
            '1 cup chocolate chips',
            '1/2 cup butter (softened)',
            '1/2 cup brown sugar',
            '1/4 cup white sugar',
            '1 egg',
            '1 tsp vanilla extract',
            '1/2 tsp baking soda',
            '1/2 tsp salt'
        ],
        instructions: [
            'Preheat oven to 375°F (190°C)',
            'Mix butter and sugars until creamy',
            'Add egg and vanilla, mix well',
            'In separate bowl, mix flour, baking soda, and salt',
            'Gradually add dry ingredients to wet mixture',
            'Fold in chocolate chips',
            'Drop rounded tablespoons onto ungreased cookie sheet',
            'Bake 9-11 minutes until golden brown',
            'Let cool on baking sheet for 2 minutes',
            'Enjoy your delicious cookies! 🍪'
        ]
    },
    'pancakes': {
        title: 'Fun Pancake Shapes 🥞',
        difficulty: '⭐ (Super Easy)',
        time: '20 minutes',
        ingredients: [
            '1 cup pancake mix',
            '1 egg',
            '3/4 cup milk',
            '2 tbsp melted butter',
            'Food coloring (optional)',
            'Syrup and toppings'
        ],
        instructions: [
            'Mix pancake mix, egg, and milk in a bowl',
            'Add melted butter and mix until smooth',
            'Add food coloring if desired (different colors for fun!)',
            'Heat a non-stick pan over medium heat',
            'Pour batter into fun shapes (hearts, stars, animals)',
            'Cook until bubbles form on top',
            'Flip carefully and cook other side',
            'Serve with syrup, berries, or whipped cream',
            'Have fun eating your shaped pancakes! 🥞'
        ]
    },
    'smoothie': {
        title: 'Fruit Smoothie Bowl 🍓',
        difficulty: '⭐ (Super Easy)',
        time: '15 minutes',
        ingredients: [
            '1 frozen banana',
            '1/2 cup mixed berries (frozen)',
            '1/2 cup yogurt',
            '1/4 cup milk',
            '1 tbsp honey',
            'Granola for topping',
            'Fresh fruit for decoration'
        ],
        instructions: [
            'Add frozen banana and berries to blender',
            'Add yogurt, milk, and honey',
            'Blend until smooth and creamy',
            'Pour into a bowl',
            'Top with granola',
            'Decorate with fresh fruit slices',
            'Add fun toppings like coconut flakes or chia seeds',
            'Enjoy your healthy and colorful smoothie bowl! 🍓'
        ]
    }
};

// Event voting functionality
function voteForEvent(eventId, kidName) {
    // Toggle vote (if already voted, remove vote)
    if (eventVotes[eventId][kidName]) {
        delete eventVotes[eventId][kidName];
        showNotification(`${kidName} removed their vote! 👋`, 'info');
    } else {
        eventVotes[eventId][kidName] = true;
        showNotification(`${kidName} voted for this event! 🎉`, 'success');
    }
    
    updateVoteResults(eventId);
    updateVoteButtons(eventId);
}

function updateVoteResults(eventId) {
    const resultsContainer = document.getElementById(`${eventId}-results`);
    const votes = eventVotes[eventId];
    const votedKids = Object.keys(votes);
    
    if (votedKids.length === 0) {
        resultsContainer.innerHTML = '<p style="color: #999; text-align: center;">No votes yet! Be the first to vote! 🗳️</p>';
        return;
    }
    
    let resultsHTML = '<h4 style="color: #2d3748; margin-bottom: 1rem;">Votes:</h4>';
    
    votedKids.forEach(kid => {
        resultsHTML += `
            <div class="vote-result-item">
                <span>👶 ${kid}</span>
                <span style="color: #48bb78; font-weight: 600;">✅ Voted!</span>
            </div>
        `;
    });
    
    resultsContainer.innerHTML = resultsHTML;
}

function updateVoteButtons(eventId) {
    const voteButtons = document.querySelectorAll(`[onclick*="${eventId}"]`);
    const votes = eventVotes[eventId];
    
    voteButtons.forEach(button => {
        const kidName = button.textContent.trim();
        if (votes[kidName]) {
            button.classList.add('voted');
            button.textContent = `✅ ${kidName}`;
        } else {
            button.classList.remove('voted');
            button.textContent = kidName;
        }
    });
}

// Recipe functionality
function showRecipe(recipeId) {
    const recipe = recipes[recipeId];
    if (!recipe) return;
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'recipe-modal';
    modal.id = 'recipe-modal';
    
    modal.innerHTML = `
        <div class="recipe-modal-content">
            <span class="close" onclick="closeRecipeModal()">&times;</span>
            <h2 style="color: #2d3748; margin-bottom: 1rem; text-align: center;">${recipe.title}</h2>
            <div style="background: #f7fafc; padding: 1rem; border-radius: 10px; margin-bottom: 1.5rem;">
                <p><strong>Difficulty:</strong> ${recipe.difficulty}</p>
                <p><strong>Time:</strong> ${recipe.time}</p>
            </div>
            <div style="margin-bottom: 1.5rem;">
                <h3 style="color: #2d3748; margin-bottom: 1rem;">🍯 Ingredients:</h3>
                <ul style="list-style: none; padding: 0;">
                    ${recipe.ingredients.map(ingredient => 
                        `<li style="padding: 0.5rem 0; padding-left: 1.5rem; position: relative;">
                            <span style="position: absolute; left: 0;">🍯</span>
                            ${ingredient}
                        </li>`
                    ).join('')}
                </ul>
            </div>
            <div>
                <h3 style="color: #2d3748; margin-bottom: 1rem;">👨‍🍳 Instructions:</h3>
                <ol style="padding-left: 1.5rem;">
                    ${recipe.instructions.map((instruction, index) => 
                        `<li style="padding: 0.5rem 0; line-height: 1.6;">${instruction}</li>`
                    ).join('')}
                </ol>
            </div>
            <div style="text-align: center; margin-top: 2rem;">
                <button onclick="closeRecipeModal()" style="background: linear-gradient(45deg, #ff6b6b, #ff8e8e); color: white; border: none; padding: 1rem 2rem; border-radius: 25px; font-weight: 600; cursor: pointer; font-size: 1.1rem;">
                    Close Recipe 📖
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'block';
    
    // Add click outside to close
    modal.onclick = function(event) {
        if (event.target === modal) {
            closeRecipeModal();
        }
    };
}

function closeRecipeModal() {
    const modal = document.getElementById('recipe-modal');
    if (modal) {
        modal.remove();
    }
}

// Smooth scrolling to events section
function scrollToEvents() {
    const eventsSection = document.getElementById('events');
    eventsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    const colors = {
        success: '#48bb78',
        error: '#f56565',
        info: '#4299e1'
    };
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${colors[type] || colors.info};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 15px;
        box-shadow: 0 6px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        font-weight: 600;
        font-size: 1rem;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 4000);
}

// Navigation highlighting
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Add active state styles for navigation
const style = document.createElement('style');
style.textContent = `
    .nav-links a.active {
        background: rgba(255, 255, 255, 0.3) !important;
        transform: translateY(-2px) !important;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2) !important;
    }
`;
document.head.appendChild(style);

// Scroll event listener for navigation highlighting
window.addEventListener('scroll', updateActiveNavLink);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Kid card interactions
function addKidCardInteractions() {
    const kidCards = document.querySelectorAll('.kid-card');
    
    kidCards.forEach(card => {
        card.addEventListener('click', () => {
            const kidName = card.dataset.kid;
            showNotification(`Hi ${kidName}! 👋 You're awesome!`, 'success');
            
            // Add bounce animation
            card.style.animation = 'none';
            setTimeout(() => {
                card.style.animation = 'bounce 0.6s ease';
            }, 10);
        });
        
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.05)';
        });
        
        card.addEventListener('mouseleave', () => {
            if (!card.style.animation) {
                card.style.transform = 'translateY(0) scale(1)';
            }
        });
    });
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    console.log('🍒 Cherry Chase Kids Group website loaded successfully!');
    
    // Initialize vote results
    Object.keys(eventVotes).forEach(eventId => {
        updateVoteResults(eventId);
    });
    
    // Add kid card interactions
    addKidCardInteractions();
    
    // Add click effects to event cards
    const eventCards = document.querySelectorAll('.event-card');
    eventCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Don't trigger if clicking on vote buttons
            if (!e.target.classList.contains('vote-btn')) {
                card.style.transform = 'translateY(-10px) scale(1.02)';
                setTimeout(() => {
                    card.style.transform = 'translateY(-10px) scale(1)';
                }, 150);
            }
        });
    });
    
    // Add floating animation to emojis in hero
    const heroEmojis = document.querySelector('.hero::before');
    if (heroEmojis) {
        setInterval(() => {
            const emojis = ['🍒', '🎈', '🎨', '🎵', '🍪', '🌟', '🎪', '👶', '🎭', '🏃‍♀️'];
            const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
            // This would require more complex implementation for random emoji changes
        }, 3000);
    }
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', (event) => {
        // ESC key to close recipe modal
        if (event.key === 'Escape') {
            closeRecipeModal();
        }
        
        // Number keys 1-6 to vote for kids in first event
        if (event.key >= '1' && event.key <= '6') {
            const kidIndex = parseInt(event.key) - 1;
            if (kids[kidIndex]) {
                voteForEvent('art-craft', kids[kidIndex]);
            }
        }
    });
    
    // Add welcome message
    setTimeout(() => {
        showNotification('Welcome to Cherry Chase Kids Group! 🍒', 'success');
    }, 1000);
});

// Add some fun Easter eggs
function addEasterEggs() {
    // Konami code easter egg
    let konamiCode = [];
    const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
    
    document.addEventListener('keydown', (event) => {
        konamiCode.push(event.code);
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        if (konamiCode.join(',') === konamiSequence.join(',')) {
            showNotification('🎉 Secret unlocked! You found the hidden feature! 🎉', 'success');
            // Add rainbow effect to all cards
            document.querySelectorAll('.event-card, .playdate-card, .recipe-card').forEach(card => {
                card.style.animation = 'rainbow 2s infinite';
            });
            
            // Reset after 5 seconds
            setTimeout(() => {
                document.querySelectorAll('.event-card, .playdate-card, .recipe-card').forEach(card => {
                    card.style.animation = '';
                });
            }, 5000);
            
            konamiCode = [];
        }
    });
}

// Add rainbow animation
const rainbowStyle = document.createElement('style');
rainbowStyle.textContent = `
    @keyframes rainbow {
        0% { border-color: #ff6b6b; }
        16% { border-color: #ff8e8e; }
        33% { border-color: #ffd93d; }
        50% { border-color: #6bcf7f; }
        66% { border-color: #4d9de0; }
        83% { border-color: #e15f41; }
        100% { border-color: #ff6b6b; }
    }
`;
document.head.appendChild(rainbowStyle);

// Initialize easter eggs
addEasterEggs();