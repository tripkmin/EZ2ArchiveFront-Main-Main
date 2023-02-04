function Footer(){

  let date = new Date()
  let year = date.getFullYear()

  return(
    <footer>
      <div className="footer">
        <p>본 사이트는 게임 <strong>「EZ2ON REBOOT:R」</strong>의 팬 사이트이며,<br></br>사이트 내 사용된 모든 게임 컨텐츠의 저작권은 <strong>NEONOVICE</strong> 에 있습니다.</p>
        <p>©️ {year} <strong>EZ2ARCHIVE</strong><br></br>© 2020 <strong>NEONOVICE</strong> & ©️ 2011-{year} <strong>SQUARE PIXELS</strong> All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer