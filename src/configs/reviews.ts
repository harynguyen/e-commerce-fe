import { useTranslation } from 'react-i18next'

export const FILTER_REVIEW_CMS = () => {
  const { t } = useTranslation()

  return [
    {
      label: t('From_4.5_to_5'),
      value: '4.5'
    },
    {
      label: t('From_4_to_5'),
      value: '4'
    },
    {
      label: t('From_3.5_to_5'),
      value: '3.5'
    },
    {
      label: t('From_2_to_5'),
      value: '2'
    },
    {
      label: t('From_0.5_to_5'),
      value: '0.5'
    }
  ]
}
