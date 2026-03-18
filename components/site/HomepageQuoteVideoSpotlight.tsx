"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { publicAsset } from "@/lib/utils";

const posterSrc = publicAsset("/images/EspnThumbnail.JPG");
const videoSrc = publicAsset("/images/homepageclip.mov");

type FullscreenCapableVideo = HTMLVideoElement & {
  webkitEnterFullscreen?: () => void;
  webkitEnterFullScreen?: () => void;
};

export default function HomepageQuoteVideoSpotlight() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const expandedShellRef = useRef<HTMLDivElement | null>(null);
  const expandedVideoRef = useRef<HTMLVideoElement | null>(null);

  const closeExpandedVideo = () => {
    if (document.fullscreenElement) {
      void document.exitFullscreen().catch(() => {
        // If the browser blocks programmatic exit, the overlay still closes below.
      });
    }

    setIsExpanded(false);
  };

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
        closeExpandedVideo();
      }
    };

    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setIsExpanded(false);
      }
    };

    const expandedVideo = expandedVideoRef.current;
    const handleLegacyFullscreenExit = () => {
      setIsExpanded(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    expandedVideo?.addEventListener(
      "webkitendfullscreen",
      handleLegacyFullscreenExit as EventListener
    );

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      expandedVideo?.removeEventListener(
        "webkitendfullscreen",
        handleLegacyFullscreenExit as EventListener
      );
    };
  }, [isExpanded]);

  useEffect(() => {
    if (!isExpanded || !expandedVideoRef.current) {
      return;
    }

    const expandedVideo = expandedVideoRef.current;
    const playback = expandedVideo.play();

    if (playback && typeof playback.catch === "function") {
      playback.catch(() => {
        // Native controls still allow a manual play if autoplay is blocked.
      });
    }

    const attemptFullscreen = async () => {
      try {
        if (expandedShellRef.current?.requestFullscreen && !document.fullscreenElement) {
          await expandedShellRef.current.requestFullscreen();
          return;
        }
      } catch {
        // The overlay already fills the viewport, so a failed fullscreen request is safe to ignore.
      }

      const legacyVideo = expandedVideo as FullscreenCapableVideo;

      if (typeof legacyVideo.webkitEnterFullscreen === "function") {
        try {
          legacyVideo.webkitEnterFullscreen();
          return;
        } catch {
          // Fall through to the older Safari variant if needed.
        }
      }

      if (typeof legacyVideo.webkitEnterFullScreen === "function") {
        try {
          legacyVideo.webkitEnterFullScreen();
        } catch {
          // The viewport-sized overlay remains as the fallback experience.
        }
      }
    };

    void attemptFullscreen();
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
              className="fixed inset-0 z-[80] bg-black/94 backdrop-blur-md"
              onClick={closeExpandedVideo}
            >
              <div
                ref={expandedShellRef}
                className="relative h-full w-full"
                onClick={(event) => event.stopPropagation()}
                style={{
                  paddingTop: "max(env(safe-area-inset-top, 0px), 0.75rem)",
                  paddingRight: "max(env(safe-area-inset-right, 0px), 0.75rem)",
                  paddingBottom: "max(env(safe-area-inset-bottom, 0px), 0.75rem)",
                  paddingLeft: "max(env(safe-area-inset-left, 0px), 0.75rem)",
                }}
              >
                <button
                  type="button"
                  onClick={closeExpandedVideo}
                  className="absolute right-3 top-3 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/16 bg-[#101311]/68 text-white shadow-card backdrop-blur transition hover:bg-[#101311]/82 md:right-5 md:top-5"
                  aria-label="Close homepage highlight video"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="flex h-full w-full items-center justify-center">
                  <video
                    ref={expandedVideoRef}
                    src={videoSrc}
                    controls
                    autoPlay
                    muted
                    playsInline
                    preload="auto"
                    poster={posterSrc}
                    className="max-h-full w-full rounded-[24px] bg-black object-contain shadow-[0_32px_120px_-56px_rgba(0,0,0,0.9)] sm:max-w-[min(100%,1600px)]"
                  />
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
