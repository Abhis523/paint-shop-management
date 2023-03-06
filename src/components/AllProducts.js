import axios from "axios";
import React, { useState, useEffect } from "react";
import Itemcard from "./Itemcard";


function AllProducts() {

    useEffect(function () {
        axios
            .get("/paintshop/company/details", {
                headers: {
                    "Content-Type": "application/json"
                },
                baseURL: "http://localhost:8081"

            })
            // .then((response) => setCategories(response.data))
            .then((response) => setCompanies(response.data))
            .then((error) => console.log(error));
    }, []);


    // const [categories, setCategories] = useState([])
    const [companies, setCompanies] = useState([])


    // const handleCategory = (event) => {
    const handleCompany = (event) => {
        // const getCategoryId = event.target.value;
        const getCompanyId = event.target.value;
        // console.log(getCategoryId);
        console.log(getCompanyId);
        // setCatId(getCategoryId);
        setCompId(getCompanyId);
    }

    // const [catId, setCatId] = useState('')
    const [compId, setCompId] = useState('')


    useEffect(function () {
        axios
            // .get("/app/subcategory", {
            .get("/paintshop/product/type", {
                headers: {
                    "Content-Type": "application/json"
                },
                baseURL: "http://localhost:8081"

            })
            // .then((response) => setSubCategories(response.data))
            .then((response) => setProductTypes(response.data))
            .then((error) => console.log(error));

    }, []);

    // const [subCategories, setSubCategories] = useState([])
    const [productTypes, setProductTypes] = useState([])

    // const handleSubCategory = (event) => {
    const handleProductType = (event) => {
        // const getSubCatId = event.target.value;
        const getProdTypId = event.target.value;
        // console.log(getSubCatId);
        // console.log(getProdTypId);        
        // setSubCatId(getSubCatId);
        setProdTypId(getProdTypId);
    }

    // const [subCatId, setSubCatId] = useState('');
    const [ProdTypId, setProdTypId] = useState('');


    useEffect(function () {
        axios
            // .get("/app/product", {
            .get("/paintshop/products/allProd", {
                headers: {
                    "Content-Type": "application/json"
                },
                baseURL: "http://localhost:8081"

            })
            // .then((response) => setProducts(response.data))
            .then((response) => setProduct(response.data))
            .then((error) => console.log(error));
    }, []);


    // const [products, setProducts] = useState([]);
    const [product, setProduct] = useState([]);








    return (
        <div>
            <br />
            <div class="container overflow-hidden">
                <div class="row gx-5">
                    <div class="col">
                        <div class="p-3 border bg-light">


                            <ul>
                                {/* <select className="form-control" onChange={(e) => handleCategory(e)} > */}
                                <select className="form-control" onChange={(e) => handleCompany(e)} >
                                    <option value="0" ><span>--Select Company--</span></option>
                                    {
                                    //     categories.map((cat) => (
                                    //         <option key={cat.categoryId} value={cat.categoryId}>
                                    //         {cat.categoryName}
                                    //     </option>
                                    // ))
                                        companies.map((comp) => (
                                            <option key={comp.companyId} value={comp.companyId}>
                                                {comp.companyName}
                                            </option>
                                        ))
                                    }
                                </select>
                            </ul>


                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3 border bg-light">


                            <ul class="menu">
                                {/* <select className="form-control" onChange={(e) => handleSubCategory(e)} > */}
                                <select className="form-control" onChange={(e) => handleProductType(e)} >
                                    <option value="0">--Select TypeOfProducts--</option>
                                    {
                                        // subCategories
                                        productTypes
                                            // .filter(sub => sub.categoryId == catId)
                                            // .map((subcat) => (
                                            //     <option key={subcat.subCategoryId} value={subcat.subCategoryId} >
                                            //         {subcat.subCategoryName}
                                            //     </option>
                                            // ))
                                            .filter(typ => typ.companyId == compId)
                                            .map((prodtype) => (
                                                <option key={prodtype.productTypeId} value={prodtype.productTypeId} >
                                                    {prodtype.productType}
                                                </option>
                                            ))
                                    }
                                </select>
                            </ul>


                        </div>
                    </div>
                </div>
            </div>

            <br /><br /><br />

            <div class="container text-center">

                <div>

                    <div class="row">
                        {
                            // products
                            product
                                // .filter(prodsub => prodsub.subCategoryId == subCatId)
                                // .map((item, index) => {
                                //     return (
                                //         <Itemcard
                                //             id={item.id}
                                //             productName={item.productName}
                                //             price={item.price}
                                //             imagePath={item.imagePath}
                                //             item={item}
                                //             key={index}
                                //         />
                                //     )
                                // })}
                                .filter(prodsub => prodsub.productTypeId == ProdTypId)
                                .map((item, index) => {
                                    return (
                                        <Itemcard
                                            id={item.id}
                                            productName={item.productName}
                                            price={item.price}
                                            imagePath={item.imagePath}
                                            item={item}
                                            key={index}
                                        />
                                    )
                                })}
                    </div>

                </div>
            </div>


        </div>
    );
}

export default AllProducts;








