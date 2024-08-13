import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";
import DatePicker from "react-flatpickr";

// data
import {
  teamWidget,
  teamWidget2,
  teamWidget3,
  teamWidget4,
  teamWidget5,
  teamWidget6,
} from "./data";

// component
import Dropdown from "./Dropdown";
import TeamIcon from "./TeamIcon";

import { LuCalendar, LuFocus } from "react-icons/lu";

const TeamWidget = () => {
  return (
    <>
      <div className="grid xl:grid-cols-12 gap-5">
        <div className="xl:col-span-3">
          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <div className="divide-y divide-default-200">
                <h6 className="uppercase mb-4 text-default-700">
                  Team Members
                </h6>

                {(teamWidget || []).map((value, idx) => {
                  return (
                    <div key={idx} className="flex mt-1 pt-3">
                      <img
                        src={value.img}
                        className="h-12 rounded me-3"
                        alt="Yum"
                      />
                      <div className="flex-grow">
                        <h5 className="mt-1 text-default-700">{value.name}</h5>
                        <h6 className="text-gray-500 font-n mt-1 mb-2 dark:text-gray-400">
                          {value.post}
                        </h6>
                      </div>
                      <div className="h-4">
                        <Dropdown />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="xl:col-span-4">
          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h4 className="uppercase text-default-700">Team Chat</h4>
                <div>
                  <Dropdown />
                </div>
              </div>
              <div className="chat-conversation">
                <SimpleBar style={{ height: 314 }}>
                  <div className="space-y-6">
                    {(teamWidget2 || []).map((value, idx) => {
                      return (
                        <div
                          key={idx}
                          className={`flex ${
                            value.name === "Dominic"
                              ? "flex-row-reverse text-end"
                              : "text-start"
                          } 
                            items-start gap-3 group ${value.class}`}
                        >
                          <div className="text-center">
                            <img
                              src={value.img}
                              className="rounded-full h-10"
                            />
                            <p className="text-xs pt-0.5">{value.time}</p>
                          </div>
                          <div
                            className={`max-w-3/4 ${
                              value.name === "Dominic"
                                ? "bg-warning/20"
                                : "bg-light dark:bg-default-100"
                            }
                              p-2 relative rounded `}
                          >
                            <p className="text-xs font-bold relative">
                              {value.name}
                            </p>
                            <p className="pt-1">{value.text}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </SimpleBar>
                <form
                  className="mt-4"
                  noValidate
                  name="chat-form"
                  id="chat-form"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex-grow">
                      <input
                        type="text"
                        className="form-input rounded-lg border border-default-200 px-4 py-2.5 w-full"
                        placeholder="Enter your text"
                        required
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="py-2.5 px-4 inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center rounded-lg bg-primary/90 hover:bg-primary text-white"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:col-span-5">
          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <div className="flex items-start justify-between">
                <h6 className="uppercase text-default-700">Team Events</h6>
                <div className="h-4">
                  <Dropdown />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5 mt-7">
                <div>
                  <DatePicker className="hidden" options={{ inline: true }} />
                </div>
                <div className="mx-auto">
                  <div className="space-y-5">
                    {(teamWidget3 || []).map((value, idx) => {
                      return (
                        <div key={idx} className="mb-3">
                          <p className="text-gray-500 mb-0 fs-13 inline-flex gap-1 items-center">
                            <LuCalendar
                              size={16}
                              className="me-1 dark:text-gray-400"
                            />
                            {value.time}
                          </p>
                          <h6 className="text-base mt-1 text-default-700">
                            {value.event}
                          </h6>
                        </div>
                      );
                    })}
                    <div>
                      <Link
                        to=""
                        className="justify-center rounded-lg py-2 px-4 inline-flex font-semibold tracking-wide items-center duration-500 text-sm text-center rounded-lg-sm  bg-primary/90 text-white hover:bg-primary me-1"
                      >
                        <LuFocus size={16} className="me-2" />
                        Add Event
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-5">
        <div className="rounded-lg border border-default-200">
          <div>
            <div className="flex items-center justify-between p-5">
              <h5 className="uppercase mb-0 text-default-700">Overview</h5>
              <div className="h-4">
                <Dropdown />
              </div>
            </div>
            {(teamWidget4 || []).map((value, idx) => {
              return (
                <TeamIcon
                  key={idx}
                  text={value.text}
                  amount={value.amount}
                  icon={value.icon}
                />
              );
            })}
          </div>
        </div>

        <div className="rounded-lg border border-default-200">
          <div className="p-6">
            <div className="flex items-start justify-between mb-6">
              <h6 className="uppercase text-default-700">Tasks</h6>
              <Link
                to="/apps/tasks/list"
                className="rounded-lg bg-primary text-white py-2 px-4 inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center rounded-lg-sm"
              >
                View All
              </Link>
            </div>
            <div className="space-y-6">
              {(teamWidget5 || []).map((value, idx) => {
                return (
                  <div key={idx} className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      className="form-checkbox rounded text-primary"
                      id={`task${idx}`}
                    />
                    <div>
                      <label
                        className="font-semibold text-default-700"
                        htmlFor={`task${idx}`}
                      >
                        {value.text1}
                      </label>
                      <p className="text-default-600">{value.text2}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-default-200">
          <div className="p-6">
            <div className="flex items-start justify-between gap-5 mb-5">
              <h6 className="uppercase text-default-700">Activities</h6>
              <Link
                to="/"
                className="rounded-lg bg-primary text-white py-2 px-4 inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center rounded-lg-sm float-end"
              >
                View All
              </Link>
            </div>
            <div className="space-y-8">
              {(teamWidget6 || []).map((value, idx) => {
                const Icon = value.icon;
                return (
                  <div key={idx} className={`flex ${value.class}`}>
                    {value.img ? (
                      <img
                        src={value.img}
                        className="h-12 rounded-full"
                        alt="Yum"
                      />
                    ) : (
                      <div className="avatar me-3 fs-24 fw-normal flex-shrink-0">
                        <h2 className="h-12 w-12 rounded-full text-2xl bg-primary/20 text-primary flex items-center justify-center">
                          {value.avatar}
                        </h2>
                      </div>
                    )}
                    <div className="flex-grow">
                      {value.icon ? (
                        <h6 className="mt-0 mb-1 text-gray-500 text-default-700">
                          <Link to="" className="text-primary">
                            {value.name}&nbsp;
                          </Link>
                          {value.text}
                          {Icon && (
                            <Icon
                              size={16}
                              className={`text-${value.variant}`}
                            />
                          )}
                          on comment from
                          <span className="text-primary"> Yum</span>
                          {value.text2}
                          <span className="text-primary"> Admin</span>
                        </h6>
                      ) : (
                        <h6 className="mt-0 mb-1 text-gray-500 text-default-700">
                          <Link to="" className="text-primary">
                            {value.name}&nbsp;
                          </Link>
                          {value.text}
                          <span className="text-primary"> Admin</span>
                        </h6>
                      )}
                      <p className="text-muted dark:text-gray-400">
                        {value.min}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamWidget;
