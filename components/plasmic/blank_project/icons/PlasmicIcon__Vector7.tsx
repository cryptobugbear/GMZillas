// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector7Icon(props: Vector7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 76 77"}
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
          "M37.976 3.567a34.372 34.372 0 0119.117 5.808 34.452 34.452 0 0112.674 15.468 34.514 34.514 0 011.958 19.913 34.48 34.48 0 01-9.419 17.646 34.394 34.394 0 01-17.62 9.43 34.361 34.361 0 01-19.881-1.962A34.422 34.422 0 019.362 57.175a34.502 34.502 0 01-5.797-19.148A34.53 34.53 0 0113.656 13.67a34.423 34.423 0 0124.32-10.104zm0-3.567a37.93 37.93 0 00-21.098 6.408A38.018 38.018 0 002.891 23.475 38.085 38.085 0 00.73 45.45a38.05 38.05 0 0010.393 19.473 37.954 37.954 0 0019.443 10.409 37.916 37.916 0 0021.94-2.166 37.984 37.984 0 0017.04-14.008 38.072 38.072 0 006.398-21.13c0-10.086-4-19.758-11.12-26.89A37.938 37.938 0 0037.976 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector7Icon;
/* prettier-ignore-end */
