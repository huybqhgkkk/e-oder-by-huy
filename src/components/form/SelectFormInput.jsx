import {Controller} from "react-hook-form";
import ReactSelect from "react-select";
import {LuAlertCircle} from "react-icons/lu";
import {cn} from "@/utils";

const SelectFormInput = ({
                             control,
                             id,
                             name,
                             label,
                             className,
                             labelClassName,
                             containerClassName,
                             noValidate,
                             fullWidth,
                             isMulti,
                             onChange,
                             ...other
                         }) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({field, fieldState}) => (
                <div className={cn("flex flex-col", containerClassName)}>
                    {label && (
                        <label
                            htmlFor={id ?? name}
                            className={cn(
                                "mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300",
                                labelClassName
                            )}
                        >
                            {label}
                        </label>
                    )}
                    <div className="relative">
                        <ReactSelect
                            {...other}
                            {...field}
                            id={id ?? name}
                            onChange={(value) => {
                                field.onChange(value);
                                if (onChange) {
                                    onChange(value);
                                }
                            }}
                            isMulti={isMulti || false}
                            classNamePrefix="react-select"
                            unstyled
                            className={cn(
                                "block w-full cursor-pointer rounded-lg border border-gray-300 bg-white focus:border-primary focus:ring-primary focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600",
                                className,
                                fullWidth && "w-full",
                                {
                                    "border-red-500 focus:border-red-500":
                                        !noValidate && fieldState.error?.message,
                                }
                            )}
                            styles={{
                                control: (base) => ({
                                    ...base,
                                    minHeight: '44px',
                                    borderRadius: '0.375rem',
                                    borderColor: fieldState.error
                                        ? 'rgb(239 68 68)'
                                        : 'rgb(209 213 219)',
                                    '&:hover': {
                                        borderColor: fieldState.error
                                            ? 'rgb(239 68 68)'
                                            : 'rgb(96 165 250)',
                                    },
                                }),
                                multiValue: (base) => ({
                                    ...base,
                                    backgroundColor: 'rgb(239 246 255)',
                                    color: 'rgb(29 78 216)',
                                    padding: '0.25rem 0.5rem',
                                    borderRadius: '0.375rem',
                                    margin: '0.25rem 0.5rem',
                                }),
                                multiValueLabel: (base) => ({
                                    ...base,
                                    color: 'rgb(29 78 216)',
                                    fontWeight: '500',
                                }),
                                multiValueRemove: (base) => ({
                                    ...base,
                                    color: 'rgb(29 78 216)',
                                    '&:hover': {
                                        backgroundColor: 'rgb(191 219 254)',
                                        color: 'rgb(29 78 216)',
                                    },
                                }),
                            }}
                        />
                        {!noValidate && fieldState.error?.message && (
                            <div
                                className="pointer-events-none absolute end-12 top-1/2 flex -translate-y-1/2 items-center">
                                <LuAlertCircle size={20} className="text-red-500"/>
                            </div>
                        )}
                    </div>
                    {!noValidate && fieldState.error?.message && (
                        <p className="mt-2 text-xs text-red-600">
                            {fieldState.error.message}
                        </p>
                    )}
                </div>
            )}
        />
    );
};

export default SelectFormInput;
