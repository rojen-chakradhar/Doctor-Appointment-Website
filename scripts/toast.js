class Toast {
  constructor() {
    this.container = null;
    this.initContainer();
  }

  initContainer() {
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.className = 'toast-container';
      document.body.appendChild(this.container);
    }
  }

  show(message, type = 'info', duration = 3000) {
    if (!this.container) {
      this.initContainer();
    }

    const toastElement = document.createElement('div');
    toastElement.className = `toast toast-${type}`;
    toastElement.innerHTML = `
      <div class="toast-content">
        <i class="toast-icon ri-${this.getIcon(type)}"></i>
        <span class="toast-message">${message}</span>
      </div>
      <button class="toast-close" onclick="this.parentElement.remove()"><i class="ri-close-line"></i></button>
    `;

    this.container.appendChild(toastElement);

    if (duration) {
      setTimeout(() => {
        if (toastElement.parentElement) {
          toastElement.remove();
        }
      }, duration);
    }

    return toastElement;
  }

  getIcon(type) {
    const icons = {
      success: 'check-line',
      error: 'alert-line',
      warning: 'alert-fill',
      info: 'information-line'
    };
    return icons[type] || icons.info;
  }

  success(message, duration = 3000) {
    return this.show(message, 'success', duration);
  }

  error(message, duration = 3000) {
    return this.show(message, 'error', duration);
  }

  warning(message, duration = 3000) {
    return this.show(message, 'warning', duration);
  }

  info(message, duration = 3000) {
    return this.show(message, 'info', duration);
  }
}

const toast = new Toast();
