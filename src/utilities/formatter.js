export function dateFormatter(data) {
  const options = {
    //hour: 'numeric',
    //minute: 'numeric',
    day: "numeric",
    month: "short", //'2-digit'
    year: "numeric",
    // weekday: 'long',//numeric, short, narrow
  };

  // const before = new Date(data).toLocaleString("in-ID", options);
  // const date = new Date(data).getDate();
  // const month = before.getMonth();
  // const year = before.getFullYear();

  const formatted = new Date(data).toLocaleString("in-ID", options);
  // const formatted = `${date} ${month} ${year}`;

  return formatted;
}
