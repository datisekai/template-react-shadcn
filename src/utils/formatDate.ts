import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export const formatDate = (
  date: string | Date,
  format: string = "YYYY-MM-DD HH:mm:ss"
): string => {
  return dayjs(date).utc().format(format);
};

export function truncateString(str: string, maxLength: number) {
  if (!str || str.length === 0) return "";
  if (str.length <= maxLength) {
    return str;
  }
  return str.slice(0, maxLength) + "...";
}
