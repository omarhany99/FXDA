import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    return res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: "simple name",
    price: 0,
    user: req.user._id,
    image: "/image/sample.jpg",
    brand: "simple brand",
    category: "simpe cetagory",
    countInStock: 0,
    numReviews: 0,
    description: "Sample description",
  });
  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, brand, category, countInStock } =
    req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await Product.deleteOne({ _id: product._id });
    res.json({ message: "Product Removed" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});
// @desc    Create new review
// @route   POST /api/products/:id/reviews
// @access  Private
const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    );

    if (alreadyReviewed) {
      res.status(400);
      throw new Error("Product already reviewed");
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    };

    product.reviews.push(review);

    product.numReviews = product.reviews.length;

    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length;

    await product.save();
    res.status(201).json({ message: "Review added" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});
// const deleteReview = asyncHandler(async (req, res) => {
//   const product = await Product.findById(req.params.id);

//   product.reviews = product.reviews.filter(
//     (r) => r._id !== req.params.reviewId
//   );

//   await product.save();

//   res.status(200).json({ message: "Review deleted" });
// });
const deleteReview = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  product.reviews = product.reviews.filter(
    (r) => r._id !== req.params.reviewId
  );

  await product.save();

  res.status(200).json({ message: "Review deleted" });
});

// // Delete review
// const deleteReview = asyncHandler(async (req, res) => {
//   const product = await Product.findById(req.params.id);

//   const review = product.reviews.find((r) => r._id == req.params.reviewId);
//   if (product) {
//     product.reviews = product.reviews.filter((r) => r._id !== reviewId);
//     //   (review) => review._id.toString() !== req.query.reviewId
//     // );

//     const numReviews = reviews.length;

//     // recalculate rating
//     let rating = reviews.reduce((a, c) => a + c.rating, 0) / numReviews;

//     product.reviews = reviews;
//     product.numReviews = numReviews;
//     product.rating = rating;

//     await product.save();

//     res.status(200).json({ message: "Review deleted" });
//   } else {
//     res.status(404);
//     throw new Error("Product not found");
//   }
// });
export {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  deleteReview,
};
