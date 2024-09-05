import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextFormInput } from "../form";
import { useTranslation } from "react-i18next";

const TableSearchBox = ({ label, value, onChange, placeholder, ...rest }) => {
  const { t } = useTranslation();

  const searchFilterSchema = yup.object({
    [`search${label}`]: yup.string().optional(),
  });

  const { control } = useForm({
    resolver: yupResolver(searchFilterSchema),
    mode: "onChange",
  });

  return (
      <TextFormInput
          name={`search${label}`}
          label={label}
          control={control}
          placeholder={placeholder ?? t("search")}
          fullWidth
          value={value}
          onChange={onChange}
          {...rest}
      />
  );
};

export default TableSearchBox;
