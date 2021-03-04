import { generateToken } from '../../utils/auth';
import Shop from '../models/Shop';

class ShopController{

  async index(req, res){
    try{
      const shops = await Shop.findAll(
        {
          include: [
            { association: 'addresses' },
          ]
        }
      );

      return res.json(shops)
    }catch(err){
      return res.status(400).json({ 
        error: 'Error loading shops',
        message: err
      });
    }
  }

  async show(req, res){
    const id = req.params.id;

    try{
        const shop = await  Shop.findByPk(id, 
          {
            include: [
              { association: 'shop_adresses' },
            ]
          }
        )

        if(!shop){
            return res.status(401).json({ error: 'shop not found.'})
        }

        return res.json(shop);
    }catch(err){
        return res.status(401).json({ error: 'Error loading shop. '});
    }
  }

  async store(req, res){

    try{
      const { email } =  req.body;

      const shopExists = await Shop.findOne( {where: { email }});
  
      if(shopExists){
        return res.status(400).json({ error: 'Email already exists.'})
      }

      req.body.credit = 0;
      
      const shop = await Shop.create(req.body);
  
      shop.password = undefined;
      shop.password_hash = undefined;
  
      return res.json({
        shop,
        token: generateToken({ id: shop.id })
      })

    }catch(err){
      console.log(err)
      return res.status(400).json({
        error: 'Registration failed',
        message: err
      })
    }
  }

  async update(req, res){

    const { email, oldpassword } =  req.body;

    const shop = await Shop.findByPk(req.userId);

    if(!shop){
      return res.status(401).json({ error: 'Shop not found.'})
    }

    if(email && (email !== shop.email)){
      const shopExists = await Shop.findOne( {where: { email }});

      if(shopExists){
        return res.status(400).json({ error: 'Email already exists.'})
      }
    }

    if(oldpassword && !(await shop.checkPassword(oldpassword))){
      return res.status(401).json({ error: 'Password does not match'});
    }

    try{
      
      const shopUpdated = await shop.update(req.body);

      return res.json(shopUpdated)

    }catch(err){
      console.log(err)
      return res.status(400).json({
        error: 'Update error',
        message: err
      })
    }
  }

  async destroy(req, res){
    const id = req.params.id;

    try{
        const shop = await  Shop.findByPk(id)

        if(!shop){
            return res.status(401).json({ error: 'Shop not found.'})
        }

        return res.json({ message: 'Shop removed successful'})
    }catch(err){
        return res.status(401).json({ error: 'Error remove Shop. '});
    }
  }
  
}

export default new ShopController();