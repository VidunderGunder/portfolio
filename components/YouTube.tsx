import { css } from "@emotion/react";
import { ComponentPropsWithoutRef, forwardRef, Ref } from "react";

const YouTube = forwardRef(function YouTube(
  {
    src,
    aspectRatio = {
      width: 16,
      height: 9,
    },
    iframeProps,
    ...props
  }: ComponentPropsWithoutRef<"div"> & {
    aspectRatio?: {
      width: number;
      height: number;
    };
    src: string;
    iframeProps?: ComponentPropsWithoutRef<"iframe">;
  },
  ref: Ref<HTMLDivElement> | undefined
) {
  return (
    <div
      ref={ref}
      css={css`
        position: relative;
        padding-top: ${100 * (aspectRatio.height / aspectRatio.width)}%;
        width: 100%;
        overflow: hidden;
      `}
      {...props}
    >
      <iframe
        css={css`
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          clip-path: inset(0% 0% 0% 0% round 0.25rem);
        `}
        frameBorder="0"
        src={src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        {...iframeProps}
      />
    </div>
  );
});

export default YouTube;
