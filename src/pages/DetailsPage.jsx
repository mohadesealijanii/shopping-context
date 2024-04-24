import { Link, useParams } from "react-router-dom"
import { SiOpenproject } from "react-icons/si"
import { IoMdPricetag } from "react-icons/io"
import { FaArrowLeft } from "react-icons/fa" 
import Loader from "../components/Loader"
import { useProductsDetails } from "../context/ProductContext"
import styles from "./DetailsPage.module.css"

function DetailsPage() {
  const { id } = useParams()
  
  const productDetails = useProductsDetails(+id)

  if (!productDetails) return <Loader />
  return (
    <div className={styles.container}>
      <img src={productDetails.image}/>
    <div className={styles.information}>
    <h3 className={styles.title}>{productDetails.title}</h3>
    <p className={styles.description}>{productDetails.description}</p>
    <p className={styles.category}><SiOpenproject/>{productDetails.category}</p>
    <div>
      <span><IoMdPricetag/>{productDetails.price}</span>
      <Link to="/products">
        <FaArrowLeft/>
        <span className={styles.price}>Back To Shop</span>
      </Link>
    </div>
    </div>
    </div>
  )
}

export default DetailsPage