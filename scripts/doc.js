const days = document.querySelectorAll(".day");
const saveDay = localStorage.getItem("selectedDay");
if(saveDay) {
  days.forEach(day => {
    if(day.textContent === saveDay) {
      day.classList.add("active")
    }
  })
}

days.forEach(day => {
  day.addEventListener("click", () => {
    days.forEach(d => d.classList.remove("active"))
    day.classList.add("active")
    localStorage.setItem("selectedDay", day.textContent)
  })
})

const times = document.querySelectorAll(".time");
const saveTime = localStorage.getItem("selectedTime");
if(saveTime) {
  times.forEach(time => {
    if(time.textContent === saveTime) {
      time.classList.add("active")
    }
  })
}

times.forEach(time => {
  time.addEventListener("click", () => {
    times.forEach(t => t.classList.remove("active"))
    time.classList.add("active")
    localStorage.setItem("selectedTime", time.textContent)
  })
})