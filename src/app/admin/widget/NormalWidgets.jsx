const NormalWidgets = ({ text, amount, price, color, width, subText }) => {
  return (
    <>
      <div className="rounded-lg border border-default-200">
        <div className="p-5">
          <div>
            <span className="text-xs font-semibold text-gray-500 uppercase dark:text-gray-400">
              {text}
            </span>
            <h3 className="text-2xl mt-3 dark:text-gray-300">
              {price ? `$${price}` : amount}
            </h3>
            <div className="flex w-full h-1 my-3 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-600">
              <div
                className={`flex flex-col justify-center overflow-hidden bg-${color} text-xs text-white text-center`}
                role="progressbar"
                style={{ width: `${width}%` }}
                aria-valuenow={57}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <span className="text-gray-500 font-semibold">{subText}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NormalWidgets;
