"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { publicAsset } from "@/lib/utils";

const posterSrc = publicAsset("/images/EspnThumbnail.JPG");
const videoSrc = publicAsset("/images/homepageclip.mov");

export default function HomepageQuoteVideoSpotlight() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isExpanded) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsExpanded(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isExpanded]);

  return (
    <>
      <div className="min-w-0 w-full overflow-hidden rounded-[28px] border border-black/8 bg-white shadow-card">
        <div className="group relative aspect-[16/9] overflow-hidden rounded-[28px] bg-[#09100d]">
          <video
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={posterSrc}
            className="pointer-events-none h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101311]/88 via-[#101311]/18 to-[#101311]/14" />

          <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between gap-4 px-4 pt-4 sm:px-5 sm:pt-5 md:px-6 md:pt-6">
            <div className="rounded-full border border-white/18 bg-white/10 px-3 py-1.5 backdrop-blur">
              <p className="font-heading text-xs uppercase tracking-[0.26em] text-white/86">
                Featured clip
              </p>
            </div>
            <div className="hidden rounded-full border border-white/22 bg-[#101311]/54 px-3 py-1.5 backdrop-blur sm:block">
              <p className="font-heading text-xs uppercase tracking-[0.22em] text-white">
                Click to expand
              </p>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 px-4 pb-4 pt-12 sm:px-5 sm:pb-5 sm:pt-20 md:px-6 md:pb-6">
            <div className="max-w-3xl">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/18 bg-white/12 shadow-card backdrop-blur transition-transform duration-300 group-hover:scale-105 sm:h-16 sm:w-16">
                <svg className="h-5 w-5 text-white sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 6.5v11l9-5.5-9-5.5Z" />
                </svg>
              </div>
              <p className="mt-4 hidden max-w-3xl font-heading text-xl uppercase tracking-[-0.03em] text-white sm:block md:mt-5 md:text-[2rem]">
                The question should never be how long will it take, but rather what will it take.
              </p>
              <p className="mt-2 hidden max-w-2xl text-sm leading-7 text-white/88 sm:block md:mt-3 md:text-base">
                See the featured SlamBall clip in the same expanded format used on the Mission page.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsExpanded(true)}
            className="absolute inset-0 z-10 cursor-zoom-in rounded-[28px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/80"
            aria-label="Open homepage highlight video in an expanded view"
          />
        </div>
      </div>

      {isMounted && isExpanded
        ? createPortal(
            <div
              className="fixed inset-0 z-[80] flex items-center justify-center bg-[#050706]/62 p-4 backdrop-blur-md"
              onClick={() => setIsExpanded(false)}
            >
              <div
                className="relative w-full max-w-[min(92vw,1400px)] rounded-[32px] border border-white/16 bg-white/10 p-3 shadow-[0_42px_120px_-48px_rgba(0,0,0,0.72)] backdrop-blur-xl md:p-4"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setIsExpanded(false)}
                  className="absolute right-5 top-5 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/18 bg-[#101311]/76 text-white shadow-card backdrop-blur"
                  aria-label="Close homepage highlight video"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="relative overflow-hidden rounded-[24px] bg-black">
                  <div className="relative aspect-[16/9]">
                    <video
                      src={videoSrc}
                      controls
                      autoPlay
                      playsInline
                      preload="metadata"
                      poster={posterSrc}
                      className="h-full w-full bg-black object-contain"
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/84 via-black/34 to-transparent px-5 pb-5 pt-16 md:px-6 md:pb-6">
                      <p className="font-heading text-xs uppercase tracking-[0.26em] text-white/72">
                        Featured clip
                      </p>
                      <p className="mt-2 max-w-2xl text-sm leading-6 text-white md:text-lg md:leading-7">
                        A larger view of the homepage highlight in the same expanded treatment used on the Mission page.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
