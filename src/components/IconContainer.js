import React from 'react'

export default function IconContainer( { children, color, count, isLike, ...props }) {
    return (
        <div className={`icon-group ${isLike && 'icon-isLike'}`} {...props}>
            <div className={`icon-container icon-${color}`}>
                {children}
            </div>     
            {count > 0 && <p className={`icon-text icon-text-${color}`}>{count}</p>}       
        </div>
    )
}
