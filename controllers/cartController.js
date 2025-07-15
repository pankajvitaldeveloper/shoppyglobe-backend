const CartItem = require('../models/CartItem');
const Product = require('../models/Product');

exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  const product = await Product.findById(productId);
  if (!product) return res.status(404).json({ msg: 'Product not found' });

  const existingItem = await CartItem.findOne({ userId: req.user.id, productId });

  if (existingItem) {
    existingItem.quantity += quantity;
    await existingItem.save();
    return res.json(existingItem);
  }

  const newItem = new CartItem({ userId: req.user.id, productId, quantity });
  await newItem.save();
  res.status(201).json(newItem);
};

exports.updateCartItem = async (req, res) => {
  const { quantity } = req.body;
  const cartItem = await CartItem.findOne({ _id: req.params.id, userId: req.user.id });

  if (!cartItem) return res.status(404).json({ msg: 'Item not found' });

  cartItem.quantity = quantity;
  await cartItem.save();
  res.json(cartItem);
};

exports.deleteCartItem = async (req, res) => {
  const item = await CartItem.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
  if (!item) return res.status(404).json({ msg: 'Item not found' });
  res.json({ msg: 'Item deleted' });
};
