import React from 'react'

import { iIcon, iIconSizes, iIconTypes } from "."
import { IconWrapper } from './icon.style'

import AppIcon from './icons/app-icon'
import Bag from './icons/bag'
import Bell from './icons/bell'
import Block from './icons/block'
import Brench1 from './icons/brench1'
import Brench2 from './icons/brench2'
import Calendar from './icons/calendar'
import Camera from './icons/camera'
import CashSign from './icons/cashSign'
import CashSign2 from './icons/cashSign2'
import Check from './icons/check'
import ChevronDown from './icons/chevronDown'
import ChevronLeft from './icons/chevronLeft'
import ChevronRight from './icons/chevronRight'
import ChevronUp from './icons/chevronUp'
import Clock from './icons/clock'
import Close from './icons/close'
import Drag from './icons/drag'
import Envelope from './icons/envelope'
import Eye from './icons/eye'
import EyeSlash from './icons/eyeSlash'
import Facebook from './icons/facebook'
import File1 from './icons/file1'
import File2 from './icons/file2'
import Globe from './icons/globe'
import Grid from './icons/grid'
import Hamburguer from './icons/hamburguer'
import Heart from './icons/heart'
import HelpCircle from './icons/helpCircle'
import Home from './icons/home'
import Image from './icons/image'
import Information from './icons/information'
import InformationTriangle from './icons/informationTriangle'
import Instagram from './icons/instagram'
import Link from './icons/link'
import Linkedin from './icons/linkedin'
import List from './icons/list'
import Loading from './icons/loading'
import Lock from './icons/lock'
import Login from './icons/login'
import Minus from './icons/minus'
import MoreHorizontal from './icons/moreHorizontal'
import MoreVertical from './icons/moreVertical'
import Pen from './icons/pen'
import Percent from './icons/percent'
import Phone from './icons/phone'
import PinLocation from './icons/pinLocation'
import Play from './icons/play'
import Plus from './icons/plus'
import Search from './icons/search'
import Settings from './icons/settings'
import Shield from './icons/shield'
import StarEmpty from './icons/starEmpty'
import StarFilled from './icons/starFilled'
import TikTok from './icons/loading'
import Trash from './icons/trash'
import Truck from './icons/truck'
import Twitter from './icons/twitter'
import User1 from './icons/user1'
import User2 from './icons/user2'
import Youtube from './icons/youtube'

const ICON_SIZE_BY_SIZE: Record<iIconSizes, string> = {
  XXXS: '12px',
  XXS: '14px',
  XS: '16px',
  SM: '20px',
  MD: '24px',
  LG: '32px',
}

const SVG_COMPONENT: Record<iIconTypes, any> = {
  app: AppIcon,
  bag: Bag,
  bell: Bell,
  block: Block,
  brench1: Brench1,
  brench2: Brench2,
  calendar: Calendar,
  camera: Camera,
  cashSign: CashSign,
  cashSign2: CashSign2,
  check: Check,
  chevronDown: ChevronDown,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  chevronUp: ChevronUp,
  clock: Clock,
  close: Close,
  drag: Drag,
  envelope: Envelope,
  eye: Eye,
  eyeSlash: EyeSlash,
  facebook: Facebook,
  file1: File1,
  file2: File2,
  globe: Globe,
  grid: Grid,
  hamburguer: Hamburguer,
  heart: Heart,
  helpCircle: HelpCircle,
  home: Home,
  image: Image,
  information: Information,
  informationTriangle: InformationTriangle,
  instagram: Instagram,
  link: Link,
  linkedin: Linkedin,
  list: List,
  loading: Loading,
  lock: Lock,
  login: Login,
  minus: Minus,
  moreHorizontal: MoreHorizontal,
  moreVertical: MoreVertical,
  pen: Pen,
  percent: Percent,
  pinLocation: PinLocation,
  phone: Phone,
  play: Play,
  plus: Plus,
  search: Search,
  settings: Settings,
  shield: Shield,
  starEmpty: StarEmpty,
  starFilled: StarFilled,
  tiktok: TikTok,
  trash: Trash,
  truck: Truck,
  twitter: Twitter,
  user1: User1,
  user2: User2,
  youtube: Youtube,
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

  const Svg = SVG_COMPONENT[iconId];

  return (
    <IconWrapper {..._props}>
      <Svg {..._props} />
    </IconWrapper>
  )
}
