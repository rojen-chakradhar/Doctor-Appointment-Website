let selectedDay = null;
let selectedTime = null;

const days = document.querySelectorAll(".day");
const saveDay = localStorage.getItem("selectedDay");
if(saveDay) {
  days.forEach(day => {
    const dayText = day.textContent.trim().split('\n')[0];
    if(dayText === saveDay) {
      day.classList.add("active");
      selectedDay = dayText;
    }
  })
}

days.forEach(day => {
  day.addEventListener("click", () => {
    days.forEach(d => d.classList.remove("active"))
    day.classList.add("active")
    selectedDay = day.textContent.trim().split('\n')[0];
    localStorage.setItem("selectedDay", selectedDay)
  })
})

const times = document.querySelectorAll(".time");
const saveTime = localStorage.getItem("selectedTime");
if(saveTime) {
  times.forEach(time => {
    const timeText = time.textContent.trim();
    if(timeText === saveTime) {
      time.classList.add("active")
      selectedTime = timeText;
    }
  })
}

times.forEach(time => {
  time.addEventListener("click", () => {
    times.forEach(t => t.classList.remove("active"))
    time.classList.add("active")
    selectedTime = time.textContent.trim();
    localStorage.setItem("selectedTime", selectedTime)
  })
})

function bookAppointment(doctorName, specialty, fee) {
  if (!auth.isLoggedIn()) {
    toast.error("Please login to book an appointment");
    setTimeout(() => window.location.href = "./login.html", 500);
    return;
  }

  if (!selectedDay || !selectedTime) {
    toast.warning("Please select both date and time");
    return;
  }

  const result = auth.addBooking(doctorName, specialty, fee, selectedDay, selectedTime);
  if (result.success) {
    toast.success(result.message);
    localStorage.removeItem("selectedDay");
    localStorage.removeItem("selectedTime");
    setTimeout(() => window.location.href = "./profile.html", 500);
  } else {
    toast.error(result.message);
  }
}