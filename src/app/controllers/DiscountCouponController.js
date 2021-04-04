import DiscountCoupon from '../models/DiscountCoupon';
import Shop from '../models/Shop';

class DiscountCouponController {

  async getAll(req, res){
    try{

      const discounts = await DiscountCoupon.findAll({
        include: [
          { association: 'shop' },
        ]
      });
  
      if(discounts.length === 0){
        return res.status(400).json({
          message: 'not registers'
        })
      }

      return res.status(200).json(discounts)

    }catch (err){
      return res.status(400).json({
        error: 'error loading Discounts coupons',
        message: String(err)
      })
      
    }
  }

  async getAllWithOwnerId(req, res) {
    try {

      const { owner_id } = req.body

      if (!owner_id) {
        return res.status(400).json({ error: 'Owner id not provided' });
      }

      const shop = await Shop.findOne(
        {
          where: { owner_id }
        }
      );

      const discountsCoupons = await DiscountCoupon.findAll({
        where: {
          shop_id: shop.id,
        },
        include: [
          { association: 'shop' },
        ]
      });

      if (discountsCoupons.length === 0) {
        return res.json({
          message: 'Not registers'
        })
      }

      return res.json(discountsCoupons)
    } catch (err) {
      return res.status(400).json({
        error: 'Error loading discounts Coupons',
        message: String(err)
      });
    }
  }

  async show(req, res) {
    const id = req.params.id;
    const { owner_id } = req.body


    if (!owner_id) {
      return res.status(400).json({ error: 'Owner id not provided' });
    }

    if (!id) {
      return res.status(400).json({ error: 'Id not provided' });
    }

    try {

      const shop = await Shop.findOne(
        {
          where: { owner_id }
        }
      );

      const discountCoupon = await DiscountCoupon.findOne({
        where: {
          id,
          shop_id: shop.id,
        },
        include: [
          { association: 'shop' }
        ]
      });

      if (!discountCoupon) {
        return res.status(401).json({ error: 'discountCoupon not found.' })
      }

      return res.json(discountCoupon);
    } catch (err) {
      return res.status(401).json({
        error: 'Error loading discountCoupon ',
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
          error: 'User with not shop register'
        })
      }

      req.body.shop_id = shop.id;

      const discountCoupon = await DiscountCoupon.create(req.body);

      return res.json(discountCoupon)
    } catch (err) {
      console.log(err)
      return res.status(400).json({
        error: 'Registration failed!',
        message: String(err)
      })
    }
  }

  async update(req, res) {

    const id = req.params.id;
    const { owner_id } = req.body

    if (!owner_id) {
      return res.status(400).json({ error: 'Owner id not provided' });
    }
    if (!id) {
      return res.status(400).json({ error: 'Id not provided' });
    }

    try {

      const shop = await Shop.findOne(
        {
          where: { owner_id }
        }
      );

      const discountCoupon = await DiscountCoupon.findByPk(id, {
        where: { shop_id: shop.id }
      })

      if (!discountCoupon) {
        return res.status(400).json({
          error: 'Discount not found'
        })
      }

      const discountCouponUpdated = await discountCoupon.update(req.body);

      return res.json(discountCouponUpdated)
    } catch (err) {
      return res.status(400).json({
        error: 'Update error',
        message: String(err)
      })
    }
  }

  async destroy(req, res) {
    const id = req.params.id;
    const { owner_id } = req.body

    if (!owner_id) {
      return res.status(400).json({ error: 'Owner id not provided' });
    }
    if (!id) {
      return res.status(400).json({ error: 'Id not provided' });
    }

    try {

      const shop = await Shop.findOne(
        {
          where: { owner_id }
        }
      );

      const discountCoupon = await DiscountCoupon.findByPk(id, {
        where: { shop_id: shop.id }
      })

      if (!discountCoupon) {
        return res.status(400).json({
          error: 'Discount not found'
        })
      }


      discountCoupon.destroy()

      return res.status(200).json({ message: 'Discount removed successfull' });

    } catch (err) {
      return res.status(401).json({
        error: 'Error remove Discount. ',
        message: String(err)
      });
    }
  }

}

export default new DiscountCouponController();