class VanillaZoom {
  constructor(el) {
    this.container = document.querySelector(el);
    if (!this.container) {
      console.error('Нет элемента контейнера!!!');
      return;
    }

    this.zoomedImage = this.container.querySelector('.zoomed-image');
    if (!this.zoomedImage) {
      console.error('Нет элемента увеличенного изображения!!!');
      return;
    }

    this.smallImages = Array.from(this.container.querySelectorAll('.small-preview'));
    if (!this.smallImages.length) {
      console.error('Нет предварительных изображений на странице!!!');
      return;
    }
    else {
      this.zoomedImage.style.backgroundImage = `url(${this.smallImages[0].src})`;
    }

    this.container.addEventListener("click", (event) => {
      const elem = event.target;

      if (elem.classList.contains("small-preview")) {
        const imageSrc = elem.src;
        this.zoomedImage.style.backgroundImage = `url(${imageSrc})`;
      }
    });

    this.zoomedImage.addEventListener('mouseenter', (e) => {
      this.zoomedImage.style.backgroundSize = "250%";
    }, false);

    this.zoomedImage.addEventListener('mousemove', (e) => {
      const dimensions = this.zoomedImage.getBoundingClientRect();

      const x = e.clientX - dimensions.left;
      const y = e.clientY - dimensions.top;

      const xPercent = Math.round(100 / (dimensions.width / x));
      const yPercent = Math.round(100 / (dimensions.height / y));

      this.zoomedImage.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
    }, false);

    this.zoomedImage.addEventListener('mouseleave', (e) => {
      this.zoomedImage.style.backgroundSize = "cover";
      this.zoomedImage.style.backgroundPosition = "center";
    }, false);
  }
}

if (typeof (VanillaZoom) === 'undefined') {
  window.VanillaZoom = VanillaZoom;
}
else {
  console.log("Библиотека определена.");
}

new VanillaZoom('.my-gallery');

//! Форма обратной связи ***************************
const modalForms = document.querySelectorAll(".js-modal-form");
const openForms = document.querySelectorAll(".js-open-form");
const closeForms = document.querySelectorAll(".js-close-form");

openForms.forEach((button, index) => {
  button.addEventListener("click", () => {
    modalForms[index].classList.add("open");
  });
});

closeForms.forEach((button) => {
  button.addEventListener("click", (e) => {
    const target = e.target.closest(".js-modal-form");
    if (target) {
      const index = Array.from(modalForms).indexOf(target);
      modalForms[index].classList.remove("open");
    }
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modalForms.forEach((element) => {
      if (element.classList.contains("open")) {
        const index = Array.from(modalForms).indexOf(element);
        modalForms[index].classList.remove("open");
      }
    });
  }
});

modalForms.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (e.target !== e.currentTarget) return;
    const index = Array.from(modalForms).indexOf(element);
    modalForms[index].classList.remove("open");
  });
});