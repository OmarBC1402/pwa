import Logo from '../Logo.png'

export const Pie = () => {
  return (
    <>
    <footer className='text-black'>
    <div>
    <img src={Logo} alt="logo" width="100" className="d-inline-block align-top" />
      <span>Derechos de autor © 2023 AgroInsumos. Todos los derechos reservados.</span>
    </div>
    <div class="social-links">
      <a href="https://facebook.com" target="_blank">Facebook</a>
      <a href="https://twitter.com" target="_blank">Twitter</a>
      <a href="https://instagram.com" target="_blank">Instagram</a>
    </div>
  </footer>
  </>
  )
}
