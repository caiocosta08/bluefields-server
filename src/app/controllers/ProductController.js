import Product from '../models/Product';
import User from '../models/User';

class ProductController{

  async index(req, res){
    try{

      let user = await User.findByPk(req.userId,
        {
          include: [
            { association: 'shop' },
          ]
        }
      );

      user = user.toJSON();

      if(!user.shop){
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
          { association: 'shop'},
          { association: 'category'},
        ]
      });

      if(products.length === 0){
        return res.json({ message: 'Not registers'})
      }

      return res.json(products)

    }catch(err){
      console.log(err)
      return res.status(400).json({ 
        error: 'Error loading products',
        message: err
      });
    }
  }

  async show(req, res){
    const id = req.params.id;

    try{

      let user = await User.findByPk(req.userId,
        {
          include: [
            { association: 'shop' },
          ]
        }
      );

      
      user = user.toJSON();

      const shop_id = user.shop.id;

      const product = await Product.findAll({ 
        where: {
          id, 
          shop_id
        },
        include: [
          { association: 'shop'},
          { association: 'category'},
        ]
      });

      if(!product){
        return res.json({ message: 'Not registers'})
      }

      return res.json(product)
    }catch(err){
        return res.status(401).json({ 
          error: 'Error loading category ',
          message: err
        });
    }
  }

  async store(req, res){

    const userId = req.userId;

    try{
      let user = await User.findByPk(userId,
        {
          include: [
            { association: 'shop' },
          ]
        }
      );

      
      user = user.toJSON();

      req.body.shop_id = user.shop.id;

      // return res.json(req.body)
      const product = await Product.create(req.body);

      return res.json(product)
    }catch(err){
      console.log(err)
      return res.status(400).json({ 
        error: 'Registration failed!',
        message: err
      })
    }
  }

  async update(req, res){

    const id = req.params.id;

    const category = await  Category.findOne({ 
      where: {
        id,
        owner_id: req.userId,
      },
      include: [
        { association: 'owner'},
      ]
    });

    if(!category){
      return res.status(400).json({error: 'Office category not exists.'})
    }

    try{
      const categoryUpdated = await category.update(req.body);

      return res.json(categoryUpdated)
    }catch(err){
      return res.status(400).json({
        error: 'Update error',
        message: err
      })
    }
  }

  async destroy(req, res){
    const id = req.params.id;

    try{
      const category = await  Category.findOne({ 
        where: {
          id,
          owner_id: req.userId,
        }
      });

        if(!category){
            return res.status(401).json({ error: 'Category not found.'})
        }

        category.destroy()

        return res.json({ message: 'Category removed successfull'})
    }catch(err){
        return res.status(401).json({ 
          error: 'Error remove address. ',
          message: err
        });
    }
  }
  
}

export default new ProductController();