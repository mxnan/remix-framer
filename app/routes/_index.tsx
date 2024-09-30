import type { MetaFunction } from "@remix-run/node";
import { ArrowUp } from "lucide-react";
import CtaBox from "~/components/cta-box";
import LinkCard from "~/components/link-card";
import QuickBox from "~/components/quick-box";

export const meta: MetaFunction = () => {
  return [
    { title: "remix framer" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="max-w-screen-2xl mx-auto px-3 xl:px-8 2xl:px-12 min-h-screen pb-10">
      <div className="py-10 mt-4 md:ml-4 w-full flex justify-center md:justify-start  items-center gap-6">
        <span className="w-20 h-20 rounded-full bg-red-500"></span>
        <h1 className="text-2xl md:text-5xl flex-wrap font-medium">
          Welcome Back, Parik 👋{" "}
        </h1>
      </div>
      <div className="h-full w-full mt-8 flex flex-col lg:flex-row  ">
        <div className=" lg:w-2/4 p-3">
          <div
            className="p-4 h-auto w-full  rounded-xl
           bg-white border-gray-200 border-[0.1px] shadow-md
           flex flex-wrap gap-24 justify-between px-8 py-6
           "
          >
            <div>
              <h2 className="text-3xl font-bold">Earnings this month</h2>
              <p className="mt-2 text-stone-400">
                Your earnings this month compared to last month
              </p>
            </div>
            <div>
              <div className="flex items-start gap-1">
                <span className="font-bold">$</span>
                <span className="text-4xl font-bold">24,468</span>
              </div>
              <div className="flex items-center mt-2 gap-2">
                <span className="flex items-center gap-1 font-bold text-green-500/80">
                  <ArrowUp className="w-4 h-4 mb-1 stroke-[3px]" /> 13%
                </span>
                <span className="text-sm text-stone-400 ">vs last month</span>
              </div>
            </div>
          </div>
        </div>
        <LinkCard />
        <LinkCard />
      </div>
      <div className="w-full h-full flex flex-col lg:flex-row">
        <QuickBox />
       <CtaBox />
      </div>
    </div>
  );
}
