import Address from '../models/Address';
import Shop from '../models/Shop';

class AdressController {

  async getAll(req, res){

    try{

      const addresses = await Address.findAll({
        include: [
          { association: 'shop' },
        ]
      });

      if(addresses.length === 0){
        return res.status(400).json({
          message: 'not registers'
        })
      }

      return res.status(200).json(addresses)

    }catch(err){
      return res.status(400).json({
        error: ' error loading addresses',
        message: String(err),
      })
    }

  }

  async getWithOwnerId(req, res) {
    try {

      const { owner_id } = req.body

      if (!owner_id) {
        return res.status(400).json({ error: 'Owner id not provided' });
      }

      const shop = await Shop.findOne(
        {
          where: { owner_id },
          include: [
            { association: 'address' },
          ]
        }
      );

      if (!shop) {
        return res.status(400).json({
          error: 'Shop not register for user'
        })
      }

      const addresses = await Address.findAll({
        where: {
          shop_id: shop.id
        },
        include: [
          { association: 'shop' },
        ]
      });

      return res.json(addresses)
    } catch (err) {
      return res.status(400).json({
        error: 'Error loading addresses',
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
      const address = await Address.findByPk(id)

      if (!address) {
        return res.status(401).json({ error: 'Address not found.' })
      }

      return res.json(address);
    } catch (err) {
      return res.status(401).json({
        error: 'Error loading addresses. ',
        message: String(err)
      });
    }
  }

  async store(req, res) {

    const { owner_id } = req.body

    if (!owner_id) {
      return res.status(400).json({ error: 'Owner id not provided' });
    }

    try {
      const shop = await Shop.findOne({
        where: { owner_id },
        include: [
          { association: 'owner' },
        ]
      })

      if (!shop) {
        return res.status(400).json({
          message: 'User not shop register for registration address',
        })
      }

      req.body.shop_id = shop.id;

      const address = await Address.create(req.body);

      return res.json(address)
    } catch (err) {
      return res.status(400).json({
        error: 'Registration failed!',
        message: String(err)
      })
    }
  }

  async update(req, res) {

    const id = req.params.id;


    const address = await Address.findByPk(id);

    if (!address) {
      return res.status(400).json({ error: 'Office address not exists.' })
    }

    try {
      const addressUpdated = await address.update(req.body);

      return res.json(addressUpdated)
    } catch (err) {
      return res.status(400).json({
        error: 'Update error',
        message: String(err)
      })
    }
  }

  async destroy(req, res) {
    const id = req.params.id;

    try {
      const address = await Address.findOne({
        where: { id }
      });

      if (!address) {
        return res.status(401).json({ error: 'address not found.' })
      }

      await address.destroy();

      return res.json({ message: 'Address removed successfull' })
    } catch (err) {
      return res.status(401).json({
        error: 'Error remove address. ',
        message: String(err)
      });
    }
  }

}

export default new AdressController();