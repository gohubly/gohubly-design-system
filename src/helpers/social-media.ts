import { EShareMedia } from "../components/Share";

export const getLinkToSocialMedia = (media: EShareMedia, link: string, keys: { facebookMessenger: string }): string =>
  (({
    whatsapp: `https://api.whatsapp.com/send/?text=${link}&type=custom_url&app_absent=0`,
    messenger: `https://www.facebook.com/dialog/send?app_id=${keys.facebookMessenger}&link=${link}&redirect_uri=${link}`,
    instagram: 'https://www.instagram.com',
    email: '',
  } as { [key in keyof typeof EShareMedia]: string })[media]);