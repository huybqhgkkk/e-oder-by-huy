import { BreadcrumbAdmin } from "@/components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
//components
import {
  TextFormInput,
  PasswordFormInput,
  TextAreaFormInput,
} from "@/components";

const DefaultValidation = () => {
  return (
    <div className="border border-default-200 rounded-lg">
      <div className="p-6">
        <h4 className="font-medium text-base text-default-600">
          Browser defaults - Normal
        </h4>
        <p className="text-default-600">
          Provide valuable, actionable feedback to your users with HTML5 form
          validation–available in all our supported browsers.
        </p>
        <div className="pt-5">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label
                htmlFor="validationDefault01"
                className="font-semibold mb-2"
              >
                First name
              </label>
              <input
                type="text"
                className="block mt-2 w-full rounded-lg border border-default-200 bg-transparent px-4 py-2 dark:bg-default-50"
                id="validationDefault01"
                defaultValue="Mark"
                required
              />
            </div>
            <div>
              <label
                htmlFor="validationDefault02"
                className="font-semibold mb-2"
              >
                Last name
              </label>
              <input
                type="text"
                className="block mt-2 w-full rounded-lg border border-default-200 bg-transparent px-4 py-2 dark:bg-default-50"
                id="validationDefault02"
                defaultValue="Otto"
                required
              />
            </div>
            <div>
              <label
                htmlFor="validationDefaultUsername"
                className="font-semibold mb-2"
              >
                Username
              </label>
              <div className="flex items-end ">
                <span
                  className="h-[42px] w-[42px] flex items-center justify-center  btn bg-default-100 border border-default-200 rounded-s-lg "
                  id="inputGroupPrepend2"
                >
                  @
                </span>
                <input
                  type="text"
                  className="block mt-2 w-full rounded-lg border border-default-200 bg-transparent px-4 py-2 dark:bg-default-50 border-s-0 rounded-s-none"
                  id="validationDefaultUsername"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend2"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="validationDefault03"
                className="font-semibold mb-2"
              >
                City
              </label>
              <input
                type="text"
                className="block mt-2 w-full rounded-lg border border-default-200 bg-transparent px-4 py-2 dark:bg-default-50"
                id="validationDefault03"
                placeholder="City"
                required
              />
            </div>
            <div>
              <label
                htmlFor="validationDefault04"
                className="font-semibold mb-2"
              >
                State
              </label>
              <input
                type="text"
                className="block mt-2 w-full rounded-lg border border-default-200 bg-transparent px-4 py-2 dark:bg-default-50"
                id="validationDefault04"
                placeholder="State"
                required
              />
            </div>
            <div>
              <label
                htmlFor="validationDefault05"
                className="font-semibold mb-2"
              >
                Zip
              </label>
              <input
                type="text"
                className="block mt-2 w-full rounded-lg border border-default-200 bg-transparent px-4 py-2 dark:bg-default-50"
                id="validationDefault05"
                placeholder="Zip"
                required
              />
            </div>
            <div className="lg:col-span-3">
              <div className="flex items-center">
                <input
                  className="form-checkbox rounded text-primary"
                  type="checkbox"
                  defaultValue=""
                  id="invalidCheck2"
                  required
                />
                <label className="ms-1.5 font-semibold" htmlFor="invalidCheck2">
                  Agree to terms and conditions
                </label>
              </div>
            </div>
            <div className="lg:col-span-3">
              <button
                className="py-2 px-5 inline-block font-semibold rounded-lg bg-primary/90 text-white hover:bg-primary"
                type="submit"
              >
                Submit form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const TypeValidation = () => {
  const loginFormSchema = yup.object({
    textvalue: yup.string().required("Please Type Something"),
    password: yup.string().required("Please Enter Password"),
    re_password: yup
      .string()
      .oneOf([yup.ref("password")])
      .required("Please Enter Re-type Password"),
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Please Enter email"),
    url: yup.string().required("Please Enter URL"),
    digits: yup.number().required("Please Enter digits"),
    numbers: yup.number().required("Please Enter numbers"),
    alphanumeric: yup.string().required("Please Enter Alphanumeric"),
    textarea: yup.string().required("Please Enter Text"),
  });

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(loginFormSchema),
  });

  return (
    <div className="border border-default-200 rounded-lg">
      <div className="p-6">
        <h4 className="font-medium text-base text-default-600">
          Validation type
        </h4>
        <p className="text-default-600">
          Provide valuable, actionable feedback to your users with HTML5 form
          validation–available in all our supported browsers.
        </p>
        <div className="pt-5">
          <form className="space-y-5" onSubmit={handleSubmit(() => null)}>
            <div className="form-group">
              <TextFormInput
                name="textvalue"
                control={control}
                className="form-input"
                label="Required"
                placeholder="Type Something"
                labelClassName="font-semibold mb-2"
                fullWidth
              />
            </div>

            <div className="form-group">
              <PasswordFormInput
                name="password"
                control={control}
                className="form-input"
                label="Equal To"
                placeholder="Password"
                labelClassName="font-semibold mb-2"
                fullWidth
              />
              <PasswordFormInput
                name="re_password"
                control={control}
                className="form-input"
                containerClassName="mt-2"
                placeholder="Re-Type Password"
                fullWidth
              />
            </div>

            <div className="form-group">
              <TextFormInput
                name="email"
                control={control}
                className="form-input"
                label="E-Mail"
                placeholder="Enter a vaild e-mail"
                labelClassName="font-semibold mb-2"
                fullWidth
              />
            </div>

            <div className="form-group">
              <TextFormInput
                name="url"
                control={control}
                className="form-input"
                label="URL"
                placeholder="URL"
                labelClassName="font-semibold mb-2"
                fullWidth
              />
            </div>

            <div className="form-group">
              <TextFormInput
                name="digits"
                control={control}
                className="form-input"
                label="Digits"
                placeholder="Enter only digits"
                labelClassName="font-semibold mb-2"
                fullWidth
              />
            </div>

            <div className="form-group">
              <TextFormInput
                name="numbers"
                control={control}
                className="form-input"
                label="Numbers"
                placeholder="Enter only numbers"
                labelClassName="font-semibold mb-2"
                fullWidth
              />
            </div>

            <div className="form-group">
              <TextFormInput
                name="alphanumeric"
                control={control}
                className="form-input"
                label="Alphanumeric"
                placeholder="Type Something"
                labelClassName="font-semibold mb-2"
                fullWidth
              />
            </div>

            <div className="form-group">
              <TextAreaFormInput
                name="textarea"
                control={control}
                className="form-input"
                label="Textarea"
                labelClassName="font-semibold mb-2"
                fullWidth
              />
            </div>

            <div className="lg:col-span-3 flex items-center gap-2">
              <button
                className="py-2 px-5 inline-block font-semibold rounded-lg bg-primary/90 text-white hover:bg-primary"
                type="submit"
              >
                Submit
              </button>
              <button
                className="py-2 px-5 inline-block font-semibold rounded-lg bg-secondary/90 text-white hover:bg-secondary"
                type="submit"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const RangeValidation = () => {
  const loginFormSchema = yup.object({
    minlength: yup
      .string()
      .min(6, "Please Enter Minimum 6 characters")
      .required("Please Enter characters"),
    maxlength: yup
      .string()
      .max(6, "Please Enter Maximum 6 characters")
      .required("Please Enter characters"),
    rangelength: yup
      .string()
      .min(5, "Please Enter Minimum 5 characters")
      .max(10, "Please Enter Maximum 10 characters")
      .required("Please Enter characters"),
    minvalue: yup
      .number()
      .min(6, "Please Enter Minimum 6 numbers")
      .required("Please Enter numbers"),
    rangevalue: yup
      .number()
      .min(6, "Please Enter Maximun 6 numbers value")
      .max(100, "Please Enter Maximum 100 numbers value")
      .required("Please Enter numbers"),
    regularvalue: yup
      .string()
      .length(6, "Please Enter 6 length value")
      .required("Please Enter color value"),
  });

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(loginFormSchema),
  });

  return (
    <div className="border border-default-200 rounded-lg">
      <div className="p-6">
        <h4 className="font-medium text-base text-default-600">
          Range validation
        </h4>
        <p className="text-default-600">
          Provide valuable, actionable feedback to your users with HTML5 form
          validation–available in all our supported browsers.
        </p>
        <div className="pt-5">
          <form className="space-y-5" onSubmit={handleSubmit(() => null)}>
            <div className="form-group">
              <TextFormInput
                name="minlength"
                control={control}
                className="form-input"
                label="Min Length"
                placeholder="Min 6 characters"
                labelClassName="font-semibold mb-2"
                fullWidth
              />
            </div>

            <div className="form-group">
              <TextFormInput
                name="maxlength"
                control={control}
                className="form-input"
                label="Max Length"
                placeholder="Max 6 characters"
                labelClassName="font-semibold mb-2"
                fullWidth
              />
            </div>

            <div className="form-group">
              <TextFormInput
                name="rangelength"
                control={control}
                className="form-input"
                label="Range Length"
                placeholder="Text between 5 - 10 chars length"
                labelClassName="font-semibold mb-2"
                fullWidth
              />
            </div>

            <div className="form-group">
              <TextFormInput
                name="minvalue"
                control={control}
                className="form-input"
                label="Min Value"
                placeholder="Min value is 6"
                labelClassName="font-semibold mb-2"
                fullWidth
              />
            </div>

            <div className="form-group">
              <TextFormInput
                name="rangevalue"
                control={control}
                className="form-input"
                label="Range Value"
                placeholder="Number between 6 - 100"
                labelClassName="font-semibold mb-2"
                fullWidth
              />
            </div>

            <div className="form-group">
              <TextFormInput
                name="regularvalue"
                control={control}
                className="form-input"
                label="Regular Exp"
                placeholder="Hex. Color"
                labelClassName="font-semibold mb-2"
                fullWidth
              />
            </div>

            <div className="lg:col-span-3 flex items-center gap-2">
              <button
                className="py-2 px-5 inline-block font-semibold rounded-lg bg-primary/90 text-white hover:bg-primary"
                type="submit"
              >
                Submit
              </button>
              <button
                className="py-2 px-5 inline-block font-semibold rounded-lg bg-secondary/90 text-white hover:bg-secondary"
                type="submit"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
const Validation = () => {
  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Validation" subtitle="Forms" />
        <div className="grid lg:grid-cols-2 gap-5">
          <DefaultValidation />
          <RangeValidation />
          <TypeValidation />
        </div>
      </div>
    </div>
  );
};

export default Validation;
