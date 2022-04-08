/**
 * TODO: Pet Controller
 */
import PetService from '@services/pets.service';
import { NextFunction, Response } from 'express';
import { PaginationQuery } from '@interfaces/routes.interface';
import { RequestWithUser } from '@interfaces/auth.interface';
import moment from 'moment';
import MedicalHistoriesService from '@/services/medicalHistories.service';

interface GetDetailParams {
  petId: string;
}

class PetController {
  public petService = new PetService();
  public medicalHistoryService = new MedicalHistoriesService();

  public getPets = async (req: RequestWithUser, res: Response) => {
    const { page = 0 } = req.query as any as PaginationQuery;
    const pets = await this.petService.getByUser(req.user._id, page);
    res.render('pages/pet/list', { pets });
  };

  public getDetail = async (req: RequestWithUser, res: Response) => {
    const { petId } = req.params as any as GetDetailParams;
    // GET PET INFO
    const petInfo: any = await this.petService.getById(petId);
    const customerField = ['name', 'phone', 'email', 'address'];
    const petField = ['name', 'type', 'breed', 'birthDate', 'sex', 'size'];
    // GET MEDICAL HISTORIES
    const histories = await this.medicalHistoryService.getAll(req.user._id);
    res.status(200).render('pages/pet/detail', {
      petInfo: { ...petInfo._doc, birthDate: moment(petInfo.birthDate).format('DD/MM/YYYY') },
      customerField,
      petField,
      histories,
    });
  };

  public createPet = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
    } catch (error) {
      next(error);
    }
  };
}

export default PetController;
