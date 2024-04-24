import { createQueryObject } from "../helpers/helper"
import { FaListUl } from "react-icons/fa"
import styles from "./SideBar.module.css"
import { categories } from "../constants/list"

function SideBar({query, setQuery}) {

    const categoryHandler = (event) => {
        const {tagName} = event.target
        const category = event.target.innerText.toLowerCase()
        setQuery((query) => createQueryObject(query, {category}))
  
        if (tagName !== "LI") return
      }
  return (
    <div className={styles.sideBar}>
        <div>
            <FaListUl/>
            <p>Categories</p>
        </div>
    <ul onClick={categoryHandler}>
        {categories.map((item) => (
            <li
                key={item.id}
                className={item.type.toLowerCase() === query.category ? styles.selected : null}>
                {item.type}
            </li>
        ))}
    </ul>
  </div>
  )
}

export default SideBar