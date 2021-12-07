// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector10Icon(props: Vector10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 34 34"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M16.975 1.594c3.043 0 6.017.904 8.546 2.597a15.4 15.4 0 015.665 6.914 15.428 15.428 0 01-3.335 16.79 15.36 15.36 0 01-16.764 3.338 15.388 15.388 0 01-6.902-5.675 15.423 15.423 0 01-2.591-8.56c.005-4.084 1.627-8 4.51-10.887a15.387 15.387 0 0110.871-4.517zm0-1.594c-3.357 0-6.639.996-9.43 2.864a16.994 16.994 0 00-6.253 7.63 17.024 17.024 0 003.68 18.527 16.95 16.95 0 0018.499 3.685 16.979 16.979 0 007.616-6.262 17.019 17.019 0 00-2.11-21.465A16.958 16.958 0 0016.974 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector10Icon;
/* prettier-ignore-end */
