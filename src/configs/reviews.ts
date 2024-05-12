import { useTranslation } from 'react-i18next'

export const FILTER_REVIEW_CMS = () => {
  const { t } = useTranslation()

  return [
    {
      label: t('From 4.5 to 5'),
      value: '4.5'
    },
    {
      label: t('From 4 to 5'),
      value: '4'
    },
    {
      label: t('From 3.5 to 5'),
      value: '3.5'
    },
    {
      label: t('From 2 to 5'),
      value: '2'
    },
    {
      label: t('From 0.5 to 5'),
      value: '0.5'
    }
  ]
}
