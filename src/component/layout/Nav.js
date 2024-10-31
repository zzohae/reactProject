import Mainlogo from "./svg/Mainlogo";
import styled from 'styled-components';
const StyledButton = styled.a`
  background-color: ${(props) => (props.primary ? '#fff100' : '#ddd')};
  padding: 10px 30px;
  color: #333;
  font-size: 14px;
  font-weight: 500;
  border-radius: 0.375rem;
  transition: 0.3s;

  &:hover {
    background-color: ${(props) => (props.primary ? '#FFDD00' : '#fff100')};
  }
`;

function Nav() {
  return (
    <header id="header" className="header d-flex align-items-center">
    <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

      <a href="index.html" className="logo me-lg-0 col-2">
      <Mainlogo></Mainlogo>
      </a>

      <nav id="navmenu" className="navmenu d-flex">
        <ul className='d-flex align-items-center m-0 p-0'>
        <li className="position-relative"><a href="#">
          <span className="fs-16">잇그린 소개</span></a>
        </li>
        <li className="position-relative"><a href="#">
          <span className="fs-16">리턴잇 서비스</span></a>
        </li>
        <li className="position-relative"><a href="#">
          <span className="fs-16">이용안내</span></a>
        </li>
        <li className="position-relative"><a href="#">
          <span className="fs-16">잇그린 소식</span></a>
        </li>
        </ul>
      </nav>

      <div className="d-flex btnwrap">
        <StyledButton href="#">반납하기</StyledButton>
        <StyledButton primary href="#">문의하기</StyledButton>
      </div>


    </div>
  </header>
  )
}

export default Nav;