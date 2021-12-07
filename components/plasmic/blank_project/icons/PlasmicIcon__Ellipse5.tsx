// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse5Icon(props: Ellipse5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 140 140"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"69.976"}
        cy={"69.976"}
        r={"68.339"}
        stroke={"currentColor"}
        strokeWidth={"3.274"}
      ></circle>
    </svg>
  );
}

export default Ellipse5Icon;
/* prettier-ignore-end */
