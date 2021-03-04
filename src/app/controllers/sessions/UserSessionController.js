import User from '../../models/User';
import { generateToken } from '../../../utils/auth';

class UserSessionController{
  async store(req, res){
    const { email, password } = req.body;
    
    var user = await User.findOne({ where:{ email }});

    if(!user){
      return res.status(401).json({ error: 'Email not registered'});
    }

    if(!(await user.checkPassword(password))){
      return res.status(401).json({ error: 'Password does not match'});
    }

    const { id, first_name, last_name } = user;

    return res.json({
      user: {
        id,
        first_name,
        last_name,
        email,
      },
      token: generateToken({ id }),
    })
  
  }
}

export default new UserSessionController();