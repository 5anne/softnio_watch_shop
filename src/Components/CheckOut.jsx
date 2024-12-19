import React, { useEffect, useState } from 'react';
import "../App.css"

const CheckOut = ({ addedItems }) => {
    const [cartProduct, setCartProduct] = useState([]);
    const [totalProduct, setTotalProduct] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const filteredProduct = addedItems?.filter(item => item.price !== 0)
        setCartProduct(filteredProduct);

        const sum = filteredProduct.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.quantity;
        }, 0);
        setTotalProduct(sum);

        const sumOfPrice = filteredProduct.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.price;
        }, 0);
        setTotalPrice(sumOfPrice);

    }, [])

    const handleCheckOut = () => {
        alert('Your order has been checked out successfully!');
        window.location.reload();
    }

    return (
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle roboto">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Your Cart</h3>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Color</th>
                                <th>Size</th>
                                <th>Qnt</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row */}
                            {
                                cartProduct?.map((item) => (
                                    item.sizenQnt?.map((itemInfo, index) => (
                                        < tr key={index} className='text-black' >
                                            {itemInfo.qnt > 0 &&
                                                <>
                                                    <td>
                                                        <div className="flex items-center gap-3">
                                                            <div className="avatar">
                                                                <div className="mask mask-squircle rounded-none h-10 w-10">
                                                                    <img
                                                                        src={item.image}
                                                                        alt={item.productName} />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="text-sm text-black font-semibold opacity-50">{item.productName}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>{item.color}</td>
                                                    <td>{itemInfo.size}</td>
                                                    <td>{itemInfo.qnt}</td>
                                                    <td>${itemInfo.price}</td>
                                                </>
                                            }
                                        </tr>))
                                ))
                            }
                        </tbody>
                        {/* foot */}
                        <tfoot>
                            <tr className='text-black font-bold text-base'>
                                <th>Total</th>
                                <th></th>
                                <th></th>
                                <th>{totalProduct}</th>
                                <th>${totalPrice}</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn btn-outline mr-4">Continue Shopping</button>
                        <button onClick={handleCheckOut} className="btn bg-[#6576FF] text-white">Checkout</button>
                    </form>
                </div>
            </div>
        </dialog >
    );
};

export default CheckOut;