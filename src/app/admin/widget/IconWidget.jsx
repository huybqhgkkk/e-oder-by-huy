const IconWidgets = ({ text, amount, price, icon, variant1, variant2 }) => {
  const Icon = icon;
  return (
    <div className="rounded-lg border border-default-200">
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div className="flex-grow-1">
            <span className="text-xs font-semibold text-gray-500 uppercase dark:text-gray-400">
              {text}
            </span>
            <h3 className="text-2xl mt-2 dark:text-gray-300">
              {price ? `$${price}` : amount}
            </h3>
          </div>
          <div className="align-self-center flex-shrink-0">
            <Icon className={` w-10 h-10 ${variant1} ${variant2} `} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconWidgets;
