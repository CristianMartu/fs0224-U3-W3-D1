import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Shop = () => {
  const favouriteJobLength = useSelector((state) => state.favouriteJob.content.length)

  return (
    <Link to="/favourites" className="btn btn-primary">
      <FaShoppingCart />
      <span className="ms-2">{favouriteJobLength}</span>
    </Link>
  )
}
export default Shop
