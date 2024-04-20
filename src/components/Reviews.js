import React from "react";
import review1 from "../../public/reviews/1.jpg";
import review2 from "../../public/reviews/2.jpg";
import review3 from "../../public/reviews/3.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Image from "next/image";

const Reviews = () => {
  return (
    <div className="bg-[#E6F3F1] flex items-center flex-col rounded-2xl px-[3%] py-[3%]">
      <p className="text-[#018870] font-semibold text-[16px] text-center">
        Our Reviews
      </p>
      <div className="flex gap-6 items-center">
        <FaChevronLeft size={25} />
        <h1 className="text-[52px] font-bold text-center">
          What Our Clients Say About Us
        </h1>
        <FaChevronRight size={25} />
      </div>
      <ul className="flex gap-2 items-center">
        {[1, 2, 3, 4, 5].map((page, index) => (
          <li key={page} aria-label={`page ${page}`} className="w-4 h-4">
            <button
              className={`w-full h-full rounded-full ${
                index === 0 ? "bg-[#018870]" : "bg-default-300"
              }`}
            />
          </li>
        ))}
      </ul>
      <div className="flex gap-8 justify-between px-[5%] pt-[7%] py-[30px] items-center">
        <div className="bg-[#018870] w-[220px] h-[250px]  rounded-bl-[30%] rounded-tl-[25%]  rounded-br-[15%] skew-y-6 skew-x-2 pb-1 pr-1  rounded-tr-[25%] ">
          <div className="bg-white w-[220px] h-[220px] rounded-bl-[15%] rounded-tl-[40%]  rounded-br-[25%] rounded-tr-[20%] ">
            <div className="-skew-y-6 px-4  py-2 -skew-x-2 pt-[40px] text-center">
              <div className="relative ">
                <div className="absolute top-[-90px] left-[60px]  h-[80px] w-[80px] rounded-[100%] overflow-hidden">
                  <Image
                    src={review2}
                    className=" object-cover w-full h-full"
                  />
                </div>
              </div>

              <h4 className="font-semibold text-[18px]">James Anderson</h4>
              <p className="text-[12px]">Lead Designer</p>
              <p className="text-[10px] py-2 text-black/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
                magna eget nibh in turpis. Consequat duis diam lacus arcu.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#018870] w-[300px] h-[320px]  rounded-bl-[35%] rounded-tl-[50%]  rounded-br-[25%] -skew-y-6 -skew-x-2 pt-3 rounded-tr-[45%] ">
          <div className="bg-white w-[300px] h-[300px] rounded-bl-[15%] rounded-tl-[40%]  rounded-br-[25%] rounded-tr-[20%] ">
            <div className="skew-y-6 px-4  py-3 skew-x-2 pt-[60px] text-center">
              <div className="relative ">
                <div className="absolute top-[-110px] left-[80px]  h-[100px] w-[100px] rounded-[100%] overflow-hidden">
                  <Image src={review1} className=" object-cover" />
                </div>
              </div>

              <h4 className="font-semibold text-[24px]">Asfandyar Butt</h4>
              <p className="text-[18px]">UI UX Designer</p>
              <p className="text-[14px] py-2 text-black/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
                magna eget nibh in turpis. Consequat duis diam lacus arcu.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#018870] w-[220px] h-[250px]  rounded-bl-[35%] rounded-tl-[50%]  rounded-br-[25%] -skew-y-6 -skew-x-2 pt-3 rounded-tr-[45%] ">
          <div className="bg-white w-[220px] h-[220px] rounded-bl-[15%] rounded-tl-[40%]  rounded-br-[25%] rounded-tr-[20%] ">
            <div className="skew-y-6 px-4  py-2 skew-x-2 pt-[40px] text-center">
              <div className="relative ">
                <div className="absolute top-[-90px] left-[60px]  h-[80px] w-[80px] rounded-[100%] overflow-hidden">
                  <Image src={review3} className="w-full h-full object-cover" />
                </div>
              </div>

              <h4 className="font-semibold text-[18px]">Phelps Hodge</h4>
              <p className="text-[12px]">Researcher</p>
              <p className="text-[10px] py-2 text-black/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
                magna eget nibh in turpis. Consequat duis diam lacus arcu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
