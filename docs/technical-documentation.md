# Technical Documentation

## Project Overview

This project is a responsive portfolio website developed using HTML, CSS, and JavaScript.  
It extends a static portfolio by adding interactivity, data persistence, validation, animations, and user feedback.

---

## Architecture

The project is divided into three main parts:

### 1. HTML
Provides the structure of the website:
- Greeting bar
- Navigation bar
- Sections (Hero, About, Skills, Projects, Contact)
- Footer

Each section is linked using IDs for navigation.

---

### 2. CSS
Handles:
- Layout and positioning
- Colors and theme variables
- Responsive design using media queries
- Animations and transitions
- Form styling and error states

Technologies used:
- Flexbox
- Grid layout
- CSS variables

---

### 3. JavaScript
Handles all interactivity and dynamic behavior.

The script is organized into sections:
- DOM selection
- Greeting feature
- Navigation logic
- Form validation
- Animations
- Event listeners
- Initialization

The code is wrapped inside an IIFE to avoid global scope pollution.

---

## Features

### 1. Greeting Bar (Dynamic Feature)

Allows the user to enter their name and receive a personalized greeting.

#### Functionality:
- Save name to LocalStorage
- Display greeting message
- Edit saved name
- Clear input
- Load saved name on page reload

#### Key Functions:
- saveUserName()
- getUserName()
- clearUserName()
- showGreetingMessage()
- showGreetingForm()

---

### 2. LocalStorage (Data Handling)

The user’s name is stored using:
```js
localStorage.setItem("portfolio_user_name", name);
This ensures the data persists after refreshing the page.
---

### 3. Contact Form Validation
The form validates:
- Name (required, minimum 2 characters)
- Email (valid format)
- Message (required, minimum 5 characters)
Feedback:
- Error messages appear under each field
- Invalid fields are highlighted
- Success message appears after submission

---
### 4. Navigation System
Includes:
- Smooth scrolling to sections
- Active link highlighting based on scroll position
Functions:
- scrollToSection()
- updateActiveNavLink()

---
### 5. Animations
Animations are triggered when elements appear on screen.
Elements:
- Skills
- Projects
Technique:
Uses IntersectionObserver to detect when elements enter the viewport.
---
### 6. User Feedback
The website provides feedback through:
- Error messages in forms
- Success message after submission
- Input field highlighting
- Smooth transitions and animations
---
## Responsiveness
The layout adjusts using media queries:
- Desktop: full grid layout
- Tablet: reduced columns
- Mobile: single-column layout

---
## Limitations
- No backend (form is not actually submitted)
- No external API integration
- Data is stored only in LocalStorage (client-side)
---
## Future Improvements
- Connect contact form to backend service
- Add project filtering or search
- Improve accessibility (ARIA, keyboard navigation)
- Add dark mode
- Add more advanced animations
---
## Conclusion
This project demonstrates:
-Dynamic content handling
- Data persistence using LocalStorage
- Form validation and user feedback
- Interactive UI using JavaScript
- Clean and responsive front-end design