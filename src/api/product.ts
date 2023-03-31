import { IProduct } from "../interfaces/product";
import instence from "./instence"

export const getProducts = () => {
    return instence.get("/products");
}
export const addProduct = (product: IProduct) => {
    return instence.post("/products", product, {
        headers: {
            Authorization: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjU2NDE4NDhmOTc3NjE3NjdmOTAzNyIsImlhdCI6MTY4MDE5NDA5OSwiZXhwIjoxNjgwMjgwNDk5fQ.2o6lx6vTn2P7wQwl-e-AYoJbRIje7kKJSzP5QLyNY2E"
        }
    });
}
export const deleteProducts = (id: string | number) => {
    return instence.delete(`/products/${id}`, {
        headers: {
            Authorization: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjU2NDE4NDhmOTc3NjE3NjdmOTAzNyIsImlhdCI6MTY4MDE5NDA5OSwiZXhwIjoxNjgwMjgwNDk5fQ.2o6lx6vTn2P7wQwl-e-AYoJbRIje7kKJSzP5QLyNY2E"
        }
    });
}