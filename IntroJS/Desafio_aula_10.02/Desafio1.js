const nomes = [" João, mariA, NicolaS, SocoRRo, zuLeiCa"]

const nomesCorrigidos = nomes.map(names => names.trim().toLowerCase());
const nomesCorrigidos2 = nomesCorrigidos.map(nome => nome.charAt(0).toUpperCase() + nome.slice(1))

console.log(nomesCorrigidos2);