import React, { useEffect, useRef, useState } from "react";
import classnames from "classnames";
import { isFunction } from "lodash";

import './index.less'

export interface IAutoDecoratableEllipsis {
    text?: string,
    width?: React.CSSProperties['width'],
    rowNum?: number
}

const AutoDecoratableEllipsis: React.FC<IAutoDecoratableEllipsis> = ({
    text = '',
    width = "100%",
    rowNum = 1,
    children
}) => {
    const [applyEllipsisClass, setApplyEllipsisClass] = useState(false);
    const [isEllipsised, setIsEllipsised] = useState(false);
    const textContainerRef = useRef<HTMLDivElement>(null);
    const originalOffsetHeightRef = useRef(0);

    useEffect(() => {
        originalOffsetHeightRef.current = textContainerRef.current!.offsetHeight;
        setApplyEllipsisClass(true);
    }, []);

    useEffect(() => {
        if (
            applyEllipsisClass &&
            textContainerRef.current!.offsetHeight < originalOffsetHeightRef.current
        ) {
            setIsEllipsised(true);
        }
    }, [applyEllipsisClass]);

    const nodeWithEllipsisClass = (
        <div
            ref={textContainerRef}
            style={{
                width,
                WebkitLineClamp: applyEllipsisClass ? rowNum : undefined
            }}
            className={classnames(["auto-decoratable-ellipsis", { ellipsis: applyEllipsisClass }])}
        >
            {text}
        </div>
    );

    return isEllipsised && isFunction(children) ? children(nodeWithEllipsisClass) : nodeWithEllipsisClass;
}

export default AutoDecoratableEllipsis