import { Service } from 'typedi';
import { Catalog } from '../entities/Catalog.entity'

@Service()
export class CatalogService {
    async listCatalog() {
        const catalogs = await Catalog.find();
        return catalogs
    }

    createCatalog(catalog: Catalog) {
        console.log(`Catalog to create: ${JSON.stringify(catalog)}`)
        catalog.save();
        return catalog;
    }
}