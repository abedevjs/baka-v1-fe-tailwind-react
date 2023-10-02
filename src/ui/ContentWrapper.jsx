import ButtonHamburger from "./ButtonHamburger";

function ContentWrapper({ padding = "p-0", children }) {
  return (
    // Wrapper start
    <div
      className={`relative ml-4 ${padding} flex-1 rounded-xl bg-secondaryYellowTint text-textColor font-text overflow-y-auto overflow-x-auto lg:h-screen lg:ml-0 lg:rounded-none`}
    >
      {/* Hamburger Button */}
      <ButtonHamburger />
      {children}
    </div>
    // Wrapper end
  );
}

export default ContentWrapper;
