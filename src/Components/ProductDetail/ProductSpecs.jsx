// import React from "react";

// export default function ProductSpecs() {
//   return (
//     <div  className="text-gray-700 flex flex-col items-start gap-y-px">
//       <div className="flex gap-x-3 ">
//         <span>نام :</span>
//         <span>مانتو</span>
//       </div>
//       <div className="flex gap-x-3">
//         <span>جنس :</span>
//         <span>لنین</span>
//       </div>
//       <div className="flex gap-x-3">
//         <span>سایز :</span>
//         <span>36و35و40</span>
//       </div>
//       <div className="flex gap-x-3">
//         <span>قد :</span>
//         <span>90</span>
//       </div>
//     </div>
//   );
// }

export default function ProductSpecsTable() {
  const specs = [
    { label: "مدل مانتو", value: "رسمی" },
    { label: "جنس", value: "لنین" },
    { label: "موارد استفاده", value: "روزمره" },
    { label: "فصل مناسب", value: "چهار فصل" },
  ];

  return (
    <div className="overflow-x-auto mt-12">
      <table className="min-w-full  border-gray-200 text-right">
        <tbody>
          {specs.map((spec, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } grid py-1  grid-cols-2 lg:grid-cols-6`}
            >
              <td className="px-4 py-2 text-gray-700 font-medium   col-span-1">
                {spec.label}
              </td>
              <td className="px-4 py-2 text-gray-600   col-span-1 lg:col-span-5">
                {spec.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
