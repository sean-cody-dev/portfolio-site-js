const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const navItems = [];

// Populates Array of Nav Items based on DOM Elements
function getNavItems() {
    const navList = document.getElementById('nav-list');
    for (const navItem of navList.children) {
        navItems.push(navItem);
    }
}

// Control Nav Animation
function navAnimation(direction1, direction2) {
    navItems.forEach((navItem, i) => {
        navItem.classList.replace(`slide-${direction1}-${i+1}`, `slide-${direction2}-${i+1}`);
    });
}

function toggleNav() {
    // Toggle: Menu Bars Open/Close
    menuBars.classList.toggle('change');
    // Toggle: Menu Active
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
        // Animate In Overlay
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right')
        // Animate In - Nav Items
        navAnimation('out', 'in');
    } else {
        // Animate Out Overlay
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left')
        // Animate Out - Nav items
        navAnimation('in', 'out');
    }
}

getNavItems();

// Event Listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach((navItem) => {
    navItem.addEventListener('click', toggleNav);
})