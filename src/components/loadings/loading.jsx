import React from 'react'

export const Loading = () => {
    return (
        <div className={`animate-spin w-8 h-8 border-[3px] border-current border-t-transparent text-primary rounded-full`}
            role="status"
            aria-label="loading"
        >
            <span className="sr-only">Loading...</span>
        </div>)
}
