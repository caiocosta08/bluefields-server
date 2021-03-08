import Shop from '../../models/Shop';
import { generateToken } from '../../../utils/auth';

class ShopSessionController{
  async store(req, res){
    const { email, password } = req.body;
    
    var shop = await Shop.findOne({ where:{ email }});

    if(!shop){
      return res.status(401).json({ error: 'Shop not registered'});
    }

    if(!(await shop.checkPassword(password))){
      return res.status(401).json({ error: 'Password does not match'});
    }

    const { id, cpf_cnpj, shop_name, shop_url } = shop;

    return res.json({
      shop: {
        id,
        shop_name,
        cpf_cnpj,
        email,
        shop_url
      },
      token: generateToken({ id }),
    })
  
  }
}

export default new ShopSessionController();