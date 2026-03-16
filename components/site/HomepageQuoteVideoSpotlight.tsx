"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { publicAsset } from "@/lib/utils";

const posterSrc = publicAsset("/images/EspnThumbnail.JPG");
const videoSrc = publicAsset("/images/homepageclip.mov");

export default function HomepageQuoteVideoSpotlight() {
  const [isPlayingInline, setIsPlayingInline] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!isPlayingInline || !videoRef.current) {
      return;
    }

    const videoElement = videoRef.current;

    videoElement.load();

    const startPlayback = async () => {
      try {
        await videoElement.play();
      } catch {
        // Keep controls available if autoplay is blocked.
      }
    };

    void startPlayback();
  }, [isPlayingInline]);

  return (
    <div className="mt-4 min-w-0 w-full overflow-hidden rounded-[28px] border border-white/12 bg-white/6 shadow-card">
      {isPlayingInline ? (
        <div className="relative aspect-[5/6] bg-black">
          <button
            type="button"
            onClick={() => setIsPlayingInline(false)}
            className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/18 bg-[#101311]/76 text-white shadow-card backdrop-blur"
            aria-label="Close homepage highlight video"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
          <video
            ref={videoRef}
            src={videoSrc}
            controls
            autoPlay
            playsInline
            preload="metadata"
            poster={posterSrc}
            onEnded={() => setIsPlayingInline(false)}
            className="h-full w-full bg-black object-cover object-top"
          />
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setIsPlayingInline(true)}
          className="group block w-full min-w-0 text-left transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/80"
          aria-label="Open homepage highlight video"
        >
          <div className="relative aspect-[5/6] overflow-hidden bg-[#050706]">
            <Image
              src={posterSrc}
              alt="Nick Parks ESPN thumbnail"
              fill
              sizes="(min-width: 1280px) 34vw, (min-width: 1024px) 30vw, 100vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.01]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050706]/88 via-[#050706]/18 to-transparent" />
            <div className="absolute left-5 top-5 rounded-full border border-white/18 bg-white/10 px-3 py-1.5 backdrop-blur">
              <p className="font-heading text-[11px] uppercase tracking-[0.26em] text-white/82">
                Featured clip
              </p>
            </div>
            <div className="absolute inset-x-0 bottom-0 px-5 pb-5 pt-16">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/18 bg-white/12 shadow-card backdrop-blur transition-transform duration-300 group-hover:scale-105">
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 6.5v11l9-5.5-9-5.5Z" />
                </svg>
              </div>
              <p className="mt-4 font-heading text-sm uppercase tracking-[0.22em] text-white">
                Watch the homepage clip
              </p>
            </div>
          </div>
        </button>
      )}
    </div>
  );
}