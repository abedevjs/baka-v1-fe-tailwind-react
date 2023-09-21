export function dateFormat(data) {
  const options = {
    //hour: 'numeric',
    //minute: 'numeric',
    day: "2-digit", //'2-digit'
    month: "short", //'2-digit' 'long'
    year: "2-digit", //'2-digit'
    // weekday: 'long',//numeric, short, narrow
  };
  const output1 = new Date(data).toLocaleString("in-ID", options);

  // const before = new Date(data).toLocaleString("in-ID", options);
  const date = new Date(data).getDate();
  const month = new Date(data).getMonth() + 1;
  const year = new Date(data).getFullYear();

  const output2 = `${date < 10 ? `0${date}` : date} ${new Date(
    data
  ).toLocaleString("in-ID", { month: "short" })} ${year}`;

  return output1;
}

export function currencyFormat(currency) {
  let rupiah = new Intl.NumberFormat("in-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });

  return rupiah.format(currency);
}
