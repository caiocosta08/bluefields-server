import OrderList from '../models/OrderList';
import Product from '../models/Product';

class OrderController {

  async show(req, res) {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ error: 'Id not provided' });
    }

    try {


      const orderList = await OrderList.findByPk(id, {
        include: [
          // { association: 'order'},
        ]
      });

      if (!orderList) {
        return res.status(401).json({ error: 'orderList not found for user' })
      }

      return res.json(orderList);
    } catch (err) {
      return res.status(401).json({
        error: 'Error loading orderList ',
        message: String(err)
      });
    }
  }

  async store(req, res) {

    try {

      const { product_id, quantity } = req.body;
  
      if (!product_id || !quantity) {
        return res.status(400).json({ error: 'Product id or quantity not provided' });
      }

      const product = await Product.findByPk(product_id);

      if (!product) {
        return res.status(400).json({
          error: 'product not found',
        })
      }

      if ((product.available_quantity - quantity) < 0) {
        return res.status(401).json({
          error: 'Stock quantity error',
          message: `insufficient quantity of product in stock. Total:${product.available_quantity}`
        })
      }

      product.available_quantity -= quantity;

      product.save();

      const orderList = await OrderList.create(req.body);

      return res.json(orderList)
    } catch (err) {
      return res.status(400).json({
        error: 'Registration failed!',
        message: String(err)
      })
    }
  }

  async update(req, res) {

    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ error: 'Id not provided' });
    }

    try {

      const order = await OrderList.findByPk(id, {
        include: [
          { association: 'order' },
        ]
      });

      if (!order) {
        return res.status(401).json({ error: 'order not found for user' })
      }

      const orderUpdated = await order.update(req.body);

      return res.json(orderUpdated)
    } catch (err) {
      return res.status(400).json({
        error: 'Update error',
        message: String(err)
      })
    }
  }


}

export default new OrderController();