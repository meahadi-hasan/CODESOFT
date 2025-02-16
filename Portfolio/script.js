
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
const menuIcon = document.getElementById("menu-icon");
const menuIconBars = document.getElementById("menu-icon-bars");
const menuIconTimes = document.getElementById("menu-icon-times");
const navLinks = document.getElementById("nav-links");

menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    if (navLinks.classList.contains("active")) {
        menuIconBars.style.display = "none";
        menuIconTimes.style.display = "block";
    } else {
        menuIconBars.style.display = "block";
        menuIconTimes.style.display = "none";
    }
});
