import React from 'react'
import { useForm } from 'react-hook-form'
import { IProduct } from '../interfaces/product'
const AddProduct = ({ onadd }) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()
    const onHandleSubmit = (data) => {
        onadd(data)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <div>name</div>
                <input type="text" {...register("name", { required: true })} />
                {errors.name && <span>Can phai nhap ten</span>}
                <div>price</div>
                <input type="text" {...register("price", { required: true })} />
                {errors.price && <span>Can phai nhap gia</span>}
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddProduct
