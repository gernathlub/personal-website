'use client'
import BaseLayout from '@/components/BaseLayout'
import ContentContainer from '@/components/ContentContainer'
import RedirectButtonPrimary from '@/components/RedirectButtonPrimary'

export const metadata = {
    title: 'Not Found',
}

export default function NotFound() {
    return (
        <html lang="en">
            <BaseLayout>
                <ContentContainer>
                    <div>
                        <h1 className="pt-8 text-8xl">404</h1>
                        <h2>Page Not Found</h2>
                        <p className="mx-auto my-14 max-w-4xl text-2xl">
                            We are sorry but page you were looking for was not
                            found. Please check the URL or return to the
                            homepage
                        </p>
                        <RedirectButtonPrimary
                            targetUrl="/en"
                            text="Homepage"></RedirectButtonPrimary>
                    </div>
                </ContentContainer>
            </BaseLayout>
        </html>
    )
}
