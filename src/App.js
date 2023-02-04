import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route, useNavigate, Outlet } from "react-router-dom"
import { Navbar, Container, Nav } from "react-bootstrap"

import Main from "./routes/Main.js"
import RankOrderSelector from './routes/RankOrderSelector';
import RankOrderList from './routes/RankOrderList.js';
import Footer from './routes/Footer.js'
import MyTier from './routes/MyTier.js'
import CustomizeBtn from './routes/CustomizeBtn.js'
import PleaseSelect from './routes/PleaseSelect';

function App() {
  let navigate = useNavigate()
  return (
    <>
    <div className="main-wrapper">
      {/* 네비게이션 영역 */}

      <Navbar bg="dark" variant="dark" className="z-index-10 navbar pp-navbar">
        <Container>
          <Navbar.Brand href="#home" onClick={()=>{ navigate('/') }}>
            <img src={process.env.PUBLIC_URL + '/navbar/ez2archive_logo.svg'} alt="logo"></img>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#!" onClick={()=>{ navigate('')}} >성과표</Nav.Link>
            <Nav.Link href="#!" onClick={()=>{ navigate('/rank')}} >서열표</Nav.Link>
            <Nav.Link href="#!" onClick={()=>{ navigate('/tier')}} >티어표</Nav.Link>
            <Nav.Link href="#!" onClick={()=>{ navigate('')}} >안내</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#!" onClick={()=>{ navigate('')}} >로그인</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
      <Container>

        {/* 라우트 영역 */}
        <Routes>
          <Route path="/" element={ <Main/> }></Route>
          <Route path="/tier" element={ <><MyTier></MyTier></> }></Route>
          <Route path="/rank" element={ <><RankOrderSelector/> <Outlet></Outlet></>}>
            <Route index element={ <PleaseSelect/> }></Route>
            <Route path="4k/:selectedDifficulty" element={ <><RankOrderList selectedKey="4k"/></> }></Route>
            <Route path="5k/:selectedDifficulty" element={ <><RankOrderList selectedKey="5k"/></> }></Route>
            <Route path="6k/:selectedDifficulty" element={ <><RankOrderList selectedKey="6k"/></> }></Route>
            <Route path="8k/:selectedDifficulty" element={ <><RankOrderList selectedKey="8k"/></> }></Route>
          </Route>
        </Routes>
      </Container>

    </div>

     {/* 푸터 영역 & 커스텀 버튼 영역 */}
     <Container className="float"><Footer/></Container>
     <CustomizeBtn/>
    </>
  );
}

export default App;
