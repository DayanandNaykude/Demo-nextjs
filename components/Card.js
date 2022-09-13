import Router from "next/router";
import React from "react";
import Link from "next/link";
var moment = require("moment");

const Card = ({ post_title, post_content, post_date, post_id }) => {
  return (
    <div class="flex mt-10 hover:scale-110 transition duration-300 ease-in-out ">
      <div class="rounded-lg shadow-lg bg-white max-w-sm">
        <img
          class="rounded-t-lg "
          src="https://wallpapercave.com/wp/wp2722928.jpg"
          alt=""
        />

        <div class="p-6">
          <h5 class="text-gray-900 text-xl font-medium mb-2">
            <span class="font-bold"> Tittle:</span> {post_title}
          </h5>
          <h6 class="text-gray-900 text-xl font-medium mb-2">
            <span class="font-bold"> Date:</span>{" "}
            {moment(post_date).format("MMM Do, YY")}
          </h6>

          <div
            class="text-gray-700 text-base mb-4"
            dangerouslySetInnerHTML={{
              __html:
                post_content.length > 15
                  ? post_content.substring(0, 15) + "..."
                  : post_content,
            }}
          />
        </div>
        <Link href={`/blogs/${post_id}`}>
          <div className = "show-btn">
            <button
              type="button"
              class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Show Details
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
