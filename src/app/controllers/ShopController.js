import Shop from '../models/Shop';
import Factory from '../models/Factory';
import User from '../models/User';

class ShopController {

  async index(req, res) {
    try {
      const shops = await Shop.findAll(
        {
          include: [
            { association: 'address' },
            { association: 'owner' },
          ]
        }
      );

      return res.json(shops)
    } catch (err) {
      console.log(err)
      return res.status(400).json({
        error: 'Error loading shops',
        message: String(err)
      });
    }
  }

  async getByOwnerId(req, res) {

    const { owner_id } = req.body;

    if (!owner_id) {
      return res.status(400).json({ error: 'Owner id not provided' });
    }

    try {
      const shop = await Shop.findOne(
        {
          where: { owner_id },
          include: [
            { association: 'address' },
            { association: 'owner' },
          ]
        }
      );

      if (!shop) {
        return res.status(401).json({ error: 'shop not found.' })
      }

      return res.json(shop);
    } catch (err) {
      console.log(err)
      return res.status(401).json({
        error: 'Error loading shop. ',
        message: String(err)
      });
    }
  }

  async getById(req, res) {

    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ error: 'Id not provided' });
    }

    try {
      const shop = await Shop.findOne(
        {
          where: { id },
          include: [
            { association: 'address' },
            { association: 'owner' },
          ]
        }
      );

      if (!shop) {
        return res.status(401).json({ error: 'shop not found.' })
      }

      return res.json(shop);
    } catch (err) {
      console.log(err)
      return res.status(401).json({
        error: 'Error loading shop. ',
        message: String(err)
      });
    }
  }

  async store(req, res) {

    const { owner_id } = req.body

    if (!owner_id) {
      return res.status(400).json({ error: 'Owner id not provided' });
    }

    try {
      const { email, shop_url, cpf_cnpj } = req.body;

      if (!email || !shop_url || !cpf_cnpj) {
        return res.status(400).json({ error: 'Email, shop url or cpf/cnpj not provided' });
      }

      const shopExists = await Shop.findOne({ where: { email } });

      if (shopExists) {
        return res.status(400).json({ error: 'Email already exists.' })
      }

      const urlExists = await Shop.findOne({ where: { shop_url } });

      if (urlExists) {
        return res.status(400).json({ error: 'Shop URL already exists.' })
      }

      const CPF_or_CNPJ_Exists = await Shop.findOne({ where: { cpf_cnpj } });

      if (CPF_or_CNPJ_Exists) {
        return res.status(400).json({ error: 'CPF/CNPJ already exists.' })
      }


      const factory = await Factory.findOne(
        {
          where: { owner_id },
          include: [
            { association: 'owner' }
          ]
        }
      )

      //temporary
      req.body.factory_id = factory ? factory.id : 1;

      const user = await User.findOne({
        where: { id: owner_id }
      });

      if (user.type != "factoryowner" && user.type != "salesman") return res.status(400).json({ error: 'Unauthorized user to create a shop.' })

      const shop = await Shop.create(req.body);

      shop.password = undefined;
      shop.password_hash = undefined;

      return res.json({
        shop
      })

    } catch (err) {
      console.log(err)
      return res.status(400).json({
        error: 'Registration failed',
        message: String(err)
      })
    }
  }

  async update(req, res) {

    try {
      const { id } = req.body;

      if (!id) {
        return res.status(400).json({ error: 'Id not provided' });
      }

      const shop = await Shop.findOne({ where: { id } });

      if (!shop) {
        return res.status(401).json({ error: 'Shop not found.' })
      }

      const shopUpdated = await shop.update(req.body);

      return res.json(shopUpdated)

    } catch (err) {
      console.log(err)
      return res.status(400).json({
        error: 'Update error',
        message: String(err)
      })
    }
  }

  async destroy(req, res) {
    const { id } = req.body;

    try {
      const shop = await Shop.findOne({ where: { id } })

      if (!shop) {
        return res.status(401).json({ error: 'Shop not found.' })
      }

      await shop.destroy();

      return res.json({ message: 'Shop removed successful' })
    } catch (err) {
      return res.status(401).json({
        error: 'Error remove Shop. ',
        message: String(err)
      });
    }
  }

}

export default new ShopController();