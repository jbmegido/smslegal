---
title: "Cómo Consultar la Lista Robinson: Proceso Paso a Paso para Empresas (2026)"
description: "Guía técnica 2026: consultar Lista Robinson. Ficheros vs API, costes reales, casos AEPD. Cumple LOPDGDD sin multas."
slug: "lista-robinson-consulta-empresas"
pubDate: 2026-01-12
author: "SMS Legal"
category: "Procesos de Cumplimiento"
tags: ["Lista Robinson", "Consulta Empresarial", "API", "Verificación", "AEPD", "LOPDGDD"]
featured: false
canonical: "https://smslegal.es/blog/lista-robinson-consulta-empresas"
---

La consulta de la Lista Robinson es un control operativo crítico para cualquier empresa que realice campañas de prospección comercial en España. En 2026, la discusión ya no es si conviene “mirarla”, sino cómo integrar la verificación (manual por ficheros o automatizada por API), con evidencias trazables y costes controlados, de forma que el proceso sea defendible ante una inspección o reclamación ante la AEPD.

<a id="contexto-legal-obligacion"></a>
## 1. Contexto Legal y Obligación de Consulta

El encaje jurídico de la Lista Robinson se apoya en tres ejes:

- **LOPDGDD (Art. 23):** reconoce los sistemas de exclusión publicitaria.
- **RGPD (Art. 21 y Art. 5.2):** derecho de oposición y principio de responsabilidad proactiva (accountability).
- **LSSI (Art. 21):** limita el envío de comunicaciones comerciales electrónicas (incluyendo SMS), con la excepción de relación contractual previa bajo condiciones estrictas.

En términos prácticos, la doctrina administrativa exige que, cuando una empresa realiza **prospección comercial** (especialmente a no clientes), la consulta a un sistema de exclusión como Lista Robinson sea un control de diligencia debida.

**Cuándo debe tratarse como obligatoria (en la práctica):**

- Campañas a **leads/prospectos** sin relación contractual previa.
- Campañas con base legal “interés legítimo” sin una ponderación sólida y sin una vía de oposición efectiva.
- Campañas basadas en **bases de datos de terceros** (riesgo alto si no hay trazabilidad y verificación).

**Cuándo puede existir un margen interpretativo (pero sigue siendo recomendable):**

- Envíos a **clientes actuales** bajo “soft opt-in” (relación contractual previa y productos/servicios similares), siempre que se ofrezca oposición sencilla y se respete cualquier baja interna.

<a id="costes-modelos-acceso"></a>
## 2. Costes y Modelos de Acceso Empresarial

El “coste real” de consultar la Lista Robinson para una empresa se compone de:

1. **Coste de acceso** (modelo de consulta: ficheros o API, cuota, volumen, etc.).
2. **Coste operativo interno** (tiempo de personal, errores, auditorías, repetición de procesos).
3. **Coste de riesgo** (reclamaciones, expedientes AEPD, bloqueos por operadores, daño reputacional).

### 2.1. Modelos habituales de tarificación (estructura, no precios)

Las condiciones exactas dependen del proveedor/gestor del sistema y de la modalidad contratada. En la práctica, los modelos se presentan así:

| Modelo | Qué se paga | Unidad típica | Cuándo encaja | Riesgo operativo |
|---|---|---:|---|---|
| Carga de ficheros | Acceso + procesado | Por campaña / por lote | Campañas esporádicas, bajo volumen | Alto (desfase entre depuración y envío) |
| API por consulta | Acceso + consultas | Por verificación | Envío continuo o alto volumen | Bajo (consulta pre-envío) |
| Modelo por tramos | Acceso + tramo de volumen | Por rango mensual/anual | Volúmenes estables | Medio (si se sale de tramo) |
| Modelo híbrido | Ficheros + API (casos) | Mixto | Migración gradual | Medio (doble operativa) |

### 2.2. Tabla de costes operativos internos (estimación práctica)

| Actividad | Carga de ficheros (manual) | API (automatizada) |
|---|---:|---:|
| Preparación/normalización de base | 30–120 min por campaña | 1 vez (desarrollo) + control puntual |
| Tiempo hasta poder enviar | 24–48h (típico) | Segundos (pre-envío) |
| Riesgo de “desfase” (nuevas altas) | Alto | Bajo |
| Coste de evidencia (logs) | Manual (capturas/export) | Automático (logs por evento) |
| Auditoría interna periódica | Alta carga | Media/baja |

**Regla operativa:** si el equipo lanza campañas frecuentes o el sistema dispara envíos continuos (triggers, CRM, e-commerce), el coste interno de “hacerlo a mano” suele superar rápidamente el coste de integrar API.

<a id="metodo-ficheros"></a>
## 3. Método 1: Carga de Ficheros (Manual)

La carga de ficheros es un proceso de depuración previo: se cruza una lista de destinatarios contra el sistema de exclusión y se obtiene un resultado para filtrar antes del envío.

### 3.1. Flujo paso a paso

1. **Exportar** el universo de envío (idealmente con un identificador de campaña).
2. **Normalizar** el formato de teléfono (criterio único: E.164, prefijo +34, sin espacios).
3. **Cargar** el fichero en la plataforma de consulta empresarial.
4. **Esperar** el procesamiento.
5. **Descargar** el resultado depurado (permitidos vs excluidos).
6. **Actualizar** el sistema de envíos (marcar excluidos y bloquearlos).
7. **Archivar evidencias** (hash del fichero subido, fecha/hora, resultado y responsable).

### 3.2. Ejemplo de formato CSV (mínimo viable)

```csv
msisdn,campaign_id
+34600111222,CAMP-2026-01
+34600333444,CAMP-2026-01
+34600999888,CAMP-2026-01
```

**Controles recomendados:**

- Evitar Excel como “fuente de verdad”: usar un export reproducible desde CRM/DB.
- Mantener una columna de **ID de campaña** y, si aplica, una de **base legal** (consentimiento/soft opt-in).
- Guardar una huella (hash) del fichero para demostrar que el contenido no se alteró tras la consulta.

<a id="metodo-api"></a>
## 4. Método 2: Integración API (Automatizada)

La integración por API permite consultar en tiempo real (o cuasi-real) antes de cada envío y registrar automáticamente la evidencia. Es el enfoque más defendible cuando hay automatización de marketing, eventos o envíos continuos.

### 4.1. Flujo operativo recomendado

1. El sistema prepara un envío (campaña o trigger).
2. **Antes de enviar**, verifica:
   - baja interna (STOP / opt-out directo)
   - estado en Lista Robinson (API)
   - base legal (consentimiento válido o soft opt-in)
3. Si el resultado es “excluido”, **bloquea** y registra.
4. Si el resultado es “no excluido”, envía y registra.

### 4.2. Ejemplo de consulta API (JSON)

```json
{
  "msisdn": "+34600111222",
  "channel": "sms",
  "purpose": "marketing",
  "campaignId": "CAMP-2026-01",
  "checkedAt": "2026-01-12T09:15:00Z"
}
```

```json
{
  "msisdn": "+34600111222",
  "channel": "sms",
  "listed": true,
  "result": "BLOCK",
  "reason": "LISTA_ROBINSON",
  "evidenceId": "LR-20260112-9f1c2a",
  "providerTimestamp": "2026-01-12T09:15:00Z"
}
```

**Nota técnica:** el contrato y la documentación del proveedor determinan el esquema real, códigos de respuesta y límites de uso. El objetivo aquí es fijar qué debe registrarse y cómo se integra en el flujo de envío.

<a id="comparativa-metodos"></a>
## 5. Comparativa de Métodos

### 5.1. Tabla comparativa (visión ejecutiva)

| Característica | Carga de ficheros | API |
|---|---|---|
| Momento de verificación | Pre-campaña (por lotes) | Pre-envío (por evento) |
| Riesgo de desfase | Alto | Bajo |
| Evidencia (logs) | Manual | Automática |
| Idoneidad | Campañas esporádicas | Envío continuo / alto volumen |
| Complejidad técnica | Baja | Media (integración) |

### 5.2. Tabla comparativa por criterios (control interno)

| Criterio | Ficheros | API | Qué revisar |
|---|---:|---:|---|
| Trazabilidad por destinatario | Baja | Alta | ¿Hay evidencia por número y por campaña? |
| Repetibilidad del proceso | Media | Alta | ¿Se puede reejecutar el control de forma determinista? |
| Tiempo de respuesta ante reclamación | Medio/alto | Bajo | ¿Se puede extraer evidencia en minutos? |
| Riesgo humano (errores) | Alto | Bajo | ¿Depende de Excel/operativa manual? |
| Escalabilidad | Baja | Alta | ¿A partir de qué volumen se rompe el proceso manual? |

<a id="evidencias"></a>
## 6. Documentación y Conservación de Evidencias

La consulta debe ser **demostrable**, no solo ejecutada. En un procedimiento AEPD, el problema típico no es “no consulté”, sino “no puedo probar qué consulté, cuándo y con qué resultado”.

### 6.1. Qué evidencias conservar

- **Trazabilidad de consulta:** fecha/hora, sistema consultado, credencial/entorno (prod), resultado.
- **Identificador de campaña** y finalidad.
- **Acción tomada:** bloqueado/permitido.
- **Fuente de datos:** export reproducible o snapshot de la lista de destinatarios.

### 6.2. Retención (criterio operativo)

Sin perjuicio de políticas internas y asesoramiento específico, a nivel de operación suele ser razonable:

- Conservar evidencias **mínimo 2–3 años** para defensa administrativa.
- Mantener un esquema de borrado/anonimización compatible con minimización (p. ej., hash del MSISDN).

### 6.3. Ejemplo de log de verificación (JSON)

```json
{
  "event": "compliance_check",
  "channel": "sms",
  "campaignId": "CAMP-2026-01",
  "msisdnHash": "sha256:2d2f0b1d3a3a0f0c0b...",
  "inputs": {
    "hasInternalOptOut": false,
    "hasValidConsent": false,
    "softOptInApplicable": false
  },
  "listaRobinson": {
    "checked": true,
    "listed": true,
    "provider": "lista-robinson",
    "evidenceId": "LR-20260112-9f1c2a",
    "checkedAt": "2026-01-12T09:15:00Z"
  },
  "decision": {
    "action": "BLOCK",
    "reason": "LISTA_ROBINSON"
  },
  "system": {
    "service": "sms-sender",
    "environment": "prod",
    "requestId": "req_01HZY..."
  }
}
```

<a id="casos-incumplimiento"></a>
## 7. Casos Reales de Incumplimiento

Los siguientes casos son ejemplos de patrones sancionados por la AEPD en materia de comunicaciones comerciales y oposición/exclusión. El objetivo aquí es identificar el **fallo operativo** (qué faltó) y el **control** que lo habría evitado.

### 7.1. Adverbis Spain (gestión de campañas y responsabilidad)

- **Patrón:** campañas gestionadas por un tercero (agencia/call center) sin control efectivo de exclusiones.
- **Fallo típico:** ausencia de evidencia de verificación y/o atribución confusa de responsabilidades entre responsable y encargado.
- **Lección operativa:** contrato de encargo (Art. 28 RGPD), responsabilidades por escrito y logs centralizados.

### 7.2. Vodafone (volumen alto y oposición)

- **Patrón:** envíos/llamadas comerciales a gran escala donde el error en sincronización de bajas o exclusiones se convierte en sistemático.
- **Fallo típico:** procesado tardío de oposición (baja interna) y ausencia de control preventivo antes del envío.
- **Lección operativa:** el “STOP” y la oposición interna deben prevalecer siempre y aplicarse en tiempo casi real, además del filtro Robinson.

### 7.3. Gimnasio (soft opt-in fuera de plazo + falta de verificación)

- **Patrón:** reactivación de ex-socios pasado un periodo largo sin relación.
- **Fallo típico:** suponer que existe relación contractual “eterna” y no tratar al contacto como prospecto.
- **Lección operativa:** definir un umbral de “cliente activo” (p. ej., última interacción) y exigir verificación Robinson/consentimiento al superarlo.

### 7.4. Inmobiliaria (leads comprados y falta de trazabilidad)

- **Patrón:** adquisición de leads o números “interesados” sin prueba de consentimiento específico para SMS.
- **Fallo típico:** no poder acreditar base legal ni consulta de exclusiones antes de campañas.
- **Lección operativa:** sin trazabilidad documental (consentimiento + verificación), el riesgo sancionador es alto incluso con volúmenes moderados.

<a id="automatizacion"></a>
## 8. Automatización del Proceso de Verificación

Para que el control sea sostenible, la verificación debe convertirse en un “paso obligatorio” del pipeline de envío, con decisiones deterministas y logs.

### 8.1. Pseudocódigo (JavaScript) de control pre-envío

```javascript
async function canSendSms({ msisdn, campaignId }) {
  // 1) Baja interna (prioridad absoluta)
  if (await isOptedOutInternally(msisdn)) {
    return { allowed: false, reason: 'INTERNAL_OPTOUT' };
  }

  // 2) Base legal
  const consent = await getConsentState(msisdn);
  const hasValidConsent = consent?.type === 'opt_in' && consent?.valid === true;
  const softOptInApplicable = await isSoftOptInApplicable(msisdn);

  if (!hasValidConsent && !softOptInApplicable) {
    // 3) Si no hay base legal sólida, la verificación Robinson no “crea” licitud.
    return { allowed: false, reason: 'NO_LEGAL_BASIS' };
  }

  // 4) Lista Robinson (consulta pre-envío)
  const robinson = await checkListaRobinson({ msisdn, channel: 'sms' });

  if (robinson.listed === true) {
    return { allowed: false, reason: 'LISTA_ROBINSON', evidenceId: robinson.evidenceId };
  }

  return { allowed: true, reason: 'OK', evidenceId: robinson.evidenceId };
}
```

### 8.2. Buenas prácticas técnicas

- **Normalización única de MSISDN:** evitar múltiples formatos (+34, 0034, sin prefijo).
- **Hashing en logs:** registrar `msisdnHash` para reducir exposición en auditorías internas.
- **Idempotencia:** si reintentas envíos, reusar evidencia/resultado de la misma ventana temporal cuando el modelo lo permita.
- **Separación de responsabilidades:** “motor de compliance” separado del “motor de envío”.

<a id="faq"></a>
## 9. Preguntas Frecuentes (FAQ)

### 9.1. ¿Consultar Lista Robinson sustituye al consentimiento?

No. La Lista Robinson es un sistema de exclusión (oposición general), pero no “crea” una base legal de envío. Debe coexistir con consentimiento válido o con un soft opt-in bien aplicado.

### 9.2. ¿Cada cuánto debo consultar si uso ficheros?

Operativamente, como mínimo antes de cada campaña. Si hay campañas recurrentes, la periodicidad debería ser corta (p. ej., mensual como mínimo), asumiendo que el riesgo de desfase existe entre depuración y envío.

### 9.3. ¿La API debe consultarse antes de cada SMS?

Sí, si el objetivo es minimizar el desfase y maximizar evidencia. Alternativamente, puede haber estrategias de cache controladas, siempre que no se degrade la protección del interesado.

### 9.4. ¿Qué pesa más: STOP interno o Lista Robinson?

La baja/oposición directa al responsable debe ser prioritaria. Un STOP interno debe bloquear incluso si el número no está en Lista Robinson.

### 9.5. ¿Puedo enviar a un “cliente” aunque esté en Lista Robinson?

Depende del caso. La inscripción en un sistema de exclusión suele aplicarse a empresas con las que no existe relación, pero en la práctica es un indicador fuerte de voluntad de no recibir publicidad. Si existe duda, la opción conservadora es no enviar y documentar la decisión.

### 9.6. ¿Qué debo guardar como prueba ante una reclamación?

Al menos: fecha/hora de consulta, resultado, identificador de campaña, acción tomada y trazabilidad del flujo (requestId/evidenceId). Sin logs por destinatario, la defensa se debilita.

### 9.7. ¿Quién responde ante la AEPD si subcontrato el envío?

El responsable del tratamiento (quien decide la finalidad) sigue siendo el primer obligado. La subcontratación no elimina la necesidad de controles, contratos y supervisión.

### 9.8. ¿Qué errores suelen generar más expedientes?

Bajas no procesadas, campañas a bases de datos sin trazabilidad, y ausencia de evidencia (logs) que demuestre verificación y decisiones pre-envío.

<a id="checklist"></a>
## 10. Checklist de Cumplimiento

### 10.1. Gobernanza y base legal

- [ ] Identificar finalidad (marketing, transaccional, servicio) por campaña.
- [ ] Verificar que existe base legal (consentimiento/soft opt-in) documentada.
- [ ] Definir umbral operativo de “cliente activo” (p. ej., última interacción).

### 10.2. Operativa de oposición (STOP)

- [ ] Procesar bajas internas en un plazo corto (objetivo: <24–48h).
- [ ] Unificar listas de exclusión internas (CRM, plataforma SMS, helpdesk).

### 10.3. Verificación Lista Robinson

- [ ] Elegir modelo (ficheros o API) según volumen y frecuencia.
- [ ] Normalizar MSISDN en un único formato antes de consultar.
- [ ] Asegurar que la verificación ocurre antes del envío (pre-campaña o pre-evento).

### 10.4. Evidencias y retención

- [ ] Registrar logs por destinatario (resultado + acción).
- [ ] Conservar evidencias de forma consultable (exportable) ante auditoría.
- [ ] Minimizar datos en logs (hash/seudonimización cuando proceda).

### 10.5. Terceros y contratos

- [ ] Firmar contrato de encargo (Art. 28 RGPD) con proveedor de envío.
- [ ] Definir quién realiza la verificación Robinson y cómo se evidencia.
- [ ] Revisar SLAs de logs, retención y respuesta ante reclamaciones.

<a id="recursos"></a>
## 11. Recursos Adicionales

- **AEPD (España):** resoluciones y guías oficiales – https://www.aepd.es
- **LOPDGDD (BOE):** Ley Orgánica 3/2018 – https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673
- **LSSI (BOE):** Ley 34/2002 – https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758
- **Lista Robinson (portal):** https://www.listarobinson.es

### Resumen Ejecutivo (7 puntos clave)

1. La Lista Robinson es un control de exclusión que debe integrarse como proceso operativo (no como “verificación puntual”).
2. En prospección comercial, la consulta es un estándar de diligencia exigible en la práctica.
3. La carga de ficheros es viable en baja frecuencia, pero introduce riesgo de desfase y evidencia manual.
4. La API permite verificación pre-envío, mejor trazabilidad y menor coste operativo recurrente.
5. Sin logs por destinatario (timestamp, resultado, acción), la empresa queda expuesta ante reclamaciones.
6. El STOP/oposición interna debe tener prioridad absoluta y sincronización rápida.
7. Los fallos se repiten: bases de terceros sin trazabilidad, bajas no procesadas y ausencia de evidencias.

**Nota legal:** este material es informativo y no constituye asesoramiento jurídico. Para un análisis aplicable a su caso (base legal, sector, relaciones contractuales, canal y proveedor), es recomendable revisión por especialistas.
