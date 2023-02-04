import { useEffect, useRef, useState } from "react"

function CustomizeBtn(){

  let [isOpen, setIsOpen] = useState(false)
  let [attachClass, setAttachClass] = useState("")
  let [currentTheme, setCurrentTheme] = useState(["",""])
  let [themeList] = useState(["pp", "tt"])
  // 리덕스로 themeList 빼서 Theme-pp 관련 하드코딩 되어있는 곳 다 수정해야 함.

  let clickRef = useRef()

  function clickOutside(e){
    if (isOpen && !clickRef.current.contains(e.target)) {
      setIsOpen(false)
    }
  }

  useEffect(()=>{
    if (isOpen){setAttachClass("customize-show")} else { setAttachClass("") }
  }, [isOpen])

  useEffect(()=>{
    if (isOpen) document.addEventListener('mousedown', clickOutside)
    return () => {
      document.removeEventListener('mousedown', clickOutside)
    }
  })

  // useEffect(()=>{
  //   setCurrentTheme(["pp",""])
  // })

  return (
    <div ref={clickRef} className="customize-btn-wrapper">
      <div className={`customize-close ${attachClass}`}>
        {
          themeList.map((themeElement, index)=>
            <li className={`link ${currentTheme[index]}`} onClick={()=>{
              let themeIndex = themeList.findIndex( el => el === themeElement )
              let newArray = ["",""]
              newArray[themeIndex] = `theme-${themeElement} bold`
              setCurrentTheme(newArray)
            }} key={index}>{themeElement.toUpperCase()}</li>
          )
        }
      </div>
      <button className="customize-btn" onClick={()=>{
          setIsOpen(!isOpen)
      }}>테마 선택</button>
    </div>
  )
}

export default CustomizeBtn