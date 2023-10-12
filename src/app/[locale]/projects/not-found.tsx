import ContentContainer from "@/components/ContentContainer"
import Delimiter from "@/components/Delimiter"
import { useTranslations } from "next-intl"

export default function NotFound() {
    const t = useTranslations("NotFound")
    return (
        <div className="flex flex-col flex-grow justify-center text-2xl">
            <Delimiter/>
            <ContentContainer extraClass="my-40">
                <span className="text-primary font-semibold mr-2">404</span>
                { t("Project you are looking for was not found") }
            </ContentContainer>
        </div>
    )
}
