export const moneyConvert = (
  value: any,
  isRound?: boolean,
  decimals?: number,
  isFormat?: boolean
) => {
  // eslint-disable-next-line no-param-reassign
  value = String(value).replace(/\D{?!.}[$&+,:;=?@#|]/g, "");
  if (value.indexOf(".") < 0 && isFormat) {
    // eslint-disable-next-line no-param-reassign
    value = String(value).replace(/\D/g, "");
    const n = value.replace(/(\d{1,3})(?=(\d{3})+(?!\d))/g, "$1,");
    return n;
  }
  if (value.indexOf(".") < 0) {
    return value.replace(/(\d{1,3})(?=(\d{3})+(?!\d))/g, "$1,");
  }

  if (value === "" || value === undefined || value === null) return "";
  // eslint-disable-next-line prefer-template
  const arr = (value + "").split(".");

  const natural = arr[0].replace(/(\d{1,2})(?=(\d{3})+(?!\d))/g, "$1,");
  if (isRound) return natural;
  // eslint-disable-next-line prefer-template
  if (arr[1] === undefined) return natural;
  // eslint-disable-next-line prefer-template
  if (decimals) return natural + "." + arr[1].substring(0, decimals);
  // eslint-disable-next-line prefer-template
  return natural + "." + arr[1];
};

export const formatMoney = (value: string | number) => {
  if (typeof value == "string") {
    return parseFloat(value?.replace(/(\.\d*)\./, "$1"));
  }
  return value;
};
