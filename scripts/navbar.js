// Initialize navbar based on login status
function initializeNavbar() {
  const navCTA = document.querySelector(".nav-cta");
  
  if (auth.isLoggedIn()) {
    const user = auth.getCurrentUser();
    navCTA.textContent = user.username;
    navCTA.parentElement.href = "./profile.html";
  }
}

document.addEventListener("DOMContentLoaded", initializeNavbar);
