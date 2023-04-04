import React, { useState } from 'react'
import { Input,SelectPicker } from 'rsuite';
import Button from '../Button';
import { GlobalContext } from '../../GlobalContext/GlobalContext'
function EditProduct() {
    const { loading, editProduct, getProducts, productDetails } = React.useContext(GlobalContext)
    const [productName, setProductName] = useState("")
    const [customerName, setCustomerName] = useState("")
    const [productLocation, setProductLocation] = useState("")
    const [customerEmail, setCustomerEmail] = useState("")
    const [productDescription, setProductDescription] = useState("")
    const [status, setStatus] = useState(4)
    const [trackingId,setTrackingId] = useState("")
    const [quantity,setQuantity] = useState(null)
    const [date,setDate] = useState("")


    React.useEffect(() => {
        console.log("pra",productDetails)
        setProductName(productDetails.productName)
        setCustomerName(productDetails.customerName)
        setProductLocation(productDetails.productLocation)
        setCustomerEmail(productDetails.customerEmail)
        setProductDescription(productDetails.productDescription)
        setStatus(productDetails.status)
        setTrackingId(productDetails.productId)
        setQuantity(productDetails.productQuantity)
        setDate(productDetails.date)
    }, [productDetails])

    const statuses = [
        {
            label:'Confirmed Order',
            value:1,
            confirmedOrder:true,
            processingOrder:false,
            qualityCheck:false,
            productDispatched:false,
            productDelivered:false

        },
        {
            label:'Processing Order',
            value:2,
            confirmedOrder:true,
            processingOrder:true,
            qualityCheck:false,
            productDispatched:false,
            productDelivered:false

        },
        {
            label:'Quality Check',
            value:3,
            confirmedOrder:true,
            processingOrder:true,
            qualityCheck:true,
            productDispatched:false,
            productDelivered:false

        },
        {
            label:'Product Dispatched',
            value:4,
            confirmedOrder:true,
            processingOrder:true,
            qualityCheck:true,
            productDispatched:true,
            productDelivered:true

        },
        {
            label:'Product Delivered',
            value:5,
            confirmedOrder:true,
            processingOrder:true,
            qualityCheck:true,
            productDispatched:true,
            productDelivered:true

        },
    ]
    return (
        <div>

            <div>
                <div className="my-5 mx-3">
                    <label>Tracking ID</label>
                    <Input
                    // disabled
                        value={trackingId}
                         className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" placeholder="Customer Email" />
                </div>
                <div className="my-5 mx-3">
                    <label>Product Name</label>
                    <Input
                        value={productName}
                        onChange={e => {
                            setProductName(e)
                        }} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" placeholder="Customer Email" />
                </div>
                <div className="my-5 mx-3">
                    <label>Quantity</label>
                    <Input
                        value={quantity}
                        onChange={e => {
                            setQuantity(e)
                        }} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" placeholder="Product Quantity" />
                </div>
                <div className="my-5 mx-3">
                        <label>Date</label>
                        <Input value={date} type="date" onChange={e => { setDate(e); }} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" placeholder="Quantity" />
                    </div>
                <div className="my-5 mx-3">
                    <label>Customer Name</label>

                    <Input value={customerName} onChange={e => { setCustomerName(e); }} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" placeholder="Customer Name" />


                </div>
                <div className="my-5 mx-3">
                    <label>Customer Email</label>
                    <Input value={customerEmail} onChange={e => { setCustomerEmail(e); }} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" placeholder="Customer Email" />

                </div>
                <div className="my-5 mx-3">
                    <label>Product Location</label>
                    <Input value={productLocation} onChange={e => { setProductLocation(e); }} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" placeholder="Product Location" />

                </div>
                <div className="my-5 mx-3">
                    <label>Product Status</label>
                    <SelectPicker data={statuses} block value={status} onChange={e => { setStatus(e); }} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" placeholder="Product Status" />

                </div>

                <div className="my-5 mx-3">
                    <label>Product Description</label>
                    <Input value={productDescription} onChange={e => { setProductDescription(e) }} as="textarea" placeholder="Product Description" rows={3} />

                </div>
                <div className="my-5 mx-3 flex ">

                    <Button
                        disabled={loading ? true : false}
                        onClick={() => {
                            editProduct({
                                productName: productName,
                                customerName: customerName,
                                customerEmail: customerEmail,
                                productLocation: productLocation,
                                productDescription: productDescription,
                                status: status,
                                productQuantity: quantity,
                                date:date
                            })
                        }}
                    >{loading ? 'Updating...' : 'Update'}</Button>
                </div>
            </div>
        </div>
    )
}

export default EditProduct