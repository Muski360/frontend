export class Curriculo {
  // Construtor 
  constructor(
    public id: number | string = 0,
    public usuarioId: number = 0,
    public nomeCompleto: string = '',
    public formacoes: string[] = [''],
    public experiencias: string[] = [''],
    public habilidades: string[] = [''],
    public linkedin: string = '',
  ) {}

  // OBJ => API
  toMap(): { [key: string]: any } {
    return {
      id: this.id,
      usuarioId: this.usuarioId,
      nomeCompleto: this.nomeCompleto,
      formacoes: this.formacoes,
      experiencias: this.experiencias,
      habilidades: this.habilidades,
      linkedin: this.linkedin,
    };
  }

  // API => OBJ
  fromMap(map: any): Curriculo {
    return new Curriculo(
      map.id,
      map.usuarioId,
      map.nomeCompleto,
      map.formacoes,
      map.experiencias,
      map.habilidades,
      map.linkedin,
    );
  }
}
