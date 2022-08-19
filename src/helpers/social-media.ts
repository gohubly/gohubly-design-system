import { EShareMedia } from "../components/Share";

export const getLinkToSocialMedia = (media: EShareMedia, link: string, keys: { facebookMessenger: string } = { facebookMessenger: '382756507066548' }): string => {
  const baseParams = {
    [EShareMedia.whatsapp]: `https://api.whatsapp.com/send/?text=${encodeURIComponent(link)}&type=custom_url&app_absent=0`,
    [EShareMedia.messenger]: `https://www.facebook.com/dialog/send?app_id=${keys.facebookMessenger}&link=${encodeURIComponent(link)}&redirect_uri=${encodeURIComponent(link)}`,
    [EShareMedia.instagram]: 'https://www.instagram.com',
    [EShareMedia.email]: '',
  } as Record<EShareMedia, string>

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return ({
      ...baseParams,
      [EShareMedia.whatsapp]: `https://wa.me/?text=${encodeURIComponent(link)}`,
      [EShareMedia.messenger]: `fb-messenger://share?app_id=${encodeURIComponent(keys.facebookMessenger)}&link=${encodeURIComponent(link)}`
    } as Record<EShareMedia, string>)[media]
  }
  
  return baseParams[media]
}