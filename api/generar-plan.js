export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') { res.status(200).end(); return; }
  if (req.method !== 'POST') { res.status(405).json({ error: 'Method not allowed' }); return; }

  const { nivel, area, grado, unidad, curso, tipo } = req.body;

  if (!nivel || !area || !grado || !unidad) {
    res.status(400).json({ error: 'Faltan campos obligatorios.' });
    return;
  }

  const prompt = `Eres un experto en el currículo dominicano MINERD (Ministerio de Educación de República Dominicana). 
Genera un plan de clase completo, concreto y alineado al currículo MINERD para:
- Nivel educativo: ${nivel}
- Área curricular: ${area}
- Grado: ${grado}
- Unidad temática: ${unidad}
${curso ? `- Curso/sección: ${curso}` : ''}
- Tipo de planificación: ${tipo || 'Diaria'}

Responde ÚNICAMENTE con un objeto JSON válido, sin texto adicional, sin bloques de código, sin explicaciones previas ni posteriores. 
El JSON debe tener exactamente estas 11 claves con contenido real, específico y pedagógicamente correcto:

{
  "situacion": "Descripción concreta de la situación de aprendizaje contextualizada",
  "competencias": "Competencias específicas del área según el currículo MINERD",
  "indicadores": "Indicadores de logro medibles y observables",
  "conceptual": "Contenidos conceptuales: hechos, conceptos y principios",
  "procedimental": "Contenidos procedimentales: habilidades, técnicas y métodos",
  "actitudinal": "Contenidos actitudinales: valores, normas y actitudes",
  "estrategias": "Estrategias de enseñanza específicas para este contenido",
  "actividades": "Actividades detalladas de inicio, desarrollo y cierre",
  "recuperacion": "Actividades de recuperación para estudiantes con dificultades",
  "recursos": "Recursos didácticos específicos necesarios",
  "evaluacion": "Estrategias e instrumentos de evaluación diagnóstica, formativa y sumativa"
}`;

  try {
    const apiKey = process.env.GEMINI_API_KEY;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 2048,
        }
      })
    });

    const data = await response.json();
    const texto = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    const limpio = texto.replace(/```json/g, '').replace(/```/g, '').trim();
    const plan = JSON.parse(limpio);
    res.status(200).json(plan);
  } catch(e) {
    res.status(500).json({ error: 'Error generando el plan: ' + e.message });
  }
}
