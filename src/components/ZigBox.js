import React from "react";

function ZigBox({ title, description, data, handleNavigation }) {

  return (
    <div className="flex flex-col w-full items-center justify-center">
      <div className="header text-center">
        {title && <h2 className="text-[2.5rem] font-bold">{title}</h2>}
        {description && (
          <p className="text-[1rem] mt-2 font-semibold text-slate-500">
            {description}
          </p>
        )}
      </div>
      <div className="zigBody w-full md:w-70 ">
        {data?.map(({ title, description, image, extraButton, date, wing, isUpcoming, isClub }, index) => {
          {
            if (!isUpcoming || isClub) {
              return (
                <div
                  className={`flex ${index % 2 ? "flex-col-reverse md:flex-row" : "flex-col-reverse md:flex-row-reverse"
                    } justify-evenly my-5 items-center`}
                >
                  <div className="text w-80 md:w-50 content-center mb-5">
                    <div className="flex flex-row justify-start items-center">
                      <h2 className="text-[1.2rem] md:text-[1.5rem] font-[700]">{title}</h2>
                      {wing && <p className="text-[10px] md:text-[14px]  px-[8px] mx-3 text-white bg-[#1d50c3] rounded-full">{wing}</p>}
                    </div>
                    {date && <div className="flex flex-row items-center justify-start mt-3 text-gray-700">
                      <i className="fa-solid fa-calendar-days"></i>
                      <p className="ml-2 text-[0.8rem] font-medium">
                        {typeof date === "string" ? date :
                          <>
                            {date.toDate().getDate()}.{date.toDate().getMonth() + 1}.{date.toDate().getFullYear()}
                          </>
                        }
                      </p>
                    </div>}
                    <p className="text-[.8rem] md:text-[1rem] font-[500] mt-4 text-slate-500">{description}</p>
                    {extraButton && <button className="border-2 rounded-full px-3 my-3  hover:bg-[#1d50c3] hover:border-white hover:text-white" onClick={() => handleNavigation(title)}>{extraButton.name}</button>}
                  </div>
                  <div className="image mb-5 md:mb-0">
                    <img
                      src={image}
                      alt={title}
                      height="200px"
                      width="300px"
                      className="bg-blue-600"
                    />
                  </div>
                </div>
              );
            }
          }
        })}
      </div>
    </div>
  );
}

export default ZigBox;
