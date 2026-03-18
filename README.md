# Lena – Portfolio Website (Assignment 2)

This project is an enhanced version of my Assignment 1 portfolio website.  
It demonstrates the integration of **dynamic content**, **data handling**, **animations**, and **AI-assisted development** using core web technologies: **HTML**, **CSS**, and **JavaScript**.

---

## Project Description

This updated portfolio website serves as a digital résumé and interactive showcase of my background, technical skills, projects, and contact information.  
The main goal of Assignment 2 was to extend the original static portfolio by adding **JavaScript-based interactivity**, **data persistence**, **form validation**, and **visual feedback** while maintaining a clean and responsive user interface.

### New Features Added

- **Personalized Greeting Bar** – A dynamic greeting bar at the top of the page that allows users to enter their name and receive a personalized welcome message.  
  - Saves the entered name using **LocalStorage**  
  - Includes **Save**, **Edit**, and **Clear** actions  
  - Automatically loads the saved name when the page is reopened  
- **Contact Form Validation** – Client-side validation for name, email, and message fields.  
  - Displays inline error messages  
  - Highlights invalid fields  
  - Shows a success message after valid submission  
- **Active Navigation Highlighting** – The navigation bar updates automatically to highlight the current section while scrolling.  
- **Smooth Scrolling Navigation** – Clicking a navigation link scrolls smoothly to the selected section.  
- **Scroll Animations** – Skills and project cards animate into view using the **Intersection Observer API**.  
- **Responsive Layout** – The website is designed to adapt across desktop, tablet, and mobile screen sizes.

These improvements align with Assignment 2’s requirements for **Dynamic Content**, **Data Handling**, **Animations**, and **Error Handling/User Feedback**.

---

## Setup Instructions

### Requirements
- A modern web browser such as Chrome, Firefox, Edge, or Safari.

### How to Run
1. Clone or download the project folder.  
2. Open the project directory.  
3. Open the file **`index.html`** in your browser.  
4. Interact with the greeting bar, browse the portfolio sections, and test the contact form.

No installation or external dependencies are required.

---

## File Structure

```text
Assignment-2/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
└── README.md
```
---
## Technologies Used
- HTML5 – Semantic page structure
- CSS3 – Styling, layout, transitions, responsiveness, and animations
- JavaScript (Vanilla JS) – DOM manipulation, event handling, validation, local storage, and interactivity
- LocalStorage API – Persists the saved name in the greeting feature
- Intersection Observer API – Triggers animations when skills and project cards enter the viewport

---
## Main Website Sections
- Greeting Bar – Personalized welcome interaction
- Header / Navigation – Sticky header with section links
- Hero Section – Name, title, and profile image
- About Section – Personal introduction
- Skills Section – Technical skills displayed in a responsive grid
- Projects Section – Featured academic/project work in card format
- Contact Section – Validated contact form with user feedback
- Footer – Automatically updated copyright year

---
## Dynamic and Interactive Features
1. Personalized Greeting Bar
The greeting bar allows users to type their name and save it.
Once saved, the website displays a personalized welcome message.
Functionality includes:
Name input and save action
LocalStorage persistence
Edit saved name
Clear current input
Automatic loading of saved data on page reload
2. Contact Form Validation
The contact form validates the following fields:
Name
Email
Message
The form provides:
Inline error messages
Error highlighting
Success feedback when the input is valid
3. Navigation Interaction
The navigation bar supports:
Smooth scrolling between sections
Automatic active link highlighting based on the user’s current scroll position
4. Scroll-Based Animations
The skills and project cards animate into view when they appear on screen.
This improves visual engagement and gives the website a more polished feel.

---

## AI Usage Summary
This project includes AI-assisted development to support debugging, layout refinement, JavaScript review, and documentation writing.
### Key AI Contributions
- Helped fix the alignment of the greeting form
- Supported refinement of JavaScript structure and behavior
- Assisted with improving form validation logic and UI feedback
- Helped draft project documentation in a clearer format
### Responsible AI Practices
All AI-generated suggestions were:
- Reviewed and understood before use
- Edited manually to fit my project structure
- Tested in the browser to verify correctness and behavior
- Documented transparently according to assignment requirements
For more details, see:
docs/ai-usage-report.md
