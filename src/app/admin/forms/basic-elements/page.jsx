import {
  BreadcrumbAdmin,
  DateFormInput,
  PasswordFormInput,
  SelectFormInput,
  TextAreaFormInput,
  TextFormInput,
} from "@/components";
import { useForm } from "react-hook-form";
import ReactSlider from "react-slider";

const colors = [
  "primary",
  "success",
  "info",
  "secondary",
  "warning",
  "danger",
  "dark",
];

const BasicInputElements = () => {
  const { control } = useForm();
  return (
    <div className="border border-default-200 rounded-lg mb-6">
      <div className="p-6">
        <h4 className="card-title mb-4">Input Types</h4>

        <div className="grid lg:grid-cols-2 gap-6">
          <div>
            <form>
              <TextFormInput
                label="Text"
                labelClassName="mb-2"
                type="text"
                name="text"
                className="form-input"
                containerClassName="mb-3"
                key="text"
                control={control}
                fullWidth
              />

              <TextFormInput
                label="Email"
                labelClassName="mb-2"
                type="email"
                name="email"
                placeholder="Email"
                className="form-input"
                containerClassName="mb-3"
                key="email"
                control={control}
                fullWidth
              />
              <TextFormInput
                label="Password"
                labelClassName="mb-2"
                type="password"
                name="password"
                containerClassName="mb-3"
                className="form-input"
                key="password"
                control={control}
                fullWidth
              />

              <PasswordFormInput
                label="Placeholder"
                labelClassName="mb-2"
                type="text"
                containerClassName="mb-3"
                name="placeholder"
                placeholder="placeholder"
                className="form-input"
                key="placeholder"
                control={control}
                fullWidth
              />

              <TextAreaFormInput
                label="Text area"
                name="textarea"
                id="textarea"
                containerClassName="mb-3"
                labelClassName="mb-2"
                rows={5}
                className="form-input"
                key="textarea"
                control={control}
                fullWidth
              />

              <TextFormInput
                label="Readonly"
                type="text"
                name="text1"
                id="text1"
                placeholder="Readonly value"
                readOnly
                containerClassName="mb-3"
                labelClassName="mb-2"
                className="form-input"
                key="text1"
                control={control}
                fullWidth
              />

              <TextFormInput
                label="Disabled"
                type="text"
                name="text2"
                id="text2"
                placeholder="Disabled value"
                disabled
                readOnly
                className="form-input"
                containerClassName="mb-3"
                labelClassName="mb-2"
                key="text2"
                control={control}
                fullWidth
              />

              <div className="help-block mb-3">
                <small>
                  A block of help text that breaks onto a new line and may
                  extend beyond one line.
                </small>
              </div>

              <SelectFormInput
                name="select"
                label="Input Select"
                containerClassName="mb-3"
                labelClassName="mb-2"
                className="p-0"
                key="select"
                control={control}
                options={[
                  { value: "1", label: "1" },
                  { value: "2", label: "2" },
                  { value: "3", label: "3" },
                  { value: "4", label: "4" },
                  { value: "5", label: "5" },
                ]}
                fullWidth
              />
            </form>
          </div>

          <div>
            <form>
              <SelectFormInput
                name="selectMulti"
                label="Multiple Select"
                labelClassName="mb-2"
                containerClassName="mb-3"
                className="p-0"
                key="selectMulti"
                control={control}
                options={[
                  { value: "1", label: "1" },
                  { value: "2", label: "2" },
                  { value: "3", label: "3" },
                  { value: "4", label: "4" },
                  { value: "5", label: "5" },
                ]}
              />

              <TextFormInput
                label="Default file input"
                type="file"
                name="file"
                labelClassName="mb-2"
                containerClassName="mb-3"
                className="form-input border"
                key="file"
                control={control}
                fullWidth
              />

              <DateFormInput
                label="Date"
                type="date"
                name="date"
                containerClassName="mb-3"
                labelClassName="mb-2"
                className="form-input"
                key="date"
                control={control}
                fullWidth
              />

              <DateFormInput
                label="Month"
                type="month"
                name="month"
                containerClassName="mb-3"
                labelClassName="mb-2"
                className="form-input"
                key="month"
                control={control}
                fullWidth
              />

              <DateFormInput
                label="Time"
                type="time"
                name="time"
                containerClassName="mb-3"
                labelClassName="mb-2"
                className="form-input"
                key="time"
                control={control}
                fullWidth
              />

              <DateFormInput
                label="Week"
                type="week"
                name="week"
                labelClassName="mb-2"
                containerClassName="mb-3"
                className="form-input"
                key="week"
                control={control}
                fullWidth
              />

              <DateFormInput
                label="Number"
                type="number"
                name="number"
                containerClassName="mb-3"
                labelClassName="mb-2"
                className="form-input"
                key="number"
                control={control}
                fullWidth
              />

              <TextFormInput
                label="Color"
                type="color"
                name="color"
                labelClassName="mb-2"
                containerClassName="mb-3"
                className="form-input h-12"
                key="color"
                control={control}
                fullWidth
              />
              <label className="mb-3 text-sm font-medium text-default-900">
                Range
              </label>

              <ReactSlider
                className="mt-4 h-6 w-full max-w-[800px]"
                thumbClassName="h-5 w-5 rounded-full -right-2.5 -top-1.5 outline-none cursor-pointer bg-primary border-2 transition-colors border-primary-600 hover:bg-primary-600"
                trackClassName="bg-[#ddd] h-2 rounded-lg [&.slider-track-1]:bg-primary-400 slider-track"
                min={5}
                max={100}
                defaultValue={[10, 60]}
              />
              {/* <TextFormInput
                 label="Range"
                 type="range"
                 name="range"
                 labelClassName="mb-2"
                 containerClassName="mt-5"
                 className="form-range mt-2"
                 key="Range"
                 control={control}
                 fullWidth
                /> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const InputSizes = () => {
  const { control } = useForm();
  return (
    <div className="border border-default-200 rounded-lg">
      <div className="p-6">
        <h4 className="card-title mb-4">Input Sizes</h4>

        <form>
          <TextFormInput
            label="Small"
            type="text"
            name="small"
            id="small1"
            className="py-1 form-input-sm"
            labelClassName="mb-2"
            containerClassName="mb-3"
            placeholder="Small Input"
            control={control}
            fullWidth
          />

          <TextFormInput
            label="Normal (Default)"
            type="text"
            name="normal"
            id="normal"
            className="form-input py-2"
            labelClassName="mb-2"
            containerClassName="mb-3"
            placeholder="Normal"
            control={control}
            fullWidth
          />

          <TextFormInput
            label="Large"
            type="text"
            name="large"
            id="large"
            className="form-input py-3"
            placeholder="Large Input"
            labelClassName="mb-2"
            containerClassName="mb-3"
            control={control}
            fullWidth
          />
        </form>
      </div>
    </div>
  );
};

const Checkboxes = () => {
  return (
    <div className="border border-default-200 rounded-lg">
      <div className="p-6">
        <h4 className="card-title">Checkboxes</h4>

        <div>
          <div className="mt-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox rounded text-primary"
                  id="customCheck1"
                  defaultChecked
                />
                <label className="ms-1.5" htmlFor="customCheck1">
                  Check this checkbox
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox rounded text-primary"
                  id="customCheck2"
                />
                <label className="ms-1.5" htmlFor="customCheck2">
                  Check this checkbox
                </label>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h6 className="text-sm mb-2">Inline</h6>
            <div className="flex gap-5">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox rounded text-primary"
                  id="InlineCheckbox1"
                  defaultChecked
                />
                <label className="ms-1.5" htmlFor="InlineCheckbox1">
                  Check this checkbox
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox rounded text-primary"
                  id="InlineCheckbox2"
                />
                <label className="ms-1.5" htmlFor="InlineCheckbox2">
                  Check this checkbox
                </label>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h6 className="text-sm mb-2">Disabled</h6>

            <div className="flex gap-2">
              <div className="flex items-center opacity-75">
                <input
                  type="checkbox"
                  className="form-checkbox rounded text-primary"
                  id="customCheck5"
                  defaultChecked
                  disabled
                />
                <label className="ms-1.5" htmlFor="customCheck5">
                  Check this checkbox
                </label>
              </div>
              <div className="flex items-center opacity-75">
                <input
                  type="checkbox"
                  className="form-checkbox rounded text-primary"
                  id="customCheck6"
                  disabled
                />
                <label className="ms-1.5" htmlFor="customCheck6">
                  Check this checkbox
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-5">
            <h6>Colors</h6>

            {(colors || []).map((color, idx) => {
              return (
                <div key={idx} className="flex items-center">
                  <input
                    className={`form-checkbox rounded text-${color}`}
                    type="checkbox"
                    id={`customckeck${idx + 1}`}
                    defaultChecked
                  />
                  <label className="ms-1.5" htmlFor={`customckeck${idx + 1}`}>
                    {color.charAt(0).toUpperCase() + color.slice(1)} Checkbox
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const Radios = () => {
  return (
    <div className="border border-default-200 rounded-lg">
      <div className="p-6">
        <h4 className="card-title">Radios</h4>
        <div>
          <div className="mt-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  className="form-radio text-primary"
                  name="formRadio"
                  id="formRadio01"
                  defaultChecked
                />
                <label className="ms-1.5" htmlFor="formRadio01">
                  Toggle this custom radio
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  className="form-radio text-primary"
                  name="formRadio"
                  id="formRadio02"
                />
                <label className="ms-1.5" htmlFor="formRadio02">
                  Or toggle this other custom radio
                </label>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h6 className="text-sm mb-2">Inline</h6>
            <div className="flex gap-5">
              <div className="flex items-center">
                <input
                  type="radio"
                  className="form-radio text-primary"
                  name="InlineRadio"
                  id="InlineRadio01"
                  defaultChecked
                />
                <label className="ms-1.5" htmlFor="InlineRadio01">
                  Toggle this custom radio
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  className="form-radio text-primary"
                  name="InlineRadio"
                  id="InlineRadio02"
                />
                <label className="ms-1.5" htmlFor="InlineRadio02">
                  Or toggle this other custom radio
                </label>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h6 className="text-sm mb-2">Disabled</h6>

            <div className="flex gap-5">
              <div className="opacity-75">
                <input
                  type="radio"
                  className="form-radio text-primary"
                  id="formRadio04"
                  defaultChecked
                  disabled
                />
                <label className="ms-1.5" htmlFor="formRadio04">
                  Toggle this custom radio
                </label>
              </div>

              <div className="opacity-75">
                <input
                  type="radio"
                  className="form-radio text-primary"
                  id="formRadio05"
                  disabled
                />
                <label className="ms-1.5" htmlFor="formRadio05">
                  Or toggle this other custom radio
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-5">
            <h4>Colors</h4>

            {(colors || []).map((color, idx) => {
              return (
                <div key={idx} className="flex items-center">
                  <input
                    className={`form-radio text-${color}`}
                    type="radio"
                    id={`"formRadio${idx + 1}`}
                    defaultChecked
                  />
                  <label className="ms-1.5" htmlFor={`formRadio${idx + 1}`}>
                    {color.charAt(0).toUpperCase() + color.slice(1)} Radio
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const Switches = () => {
  return (
    <div className="border border-default-200 rounded-lg">
      <div className="p-6">
        <h4 className="card-title">Switch</h4>

        <div>
          <div className="mt-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="form-switch text-primary"
                  id="chechThisSwitch"
                  defaultChecked
                />
                <label className="ms-1.5" htmlFor="chechThisSwitch">
                  Check this Switch
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="form-switch text-primary"
                  id="chechThisSwitch2"
                />
                <label className="ms-1.5" htmlFor="chechThisSwitch2">
                  Check this Switch
                </label>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h6 className="text-sm mb-2">Inline</h6>
            <div className="flex gap-5">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="form-switch text-primary"
                  id="formInlineSwitch1"
                  defaultChecked
                />
                <label className="ms-1.5" htmlFor="formInlineSwitch1">
                  Check this Switch
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="form-switch text-primary"
                  id="formInlineSwitch2"
                />
                <label className="ms-1.5" htmlFor="formInlineSwitch2">
                  Check this Switch
                </label>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h6 className="text-sm mb-2">Size</h6>
            <div className="flex gap-5">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="form-switch form-switch-sm text-primary"
                  id="formSwitchSmall"
                  defaultChecked
                />
                <label className="ms-1.5" htmlFor="formSwitchSmall">
                  Small Switch
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="form-switch form-switch-lg text-primary"
                  id="formSwitchlarge"
                />
                <label className="ms-1.5" htmlFor="formSwitchlarge">
                  Large Switch
                </label>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h6 className="text-sm mb-2">Disabled</h6>

            <div className="flex gap-2">
              <div className="flex items-center opacity-75">
                <input
                  type="checkbox"
                  className="form-switch text-primary"
                  id="formSwitchDisabled"
                  defaultChecked
                  disabled
                />
                <label className="ms-1.5" htmlFor="formSwitchDisabled">
                  Check this Switch
                </label>
              </div>
              <div className="flex items-center opacity-75">
                <input
                  type="checkbox"
                  className="form-switch text-primary"
                  id="formSwitchDisabled2"
                  disabled
                />
                <label className="ms-1.5" htmlFor="formSwitchDisabled2">
                  Check this Switch
                </label>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-5">
            <div className="flex flex-col gap-3">
              <h6>Colors</h6>

              {(colors || []).map((color, idx) => {
                return (
                  <div key={idx} className="flex items-center">
                    <input
                      className={`form-switch text-${color}`}
                      type="checkbox"
                      id={`formSwitch${idx + 1}`}
                      defaultChecked
                    />
                    <label className="ms-1.5" htmlFor={`formSwitch${idx + 1}`}>
                      Default Switch
                    </label>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col gap-3">
              <h6>Square Switch</h6>

              {(colors || []).map((color, idx) => {
                return (
                  <div key={idx} className="flex items-center">
                    <input
                      className={`form-switch square text-${color}`}
                      type="checkbox"
                      id={`formSwitchSquare${idx + 1}`}
                      defaultChecked
                    />
                    <label
                      className="ms-1.5"
                      htmlFor={`formSwitchSquare${idx + 1}`}
                    >
                      Default Switch
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CustomSwitch = () => {
  return (
    <div className="border border-default-200 rounded-lg">
      <div className="p-6">
        <h4 className="card-title mb-4">Custom Switch</h4>

        <div className="flex flex-wrap items-center gap-2">
          <input type="checkbox" id="switch0" data-switch="none" />
          <label htmlFor="switch0" data-on-label="" data-off-label=""></label>

          <input
            type="checkbox"
            id="switch1"
            defaultChecked
            data-switch="bool"
          />
          <label
            htmlFor="switch1"
            data-on-label="On"
            data-off-label="Off"
          ></label>

          <input
            type="checkbox"
            id="switch2"
            defaultChecked
            data-switch="primary"
          />
          <label
            htmlFor="switch2"
            data-on-label="On"
            data-off-label="Off"
          ></label>

          <input
            type="checkbox"
            id="switch3"
            defaultChecked
            data-switch="success"
          />
          <label
            htmlFor="switch3"
            data-on-label="Yes"
            data-off-label="No"
          ></label>

          <input
            type="checkbox"
            id="switch4"
            defaultChecked
            data-switch="info"
          />
          <label
            htmlFor="switch4"
            data-on-label="On"
            data-off-label="Off"
          ></label>

          <input
            type="checkbox"
            id="switch5"
            defaultChecked
            data-switch="warning"
          />
          <label
            htmlFor="switch5"
            data-on-label="Yes"
            data-off-label="No"
          ></label>

          <input
            type="checkbox"
            id="switch6"
            defaultChecked
            data-switch="danger"
          />
          <label
            htmlFor="switch6"
            data-on-label="On"
            data-off-label="Off"
          ></label>

          <input
            type="checkbox"
            id="switch7"
            defaultChecked
            data-switch="secondary"
          />
          <label
            htmlFor="switch7"
            data-on-label="Yes"
            data-off-label="No"
          ></label>

          <input
            type="checkbox"
            id="switchdis"
            data-switch="primary"
            defaultChecked
            disabled
          />
          <label
            htmlFor="switchdis"
            data-on-label="On"
            data-off-label="Off"
          ></label>
        </div>
      </div>
    </div>
  );
};

const BasicElements = () => {
  return (
    <div className="w-full lg:ps-64" id="custom-form-ui">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Basic Elements" subtitle="Forms" />
        <BasicInputElements />

        <div className="grid lg:grid-cols-2 gap-6">
          <InputSizes />
          <Checkboxes />
          <Radios />
          <Switches />
          <CustomSwitch />
        </div>
      </div>
    </div>
  );
};

export default BasicElements;
