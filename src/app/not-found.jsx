import { Link } from "react-router-dom";
import { error404OtherImg } from "@/assets/data/images";
import { GoBackButton, PageTitle } from "@/components";
import { useTranslation } from "react-i18next";

const Error404 = () => {
  const { t } = useTranslation();

  return (
      <>
        <PageTitle title={t('notFound')} />
        <section className="py-10">
          <div className="container">
            <div className="flex items-center justify-center">
              <div>
                <div className="mb-10 flex h-full w-full justify-center">
                  <img
                      src={error404OtherImg}
                      width={450}
                      height={450}
                      alt={t('notFoundImageAlt')}
                      className="h-full max-w-full"
                  />
                </div>
                <div className="max-w-xl text-center">
                  <h1 className="mb-4 text-5xl font-semibold text-default-800">
                    {t('oops')}
                  </h1>
                  <h3 className="mb-4 text-2xl font-medium text-default-800">
                    {t('lostMessage')}
                  </h3>
                  <p className="mx-auto mb-8 max-w-xl text-base text-default-600">
                    {t('errorMessage')}
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <GoBackButton />
                    <Link
                        to="/home"
                        className="relative inline-flex w-1/2 items-center justify-center rounded-lg border border-primary px-6 py-3 text-base font-medium capitalize text-primary transition-all hover:bg-primary hover:text-white lg:w-2/6"
                    >
                      {t('goToHome')}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
  );
};

export default Error404;
