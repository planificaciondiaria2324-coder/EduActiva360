
/* EduActiva360 — Planificación Inteligente SIN IA
   Este archivo convierte el módulo de planificación en un asistente basado en datos.
   No usa ChatGPT, Claude ni API generativa. Todo sale de bibliotecas curriculares.
*/

const CURRICULO_MINERD = [{"nivel": "Primaria", "grado": "5to grado - Primario", "area": "Matemática", "unidad": "Los números naturales del 1 al 1000", "competencias": ["Resuelve situaciones problemáticas de la vida cotidiana utilizando números naturales.", "Comunica ideas matemáticas empleando representaciones numéricas y lenguaje apropiado."], "indicadores": ["Lee y escribe números naturales hasta 1000.", "Compara y ordena cantidades usando signos y criterios de valor posicional.", "Resuelve problemas sencillos que implican conteo, comparación y operaciones básicas."], "contenidos": {"conceptual": ["Números naturales hasta 1000", "Valor posicional: unidad, decena y centena", "Comparación y orden de cantidades"], "procedimental": ["Lectura y escritura de números", "Representación de cantidades con material concreto", "Resolución de problemas del contexto"], "actitudinal": ["Interés por resolver problemas", "Orden y precisión en el trabajo", "Respeto por las ideas de sus compañeros"]}, "estrategias": ["Resolución de problemas", "Trabajo cooperativo", "Uso de material concreto", "Preguntas guiadas"], "actividades": ["Inicio: conversación sobre situaciones del mercado donde se comparan precios y cantidades.", "Desarrollo: formar números con tarjetas y ordenar cantidades de menor a mayor.", "Cierre: resolver en parejas problemas breves relacionados con compras y cantidades."], "recuperacion": ["Usar fichas o tapas para representar cantidades y reforzar lectura de números.", "Resolver ejercicios graduados con acompañamiento del docente."], "recursos": ["Pizarra", "Tarjetas numéricas", "Cuadernos", "Material concreto", "Fichas de trabajo"], "evaluacion": ["Observación directa", "Lista de cotejo", "Resolución de ejercicios prácticos", "Participación en clase"]}, {"nivel": "Primaria", "grado": "5to grado - Primario", "area": "Ciencias de la Naturaleza", "unidad": "Los seres vivos y su entorno", "competencias": ["Comprende características de los seres vivos y su relación con el entorno.", "Indaga fenómenos naturales mediante observación, preguntas y registro de información."], "indicadores": ["Identifica características comunes de los seres vivos.", "Describe relaciones entre plantas, animales y ambiente.", "Propone acciones para el cuidado de los seres vivos y su entorno."], "contenidos": {"conceptual": ["Seres vivos", "Hábitat", "Relación entre seres vivos y ambiente", "Cuidado del entorno"], "procedimental": ["Observación de organismos del entorno", "Clasificación de seres vivos", "Registro de datos sencillos"], "actitudinal": ["Valoración de la vida", "Responsabilidad ambiental", "Trabajo colaborativo"]}, "estrategias": ["Observación guiada", "Aprendizaje basado en proyectos", "Trabajo cooperativo", "Diálogo reflexivo"], "actividades": ["Inicio: observar imágenes o elementos del entorno escolar y mencionar seres vivos identificados.", "Desarrollo: clasificar seres vivos según características y hábitat.", "Cierre: elaborar compromisos para cuidar los seres vivos del centro educativo."], "recuperacion": ["Clasificar imágenes de seres vivos con apoyo visual.", "Completar una tabla sencilla de características con guía del docente."], "recursos": ["Láminas", "Videos cortos", "Cuaderno de ciencias", "Entorno escolar", "Cartulina"], "evaluacion": ["Lista de cotejo", "Registro de observación", "Producción grupal", "Preguntas orales"]}, {"nivel": "Primaria", "grado": "5to grado - Primario", "area": "Lengua Española", "unidad": "La narración y sus elementos", "competencias": ["Comprende textos narrativos orales y escritos adecuados a su nivel.", "Produce textos narrativos breves tomando en cuenta personajes, ambiente y secuencia de hechos."], "indicadores": ["Identifica inicio, desarrollo y cierre en una narración.", "Reconoce personajes, ambiente y hechos principales.", "Redacta una narración breve con coherencia."], "contenidos": {"conceptual": ["Texto narrativo", "Personajes", "Ambiente", "Secuencia: inicio, desarrollo y cierre"], "procedimental": ["Lectura comprensiva de narraciones", "Identificación de elementos narrativos", "Producción de cuentos breves"], "actitudinal": ["Disfrute por la lectura", "Respeto por las producciones de otros", "Creatividad al escribir"]}, "estrategias": ["Lectura guiada", "Escritura creativa", "Trabajo en parejas", "Socialización de producciones"], "actividades": ["Inicio: escuchar una historia breve y comentar qué ocurrió primero, después y al final.", "Desarrollo: identificar personajes, ambiente y hechos en un cuento leído.", "Cierre: escribir una narración corta relacionada con una experiencia escolar."], "recuperacion": ["Ordenar imágenes para reconstruir una historia.", "Completar una narración con palabras guía."], "recursos": ["Cuentos breves", "Pizarra", "Cuadernos", "Tarjetas de secuencia", "Diccionario"], "evaluacion": ["Rúbrica sencilla", "Lista de cotejo", "Lectura oral", "Revisión de producción escrita"]}, {"nivel": "Primaria", "grado": "5to grado - Primario", "area": "Ciencias Sociales", "unidad": "Mi comunidad y sus instituciones", "competencias": ["Reconoce características de su comunidad y la función de sus instituciones.", "Participa de manera responsable en actividades que fortalecen la convivencia comunitaria."], "indicadores": ["Identifica instituciones presentes en su comunidad.", "Explica funciones básicas de instituciones comunitarias.", "Propone acciones para mejorar la convivencia en la comunidad."], "contenidos": {"conceptual": ["Comunidad", "Instituciones comunitarias", "Normas de convivencia", "Participación ciudadana"], "procedimental": ["Identificación de instituciones locales", "Elaboración de mapas sencillos de la comunidad", "Diálogo sobre necesidades comunitarias"], "actitudinal": ["Respeto por las normas", "Sentido de pertenencia", "Participación responsable"]}, "estrategias": ["Aprendizaje situado", "Debate guiado", "Trabajo colaborativo", "Mapa conceptual"], "actividades": ["Inicio: conversar sobre lugares importantes de la comunidad.", "Desarrollo: elaborar un listado de instituciones y sus funciones.", "Cierre: proponer una acción de mejora para la comunidad escolar o barrial."], "recuperacion": ["Relacionar imágenes de instituciones con sus funciones.", "Completar un cuadro simple con apoyo del docente."], "recursos": ["Mapa local", "Imágenes", "Cartulina", "Marcadores", "Cuaderno"], "evaluacion": ["Lista de cotejo", "Exposición breve", "Trabajo grupal", "Preguntas de comprensión"]}];
const SITUACIONES_APRENDIZAJE = [{"nivel": "Primaria", "grado": "5to grado - Primario", "area": "Matemática", "unidad": "Los números naturales del 1 al 1000", "situaciones": [{"titulo": "El mercado del barrio", "descripcion": "Los estudiantes simulan compras en un mercado del barrio. Comparan precios, ordenan cantidades y resuelven situaciones donde deben leer y escribir números naturales hasta 1000."}, {"titulo": "Inventario del aula", "descripcion": "El grupo organiza un inventario de materiales del aula, registra cantidades y compara cuáles recursos hay en mayor o menor número."}]}, {"nivel": "Primaria", "grado": "5to grado - Primario", "area": "Ciencias de la Naturaleza", "unidad": "Los seres vivos y su entorno", "situaciones": [{"titulo": "El patio de la escuela", "descripcion": "Los estudiantes observan el patio o entorno cercano de la escuela para identificar seres vivos, describir dónde viven y proponer acciones para protegerlos."}]}, {"nivel": "Primaria", "grado": "5to grado - Primario", "area": "Lengua Española", "unidad": "La narración y sus elementos", "situaciones": [{"titulo": "Historias de mi comunidad", "descripcion": "Los estudiantes comparten relatos de su comunidad o familia, identifican personajes, ambiente y secuencia de hechos, y producen una narración breve."}]}, {"nivel": "Primaria", "grado": "5to grado - Primario", "area": "Ciencias Sociales", "unidad": "Mi comunidad y sus instituciones", "situaciones": [{"titulo": "Instituciones que nos ayudan", "descripcion": "Los estudiantes investigan qué instituciones existen en su comunidad y explican cómo contribuyen al bienestar y la organización social."}]}];
const BANCO_ACTIVIDADES = [{"titulo": "Tarjetas numéricas ordenadas", "nivel": ["Primaria"], "grado": ["5to grado - Primario"], "area": ["Matemática"], "competencia": "Resuelve situaciones problemáticas de la vida cotidiana utilizando números naturales.", "indicador": "Compara y ordena cantidades.", "tipo": "desarrollo", "duracion": 20, "modalidad": "parejas", "materiales": ["tarjetas numéricas", "pizarra"]}, {"titulo": "Observación del entorno escolar", "nivel": ["Primaria"], "grado": ["5to grado - Primario"], "area": ["Ciencias de la Naturaleza"], "competencia": "Comprende características de los seres vivos y su relación con el entorno.", "indicador": "Identifica características comunes de los seres vivos.", "tipo": "desarrollo", "duracion": 25, "modalidad": "grupal", "materiales": ["cuaderno", "lápiz", "entorno escolar"]}];

function normalizarTexto(v) {
  return (v || '').toString().trim().toLowerCase();
}

function buscarCurriculoSeleccionado() {
  const nivel = document.getElementById('plan-nivel')?.value || '';
  const grado = document.getElementById('plan-grado')?.value || '';
  const area = document.getElementById('plan-area')?.value || '';
  const unidad = document.getElementById('plan-unidad')?.value || '';

  return CURRICULO_MINERD.find(item =>
    item.nivel === nivel && item.grado === grado && item.area === area && item.unidad === unidad
  );
}

function lista(items) {
  if (!items) return '';
  if (Array.isArray(items)) return items.map(x => '• ' + x).join('\n');
  return String(items);
}

function cargarUnidadesCurriculares() {
  const nivel = document.getElementById('plan-nivel')?.value || '';
  const grado = document.getElementById('plan-grado')?.value || '';
  const area = document.getElementById('plan-area')?.value || '';
  const unidadSelect = document.getElementById('plan-unidad');
  if (!unidadSelect) return;

  const valorAnterior = unidadSelect.value;
  unidadSelect.innerHTML = '<option value="">Seleccionar unidad temática...</option>';

  if (!nivel || !grado || !area) return;

  const unidades = CURRICULO_MINERD
    .filter(item => item.nivel === nivel && item.grado === grado && item.area === area)
    .map(item => item.unidad);

  unidades.forEach(unidad => {
    const opt = document.createElement('option');
    opt.value = unidad;
    opt.textContent = unidad;
    unidadSelect.appendChild(opt);
  });

  if (unidades.includes(valorAnterior)) unidadSelect.value = valorAnterior;
}

function obtenerSituacionSugerida(nivel, grado, area, unidad) {
  const bloque = SITUACIONES_APRENDIZAJE.find(s =>
    s.nivel === nivel && s.grado === grado && s.area === area && s.unidad === unidad
  );
  const primera = bloque && bloque.situaciones && bloque.situaciones[0];
  return primera ? primera.descripcion : '';
}

function completarPlanificacionSinIA() {
  const plan = buscarCurriculoSeleccionado();
  if (!plan) {
    showAlert('plan-error', '⚠️ Selecciona nivel, grado, área y unidad temática disponibles en la biblioteca curricular.');
    return;
  }

  const situacion = obtenerSituacionSugerida(plan.nivel, plan.grado, plan.area, plan.unidad);

  document.getElementById('plan-situacion').value = situacion;
  document.getElementById('plan-competencias').value = lista(plan.competencias);
  document.getElementById('plan-indicadores').value = lista(plan.indicadores);
  document.getElementById('plan-conceptual').value = lista(plan.contenidos?.conceptual);
  document.getElementById('plan-procedimental').value = lista(plan.contenidos?.procedimental);
  document.getElementById('plan-actitudinal').value = lista(plan.contenidos?.actitudinal);
  document.getElementById('plan-estrategias').value = lista(plan.estrategias);
  document.getElementById('plan-actividades').value = lista(plan.actividades);
  document.getElementById('plan-recuperacion').value = lista(plan.recuperacion);
  document.getElementById('plan-recursos').value = lista(plan.recursos);
  document.getElementById('plan-evaluacion').value = lista(plan.evaluacion);

  showAlert('plan-success', '✅ Planificación completada sin IA. Revisa, ajusta y guarda el borrador.');
}

function inicializarPlanificacionSinIA() {
  const nivel = document.getElementById('plan-nivel');
  const grado = document.getElementById('plan-grado');
  const area = document.getElementById('plan-area');

  if (nivel) nivel.addEventListener('change', cargarUnidadesCurriculares);
  if (grado) grado.addEventListener('change', cargarUnidadesCurriculares);
  if (area) area.addEventListener('change', cargarUnidadesCurriculares);
}

window.addEventListener('DOMContentLoaded', inicializarPlanificacionSinIA);
