// ===========================
// Portfolio Website JavaScript
// ===========================

(function () {
  'use strict';

  // ===========================
  // DOM Elements
  // ===========================
  const header = document.querySelector('.site-header');
  const navLinks = document.querySelectorAll('.nav a');

  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  const currentYear = document.getElementById('year');

  const greetingBar = document.querySelector('.greeting-bar');
  const greetingForm = document.getElementById('greetingForm');
  const greetingMessageDisplay = document.getElementById('greetingMessage');
  const userNameInput = document.getElementById('userName');
  const saveNameBtn = document.getElementById('saveName');
  const clearNameBtn = document.getElementById('clearName');
  const editNameBtn = document.getElementById('editName');
  const displayedName = document.getElementById('displayName');

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');

  const skillItems = document.querySelectorAll('.skill');
  const projectCards = document.querySelectorAll('.project');

  let currentSection = 'top';

  // ===========================
  // Utility Functions
  // ===========================
  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  }

  function getOffsetTop(element) {
    const rect = element.getBoundingClientRect();
    return rect.top + window.pageYOffset;
  }

  // ===========================
  // Greeting Bar Functions
  // ===========================
  const USER_NAME_KEY = 'portfolio_user_name';

  function saveUserName(name) {
    try {
      localStorage.setItem(USER_NAME_KEY, name.trim());
      return true;
    } catch (error) {
      console.error('Error saving name:', error);
      return false;
    }
  }

  function getUserName() {
    try {
      return localStorage.getItem(USER_NAME_KEY);
    } catch (error) {
      console.error('Error getting name:', error);
      return null;
    }
  }

  function clearUserName() {
    try {
      localStorage.removeItem(USER_NAME_KEY);
      return true;
    } catch (error) {
      console.error('Error clearing name:', error);
      return false;
    }
  }

  function showGreetingForm() {
    if (!greetingForm || !greetingMessageDisplay) return;

    greetingMessageDisplay.hidden = true;
    greetingForm.hidden = false;
    greetingForm.classList.remove('fade-out');
    greetingForm.classList.add('fade-in');
  }

  function showGreetingMessage(name) {
    if (!greetingForm || !greetingMessageDisplay || !displayedName) return;

    displayedName.textContent = name;
    greetingForm.classList.remove('fade-in');
    greetingForm.classList.add('fade-out');

    setTimeout(() => {
      greetingForm.hidden = true;
      greetingMessageDisplay.hidden = false;
      greetingMessageDisplay.classList.remove('fade-out');
      greetingMessageDisplay.classList.add('fade-in');
    }, 250);
  }

  function handleSaveName() {
    if (!userNameInput) return;

    const name = userNameInput.value.trim();

    if (!name) {
      userNameInput.style.borderColor = '#ff6b6b';
      userNameInput.placeholder = 'Please enter your name';
      setTimeout(() => {
        userNameInput.style.borderColor = '';
        userNameInput.placeholder = 'Enter your name';
      }, 2000);
      return;
    }

    if (name.length < 2) {
      userNameInput.style.borderColor = '#ff6b6b';
      userNameInput.value = '';
      userNameInput.placeholder = 'Name must be at least 2 characters';
      setTimeout(() => {
        userNameInput.style.borderColor = '';
        userNameInput.placeholder = 'Enter your name';
      }, 2000);
      return;
    }

    if (saveUserName(name)) {
      showGreetingMessage(name);
      userNameInput.value = '';
    }
  }

  function handleClearName() {
    if (!userNameInput) return;
    userNameInput.value = '';
    userNameInput.focus();
  }

  function handleEditName() {
    const currentName = getUserName();

    if (currentName && userNameInput) {
      userNameInput.value = currentName;
      showGreetingForm();

      setTimeout(() => {
        userNameInput.focus();
        userNameInput.select();
      }, 250);
    }
  }

  function handleNameInputKeyPress(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSaveName();
    }
  }

  function initGreetingBar() {
    if (!greetingBar) return;

    const savedName = getUserName();

    if (savedName) {
      showGreetingMessage(savedName);
    } else {
      showGreetingForm();
    }

    setTimeout(() => {
      greetingBar.classList.add('show');
    }, 300);
  }

  // ===========================
  // Navigation Functions
  // ===========================
  function scrollToSection(sectionId) {
    const targetElement = document.getElementById(sectionId);
    if (!targetElement || !header) return;

    const targetPosition = getOffsetTop(targetElement) - header.offsetHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }

  function setActiveNavLink(sectionId) {
    currentSection = sectionId;

    navLinks.forEach((link) => {
      const href = link.getAttribute('href').substring(1);
      link.classList.toggle('active', href === sectionId);
    });
  }

  function handleNavLinkClick(e) {
    e.preventDefault();

    const href = e.currentTarget.getAttribute('href');
    const targetSection = href.substring(1);

    scrollToSection(targetSection);
    setActiveNavLink(targetSection);
  }

  function updateActiveNavLink() {
    if (!header) return;

    const sections = ['top', 'about', 'skills', 'projects', 'contact'];
    const scrollPosition = window.pageYOffset + header.offsetHeight + 120;

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section && getOffsetTop(section) <= scrollPosition) {
        if (currentSection !== sections[i]) {
          setActiveNavLink(sections[i]);
        }
        break;
      }
    }
  }

  // ===========================
  // Form Validation Functions
  // ===========================
  function setFieldError(input, errorEl, message) {
    if (input) input.classList.toggle('error', !!message);
    if (errorEl) errorEl.textContent = message || '';
  }

  function validateName() {
    const value = nameInput.value.trim();

    if (!value) {
      setFieldError(nameInput, nameError, 'Name is required');
      return false;
    }

    if (value.length < 2) {
      setFieldError(nameInput, nameError, 'Name must be at least 2 characters long');
      return false;
    }

    setFieldError(nameInput, nameError, '');
    return true;
  }

  function validateEmail() {
    const value = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!value) {
      setFieldError(emailInput, emailError, 'Email is required');
      return false;
    }

    if (!emailRegex.test(value)) {
      setFieldError(emailInput, emailError, 'Please enter a valid email address');
      return false;
    }

    setFieldError(emailInput, emailError, '');
    return true;
  }

  function validateMessage() {
    const value = messageInput.value.trim();

    if (!value) {
      setFieldError(messageInput, messageError, 'Message is required');
      return false;
    }

    if (value.length < 5) {
      setFieldError(messageInput, messageError, 'Message must be at least 5 characters long');
      return false;
    }

    setFieldError(messageInput, messageError, '');
    return true;
  }

  function showFormStatus(message, type = 'error') {
    if (!formStatus) return;

    formStatus.textContent = message;
    formStatus.className = type;
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();

    if (!isNameValid) {
      nameInput.focus();
      showFormStatus('Please fix the highlighted fields', 'error');
      return;
    }

    if (!isEmailValid) {
      emailInput.focus();
      showFormStatus('Please fix the highlighted fields', 'error');
      return;
    }

    if (!isMessageValid) {
      messageInput.focus();
      showFormStatus('Please fix the highlighted fields', 'error');
      return;
    }

    showFormStatus('Thank you! Your message has been sent successfully.', 'success');
    contactForm.reset();

    setFieldError(nameInput, nameError, '');
    setFieldError(emailInput, emailError, '');
    setFieldError(messageInput, messageError, '');
  }

  // ===========================
  // Footer Year
  // ===========================
  function updateFooterYear() {
    if (currentYear) {
      currentYear.textContent = new Date().getFullYear();
    }
  }

  // ===========================
  // Animations
  // ===========================
  function initSkillAnimations() {
    if (!skillItems.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      {
        threshold: 0.15
      }
    );

    skillItems.forEach((item, index) => {
      item.style.transitionDelay = `${index * 0.08}s`;
      observer.observe(item);
    });
  }

  function initProjectAnimations() {
    if (!projectCards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      {
        threshold: 0.15
      }
    );

    projectCards.forEach((card, index) => {
      card.style.transitionDelay = `${index * 0.12}s`;
      observer.observe(card);
    });
  }

  // ===========================
  // Event Listeners
  // ===========================
  function initEventListeners() {
    navLinks.forEach((link) => {
      link.addEventListener('click', handleNavLinkClick);
    });

    if (contactForm) {
      contactForm.addEventListener('submit', handleFormSubmit);
    }

    if (nameInput) {
      nameInput.addEventListener('blur', validateName);
      nameInput.addEventListener('input', validateName);
    }

    if (emailInput) {
      emailInput.addEventListener('blur', validateEmail);
      emailInput.addEventListener('input', validateEmail);
    }

    if (messageInput) {
      messageInput.addEventListener('blur', validateMessage);
      messageInput.addEventListener('input', validateMessage);
    }

    if (saveNameBtn) {
      saveNameBtn.addEventListener('click', handleSaveName);
    }

    if (clearNameBtn) {
      clearNameBtn.addEventListener('click', handleClearName);
    }

    if (editNameBtn) {
      editNameBtn.addEventListener('click', handleEditName);
    }

    if (userNameInput) {
      userNameInput.addEventListener('keypress', handleNameInputKeyPress);
    }

    window.addEventListener(
      'scroll',
      debounce(() => {
        updateActiveNavLink();
      }, 100)
    );
  }

  // ===========================
  // Init
  // ===========================
  function init() {
    updateFooterYear();
    initEventListeners();
    initGreetingBar();
    initSkillAnimations();
    initProjectAnimations();
    setActiveNavLink('top');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();