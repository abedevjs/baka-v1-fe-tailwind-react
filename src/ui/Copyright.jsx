function Copyright() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <span className="text-xs">
      © {year} by{" "}
      <a href="https://abedevjs.github.io/" target="_blank" rel="noreferrer">
        <span className="underline">@abe</span>
      </a>{" "}
      ❤️. All rights reserved. <br /> All illustrations by&nbsp;
      <a href="https://storyset.com/online" target="_blank" rel="noreferrer">
        <span className="underline">Storyset</span>
      </a>
    </span>
  );
}

export default Copyright;
