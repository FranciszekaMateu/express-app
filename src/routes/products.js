const { Router } = require('express')
const router = Router()
const productsModel = require("../dao/models/products.model")
router.post('/', (req, res) =>{
    const {name, price} = request.body
    response.status(200).send({name, price})
})
router.get('/', async (req, res) =>{
    let { limit = 10, page1 = 1, sort, query } = req.query;
    try {
        let sortOptions = { price: sort === 'asc' ? 1 : -1 };   
        const { docs, hasNextPage, totalPages,hasPrevPage,page } = await productsModel
            .paginate(query, {
                sort: sortOptions,
                page: page1,
                limit: limit,
                lean : true
            });
        const prevLink = hasPrevPage ? `?sort=${sort}&page=${currentPage - 1}&query=${query}&limit=${limit}` : null;
        const nextLink = hasNextPage ? `?sort=${sort}&page=${currentPage + 1}&query=${query}&limit=${limit}` : null;
        res.status(200).render("products",{
            status:"succes",
            payload : docs,
            totalDocs: totalDocs,
            totalPages: totalPages,
            hasPrevPage,
            hasNextPage,
            nextLink,
            prevLink,
            page1
        });
    } catch (error) {
        res.send({
            status: "error"
        })
        console.log(error)
    }
})
router.post("/insertar",async (req,res) =>
{

})
module.exports = router
