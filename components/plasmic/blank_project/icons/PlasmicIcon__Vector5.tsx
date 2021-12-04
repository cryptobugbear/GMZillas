// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector5Icon(props: Vector5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 28"}
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
          "M13.526 1.27c2.424 0 4.794.72 6.81 2.07a12.271 12.271 0 014.514 5.508 12.293 12.293 0 01-2.658 13.378 12.239 12.239 0 01-13.357 2.66 12.26 12.26 0 01-5.5-4.521 12.289 12.289 0 01-2.065-6.82 12.3 12.3 0 013.594-8.676 12.26 12.26 0 018.662-3.599zm0-1.27c-2.675 0-5.29.794-7.514 2.282a13.541 13.541 0 00-4.982 6.08 13.565 13.565 0 002.93 14.761 13.505 13.505 0 0014.74 2.936 13.53 13.53 0 006.07-4.99 13.56 13.56 0 00-1.683-17.103A13.513 13.513 0 0013.527 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector5Icon;
/* prettier-ignore-end */
