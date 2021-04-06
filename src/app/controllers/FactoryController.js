import Factory from '../models/Factory';

class FactoryController {

  async index(req, res) {
    try {
      const factories = await Factory.findAll();

      if(factories.length === 0){
        return res.json({
          message: 'Not registers'
        })
      }

      return res.json(factories)
    } catch (err) {
      return res.status(400).json({
        error: 'Error loading factories',
        message: err
      });
    }
  }

  async show(req, res) {

    try {

      const { owner_id } = req.body;

      if (!owner_id) {
        return res.status(400).json({ error: 'Owner id not provided' });
      }

      const factory = await Factory.findOne(
        {
          where: { owner_id },
          include: [
            { association: 'owner' }
          ]
        }
      )


      if (!factory) {
        return res.status(401).json({ error: 'factory not registered' })
      }


      return res.json(factory);
    } catch (err) {
      console.log(err)
      return res.status(401).json({
        error: 'Error loading factory. ',
        message: String(err)
      });
    }
  }


  async getById(req, res) {

    try {

      const { id } = req.body;

      if (!id) {
        return res.status(400).json({ error: 'Id not provided' });
      }

      const factory = await Factory.findOne(
        {
          where: { id },
          include: [
            { association: 'owner' }
          ]
        }
      )


      if (!factory) {
        return res.status(401).json({ error: 'factory not registered' })
      }


      return res.json(factory);
    } catch (err) {
      console.log(err)
      return res.status(401).json({
        error: 'Error loading factory. ',
        message: String(err)
      });
    }
  }


  async getByOwnerId(req, res) {

    try {

      const { owner_id } = req.body;

      if (!owner_id) {
        return res.status(400).json({ error: 'Owner id not provided' });
      }

      const factory = await Factory.findOne(
        {
          where: { owner_id },
          include: [
            { association: 'owner' }
          ]
        }
      )


      if (!factory) {
        return res.status(401).json({ error: 'factory not registered' })
      }


      return res.json(factory);
    } catch (err) {
      console.log(err)
      return res.status(401).json({
        error: 'Error loading factory. ',
        message: String(err)
      });
    }
  }

  async store(req, res) {

    try {

      const { owner_id, email, cpf_cnpj } = req.body

      if (!owner_id) {
        return res.status(400).json({ error: 'Owner id not provided' });
      }

      if (!email) {
        return res.status(400).json({ error: 'Email not provided' });
      }

      const factoryExists = await Factory.findOne({ where: { email } });

      if (factoryExists) {
        return res.status(400).json({ error: 'Email already exists.' })
      }
      
      const cpf_cnpjExists = await Factory.findOne({ where: { cpf_cnpj } });

      if (cpf_cnpjExists) {
        return res.status(400).json({ error: 'CPF or CNPJ already exists' })
      }

      const factory = await Factory.create(req.body);

      return res.json(factory)

    } catch (err) {
      console.log(err)
      return res.status(400).json({
        error: 'Registration failed',
        message: String(err)
      })
    }
  }

  async update(req, res) {

    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ error: 'Id not provided' });
    }

    const factory = await Factory.findOne({
      where: { id }
    });

    if (!factory) {
      return res.status(401).json({ error: 'factory not found.' })
    }

    try {

      const factoryUpdated = await factory.update(req.body);

      return res.json(factoryUpdated)

    } catch (err) {
      console.log(err)
      return res.status(400).json({
        error: 'Update error',
        message: String(err)
      })
    }
  }

  async destroy(req, res) {

    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ error: 'Id not provided' });
    }

    try {

      const factory = await Factory.findOne({
        where: { id }
      });

      await factory.destroy()

      return res.status(200).json({ message: 'Factory removed successfully' })
    } catch (err) {
      return res.status(401).json({
        error: 'Error remove factory. ',
        message: String(err)
      });
    }
  }

}

export default new FactoryController();