import React from "react";

export default function Footer() {
  return (
    <div className="bg-gray-100 p-5 flex flex-col md:flex-row justify-between gap-5 ">
      <div>
        <span className="font-bold ">درباره ی ما</span>
        <p className="max-w-[370px] mt-3  text-gray-500  text-sm">
          سایت مسترمانتو نخستین شبکه تخصصی فروش سایت مانتو در ایران می باشد که
          بابیش از 50 برند درجه یک مانتو(مانتو مجلسی - مانتو پاییزه -مانتو اداری
          و... ) همکاری دارد و این فرصت برای شما ایجاد شده است، تا خرید خود را
          با مشاهده و بررسی بیش از 1500 مدل جدید در هرکالکشن با اعتماد کامل به
          مستر مانتو انجام دهید. ارسال منظم، ضمانت بهترین جنس و تضمین ایرانی
          بودن کالا سه اصل اولیه ماست.
        </p>
      </div>
      <div>
        <span className="font-bold ">اطلاعات</span>
        <ul className="mt-3 text-sm gap-y-2 flex flex-col ">
          <li>درباره ما </li>
          <li>تماس با ما</li>
          <li>شرایط و ضوابط</li>
          <li>بازگشت و تعویض</li>
        </ul>
      </div>
      <div  className="max-w-[450px] mt-3">
        <div></div>
        <span className=" text-sm text-gray-900">
          اعتماد شما افتخار ماست ، وب سایت مسترمانتو دارای بیش از 7 سال مجوزهای
          قابل پیگیری ورسمی ،از وزارت صنعت ،معدن وتجارت(اینماد)و...رامیباشد
        </span>
      </div>
    
    </div>
  );
}
