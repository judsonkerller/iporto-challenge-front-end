export class ValidationMessageUtil {
  arrValidations: IValidationMessageDto[] = [];

  constructor() {
    this.arrValidations = Object.keys(MESSAGES).map(key => this._buildArrValidations(key));
  }

  private _buildArrValidations(errorType: string): IValidationMessageDto {
    return { type: errorType, message: MESSAGES[errorType] }
  }
}

export interface IValidationMessageDto {
  type: string;
  message: string;
}

const MESSAGES: { [key: string]: string } = {
  "required": "Campo obrigatório",
  "email": "Formato inválido"
}


