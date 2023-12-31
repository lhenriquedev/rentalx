import { Router } from 'express'
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService'
import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationsRepository'

const specificationRoutes = Router()
const specificationsRepository = new SpecificationsRepository()

specificationRoutes.post('/', (request, response) => {
  const { name, description } = request.body

  const createSpecificationService = new CreateSpecificationService(
    specificationsRepository,
  )

  createSpecificationService.execute({ description, name })

  return response.status(201).send()
})

export { specificationRoutes }
