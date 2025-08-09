document.addEventListener("DOMContentLoaded", () => {
    const burgerIcon = document.querySelector(".burger-icon");
    const navbar = document.querySelector(".navbar"); // Container for nav
    const nav = navbar.querySelector(".nav-links"); // Use the class .nav-links to select the ul element

    // Toggle nav visibility when burger icon is clicked
    burgerIcon.addEventListener("click", () => {
        nav.classList.toggle("show"); // Toggle 'show' class to handle visibility
    });

    // Close nav if clicked outside of it or the burger icon
    document.addEventListener("click", (event) => {
        if (!navbar.contains(event.target) && !burgerIcon.contains(event.target)) {
            // Reset the nav if clicked outside
            nav.classList.remove("show"); // Remove the 'show' class
        }
    });
});
