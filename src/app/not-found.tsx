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
                        <h1 className="text-8xl pt-8">404</h1>
                        <h2>Page Not Found</h2>
                        <p className="text-2xl my-14 max-w-4xl mx-auto">
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
