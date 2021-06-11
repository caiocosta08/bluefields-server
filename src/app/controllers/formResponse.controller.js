import FormResponse from '../models/formResponse.model';

class FormResponseController {

  async index(req, res) {
    try {
      const formResponses = await FormResponse.findAll();

      return res.json(formResponses)
    } catch (err) {
      return res.status(400).json({
        error: 'Error loading formResponses',
        message: String(err)
      });
    }
  }

  async show(req, res) {

    const { formResponseId } = req.body;

    if (!formResponseId) {
      return res.status(400).json({ error: 'FormResponse id not provided' });
    }

    try {
      const formResponse = await FormResponse.findOne(
        {
          where: { id: formResponseId },
        }
      )

      if (!formResponse) {
        return res.status(401).json({ error: 'formResponse not found.' })
      }

      return res.json({
        ...formResponse.toJSON(),
        shop
      });
    } catch (err) {
      console.log(err)
      return res.status(401).json({
        error: 'Error loading formResponse. ',
        message: String(err),
      });
    }
  }
  async getById(req, res) {

    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ error: 'Id not provided' });
    }

    try {
      const formResponse = await FormResponse.findOne(
        {
          where: { id },
        }
      )

      if (!formResponse) {
        return res.status(401).json({ error: 'formResponse not found.' })
      }

      return res.json({
        ...formResponse.toJSON(),
        shop
      });
    } catch (err) {
      console.log(err)
      return res.status(401).json({
        error: 'Error loading formResponse. ',
        message: String(err),
      });
    }
  }

  async store(req, res) {

    try {
      const { name, email, phone, desired_skill } = req.body;

      if (!name || !email || !phone || !desired_skill) {
        return res.status(400).json({ error: 'Name, email, phone or desired_skill not provided' });
      }

      const formResponseExists = await FormResponse.findOne({ where: { email } });

      if (formResponseExists) {
        return res.status(400).json({ error: 'E-mail already exists.' })
      }

      const formResponse = await FormResponse.create(req.body);

      return res.json({
        formResponse
      })

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

    const formResponse = await FormResponse.findOne({ where: { id } });

    if (!formResponse) {
      return res.status(401).json({ error: 'FormResponse not found.' })
    }

    try {

      const formResponseUpdated = await formResponse.update(req.body);

      return res.json(formResponseUpdated)

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
      const formResponse = await FormResponse.findOne({ where: { id } })

      if (!formResponse) {
        return res.status(401).json({ error: 'FormResponse not found.' })
      }

      await formResponse.destroy()

      return res.json({ message: 'FormResponse removed successful' })
    } catch (err) {
      return res.status(401).json({
        error: 'Error remove FormResponse. ',
        message: String(err),
      });
    }
  }

}

export default new FormResponseController();