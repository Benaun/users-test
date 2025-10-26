import { ArrowLeft } from './Icons/ArrowLeft'
import { Dots } from './Icons/Dots'
import { Favorites } from './Icons/Favorites'
import { Notification } from './Icons/Notification'

const icons = {
  favorites: Favorites,
  arrowLeft: ArrowLeft,
  dots: Dots,
  notification: Notification
}

interface IconProps extends React.HTMLAttributes<SVGElement> {
  name: keyof typeof icons
}

export const Icon = ({ name, ...props }: IconProps) => {
  const IconComponent = icons[name]

  return <IconComponent {...props} />
}
