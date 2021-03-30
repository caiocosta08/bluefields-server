import Address from '../models/Address';
import Shop from '../models/Shop';

class AdressController{

  async index(req, res){
    try{
      const addresses = await Address.findAll({ 
        where: {
          shop_id: req.userId
        },
        include: [
          { association: 'shop'},
        ]
      });

      return res.json(addresses)
    }catch(err){
      return res.status(400).json({ 
        error: 'Error loading addresses',
        message: err
      });
    }
  }

  async show(req, res){
    const id = req.params.id;

    try{
        const address = await  Address.findByPk(id)

        if(!address){
            return res.status(401).json({ error: 'Address not found.'})
        }

        return res.json(address);
    }catch(err){
        return res.status(401).json({ 
          error: 'Error loading addresses. ',
          message: err
        });
    }
  }

  async store(req, res){

    const userId = req.userId;

    try{
      const shop = await Shop.findOne({
        where:  { owner_id: userId },
        include: [
          { association: 'owner' },
        ]
      })

      if(!shop){
        return res.status(400).json({
          message: 'User not shop register for registration address',
        })
      }

      req.body.shop_id = shop.id;
      
      const address = await Address.create(req.body);

      return res.json(address)
    }catch(err){
      return res.status(400).json({ 
        error: 'Registration failed!',
        message: err
      })
    }
  }

  async update(req, res){

    const id = req.params.id;


    const address = await Address.findByPk(id);

    if(!address){
      return res.status(400).json({error: 'Office address not exists.'})
    }

    try{
      const addressUpdated = await address.update(req.body);

      return res.json(addressUpdated)
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
        const address = await  address.findByPk(id)

        if(!address){
            return res.status(401).json({ error: 'address not found.'})
        }

        return res.json({ message: 'Address removed successfull'})
    }catch(err){
        return res.status(401).json({ 
          error: 'Error remove address. ',
          message: err
        });
    }
  }
  
}

export default new AdressController();