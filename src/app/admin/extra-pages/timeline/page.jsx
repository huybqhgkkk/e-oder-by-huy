import React, { Fragment } from "react";
import { BreadcrumbAdmin } from "@/components";

// images
import img1 from "@/assets/images/small/small-1.jpg";
import img2 from "@/assets/images/small/small-2.jpg";
import img3 from "@/assets/images/small/small-3.jpg";
import { Link } from "react-router-dom";
import { LuTarget } from "react-icons/lu";

const Timeline = () => {
  const timelineData = {
    Today: [
      {
        title: "Completed UX design project for our client",
        date: "22 July, 2019",
        text: "Dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?",
        variant: "bg-red-500/30 text-red-500",
        reactions: [
          {
            emoji: "👍",
            count: "17",
          },
          {
            emoji: "❤️",
            count: "89",
          },
        ],
      },
      {
        title: "Yay! We are celebrating our first admin release.",
        date: "22 July, 2019",
        text: "Consectetur adipisicing elit. Iusto, optio, dolorum John deon provident rerum aut hic quasi placeat iure tempora laudantium",
        variant: "bg-sky-500/30 text-sky-500",
        reactions: [
          {
            emoji: "🎉",
            count: "148",
          },
        ],
      },
    ],
    Yesterday: [
      {
        title: "We released new version of our theme Yum.",
        date: "22 July, 2019",
        text: "3 new photo Uploaded on facebook fan page",
        variant: "bg-yellow-500/30 text-yellow-500",
        images: [img1, img2, img3],
        reactions: [
          {
            emoji: "🏆",
            count: "94",
          },
        ],
      },
      {
        title: "We have archieved 25k sales in our themes.",
        date: "22 July, 2019",
        text: "Outdoor visit at California State Route 85 with John Boltana & Harry Piterson regarding to setup a new show room.",
        variant: "bg-green-500/30 text-green-500",
        reactions: [
          {
            emoji: "👍",
            count: "1.4k",
          },
          {
            emoji: "🎉",
            count: "2k",
          },
        ],
      },
      {
        title: "Conference call with UX team",
        date: "22 July, 2019",
        text: "Jonatha Smith added new milestone Pathek Lorem ipsum dolor sit amet consiquest dio",
        variant: "bg-primary/30 text-primary",
        reactions: [
          {
            emoji: "❤️",
            count: "89",
          },
        ],
      },
    ],
    "Last Month": [
      {
        title: "Join new team member Alex Smith",
        date: "10 December, 2018",
        text: "Alex Smith is a Senior Software (Full Stack) engineer with a deep passion for building usable, functional & pretty web applications.",
        variant: "bg-red-500/30 text-red-500",
        avatar: [
          {
            image: "/images/users/avatar-3.jpg",
            name: "Alex Smith",
            position: "Senior Software (Full Stack)",
          },
        ],
      },
      {
        title: "First release of Yum admin dashboard template",
        date: "05 May, 2023",
        text: "Outdoor visit at California State Route 85 with John Boltana & Harry Piterson regarding to setup a new show room.",
        variant: "bg-primary/30 text-primary",
        reactions: [
          {
            emoji: "🎉",
            count: "10k",
          },
          {
            emoji: "👍",
            count: "3.2k",
          },
          {
            emoji: "❤️",
            count: "7.1k",
          },
        ],
      },
    ],
  };

  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Timeline" subtitle="Extra Pages" />
        <div className="relative space-y-12 pb-6">
          <div className="absolute border-s-2 border border-default-200 h-full top-0 start-10 md:start-1/2 -translate-x-1/2 rtl:translate-x-1/2 -z-10"></div>

          {Object.keys(timelineData).map((day, idx) => {
            return (
              <Fragment key={idx}>
                <div className="md:text-center">
                  <h5 className="py-2 px-4 bg-default-100 inline rounded">
                    {day}
                  </h5>
                </div>
                {(timelineData[day] || []).map((item, idx) => {
                  return idx % 2 === 0 ? (
                    <div key={idx} className="md:text-end text-start">
                      <div className="absolute start-10 md:start-1/2 -translate-x-1/2 rtl:translate-x-1/2 mt-6">
                        <div
                          className={`w-6 h-6 flex justify-center items-center rounded-full ${item.variant}`}
                        >
                          <LuTarget className="text-sm" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="md:col-span-1 col-span-2">
                          <div className="relative md:me-10 md:ms-0 ms-20">
                            <div className="border border-default-200 rounded-lg p-5">
                              <h4 className="mb-1.5 text-base">{item.title}</h4>
                              <p className="mb-4 text-default-600">
                                <small>{item.date}</small>
                              </p>
                              <p className="mb-4 text-default-600">
                                {item.text}
                              </p>
                              {item.images && (
                                <div className="mb-6 flex items-center md:justify-end gap-2">
                                  {(item.images || []).map((img, idx) => {
                                    return (
                                      <Link to="" key={idx}>
                                        <img
                                          className="h-9 rounded"
                                          alt=""
                                          src={img}
                                        />
                                      </Link>
                                    );
                                  })}
                                </div>
                              )}
                              {item.reactions &&
                                (item.reactions || []).map((item, idx) => {
                                  return (
                                    <Link
                                      key={idx}
                                      to=""
                                      className="me-1 rounded-lg py-2 px-5 inline-block font-semibold tracking-wide border border-default-200 align-middle duration-500 text-sm text-center btn-sm bg-default-200 text-default-900"
                                    >
                                      {item.emoji} {item.count}
                                    </Link>
                                  );
                                })}
                              {item.avatar && (
                                <div className="flex  items-center justify-end">
                                  {(item.avatar || []).map((item, idx) => {
                                    return (
                                      <React.Fragment key={idx}>
                                        <img
                                          src={item.image}
                                          alt="Arya S"
                                          className="rounded-full me-3 h-6"
                                        />
                                        <div>
                                          <h5 className="mt-1.5 text-sm">
                                            {item.name}{" "}
                                            <small>- {item.position}</small>
                                          </h5>
                                        </div>
                                      </React.Fragment>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                            <div className="bg-white dark:bg-default-50 absolute h-4 w-4 rotate-45 rounded-sm top-7 md:-end-2 md:start-auto -start-2 border-t border-e border-default-200"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-start" key={idx}>
                      <div className="absolute start-10 md:start-1/2 -translate-x-1/2 rtl:translate-x-1/2 mt-6">
                        <div
                          className={`w-6 h-6 flex justify-center items-center rounded-full ${item.variant}`}
                        >
                          <LuTarget className="text-sm" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="md:col-start-2 col-span-2">
                          <div className="relative md:ms-10 ms-20">
                            <div className="border border-default-200 rounded-lg p-5">
                              <h4 className="mb-1.5 text-base">{item.title}</h4>
                              <p className="mb-4 text-default-600">
                                <small>{item.date}</small>
                              </p>
                              <p className="mb-4 text-default-600">
                                {item.text}
                              </p>
                              {item.images && (
                                <div className="mb-6 flex items-center md:justify-end gap-2">
                                  {(item.images || []).map((img, idx) => {
                                    return (
                                      <Link to="" key={idx}>
                                        <img
                                          className="h-9 rounded"
                                          alt=""
                                          src={img}
                                        />
                                      </Link>
                                    );
                                  })}
                                </div>
                              )}
                              {item.reactions &&
                                (item.reactions || []).map((item, idx) => {
                                  return (
                                    <Link
                                      key={idx}
                                      to=""
                                      className="me-1 rounded-lg py-2 px-5 inline-block font-semibold tracking-wide border border-default-200 align-middle duration-500 text-sm text-center btn-sm bg-default-200 text-default-900"
                                    >
                                      {item.emoji} {item.count}
                                    </Link>
                                  );
                                })}
                              {item.avatar && (
                                <div className="flex items-center justify-start">
                                  {(item.avatar || []).map((item, idx) => {
                                    return (
                                      <React.Fragment key={idx}>
                                        <img
                                          src={item.image}
                                          alt="Arya S"
                                          className="rounded-full me-3 h-6"
                                        />
                                        <div>
                                          <h5 className="mt-1.5 text-sm">
                                            {item.name}{" "}
                                            <small>- {item.position}</small>
                                          </h5>
                                        </div>
                                      </React.Fragment>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                            <div className="bg-white dark:bg-default-50 absolute h-4 w-4 rotate-45 rounded-sm top-7 -start-2 border-b border-s border-default-200"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
