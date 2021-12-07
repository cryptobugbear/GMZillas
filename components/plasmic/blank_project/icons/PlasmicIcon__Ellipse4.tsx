// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse4Icon(props: Ellipse4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 140 140"}
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

      <circle
        cx={"69.976"}
        cy={"69.976"}
        r={"69.976"}
        fill={"currentColor"}
      ></circle>
    </svg>
  );
}

export default Ellipse4Icon;
/* prettier-ignore-end */
