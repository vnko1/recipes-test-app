import React from "react";
import clsx from "clsx";

import styles from "./ContentContainer.module.scss";

type WrapperTagType = "div" | "section" | "header" | "footer";

interface Props extends React.PropsWithChildren {
  children: React.ReactNode;
  wrapperTag?: WrapperTagType;
  classNames?: string;
  contentClassName?: string;
}

const ContentContainer: React.FC<Props> = ({
  children,
  wrapperTag: WrapperTag = "div",
  classNames,
  contentClassName,
}) => {
  return (
    <WrapperTag className={clsx(styles.wrapper, classNames)}>
      <div>
        <div className={clsx(styles.container, contentClassName)}>
          {children}
        </div>
      </div>
    </WrapperTag>
  );
};

export default ContentContainer;
