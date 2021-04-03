import Factory from '../models/Factory';

class FactoryController{

  // async index(req, res){
  //   try{
  //     const users = await User.findAll(
  //       {
  //         include: [
  //           { association: 'shop' },
  //         ]
  //       }
  //     );

  //     return res.json(users)
  //   }catch(err){
  //     return res.status(400).json({ 
  //       error: 'Error loading users',
  //       message: err
  //     });
  //   }
  // }

  async show(req, res){

    try{
        const factory = await  Factory.findOne( 
          {
            where: { owner_id: req.userId},
            include: [
              { association: 'owner'}
            ]
          }
        )


        if(!factory){
            return res.status(401).json({ error: 'factory not registered'})
        }

        
        return res.json(factory);
    }catch(err){
        console.log(err)
        return res.status(401).json({ 
          error: 'Error loading factory. ',
          message: String(err)
        });
    }
  }

  async store(req, res){

    try{
      const { email } =  req.body;
      if (!email) {
        return res.status(400).json({ error: 'Email not provided' });
      }

      const factoryExists = await Factory.findOne( { where: { email }});
  
      if(factoryExists){
        return res.status(400).json({ error: 'Email already exists.'})
      }

      req.body.owner_id = req.userId;
      
      const factory = await Factory.create(req.body);
  
      return res.json(factory)

    }catch(err){
      console.log(err)
      return res.status(400).json({
        error: 'Registration failed',
        message: String(err)
      })
    }
  }

  async update(req, res){
    
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ error: 'User id not provided' });
    }

    const factory = await Factory.findOne({
      where: { owner_id: userId }
    });

    if(!factory){
      return res.status(401).json({ error: 'factory not found.'})
    }

    if(email && (email !== factory.email)){
      const factoryExists = await User.findOne( {where: { email }});

      if(factoryExists){
        return res.status(400).json({ error: 'Email already exists.'})
      }
    }

    try{
      
      const factoryUpdated = await factory.update(req.body);

      return res.json(factoryUpdated)

    }catch(err){
      console.log(err)
      return res.status(400).json({
        error: 'Update error',
        message: String(err)
      })
    }
  }

  async destroy(req, res){

    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ error: 'User id not provided' });
    }

    try{
      
      const factory = await Factory.findOne({
        where: { owner_id: userId }
      });
  
      factory.destroy()

      return res.status(200).json({ message: 'Factory removed successful'})
    }catch(err){
        return res.status(401).json({ 
          error: 'Error remove factory. ',
          message: String(err)
        });
    }
  }
  
}

export default new FactoryController();