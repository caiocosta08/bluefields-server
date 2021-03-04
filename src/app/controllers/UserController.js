import { generateToken } from '../../utils/auth';
import User from '../models/User';

class UserController{

  async index(req, res){
    try{
      const users = await User.findAll(
        {
          include: [
            { association: 'capture_forms' },
          ]
        }
      );

      return res.json(users)
    }catch(err){
      return res.status(400).json({ 
        error: 'Error loading users',
        message: err
      });
    }
  }

  async show(req, res){
    const id = req.params.id;

    try{
        const user = await  User.findByPk(id, 
          {
            include: [
              { association: 'capture_forms' },
            ]
          }
        )

        if(!user){
            return res.status(401).json({ error: 'user not found.'})
        }

        return res.json(user);
    }catch(err){
        return res.status(401).json({ error: 'Error loading user. '});
    }
  }

  async store(req, res){

    try{
      const { email } =  req.body;

      const userExists = await User.findOne( {where: { email }});
  
      if(userExists){
        return res.status(400).json({ error: 'Email already exists.'})
      }

      req.body.credit = 0;
      
      const user = await User.create(req.body);
  
      user.password = undefined;
      user.password_hash = undefined;
  
      return res.json({
        user,
        token: generateToken({ id: user.id })
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

    const user = await User.findByPk(req.userId);

    if(!user){
      return res.status(401).json({ error: 'User not found.'})
    }

    if(email && (email !== user.email)){
      const userExists = await User.findOne( {where: { email }});

      if(userExists){
        return res.status(400).json({ error: 'Email already exists.'})
      }
    }

    if(oldpassword && !(await user.checkPassword(oldpassword))){
      return res.status(401).json({ error: 'Password does not match'});
    }

    try{
      
      const userUpdated = await user.update(req.body);

      return res.json(userUpdated)

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
        const user = await  User.findByPk(id)

        if(!user){
            return res.status(401).json({ error: 'User not found.'})
        }

        return res.json({ message: 'User removed successful'})
    }catch(err){
        return res.status(401).json({ error: 'Error remove User. '});
    }
  }
  
}

export default new UserController();