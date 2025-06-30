import React from "react";
import RequiermentSelect from "./RequiermentSelect";
import Image from "next/image";

export default function RowDisplay({
  title,
  headers,
  register,
  control,
  fields,
  append,
  remove,
  grid,
  errors,
}) {
  const selectInput = ["madorName", "resourceName", "branchName", "name"];
  // const alreadyAppended = useRef(false);
  // useEffect(() => {
  //   if (fields.length === 0 && !alreadyAppended.current) {
  //     alreadyAppended.current = true;
  //     append(Object.fromEntries(headers.map((h) => [h.key, " "])));
  //   }
  // }, []);
  return (
    <div>
      <div className="bg-white rounded-xl m-3 border border-[#002A78]/30 flex flex-col ">
        <div
          className={`bg-blue_color rounded-t-xl p-2 pr-5 text-white grid ${
            grid ? `grid-cols-${grid}` : "grid-cols-6"
          }`}
        >
          {headers.map((head, index) => (
            <div
              className="w-full text-lg font-bold justify-center "
              key={`${head.name},${index}`}
            >
              <div className="w-full pr-2 ">{head.header}</div>
            </div>
          ))}
        </div>

        {/* {Array.isArray(fields) && */}
        {/* {fields.length === 0 && <div>yurj</div>
        } */}
        {fields.map((field, rowIndex) => (
          <div key={field.id} className="flex w-full">
            <div
              className={`w-full  grid items-center ${
                grid ? `grid-cols-${grid}` : "grid-cols-6"
              }`}
            >
              {/* {console.log(field)} */}
              {headers.map((head, colIndex) => (
                <div
                  key={colIndex}
                  className={` w-full py-2 px-5 flex items-center justify-center  ${
                    head.header === "פירוט" ? "col-span-2" : ""
                  }`}
                >
                  {selectInput.includes(head.key) ? (
                    <RequiermentSelect
                      itemKey={head.key}
                      label={head.header}
                      control={control}
                      name={`${title}[${rowIndex}].${head.key}`}
                    />
                  ) : (
                    <input
                      {...register(`${title}[${rowIndex}].${head.key}`, {
                        required: `${head.header} is required`,
                      })}
                      autoComplete="off"
                      defaultValue={field[head.key]}
                      type="text"
                      className="h-8 text-[#002A78] border w-full rounded-md"
                    />
                  )}
                  {errors?.[title]?.[rowIndex]?.[head.key] && (
                    <p className="text-red-500 text-sm">
                      {errors[title][rowIndex][head.key].message}
                    </p>
                  )}
                </div>
              ))}
              <div className="text-center"></div>
            </div>
            <button
              type="button"
              onClick={() => {
                if (fields.length > 1) remove(rowIndex);
              }}
              className="text-lg  pl-4 "
            >
              <Image src="./x.svg" alt="x" width={12} height={12} />
            </button>
          </div>
        ))}
      </div>
      <div className="px-5"></div>
      <div className="flex justify-end pl-3 pt-2">
        <button
          type="button"
          onClick={() =>
            append(Object.fromEntries(headers.map((h) => [h.key, ""])))
          }
          className="  w-fit px-3 py-1.5 rounded-full text-white  bg-blue_color "
        >
          שורה חדשה
        </button>
      </div>
    </div>
  );
}
