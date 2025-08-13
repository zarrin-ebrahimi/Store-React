import { useState } from "react";
import ProductSpecs from "./ProductSpecs";
import CommentForm from "../CommentForm/CommentForm";
export default function ProductTabs() {
  const tabs = [
    { id: "specs", label: "توضیحات" },
    { id: "reviwes", label: "دیدگاه" },
  ];
  const [ativeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="my-12 flex flex-col">
      <div className="  flex justify-center gap-x-3">
        {tabs.map((tab) => (
          <button
            onClick={() => setActiveTab(tab.id)}
            type="button"
            className={` border rounded-full w-24 cursor-pointer py-1.5 text-gray-800  ${
              ativeTab === tab.id ? "border-amber-500" : "border-gray-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
        {/* Buttons Tab */}
      </div>

      {ativeTab === "specs" && <ProductSpecs />}
      {ativeTab === "reviwes" && <CommentForm />}
    </div>
  );
}
