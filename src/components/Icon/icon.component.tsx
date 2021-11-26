import React from 'react'

import { iIcon,iIconSizes,iIconTypes } from "."
import { IconWrapper } from './icon.style'

import { ReactComponent as Search } from '../../assets/svg/search.svg'
import { ReactComponent as Camera } from '../../assets/svg/camera.svg'
import { ReactComponent as File1 } from '../../assets/svg/file1.svg'
import { ReactComponent as File2 } from '../../assets/svg/file2.svg'
import { ReactComponent as HelpCircle } from '../../assets/svg/helpCircle.svg'
import { ReactComponent as Lock } from '../../assets/svg/lock.svg'
import { ReactComponent as Pen } from '../../assets/svg/pen.svg'
import { ReactComponent as Settings } from '../../assets/svg/settings.svg'
import { ReactComponent as TikTok } from '../../assets/svg/loading.svg'
import { ReactComponent as Block } from '../../assets/svg/block.svg'
import { ReactComponent as Brench2 } from '../../assets/svg/brench2.svg'
import { ReactComponent as Calendar } from '../../assets/svg/calendar.svg'
import { ReactComponent as Clock } from '../../assets/svg/clock.svg'
import { ReactComponent as Drag } from '../../assets/svg/drag.svg'
import { ReactComponent as Eye } from '../../assets/svg/eye.svg'
import { ReactComponent as EyeSlash } from '../../assets/svg/eyeSlash.svg'
import { ReactComponent as InformationTriangle } from '../../assets/svg/informationTriangle.svg'
import { ReactComponent as Link } from '../../assets/svg/link.svg'
import { ReactComponent as Loading } from '../../assets/svg/loading.svg'
import { ReactComponent as Bell } from '../../assets/svg/bell.svg'
import { ReactComponent as Brench1 } from '../../assets/svg/brench1.svg'
import { ReactComponent as Home } from '../../assets/svg/home.svg'
import { ReactComponent as Image } from '../../assets/svg/image.svg'
import { ReactComponent as Information } from '../../assets/svg/information.svg'
import { ReactComponent as Login } from '../../assets/svg/login.svg'
import { ReactComponent as Trash } from '../../assets/svg/trash.svg'
import { ReactComponent as User2 } from '../../assets/svg/user2.svg'
import { ReactComponent as X } from '../../assets/svg/X.svg'
import { ReactComponent as Default } from '../../assets/svg/default.svg'
import { ReactComponent as MoreHorizontal } from '../../assets/svg/moreHorizontal.svg'
import { ReactComponent as ChevronUp } from '../../assets/svg/chevronUp.svg'
import { ReactComponent as Linkedin } from '../../assets/svg/linkedin.svg'
import { ReactComponent as StarEmpty } from '../../assets/svg/starEmpty.svg'
import { ReactComponent as StarFilled } from '../../assets/svg/starFilled.svg'
import { ReactComponent as List } from '../../assets/svg/list.svg'
import { ReactComponent as Minus } from '../../assets/svg/minus.svg'
import { ReactComponent as Truck } from '../../assets/svg/truck.svg'
import { ReactComponent as Envelope } from '../../assets/svg/envelope.svg'
import { ReactComponent as MoreVertical } from '../../assets/svg/moreVertical.svg'
import { ReactComponent as Twitter } from '../../assets/svg/twitter.svg'
import { ReactComponent as Facebook } from '../../assets/svg/facebook.svg'
import { ReactComponent as User1 } from '../../assets/svg/user1.svg'
import { ReactComponent as Globe } from '../../assets/svg/globe.svg'
import { ReactComponent as Phone } from '../../assets/svg/phone.svg'
import { ReactComponent as Youtube } from '../../assets/svg/youtube.svg'
import { ReactComponent as Grid } from '../../assets/svg/grid.svg'
import { ReactComponent as PinLocation } from '../../assets/svg/pinLocation.svg'
import { ReactComponent as ChevronLeft } from '../../assets/svg/chevronLeft.svg'
import { ReactComponent as Hamburguer } from '../../assets/svg/hamburguer.svg'
import { ReactComponent as Play } from '../../assets/svg/play.svg'
import { ReactComponent as ChevronRight } from '../../assets/svg/chevronRight.svg'
import { ReactComponent as Heart } from '../../assets/svg/heart.svg'
import { ReactComponent as Plus } from '../../assets/svg/plus.svg'
import { ReactComponent as Instagram } from '../../assets/svg/instagram.svg'
import { ReactComponent as Check } from '../../assets/svg/check.svg'
import { ReactComponent as Shield } from '../../assets/svg/shield.svg'
import { ReactComponent as CashSign } from '../../assets/svg/cashSign.svg'
import { ReactComponent as ChevronDown } from '../../assets/svg/chevronDown.svg'
import { ReactComponent as Bag } from '../../assets/svg/bag.svg'

const ICON_SIZE_BY_SIZE: Record<iIconSizes,string> = {
  MD: '32px',
  SM: '24px',
}

const SVG_COMPONENT = (_props: iIcon): Record<iIconTypes, any> => {
  const props = {
    ..._props,
    width: ICON_SIZE_BY_SIZE[_props?.size || 'MD'],
    height: ICON_SIZE_BY_SIZE[_props?.size || 'MD'],
  }

  return {
    search: <Search {...props} />,
    camera: <Camera {...props} />,
    file1: <File1 {...props} />,
    file2: <File2 {...props} />,
    helpCircle: <HelpCircle {...props} />,
    lock: <Lock {...props} />,
    pen: <Pen {...props} />,
    settings: <Settings {...props} />,
    tiktok: <TikTok {...props} />,
    block: <Block {...props} />,
    brench2: <Brench2 {...props} />,
    calendar: <Calendar {...props} />,
    clock: <Clock {...props} />,
    drag: <Drag {...props} />,
    eye: <Eye {...props} />,
    eyeSlash: <EyeSlash {...props} />,
    informationTriangle: <InformationTriangle {...props} />,
    link: <Link {...props} />,
    loading: <Loading {...props} />,
    bell: <Bell {...props} />,
    brench1: <Brench1 {...props} />,
    home: <Home {...props} />,
    information: <Information {...props} />,
    image: <Image {...props} />,
    login: <Login {...props} />,
    trash: <Trash {...props} />,
    user2: <User2 {...props} />,
    X: <X {...props} />,
    moreHorizontal: <MoreHorizontal {...props} />,
    chevronUp: <ChevronUp {...props} />,
    linkedin: <Linkedin {...props} />,
    starEmpty: <StarEmpty {...props} />,
    starFilled: <StarFilled {...props} />,
    list: <List {...props} />,
    default: <Default {...props} />,
    minus: <Minus {...props} />,
    truck: <Truck {...props} />,
    envelope: <Envelope {...props} />,
    moreVertical: <MoreVertical {...props} />,
    twitter: <Twitter {...props} />,
    facebook: <Facebook {...props} />,
    user1: <User1 {...props} />,
    globe: <Globe {...props} />,
    phone: <Phone {...props} />,
    youtube: <Youtube {...props} />,
    grid: <Grid {...props} />,
    pinLocation: <PinLocation {...props} />,
    hamburguer: <Hamburguer {...props} />,
    play: <Play {...props} />,
    chevronRight: <ChevronRight {...props} />,
    heart: <Heart {...props} />,
    plus: <Plus {...props} />,
    instagram: <Instagram {...props} />,
    check: <Check {...props} />,
    shield: <Shield {...props} />,
    cashSign: <CashSign {...props} />,
    chevronDown: <ChevronDown {...props} />,
    chevronLeft: <ChevronLeft {...props} />,
    bag: <Bag {...props} />,
  }
}

export const Icon: React.FC<iIcon> = ({
  iconId,
  ...props
}) => {
  if (!iconId) return null

  return (
    <IconWrapper {...props}>
      {SVG_COMPONENT(props)[iconId]}
    </IconWrapper>
  )
}
