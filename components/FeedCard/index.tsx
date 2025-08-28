import React from "react";
import Image from "next/image";
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineRetweet } from "react-icons/ai";
import { AiOutlineUpload } from "react-icons/ai";
const FeedCard: React.FC = () => {
  return (
    <div className="border border-r-0 border-l-0 border-b-0 border-gray-600 p-5 hover:bg-slate-900 transition-all cursor-pointer">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-1">
          <Image
            className=" "
            src="https://avatars.githubusercontent.com/u/154977316?v=4"
            alt="user"
            height={50}
            width={50}
          />
        </div>
        <div className="col-span-11">
          <h5>Saad Momin</h5>
          <p>
            The quick brown fox jumps over the lazy dog, while humming a tune
            only squirrels seem to understand. Meanwhile, the clouds drift
            lazily across the sky, painting shadows that dance on the fields
            below.
          </p>
          <div className="flex justify-between mt-5 text-xl items-center p-2 w-[90%]">
            <div>
              <BiMessageRounded />
            </div>
            <div>
              <AiOutlineRetweet />
            </div>
            <div>
              <AiOutlineHeart />
            </div>
            <div>
              <AiOutlineUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
