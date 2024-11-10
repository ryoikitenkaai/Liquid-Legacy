// Scroll reveal for sections
document.addEventListener("scroll", () => {
    document.querySelectorAll("section").forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add("visible");
        }
    });
});
