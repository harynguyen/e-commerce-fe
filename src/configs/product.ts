import { useTranslation } from "react-i18next"

export const LOCAL_PRODUCT_CART = "productCart"

export const OBJECT_STATUS_PRODUCT = () => {
    const {t} = useTranslation()

    return {
        "0": {
            label: t("Private"),
            value: "0"
        },
        "1": {
            label: t("Public"),
            value: "1"
        }
    }
}

export const FILTER_REVIEW_PRODUCT = () => {
    const {t} = useTranslation()

    return [
        {
            label: t("From_4.5_to_5"),
            value: "4.5"
        },
        {
            label: t("From_4_to_5"),
            value: "4"
        },
        {
            label: t("From_3.5_to_5"),
            value: "3.5"
        },
        {
            label: t("From_3_to_5"),
            value: "3"
        },
    ]
}
