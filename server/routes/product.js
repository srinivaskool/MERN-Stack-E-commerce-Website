const express = require("express");
const router = express.Router();

const { authCheck, adminCheck } = require("../middlewares/auth");

const {
  create,
  listAll,
  remove,
  read,
  update,
  list,
  getTotal,
  productStar,
  listRelated,
  searchFilters,
} = require("../controllers/product");

// route aka end points
router.post("/product", authCheck, adminCheck, create);
// if u write this down u will get all product details rather than count aso writing up
router.get("/products/total", getTotal);

router.get("/products/:count", listAll);
router.delete("/product/:slug", authCheck, adminCheck, remove);
router.get("/product/:slug", read);
router.put("/product/:slug", authCheck, adminCheck, update);
// pasing parameter in push is easy in post rather than get so use post
router.post("/products", list);

// rating
router.put("/product/star/:productId", authCheck, productStar);

//related
router.get("/product/related/:productId", listRelated);

//search
router.post("/search/filters", searchFilters);

module.exports = router;
