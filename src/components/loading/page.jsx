import React from "react";

const Loading = () => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[100] flex items-center justify-center">
            <div
                className="animate-spin w-16 h-16 border-[3px] border-current border-t-transparent text-white rounded-full"
                role="status"
                aria-label="loading"
            >
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;
