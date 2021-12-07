// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group12Icon(props: Group12IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 43 33"}
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
          "M36.164 2.7A35.229 35.229 0 0027.47.001a.132.132 0 00-.14.066 24.73 24.73 0 00-1.083 2.224 32.522 32.522 0 00-9.766 0 22.52 22.52 0 00-1.1-2.224.137.137 0 00-.14-.066A35.13 35.13 0 006.545 2.7a.124.124 0 00-.057.05C.949 11.021-.568 19.092.177 27.063a.147.147 0 00.055.1c3.654 2.683 7.194 4.312 10.667 5.392a.138.138 0 00.15-.05 25.314 25.314 0 002.183-3.549.135.135 0 00-.074-.188 23.327 23.327 0 01-3.333-1.588.137.137 0 01-.013-.228c.224-.167.448-.342.661-.518a.132.132 0 01.138-.019c6.992 3.192 14.56 3.192 21.47 0a.132.132 0 01.14.017c.213.176.437.353.663.52a.137.137 0 01-.012.228 21.893 21.893 0 01-3.334 1.586.136.136 0 00-.072.19 28.437 28.437 0 002.18 3.548.136.136 0 00.15.051c3.49-1.08 7.03-2.709 10.684-5.392a.137.137 0 00.056-.099c.89-9.215-1.492-17.219-6.316-24.315a.109.109 0 00-.056-.05zM14.276 22.21c-2.105 0-3.84-1.932-3.84-4.305 0-2.374 1.701-4.306 3.84-4.306 2.155 0 3.872 1.95 3.839 4.306 0 2.373-1.7 4.305-3.84 4.305zm14.195 0c-2.105 0-3.84-1.932-3.84-4.305 0-2.374 1.701-4.306 3.84-4.306 2.155 0 3.872 1.95 3.839 4.306 0 2.373-1.684 4.305-3.84 4.305z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group12Icon;
/* prettier-ignore-end */
