import { useState, useEffect } from 'react';
import { VideoMetadata, fetchVideoMetadata, VERIFIED_VIDEO_METADATA } from '../utils/videoUtils';

/**
 * Custom React hook to get accurate video duration, dimensions, and aspect ratio.
 * Loads asynchronously without downloading full video frames.
 */
export function useVideoMetadata(videoSrc: string): VideoMetadata {
  const initial = VERIFIED_VIDEO_METADATA[videoSrc] || {
    duration: 0,
    formattedDuration: '--:--',
    width: 1920,
    height: 1080,
    isPortrait: false,
    aspectRatio: 16 / 9,
  };

  const [metadata, setMetadata] = useState<VideoMetadata>(initial);

  useEffect(() => {
    let isMounted = true;
    if (!videoSrc) return;

    fetchVideoMetadata(videoSrc).then((meta) => {
      if (isMounted) {
        setMetadata(meta);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [videoSrc]);

  return metadata;
}
