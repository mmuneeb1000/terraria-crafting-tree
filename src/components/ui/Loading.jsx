function Loading() {
  return (
    <div className="flex min-h-[75vh] flex-col items-center justify-center gap-4">
      <img
        src="/images/fallen_star.png"
        alt=""
        className="h-12 w-12 animate-bounce"
      />

      <p className="text-base font-medium text-text/80">Loading...</p>
    </div>
  );
}

export default Loading;
