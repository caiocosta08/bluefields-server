import Category from '../models/Category';

class CategoryController{

  async index(req, res){
    try{
      const categories = await Category.findAll({ 
        where: {
          owner_id: req.userId
        },
        include: [
          { association: 'owner'},
          { association: 'subcategories'},
        ]
      });

      if(categories.length === 0){
        return res.json({
          message: 'not registers'
        })
      }

      return res.json(categories)
    }catch(err){
      return res.status(400).json({ 
        error: 'Error loading categories',
        message: String(err)
      });
    }
  }

  async show(req, res){
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ error: 'Id not provided' });
    }

    try{
        const category = await  Category.findOne({ 
          where: {
            id,
            owner_id: req.userId,
          },
          include: [
            { association: 'owner'},
            { association: 'subcategories'},
          ]
        });

        if(!category){
            return res.status(401).json({ error: 'category not found.'})
        }

        return res.json(category);
    }catch(err){
        return res.status(401).json({ 
          error: 'Error loading category ',
          message: String(err)
        });
    }
  }

  async store(req, res){

    const userId = req.userId;
    if (!userId) {
      return res.status(400).json({ error: 'User id not provided' });
    }

    try{

      req.body.owner_id = userId;
      
      const category = await Category.create(req.body);

      return res.json(category)
    }catch(err){
      return res.status(400).json({ 
        error: 'Registration failed!',
        message: String(err)
      })
    }
  }

  async update(req, res){

    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ error: 'Id not provided' });
    }

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
        message: String(err)
      })
    }
  }

  async destroy(req, res){
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ error: 'Id not provided' });
    }

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
          message: String(err)
        });
    }
  }
  
}

export default new CategoryController();