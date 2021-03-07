import React, { useState, useEffect } from "react"
import { Link, navigate } from "gatsby"
import { AuthorContent, Name, Title } from "../styled/Author"
import { NavLinkContainer, NavLink, Navi } from "../styled/Navigation"
import MenuIcon from "../styled/MenuIcon"
import { links } from "../redux/const"
import { useStore } from "../redux/redux"

function Navigation({ root, page }) {
  const [is_root, setIsRoot] = useState(false || root)
  const [menu, switchMenu] = useState(false)
  const [store, actions] = useStore()
  const handleLink = (e, link) => {
    e.preventDefault()
    if(link === page) return 0;
    if (is_root) {
      if (link !== "/") {
        setIsRoot(false)
        setTimeout(() => {
          actions.changePage(true)
          actions.setNextPage(link)
        }, 500)
        setTimeout(() => {
          navigate(`/${link.toLowerCase()}`)
        }, 900)
      }
    } else {
      actions.changePage(true)
      actions.setNextPage(link)
      link === "/" && setIsRoot(true)
      setTimeout(() => {
        link === "/"
        ? navigate(`/`)
        : navigate(`/${link.toLowerCase()}`)
      }, 500)
    }
  }
  useEffect(() => {
    actions.changePage(false)
  }, [])
  return (
    <Navi isRoot={is_root} menu={menu} id="navi">
      <AuthorContent isRoot={is_root} menu={menu} id="author_container">
        <Link onClick={e => handleLink(e, "/")} to="/">
          <Name isRoot={is_root} menu={menu}>
            Michał <br />
            Wiśniewski
          </Name>
        </Link>
        <Title isRoot={is_root} menu={menu}>
          javascript <br />
          enthusiast
        </Title>
      </AuthorContent>
      <NavLinkContainer isRoot={is_root} menu={menu}>
        {links.map((link, i) => (
          <Link
            key={i}
            id={link}
            onClick={e => handleLink(e, link)}
            to={`/${link.toLowerCase()}`}
          >
            <NavLink
              index={i}
              next_page={store.next_page || page}
              menu={menu}
              isRoot={is_root}
              current={Boolean(page === link)}
            >
              {link}
            </NavLink>
          </Link>
        ))}
      </NavLinkContainer>
      <input 
        type="checkbox" 
        id="menu_checkbox" 
        style={{ display: "none" }}
        onChange={() => { actions.changePage(!menu); switchMenu(menu => !menu)} }
      />
      <MenuIcon isRoot={is_root} menu={menu} />
    </Navi>
  )
}

export default Navigation
