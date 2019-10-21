export interface FieldsOptions {
  [field: string]: {
    id: string,
    label?: string,
    placeholder?: string,
    min?: number,
    max?: number,
    minlength?: number,
    maxlength?: number,
  };
}
