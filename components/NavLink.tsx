import { Dispatch, ReactNode, SetStateAction } from 'react'

interface Props {
  scrollTo: string
  children: ReactNode
  setOpen: Dispatch<SetStateAction<boolean>>
}

const NavLink = ({ scrollTo, children, setOpen }: Props) => {
  const handleClick = () => {
    const section = document.querySelector(`#${scrollTo}`)
    section?.scrollIntoView()
    setOpen(false)
  }

  return <a onClick={handleClick}>{children}</a>
}

export default NavLink
