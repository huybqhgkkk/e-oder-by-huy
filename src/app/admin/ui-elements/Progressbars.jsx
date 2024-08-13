const ExampleProgressBars = () => {
  const progress = [0, 25, 50, 75];

  return (
    <div className="p-6">
      <h4 className="font-medium text-base text-default-600 mb-4">
        Progressbars
      </h4>
      <p className="mb-6 dark:text-gray-400">Simple examples of progressbar</p>
      <div className="flex flex-col gap-3">
        {progress.map((value, idx) => {
          return (
            <div
              key={idx}
              className="flex w-full h-3 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700"
            >
              <div
                className="flex flex-col justify-center overflow-hidden bg-primary"
                role="progressbar"
                style={{ width: `${value}%` }}
                aria-valuenow={value}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          );
        })}
        <div className="flex w-full h-3 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
          <div
            className="flex flex-col justify-center overflow-hidden bg-primary text-xs text-white text-center"
            role="progressbar"
            style={{ width: "25%" }}
            aria-valuenow={57}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            25%
          </div>
        </div>
      </div>
    </div>
  );
};

const StripedProgressBars = () => {
  const progress = [
    {
      variants: "bg-primary",
      width: "w-3/12",
    },
    {
      variants: "bg-success",
      width: "w-4/12",
    },
    {
      variants: "bg-info",
      width: "w-5/12",
    },
    {
      variants: "bg-warning",
      width: "w-6/12",
    },
    {
      variants: "bg-danger",
      width: "w-full",
    },
    {
      variants: "bg-primary",
      width: "w-7/12",
    },
  ];

  return (
    <div className="p-6">
      <h4 className="font-medium text-base text-default-600 mb-4">
        Striped Progressbars
      </h4>
      <p className="mb-6 dark:text-gray-400">
        Uses a gradient to create a striped effect.
      </p>
      <div className="flex flex-col items-center justify-center gap-3">
        {(progress || []).map((value, idx) => {
          return (
            <div key={idx} className="w-full h-3 bg-black/10 rounded-full">
              <div
                className={`${value.variants} h-3 rounded-s-full ${
                  value.width
                } animate-strip ${
                  value.variants === "bg-danger" ? "rounded-e-full" : ""
                }`}
                style={{
                  backgroundImage:
                    "linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)",
                  backgroundSize: "1rem 1rem",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ContextualProgressBar = () => {
  const progress = [
    {
      variant: "bg-success",
      width: 25,
    },
    {
      variant: "bg-info",
      width: 50,
    },
    {
      variant: "bg-warning",
      width: 75,
    },
    {
      variant: "bg-danger",
      width: 100,
    },
  ];

  return (
    <div className="p-6">
      <h4 className="font-medium text-base text-default-600 mb-4">
        Contextual Progressbars
      </h4>
      <p className="mb-6 dark:text-gray-400">
        Progress bars use some of the same button and alert classes for
        consistent styles.
      </p>
      <div className="flex flex-col gap-3">
        {(progress || []).map((value, idx) => {
          return (
            <div
              key={idx}
              className="flex w-full h-4 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700"
            >
              <div
                className={`flex flex-col justify-center overflow-hidden ${value.variant}`}
                role="progressbar"
                style={{ width: `${value.width}%` }}
                aria-valuenow={value.width}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          );
        })}
        <div className="flex w-full h-4 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
          <div
            className="flex flex-col justify-center overflow-hidden bg-primary"
            role="progressbar"
            style={{ width: "15%" }}
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
          />
          <div
            className="flex flex-col justify-center overflow-hidden bg-success"
            role="progressbar"
            style={{ width: "30%" }}
            aria-valuenow={15}
            aria-valuemin={0}
            aria-valuemax={100}
          />
          <div
            className="flex flex-col justify-center overflow-hidden bg-info dark:bg-white"
            role="progressbar"
            style={{ width: "20%" }}
            aria-valuenow={30}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      </div>
    </div>
  );
};

const SizeProgressBar = () => {
  const progress = [
    {
      height: "h-px",
      variant: "bg-danger",
      width: 75,
    },
    {
      height: "h-1",
      variant: "bg-primary",
      width: 25,
    },
    {
      height: "h-2",
      variant: "bg-success",
      width: 25,
    },
    {
      height: "h-3",
      variant: "bg-info",
      width: 50,
    },
    {
      height: "h-4",
      variant: "bg-warning",
      width: 75,
    },
    {
      height: "h-4",
      variant: "bg-danger",
      width: 40,
    },
  ];

  return (
    <div className="p-6">
      <h4 className="font-medium text-base text-default-600 mb-4">
        Progressbars Size
      </h4>
      <p className="mb-6 dark:text-gray-400">
        We can set a height value on the .progress. The inner .progress-bar will
        automatically resize accordingly.
      </p>
      <div className="flex flex-col gap-3">
        {(progress || []).map((value, idx) => {
          return (
            <div
              key={idx}
              className={`flex w-full ${value.height} bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700`}
            >
              <div
                className={`flex flex-col justify-center overflow-hidden ${value.variant}`}
                role="progressbar"
                style={{ width: `${value.width}%` }}
                aria-valuenow={value.width}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Progressbars = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="rounded-lg border border-default-200">
          <ExampleProgressBars />
          <StripedProgressBars />
        </div>
        <div className="rounded-lg border border-default-200">
          <ContextualProgressBar />
          <SizeProgressBar />
        </div>
      </div>
    </>
  );
};

export default Progressbars;
