// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VectorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VectorIcon(props: VectorIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 157 157"}
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
          "M78.356 7.36a70.923 70.923 0 0139.447 11.984 71.09 71.09 0 0126.15 31.915 71.22 71.22 0 014.039 41.087 71.143 71.143 0 01-19.434 36.41 70.969 70.969 0 01-36.355 19.459 70.893 70.893 0 01-41.023-4.05 71.021 71.021 0 01-31.862-26.194 71.189 71.189 0 01-11.962-39.51 71.248 71.248 0 0120.822-50.253A71.025 71.025 0 0178.356 7.359zm0-7.36a78.261 78.261 0 00-43.53 13.221 78.443 78.443 0 00-28.86 35.216 78.583 78.583 0 00-4.46 45.34 78.503 78.503 0 0021.442 40.179 78.304 78.304 0 0040.117 21.476 78.231 78.231 0 0045.269-4.467 78.374 78.374 0 0035.162-28.905 78.554 78.554 0 0013.2-43.598 78.522 78.522 0 00-22.945-55.481A78.28 78.28 0 0078.356 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
