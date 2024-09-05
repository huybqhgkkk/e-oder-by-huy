import { useTranslation } from "react-i18next";

const ConfirmModal = ({ title, contentText, onConfirm, onClose }) => {
  const { t } = useTranslation();

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
      <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-gray-900 bg-opacity-50 backdrop-blur-sm"
          onClick={handleOverlayClick}
      >
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl sm:max-w-lg sm:w-full">
          <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              {title}
            </h3>
            <button
                onClick={onClose}
                type="button"
                className="text-gray-500 hover:text-gray-400 focus:outline-none dark:text-gray-300"
            >
              <span className="sr-only">{t('close')}</span>
              <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="p-4">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {contentText}
            </p>
          </div>
          <div className="flex justify-end items-center gap-2 p-4 border-t dark:border-gray-700">
            <button
                onClick={onClose}
                className="py-2 px-4 rounded-lg bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                type="button"
            >
              {t('close')}
            </button>
            <button
                className="py-2 px-4 rounded-lg bg-red-600 text-white"
                type="button"
                onClick={onConfirm}
            >
              {t('save')}
            </button>
          </div>
        </div>
      </div>
  );
};

export default ConfirmModal;
