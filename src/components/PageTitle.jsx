import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>
        {title} | Yum Reactjs - Multipurpose Food Tailwind CSS Template
      </title>
    </Helmet>
  );
};

export default PageTitle;
