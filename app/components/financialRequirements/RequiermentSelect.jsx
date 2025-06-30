import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "@/app/lib/axios";
import { Controller } from "react-hook-form";
import Select, { components } from "react-select";

export default function RequiermentSelect({ label, itemKey, control, name }) {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState({});

  const optionsKey = {
    leadingSection: "sections",
    madorName: "sections",
    name: "stendDays",
    branchName: "branches",
    gmash: "gmsh",
    resourceName: "resource",
  };

  const selectOptionsMap = {
    interest_level_id: [
      { value: "בחר", label: "בחר" },
      { value: "בינוני", label: "בינוני" },
      { value: "נמוך", label: "נמוך" },
    ],
    securityClassification: [
      { value: "בחר", label: "בחר" },
      { value: 'בלמ"ס', label: 'בלמ"ס' },
      { value: "סודי", label: "סודי" },
      { value: "סודי ביותר", label: "סודי ביותר" },
    ],
  };

  useEffect(() => {
    const key = optionsKey[itemKey];
    const predefinedOptions = selectOptionsMap[itemKey];

    if (predefinedOptions) {
      setOptions(predefinedOptions);
      return;
    }

    if (!key) {
      console.warn(`Unknown itemKey: ${itemKey}`);
      return;
    }

    setLoading((prev) => ({ ...prev, [key]: true }));

    axios
      .get(`http://localhost:8000/api/${key}`)
      .then((res) => {
        const formatted = res.data.map((item) => ({
          value: item.id,
          label: item.name,
        }));
        setOptions([{ value: "", label: "בחר" }, ...formatted]);
      })
      .catch((err) => {
        console.error(`Failed to fetch ${key}:`, err);
      })
      .finally(() => {
        setLoading((prev) => ({ ...prev, [key]: false }));
      });
  }, [itemKey]);

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

  const customStyles = {
    container: (base) => ({ ...base, width: "100%" }),
    control: (base, state) => ({
      ...base,
      height: 0,
      borderRadius: 10,
      borderColor: state.isFocused ? "#002A78" : "rgba(0, 42, 120, 0.1)",
      boxShadow: "none",
      width: "100%",
      minHeight: 35,
      fontSize: "0.875rem",
      direction: "rtl",
    }),
    valueContainer: (base) => ({
      ...base,
      alignItems: "center",
      height: "100%",
      paddingTop: 2,
      paddingBottom: 2,
    }),
    indicatorsContainer: (base) => ({ ...base, padding: 0 }),
    singleValue: (base) => ({ ...base, color: "#002A78" }),
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: `${label} נדרש` }}
      render={({ field }) => (
        <Select
          {...field}
          options={options}
          placeholder={`בחר ${label}`}
          isClearable={false}
          styles={customStyles}
          components={{
            DropdownIndicator: CustomDropdownIndicator,
            IndicatorSeparator: () => null,
          }}
          isLoading={loading[optionsKey[itemKey]]}
        />
      )}
    />
  );
}
