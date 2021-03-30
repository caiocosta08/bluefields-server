import Subcategory from '../models/Subcategory';

class SubcategoryController{

  async index(req, res){
    try{
      const subcategories = await Subcategory.findAll({
        include: [
          { association: 'category'},
          { association: 'products'},
        ]
      });

      if(subcategories.length === 0){
        return res.json({
          message: 'not registers'
        })
      }

      return res.json(subcategories)
    }catch(err){
      return res.status(400).json({ 
        error: 'Error loading subcategories',
        message: err
      });
    }
  }

  async show(req, res){
    const id = req.params.id;

    try{
        const subcategory = await  Subcategory.findByPk(id, { 
          include: [
            { association: 'category'},
            { association: 'products'},
          ]
        });

        if(!subcategory){
            return res.status(401).json({ error: 'subcategory not found.'})
        }

        return res.json(subcategory);
    }catch(err){
        return res.status(401).json({ 
          error: 'Error loading subcategory ',
          message: err
        });
    }
  }

  async store(req, res){

    try{
      
      const subcategory = await Subcategory.create(req.body);

      return res.json(subcategory)
    }catch(err){
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

export default new SubcategoryController();