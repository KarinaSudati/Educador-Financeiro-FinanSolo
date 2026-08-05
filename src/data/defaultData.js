export const defaultProfile = {
  name: "Alex Silva",
  age: 26,
  netIncome: 3200,
  lifestyle: "Mora sozinho(a) em apartamento alugado",
  tripDestination: "Nordeste - Praias da Bahia",
  tripCost: 3600,
  savedAmount: 850,
  monthlySavingsTarget: 450,
};

export const defaultExpenses = [
  { id: 1, name: "Aluguel & Condomínio", amount: 1150, category: "fixas", date: "Dia 05" },
  { id: 2, name: "Supermercado Básico", amount: 350, category: "fixas", date: "Dia 08" },
  { id: 3, name: "Luz & Internet Fibra", amount: 130, category: "fixas", date: "Dia 10" },
  { id: 4, name: "Ifood / Delivery Fim de Semana", amount: 340, category: "livre", date: "Dia 12" },
  { id: 5, name: "Assinaturas & Streaming (3 serviços)", amount: 89, category: "livre", date: "Dia 15" },
  { id: 6, name: "Saída de Sexta com Amigos", amount: 180, category: "livre", date: "Dia 18" },
  { id: 7, name: "Aporte Caixinha da Viagem", amount: 450, category: "meta", date: "Dia 05" },
];

export const smartAlertsList = [
  {
    id: "alert-1",
    type: "warning",
    title: "Alerta de Delivery & Lanches",
    message: "Você já acumulou R$ 340 com aplicativos de comida este mês. Sabia que esse valor equivale a 2 diárias de hotel na praia ou a 1 passeio de barco em Maragogi?",
    actionText: "Trocar 2 deliveries por marmita prática (+ R$ 120 na Viagem)",
    savingBoost: 120,
    applied: false
  },
  {
    id: "alert-2",
    type: "info",
    title: "Streamings Fantasmas",
    message: "Você possui 3 serviços de streaming ativos (R$ 89/mês), mas o perfil mostra uso frequente em apenas 1. Pausar 2 deles rende R$ 59/mês.",
    actionText: "Pausar 2 streamings (+ R$ 59/mês)",
    savingBoost: 59,
    applied: false
  },
  {
    id: "alert-3",
    type: "caution",
    title: "Ritmo da Caixinha 'Vida Livre'",
    message: "Você já utilizou 63% do limite recomendado para 'Vida Livre' e ainda estamos no meio do mês. O segredo de quem mora sozinho é alternar saídas com jantares em casa!",
    actionText: "Ver sugestões rápidas para o fim de semana",
    savingBoost: 0,
    applied: false
  }
];

export const aiRecommendationsList = [
  {
    id: "rec-1",
    category: "Supermercado Solo",
    title: "Evite o 'Efeito Quinto Dia Útil'",
    description: "Para quem mora sozinho, fazer uma compra mensal gigante quase sempre resulta em frutas e legumes estragando na geladeira. Vá ao mercado a cada 15 dias com lista fechada para economizar até 15% no mês."
  },
  {
    id: "rec-2",
    category: "Estratégia CLT",
    title: "Pagar-se Primeiro (A Regra de Ouro)",
    description: "Assim que o salário CLT cair no 5º dia útil, transfira o dinheiro da viagem (ex: R$ 450) para uma conta rendendo 100% do CDI antes de pagar qualquer conta. O que não é visto, não é gasto!"
  },
  {
    id: "rec-3",
    category: "13º & Férias CLT",
    title: "O Super Aporte da Passagem Aérea",
    description: "Você é CLT, então tem direito a 13º salário e 1/3 de férias! Se reservar 40% desse valor extra na segunda parcela, consegue comprar sua passagem aérea à vista e com até 25% de desconto."
  }
];

export const financePillsList = [
  {
    id: "pill-1",
    title: "Pagar-se Primeiro",
    tagline: "Sem Economiquês",
    content: "É colocar seu sonho em 1º lugar da fila. Em vez de pagar todo mundo e guardar 'o que sobrar' no dia 30 (quase nunca sobra!), você guarda o dinheiro da viagem no dia 5.",
    example: "Salário caiu R$ 3.200 ➔ R$ 450 vão direto para a Caixinha da Viagem."
  },
  {
    id: "pill-2",
    title: "Fundo de Emergência",
    tagline: "Colchão do Morador Solo",
    content: "Quando você mora sozinho, se o chuveiro queimar ou o dente quebrar, não tem como dividir. O Fundo de Emergência é uma pequena reserva separada para não precisar rasgar a passagem da viagem.",
    example: "Tenha pelo menos R$ 1.000 em conta de resgate imediato só para imprevistos."
  },
  {
    id: "pill-3",
    title: "Rotativo do Cartão",
    tagline: "O Inimigo nº 1",
    content: "Pagar apenas o 'mínimo' da fatura é a maior armadilha financeira do Brasil. Os juros passam de 400% ao ano. Se a fatura apertar, corte gastos na hora, mas evite parcelar a fatura.",
    example: "R$ 500 atrasados no cartão podem virar mais de R$ 1.000 em poucos meses."
  },
  {
    id: "pill-4",
    title: "Regra 50/30/20 para Morador Solo",
    tagline: "Equilíbrio de Ouro",
    content: "50% da renda para o essencial (aluguel, luz, mercado), 30% para viver a vida (saídas, delivery, hobbies) e 20% para o seu futuro e viagem.",
    example: "Em R$ 3.200 ➔ R$ 1.600 fixas | R$ 960 vida livre | R$ 640 sonhos & reservas."
  }
];
