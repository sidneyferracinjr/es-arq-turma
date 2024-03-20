class Turma {

    #codigo;
    #nota;

    constructor(codigo, nota) {
        this.#codigo = codigo;
        this.#nota = nota;
    }

    aprovado() {
        if (this.#nota >= 7) {
            return "Aprovado";
        } else {
            return "Reprovado";
        }
    }

    getCodigo() {
        return this.#codigo;
    }
    
    setCodigo(codigo) {
        this.#codigo = codigo;
    }  

    getNota() {
        return this.#nota;
    }

    setNota(nota) {
        this.#nota = nota;
    }

}

export { Turma };