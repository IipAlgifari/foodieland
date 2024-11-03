/* ------------------------------------------------------------------------------
@name: Header
@description: Header
--------------------------------------------------------------------------------- */

import { Scrolllable } from "utilities";

const Header = (() => {
  // - handleShowNav
  const handleShowNav = () => {
    $(".js-burger-menu").on("click", (e) => {
      const _this = $(e.currentTarget);
      handleToggleMenu(_this, _this.hasClass("show"));
    });
  };

  // - handleCloseNav
  const handleCLoseNavigation = () => {
    $(".js-burger-menu").on("click", (e) => {
      const _this = $(e.currentTarget);
      handleToggleMenu(_this, _this.hasClass("show"));
    });
  };

  // - handleToggleMenu
  const handleToggleMenu = (selector, status) => {
    if (status) {
      $("body").removeClass("show-menu");
      selector.removeClass("show");
      $(".js-header-nav").removeClass("show-navigation");
      Scrolllable.enable();
    } else {
      $("body").addClass("show-menu");
      selector.addClass("show");
      $(".js-header-nav").addClass("show-Navigation");
      Scrolllable.disable();
    }
  };

  // - init
  const init = () => {
    handleShowNav();
  };

  return {
    init,
  };
})();

export default Header;
