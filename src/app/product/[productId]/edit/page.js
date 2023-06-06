

"use client";

import { useParams } from 'next/navigation';
import Layout from "@/components/Layout";
import ProductForm from "@/components/ProductForm";

const EditProductPage = ({ }) => {
    const params = useParams();
    // console.log("params", params);
    return (
        <Layout title="Edit Product">
            <div className="container">
                <h2 className="section-title">Edit Product Page</h2>
                <ProductForm />
            </div>
        </Layout>
    )
}

export default EditProductPage;