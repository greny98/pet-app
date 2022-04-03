import serviceModel from '@models/services.model';
import { Service } from '@interfaces/services.interface';

class ServicesService {
  public services = serviceModel;

  /**
   * TODO: Get by medical id
   */
  public async getByMedical(medicalId: string) {
    // Code here
  }

  /**
   * TODO: Create service
   */
  public async create(service: Service) {
    // Code here
  }

  /**
   * TODO: Update service
   */
  public async update(service: Service) {
    // Code here
  }

  /**
   * TODO: Remove service
   */
  public async remove(service: Service) {
    // Code here
  }
}
