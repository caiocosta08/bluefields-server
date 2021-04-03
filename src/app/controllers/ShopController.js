import Shop from '../models/Shop';
import Factory from '../models/Factory';

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

  async show(req, res) {

    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ error: 'User id not provided' });
    }

    try {
      const shop = await Shop.findOne(
        {
          where: { owner_id: userId },
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

    const { userId } = req.body

    if (!userId) {
      return res.status(400).json({ error: 'User id not provided' });
    }

    try {
      const { email, shop_url, cpf_cnpj } = req.body;
  
      if (!email || shop_url || cpf_cnpj) {
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

      req.body.owner_id = userId;


      const factory = await Factory.findOne(
        {
          where: { owner_id: req.userId },
          include: [
            { association: 'owner' }
          ]
        }
      )

      req.body.factory_id = factory.id;

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

    const { email, oldpassword } = req.body;

    if (!email || !oldpassword) {
      return res.status(400).json({ error: 'Email or old password not provided' });
    }

    const shop = await Shop.findByPk(req.userId);

    if (!shop) {
      return res.status(401).json({ error: 'Shop not found.' })
    }

    if (email && (email !== shop.email)) {
      const shopExists = await Shop.findOne({ where: { email } });

      if (shopExists) {
        return res.status(400).json({ error: 'Email already exists.' })
      }
    }

    if (oldpassword && !(await shop.checkPassword(oldpassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    try {

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
    const id = req.params.id;

    try {
      const shop = await Shop.findByPk(id)

      if (!shop) {
        return res.status(401).json({ error: 'Shop not found.' })
      }

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