import React from 'react'

import { iIcon, iIconSizes, iIconTypes } from "."
import { IconWrapper } from './icon.style'

import Search from './icons/search'
import Camera from './icons/camera'
import File1 from './icons/file1'
import File2 from './icons/file2'
import HelpCircle from './icons/helpCircle'
import Lock from './icons/lock'
import Pen from './icons/pen'
import Settings from './icons/settings'
import TikTok from './icons/loading'
import Block from './icons/block'
import Brench2 from './icons/brench2'
import Calendar from './icons/calendar'
import Clock from './icons/clock'
import Drag from './icons/drag'
import Eye from './icons/eye'
import EyeSlash from './icons/eyeSlash'
import InformationTriangle from './icons/informationTriangle'
import Link from './icons/link'
import Loading from './icons/loading'
import Bell from './icons/bell'
import Brench1 from './icons/brench1'
import Home from './icons/home'
import Image from './icons/image'
import Information from './icons/information'
import Login from './icons/login'
import Trash from './icons/trash'
import User2 from './icons/user2'
import X from './icons/X'
import MoreHorizontal from './icons/moreHorizontal'
import ChevronUp from './icons/chevronUp'
import Linkedin from './icons/linkedin'
import StarEmpty from './icons/starEmpty'
import StarFilled from './icons/starFilled'
import List from './icons/list'
import Minus from './icons/minus'
import Truck from './icons/truck'
import Envelope from './icons/envelope'
import MoreVertical from './icons/moreVertical'
import Twitter from './icons/twitter'
import Facebook from './icons/facebook'
import User1 from './icons/user1'
import Globe from './icons/globe'
import Phone from './icons/phone'
import Youtube from './icons/youtube'
import Grid from './icons/grid'
import PinLocation from './icons/pinLocation'
import ChevronLeft from './icons/chevronLeft'
import Hamburguer from './icons/hamburguer'
import Play from './icons/play'
import ChevronRight from './icons/chevronRight'
import Heart from './icons/heart'
import Plus from './icons/plus'
import Instagram from './icons/instagram'
import Check from './icons/check'
import Shield from './icons/shield'
import CashSign from './icons/cashSign'
import ChevronDown from './icons/chevronDown'
import Bag from './icons/bag'

const ICON_SIZE_BY_SIZE: Record<iIconSizes, string> = {
  MD: '32px',
  SM: '24px',
}

const SVG_COMPONENT: Record<iIconTypes, any> = {
  search: Search,
  camera: Camera,
  file1: File1,
  file2: File2,
  twitter: Twitter,
  pinLocation: PinLocation,
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
  minus: Minus,
  truck: Truck,
  envelope: Envelope,
  moreVertical: MoreVertical,
  facebook: Facebook,
  user1: User1,
  globe: Globe,
  phone: Phone,
  youtube: Youtube,
  grid: Grid,
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

  const Svg = SVG_COMPONENT[iconId];

  return (
    <IconWrapper {..._props}>
      <Svg {..._props} />
    </IconWrapper>
  )
}
