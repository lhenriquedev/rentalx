import { SpecificationsRepository } from '../repositories/SpecificationsRepository'

interface IRequest {
  name: string
  description: string
}

class CreateSpecificationService {
  private specificationsRepository: SpecificationsRepository

  constructor(specificationsRepository: SpecificationsRepository) {
    this.specificationsRepository = specificationsRepository
  }

  execute({ description, name }: IRequest): void {
    const specificationAlreadyExists =
      this.specificationsRepository.findByName(name)

    if (specificationAlreadyExists)
      throw new Error('Specification already exists!')

    this.specificationsRepository.create({ name, description })
  }
}

export { CreateSpecificationService }
