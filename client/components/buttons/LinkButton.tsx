import { FC } from 'react'
import Link from 'next/link'
import { RouteButton } from 'styles/button.module'

type Iprops = {
  slug: string
  title: string
}

const LinkButton: FC<Iprops> = ({ slug, title }) => {
  return (
    <Link href={slug} passHref>
      <RouteButton>{title}</RouteButton>
    </Link>
  )
}

export default LinkButton
