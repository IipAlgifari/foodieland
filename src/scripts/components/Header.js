/* ------------------------------------------------------------------------------
@name: Header
@description: Header
--------------------------------------------------------------------------------- */

const Header = (() => {
  // - handleSayHello
  const handleSayHello = () => {
    console.log("hello example");
  };

  // - init
  const init = () => {
    handleSayHello();
  };

  return {
    init,
  };
})();

export default Header;
