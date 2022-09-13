import React from "react";
import Link from "next/link";

const contactUs = () => {
  return (
    <div className="contact-main-div ">
      <div className="text-5xl font-bold mt-4">
        <h1 className="">Drop us a Line</h1>
      </div>

      <div class=" sm:w-3/5 w-4/5   md:max-w-full mx-auto drop-shadow-2xl mt-10   ">
        <div class="p-6 border border-gray-300 sm:rounded-md shadow-gray-500 ">
          <form className="form h-full">
            <label class="block mb-6 text-xl">
              <span class="text-gray-700">Name</span>
              <input
                type="text"
                name="name"
                class="
            pl-1    
            block
            w-full
            h-16
            mt-1
            border border-slate-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="name"
              />
            </label>
            <label class="block mb-6 text-xl">
              <span class="text-gray-700">Email</span>
              <input
                name="email"
                type="email"
                class="
            pl-1    
            peer      
            block
            w-full
            mt-1
            h-16
            border border-slate-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="email"
                required
              />
              <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                Please provide a valid email address.
              </p>
            </label>
            <label class="block mb-6 text-xl">
              <span class="text-gray-700">Message</span>
              <textarea
                name="message"
                class="
            pl-1    
            block
            w-full
            mt-1
            border border-slate-300
            rounded-md
            shadow-sm
            h-28
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                rows="3"
                placeholder="message..."
              ></textarea>
            </label>
            <div className="flex">
              <input type="checkbox" class=" mr-1 focus:ring-0" />
              <p>I agree to the privacy policy</p>
            </div>
            <Link href={"/#"}>
                <div className="hover:cursor-pointer text-xl mt-4 ">
                   <p className="underline"> Privacy Policy</p>
                </div>
            </Link>
            <div class="flex space-x-2 justify-center mt-10">
              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                class="inline-block px-6 py-2.5 w-full bg-blue-600 text-white font-medium text-3xl leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default contactUs;
