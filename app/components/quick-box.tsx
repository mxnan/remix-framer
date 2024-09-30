import { cn } from "~/lib/utils";

export default function QuickBox() {
  const quickboxItems = [
    {
      user: "Alexa Jones",
      textTime: "12h ago",
      today: true,
    },
    {
      user: "John Schmidt",
      textTime: "16h ago",
      today: true,
    },
    {
      user: "Julius Lesiuk",
      textTime: "2d ago",
      today: false,
    },
    {
      user: "Claire Dunphy",
      textTime: "2d ago",
      today: false,
    },
  ];
  return (
    <div className=" lg:w-2/4 p-3">
      <div className="w-full h-auto rounded-xl bg-white border-gray-200 border-[0.1px] shadow-md">
        <div className="pt-4 px-6">
          <h2 className="text-2xl font-bold">Quick Box</h2>
          <p className="text-stone-400">A quick glance of your inbox</p>
        </div>
        <div className="mt-4">
          {quickboxItems.map((item) => (
            <div
              key={item.user}
              className={cn(
                "flex items-center justify-between py-5 px-5",
                item.today ? "bg-indigo-100/50" : "bg-white"
              )}
            >
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-indigo-600"></span>
                <div className="flex flex-col">
                  <span className="font-bold text-lg">{item.user}</span>
                  <span className="text-sm text-stone-400">
                    Sounds good, but we really need to speed up the process...
                  </span>
                </div>
              </div>

              <span className="text-sm ml-2 whitespace-nowrap text-stone-400">{item.textTime}</span>
            </div>
          ))}
        </div>
        <span className="flex-1 mt-2 cursor-pointer py-3 text-sm text-stone-400 border-t  flex items-center justify-center">
          View all projects
        </span>
      </div>
    </div>
  );
}
