import React from 'react'
import { Tooltip } from 'antd'
import AutoDecoratableEllipsis from '../AutoDecoratableEllipsis'

import type { IAutoDecoratableEllipsis } from '../AutoDecoratableEllipsis'

export interface IAutoEllipsisWithTooltip extends IAutoDecoratableEllipsis {
    title?: React.ReactNode
}

const AutoEllipsisWithTooltip: React.FC<IAutoEllipsisWithTooltip> = ({
    title,
    ...restProps
}) => (
    <AutoDecoratableEllipsis {...restProps} >
        {(nodeWithEllipsisClass: React.ReactNode) => (
            <Tooltip title={title || restProps.text}>
                {nodeWithEllipsisClass}
            </Tooltip>
        )}
    </AutoDecoratableEllipsis>
)

export default AutoEllipsisWithTooltip