import { ChevronRight } from "lucide-react";

export default function LinkCard() {
  return (
    <div className="lg:w-1/3 p-3">
      <div
        className="w-full h-auto rounded-xl
       bg-white border-gray-200 border-[0.1px] shadow-md
       "
      >
        <div className="flex flex-col pt-4 px-8 lg:px-4 pb-3">
          <h2 className="text-2xl font-bold">Your Active Projects</h2>
          <p className="text-sm mt-1 text-stone-400">
            Focus on acing these active jobs
          </p>
        </div>
        <div className="flex flex-col p-4 max-lg:px-12">
          <div className="flex items-center text-sm font-medium justify-between py-2">
            <span>Creative Director for Pacific...</span>
            <ChevronRight className="text-stone-400" />
          </div>
          <div className="flex items-center text-sm font-medium justify-between py-2">
            <span>Ecommerce operation head...</span>{" "}
            <ChevronRight className="text-stone-400" />
          </div>
          <div className="flex items-center text-sm font-medium justify-between py-2">
            <span>Creative strategist for an...</span>{" "}
            <ChevronRight className="text-stone-400" />
          </div>
        </div>
        <span className="flex-1 cursor-pointer py-3 text-sm text-stone-400 border-t  flex items-center justify-center">
          View all projects
        </span>
      </div>
    </div>
  );
}
