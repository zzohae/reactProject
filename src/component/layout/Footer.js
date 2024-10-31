import naverblog from '../../naverblog.svg';

function Footer() {
  return (
    <footer id="footer" className="footer dark-background">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 col-6 footer-about">
            <a href="#" className="logo">
              <span className="sitename me-2"><img src="/img/common/footerlogo.png" alt="잇그린" id="footer-logo" /></span>
            </a>
            <div className="social-links mt-1 mt-sm-0 ms-sm-1 d-sm-inline-block">
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-youtube"></i></a>
              <a href="#"><img src={naverblog} /></a>
            </div>
            <div className="footer-contact pt-3">
              <p>(주)잇그린 | 대표 김뫄뫄 | 서울특별시 구로구 새말로 97 테크노마트 6F 46</p>
              <p>사업자등록번호 000-00-00000</p>
              <p>통신판매업 신고번호 제 2021-서울솨솨-0000</p>
              <p>개인정보보호책임자 : 김이박</p>
              <p><strong>Phone:</strong> <span>(+82)2-2111-2000</span></p>
              <p><strong>&copy; KDT 3기 조해연. All rights reserved.</strong></p>
            </div>
            <div className="footer-links">
              <ul>
                <li><a href="#">개인정보처리방침</a></li>
                <li><a href="#">사업자정보확인</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-6 customer-service">
            <h4 className="fw-600">고객센터</h4>
            <ul>
              <li>전화: 02-2111-2000</li>
              <li>이메일: badahaeyeoncho@gmail.com</li>
              <li><a href="#">카카오톡: 리턴잇 사장님</a></li>
              <li><a href="//open.kakao.com/o/sieJvYWg">카카오톡: 리턴잇 고객센터</a></li>
              <li><a href="./faq.html">자주 묻는 질문</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;