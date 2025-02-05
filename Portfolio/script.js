
// scrollBtn
    const scrollBtn = document.getElementById("scrollBtn");

    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollBtn.style.display = "block"; 
        } else {
            scrollBtn.style.display = "none"; 
        }
    };

  
    scrollBtn.addEventListener("click", function() {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            window.scrollTo({
                top: 0,
                behavior: "smooth" 
            });
            scrollBtn.textContent = "↓";
        } else {
            
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth"
            });
            scrollBtn.textContent = "↑"; 
        }
    });


    // hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


