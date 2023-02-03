export default function BackgroundVideo() {
  return (
    <div className="absolute top-0 w-full h-full">
      <video
        src="/SplashPageLoop1080p.mp4"
        muted
        autoPlay
        playsInline
        loop
        className="relative top-0 h-full w-full object-cover"
      />
    </div>
  );
}
