// 모듈
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// 레이아웃
import Nav from './component/layout/Nav';
import Footer from './component/layout/Footer';

// 커스터마이징
import './scss/common.scss'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Nav></Nav>
        
        <Footer></Footer>
    </>
);
