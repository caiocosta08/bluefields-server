import Information from '../models/information.model';

class InformationController {

  async index(req, res) {
    try {
      const informations = await Information.findAll();

      return res.json(informations)
    } catch (err) {
      return res.status(400).json({
        error: 'Error loading informations',
        message: String(err)
      });
    }
  }

  async getInfoData(req, res) {
    console.log("Trying to get info data... ", new Date())
    try {
      const informations = await Information.findAll();

      return res.json(informations)
    } catch (err) {
      return res.status(400).json({
        error: 'Error loading informations',
        message: String(err)
      });
    }
  }

  async show(req, res) {

    const { informationId } = req.body;

    if (!informationId) {
      return res.status(400).json({ error: 'Information id not provided' });
    }

    try {
      const information = await Information.findOne(
        {
          where: { id: informationId },
        }
      )

      if (!information) {
        return res.status(401).json({ error: 'information not found.' })
      }

      return res.json({
        ...information.toJSON(),
        shop
      });
    } catch (err) {
      console.log(err)
      return res.status(401).json({
        error: 'Error loading information. ',
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
      const information = await Information.findOne(
        {
          where: { id },
        }
      )

      if (!information) {
        return res.status(401).json({ error: 'information not found.' })
      }

      return res.json({
        ...information.toJSON(),
        shop
      });
    } catch (err) {
      console.log(err)
      return res.status(401).json({
        error: 'Error loading information. ',
        message: String(err),
      });
    }
  }

  async store(req, res) {

    try {
      const { type, content } = req.body;

      if (!type || !content) {
        return res.status(400).json({ error: 'Type or content not provided' });
      }

      // const informationExists = await Information.findOne({ where: { type } });

      // if (informationExists) {
      //   return res.status(400).json({ error: 'Type already exists.' })
      // }

      const information = await Information.create(req.body);

      return res.json({
        information
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

    const information = await Information.findOne({ where: { id } });

    if (!information) {
      return res.status(401).json({ error: 'Information not found.' })
    }

    try {

      const informationUpdated = await information.update(req.body);

      return res.json(informationUpdated)

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
      const information = await Information.findOne({ where: { id } })

      if (!information) {
        return res.status(401).json({ error: 'Information not found.' })
      }

      await information.destroy()

      return res.json({ message: 'Information removed successful' })
    } catch (err) {
      return res.status(401).json({
        error: 'Error remove Information. ',
        message: String(err),
      });
    }
  }

}

export default new InformationController();