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
