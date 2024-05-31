// 'use client';
//
// import { useRef, useState } from 'react';
//
// export default function FileUpload() {
//   const [file, setFile] = useState(null);
//   const fileInputRef = useRef(null);
//
//   // @ts-ignore
//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };
//
//   const handleDivClick = () => {
//     // @ts-ignore
//     fileInputRef.current.click();
//   };
//
//   const handleSubmit = () => {
//     if (file) {
//       const formData = new FormData();
//       formData.append('file', file);
//
//       // Make your API request here with formData
//       // @ts-ignore
//       console.log('File submitted:', file.name);
//     }
//   };
//
//   return (
//     <div className="w-300 flex items-center justify-center">
//       <div
//         className="w-200 border-dashed border-2 border-blue-500 p-20 text-center cursor-pointer"
//         onClick={handleDivClick}
//       >
//         <input
//           type="file"
//           accept=".pdf"
//           onChange={handleFileChange}
//           ref={fileInputRef}
//           className="hidden"
//         />
//         <div
//           className="block w-80 h-16 text-sm text-slate-500
//             file:mr-4 file:py-2 file:px-4
//             file:rounded-full file:border-0
//             file:text-sm file:font-semibold
//             file:bg-blue-50 file:text-blue-700
//             hover:file:bg-blue-100
//           "
//         >
//           Click to upload PDF
//         </div>
//         {/* eslint-disable-next-line react/button-has-type */}
//         <button
//           onClick={handleSubmit}
//           className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
//         >
//           Upload
//         </button>
//       </div>
//     </div>
//   );
// }
