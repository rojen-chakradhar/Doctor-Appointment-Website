// const doctors = [
// 	{
// 		name: "dr. leo messi",
// 		speciality: "cardiologist",
// 		hospital: "la masia",
// 		image: "",
// 	},
// 	{
// 		name: "dr. cristiano ronaldo",
// 		speciality: "dermatologist",
// 		hospital: "real madrid",
// 		image: "",
// 	},
// 	{
// 		name: "dr. lamin yamal",
// 		speciality: "neurologist",
// 		hospital: "la masia",
// 		image: "",
// 	},
// 	{
// 		name: "dr. mbappe",
// 		speciality: "pediatrician",
// 		hospital: "paris saint german",
// 		image: "",
// 	},
// 	{
// 		name: "dr. haland",
// 		speciality: "cardiologist",
// 		hospital: "man city",
// 		image: "",
// 	},
// 	{
// 		name: "dr. neymar jr",
// 		speciality: "gynocologist",
// 		hospital: "santos",
// 		image: "",
// 	},
// 	{
// 		name: "dr. edian hazard",
// 		speciality: "pediatrician",
// 		hospital: "chelsea",
// 		image: "",
// 	},
// ];

// const catalog = document.getElementById("doctorGrid");
// const filter = document.querySelectorAll(".speciality-filter");

// function renderDoctors(data) {
// 	catalog.innerHTML = "";
// 	if (data.length == 0) {
// 		catalog.innerHTML = `
//       <div class="no-results">
//         <p class="para">No doctors found.</p>
//       </div>
//     `;
// 		return;
// 	}

// 	data.forEach((doc) => {
// 		const card = document.createElement("div");
// 		card.classList.add("doc");
//     card.innerHTML = `
//     <div class="doc-img">
//       <img src="${doc.image}" alt="${doc.name}'s image" class="doc-img">
//     </div>
//     <div class="doc-info">
//       <p class="availability">available</p>
//       <p class="name">${doc.name}</p>
//       <p class="job">${doc.speciality}</p>
//       <button class="cta book-btn">Book Appointment</button>
//     </div>
//   `;
// 		catalog.appendChild(card);
// 	});
// }
// function filter() {
// 	const selectedSpecialities = [...filter]
// 		.filter((cb) => cb.active)
// 		.map((cb) => cb.value);
// 	const filtered = doctors.filter((doctor) => {
// 		const matchesSpeciality =
// 			selectedSpecialities.length === 0 ||
// 			selectedSpecialities.includes(doc.speciality);
// 		return matchesSpeciality;
// 	});
// 	renderDoctors(filtered);
// }

// specialityFilters.forEach((cb) => {
// 	cb.addEventListener("change", filterDoctors);
// });

// renderDoctors(doctors);

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const showSignup = document.getElementById("showSignup");
const showLogin = document.getElementById("showLogin");

showSignup.addEventListener("click", () => {
  loginForm.classList.remove("active");
  signupForm.classList.add("active");
});

showLogin.addEventListener("click", () => {
  loginForm.classList.add("active");
  signupForm.classList.remove("active");
});

const toggles = document.querySelectorAll(".toggle-password");

toggles.forEach(toggle => {
  toggle.addEventListener("click", () => {
    const passwordInput = toggle.previousElementSibling;
    if(passwordInput.type === "password") {
      passwordInput.type = "text";
      toggle.classList.replace("ri-eye-line", "ri-eye-off-line");
    } else {
      passwordInput.type = "password";
      toggle.classList.replace("ri-eye-off-line", "ri-eye-line");
    }
  })
})

document.getElementById("signup").addEventListener("submit", (e) => {
  e.preventDefault();
  window.location.href = "./index.html";
})

document.getElementById("login").addEventListener("submit", (e) => {
  e.preventDefault();
  window.location.href = "./index.html";
})