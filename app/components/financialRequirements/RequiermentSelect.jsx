import Image from "next/image";
import React from "react";
import { Controller } from "react-hook-form";
import Select, { components } from "react-select";

export default function RequiermentSelect({ label, itemKey, control }) {
  const CustomDropdownIndicator = (props) => (
    <components.DropdownIndicator {...props}>
      <Image
        src="/downArrow.svg"
        alt="Custom Arrow"
        width={11}
        height={11}
        className="object-contain"
      />
    </components.DropdownIndicator>
  );

  const selectOptionsMap = {
    levelOfIntrest: [
      { value: "גבוה", label: "גבוה" },
      { value: "בינוני", label: "בינוני" },
      { value: "נמוך", label: "נמוך" },
    ],
    gmash: [
      { value: "כן", label: "כן" },
      { value: "לא", label: "לא" },
    ],
    securityClassification: [
      { value: 'בלמ"ס', label: 'בלמ"ס' },
      { value: "סודי", label: "סודי" },
      { value: "סודי ביותר", label: "סודי ביותר" },
    ],
    leadingSection: [{ value: 'בלמ"ס', label: 'בלמ"ס' }],
    Mname: [{ value: 'בלמ"ס', label: 'בלמ"ס' }],
  };

  return (
    <Controller
      name={`generalDetails.${itemKey}`}
      control={control}
      rules={{ required: `${label} נדרש` }}
      render={({ field }) => (
        <Select
          {...field}
          options={selectOptionsMap[itemKey]}
          // menuIsOpen={true}
          placeholder={`בחר ${label}`}
          isClearable={false}
          styles={{
            container: (base, state) => ({
              ...base,
              width: "100%",
              // minHeight: 0,
            }),
            control: (base, state) => ({
              ...base,
              height: 0,
              borderRadius: 10,
              borderColor: state.isFocused
                ? "#002A78"
                : "rgba(0, 42, 120, 0.1)",
              boxShadow: "none",
              // paddingInline: "0.5rem",
              width: "100%",
              minHeight: 35,
              fontSize: "0.875rem",
              direction: "rtl",
            }),
            valueContainer: (base) => ({
              ...base,
              alignItems: "center", // אפשר גם 'flex-start' או 'flex-end' לפי הצורך
              height: "100%",
              paddingTop: 2, // כוונן לפי גובה הגופן
              paddingBottom: 2,
            }),
            indicatorsContainer: (base) => ({
              ...base,
              padding: 0,
            }),
            singleValue: (base) => ({
              ...base,
              color: "#002A78",
            }),
          }}
          components={{
            DropdownIndicator: CustomDropdownIndicator,
            IndicatorSeparator: () => null,
          }}
        />
      )}
    />
  );
}
