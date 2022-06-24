import { Optional } from "sequelize/types"

export type CreateImageDTO = {
    //id: number;
    caminho: string;
    tipo: string;
    aquisicao: string;
    arquivado: boolean;
}

export type UpdateImageDTO = Optional<CreateImageDTO, 'aquisicao' | 'arquivado'>