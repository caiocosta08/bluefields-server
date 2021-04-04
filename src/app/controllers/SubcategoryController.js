import Subcategory from '../models/Subcategory';
import Category from '../models/Category';

class SubcategoryController {

  async index(req, res) {
    try {
      const subcategories = await Subcategory.findAll({
        include: [
          { association: 'category' },
          { association: 'products' },
        ]
      });

      if (subcategories.length === 0) {
        return res.json({
          message: 'not registers'
        })
      }

      return res.json(subcategories)
    } catch (err) {
      return res.status(400).json({
        error: 'Error loading subcategories',
        message: String(err)
      });
    }
  }

  async show(req, res) {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ error: 'Id not provided' });
    }

    try {
      const subcategory = await Subcategory.findByPk(id, {
        include: [
          { association: 'category' },
          { association: 'products' },
        ]
      });

      if (!subcategory) {
        return res.status(401).json({ error: 'subcategory not found.' })
      }

      return res.json(subcategory);
    } catch (err) {
      return res.status(401).json({
        error: 'Error loading subcategory ',
        message: String(err)
      });
    }
  }

  async store(req, res) {

    let subcategoriesPersists = []; 

    const {category_id, subcategories } = req.body;

    if (!category_id) {
      return res.status(400).json({ error: 'Category Id not provided' });
    }

    try {

      const category = await Category.findByPk(category_id);

      if(!category){
        return res.status(400).json({
          error: 'Category not registered'
        })
      }

      await Promise.all(subcategories.map (async (subcategory)=> {
        var subcategorytmp = await Subcategory.create({ 
          category_id,
          name: subcategory
        })
        return subcategoriesPersists.push(subcategorytmp.toJSON())
      }))

      return await res.json(subcategoriesPersists)
    } catch (err) {
      return res.status(400).json({
        error: 'Registration failed!',
        message: String(err)
      })
    }
  }

  async update(req, res) {

    const id = req.params.id;
    const { owner_id } = req.body;

    if (!id || !owner_id) {
      return res.status(400).json({ error: 'Id or owner id not provided' });
    }

    const subcategory = await Subcategory.findOne({
      where: {
        id,
        owner_id,
      },
      include: [
        { association: 'owner' },
      ]
    });

    if (!subcategory) {
      return res.status(400).json({ error: 'Office category not exists.' })
    }

    try {
      const subcategoryUpdated = await subcategory.update(req.body);

      return res.json(subcategoryUpdated)
    } catch (err) {
      return res.status(400).json({
        error: 'Update error',
        message: String(err)
      })
    }
  }

  async destroy(req, res) {
    const id = req.params.id;
    const { owner_id } = req.body;

    if (!id || !owner_id) {
      return res.status(400).json({ error: 'Id or owner id not provided' });
    }

    try {
      const category = await Category.findOne({
        where: {
          id,
          owner_id,
        }
      });

      if (!category) {
        return res.status(401).json({ error: 'Category not found.' })
      }

      await category.destroy();

      return res.json({ message: 'Category removed successfull' })
    } catch (err) {
      return res.status(401).json({
        error: 'Error remove address. ',
        message: String(err)
      });
    }
  }

}

export default new SubcategoryController();