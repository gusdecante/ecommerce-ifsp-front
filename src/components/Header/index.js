import React, { useState, useEffect } from 'react'
import { Input, Button, DropDown, Logo } from 'components'
import { Nav, Link, GreenNumber } from './styles'

const Header = () => {
  const [quantity, setQuantity] = useState(0)
  const [login, setLogin] = useState()
  const [ref, setRef] = useState('/login')
  const [isLogged, setIsLogged] = useState(false)

  const handleLogin = () => {
    let localCart = localStorage.getItem('Login')
    if (localCart) {
      setLogin('Logout')
      setRef('/')
      setIsLogged(true)
    } else {
      setLogin('Login')
      setRef('/login')
      setIsLogged(false)
    }
  }
  const handleQuantity = () => {
    if (localStorage.getItem('cart')) {
      setQuantity(JSON.parse(localStorage.getItem('cart')).length)
    }
  }

  const handleChange = (e) => {
    if (login === 'Logout') {
      setLogin('Login')
      e.preventDefault()
      setRef('/login')
      alert('Usuário Saiu da sessão')
      localStorage.removeItem('Login')
    }
  }

  useEffect(() => {
    handleQuantity()
    handleLogin()
  }, [quantity, login, ref])

  return (
    <header>
      <Nav style={{ padding: '0 5vw' }}>
        <div>
          <Logo>MGAJ</Logo>
        </div>
        <div style={{ marginLeft: '20%' }}>
          <Input placeholder="pesquisar por produto..."></Input>
          <Button>Pesquisar</Button>
        </div>
        <div style={{ display: 'flex' }}>
          <Link href="/order">
            <Button>
              Carrinho
              <span role="img" aria-label="sheep">
                &#128722;
              </span>
              <GreenNumber>{quantity}</GreenNumber>
            </Button>
          </Link>
          <Link href={ref} onClick={handleChange}>
            <Button add={isLogged} primary>
              {login}
            </Button>
          </Link>
          <DropDown></DropDown>
        </div>
      </Nav>
    </header>
  )
}

export default Header
