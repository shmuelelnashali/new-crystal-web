'use client'
import React, { useState } from "react";
import TablesHead from "./TableHead";
import TablesContent from "./TablesContent";
import { formatDate } from "@/app/util/dateFormat";
import { usePathname } from "next/navigation";

export default function Tables({
  data,
  headTable,
  headers,
  deleteRowObj,
  tableWidth,
}) {
console.log(headTable);
console.log(data);
const pathname = usePathname();
  // העמוד שממיינים אותו ולאיזה כיון
  const [columnToSortOn, setColumnToSortOn] = useState({
    index: null,
    direction: "desc",
  });

  // מיפוי התנאים לפי ראוטים
  const routeConfigs = {
    mission: {
      gridCols: (length) => `grid-cols-${length}`,
      containerWidth: tableWidth,
      sortConfig: {
        dateFields: {
          "ת.פתיחה": "Opening_date",
          "ת.סגירה": "Closing_date"
        }
      }
    },
    financialRequirements: {
      gridCols: (length) => `grid-cols-${length}`,
      containerWidth: tableWidth,
      // sortConfig: {
      //   dateFields: {
      //     "תאריך דרישה": "requirement_date",
      //     "תאריך אישור": "approval_date"
      //   }
      // }
    },
    employees: {
      gridCols: (length) => `grid-cols-${length}`,
      containerWidth: tableWidth,
      sortConfig: {
        dateFields: {
          "תחילת פעילות": "activity_start",
          "סיום פעילות": "activity_end"
        }
      }
    },
  };

  // מציאת הקונפיגורציה המתאימה לראוט הנוכחי
  const getCurrentConfig = () => {
    const route = Object.keys(routeConfigs).find(route => 
      pathname.includes(route)
    );
    return routeConfigs[route] 
    // || routeConfigs.mission; // default to mission config
  };
  
  const currentConfig = getCurrentConfig();

  // מיון כל עמודה
  const sortedData = () => {
     // אם אין עמודה למיון, נחזיר את המידע המקורי
  if (columnToSortOn?.index === null) {
    return data;
  }

  const columnKey = headTable[columnToSortOn?.index];
  const columnConfig = headers[columnKey];
  const dateFields = currentConfig?.sortConfig?.dateFields;

  // בדיקה שיש קונפיגורציה תקינה
  if (!columnConfig || !columnConfig.field) {
    console.warn(`Missing column configuration for: ${columnKey}`);
    return data;
  }

    return [...data].sort((a, b) => {
      let valueA, valueB;

      if (columnConfig.type === "date") {
        const dateField = dateFields[columnKey];
        valueA = formatDate(a[dateField]);
        valueB = formatDate(b[dateField]);
        
        // Convert to string for comparison
        valueA = String(valueA);
        valueB = String(valueB);
      } else {
        valueA = a[columnConfig.field];
        valueB = b[columnConfig.field];
  
        if (columnConfig.type === "number") {
          valueA = Number(valueA);
          valueB = Number(valueB);
          
          // Direct number comparison
          return columnToSortOn.direction === "desc" 
            ? valueB - valueA 
            : valueA - valueB;
        }
      }
  
      // Convert to string for string comparison
      valueA = String(valueA || '');
      valueB = String(valueB || '');
  
      return columnToSortOn.direction === "desc"
        ? valueB.localeCompare(valueA, "he")
        : valueA.localeCompare(valueB, "he");
    });
  };

  const headLength = headTable?.length;

  return (
    <div
      className={`w-${currentConfig.containerWidth} overflow-y-auto my-10 m-auto dirLtr pr-2 h-[90%] rounded-lg`}
    >
      <div className="dirRtl max-w-full ">
        <TablesHead
          columnToSortOn={columnToSortOn}
          setColumnToSortOn={setColumnToSortOn}
          headLength={currentConfig.gridCols(headLength)}
          headTable={headTable}
        />
        <TablesContent
          headLength={currentConfig.gridCols(headLength)}
          data={sortedData()}
          deleteRowObj={deleteRowObj}
        />
      </div>
    </div>
  );
}
