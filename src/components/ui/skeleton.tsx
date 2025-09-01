import React from "react";

interface SkeletonProps extends React.ComponentProps<"div"> {
  className?: string;
}

function Skeleton({ className = "", ...props }: SkeletonProps) {
  return (
    <div
      className={`bg-gray-300 dark:bg-gray-600 animate-pulse rounded-md ${className}`}
      {...props}
    />
  );
}

export { Skeleton };
