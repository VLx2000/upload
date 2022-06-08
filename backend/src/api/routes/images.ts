import { Router } from 'express';
import upload from '../config/upload';
import * as imageController from '../controllers/images';

const imagesRouter = Router();

imagesRouter.get(':/id', imageController.getById);
imagesRouter.get('/', imageController.getAll);
imagesRouter.put('/:id', imageController.update);
imagesRouter.delete('/:id', imageController.deleteById);
imagesRouter.post('/', upload.single('image'), imageController.create);

export default imagesRouter;