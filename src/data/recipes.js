// Base de datos de recetas - JavaScript puro

export const recipeDatabase = [
  {
    id: '1',
    codigo: 'GAD403_01',
    nombre: 'Filete Wellington con Salsa Oporto Deconstruido',
    categoria: 'Plato Principal',
    aporte: 650,
    porcion: 1,
    tiempo: 120,
    rendimiento: 1,
    argumentacionComercial: 'LOMO DE VACUNO WELLINGTON, SALSA OPORTO',
    argumentacionTecnica: 'Filete elaborado como tataki sobre masa de hojaldre, acompañado de salsa oporto, flan de espárrago, sobre este flan un falso caviar de espinaca, decorado con chips de champiñón y jamón serrano.',
    tareaInicio: 'Realizar M.e.P. de puesto de trabajo, equipos, utensilios y materias primas (lavar y sanitizar), pelar vegetales o frutas según corresponda',
    ingredientes: [
      {
        categoria: 'Cárnicos',
        ingredientes: [
          { nombre: 'Filete de vacuno', unidad: 'kg', cantidad: 0.300, precioUnitario: 25000, precioTotal: 7500 },
          { nombre: 'Restos de vacuno', unidad: 'kg', cantidad: 0.150, precioUnitario: 8000, precioTotal: 1200 },
          { nombre: 'Jamón Serrano', unidad: 'kg', cantidad: 0.100, precioUnitario: 35000, precioTotal: 3500 },
        ]
      },
      {
        categoria: 'Verduras',
        ingredientes: [
          { nombre: 'Chalota', unidad: 'u', cantidad: 2, precioUnitario: 500, precioTotal: 1000 },
          { nombre: 'Apio', unidad: 'gr', cantidad: 50, precioUnitario: 2, precioTotal: 100 },
          { nombre: 'Zanahoria', unidad: 'gr', cantidad: 50, precioUnitario: 1.5, precioTotal: 75 },
          { nombre: 'Champiñón', unidad: 'gr', cantidad: 100, precioUnitario: 8, precioTotal: 800 },
          { nombre: 'Espárragos', unidad: 'gr', cantidad: 50, precioUnitario: 12, precioTotal: 600 },
          { nombre: 'Espinaca', unidad: 'gr', cantidad: 150, precioUnitario: 3, precioTotal: 450 },
          { nombre: 'Perejil', unidad: 'gr', cantidad: 15, precioUnitario: 5, precioTotal: 75 },
          { nombre: 'Ajo', unidad: 'gr', cantidad: 50, precioUnitario: 4, precioTotal: 200 },
          { nombre: 'Caldo de verduras', unidad: 'ml', cantidad: 150, precioUnitario: 3, precioTotal: 450 },
        ]
      },
      {
        categoria: 'Ovolacteos',
        ingredientes: [
          { nombre: 'Mantequilla s/sal', unidad: 'gr', cantidad: 20, precioUnitario: 10, precioTotal: 200 },
        ]
      },
      {
        categoria: 'Abarrotes',
        ingredientes: [
          { nombre: 'Sal', unidad: 'gr', cantidad: 5, precioUnitario: 1, precioTotal: 5 },
          { nombre: 'Aceite', unidad: 'ml', cantidad: 40, precioUnitario: 5, precioTotal: 200 },
          { nombre: 'Pimienta Molida', unidad: 'gr', cantidad: 5, precioUnitario: 15, precioTotal: 75 },
          { nombre: 'Concentrado de tomate', unidad: 'gr', cantidad: 5, precioUnitario: 8, precioTotal: 40 },
          { nombre: 'Masa de hojaldre', unidad: 'gr', cantidad: 200, precioUnitario: 6, precioTotal: 1200 },
          { nombre: 'Almendras', unidad: 'gr', cantidad: 50, precioUnitario: 12, precioTotal: 600 },
          { nombre: 'Agar Agar', unidad: 'gr', cantidad: 5, precioUnitario: 50, precioTotal: 250 },
        ]
      },
      {
        categoria: 'Licores',
        ingredientes: [
          { nombre: 'Coñac', unidad: 'ml', cantidad: 20, precioUnitario: 25, precioTotal: 500 },
          { nombre: 'Oporto', unidad: 'ml', cantidad: 300, precioUnitario: 18, precioTotal: 5400 },
          { nombre: 'Vino Tinto', unidad: 'ml', cantidad: 100, precioUnitario: 8, precioTotal: 800 },
          { nombre: 'Vino Blanco', unidad: 'ml', cantidad: 100, precioUnitario: 7, precioTotal: 700 },
        ]
      },
    ],
    procesos: [
      {
        etapa: 'A',
        titulo: 'Tataki de vacuno',
        descripcion: 'Limpiar el filete y cortar un trozo. Condimentar al gusto y sellar por todos sus lados hasta obtener una costra dorada. Sellar al vacío y cocinar en sous vide a temperatura controlada.',
        ingredientesUsados: [
          { nombre: 'Filete de vacuno', cantidad: 300, unidad: 'gr' },
          { nombre: 'Sal', cantidad: 2, unidad: 'gr' },
          { nombre: 'Pimienta', cantidad: 2, unidad: 'gr' },
          { nombre: 'Aceite', cantidad: 10, unidad: 'ml' }
        ],
        tiempoEstimado: 75
      },
      {
        etapa: 'B',
        titulo: 'Caviar de espinaca',
        descripcion: 'Blanquear espinaca en agua hirviendo. Mixear con agua, sal a gusto y agar agar. Llevar a ebullición y enfriar hasta aproximadamente 35°C. Disponer aceite dentro de un recipiente en el refrigerador. Hacer esferificación mediante goteo en el aceite fría.',
        ingredientesUsados: [
          { nombre: 'Espinaca', cantidad: 150, unidad: 'gr' },
          { nombre: 'Agar Agar', cantidad: 2, unidad: 'gr' },
          { nombre: 'Sal', cantidad: 1, unidad: 'gr' },
          { nombre: 'Aceite', cantidad: 20, unidad: 'ml' }
        ],
        tiempoEstimado: 20
      },
      {
        etapa: 'C',
        titulo: 'Flan de espárrago',
        descripcion: 'Picar finamente las chalotas y sofreírlas en una sartén con aceite. Desglasar con vino blanco y dejar reducir. Agregar el caldo de verduras, los espárragos en rodajas finas y cocinar 5 minutos. Agregar las almendras y el perejil, mezclar hasta que esté suave. Agregar el agar-agar, hervir y verter en moldes. Congelar al menos 12 horas.',
        ingredientesUsados: [
          { nombre: 'Chalota', cantidad: 2, unidad: 'u' },
          { nombre: 'Espárragos', cantidad: 50, unidad: 'gr' },
          { nombre: 'Vino Blanco', cantidad: 100, unidad: 'ml' },
          { nombre: 'Caldo de verduras', cantidad: 150, unidad: 'ml' },
          { nombre: 'Almendras', cantidad: 50, unidad: 'gr' },
          { nombre: 'Perejil', cantidad: 15, unidad: 'gr' },
          { nombre: 'Agar Agar', cantidad: 3, unidad: 'gr' }
        ],
        tiempoEstimado: 15
      },
      {
        etapa: 'D',
        titulo: 'Salsa Oporto',
        descripcion: 'Calentar aceite y mantequilla en olla mediana. Agregar la carne y saltear hasta dorar. Agregar las verduras y saltear 2 minutos. Flambear con coñac. Incorporar el concentrado de tomate mezclando bien. Desglasar con vino tinto y oporto, añadir agua fría. Cocinar a fuego medio-bajo por 25-30 minutos revolviendo constantemente. Filtrar y rectificar sabor. Al servir, añadir mantequilla fría batiendo para dar brillo.',
        ingredientesUsados: [
          { nombre: 'Restos de vacuno', cantidad: 150, unidad: 'gr' },
          { nombre: 'Apio', cantidad: 50, unidad: 'gr' },
          { nombre: 'Zanahoria', cantidad: 50, unidad: 'gr' },
          { nombre: 'Ajo', cantidad: 50, unidad: 'gr' },
          { nombre: 'Coñac', cantidad: 20, unidad: 'ml' },
          { nombre: 'Vino Tinto', cantidad: 100, unidad: 'ml' },
          { nombre: 'Oporto', cantidad: 300, unidad: 'ml' },
          { nombre: 'Concentrado de tomate', cantidad: 5, unidad: 'gr' },
          { nombre: 'Mantequilla', cantidad: 20, unidad: 'gr' }
        ],
        tiempoEstimado: 40
      },
      {
        etapa: 'E',
        titulo: 'Chips de champiñón y Jamón serrano',
        descripcion: 'Cortar láminas delgadas de champiñón, colocar aceite y sazonar. Disponer en bandeja con silpat y hornear a 140°C por 45 minutos. Retirar y enfriar para crocancia. Jamón serrano: disponer en bandeja con aceite, hornear a 140°C por 40 minutos, retirar y enfriar.',
        ingredientesUsados: [
          { nombre: 'Champiñón', cantidad: 100, unidad: 'gr' },
          { nombre: 'Jamón Serrano', cantidad: 100, unidad: 'gr' },
          { nombre: 'Aceite', cantidad: 10, unidad: 'ml' },
          { nombre: 'Sal', cantidad: 2, unidad: 'gr' }
        ],
        tiempoEstimado: 50
      }
    ],
    tecnicasBase: [
      'Limpieza y desgrasado de carne',
      'Bridado de carne',
      'Sellado al vacío',
      'Cocina Sous Vide',
      'Esferificación',
      'Deshidratación'
    ],
    puntosCriticos: [
      'Aplicar BPM en todo el proceso',
      'Respetar PCC en cada etapa',
      'Aplicar EEP en toda la jornada trabajo',
      'Control de temperatura en sous vide (53°C)',
      'Temperatura de esferificación (35°C)',
      'Tiempo de congelación del flan (mínimo 12h)',
      'Ejecutar normas presentación de alimentos'
    ],
    utensilios: [
      'Máquina de sous vide',
      'Bolsas para vacío',
      'Selladora al vacío',
      'Sartén',
      'Olla mediana',
      'Batidora/Mixer',
      'Moldes para flan',
      'Bandeja con silpat',
      'Horno',
      'Refrigerador',
      'Cuchillos',
      'Tablas de corte',
      'Espátulas',
      'Colador/Tamiz'
    ],
    montaje: 'Colocar base de masa de hojaldre en el centro del plato. Sobre esta, disponer el tataki de vacuno cortado en medallones. A un costado, colocar el flan de espárrago desmoldado. Sobre el flan, disponer cuidadosamente las esferas de caviar de espinaca (5-7 unidades). Salsear alrededor con la salsa oporto en forma decorativa. Decorar con chips de champiñón y jamón serrano en posición vertical para dar altura. Finalizar con microgreens o hierbas frescas.',
    makeup: 3,
    factorMultiplicacion: 3,
    iva: 19
  },
  {
    id: '2',
    codigo: 'GAD403_02',
    nombre: 'Risotto de Hongos con Parmesano y Trufa',
    categoria: 'Plato Principal',
    aporte: 520,
    porcion: 1,
    tiempo: 45,
    rendimiento: 1,
    argumentacionComercial: 'RISOTTO CREMOSO DE HONGOS SILVESTRES CON ACEITE DE TRUFA',
    argumentacionTecnica: 'Arroz arborio cocido mediante técnica italiana tradicional, con hongos portobello, champiñones y shiitake, finalizado con parmesano reggiano y aceite de trufa blanca.',
    tareaInicio: 'Realizar M.e.P. de puesto de trabajo, limpiar hongos con papel húmedo (nunca lavar), picar vegetales, rallar queso parmesano, calentar caldo.',
    ingredientes: [
      {
        categoria: 'Granos',
        ingredientes: [
          { nombre: 'Arroz Arborio', unidad: 'gr', cantidad: 100, precioUnitario: 8, precioTotal: 800 },
        ]
      },
      {
        categoria: 'Verduras',
        ingredientes: [
          { nombre: 'Champiñones', unidad: 'gr', cantidad: 80, precioUnitario: 8, precioTotal: 640 },
          { nombre: 'Hongos Portobello', unidad: 'gr', cantidad: 50, precioUnitario: 12, precioTotal: 600 },
          { nombre: 'Hongos Shiitake', unidad: 'gr', cantidad: 30, precioUnitario: 15, precioTotal: 450 },
          { nombre: 'Cebolla', unidad: 'gr', cantidad: 40, precioUnitario: 2, precioTotal: 80 },
          { nombre: 'Ajo', unidad: 'gr', cantidad: 10, precioUnitario: 4, precioTotal: 40 },
          { nombre: 'Caldo de vegetales', unidad: 'ml', cantidad: 400, precioUnitario: 3, precioTotal: 1200 },
        ]
      },
      {
        categoria: 'Ovolacteos',
        ingredientes: [
          { nombre: 'Mantequilla', unidad: 'gr', cantidad: 30, precioUnitario: 10, precioTotal: 300 },
          { nombre: 'Parmesano Reggiano', unidad: 'gr', cantidad: 40, precioUnitario: 25, precioTotal: 1000 },
        ]
      },
      {
        categoria: 'Licores',
        ingredientes: [
          { nombre: 'Vino Blanco seco', unidad: 'ml', cantidad: 50, precioUnitario: 7, precioTotal: 350 },
        ]
      },
      {
        categoria: 'Abarrotes',
        ingredientes: [
          { nombre: 'Aceite de oliva', unidad: 'ml', cantidad: 20, precioUnitario: 10, precioTotal: 200 },
          { nombre: 'Aceite de trufa', unidad: 'ml', cantidad: 3, precioUnitario: 100, precioTotal: 300 },
          { nombre: 'Sal', unidad: 'gr', cantidad: 3, precioUnitario: 1, precioTotal: 3 },
          { nombre: 'Pimienta negra', unidad: 'gr', cantidad: 2, precioUnitario: 15, precioTotal: 30 },
        ]
      },
    ],
    procesos: [
      {
        etapa: 'A',
        titulo: 'Preparación de hongos',
        descripcion: 'Limpiar los hongos con papel húmedo. Cortar en láminas. Separar una porción para saltear al final como decoración. El resto picar finamente.',
        ingredientesUsados: [
          { nombre: 'Champiñones', cantidad: 80, unidad: 'gr' },
          { nombre: 'Portobello', cantidad: 50, unidad: 'gr' },
          { nombre: 'Shiitake', cantidad: 30, unidad: 'gr' }
        ],
        tiempoEstimado: 10
      },
      {
        etapa: 'B',
        titulo: 'Sofrito base',
        descripcion: 'En una olla amplia, calentar mantequilla y aceite. Agregar cebolla picada fina y ajo. Sofreír a fuego medio hasta transparencia sin dorar. Agregar hongos picados y cocinar 3-4 minutos.',
        ingredientesUsados: [
          { nombre: 'Mantequilla', cantidad: 15, unidad: 'gr' },
          { nombre: 'Aceite de oliva', cantidad: 10, unidad: 'ml' },
          { nombre: 'Cebolla', cantidad: 40, unidad: 'gr' },
          { nombre: 'Ajo', cantidad: 10, unidad: 'gr' }
        ],
        tiempoEstimado: 8
      },
      {
        etapa: 'C',
        titulo: 'Tostado del arroz',
        descripcion: 'Agregar el arroz arborio al sofrito. Tostar durante 2-3 minutos revolviendo constantemente hasta que los granos estén nacarados y ligeramente translúcidos en los bordes.',
        ingredientesUsados: [
          { nombre: 'Arroz Arborio', cantidad: 100, unidad: 'gr' }
        ],
        tiempoEstimado: 3
      },
      {
        etapa: 'D',
        titulo: 'Cocción del risotto',
        descripcion: 'Desglasar con vino blanco, dejar evaporar el alcohol. Comenzar a agregar el caldo caliente de a cucharones, revolviendo constantemente. Esperar a que se absorba antes de agregar más caldo. Repetir hasta que el arroz esté al dente (18-20 min aprox).',
        ingredientesUsados: [
          { nombre: 'Vino Blanco', cantidad: 50, unidad: 'ml' },
          { nombre: 'Caldo de vegetales', cantidad: 400, unidad: 'ml' }
        ],
        tiempoEstimado: 22
      },
      {
        etapa: 'E',
        titulo: 'Mantecado final',
        descripcion: 'Retirar del fuego. Agregar mantequilla restante y parmesano rallado. Mezclar vigorosamente hasta obtener textura cremosa. Rectificar sal y pimienta. Dejar reposar 1 minuto tapado.',
        ingredientesUsados: [
          { nombre: 'Mantequilla', cantidad: 15, unidad: 'gr' },
          { nombre: 'Parmesano', cantidad: 30, unidad: 'gr' }
        ],
        tiempoEstimado: 2
      }
    ],
    tecnicasBase: [
      'Tostado de arroz',
      'Cocción por absorción',
      'Mantecado',
      'Sofrito'
    ],
    puntosCriticos: [
      'Caldo debe estar caliente en todo momento',
      'Revolver constantemente para liberar almidón',
      'No lavar los hongos, solo limpiar',
      'Punto al dente del arroz',
      'Mantecado fuera del fuego',
      'Aplicar BPM'
    ],
    utensilios: [
      'Olla amplia de fondo grueso',
      'Cucharón',
      'Cuchara de madera',
      'Rallador fino',
      'Cuchillos',
      'Tabla de corte',
      'Olla para caldo',
      'Sartén pequeña'
    ],
    montaje: 'Emplatar el risotto en plato hondo formando un montículo suave en el centro. Decorar con láminas de hongos salteados dispuestos en forma de abanico. Rociar aceite de trufa en espiral sobre el risotto. Finalizar con láminas de parmesano y pimienta negra recién molida. Opcional: microgreens o perejil fresco.',
    makeup: 3,
    factorMultiplicacion: 3,
    iva: 19
  }
];
