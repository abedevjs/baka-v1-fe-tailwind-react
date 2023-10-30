function Copyright() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <span className="text-xs">
      © {year} by @be ❤️. All rights reserved. <br /> All illustrations by&nbsp;
      <a href="https://storyset.com/online">
        <span className="underline">Storyset</span>
      </a>
    </span>
  );
}

export default Copyright;
