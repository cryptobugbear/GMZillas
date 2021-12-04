// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group3Icon(props: Group3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 31 24"}
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
          "M25.937 1.936A25.265 25.265 0 0019.701.002a.095.095 0 00-.1.047 17.47 17.47 0 00-.777 1.595 23.325 23.325 0 00-7.005 0A16.138 16.138 0 0011.031.05a.098.098 0 00-.1-.047 25.196 25.196 0 00-6.237 1.934.09.09 0 00-.041.035C.681 7.905-.407 13.694.127 19.411a.105.105 0 00.04.071 25.406 25.406 0 007.65 3.867.099.099 0 00.108-.035 18.158 18.158 0 001.565-2.546.097.097 0 00-.053-.135 16.728 16.728 0 01-2.39-1.139.098.098 0 01-.01-.163c.16-.12.321-.245.475-.372a.095.095 0 01.099-.013c5.014 2.29 10.442 2.29 15.398 0a.094.094 0 01.1.012c.153.127.314.253.476.373a.098.098 0 01-.009.163 15.7 15.7 0 01-2.391 1.138.098.098 0 00-.052.136c.46.892.986 1.74 1.564 2.545a.097.097 0 00.108.036 25.322 25.322 0 007.662-3.867.098.098 0 00.04-.07c.639-6.61-1.07-12.35-4.53-17.44a.078.078 0 00-.04-.036zM10.24 15.93c-1.51 0-2.754-1.386-2.754-3.089 0-1.702 1.22-3.088 2.754-3.088 1.545 0 2.777 1.399 2.753 3.088 0 1.703-1.22 3.089-2.753 3.089zm10.18 0c-1.51 0-2.753-1.386-2.753-3.089 0-1.702 1.22-3.088 2.753-3.088 1.546 0 2.778 1.399 2.754 3.088 0 1.703-1.208 3.089-2.754 3.089z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group3Icon;
/* prettier-ignore-end */
