import Cards from "../components/Cards"
import { useProducts } from "../context/ProductContext"
import styles from "./ProductsPage.module.css"
import Loader from "../components/Loader"
import { useEffect, useState } from "react"
import { searchProducts, filteredProducts, getInitialQuery } from "../helpers/helper"
import { useSearchParams } from "react-router-dom"
import SearchBox from "../components/SearchBox"
import SideBar from "../components/SideBar"

function ProductsPage() {
    const products = useProducts()

    const [display, setDisplay] = useState([])
    const [search, setSearch] = useState("")
    const [query, setQuery] = useState([])

    const [searchParams, setSearhParams] = useSearchParams([])

    useEffect(() => {
      setDisplay(products)
      setQuery(getInitialQuery(searchParams))
    }, [products])

    useEffect(() => {
      setSearhParams(query)
      setSearch(query.search || "")
      let finalProducts = searchProducts(products, query.search)
      finalProducts = filteredProducts(finalProducts, query.category) 
      setDisplay(finalProducts)
    }, [query])

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery}/>
    <div className={styles.container}>
        <div className={styles.products}>
            {!display.length && <Loader/>}
            {display.map((product) => (
            <Cards key={product.id} data={product}/>
        ))}</div>
       <SideBar query={query} setQuery={setQuery}/>
    </div>
    </>
  )
}

export default ProductsPage