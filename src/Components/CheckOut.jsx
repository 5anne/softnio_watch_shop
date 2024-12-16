import React from 'react';

const CheckOut = ({ addedItems }) => {
    console.log(addedItems);
    return (
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
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
                                addedItems?.map((item, index) => {
                                    item?.qnt > 0 &&
                                        < tr key={index} className='text-black' >
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
                                            <td>{item.size}</td>
                                            <td>{item.qnt}</td>
                                            <td>${item.price}</td>
                                        </tr>

                                })
                            }
                        </tbody>
                        {/* foot */}
                        <tfoot>
                            <tr className='text-black font-bold'>
                                <th>Total</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn btn-outline mr-4">Continue Shopping</button>
                        <button className="btn bg-[#6576FF] text-white">Checkout</button>
                    </form>
                </div>
            </div>
        </dialog >
    );
};

export default CheckOut;