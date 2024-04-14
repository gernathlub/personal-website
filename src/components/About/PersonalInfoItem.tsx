import { ReactNode } from 'react'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function PersonalInfoItem({
    children,
    redirPath,
    icon,
}: Readonly<{
    children: ReactNode
    redirPath?: string
    icon: IconDefinition
}>) {
    return (
        <div className="text-xl">
            <FontAwesomeIcon icon={icon} className="mr-2 text-primary" />
            {redirPath ? (
                <a href={redirPath} className="hover:text-primary">
                    {children}
                </a>
            ) : (
                <span>{children}</span>
            )}
        </div>
    )
}
