// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector6Icon(props: Vector6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 35 31"}
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
          "M17.078 1.413c3.061 0 6.053.8 8.598 2.301 2.545 1.5 4.529 3.633 5.7 6.127 1.171 2.495 1.477 5.24.88 7.889-.597 2.648-2.071 5.081-4.236 6.99-2.164 1.91-4.922 3.21-7.924 3.737a17.401 17.401 0 01-8.94-.778c-2.83-1.033-5.246-2.784-6.946-5.029-1.7-2.245-2.607-4.885-2.607-7.586.005-3.62 1.638-7.089 4.539-9.648 2.9-2.56 6.834-3.999 10.936-4.003zm0-1.413C13.701 0 10.4.883 7.59 2.538 4.782 4.194 2.593 6.547 1.3 9.3.008 12.053-.33 15.082.328 18.005c.659 2.922 2.285 5.607 4.674 7.714 2.388 2.107 5.43 3.542 8.744 4.123 3.312.582 6.746.283 9.866-.857 3.12-1.14 5.788-3.072 7.664-5.55 1.876-2.478 2.878-5.39 2.877-8.37 0-3.996-1.799-7.828-5-10.653C25.95 1.587 21.606 0 17.077 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector6Icon;
/* prettier-ignore-end */
