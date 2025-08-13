import React from 'react'

export default function CommentForm() {
  return (
              <div className="my-12">
            <form action="" className="flex flex-col  ">
              <span className="text-gray-400">دیدگاهتان را بنویسید</span>
              <span className="text-gray-400 text-sm my-3">
                نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری
                شده‌اند *
              </span>
              <div>
                <label htmlFor="">دیدگاه</label>
                <textarea
                  name=""
                  id=""
                  className="w-full bg-gray-50 border border-gray-200 my-3 h-40"
                ></textarea>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {/* Input Groupe */}
                <div className="flex flex-col gap-y-1 ">
                  <label htmlFor="" className="text-sm ">
                    نام
                  </label>
                  <input
                    type="text"
                    className=" p-2 rounded bg-gray-50 border border-gray-200"
                  />
                </div>
                {/* Input Groupe */}
                <div className="flex flex-col gap-y-1 ">
                  <label htmlFor="" className="text-sm ">
                    ایمیل
                  </label>
                  <input
                    type="text"
                    className=" p-2 rounded bg-gray-50 border border-gray-200"
                  />
                </div>
                {/* Input Groupe */}
                <div className="flex flex-col gap-y-1 ">
                  <label htmlFor="" className="text-sm ">
                    وب سایت
                  </label>
                  <input
                    type="text"
                    className=" p-2 rounded bg-gray-50 border border-gray-200"
                  />
                </div>
              </div>
            </form>
            <div>
              <button className="px-10 border py-1 rounded hover:bg-amber-500 transition-all hover:text-white mt-10">ارسال دیدگاه</button>
            </div>
          </div>
  )
}
