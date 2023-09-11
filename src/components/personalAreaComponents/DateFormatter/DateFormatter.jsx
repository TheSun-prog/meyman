import React from "react";
import { format, parse, isDate } from "date-fns";
import { ru } from "date-fns/locale";

function formatDate(dateStr) {
  const parsedDate = parse(dateStr, "dd-MM-yyyy", new Date());

  if (isDate(parsedDate)) {
    return format(parsedDate, "d MMMM, E", { locale: ru });
  } else {
    return "Invalid Date";
  }
}

function DateFormatter({ checkInDate, checkOutDate }) {
  const formattedCheckInDate = formatDate(checkInDate);
  const formattedCheckOutDate = formatDate(checkOutDate);

  return (
    <div className="flex gap-[17px] text-[16px]">
      <p>{formattedCheckInDate}</p>
      <p>{formattedCheckOutDate}</p>
    </div>
  );
}

export default DateFormatter;