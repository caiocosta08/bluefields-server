import User from '../../models/User';
import { generateToken } from '../../../utils/auth';

class UserSessionController{
  async store(req, res){
    const { email, password } = req.body;
    
    var user = await User.findOne({ 
      where:{ email },
      include: [
        { association: 'shop' },
      ]
    });

    if(!user){
      return res.status(401).json({ error: 'User not registered'});
    }

    if(!(await user.checkPassword(password))){
      return res.status(401).json({ error: 'Password does not match'});
    }

    const { id, cpf_cnpj , shop, name  } = user;

    return res.json({
      user: {
        id,
        name,
        cpf_cnpj,
        email,
        shop
      },
      token: generateToken({ id }),
    })
  
  }
}

export default new UserSessionController();