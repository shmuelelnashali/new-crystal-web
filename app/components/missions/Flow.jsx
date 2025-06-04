import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

function Flow({ value, name }) {
  
  const textRef = useRef(null);
  const [isTruncated, setIsTruncated] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });

 const getValueStyle = (val) => {
  const styles = 'text-sm px-2 border-2 rounded-lg absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 truncate max-w-[90%]'
  switch(val) {
    case 'נפתחה משימה':
      return `${styles} border-[#C4EBD2] text-green-600 bg-[#F0FDF4] `;
    case 'מבוטלת':
      return `${styles} border-[#EBEDEE] text-gray-600 bg-[#F9FAFB] `;
    case 'חדשה':
      return `${styles} border-[#FFEFDD] text-orange-500 bg-[#FFF4E8] `;
    case 'עודכנה משימה':
      return `${styles} border-[#DDDFFA] text-indigo-600 bg-[#EEF2FF] `;
    case 'ממתין לאישור גמ"ש':
      return `${styles} border-[#F3E6BB] text-yellow-700 bg-[#FEFCE8] `;
    case 'ממתין לאישור רמ"ד':
      return `${styles} border-[#F6DBE8] text-pink-600 bg-[#FDF2F8]`;
    case 'ממתין לאישור תו"פ':
      return `${styles} border-[#EEDFFA] text-purple-600 bg-[#FAF5FF] `;
    case 'נדחתה רמ"ד':
      return `${styles} border-[#FADDDD] text-rose-600 bg-[#FEF2F2] `;
    default:
      return '';
  }
};

  const checkTruncation = useCallback(() => {
    if (textRef.current) {
      const element = textRef.current.querySelector('.content');
      if (element) {
        setIsTruncated(element.scrollWidth > element.clientWidth);
      }
    }
  }, []);

  useEffect(() => {
    // Check truncation on mount
    checkTruncation();

    // Add event listener for window resize to recalculate truncation
    window.addEventListener('resize', checkTruncation);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkTruncation);
    };
  }, [value]); // Recalculate when 'value' changes

  const handleMouseEnter = useCallback(() => {
  if (textRef.current) {
    const rect = textRef.current.getBoundingClientRect();
    setPopupPosition({
      top: rect.top + window.scrollY - 17,
      left: rect.left + window.scrollX - 50
    });
    setPopupVisible(true);
  }
}, []);

  const handleMouseLeave = () => {
    setPopupVisible(false);
  };


  const renderValue = () => {
    if (name === "department" || name === "Sections") {
      return Array.isArray(value) ? value.join(", ") : value;
    }
    return value;
  };

  return (
    <div
      className={`relative  px-3 py-2  truncate text-center `}
      ref={textRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isTruncated && popupVisible &&
        createPortal(
          <div
            style={{ top: popupPosition.top, left: popupPosition.left }}
            className="absolute rounded-md shadow-lg px-2 py-1 font-medium text-base bg-white z-50"
          >
            {renderValue()}
          </div>,
          document.body
        )
      }
      <div className={`truncate content  ${getValueStyle(value)}`}>

      {renderValue()}
      </div>
    </div>
  );
}

export default Flow;
