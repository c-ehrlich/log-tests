"use client";

export const ErrorButton = () => {
  return (
    <button
      onClick={() => {
        fetch("/api/error").catch(console.error);
      }}
      className="border border-red-500 p-2"
    >
      call api handler that crashes
    </button>
  );
};
