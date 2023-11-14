import {
    JsonController,
    Param,
    Body,
    Get,
    Post,
    Put,
    Delete,
    Authorized,
    QueryParams,
    BadRequestError
} from 'routing-controllers';
import { InsertResult, UpdateResult, DeleteResult } from 'typeorm';
import { Service } from 'typedi';
import { Catalog } from '../entities/Catalog.entity';
import { CatalogService } from '../services/Catalog.service';
import { CatalogDTO } from '../dto/catalog-DTO';
import { CatalogUpdateDTO } from '../dto/catalog-update-DTO';
import { ErrorsMessages } from '../constants/errorMessages';
import { EntityMapper } from '../clients/mapper/entityMapper.service';

@JsonController('/catalog')
@Service()
export class CatalogController {
    constructor(private readonly catalogService: CatalogService) { }

    @Get()
    listCatalog() {
        return this.catalogService.listCatalog();
    }

    @Post()
    async post(@Body() catalogDTO: CatalogDTO): Promise<any> {
        try {
            return await this.catalogService.createCatalog(
                EntityMapper.mapTo(Catalog, catalogDTO)
            );
        } catch (error: any) {
            throw new BadRequestError(
                error.detail ?? error.message ?? ErrorsMessages.INTERNAL_SERVER_ERROR
            );
        }
    }
}