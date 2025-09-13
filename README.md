# Simple Web App

A clean, modern, and responsive web application built with HTML, CSS, and JavaScript.

## Features

- 🚀 **Fast & Lightweight** - Built with modern web technologies for optimal performance
- 📱 **Responsive Design** - Works perfectly on all devices, from mobile to desktop
- 🎨 **Modern UI** - Clean and intuitive user interface with smooth animations
- ⚡ **Interactive Elements** - Counter functionality and form handling
- 🎯 **Smooth Navigation** - Smooth scrolling and active link highlighting

## Project Structure

```
webapp/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
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
- Use the navigation menu to jump between sections
- The active section is automatically highlighted as you scroll

### Interactive Counter
- Click the `+` and `-` buttons to increment/decrement the counter
- Use arrow keys (↑/↓) for keyboard navigation
- The counter changes color based on its value:
  - Green for positive values
  - Red for negative values
  - Default color for zero

### Contact Form
- Fill out the contact form with your name, email, and message
- Form validation ensures all fields are completed
- Email format validation is included
- Success/error notifications appear after submission

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Colors
The app uses a modern color palette defined in CSS custom properties. You can easily customize colors by modifying the CSS variables in `styles.css`.

### Content
- Update the hero section text in `index.html`
- Modify feature descriptions and icons
- Customize the contact form fields

### Styling
- All styles are contained in `styles.css`
- Responsive breakpoints are clearly defined
- Easy to modify layout and spacing

## Features in Detail

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Optimized typography for all screen sizes
- Touch-friendly interactive elements

### Animations
- Smooth scroll behavior
- Hover effects on buttons and cards
- Fade-in animations for content sections
- Counter animation feedback

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- Proper color contrast
- Screen reader friendly

## Development

### File Structure
- `index.html` - Semantic HTML5 structure with proper meta tags
- `styles.css` - Modern CSS with Flexbox/Grid, custom properties, and media queries
- `script.js` - Vanilla JavaScript with modern ES6+ features

### Code Organization
- CSS is organized by component sections
- JavaScript functions are well-documented
- Responsive design follows mobile-first principles

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Feel free to fork this project and submit pull requests for any improvements!

## Support

If you encounter any issues or have questions, please open an issue in the repository.

---

Built with ❤️ using HTML, CSS, and JavaScript
