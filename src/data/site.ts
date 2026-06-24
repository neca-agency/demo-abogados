export const firm = {
	name: "Estudio Alcántara",
	tagline: "Confianza con criterio",
	location: "Madrid",
	founded: "1987",
	phone: "+34 91 555 01 42",
	email: "contacto@estudioalcantara.es",
	address: "Calle de Serrano, 45 · 28001 Madrid",
} as const;

export const nav = [
	{ label: "Áreas", href: "#areas" },
	{ label: "Enfoque", href: "#enfoque" },
	{ label: "Equipo", href: "#equipo" },
	{ label: "Preguntas", href: "#preguntas" },
] as const;

export const hero = {
	headline: "Asesoramiento legal con claridad y rigor",
	subhead:
		"Un despacho boutique en el corazón de Madrid. Escuchamos primero, explicamos con precisión y acompañamos cada paso con la misma atención al detalle que merece vuestro caso.",
	cta: "Solicitar primera conversación",
	ctaSecondary: "Conocer nuestras áreas",
	image: {
		src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
		alt: "Fachada de edificio de oficinas de piedra y cristal al atardecer, Madrid",
	},
} as const;

export const practiceAreas = [
	{
		index: "01",
		title: "Derecho mercantil",
		description:
			"Constitución de sociedades, pactos entre socios, operaciones corporativas y gobierno interno con criterio preventivo.",
	},
	{
		index: "02",
		title: "Derecho laboral",
		description:
			"Relaciones individuales y colectivas, despidos, restructuraciones y cumplimiento normativo para pymes y equipos directivos.",
	},
	{
		index: "03",
		title: "Derecho civil y familia",
		description:
			"Herencias, contratos patrimoniales y situaciones familiares complejas, con un enfoque humano y técnicamente sólido.",
	},
	{
		index: "04",
		title: "Contencioso estratégico",
		description:
			"Litigio selectivo cuando la negociación no basta. Preparamos cada expediente como si fuera a juicio desde el primer día.",
	},
	{
		index: "05",
		title: "Compliance y privacidad",
		description:
			"Adaptación al RGPD, políticas internas y respuesta ante incidencias, sin plantillas genéricas ni alarmismo innecesario.",
	},
] as const;

export const philosophy = {
	label: "Enfoque",
	title: "Un enfoque que prioriza la comprensión",
	lead: "Creemos que un buen abogado no acumula jerga: traduce la complejidad para que podáis decidir con información.",
	commitment:
		"Nuestro compromiso es convertir lo complejo en claro, para que cada decisión legal sea informada y confiada.",
	detail:
		"Cada asunto comienza con una conversación honesta sobre objetivos, plazos y riesgos reales. Escuchamos con atención, analizamos cada detalle y comunicamos de forma directa para que siempre sepáis qué implica y qué podéis esperar.",
} as const;

export const teamSection = {
	title: "Equipo",
	lead: "Tres socios con responsabilidad directa sobre cada expediente.",
	principle: "Cada asunto tiene un nombre detrás — no un departamento anónimo.",
} as const;

export const team = [
	{
		name: "Elena Alcántara",
		role: "Socia directora",
		specialty: "Mercantil",
		focus: "Diseña operaciones y pactos antes de que se conviertan en conflicto.",
		credential: "Colegiada ICAM · LL.M. Corporate Law, King's College London",
		image: {
			src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
			alt: "Elena Alcántara, socia directora del estudio",
		},
	},
	{
		name: "Javier Ortega",
		role: "Socio",
		specialty: "Laboral y contencioso",
		focus: "Litiga con preparación de quien prefiere no llegar a juicio.",
		credential: "Colegiado ICAM · Más de quince años en litigio laboral estratégico",
		image: {
			src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
			alt: "Javier Ortega, socio de laboral y contencioso",
		},
	},
	{
		name: "Lucía Méndez",
		role: "Socia",
		specialty: "Civil, familia y compliance",
		focus: "Acompaña decisiones patrimoniales y familiares con calma y precisión técnica.",
		credential: "Colegiada ICAM · Especialista en mediación y planificación patrimonial",
		image: {
			src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
			alt: "Lucía Méndez, socia de civil, familia y compliance",
		},
	},
] as const;

export const credentials = {
	title: "Trayectoria y reconocimiento",
	items: [
		{
			label: "Colegio de Abogados de Madrid",
			detail: "Miembros activos ICAM desde la fundación del estudio",
		},
		{
			label: "Legal 500 Iberia",
			detail: "Recomendados en Derecho laboral y mercantil (edición 2025)",
		},
		{
			label: "Chambers Europe",
			detail: "Band 3 en Litigio laboral — España",
		},
	],
	quotes: [
		{
			text: "Traducen lo jurídico sin condescendencia. Supimos en qué estábamos en cada fase.",
			attribution: "Directora financiera, empresa tecnológica madrileña",
		},
		{
			text: "Llevaban nuestro expediente como si fuera el único. Eso se nota cuando llega la presión.",
			attribution: "Fundador, estudio de arquitectura",
		},
	],
} as const;

export const faq = [
	{
		question: "¿Cómo es la primera reunión?",
		answer:
			"Dura entre cuarenta y sesenta minutos. Escuchamos el contexto, revisamos documentación básica si la tenéis y os explicamos opciones con pros y contras. No hay compromiso de contratación.",
	},
	{
		question: "¿Cómo estructuráis los honorarios?",
		answer:
			"Trabajamos con tarifa por hora, presupuesto cerrado para asuntos definidos o cuota mensual para acompañamiento continuado. Siempre por escrito, antes de empezar.",
	},
	{
		question: "¿Atendéis fuera de Madrid?",
		answer:
			"Sí. Muchos clientes nos consultan de otras provincias. Las reuniones pueden ser presenciales, por videollamada o combinadas según el asunto.",
	},
	{
		question: "¿Cuánto tardáis en responder?",
		answer:
			"Respondemos consultas habituales en un plazo máximo de veinticuatro horas laborables. En asuntos urgentes activamos un canal directo con el socio responsable.",
	},
	{
		question: "¿Qué documentación debo preparar?",
		answer:
			"Depende del asunto. Tras el primer contacto os enviamos una lista concreta — nunca pedimos de más por protocolo.",
	},
] as const;
