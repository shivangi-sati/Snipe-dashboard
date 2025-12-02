export default function Loader({ size = "md" }) {
  const sizeClasses = {
    sm: "h-5 w-5",
    md: "h-10 w-10",
    lg: "h-16 w-16"
  };

  return (
    <div className="flex items-center justify-center py-10">
      <div
        className={`animate-spin rounded-full border-4 border-indigo-600 border-t-transparent ${sizeClasses[size]}`}
      ></div>
    </div>
  );
}
