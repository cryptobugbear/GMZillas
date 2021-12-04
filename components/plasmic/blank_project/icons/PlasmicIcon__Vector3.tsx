// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector3Icon(props: Vector3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 21"}
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
          "M26 2.486c-.957.422-1.985.706-3.064.835A5.316 5.316 0 0025.282.388a10.726 10.726 0 01-3.388 1.286A5.34 5.34 0 0018.001 0c-3.444 0-5.975 3.193-5.197 6.509A15.174 15.174 0 011.81.97a5.289 5.289 0 001.65 7.078 5.337 5.337 0 01-2.415-.663C.987 9.841 2.758 12.14 5.324 12.65a5.364 5.364 0 01-2.41.09 5.334 5.334 0 004.984 3.682A10.773 10.773 0 010 18.618 15.168 15.168 0 008.177 21c9.904 0 15.5-8.313 15.161-15.77A10.824 10.824 0 0026 2.487z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector3Icon;
/* prettier-ignore-end */
