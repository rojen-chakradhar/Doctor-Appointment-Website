function initializeNavbar() {
  const navCTA = document.querySelector(".nav-cta");
  
  if (auth.isLoggedIn()) {
    const user = auth.getCurrentUser();
    navCTA.innerHTML = `<i class="ri-user-line"></i>`;
    navCTA.parentElement.href = "./profile.html";
  }
}

document.addEventListener("DOMContentLoaded", initializeNavbar);