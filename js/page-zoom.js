(function (window) {
  function define_library() {
    var vanillaZoom = {};
    vanillaZoom.init = function (el) {

      var container = document.querySelector(el);
      if (!container) {
        console.error('Нет элемента контейнера. Убедитесь, что вы используете правильную разметку.');
        return;
      }

      var firstSmallImage = container.querySelector('.small-preview');
      var zoomedImage = container.querySelector('.zoomed-image');

      if (!zoomedImage) {
        console.error('Нет элемента увеличенного изображения. Убедитесь, что вы используете правильную разметку.');
        return;
      }

      if (!firstSmallImage) {
        console.error('Нет предварительных изображений на странице. Убедитесь, что вы используете правильную разметку.');
        return;
      }
      else {
        zoomedImage.style.backgroundImage = 'url(' + firstSmallImage.src + ')';
      }

      container.addEventListener("click", function (event) {
        var elem = event.target;

        if (elem.classList.contains("small-preview")) {
          var imageSrc = elem.src;
          zoomedImage.style.backgroundImage = 'url(' + imageSrc + ')';
        }
      });

      zoomedImage.addEventListener('mouseenter', function (e) {
        this.style.backgroundSize = "250%";
      }, false);

      zoomedImage.addEventListener('mousemove', function (e) {

        var dimensions = this.getBoundingClientRect();

        var x = e.clientX - dimensions.left;
        var y = e.clientY - dimensions.top;

        var xPercent = Math.round(100 / (dimensions.width / x));
        var yPercent = Math.round(100 / (dimensions.height / y));

        this.style.backgroundPosition = xPercent + '% ' + yPercent + '%';

      }, false);

      zoomedImage.addEventListener('mouseleave', function (e) {
        this.style.backgroundSize = "cover";
        this.style.backgroundPosition = "center";
      }, false);

    }
    return vanillaZoom;
  }

  if (typeof (vanillaZoom) === 'undefined') {
    window.vanillaZoom = define_library();
  }
  else {
    console.log("Library already defined.");
  }
})(window);

vanillaZoom.init('#my-gallery');
