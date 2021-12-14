import React from 'react'

import { iIcon,iIconSizes,iIconTypes } from "."
import { IconWrapper } from './icon.style'

import {ReactComponent as Search} from '../../assets/svg/search.svg'
import Camera from '../../assets/svg/camera.svg'
import File1 from '../../assets/svg/file1.svg'
import File2 from '../../assets/svg/file2.svg'
import HelpCircle from '../../assets/svg/helpCircle.svg'
import Lock from '../../assets/svg/lock.svg'
import Pen from '../../assets/svg/pen.svg'
import Settings from '../../assets/svg/settings.svg'
import TikTok from '../../assets/svg/loading.svg'
import Block from '../../assets/svg/block.svg'
import Brench2 from '../../assets/svg/brench2.svg'
import Calendar from '../../assets/svg/calendar.svg'
import Clock from '../../assets/svg/clock.svg'
import Drag from '../../assets/svg/drag.svg'
import Eye from '../../assets/svg/eye.svg'
import EyeSlash from '../../assets/svg/eyeSlash.svg'
import InformationTriangle from '../../assets/svg/informationTriangle.svg'
import Link from '../../assets/svg/link.svg'
import Loading from '../../assets/svg/loading.svg'
import Bell from '../../assets/svg/bell.svg'
import Brench1 from '../../assets/svg/brench1.svg'
import Home from '../../assets/svg/home.svg'
import Image from '../../assets/svg/image.svg'
import Information from '../../assets/svg/information.svg'
import Login from '../../assets/svg/login.svg'
import Trash from '../../assets/svg/trash.svg'
import User2 from '../../assets/svg/user2.svg'
import X from '../../assets/svg/X.svg'
import Default from '../../assets/svg/default.svg'
import MoreHorizontal from '../../assets/svg/moreHorizontal.svg'
import ChevronUp from '../../assets/svg/chevronUp.svg'
import Linkedin from '../../assets/svg/linkedin.svg'
import StarEmpty from '../../assets/svg/starEmpty.svg'
import StarFilled from '../../assets/svg/starFilled.svg'
import List from '../../assets/svg/list.svg'
import Minus from '../../assets/svg/minus.svg'
import Truck from '../../assets/svg/truck.svg'
import Envelope from '../../assets/svg/envelope.svg'
import MoreVertical from '../../assets/svg/moreVertical.svg'
import Twitter from '../../assets/svg/twitter.svg'
import Facebook from '../../assets/svg/facebook.svg'
import User1 from '../../assets/svg/user1.svg'
import Globe from '../../assets/svg/globe.svg'
import Phone from '../../assets/svg/phone.svg'
import Youtube from '../../assets/svg/youtube.svg'
import Grid from '../../assets/svg/grid.svg'
import PinLocation from '../../assets/svg/pinLocation.svg'
import ChevronLeft from '../../assets/svg/chevronLeft.svg'
import Hamburguer from '../../assets/svg/hamburguer.svg'
import Play from '../../assets/svg/play.svg'
import ChevronRight from '../../assets/svg/chevronRight.svg'
import Heart from '../../assets/svg/heart.svg'
import Plus from '../../assets/svg/plus.svg'
import Instagram from '../../assets/svg/instagram.svg'
import Check from '../../assets/svg/check.svg'
import Shield from '../../assets/svg/shield.svg'
import CashSign from '../../assets/svg/cashSign.svg'
import ChevronDown from '../../assets/svg/chevronDown.svg'
import Bag from '../../assets/svg/bag.svg'

const ICON_SIZE_BY_SIZE: Record<iIconSizes,string> = {
  MD: '32px',
  SM: '24px',
}

const SVG_COMPONENT: Record<iIconTypes, any> = {
  search: Search,
  camera: Camera,
  file1: File1,
  file2: File2,
  helpCircle: HelpCircle,
  lock: Lock,
  pen: Pen,
  settings: Settings,
  tiktok: TikTok,
  block: Block,
  brench2: Brench2,
  calendar: Calendar,
  clock: Clock,
  drag: Drag,
  eye: Eye,
  eyeSlash: EyeSlash,
  informationTriangle: InformationTriangle,
  link: Link,
  loading: Loading,
  bell: Bell,
  brench1: Brench1,
  home: Home,
  information: Information,
  image: Image,
  login: Login,
  trash: Trash,
  user2: User2,
  X: X,
  moreHorizontal: MoreHorizontal,
  chevronUp: ChevronUp,
  linkedin: Linkedin,
  starEmpty: StarEmpty,
  starFilled: StarFilled,
  list: List,
  default: Default,
  minus: Minus,
  truck: Truck,
  envelope: Envelope,
  moreVertical: MoreVertical,
  twitter: Twitter,
  facebook: Facebook,
  user1: User1,
  globe: Globe,
  phone: Phone,
  youtube: Youtube,
  grid: Grid,
  pinLocation: PinLocation,
  hamburguer: Hamburguer,
  play: Play,
  chevronRight: ChevronRight,
  heart: Heart,
  plus: Plus,
  instagram: Instagram,
  check: Check,
  shield: Shield,
  cashSign: CashSign,
  chevronDown: ChevronDown,
  chevronLeft: ChevronLeft,
  bag: Bag,
}

export const Icon: React.FC<iIcon> = ({
  iconId,
  children,
  ...props
}) => {
  if (!iconId) return null

  const _props = {
    ...props,
    width: ICON_SIZE_BY_SIZE[props?.size || 'MD'],
    height: ICON_SIZE_BY_SIZE[props?.size || 'MD'],
  }

  const Svg = SVG_COMPONENT.search;

  return (
    <IconWrapper {...props}>
      <Svg {..._props} />
    </IconWrapper>
  )
}
