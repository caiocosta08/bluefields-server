import Tbb7FormResponse from '../models/tbb7FormResponse.model';

class Tbb7FormResponseController {

  async index(req, res) {
    console.log("req to /tbb7-form-response/get_all")
    try {
      const tbb7FormResponses = await Tbb7FormResponse.findAll();

      return res.json(tbb7FormResponses)
    } catch (err) {
      console.log(err)
      return res.status(400).json({
        error: 'Error loading tbb7FormResponses',
        message: String(err)
      });
    }
  }

  async show(req, res) {

    const { tbb7FormResponseId } = req.body;

    if (!tbb7FormResponseId) {
      return res.status(400).json({ error: 'Tbb7FormResponse id not provided' });
    }

    try {
      const tbb7FormResponse = await Tbb7FormResponse.findOne(
        {
          where: { id: tbb7FormResponseId },
        }
      )

      if (!tbb7FormResponse) {
        return res.status(401).json({ error: 'tbb7FormResponse not found.' })
      }

      return res.json({
        ...tbb7FormResponse.toJSON(),
        shop
      });
    } catch (err) {
      console.log(err)
      return res.status(401).json({
        error: 'Error loading tbb7FormResponse. ',
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
      const tbb7FormResponse = await Tbb7FormResponse.findOne(
        {
          where: { id },
        }
      )

      if (!tbb7FormResponse) {
        return res.status(401).json({ error: 'tbb7FormResponse not found.' })
      }

      return res.json({
        ...tbb7FormResponse.toJSON(),
        shop
      });
    } catch (err) {
      console.log(err)
      return res.status(401).json({
        error: 'Error loading tbb7FormResponse. ',
        message: String(err),
      });
    }
  }

  async store(req, res) {

    console.log(req.body)
    try {
      const { name, email, phone, startup_section, startup_name, startup_phase, meet_bluefields, } = req.body;

      if (!name || !email || !phone || !name || !email || !phone || !startup_section || !startup_name || !startup_phase || !meet_bluefields) {
        return res.status(400).json({ error: 'name, email, phone, startup_section, startup_name, startup_phase or meet_bluefields not provided' });
      }

      const tbb7FormResponseExists = await Tbb7FormResponse.findOne({ where: { email } });

      if (tbb7FormResponseExists) {
        return res.status(400).json({ error: 'E-mail already exists.' })
      }

      const tbb7FormResponse = await Tbb7FormResponse.create(req.body);

      return res.json({
        tbb7FormResponse
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

    const tbb7FormResponse = await Tbb7FormResponse.findOne({ where: { id } });

    if (!tbb7FormResponse) {
      return res.status(401).json({ error: 'Tbb7FormResponse not found.' })
    }

    try {

      const tbb7FormResponseUpdated = await tbb7FormResponse.update(req.body);

      return res.json(tbb7FormResponseUpdated)

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
      const tbb7FormResponse = await Tbb7FormResponse.findOne({ where: { id } })

      if (!tbb7FormResponse) {
        return res.status(401).json({ error: 'Tbb7FormResponse not found.' })
      }

      await tbb7FormResponse.destroy()

      return res.json({ message: 'Tbb7FormResponse removed successful' })
    } catch (err) {
      return res.status(401).json({
        error: 'Error remove Tbb7FormResponse. ',
        message: String(err),
      });
    }
  }

}

export default new Tbb7FormResponseController();