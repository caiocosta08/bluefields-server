import Order from '../models/Order';
import Shop from '../models/Shop';

class OrderController {

  async index(req, res) {
    try {
      const orders = await Order.findAll({
        include: [
          { association: 'orders_list' },
        ]
      });

      if (orders.length === 0) {
        return res.json({
          message: 'not registers'
        })
      }

      return res.json(orders)
    } catch (err) {
      return res.status(400).json({
        error: 'Error loading subcategories',
        message: String(err)
      });
    }
  }

  async show(req, res) {
    const id = req.params.id;
    const { owner_id } = req.body;

    if (!owner_id || !id) {
      return res.status(400).json({ error: 'Id or owner id not provided' });
    }

    try {

      const shop = await Shop.findOne(
        {
          where: { owner_id }
        }
      );

      if (!shop) {
        return res.status(400).json({
          error: 'not associate Shop to user'
        })
      }

      const order = await Order.findOne({
        where: {
          id,
          shop_id: shop.id
        },
        include: [
          { association: 'orders_list' },
        ]
      });

      if (!order) {
        return res.status(401).json({ error: 'order not found for user' })
      }

      return res.json(order);
    } catch (err) {
      return res.status(401).json({
        error: 'Error loading order ',
        message: String(err)
      });
    }
  }

  async getById(req, res) {
    const id = req.body.id;

    if (!id) {
      return res.status(400).json({ error: 'Id not provided' });
    }

    try {

      const order = await Order.findOne({
        where: {
          id
        },
        include: [
          { association: 'orders_list' },
        ]
      });

      if (!order) {
        return res.status(401).json({ error: 'order not found for user' })
      }

      return res.json(order);
    } catch (err) {
      return res.status(401).json({
        error: 'Error loading order ',
        message: String(err)
      });
    }
  }

  async getAllByShopId(req, res) {
    const shop_id = req.body.shop_id;

    if (!shop_id) {
      return res.status(400).json({ error: 'Shop id not provided' });
    }

    try {

      const order = await Order.findAll({
        where: {
          shop_id
        },
        include: [
          { association: 'orders_list' },
        ]
      });

      if (!order) {
        return res.status(401).json({ error: 'order not found for user' })
      }

      return res.json(order);
    } catch (err) {
      return res.status(401).json({
        error: 'Error loading order ',
        message: String(err)
      });
    }
  }

  async store(req, res) {
    const { owner_id } = req.body;

    if (!owner_id) {
      return res.status(400).json({ error: 'Owner id not provided' });
    }

    try {

      const shop = await Shop.findOne(
        {
          where: { owner_id }
        }
      );

      if (!shop) {
        return res.status(400).json({
          error: 'not associate Shop to user'
        })
      }

      req.body.shop_id = shop.id;

      const order = await Order.create(req.body);

      return res.json(order)
    } catch (err) {

      return res.status(400).json({
        error: 'Registration failed!',
        message: String(err)
      })
    }
  }

  async update(req, res) {

    const id = req.params.id;
    const { owner_id } = req.body;

    if (!owner_id || !id) {
      return res.status(400).json({ error: 'Id or owner id not provided' });
    }


    try {

      const shop = await Shop.findOne(
        {
          where: { owner_id }
        }
      );

      if (!shop) {
        return res.status(400).json({
          error: 'not associate Shop to user'
        })
      }

      const order = await Order.findOne({
        where: {
          id,
          shop_id: shop.id
        },
        include: [
          { association: 'orders_list' },
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
        message: err
      })
    }
  }

  async destroy(req, res) {
    const id = req.params.id;
    const { owner_id } = req.body;

    if (!owner_id || !id) {
      return res.status(400).json({ error: 'Id or owner id not provided' });
    }

    try {

      const shop = await Shop.findOne(
        {
          where: { owner_id }
        }
      );

      if (!shop) {
        return res.status(400).json({
          error: 'not associate Shop to user'
        })
      }

      const order = await Order.findOne({
        where: {
          id,
          shop_id: shop.id
        },
        include: [
          { association: 'orders_list' },
        ]
      });


      await order.destroy()

      return res.json({ message: 'Order removed successfull' })
    } catch (err) {
      return res.status(401).json({
        error: 'Error remove address. ',
        message: String(err)
      });
    }
  }

}

export default new OrderController();