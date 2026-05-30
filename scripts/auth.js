class AuthManager {
  constructor() {
    this.usersKey = "users";
    this.currentUserKey = "currentUser";
    this.initializeStorage();
  }

  initializeStorage() {
    if (!localStorage.getItem(this.usersKey)) {
      localStorage.setItem(this.usersKey, JSON.stringify({}));
    }
  }

  signup(username, email, password) {
    const users = JSON.parse(localStorage.getItem(this.usersKey));
    
    if (users[email]) {
      return { success: false, message: "Email already registered" };
    }

    const userProfile = {
      username,
      email,
      password,
      createdAt: new Date().toISOString(),
      bookings: []
    };

    users[email] = userProfile;
    localStorage.setItem(this.usersKey, JSON.stringify(users));
    localStorage.setItem(this.currentUserKey, email);

    return { success: true, message: "Account created successfully" };
  }

  login(email, password) {
    const users = JSON.parse(localStorage.getItem(this.usersKey));
    
    if (!users[email]) {
      return { success: false, message: "Email not found" };
    }

    if (users[email].password !== password) {
      return { success: false, message: "Incorrect password" };
    }

    localStorage.setItem(this.currentUserKey, email);
    return { success: true, message: "Login successful" };
  }

  logout() {
    localStorage.removeItem(this.currentUserKey);
  }

  getCurrentUser() {
    const email = localStorage.getItem(this.currentUserKey);
    if (!email) return null;

    const users = JSON.parse(localStorage.getItem(this.usersKey));
    return users[email] || null;
  }

  isLoggedIn() {
    return localStorage.getItem(this.currentUserKey) !== null;
  }

  addBooking(doctorName, doctorSpecialty, doctorFee, day, time) {
    const email = localStorage.getItem(this.currentUserKey);
    if (!email) {
      return { success: false, message: "Please login first" };
    }

    const users = JSON.parse(localStorage.getItem(this.usersKey));
    const booking = {
      id: Date.now(),
      doctorName,
      doctorSpecialty,
      doctorFee,
      day,
      time,
      bookedAt: new Date().toISOString()
    };

    users[email].bookings.push(booking);
    localStorage.setItem(this.usersKey, JSON.stringify(users));

    return { success: true, message: "Appointment booked successfully", booking };
  }

  getBookings() {
    const user = this.getCurrentUser();
    return user ? user.bookings : [];
  }

  cancelBooking(bookingId) {
    const email = localStorage.getItem(this.currentUserKey);
    if (!email) {
      return { success: false, message: "Please login first" };
    }

    const users = JSON.parse(localStorage.getItem(this.usersKey));
    const bookingIndex = users[email].bookings.findIndex(b => b.id === bookingId);

    if (bookingIndex === -1) {
      return { success: false, message: "Booking not found" };
    }

    users[email].bookings.splice(bookingIndex, 1);
    localStorage.setItem(this.usersKey, JSON.stringify(users));

    return { success: true, message: "Booking cancelled successfully" };
  }

  getCurrentUserEmail() {
    return localStorage.getItem(this.currentUserKey);
  }
}

const auth = new AuthManager();
