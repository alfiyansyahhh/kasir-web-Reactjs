import { useMediaQuery } from 'react-responsive'

const Desktop1 = ({ children }) => {
  const isDesktop1 = useMediaQuery({ minWidth: 1681, maxWidth: 1920})
  return isDesktop1 ? children : null
}
const Desktop2 = ({ children }) => {
  const isDesktop2 = useMediaQuery({ minWidth: 1601, maxWidth: 1680})
  return isDesktop2 ? children : null
}
const Desktop3 = ({ children }) => {
  const isDesktop3 = useMediaQuery({ minWidth: 1441, maxWidth: 1600})
  return isDesktop3 ? children : null
}
const Desktop4 = ({ children }) => {
  const isDesktop3 = useMediaQuery({ minWidth: 1367, maxWidth: 1440})
  return isDesktop3 ? children : null
}
const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992, maxWidth: 1366})
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}

const Responsive = () => (
  <div className="Responsive">
    <Desktop1>
        1920        
    </Desktop1>
    <Desktop2>
        1680
    </Desktop2>
    <Desktop3>
        1600
    </Desktop3>
    <Desktop4>
        1440
    </Desktop4>
    <Desktop>
      Desktop or laptop
    </Desktop>
    <Tablet>
      Tablet
    </Tablet>
    <Mobile>
      Mobile
    </Mobile>     
  </div>
)

export default Responsive