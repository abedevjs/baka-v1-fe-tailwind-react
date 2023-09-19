function TextBox({
  margin = "mb-0",
  textColor = "textColor",
  subtitle,
  title,
}) {
  return (
    <>
      <div className={`${margin} text-center mx-auto`}>
        {/* Subtitle */}
        <h3
          className={`text-xs tracking-widest font-title ${textColor} uppercase`}
        >
          {`~ ${subtitle} ~`}
        </h3>
        {/* Table Bagasi Title */}
        <h2
          className={`text-3xl font-title ${textColor} capitalize sm:text-2xl`}
        >
          {title}
        </h2>
      </div>
    </>
  );
}

export default TextBox;
