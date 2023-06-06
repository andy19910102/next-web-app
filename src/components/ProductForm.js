import { useState } from "react";
import categoryList from "@/data/category-list";

const ProductForm = ({ onSubmit }) => {
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState(0);
    const [productCategory, setProductCategory] = useState("");

    const renderCategoryList = categoryList.map((category) => {
        return (
            <option key={category.id} value={category.id}>{category.name}</option>
        )
    });

    return (
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="productName" className="form-label">Product Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="productName"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="productPrice" className="form-label">Product Price</label>
                <input
                    type="number"
                    max={100000000}
                    min={0}
                    className="form-control"
                    id="productPrice"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="productCategory" className="form-label">Product Category</label>
                <select value={productCategory} onChange={e => setProductCategory(e.target.value)} id="productCategory" className="form-control" required>
                    <option value="">Select category...</option>
                    {renderCategoryList}
                </select>
            </div>
            <div className="mb-3">
                <button type="submit" className="btn btn-primary">Create Product</button>
            </div>

        </form>
    )
}

export default ProductForm;