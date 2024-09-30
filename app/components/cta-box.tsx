import { Button } from "./ui/button";

export default function CtaBox() {
  return (
    <div className=" lg:w-2/4 p-3">
      <div className="relative  w-full h-auto rounded-xl bg-indigo-100/50 border-gray-200 border-[0.1px] shadow-md">
        <div className="flex flex-col p-8 relative z-20 ">
          <h2 className="text-stone-700 leading-normal mt-6 text-4xl font-bold">
            Parik, we found over{" "}
            <span className="mx-1 text-blue-600">37 jobs</span>
            <br className="hidden md:block" />
            that match your skills
          </h2>
          <span className="text-xl text-stone-400 mt-2">
            Let’s take a look at them, you might as well
            <br className="hidden md:block" /> find your dream job ✨
          </span>
          <Button size={"lg"} className="mt-8 rounded-full font-semibold w-fit text-xl">
            Let’s go!
          </Button>
        </div>
        <div className="mt-5 ">
          <svg
            width="183"
            height="140"
            viewBox="0 0 183 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M93.3377 217.458C84.3197 236.126 58.4983 238.086 46.7655 220.993L-65.5077 57.4293C-77.2851 40.2716 -66.0423 16.8022 -45.2911 15.2269L153.277 0.152556C174.028 -1.42277 188.685 20.0805 179.633 38.8195L93.3377 217.458Z"
              fill="url(#paint0_linear_5_335)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_5_335"
                x1="164.338"
                y1="20.0259"
                x2="-107.534"
                y2="302.555"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.150327" stopColor="#7AFF8F" />
                <stop offset="0.603397" stopColor="#6DFFDB" stopOpacity="0" />
                <stop offset="1" stopColor="#57AD00" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute right-0 top-24 z-0">
          <svg
            width="208"
            height="345"
            viewBox="0 0 208 345"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="z-0"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M177.645 255.144L192.642 264.422L143.043 344.591L128.047 335.313C57.3285 291.561 35.4678 198.765 79.2196 128.047C122.971 57.3285 215.768 35.4678 286.486 79.2196L301.482 88.4975L251.884 168.666L236.887 159.388C210.445 143.029 175.748 151.203 159.388 177.645C143.029 204.088 151.203 238.785 177.645 255.144ZM144.392 168.367C122.908 203.092 133.643 248.658 168.367 270.141L137.325 320.317C137.325 320.317 137.325 320.317 137.324 320.316L168.367 270.141C133.642 248.658 122.908 203.092 144.391 168.367C153.79 153.175 167.799 142.575 183.492 137.256C167.799 142.575 153.791 153.175 144.392 168.367ZM246.165 144.392C246.165 144.392 246.165 144.392 246.165 144.392L277.208 94.216C275.942 93.4329 274.668 92.6736 273.387 91.938C274.668 92.6736 275.942 93.433 277.208 94.2161L246.165 144.392Z"
              fill="url(#paint0_linear_5_325)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M177.645 255.144L192.642 264.422L143.043 344.591L128.047 335.313C57.3285 291.561 35.4678 198.765 79.2196 128.047C122.971 57.3285 215.768 35.4678 286.486 79.2196L301.482 88.4975L251.884 168.666L236.887 159.388C210.445 143.029 175.748 151.203 159.388 177.645C143.029 204.088 151.203 238.785 177.645 255.144ZM144.392 168.367C122.908 203.092 133.643 248.658 168.367 270.141L137.325 320.317C137.325 320.317 137.325 320.317 137.324 320.316L168.367 270.141C133.642 248.658 122.908 203.092 144.391 168.367C153.79 153.175 167.799 142.575 183.492 137.256C167.799 142.575 153.791 153.175 144.392 168.367ZM246.165 144.392C246.165 144.392 246.165 144.392 246.165 144.392L277.208 94.216C275.942 93.4329 274.668 92.6736 273.387 91.938C274.668 92.6736 275.942 93.433 277.208 94.2161L246.165 144.392Z"
              fill="url(#paint1_linear_5_325)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_5_325"
                x1="168.561"
                y1="106.384"
                x2="288.084"
                y2="185.385"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#DCFF7A" />
                <stop offset="0.54" stopColor="#6DFFDB" stopOpacity="0" />
                <stop offset="1" stopColor="#57AD00" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_5_325"
                x1="168.561"
                y1="106.384"
                x2="288.084"
                y2="185.385"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#DCFF7A" />
                <stop offset="0.54" stopColor="#6DFFDB" stopOpacity="0" />
                <stop offset="1" stopColor="#57AD00" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
