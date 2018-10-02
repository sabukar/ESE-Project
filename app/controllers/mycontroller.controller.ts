import {Router, Request, Response} from 'express';
import {TodoItem} from '../models/todoitem.model';
import {MyController} from '../'; /*What model to use?*/

const router: Router = Router();
router.get('/', async (req: Request, res: Response) => {
  const instances = await TodoItem.findAll();       /*Does not work with MyController.findAll().*/
  res.statusCode = 200;
  res.send(instances.map(e => e.toSimplification()));         /*does not recognize e if MyController.findAL*/
});

router.post('/', async (req: Request, res: Response) => {
  const instance = new MyController();
  instance.fromSimplification(req.body);
  await instance.save();
  res.statusCode = 201;
  res.send(instance.toSimplification());
});

router.get('/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const instance = await MyController.findById(id);
  if (instance == null) {
    res.statusCode = 404;
    res.json ({
      'message': 'not found'
    });
    return;
  }
  res.statusCode = 200;
  res.send(instance.toSimplification());
});

router.put('/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const instance = await MyController.findById(id);
  if (instance == null) {
    res.statusCode = 404;
    res.json ( {
      'message' : 'not found'
    });
    return;
  }
  instance.fromSimplification(req.body);
  await instance.save();
  res.statusCode = 200;
  res.send(instance.toSimplification());
});

router.delete('/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const instance = await MyController.findById(id);
  if (instance == null) {
    res.statusCode = 404;
    res.json ({
      'message' : 'not found'
    });
    return;
  }
  instance.fromSimplification(req.body);
  await instance.destroy();
  res.statusCode = 204;
  res.send();
});

export const MyControllerController: Router = router;
