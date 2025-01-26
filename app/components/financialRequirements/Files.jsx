// import Image from "next/image";
// import React from "react";

// export default function Files() {
//   const fileArray = ["תמונה_מהממת", "קובץ_מפורט" ];
//   const fileIcons = {
//     תמונה_מהממת: "/requirementIcons/imageIcon.svg", // Path to the image icon
//     קובץ_מפורט: "/requirementIcons/fileIcon.svg", // Path to the file icon
//   };

//   return (
//     <div className="flex items-center justify-start py-2 px-12 gap-4">
//       <div className="flex items-center gap-1 bg-[#E4E8F3] text-[#002A78] px-4 py-2 rounded border border-[#002A78] border-dashed">
//         <Image src="/plus.svg" width={28} height={28} alt="plus icon" />
//         <div>הוסף קובץ</div>
//       </div>
//       <div className="flex  gap-4  ">
//         {fileArray.map((file, index) => (
//           <div
//             key={index}
//             className="text-[#002A78]  px-4 py-3 rounded bg-[#E4E8F3] flex items-center gap-2"
//           >
//             {fileIcons[file] ? (
//               <Image
//                 src={fileIcons[file]}
//                 width={24}
//                 height={24}
//                 alt={`${file} icon`}
//               />
//             ) : null}
//             {file}
//             <Image
//             src={"/requirementIcons/binIcon.svg"}
//             width={24}
//             height={24}
//             alt="bin icon"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import Image from "next/image";
import React, { useState } from "react";

export default function Files() {
  const [fileArray, setFileArray] = useState([]);

  const fileIcons = {
    imageIcon: "/requirementIcons/imageIcon.svg", // Path to the image icon
    fileIcon: "/requirementIcons/fileIcon.svg",   // Path to the file icon
    defaultIcon: "/requirementIcons/defaultIcon.svg", // Default icon if type isn't matched
  };

  // Function to handle file selection and adding it to the array
  const handleFileSelect = (event) => {
    console.log(event);
    
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      // Determine file type based on file extension
      const fileExtension = file.name.split(".").pop().toLowerCase();
      let iconType;

      if (["png", "jpg", "jpeg", "gif"].includes(fileExtension)) {
        iconType = "imageIcon"; // Assign image icon for image files
      } else if (["pdf", "doc", "docx"].includes(fileExtension)) {
        iconType = "fileIcon";  // Assign file icon for document files
      } else {
        iconType = "defaultIcon"; // Default icon for unsupported files
      }

      // Add file to the file array
      const newFile = {
        name: file.name,
        icon: fileIcons[iconType], // Icon based on the file type
        file,
      };

      setFileArray((prevArray) => [...prevArray, newFile]);
    }
    
  };
  console.log(fileArray);

  // Function to open the file when clicked
  const handleFileClick = (file) => {
    const fileURL = URL.createObjectURL(file); // Create a URL for the file object
    window.open(fileURL, "_blank"); // Open the file in a new tab
  };

  // Function to delete the file from the array
  const handleDelete = (fileName) => {
    setFileArray((prevArray) => prevArray.filter((file) => file.name !== fileName));
  };

  return (
    <div className="flex items-center justify-start py-2 px-12 gap-4">
     

      {/* Display the files */}
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-1 bg-[#E4E8F3] text-[#002A78] px-4 py-2 rounded border border-[#002A78] border-dashed"> 
           <label htmlFor="fileInput">
          <Image src="/plus.svg" width={28} height={28} alt="plus icon" className="cursor-pointer"/>
        </label>
        <div>הוסף קובץ</div>
        {/* Hidden file input */}
        <input
          id="fileInput"
          type="file"
          accept="image/*, .pdf, .doc, .docx"
          className="hidden"
          onChange={handleFileSelect}
        /></div>
        {fileArray.map((file, index) => (
          <div
            key={index}
            className="text-[#002A78] px-4 py-3 rounded bg-[#E4E8F3] flex items-center gap-2"
          >
            <Image
              src={file.icon}
              width={24}
              height={24}
              alt={`${file.name} icon`}
              className="mr-2"
            />
            <p
              className="cursor-pointer"
              onClick={() => handleFileClick(file.file)} // Open the file when clicked
            >
              {file.name}
            </p>
            <Image
              src="/requirementIcons/binIcon.svg"
              width={24}
              height={24}
              alt="delete icon"
              className="cursor-pointer"
              onClick={() => handleDelete(file.name)} // Delete the file when clicked
            />
          </div>
        ))}
      </div>
    </div>
  );
}
