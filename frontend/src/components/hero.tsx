
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import SparklesText from "@/components/ui/sparkles-text";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { Meteors } from "@/components/ui/meteors";
export function Hero() {
    return(
         //  <div className="bg-white">
    //   <header className="absolute inset-x-0 top-0 z-50">
    //     <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
    //       <div className="flex lg:flex-1">
    //         <a href="#" className="-m-1.5 p-1.5">
    //           <span className="sr-only">Your Company</span>
    //           <img
    //             alt=""
    //             src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
    //             className="h-8 w-auto"
    //           />
    //         </a>
    //       </div>
    //       <div className="flex lg:hidden">
    //         <button
    //           type="button"
    //           onClick={() => setMobileMenuOpen(true)}
    //           className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
    //         >
    //           <span className="sr-only">Open main menu</span>
    //           <Bars3Icon aria-hidden="true" className="size-6" />
    //         </button>
    //       </div>
    //       <div className="hidden lg:flex lg:gap-x-12">
    //         {navigation.map((item) => (
    //           <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
    //             {item.name}
    //           </a>
    //         ))}
    //       </div>
    //       <div className="hidden lg:flex lg:flex-1 lg:justify-end">
    //         <a href="#" className="text-sm/6 font-semibold text-gray-900">
    //           Log in <span aria-hidden="true">&rarr;</span>
    //         </a>
    //       </div>
    //     </nav>
    //     <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
    //       <div className="fixed inset-0 z-50" />
    //       <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
    //         <div className="flex items-center justify-between">
    //           <a href="#" className="-m-1.5 p-1.5">
    //             <span className="sr-only">Your Company</span>
    //             <img
    //               alt=""
    //               src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
    //               className="h-8 w-auto"
    //             />
    //           </a>
    //           <button
    //             type="button"
    //             onClick={() => setMobileMenuOpen(false)}
    //             className="-m-2.5 rounded-md p-2.5 text-gray-700"
    //           >
    //             <span className="sr-only">Close menu</span>
    //             <XMarkIcon aria-hidden="true" className="size-6" />
    //           </button>
    //         </div>
    //         <div className="mt-6 flow-root">
    //           <div className="-my-6 divide-y divide-gray-500/10">
    //             <div className="space-y-2 py-6">
    //               {navigation.map((item) => (
    //                 <a
    //                   key={item.name}
    //                   href={item.href}
    //                   className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
    //                 >
    //                   {item.name}
    //                 </a>
    //               ))}
    //             </div>
    //             <div className="py-6">
    //               <a
    //                 href="#"
    //                 className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
    //               >
    //                 Log in
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //       </DialogPanel>
    //     </Dialog>
    //   </header>
    <div>

<section className="bg-white text-black py-20 px-6 w-full min-h-screen flex items-center justify-center">
  <div className="container mx-auto flex flex-col items-center justify-center h-full">
    {/* Left Section */}
    <div className="w-full text-center space-y-6">
      <div>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold">
            Welcome to
          </h1>
          <span className="text-orange-500 ml-2">
            <SparklesText text="GenuiQ Labs" />
          </span>
        </div>
 
        <div className="flex justify-center">
          <AnimatedShinyText className="text-lg md:text-2xl inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            Driving innovation through technology and empowering growth.
          </AnimatedShinyText>
        </div>
      </div>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
        )}
      />
    </div>
  </div>
</section>
<div className="w-full h-full py-20 bg-white dark:bg-neutral-900">
  <h2 className="max-w-7xl pl-4 mx-auto text-2xl md:text-5xl lg:text-7xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
    Get to know MissMinutes.
  </h2>

  <div className="flex items-center justify-center mt-8">
    <div className="w-full relative max-w-4xl lg:max-w-6xl flex items-center justify-center">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.90] lg:scale-100 rounded-full blur-3xl" />
      <div className="relative shadow-2xl bg-white border border-gray-200 px-8 lg:px-16 py-12 lg:py-16 h-full overflow-hidden rounded-3xl flex flex-col justify-end items-start">
        <div className="h-8 w-8 rounded-full border flex items-center justify-center mb-8 border-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4 text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
            />
          </svg>
        </div>

        <h1 className="font-bold text-2xl lg:text-5xl text-black mb-6 relative z-50">
          MissMinutes
        </h1>

        <p className="font-normal text-lg lg:text-2xl text-slate-500 mb-8 relative z-50 leading-relaxed">
          Offering users an interactive and engaging job interview experience with AI. 
          Practice your interview skills with real-time feedback and dynamic questioning.
        </p>

        <button
className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300"
          onClick={() => {
            window.open("https://missminutes.in/", "_blank", "noopener,noreferrer");
          }}
        >
          Explore
        </button>

        {/* Meteor effect */}
        <Meteors number={35} />
      </div>
    </div>
  </div>
</div>
    
</div>

    
    );

}