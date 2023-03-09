const express = require('express');
const { Cart } = require('../dao/models/carts.model');

const router = express.Router();
router.get('/:cid', async (req, res) => {
    try {
      const cart = await Cart.findById(req.params.cid).populate('products.product');
      if (!cart) {
        return res.status(404).send();
      }
      res.render('carts', cart);
    } catch (error) {
      console.error(error);
      res.status(500).send();
    }
  });
// DELETE api/carts/:cid/products/:pid
router.delete('/:cid/products/:pid', async (req, res) => {
    try {
        const cart = await Cart.findByIdAndUpdate(
            req.params.cid,
            { $pull: { products: { _id: req.params.pid } } },
            { new: true }
        );
        if (!cart) {
            return res.status(404).send();
        }
        res.send(cart);
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
});
router.put('/:cid', async (req, res) => {
    try {
        const cart = await Cart.findByIdAndUpdate(
            req.params.cid,
            { products: req.body },
            { new: true }
        );
        if (!cart) {
            return res.status(404).send();
        }
        res.send(cart);
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
});
router.put('/:cid/products/:pid', async (req, res) => {
    try {
        const cart = await Cart.findOneAndUpdate(
            { _id: req.params.cid, 'products._id': req.params.pid },
            { $set: { 'products.$.quantity': req.body.quantity } },
            { new: true }
        );
        if (!cart) {
            return res.status(404).send();
        }
        res.send(cart);
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
});

router.delete('/:cid', async (req, res) => {
    try {
        const cart = await Cart.findByIdAndDelete(req.params.cid);
        if (!cart) {
            return res.status(404).send();
        }
        res.send(cart);
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
});

module.exports = router;
