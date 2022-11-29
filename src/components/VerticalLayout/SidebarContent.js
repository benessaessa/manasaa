import PropTypes from "prop-types"
import React, { useEffect, useRef ,useState } from "react"

// //Import Scrollbar
import SimpleBar from "simplebar-react"

// MetisMenu
import MetisMenu from "metismenujs"
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom"

//i18n
import { withTranslation } from "react-i18next"

const SidebarContent = props => {
  const [showList,setShowList]=useState(false)
  const ref = useRef()
  // Use ComponentDidMount and ComponentDidUpdate method symultaniously
  useEffect(() => {
    const pathName = props.location.pathname

    const initMenu = () => {
      new MetisMenu("#side-menu")
      let matchingMenuItem = null
      const ul = document.getElementById("side-menu")
      const items = ul.getElementsByTagName("a")
      for (let i = 0; i < items.length; ++i) {
        if (pathName === items[i].pathname) {
          matchingMenuItem = items[i]
          break
        }
      }
      if (matchingMenuItem) {
        activateParentDropdown(matchingMenuItem)
      }
    }
    initMenu()
  }, [props.location.pathname])

  useEffect(() => {
    ref.current.recalculate()
  })

  function scrollElement(item) {
    if (item) {
      const currentPosition = item.offsetTop
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300
      }
    }
  }

  function activateParentDropdown(item) {
    item.classList.add("active")
    const parent = item.parentElement
    const parent2El = parent.childNodes[1]
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show")
    }

    if (parent) {
      parent.classList.add("mm-active")
      const parent2 = parent.parentElement

      if (parent2) {
        parent2.classList.add("mm-show") // ul tag

        const parent3 = parent2.parentElement // li tag

        if (parent3) {
          parent3.classList.add("mm-active") // li
          parent3.childNodes[0].classList.add("mm-active") //a
          const parent4 = parent3.parentElement // ul
          if (parent4) {
            parent4.classList.add("mm-show") // ul
            const parent5 = parent4.parentElement
            if (parent5) {
              parent5.classList.add("mm-show") // li
              parent5.childNodes[0].classList.add("mm-active") // a tag
            }
          }
        }
      }
      scrollElement(item);
      return false
    }
    scrollElement(item);
    return false
  }

  return (
    <React.Fragment>
      <SimpleBar style={{ maxHeight: "100%" }} ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">{props.t("Menu")} </li>
            <li>
              <Link to="/admin/dashboard" className="waves-effect">
                <i className="bx bx-home-circle"></i>
                <span>الرئيسية</span>
              </Link>
            </li>
            <li>
              <Link Link to='/#'  onClick={(e)=>{
                e.preventDefault()
                setShowList(c=>!c)
              }}
                className='has-arrow waves-effect'>
                <i className='bx bxs-book'></i>
                <span>المهارات</span>
              </Link>
              {showList && 
              <ul className='sub-menu' aria-expanded='false'>
                <li>
                  <Link Link to={`/admin/edit-text`}>
                    <i className='bx bx-edit'></i>
                    <span>تحرير النص</span> 
                  </Link>
                  <Link to={`/admin/edit-voice`}>
                    <i className='fa fa-microphone'></i>
                    <span>تحرير الصوت</span>
                  </Link>
                  <Link to={`/admin/edit-image`}>
                    <i className='bx bxs-image'></i>
                    <span>تحرير صورة</span>
                  </Link>
                  <Link to={`/admin/vedio`}>
                    <i className='bx bxs-video'></i>
                    <span>انتاج فيديو</span>
                  </Link>
                  <Link to={`/admin/show`}>
                    <i className='bx bx-book'></i>
                    <span>عمل عرض تقديمي</span>
                  </Link>
                  <Link to={`/admin/save`}>
                    <i className='bx bx-share'></i>
                    <span>الحفظ والمشاركة</span>
                  </Link>
                </li>
              </ul>
              }
            </li>
            {/* <li>
              <Link to="/skills" className="waves-effect">
                <i className="bx bx-briefcase"></i>
                <span>المهارات</span>
              </Link>
            </li> */}
            <li>
              <Link to="/admin/lessons" className="waves-effect">
                <i className="bx bx-book"></i>
                <span>الدروس</span>
              </Link>
            </li>
            <li>
              <Link to="/slices" className="waves-effect">
                <i className="bx bx-file"></i>
                <span>الأجزاء</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/items" className="waves-effect">
                <i className="bx bx-briefcase"></i>
                <span>النتائج</span>
              </Link>
            </li>
            <li>
              <Link to="/items" className="waves-effect">
                <i className="fa fa-file-invoice"></i>
                <span>التقارير</span>
              </Link>
            </li>
          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  )
}

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(SidebarContent))
