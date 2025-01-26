import { format, parseISO } from "date-fns";
import { he } from "date-fns/locale";
import toast from "react-hot-toast";

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  return format(parseISO(dateStr), "dd/MM/yyyy");
};

const formatDatePresence = (dateStr) => {
  if (!dateStr) return "";
  return format(parseISO(dateStr), "dd/MM");
};

const formatDateToDay = (dateStr) => {
  const date = parseISO(dateStr);
  const today = format(date, 'EEEE', {locale: he})
  return today
};

//HH/MM/SS פונקצייה שעושה מבנה של 
const timeStructure = (timeValue) => {
  // Allow only valid characters (numbers and colons)
  timeValue = timeValue.replace(/[^\d:]/g, "");

  // Limit to 8 characters (HH:MM:SS)
  if (timeValue.length > 8) return null;

  // Automatically insert colons as the user types
  if (timeValue.length === 2 && !timeValue.includes(":")) {
    timeValue += ":";
  } else if (timeValue.length === 5 && timeValue.split(":").length === 2) {
    timeValue += ":00";
  }

  // Split the input into hours, minutes, and seconds
  const [hours, minutes, seconds] = timeValue.split(":");

  // Validate hours, minutes, and seconds
  if (hours && parseInt(hours) > 23) return 
  if (minutes && parseInt(minutes) > 59) return 
  if (seconds && parseInt(seconds) > 59) return 

  return timeValue;
};

export{
  formatDate,
  formatDatePresence,
  formatDateToDay,
  timeStructure
}