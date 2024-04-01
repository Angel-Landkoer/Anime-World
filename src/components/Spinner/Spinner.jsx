export function Spinner({ title = "", color = "", status = "" }) {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div
        className={`inline-block h-8 w-8 mb-1 animate-spin rounded-full border-4 border-solid border-current border-r-transparent border-${color} align-[-0.125em] text-danger motion-reduce:animate-[spin_1.5s_linear_infinite]`}
        role="status"
      />
      {status == "loading" && (
        <div className="flex mt-3">
          <span className=" text-base font-bold text-ferry">Loading</span>
          <span className="ml-0.5 text-lg font-bold animate-ping">.</span>
          <span className="ml-0.5 text-lg font-bold animate-ping">.</span>
          <span className="ml-0.5 text-lg font-bold animate-ping">.</span>
        </div>
      )}
      {status == "error" && (
        <h3 className="mt-3 text-base font-bold text-ferry">{title}</h3>
      )}
    </div>
  );
}
