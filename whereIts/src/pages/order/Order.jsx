import Orderbutton from '../../components/orderbutton/Orderbutton'
import Orderoverview from '../../components/orderoverview/Orderoverview'
import Ordersum from '../../components/ordersum/Ordersum'
import './order.css'

function Order() {
  return (
    <>
    <h1 className="order-header">Order</h1>
    <Orderoverview />
    <Ordersum />
    <Orderbutton />
    </>
  )
}

export default Order