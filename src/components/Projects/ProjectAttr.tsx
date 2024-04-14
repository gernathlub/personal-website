import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { ReactNode } from 'react'

export default function ProjectAttr({
    title,
    icon,
    children,
}: {
    title: string
    children?: ReactNode
    icon: IconDefinition
}) {
    return (
        <div className="flex flex-row">
            <FontAwesomeIcon icon={icon} />
            <span className="font-medium ml-2 mr-4 -mt-0.5">
                {title}
                {children ? ':' : ''}
            </span>
            {children ? <span className="-mt-0.5">{children}</span> : ''}
        </div>
    )
}
