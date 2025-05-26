import React, { useState } from "react";
import Image from "next/image";

export default function InputRow({ inputs, headers, onInputChange }) {
  const [rows, setRows] = useState([headers]);

  const addNewRow = () => {
    const newRow = headers.map((header) => ({
      ...header,
      value: "", // Add an empty value property
    }));

    setRows((prevRows) => [...prevRows, newRow]);
  };

  const deleteRow = (index) => {
    if (rows.length === 1) {
      return;
    }
    setRows((prevRows) => prevRows.filter((_, rowIndex) => rowIndex !== index));
  };

  const handleChange = (key, value) => {
    const updatedInputs = { ...inputs, [key]: value };
    if (onInputChange) {
      onInputChange(updatedInputs);
    }
  };

  return (
    <div>
      {/* ... rest of your code ... */}

      {rows.map((row, rowIndex) => (
        <div
          className={`grid grid-cols-${headers.length + 1} pr-3`}
          key={rowIndex}
        >
          {/* ... render input fields ... */}
          {row.map((fields, index) => (
            <div
              key={index}
              className={`${
                fields.header === "פירוט" ? "col-span-2" : ""
              } pl-2 pr-0 py-2 bg-blue_color`}
            >
              <div className="">{fields.header}</div>
              {fields.header === "פירוט" ? (
                <div className="flex gap-2">
                  <textarea
                    className="border border-[#002A7842]  focus:border-[#8497BE] focus:bg-[#8497BE] focus:outline-none w-full h-[26px] text-[#002A78]   rounded-lg pr-2"
                    onChange={(e) => handleChange(fields.key, e.target.value)}
                    value={row.value} // Bind to row.value
                  />
                  <button onClick={() => deleteRow(rowIndex)}>
                    <Image src="./x.svg" alt="x" width={15} height={15} />
                  </button>
                </div>
              ) : (
                <input
                  type="text"
                  placeholder={fields.placeholder}
                  value={row.value} // Bind to row.value
                  className="border border-[#002A7842] focus:border-[#8497BE] focus:outline-none  focus:bg-[#8497BE] text-[#002A78] focus:placeholder-[#002A78] shadow-input w-full rounded-lg pr-2"
                  onChange={(e) => handleChange(fields.key, e.target.value)}
                />
              )}
            </div>
          ))}
        </div>
      ))}
      <div
        className={`grid grid-cols-${headers.length + 1} Class
Properties
justify-items-start mr-6 font-smibold`}
      >
        {headers.map((header, index) => {
          let content = null;

          if (header.header === "שם ענף") {
            content = 'סה"כ שעות המתנה';
          } else if (index === 0) {
            content = 'סה"כ';
          } else if (
            [
              "עלות כוללת",
              "כמות ימים נדרשת",
              "כמות שעות נדרשת",
              'סה"כ',
            ].includes(header.header)
          ) {
            content = header.placeholder;
          }

          return <div key={index}>{content}</div>;
        })}
      </div>

      {/* Add New Row Button */}
      <div className="flex justify-end">
        <button
          className="text-white bg-blue_color rounded-full px-5 py-1"
          onClick={addNewRow}
        >
          שורה חדשה
        </button>
      </div>
    </div>
  );
}
