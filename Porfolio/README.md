# Portfolio Website

A modern, animated portfolio website built with HTML, CSS, and JavaScript featuring smooth animations, gradient backgrounds, and interactive elements.

## Features

- **Multi-page Navigation**: Separate pages for About, Education, Projects, and Resume
- **Smooth Animations**: 
  - Scroll-triggered fade-in animations
  - Typing text effect in hero section
  - Animated gradient backgrounds
  - Floating particles effect
  - Hover effects on cards and buttons
- **Responsive Design**: Fully responsive layout that works on all devices
- **Social Media Integration**: Instagram, GitHub, and LinkedIn icons with links
- **Professional Sections**:
  - Hero/About section with profile image
  - Education timeline
  - Projects grid with hover effects
  - Resume with skills and experience

## Project Structure

```
portfolio/
├── index.html              # Home/About page
├── education.html          # Education page
├── projects.html           # Projects page
├── resume.html             # Resume page
├── css/
│   └── style.css          # All styles and animations
├── js/
│   └── script.js          # Interactive features
├── images/
│   ├── download2.jpg       
│   └── front.jpg 
└── README.md              # This file
```

## Customization Guide

### 1. Update Personal Information

#### index.html
- Replace "John Doe" with your name
- Update the typing animation text in `js/script.js` (lines 7-10)
- Change "Full Stack Developer" to your title
- Update the hero description with your bio

#### resume.html
- Update name, title, contact information
- Modify education, work experience, and skills sections
- Replace skill percentages and progress bars

### 2. Add Your Images

1. **Profile Image** (`images/profile.jpg`):
   - Recommended size: 300x300px or larger (square)
   - Format: JPG or PNG
   - Replace the placeholder in `images/profile.jpg`

2. **Project Images** (`images/project-placeholder.jpg`):
   - Recommended size: 600x400px or larger
   - Format: JPG or PNG
   - You can use the same placeholder or create individual images for each project

**Quick Tip**: If you don't have images yet, you can use placeholder services like:
- `https://via.placeholder.com/300x300` for profile image
- `https://via.placeholder.com/600x400` for project images

### 3. Update Social Media Links

In all HTML files, find and replace the social media links:

```html
<!-- Instagram -->
<a href="https://instagram.com/yourusername" target="_blank">

<!-- GitHub -->
<a href="https://github.com/yourusername" target="_blank">

<!-- LinkedIn -->
<a href="https://linkedin.com/in/yourusername" target="_blank">
```

Replace `yourusername` with your actual social media usernames.

### 4. Customize Projects

Edit `projects.html`:
- Update project titles and descriptions
- Add your project links (live demo and GitHub)
- Modify technology tags
- Add or remove project cards as needed

### 5. Update Education Information

Edit `education.html`:
- Replace timeline items with your educational history
- Update dates, institutions, degrees, and descriptions
- Add or remove education entries

### 6. Customize Colors (Optional)

In `css/style.css`, you can modify the color scheme by changing these CSS variables (at the top of the file):

```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --secondary-color: #8b5cf6;    /* Secondary color */
    --accent-color: #ec4899;       /* Accent color */
    --dark-bg: #0f172a;            /* Background color */
}
```

### 7. Update Typing Animation Text

In `js/script.js`, modify the texts array (around line 7):

```javascript
const texts = [
    'Hello, I\'m Your Name',
    'Welcome to My Portfolio',
    'Your Title Here'
];
```

## How to Use

1. **Clone or Download** this repository
2. **Add Your Images**: Place your profile image and project images in the `images/` folder
3. **Customize Content**: Update all HTML files with your personal information
4. **Update Links**: Replace social media links with your profiles
5. **Test Locally**: Open `index.html` in a web browser
6. **Deploy**: Upload to a web hosting service (GitHub Pages, Netlify, Vercel, etc.)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- **HTML5**: Semantic structure
- **CSS3**: Modern styling with animations, gradients, and Flexbox/Grid
- **JavaScript**: Interactive features, animations, and smooth scrolling
- **Font Awesome**: Icons for social media and UI elements

## Features Breakdown

### Animations
- Typing effect on hero title
- Scroll-triggered fade-in animations (Intersection Observer)
- Floating particles background
- Animated gradient overlays
- Smooth hover transitions
- Parallax effects on scroll

### Responsive Design
- Mobile-first approach
- Hamburger menu for mobile devices
- Flexible grid layouts
- Responsive typography
- Breakpoints: 480px, 768px, 968px

### Navigation
- Fixed/sticky navigation bar
- Smooth scrolling between sections
- Active link highlighting
- Mobile hamburger menu

## Notes

- All placeholder images should be replaced with your actual images
- Social media links are set to placeholder URLs - update them!
- The typing animation cycles through multiple texts - customize in `js/script.js`
- All sample content should be replaced with your actual information

## License

This portfolio template is free to use and modify for personal or commercial projects.

## Support

If you encounter any issues or have questions about customization, feel free to:
- Check the code comments for guidance
- Review the structure of similar elements for consistency
- Test changes in a local browser before deploying

## Future Enhancements

Potential additions you might consider:
- Contact form with email integration
- Blog section
- Dark/Light theme toggle
- Portfolio filter/search functionality
- More advanced animations
- Video background option
- Testimonials section

Enjoy building your portfolio! 🚀
