export function embaralhar(elementos: any[]): any[] {
  return elementos
    .map((valor) => ({ valor, random: Math.random() }))
    .sort((obj1, obj2) => obj1.random - obj2.random)
    .map((obj) => obj.valor);
}
