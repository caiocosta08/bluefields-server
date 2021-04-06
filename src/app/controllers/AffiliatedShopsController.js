import Shop from '../models/Shop';
import Factory from '../models/Factory';

class AffiliatedShopsController {

  async getAllByFactoryId(req, res) {
    const { factory_id } = req.body;
  
    if(!factory_id){
      return res.status(401).json({ error: 'factory_id not provided!'})
    }

    try{
  
      const factory = await Factory.findByPk(factory_id, {
        include: [
          { 
            association: 'affiliates_shops',
            through: { 
              attributes: []
            }
          }
          
        ]
      });
  
      if(!factory){
        return res.status(400).json({
          error: 'Factory not found'
        })
      }
  
  
      return res.json(factory)

    }catch(err){
      console.log(err)
      return res.status(401).json({
        error: 'Error load Factory affiliate',
        message: String(err),
      })
    }
  }

  async getAllByShopId(req, res) {
    const { shop_id } = req.body;
 
    if(!shop_id){
      return res.status(401).json({ error: 'shop_id not provided!'})
    }
    try{
  
      const shop = await Shop.findByPk(shop_id, {
        include: [
          { 
            association: 'affiliates_factories',
            through: { 
              attributes: []
            }
          }
        ]
      });
  
      if(!shop){
        return res.status(400).json({
          error: 'shop not found'
        })
      }
  
  
      return res.json(shop)

    }catch(err){
      console.log(err)
      return res.status(401).json({
        error: 'Error load shop affiliate',
        message: String(err),
      })
    }

  }


  async affiliateWithAFactory(req, res) {

    const { shop_id, factory_id } = req.body;

    if(!shop_id || !factory_id){
      return res.status(401).json({ error: 'shop_id or factory_id not provided!'})
    }

    try{
      const shop = await Shop.findByPk(shop_id, {
        include: [
          { association: 'affiliates_factories' },
        ]
      });
  
      if(!shop){
        return res.status(400).json({
          error: 'Shop not found'
        })
      }
  
      const factory = await Factory.findByPk(factory_id,
        {
          include: [
            { association: 'affiliates_shops' },
          ]
        });
  
      if(!factory){
        return res.status(400).json({
          error: 'Factory not found'
        })
      }

      await shop.addAffiliates_factories(factory)

      await shop.reload()
  
      return res.json(shop)

    }catch(err){
      console.log(err)
      return res.status(401).json({
        error: 'Error affiliate Factory',
        message: String(err),
      })
    }
  }



  async removeAffiliateFromFactory(req, res) {

    const { shop_id, factory_id } = req.body;

    if(!shop_id || !factory_id){
      return res.status(401).json({ error: 'shop_id or factory_id not provided!'})
    }

    try{
      const shop = await Shop.findByPk(shop_id, {
        include: [
          { association: 'affiliates_factories' },
        ]
      });
  
      if(!shop){
        return res.status(400).json({
          error: 'Shop not found'
        })
      }
  
      const factory = await Factory.findByPk(factory_id);
  
      if(!factory){
        return res.status(400).json({
          error: 'Factory not found'
        })
      }

      await factory.removeAffiliates_shops(shop)
      
      await factory.reload()
      
      return res.json(factory)

    }catch(err){
      console.log(err)
      return res.status(401).json({
        error: 'Error affiliate Factory',
        message: String(err),
      })
    }

  }

  async removeAffiliateFromShop(req, res) {

    const { shop_id, factory_id } = req.body;

    if(!shop_id || !factory_id){
      return res.status(401).json({ error: 'shop_id or factory_id not provided!'})
    }

    try{
      const shop = await Shop.findByPk(shop_id, {
        include: [
          { association: 'affiliates_factories' },
        ]
      });
  
      if(!shop){
        return res.status(400).json({
          error: 'Shop not found'
        })
      }
  
      const factory = await Factory.findByPk(factory_id,
        {
          include: [
            { association: 'affiliates_shops' },
          ]
        });
  
      if(!factory){
        return res.status(400).json({
          error: 'Factory not found'
        })
      }
  
      // await shop.addFactory(factory)

      await shop.removeAffiliates_factories(factory)
  
      await shop.reload()
      
      return res.json(shop)

    }catch(err){
      console.log(err)
      return res.status(401).json({
        error: 'Error affiliate Factory',
        message: String(err),
      })
    }

  }


}

export default new AffiliatedShopsController();