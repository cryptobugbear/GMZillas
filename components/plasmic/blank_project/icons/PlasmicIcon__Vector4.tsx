// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector4Icon(props: Vector4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 40"}
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
          "M19.811 1.86c3.55 0 7.021 1.055 9.973 3.03a17.973 17.973 0 016.612 8.07 18.005 18.005 0 01-3.892 19.593A17.925 17.925 0 0112.94 36.45a17.957 17.957 0 01-8.056-6.622 17.999 17.999 0 01-3.024-9.99A18.014 18.014 0 017.124 7.133 17.957 17.957 0 0119.811 1.86zm0-1.86A19.787 19.787 0 008.805 3.343a19.833 19.833 0 00-7.297 8.903 19.868 19.868 0 004.294 21.622 19.78 19.78 0 0021.588 4.3 19.815 19.815 0 008.89-7.307 19.862 19.862 0 00-2.464-25.05A19.791 19.791 0 0019.811 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector4Icon;
/* prettier-ignore-end */
