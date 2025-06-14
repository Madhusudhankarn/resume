// Add dynamic year to footer
document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector("footer p");
    const year = new Date().getFullYear();
    footer.innerHTML = `© ${year} Madhusudhan Reddy | Portfolio Resume`;
});
