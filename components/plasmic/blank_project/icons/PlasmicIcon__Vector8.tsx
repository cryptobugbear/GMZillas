// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector8Icon(props: Vector8IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 37 30"}
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
          "M36.252 3.466A14.92 14.92 0 0131.98 4.63 7.413 7.413 0 0035.25.54a14.955 14.955 0 01-4.723 1.794A7.446 7.446 0 0025.098 0c-4.802 0-8.33 4.453-7.245 9.075a21.157 21.157 0 01-15.33-7.722 7.374 7.374 0 002.3 9.869 7.44 7.44 0 01-3.366-.925c-.082 3.424 2.388 6.628 5.965 7.341a7.5 7.5 0 01-3.36.126 7.438 7.438 0 006.949 5.133A15.02 15.02 0 010 25.96a21.15 21.15 0 0011.401 3.32c13.81 0 21.61-11.59 21.14-21.987a15.092 15.092 0 003.71-3.827z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector8Icon;
/* prettier-ignore-end */
