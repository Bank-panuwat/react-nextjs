"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const PromptCard = ({ post, handleEdit, handleDelete, handleTagClick }) => {
  const pathName = usePathname();
  const router = useRouter();

  return (
    <div className="prompt_card">
      <div class="block rounded-lg  text-center ">{/* bg-white */}
        <div class="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
          สร้างโดย: {post.creator}
        </div>
        <div class="p-6">
          <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            พร้อมของ: {post.creator}
          </h5>
          <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {post.prompt}
            {/*className='my-4 font-satoshi text-sm text-gray-700' */}
          </p>
        </div>
        <div class="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
          <p onClick={() => handleTagClick && handleTagClick(post.tag)}>
            {" "}
            {/* className='font-inter text-sm blue_gradient cursor-pointer' */}
            Tag:#{post.tag}
          </p>
        </div>
      </div>

      {/* <div className='flex justify-between items-start gap-5'>
                <div className='flex-1 flex justify-start items-center gap-3 cursor-pointer'>
                    <div className='flex flex-col'>
                        <h3 className='font-satoshi font-semibold text-gray-900'>
                            สร้างโดย: {post.creator}
                        </h3>
                        <hr />
                    </div>
                </div>
            </div> */}

      {/* <p className='my-4 font-satoshi text-sm text-gray-700'>{post.prompt}</p>
            <p
                className='font-inter text-sm blue_gradient cursor-pointer'
                onClick={() => handleTagClick && handleTagClick(post.tag)}
            >
                Tag:#{post.tag}
            </p> */}


            

      {/* แสดงเฉพาะหน้า Profile */}
      {pathName === "/Profile" && (
        <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
          <p
            className="font-inter text-sm green_gradient cursor-pointer"
            onClick={handleEdit}
          >
            แก้ไข
          </p>
          <p
            className="font-inter text-sm orange_gradient cursor-pointer"
            onClick={handleDelete}
          >
            ลบ
          </p>
        </div>
      )}
    </div>
  );
};

export default PromptCard;
