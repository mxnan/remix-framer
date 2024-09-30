import { Bell, MessagesSquare } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 py-4 shadow-sm bg-white border-b border-stone-200">
      <div className="w-full max-w-screen-2xl mx-auto flex items-center gap-16">
        <span>logo</span>
        <div className="w-full flex items-center justify-between">
          <div className="flex gap-4 *:text-sm *:text-stone-400 font-medium">
            <span>Discover</span>
            <span>My projects</span>
            <span>Payments</span>
          </div>
          <div className="flex items-center gap-4">
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
