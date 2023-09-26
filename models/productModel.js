
import mongoose, {ObjectId, Schema} from "mongoose"
// Defined Product schema
const productSchema = Schema({
    id: ObjectId,
    name: {
        type: String,
        required: [true, "Please enter product name."]
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: false
    }
},
{
    timestamps: true
}
)

// Create Product model 
const Product = model("Product", productSchema)

export default Product