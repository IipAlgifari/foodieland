/* ------------------------------------------------------------------------------
@name: Banner
@description: Banner
--------------------------------------------------------------------------------- */

const Banner = (() => {
  // Default carousel options
  const defaultOptions = {
    loop: false,
    rewind: true,
    nav: false,
    items: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2500,
    autoplayTimeout: 3000,
    autoHeight: false,
    autoplayHoverPause: false,
    animateOut: "fadeOut",
  };

  // -handleRunCarousel
  const handleRunCarousel = (options = {}) => {
    const _selector = $(".js-banner-owl-carousel");
    const _itemLength = $(".js-banner-owl-carousel .banner__item").length;

    if (_itemLength < 1) return; //

    // Destroy existing carousel if initialized
    if (_selector.hasClass("owl-carousel")) {
      _selector.owlCarousel("destroy").removeClass("owl-carousel");
    }

    // Run carousel if there are multiple items
    if (_itemLength > 1) {
      _selector.addClass("owl-carousel").owlCarousel({
        ...defaultOptions,
        ...options, // Override default options with custom ones if provided
      });
    } else {
      _selector.addClass("banner--single-show");
    }
  };

  // - init
  const init = (customOptions = {}) => {
    const bannerExsits = $(".js-banner-owl-carousel").length > 0;
    if (bannerExsits) {
      handleRunCarousel(customOptions);
    }
  };

  return {
    init,
  };
})();

export default Banner;
