
  // Get all the navigation links
  const navLinks = document.querySelectorAll('.nav-link');

  // Get the positions of sections
  const sections = document.querySelectorAll('.item');
  const sectionPositions = Array.from(sections).map(section =>
    section.getBoundingClientRect().top + window.scrollY
  );

  // Function to update active link based on scroll position
  function updateActiveLink() {
    const currentPosition = window.scrollY;
    
    // Find the index of the section in view
    let activeIndex = sectionPositions.findIndex(
      position => position > currentPosition
    );
    
    // If no section is in view, select the last link
    if (activeIndex === -1) {
      activeIndex = sections.length - 1;
    } else if (activeIndex !== 0) {
      activeIndex -= 1; // Adjust to select the correct link
    }
    
    // Remove active class from all links and add to the current link
    navLinks.forEach(link => link.classList.remove('active'));
    navLinks[activeIndex].classList.add('active');
  }

  // Add scroll event listener
  window.addEventListener('scroll', updateActiveLink);

  // Initial call to set the active link
  updateActiveLink();

