import { Bell, MessagesSquare } from "lucide-react";
import AnimatedNavMenu from "./nav-menu";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 px-3 pt-3 pb-4 shadow-sm bg-white border-b border-stone-200">
      <div className="w-full max-w-screen-2xl  mx-auto flex items-center">
        <span>logo</span>
        <div className="w-full ml-4 sm:ml-12 lg:ml-20 flex items-center justify-between">
          <AnimatedNavMenu />
          <div className="flex items-center gap-3 md:gap-5">
            <span>
              <MessagesSquare className="w-5 h-5 text-stone-400" />
            </span>
            <span>
              <Bell className="w-5 h-5 text-stone-400" />
            </span>
            <span className="w-9 h-9 bg-red-500 rounded-full"></span>
          </div>
        </div>
      </div>
    </header>
  );
}
