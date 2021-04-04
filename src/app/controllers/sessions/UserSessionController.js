import User from '../../models/User';
import { generateToken } from '../../../utils/auth';

class UserSessionController {
  async store(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Email or password not provided' });
    }

    var user = await User.findOne({
      where: { email },
      include: [
        { association: 'shop' },
        { association: 'factory' },
      ]
    });

    if (!user) {
      return res.status(401).json({ error: 'User not registered' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    return res.json({
      user,
      token: generateToken({ id: user.id }),
    })

  }
}

export default new UserSessionController();