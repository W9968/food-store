import { ReactElement } from 'react'
import { BiMailSend, BiPhone, BiMap } from 'react-icons/bi'

export interface Icontactinfo {
  icon: ReactElement
  text: string
}

export const IcontactInfoArray: Icontactinfo[] = [
  { icon: <BiMailSend />, text: 'contact@anamakhir.tn' },
  { icon: <BiPhone />, text: '(+216) 99-99-99-99' },
  { icon: <BiMap />, text: 'Rue de lac biwa, 1053 TUNIS' },
]
