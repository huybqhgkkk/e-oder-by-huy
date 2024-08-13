import { BreadcrumbAdmin, DateFormInput } from "@/components";
import { useState } from "react";
import {
  BlockPicker,
  ChromePicker,
  CompactPicker,
  GithubPicker,
  HuePicker,
  SketchPicker,
  SwatchesPicker,
  TwitterPicker,
} from "react-color";
import DatePicker from "react-flatpickr";
import { useForm } from "react-hook-form";

const DatePickers = () => {
  const { control } = useForm();
  return (
    <div className="border border-default-200 rounded-lg">
      <div className="p-6">
        <h4 className="mb-2 uppercase text-default-700">
          Flatpickr - Date picker
        </h4>
        <p className="mb-4 text-default-600">
          A lightweight and powerful datetimepicker
        </p>
        <div>
          <DateFormInput
            name="basic"
            containerClassName="mb-4"
            label="Basic"
            className="block w-full rounded-lg border border-default-200 bg-transparent px-4 py-2 dark:bg-default-50"
            placeholder="Basic datepicker"
            options={{ enableTime: false }}
            control={control}
          />
        </div>
        <DateFormInput
          name="dateTime"
          className="block w-full rounded-lg border border-default-200 bg-transparent px-4 py-2 dark:bg-default-50"
          label="Date & Time"
          containerClassName="mb-4"
          placeholder="Date and Time"
          options={{
            enableTime: true,
            dateFormat: "Y-m-d H:i",
          }}
          control={control}
        />
        <DateFormInput
          name="humanFriendlyDates"
          label="Human-friendly Dates"
          containerClassName="mb-4"
          className="block w-full rounded-lg border border-default-200 bg-transparent px-4 py-2 dark:bg-default-50"
          placeholder="October 9,2018"
          options={{
            altInput: true,
            enableTime: false,
            altFormat: "F j, Y",
            dateFormat: "Y-m-d",
          }}
          control={control}
        />
        <DateFormInput
          name="minAndMaxDate"
          label="MinDate and MaxDate"
          className="block w-full rounded-lg border border-default-200 bg-transparent px-4 py-2 dark:bg-default-50"
          placeholder="mindate - maxdate"
          containerClassName="mb-4"
          options={{
            enableTime: false,
            minDate: "2020-01-01",
            maxDate: "2020-03-01",
          }}
          control={control}
        />
        <DateFormInput
          name="disable"
          className="block w-full rounded-lg border border-default-200 bg-transparent px-4 py-2 dark:bg-default-50"
          label="Disabling dates"
          placeholder="Disabling dates"
          containerClassName="mb-4"
          options={{
            disable: ["2025-01-10", "2025-01-21", "2025-01-30"],
            enableTime: false,
            defaultDate: "2025-01",
          }}
          control={control}
        />
        <label className="text-sm mb-3 font-medium text-default-900">
          Selecting multiple dates
        </label>
        <DatePicker
          name="multiple"
          className="mb-4 mt-2 block w-full rounded-lg border border-default-200 bg-transparent px-4 py-2 dark:bg-default-50"
          placeholder="Multiple dates"
          options={{
            enableTime: false,
            mode: "multiple",
            dateFormat: "Y-m-d",
          }}
        />
        <label className="text-sm mb-3 font-medium text-default-900">
          Selecting multiple dates - Conjunction
        </label>
        <DatePicker
          name="multipleConjunction"
          className="mb-4 mt-2 block w-full rounded-lg border border-default-200 bg-transparent px-4 py-2 dark:bg-default-50"
          placeholder="2018-10-10 :: 2018-10-11"
          options={{
            mode: "multiple",
            dateFormat: "Y-m-d",
            conjunction: " :: ",
            enableTime: false,
          }}
        />
        <label className="text-sm mb-3 font-medium text-default-900">
          Range Calendar
        </label>
        <DatePicker
          name="rangeCalendar"
          className="mb-4 mt-2 block w-full rounded-lg border border-default-200 bg-transparent px-4 py-2 dark:bg-default-50"
          placeholder="2018-10-03 to 2018-10-10"
          options={{
            mode: "range",
            enableTime: false,
          }}
        />
        <DateFormInput
          name="inline"
          className="block w-full rounded-lg border border-default-200 bg-transparent px-4 py-2 dark:bg-default-50"
          label="Inline Calendar"
          placeholder="Inline Calender"
          options={{
            inline: true,
            enableTime: false,
          }}
          control={control}
        />
      </div>
    </div>
  );
};

const TimePicker = () => {
  return (
    <div className="border border-default-200 rounded-lg">
      <div className="p-6">
        <h4 className="mb-2 uppercase text-default-700">
          Flatpickr - Time Picker
        </h4>
        <p className="mb-4 text-default-600">
          A lightweight and powerful datetimepicker
        </p>
        <div className="space-y-5">
          <div>
            <div className="mb-4">
              <label className="text-sm mb-2 font-medium text-default-900">
                Default Time Picker
              </label>
              <div className="flex items-center ">
                <DatePicker
                  className="block mt-2 w-full rounded-lg border border-default-200 bg-transparent px-4 py-2 dark:bg-default-50"
                  placeholder="Basic timepicker"
                  options={{
                    enableTime: true,
                    noCalendar: true,
                    dateFormat: "H:i",
                  }}
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="text-sm mb-2 font-medium text-default-900">
                24-hour Time Picker
              </label>
              <div className="flex items-center ">
                <DatePicker
                  className="block mt-2 w-full rounded-lg border border-default-200 bg-transparent px-4 py-2 dark:bg-default-50"
                  placeholder="16:21"
                  options={{
                    enableTime: true,
                    noCalendar: true,
                    dateFormat: "H:i",
                    time_24hr: true,
                  }}
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="text-sm mb-2 font-medium text-default-900">
                Time Picker w/ Limits
              </label>
              <div className="flex items-center ">
                <DatePicker
                  className="block mt-2 w-full rounded-lg border border-default-200 bg-transparent px-4 py-2 dark:bg-default-50"
                  placeholder="Limits"
                  options={{
                    enableTime: true,
                    noCalendar: true,
                    dateFormat: "H:i",
                    minTime: "16:00",
                    maxTime: "22:30",
                  }}
                />
              </div>
            </div>
            <div className="mb-0">
              <label className="text-sm mb-2 font-medium text-default-900">
                Preloading Time
              </label>
              <div className="flex items-center ">
                <DatePicker
                  className="block mt-2 w-full rounded-lg border border-default-200 bg-transparent px-4 py-2 dark:bg-default-50"
                  placeholder="01:45"
                  options={{
                    noCalendar: true,
                    enableTime: true,
                    dateFormat: "H:i",
                    defaultDate: "13:45",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ColorPicker = () => {
  const [color, setColor] = useState();

  const handleColorChange = (e) => {
    setColor(e);
  };

  return (
    <div className="border border-default-200 rounded-lg">
      <div className="p-5">
        <h4 className="mb-2 uppercase text-default-700">Colorpicker</h4>
        <p className="mb-4 text-default-600">Example of Spectrum Colorpicker</p>
        <div className="flex flex-col gap-4">
          <div className="bg-default-100 text-default-900 p-4 rounded-md flex flex-wrap gap-10">
            <div>
              <h5 className="text-base text-default-600 mb-2 shrink-0">
                Classic Demo
              </h5>
              <SketchPicker
                color={color}
                onChangeComplete={(e) => handleColorChange(e)}
              />
            </div>
            <div>
              <h5 className="text-base text-default-600 mb-2 shrink-0">
                Monolith Demo
              </h5>
              <ChromePicker
                color={color}
                onChangeComplete={(e) => handleColorChange(e)}
              />
            </div>
            <div>
              <h5 className="text-base text-default-600 mb-2 shrink-0">
                Nano Demo
              </h5>
              <BlockPicker
                color={color}
                onChangeComplete={(e) => handleColorChange(e)}
              />
            </div>
          </div>
          <div className="bg-default-100 text-default-900 p-4 rounded-md flex flex-wrap gap-10">
            <div>
              <h5 className="text-base text-default-600 mb-2 shrink-0">
                Switches
              </h5>
              <SwatchesPicker
                color={color}
                width={240}
                onChangeComplete={(e) => handleColorChange(e)}
              />
            </div>
            <div>
              <h5 className="text-base text-default-600 mb-2 shrink-0">
                Color Format
              </h5>
              <TwitterPicker
                color={color}
                onChangeComplete={(e) => handleColorChange(e)}
              />
            </div>
            <div>
              <h5 className="text-base text-default-600 mb-2 shrink-0">
                Picker with Input
              </h5>
              <CompactPicker
                color={color}
                onChangeComplete={(e) => handleColorChange(e)}
              />
            </div>
            <div>
              <h5 className="text-base text-default-600 mb-2 shrink-0">Demo</h5>
              <GithubPicker
                color={color}
                onChangeComplete={(e) => handleColorChange(e)}
                width={"240"}
              />
            </div>
          </div>
          <div className="bg-default-100 text-default-900 p-4 rounded-md">
            <h5 className="text-base text-default-600 mb-2 shrink-0">
              Picker with Opacity &amp; Hue
            </h5>
            <HuePicker
              color={color}
              onChangeComplete={(e) => handleColorChange(e)}
              width={"250"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
const Advanced = () => {
  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Advanced" subtitle="Forms" />
        <div className="grid lg:grid-cols-2 gap-5">
          <DatePickers />

          <div className="space-y-5">
            <TimePicker />
            <ColorPicker />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advanced;
