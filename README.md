# Cherry Chase Kids Group 🍒

A fun, interactive website for the Cherry Chase Kids Group featuring events, playdates, and cooking recipes for kids!

## Features

- 🍒 **Kid-Friendly Design** - Bright, playful colors and cute animations perfect for children
- 👶 **Meet the Kids** - Showcase of all 6 amazing kids: Mia, 晚晚, 卷儿, Ella, 团团, and 星星
- 🎪 **Interactive Events** - Vote for upcoming events including MTV Farmers Market, Art & Craft Day, Music & Dance Party, and Outdoor Adventure
- 🎈 **Playdates & Activities** - Information about fun indoor and outdoor activities
- 👨‍🍳 **Cooking Recipes** - Easy, kid-friendly recipes with step-by-step instructions
- 📱 **Responsive Design** - Works perfectly on all devices, from mobile to desktop
- ⚡ **Interactive Voting** - Kids can vote for events they want to attend
- 🎯 **Smooth Navigation** - Smooth scrolling and active link highlighting

## Project Structure

```
webapp/
├── index.html          # Main HTML file with kid-friendly sections
├── styles.css          # Cute CSS styles with bright colors and animations
├── script.js           # Interactive JavaScript with voting and recipe features
└── README.md           # Project documentation
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required!

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! The app is ready to use.

### Alternative: Local Server

For the best experience, you can serve the files using a local server:

#### Using Python (if installed):
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Using Node.js (if installed):
```bash
npx serve .
```

#### Using PHP (if installed):
```bash
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## Usage

### Navigation
- Use the navigation menu to jump between sections: Home, Events, Playdates, and Cooking Recipes
- The active section is automatically highlighted as you scroll

### Meet the Kids
- View all 6 kids in the Events section: Mia, 晚晚, 卷儿, Ella, 团团, and 星星
- Click on kid avatars for fun interactive messages
- Each kid has a unique emoji avatar

### Event Voting
- Vote for events by clicking on kid names in the voting buttons
- See real-time results showing who voted for each event
- Events include:
  - **MTV Farmers Market** (September 13th, 2025) - Visit the local farmers market!
  - **Art & Craft Day** - Creative activities with paints and glitter
  - **Music & Dance Party** - Dance to favorite songs and learn new moves
  - **Outdoor Adventure** - Fun games and activities in the park

### Playdates & Activities
- View upcoming playdates with details about when, where, and what to bring
- Activities include indoor playdates, park adventures, and dress-up parties

### Cooking Recipes
- Click recipe buttons to see full cooking instructions
- Recipes include Easy Chocolate Chip Cookies, Fun Pancake Shapes, and Fruit Smoothie Bowl
- Each recipe shows difficulty level, time required, and step-by-step instructions

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Kids and Events
- Add or modify kids in the `kids` array in `script.js`
- Update event information in `index.html`
- Modify voting functionality in the `eventVotes` object

### Recipes
- Add new recipes in the `recipes` object in `script.js`
- Each recipe includes title, difficulty, time, ingredients, and instructions
- Recipe modals are automatically generated from the data

### Styling
- All styles are contained in `styles.css` with kid-friendly colors and animations
- Responsive breakpoints are clearly defined
- Easy to modify colors, fonts, and animations
- Uses Fredoka and Comic Neue fonts for a playful look

### Content
- Update the hero section text in `index.html`
- Modify playdate information and activities
- Customize event descriptions and details

## Features in Detail

### Kid-Friendly Design
- Bright, playful color scheme with gradients
- Cute animations including bouncing, floating, and wiggling effects
- Kid-friendly fonts (Fredoka and Comic Neue)
- Emoji-rich interface for visual appeal

### Interactive Features
- Real-time event voting system
- Recipe modal popups with full instructions
- Kid avatar interactions with fun messages
- Celebration animations when voting
- Keyboard shortcuts for quick voting (number keys 1-6)

### Responsive Design
- Mobile-first approach
- Flexible grid layouts that work on all devices
- Touch-friendly interactive elements
- Optimized for both desktop and mobile use

### Animations
- Smooth scroll behavior
- Hover effects on buttons and cards
- Fade-in animations for content sections
- Bouncing and floating emoji animations
- Celebration effects for interactions

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- Proper color contrast for readability
- Screen reader friendly

## Development

### File Structure
- `index.html` - Semantic HTML5 structure with kid-friendly sections and interactive elements
- `styles.css` - Cute CSS with bright colors, animations, and responsive design
- `script.js` - Interactive JavaScript with voting system, recipe modals, and kid interactions

### Code Organization
- CSS is organized by component sections with kid-friendly styling
- JavaScript includes voting functionality, recipe data, and interactive features
- Responsive design follows mobile-first principles
- All animations and interactions are optimized for children

### Key JavaScript Features
- Event voting system with real-time updates
- Recipe modal system with full cooking instructions
- Kid interaction system with fun messages
- Keyboard shortcuts for accessibility
- Easter eggs and hidden features for extra fun

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Feel free to fork this project and submit pull requests for any improvements! We welcome suggestions for new events, recipes, or interactive features.

## Support

If you encounter any issues or have questions, please open an issue in the repository.

---

Built with ❤️ for the Cherry Chase Kids Group using HTML, CSS, and JavaScript 🍒
