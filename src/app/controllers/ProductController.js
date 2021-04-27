import Product from '../models/Product';
import User from '../models/User';
import Subcategory from '../models/Subcategory';

class ProductController {

  async getAll(req, res) {
    try {

      let products = await Product.findAll(
        {
          include: [
            { association: 'shop' },
            { association: 'subcategory' },
          ]
        }
      );

      if (products.length === 0) {
        return res.status(400).json({
          message: 'Not registers'
        })
      }

      return res.status(200).json(products)

    } catch (err) {
      res.status(400).json({
        error: 'Error loading products',
        message: String(err)
      })
    }
  }


  async getAllByOwnerId(req, res) {

    const { owner_id } = req.body

    if (!owner_id) {
      return res.status(400).json({ error: 'Owner id not provided' });
    }

    try {

      let user = await User.findByPk(owner_id,
        {
          include: [
            { association: 'shop' },
          ]
        }
      );

      user = user.toJSON();

      if (!user.shop) {
        return res.json({
          error: 'Error loading associate user shop',
          message: 'Usuário é do tipo salesman ou não possui Fábrica/loja cadastrada'
        })
      }

      const shop_id = user.shop.id;

      const products = await Product.findAll({
        where: {
          shop_id
        },
        include: [
          { association: 'shop' },
          { association: 'subcategory' },
        ]
      });

      if (products.length === 0) {
        return res.json({ message: 'Not registers' })
      }

      return res.json(products)

    } catch (err) {
      console.log(err)
      return res.status(400).json({
        error: 'Error loading products',
        message: String(err)
      });
    }
  }

  async getAllByShopId(req, res) {

    const { shop_id } = req.body

    if (!shop_id) {
      return res.status(400).json({ error: 'Shop id not provided' });
    }

    try {

      const products = await Product.findAll({
        where: {
          shop_id
        },
        include: [
          { association: 'shop' },
          { association: 'subcategory' },
          { association: 'category' },
        ]
      });

      if (products.length === 0) {
        return res.json({ message: 'Not registers' })
      }

      return res.json(products)

    } catch (err) {
      console.log(err)
      return res.status(400).json({
        error: 'Error loading products',
        message: String(err)
      });
    }
  }

  async show(req, res) {
    const id = req.params.id;
    const { owner_id } = req.body

    if (!id || !owner_id) {
      return res.status(400).json({ error: 'Id or owner id not provided' });
    }

    try {

      let user = await User.findByPk(owner_id,
        {
          include: [
            { association: 'shop' },
          ]
        }
      );


      user = user.toJSON();

      if (!user.shop) {
        return res.json({
          error: 'Error loading associate user shop',
          message: 'Usuário é do tipo salesman ou não possui Fábrica/loja cadastrada'
        })
      }

      const shop_id = user.shop.id;

      const product = await Product.findOne({
        where: {
          id,
          shop_id
        },
        include: [
          { association: 'shop' },
          { association: 'subcategory' },
        ]
      });

      if (!product) {
        return res.json({ message: 'Not registers' })
      }

      return res.json(product)
    } catch (err) {
      return res.status(401).json({
        error: 'Error loading product ',
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

      const product = await Product.findOne({
        where: {
          id
        },
        include: [
          { association: 'shop' },
          { association: 'subcategory' },
        ]
      });

      if (!product) {
        return res.json({ message: 'Not registers' })
      }

      return res.json(product)
    } catch (err) {
      return res.status(401).json({
        error: 'Error loading product ',
        message: String(err)
      });
    }
  }

  async store(req, res) {

    // const userId = req.userId;
    const { owner_id } = req.body;

    if (!owner_id) {
      return res.status(400).json({ error: 'Owner id not provided' });
    }

    try {
      let user = await User.findByPk(owner_id,
        {
          include: [
            { association: 'shop' },
          ]
        }
      );


      user = user.toJSON();


      if (!user.shop) {
        return res.json({
          error: 'Error loading associate user shop',
          message: 'Usuário é do tipo salesman ou não possui Fábrica/loja cadastrada'
        })
      }

      req.body.shop_id = user.shop.id;


      const subcategory = await Subcategory.findByPk(req.body.subcategory_id);

      if (!subcategory) {
        return res.status(400).json({ error: 'Subcategory not exists' })
      }

      //VALIDAR ESPECIFICAMENTE A SUBCATEGORIA AO USUÁRIO DA REQUEST 
      //Verificar se o usuário tem aquela subcategoria associada a fabrica dele

      const product = await Product.create(req.body);

      return res.json(product)
    } catch (err) {
      console.log(err)
      return res.status(400).json({
        error: 'Registration failed!',
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

      let product = await Product.findOne({ where: { id } });

      if (!product) return res.status(401).json({ error: 'Product not found.' })

      const productUpdated = await product.update(req.body);

      return res.json(productUpdated)
    } catch (err) {
      return res.status(400).json({
        error: 'Update error',
        message: String(err)
      })
    }
  }

  async destroy(req, res) {
    try {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ error: 'Id not provided' });
    }

      const product = await Product.findOne({ where: { id } });

      await product.destroy()

      return res.json({ message: 'product removed successfull' })
    } catch (err) {
      return res.status(401).json({
        error: 'Error remove product. ',
        message: String(err)
      });
    }
  }

}

export default new ProductController();