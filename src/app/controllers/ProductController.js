import Product from '../models/Product';
import User from '../models/User';
import Subcategory from '../models/Subcategory';

class ProductController {

  async index(req, res) {

    const { userId } = req.body

    if (!userId) {
      return res.status(400).json({ error: 'User id not provided' });
    }

    try {

      let user = await User.findByPk(userId,
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

  async show(req, res) {
    const id = req.params.id;
    const { userId } = req.body;

    if (!id || !userId) {
      return res.status(400).json({ error: 'Id or user id not provided' });
    }

    try {

      let user = await User.findByPk(userId,
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

  async store(req, res) {

    // const userId = req.userId;
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ error: 'User id not provided' });
    }

    try {
      let user = await User.findByPk(userId,
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

    const id = req.params.id;
    const { userId } = req.body;

    if (!id || !userId) {
      return res.status(400).json({ error: 'Id or user id not provided' });
    }

    let user = await User.findByPk(userId,
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

    const product = await Product.findByPk(id, {
      where: {
        shop_id
      },
      include: [
        { association: 'shop' },
        { association: 'subcategory' },
      ]
    });

    try {
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
    const id = req.params.id;
    const { userId } = req.body;

    if (!id || !userId) {
      return res.status(400).json({ error: 'Id or userId not provided' });
    }

    try {

      let user = await User.findByPk(userId,
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

      const product = await Product.findByPk(id, {
        where: {
          shop_id
        },
        include: [
          { association: 'shop' },
          { association: 'subcategory' },
        ]
      });

      product.destroy()

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