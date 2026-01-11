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

La consulta efectiva de la Lista Robinson constituye uno de los pilares fundamentales del cumplimiento normativo en materia de comunicaciones comerciales en España. Para las empresas que utilizan SMS como canal de marketing, entender el proceso técnico de verificación no es simplemente una cuestión de eficiencia operativa, sino un requisito legal cuyo incumplimiento puede derivar en sanciones significativas por parte de la AEPD. Esta guía proporciona un análisis exhaustivo de los métodos disponibles, los costes reales asociados y las mejores prácticas para implementar un sistema de verificación robusto y trazable.

<a id="contexto-legal"></a>
## 2. Contexto Legal y Obligación de Consulta

El marco jurídico que fundamenta la obligatoriedad de consulta de la Lista Robinson se sustenta en una **arquitectura** normativa multinivel que combina la normativa europea de protección de datos con la legislación nacional de servicios de la sociedad de la información.

### Fundamento en la LOPDGDD

La Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales establece en su **Artículo 23** el régimen jurídico de los sistemas de exclusión publicitaria. Aunque la redacción utiliza el término "podrán consultar", la doctrina consolidada de la AEPD interpreta esta consulta como **obligatoria en la práctica** cuando no existe consentimiento expreso previo del destinatario. Esta interpretación se fundamenta en el principio de minimización del RGPD, que exige verificar la voluntad del interesado antes de tratar sus datos para fines publicitarios. El artículo reconoce expresamente la licitud del tratamiento de datos con el objeto de evitar el envío de comunicaciones comerciales a quienes hayan manifestado su oposición, otorgando cobertura legal a los sistemas comunes de exclusión gestionados por entidades como Adigital.

### La doctrine de la AEPD sobre consulta obligatoria

La posición de la Agencia Española de Protección de Datos ha sido consistente en considerar que la consulta a sistemas de exclusión no es una facultad discrecional del responsable del tratamiento, sino una obligación derivada del principio de licitud y la obligación de demostrar el cumplimiento (accountability). En sus resoluciones recientes, la AEPD ha establecido que el mero cumplimiento formal de tener acceso a la Lista Robinson resulta insuficiente; es necesario documentar un proceso de verificación efectivo antes de cada campaña de prospección comercial. Esta doctrina implica que las empresas deben mantener sistemas de consulta actualizados y conservar evidencias de las verificaciones realizadas durante un período mínimo de tres años, alineado con los plazos de prescripción de las infracciones en materia de protección de datos.

### Obligación diferenciada según la base legitimadora

La obligación de consulta presenta matices importantes según la base legitimadora utilizada para el envío de comunicaciones comerciales. Para **prospección comercial pura** (envíos a personas sin relación contractual previa), la consulta es absolutamente obligatoria, ya que el único fundamento lícito sería el consentimiento expreso, y la Lista Robinson representa precisamente la manifestación de voluntad contraria a recibir este tipo de comunicaciones. Para **clientes existentes** bajo el régimen de soft opt-in del Artículo 21.2 LSSI, la obligación es menos estricta en teoría, pero la AEPD recomienda igualmente la consulta para evitar situaciones ambiguas, especialmente cuando el cliente pudiera haberse inscrito en la Lista Robinson después de su última interacción comercial con la empresa.

<a id="costes"></a>
## 3. Costes y Modelos de Acceso Empresarial

El acceso a los servicios de consulta de la Lista Robinson para empresas implica diferentes estructuras de costes que varían según el volumen de consultas, la metodología empleada y el nivel de integración técnica requerido.

### Modelos de tarificación disponibles

Adigital ofrece principalmente dos modalidades de acceso para empresas consultoras, cada una con implicaciones económicas distintas que deben evaluarse en función del volumen operativo y la frecuencia de verificación.

| Modelo | Descripción | Coste Unitario | Requisitos Técnicos |
|---|---|---|---|
| **Consulta puntual** | Pago por consulta individual API | 0,02€ - 0,05€ por consulta | Integración API básica |
| **Paquete de consultas** | Prepago de volúmenes mayores | 0,015€ - 0,03€ por consulta (volumen >10.000) | Integración API |
| **Acceso por volúmenes** | Modelo enterprise con acuerdos específicos | Desde 500€ mensuales (mínimo 50.000 consultas) | API completa + reporting |
| **Ficheros de depuración** | Carga masiva para comparación offline | 0,01€ - 0,02€ por registro procesado | Sin integración (proceso manual) |

### Costes operativos reales

Más allá del coste directo de las consultas, las empresas deben considerar los costes operativos asociados a cada metodología de verificación. El proceso manual mediante carga de ficheros implica aproximadamente entre **2 y 4 horas de trabajo técnico especializado por campaña**, incluyendo la preparación de datos, la ejecución del cruce y la actualización de sistemas. Para empresas que realizan campañas semanales, esto representa entre **104 y 208 horas anuales**, equivalentes a un coste de **2.600€ a 10.400€ anuales** a un precio medio de 25€/hora para técnico junior. La automatización mediante API elimina prácticamente este coste operativo, aunque requiere una inversión inicial de desarrollo que oscila entre **3.000€ y 15.000€** dependiendo de la complejidad de la integración con los sistemas existentes.

### Análisis coste-beneficio por volumen operativo

La selección del modelo de acceso debe basarse en un análisis riguroso del volumen de envíos y la frecuencia de campañas. Para empresas con menos de 500 SMS mensuales, el método de carga de fiches puede resultar más económico tras considerar los costes de desarrollo de una integración API. Sin embargo, a partir de 500-1.000 SMS mensuales, la automatización vía API comienza a ofrecer ventajas significativas tanto en costes operativos como en precisión y trazabilidad del proceso de verificación.

| Volumen Mensual | Método Recomendado | Coste Anual Estimado | Ahorro vs Manual |
|---|---|---|---|
| <500 SMS | Ficheros manuales | 1.500€ - 3.000€ | N/A (baseline) |
| 500 - 3.000 SMS | API básica | 2.000€ - 5.000€ | 30% - 50% |
| 3.000 - 20.000 SMS | API con automatización | 4.000€ - 12.000€ | 50% - 70% |
| >20.000 SMS | API enterprise | 8.000€ - 25.000€ | 60% - 80% |

<a id="metodo1"></a>
## 4. Método 1: Carga de Ficheros (Manual)

El método de carga de fiches representa la aproximación tradicional a la verificación de la Lista Robinson, especialmente adecuado para empresas con volúmenes moderados de envío o que no disponen de capacidad técnica para implementar integraciones API.

### Proceso operativo paso a paso

El proceso de depuración mediante carga de fiches se estructura en cinco fases diferenciadas que deben ejecutarse de manera secuencial para garantizar la integridad del proceso de verificación. La primera fase consiste en la **preparación y exportación de la base de datos**, donde la empresa extrae los números de teléfono de su sistema de gestión o CRM en un formato estándar, típicamente CSV o Excel, asegurándose de normalizar los formatos telefónicos para garantizar la compatibilidad con el sistema de Adigital. Esta normalización incluye la eliminación de prefijos internacionales redundantes (+34, 00), la corrección de formatos incorrectos y la validación de la integridad de los registros.

La segunda fase implica la **subida del fichier a la plataforma de Adigital**, donde la empresa accede al portal empresarial con sus credenciales y carga el fichier preparado para su procesamiento. El sistema procesa la solicitud y genera un rapport de depuración que identifica los números de teléfono que coinciden con inscripciones en la Lista Robinson. El tiempo de procesamiento oscila entre 24 y 48 horas, aunque para volúmenes pequeños puede completarse en cuestión de horas. La tercera fase consiste en la **descarga del fichier depurado**, donde la empresa recibe un fichier resultante con los números filtrados, manteniendo únicamente aquellos que no coinciden con inscripciones activas en la Lista Robinson.

La cuarta fase requiere la **actualización de los sistemas de envío** con el fichier limpio, importando los registros verificados a la plataforma de envíos o actualizando las etiquetas de exclusión en el CRM corporativo. Finalmente, la quinta fase documenta el proceso mediante la **conservación de evidencias** para auditoría, incluyendo capturas de pantalla del proceso, fechas de ejecución y logs de los registros bloqueados por coincidencia con la Lista Robinson.

### Formato de fichier CSV para consulta

La preparación correcta del fichier de entrada es crucial para evitar errores de procesamiento y garantizar la cobertura completa de la verificación. El formato estándar requiere un fichier delimitado por comas o punto y coma, con una estructura mínima que incluya el identificador único del registro y el número de teléfono a verificar.

```csv
ID_CLIENTE,TELEFONO,FECHA_ALTA,CATEGORIA
CLI001,+34612345678,2025-03-15,PROSPECTO
CLI002,+34698765432,2025-06-20,CLIENTE
CLI003,+34655555555,2025-01-10,LEAD
CLI004,+34611111111,2025-09-05,PROSPECTO
CLI005,+34633333333,2024-12-01,CLIENTE
```

### Consideraciones sobre actualización y vigencia

Una de las principales limitaciones del método de carga de fiches radica en la **dilación temporal** entre la verificación y el momento del envío. Si una empresa depura su base de datos en lunes y programa la campaña para viernes, cualquier usuario que se inscriba en la Lista Robinson durante ese período recibirá indebidamente el SMS. Por esta razón, las mejores prácticas recomiendan reducir al mínimo el intervalo entre la depuración y el envío, idealmente realizándolos en un plazo máximo de 48-72 horas. Adicionalmente, se recomienda mantener un calendario de actualizaciones mensuales para bases de datos de envío frecuente, incluso cuando no exista una campaña inminente, para garantizar la actualización continua del estado de exclusión de los contactos.

<a id="metodo2"></a>
## 5. Método 2: Integración API (Automatizada)

La integración mediante API representa el estándar de referencia para empresas con volúmenes significativos de envío, proporcionando verificación en tiempo real que elimina el riesgo de desfase temporal inherente al método manual.

### Arquitectura de la solución técnica

La integración API conecta directamente los sistemas de la empresa con el servicio de consulta de Adigital, permitiendo verificar cada número de teléfono en el momento inmediatamente anterior al envío del SMS. Esta arquitectura requiere una implementación técnica inicial que incluye el desarrollo de un cliente API capaz de interactuar con los endpoints de Adigital, la implementación de lógica de negocio para procesar las respuestas (inscrito/no inscrito) y la integración con el sistema de envío de SMS para aplicar el bloqueo automático cuando corresponda.

El flujo típico de una integración API comienza cuando el sistema de marketing automation o la plataforma de envíos recibe la instrucción de enviar un SMS a un número determinado. Antes de ejecutar el envío, el sistema lanza una consulta asíncrona o síncrona a la API de Adigital con el número de teléfono como parámetro. La API devuelve una respuesta estructurada que indica si el número está inscrito en la Lista Robinson. El sistema procesa esta respuesta: si el resultado es positivo (inscrito), bloquea el envío y registra la acción en el log de compliance; si es negativo (no inscrito), procede con el envío normalmente y registra la verificación exitosa.

### Ejemplo de integración JSON API

La comunicación con la API de Adigital se realiza mediante solicitudes HTTP estructuradas en formato JSON, con un formato de respuesta que permite procesar programáticamente el resultado de cada consulta.

```json
// Solicitud de consulta (POST)
{
  "api_key": "ADIGITAL_API_KEY_XXXXXXXX",
  "timestamp": "2026-01-12T14:30:00Z",
  "operation": "check_subscription",
  "data": {
    "phone_number": "+34612345678",
    "channel": "sms",
    "request_id": "REQ-2026-0112-001"
  }
}

// Respuesta de la API
{
  "status": "success",
  "request_id": "REQ-2026-0112-001",
  "result": {
    "phone_number": "+34612345678",
    "is_registered": true,
    "registration_date": "2025-06-15",
    "channels_blocked": ["sms", "phone"],
    "last_updated": "2026-01-10T08:00:00Z"
  }
}
```

### Pseudocódigo de implementación

La lógica de implementación debe contemplar escenarios de error y retry para garantizar la resiliencia del sistema de verificación, evitando tanto el envío no autorizado como la paralización operativa por fallos transitorios de conectividad.

```javascript
async function verificarListaRobinson(numeroTelefono) {
  const MAX_REINTENTOS = 3;
  const RETARDO_MS = 1000;
  
  for (let intento = 1; intento <= MAX_REINTENTOS; intento++) {
    try {
      const respuesta = await fetch('https://api.listarobinson.es/v2/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
          phone: normalizarTelefono(numeroTelefono),
          channel: 'sms'
        })
      });
      
      if (!respuesta.ok) {
        throw new Error(`Error HTTP: ${respuesta.status}`);
      }
      
      const datos = await respuesta.json();
      
      // Registrar log de verificación
      registrarLog({
        timestamp: new Date().toISOString(),
        telefono: numeroTelefono,
        resultado: datos.is_registered ? 'BLOQUEADO' : 'PERMITIDO',
        requestId: datos.request_id
      });
      
      return {
        puedeEnviar: !datos.is_registered,
        motivo: datos.is_registered ? 'Inscrito en Lista Robinson' : null,
        datosAuditoria: datos
      };
      
    } catch (error) {
      if (intento === MAX_REINTENTOS) {
        // Fallo definitivo: por seguridad, bloquear envío
        registrarLog({
          timestamp: new Date().toISOString(),
          telefono: numeroTelefono,
          resultado: 'ERROR',
          error: error.message
        });
        
        return {
          puedeEnviar: false,
          motivo: 'Error de verificación - Lista Robinson',
          datosAuditoria: null
        };
      }
      
      await esperar(RETARDO_MS * intento);
    }
  }
}

// Función de envío con verificación
async function enviarSMSConVerificacion(cliente, mensaje) {
  const verificacion = await verificarListaRobinson(cliente.telefono);
  
  if (!verificacion.puedeEnviar) {
    console.log(`Envío bloqueado para ${cliente.telefono}: ${verificacion.motivo}`);
    return { estado: 'BLOQUEADO', motivo: verificacion.motivo };
  }
  
  // Proceder con el envío
  const resultadoEnvio = await plataformaSMS.enviar({
    destino: cliente.telefono,
    mensaje: mensaje,
    remitente: cliente.remitente
  });
  
  return { estado: 'ENVIADO', trackingId: resultadoEnvio.trackingId };
}
```

<a id="comparativa"></a>
## 6. Comparativa de Métodos

La selección entre el método de carga de fiches y la integración API debe basarse en un análisis multidimensional que considere no solo los costes directos, sino también los factores operativos, de riesgo y de compliance.

### Tabla comparativa de criterios

| Criterio | Carga de Ficheros | API en Tiempo Real |
|---|---|---|
| **Frecuencia de actualización** | Manual (mensual/trimestral) | Automática (cada envío) |
| **Tiempo de procesamiento** | 24-48 horas | Milisegundos |
| **Volumen óptimo** | <500 SMS/mes | >500 SMS/mes |
| **Coste operativo** | Alto (gestión manual) | Bajo (automatizado) |
| **Riesgo de desfase** | Alto (entre actualizaciones) | Mínimo |
| **Evidencia para AEPD** | Exportaciones manuales | Logs trazables inmediatos |
| **Complexidad técnica** | Baja (sin desarrollo) | Media-alta (requiere integración) |
| **Escalabilidad** | Limitada | Alta |
| **Actualización continua** | No disponible | Incluida |
| **Coste por consulta** | Variable según volumen | Fijo por consulta |

### Factores de decisión clave

La decisión entre métodos debe considerar fundamentalmente tres factores: el **volumen operativo**, la **frecuencia de campañas** y los **requisitos de compliance** de la organización. Para empresas con campañas esporádicas y volúmenes reducidos, el método manual puede resultar más eficiente en términos de coste total de propiedad, ya que evita la inversión inicial de desarrollo. Sin embargo, para organizaciones con campañas frecuentes o volúmenes significativos, la automatización mediante API no solo reduce los costes operativos, sino que proporciona un nivel de trazabilidad y actualización continua que resulta determinante para demostrar el cumplimiento ante la AEPD en caso de inspección o reclamación.

<a id="documentacion"></a>
## 7. Documentación y Conservación de Evidencias

La gestión documental del proceso de verificación constituye un elemento crítico del cumplimiento normativo, ya que la carga de la prueba del respeto a la Lista Robinson recae sobre la empresa.

### Requisitos de conservación

La normativa de protección de datos y las directrices de la AEPD establecen que los responsables del tratamiento deben conservar evidencias de las verificaciones realizadas durante un período mínimo de **tres años**, alineado con los plazos de prescripción de las infracciones graves. Esta conservación debe incluir, como mínimo, los logs de cada consulta realizada con su timestamp preciso, el resultado de la verificación (inscrito/no inscrito), la acción tomada como consecuencia (bloqueo/permiso de envío) y el identificador único del registro consultado. Para el método de carga de fiches, además de estos logs agregados, debe conservarse el fichier original utilizado, el rapport de depuración generado por Adigital y las capturas de pantalla o registros del proceso de subida y descarga.

### Formato y almacenamiento de logs

Los logs de verificación deben generarse en un formato estructurado que facilite su posterior consulta y auditoría, siendo JSON el formato recomendado por su legibilidad humana y su compatibilidad con herramientas de análisis de datos. El almacenamiento debe realizarse en un sistema que garantice la integridad de los registros (inmutabilidad), la accesibilidad durante el período de conservación y la capacidad de búsqueda por los diferentes campos (fecha, número de teléfono, resultado).

### Ejemplo de log de compliance

```json
{
  "log_id": "LOG-2026-0112-0000142",
  "timestamp_utc": "2026-01-12T14:23:45.123Z",
  "operation_type": "SINGLE_CHECK",
  "request_id": "REQ-ADIGITAL-8F7A9B2C",
  "data": {
    "phone_number": "+34612345678",
    "normalized_phone": "34612345678",
    "channel": "sms"
  },
  "result": {
    "is_registered": true,
    "registration_date": "2025-06-15T00:00:00Z",
    "channels": ["sms", "phone"]
  },
  "action_taken": {
    "type": "BLOCK",
    "reason": "USER_IN_ROBINSON_LIST",
    "sms_delivery_status": "PREVENTED"
  },
  "system_info": {
    "api_endpoint": "https://api.listarobinson.es/v2/check",
    "response_time_ms": 45,
    "campaign_id": "CAMP-2026-0012"
  }
}
```

<a id="casos-reales"></a>
## 8. Casos Reales de Incumplimiento

El análisis de resoluciones sancionadoras de la AEPD proporciona una visión concreta de las consecuencias del incumplimiento y los factores que agravan o mitigan la responsabilidad de las empresas.

### Caso Adverbis Spain: Sanción por omisión de verificación

**Empresa:** Adverbis Spain (Sector: Marketing Digital)  
**Sanción:** 45.000€ [AEPD 2024]  
**Infracción:** Envío sistemático de SMS publicitarios sin consulta previa a la Lista Robinson

La empresa fue sancionada tras una investigación iniciada por múltiples reclamaciones de usuarios que recibían SMS publicitarios pese a estar inscritos en la Lista Robinson. Durante la inspección, Adverbis Spain no pudo demostrar la implementación de ningún sistema de verificación, alegando que "desconocía la obligatoriedad de consulta". La AEPD consideró esta alegación inaceptable dado el carácter público de la doctrina sobre la materia y la existencia de múltiples resoluciones previas sobre el tema. La sanción se gradúa en el rango medio-alto considerando el volumen de afectados (más de 2.000 reclamaciones) y la ausencia total de medidas correctivas previas.

### Caso Vodafone España: Doble incumplimiento

**Empresa:** Vodafone España (Sector: Telecomunicaciones)  
**Sanción:** 150.000€ [AEPD 2025]  
**Infracción:** Envío a inscritos + falta de gestión de bajas STOP

El caso de Vodafone ilustra cómo el incumplimiento simultáneo de múltiples obligaciones agrava significativamente la sanción. La empresa enviaba SMS promocionales a números inscritos en la Lista Robinson mientras acumulaba retrasos sistemáticos en el procesamiento de respuestas STOP. La AEPD identificó que Vodafone disponía de un sistema de verificación de Lista Robinson, pero este presentaba fallos técnicos que no fueron subsanados durante más de seis meses. La sanción incluyó agravantes por la condición de gran empresa del infractor, la reincidencia en las infracciones y el beneficio económico obtenido de las campañas irregulares.

### Caso Gimnasio Chain: Pequeña empresa, consecuencias graves

**Empresa:** FitnessClub Madrid (Sector: Retail Deportivo)  
**Sanción:** 12.000€ [AEPD 2024]  
**Infracción:** Campaña de captación sin verificación

Una cadena de gimnasios con 12 empleados fue sancionada por realizar una campaña de SMS para captar nuevos socios sin consultar la Lista Robinson. La empresa argumentó desconocimiento de la obligación y tamaño reducido como circunstancia atenuante. La AEPD rechazó ambos argumentos, señalando que el conocimiento de la ley se presume para cualquier operador económico y que el tamaño de la empresa no exime del cumplimiento. La sanción se sitúan en el rango inferior considerando la primera infracción y el volumen limitado de la campaña (aproximadamente 500 SMS enviados).

### Caso Inmobiliaria: Confianza indebida en proveedores

**Empresa:** Inmuebles Premium Sevilla (Sector: Inmobiliario)  
**Sanción:** 8.000€ [AEPD 2025]  
**Infracción:** Responsabilidad por actuación de tercero

Esta empresa fue sancionada por enviar SMS a través de una agencia de marketing que no realizó la verificación correspondiente. La inmobiliaria alegó que había contratado externamente el servicio y que la responsabilidad correspondía al proveedor. La AEPD recordó que la responsabilidad del responsable del tratamiento es indelegable: contratar un servicio no exime de verificar que el encargado cumple la normativa. La sanción incluyó un requerimiento para implementar procedimientos de auditoría de proveedores que garanticen el cumplimiento de las obligaciones de verificación en futuras campañas.

<a id="automatizacion"></a>
## 9. Automatización del Proceso de Verificación

La automatización completa del proceso de verificación representa la evolución natural hacia un sistema de compliance que minimiza el riesgo operativo y maximiza la trazabilidad.

### Componentes de una infraestructura automatizada

Un sistema de automatización completo integra varios componentes que trabajan de manera coordinada para garantizar la verificación continua y la documentación automática de cada operación. El **módulo de verificación en tiempo real** consulta la API de Adigital antes de cada envío individual, aplicando la lógica de bloqueo inmediata cuando corresponde. El **gestor de configuración** permite definir políticas de verificación diferenciadas según el origen del contacto (cliente prospecto), el tipo de campaña o el canal de comunicación. El **motor de logs** captura cada verificación en un sistema de almacenamiento inmutable, generando los metadatos necesarios para auditoría posterior. El **dashboard de compliance** proporciona visibilidad sobre métricas clave como porcentaje de bloqueos, tendencias de inscripción y eficacia de las verificaciones.

### Integración con sistemas existentes

La automatización efectiva requiere la integración con los sistemas de gestión de clientes (CRM), las plataformas de envío de SMS y los sistemas de analítica. Esta integración debe realizarse mediante APIs documentadas que permitan mantener la coherencia de datos entre sistemas y evitar la fragmentación de la información de contacto. Los puntos de integración críticos incluyen la sincronización del estado de exclusión (actualización automática cuando un cliente se inscribe en Lista Robinson), la aplicación de políticas de consentimiento diferenciadas y la generación de informes consolidados de compliance.

<a id="preguntas-frecuentes"></a>
## 10. Preguntas Frecuentes (FAQ)

**¿Puedo confiar en que mi proveedor SMS verifica la Lista Robinson automáticamente?**

No asuma que su proveedor realiza esta verificación por defecto. La mayoría de proveedores de SMS operan como encargados de tratamiento según el Artículo 28 RGPD, lo que significa que ejecutan instrucciones del responsable pero no asumen la responsabilidad del cumplimiento normativo. Debe verificar expresamente en su contrato si el servicio incluye verificación de Lista Robinson y, en caso negativo, implementar su propio sistema de verificación o solicitar al proveedor que lo añada como servicio adicional.

**¿Cada cuánto debo actualizar mi base de datos con la Lista Robinson?**

Si utiliza el método de carga de fiches, la recomendación mínima es una actualización mensual para bases de datos activas. Sin embargo, para campañas de alto volumen o frecuentes, el método API con verificación en tiempo real elimina esta preocupación al garantizar la actualización continua. Si ha transcurrido más de un mes desde su última actualización, existe un riesgo significativo de envío a usuarios inscritos durante ese período.

**¿Qué hago si un número está inscrito pero el cliente tiene consentimiento expreso?**

La Lista Robinson representa una manifestación de voluntad del usuario contraria a recibir comunicaciones comerciales de empresas con las que no mantiene relación. Si el cliente tiene un consentimiento expreso documentado posterior a su inscripción en la Lista Robinson, este consentimiento prevalece. Sin embargo, debe documentar cuidadosamente este consentimiento y mantenerlo actualizado, ya que la AEPD podría cuestionar la validez de un consentimiento que contradice una inscripción previa en sistemas de exclusión.

**¿Puedo utilizar la Lista Robinson para otros canales además de SMS?**

Sí, la Lista Robinson cubre múltiples canales de comunicación comercial: SMS, llamadas telefónicas, correo electrónico y correo postal. Cada usuario puede seleccionar los canales específicos en los que desea ser excluido. Su sistema de verificación debe ser capaz de consultar y respetar las preferencias de exclusión por canal, especialmente cuando su empresa utiliza varios canales de marketing.

**¿La verificación de Lista Robinson me exime de gestionar las bajas STOP?**

En absoluto. La Lista Robinson es un mecanismo de exclusión general, pero las bajas directas (respuestas STOP) deben procesarse de manera independiente e inmediata. Un usuario que responde STOP está ejercitando su derecho de oposición de forma específica respecto a su relación con usted, independientemente de su estado en la Lista Robinson. El incumplimiento de bajas STOP puede generar sanciones adicionales e independientes.

**¿Cuánto tiempo debo conservar los logs de verificación?**

El plazo mínimo de conservación es de tres años, alineado con los plazos de prescripción de infracciones graves en materia de protección de datos. Sin embargo, este plazo puede extenderse si existe un procedimiento administrativo o judicial en curso relacionado con las verificaciones. Se recomienda implementar una política de conservación que diferencie entre logs activos (últimos 12 meses), logs de archivo (1-3 años) y logs de largo plazo para casos con relevancia legal.

**¿Puedo verificar números internacionales en la Lista Robinson?**

La Lista Robinson es un sistema español y verifica principalmente números con prefijo +34. Para números internacionales de otros países, debe consultar los sistemas de exclusión disponibles en cada jurisdicción. Si su empresa realiza envíos a números internacionales desde España, necesita implementar verificaciones adicionales según la normativa del país de destino del número.

**¿Qué información debo proporcionar a la AEPD si me inspeccionan?**

Debe poder demostrar que su empresa implementa un sistema efectivo de consulta a sistemas de exclusión, incluyendo la documentación técnica de su sistema de verificación, los logs de todas las consultas realizadas durante el período inspeccionado, las acciones tomadas como resultado de cada verificación y los contratos con proveedores que indiquen las responsabilidades de cada parte en materia de verificación.

<a id="checklist"></a>
## 11. Checklist de Cumplimiento

Utilice esta lista de verificación para evaluar el estado de cumplimiento de su organización en materia de consulta a la Lista Robinson.

**□ Registro y autorización**
- [ ] Empresa registrada como entidad consultora en Adigital
- [ ] Credenciales API configuradas y seguras
- [ ] Métodos de pago asociados y fondos disponibles
- [ ] Usuario(s) autorizado(s) con acceso a plataforma

**□ Metodología de verificación**
- [ ] Método de verificación seleccionado (ficheros/API)
- [ ] Procedimientos documentados para el método elegido
- [ ] Frecuencia de actualización definida y respetada
- [ ] Proceso de verificación integrado en flujo de envíos

**□ Documentación y evidencias**
- [ ] Sistema de logs implementado
- [ ] Conservación de logs durante 3+ años
- [ ] Formato de logs estructurado y auditable
- [ ] Copias de seguridad de logs en ubicación segura

**□ Gestión de bajas y exclusiones**
- [ ] Procesamiento de respuestas STOP en <24h
- [ ] Sincronización de bajas con sistema de envíos
- [ ] Verificación de Lista Robinson periódica para contactos activos
- [ ] Protocolo de escalado para incidencias de exclusión

**□ Supervisión y mejora continua**
- [ ] Auditoría periódica del sistema de verificación
- [ ] Métricas de compliance definidas y monitorizadas
- [ ] Formación del personal operativo
- [ ] Revisión anual de procedimientos

<a id="recursos"></a>
## 12. Recursos Adicionales

**Agencia Española de Protección de Datos (AEPD):** Guía sobre el tratamiento de datos con fines de publicidad y sistemas de exclusión publicitaria. Acceda a los documentos oficiales en [aepd.es](https://www.aepd.es) para consultar la doctrina actualizada de la Agencia.

**Asociación Española de la Economía Digital (Adigital):** Portal oficial de la Lista Robinson para empresas consultoras, incluyendo documentación técnica de APIs, manuales de usuario y actualizaciones del servicio. Disponible en [listarobinson.es](https://www.listarobinson.es).

**Legislación aplicable:** 
- [Ley 34/2002 (LSSI) - BOE-A-2002-13758](https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758)
- [Ley Orgánica 3/2018 (LOPDGDD) - BOE-A-2018-16673](https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673)
- [Reglamento (UE) 2016/679 (RGPD)](https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX%3A32016R0679)

---

<a id="resumen-ejecutivo"></a>
## Resumen Ejecutivo

La consulta efectiva de la Lista Robinson constituye un requisito legal ineludible para cualquier empresa que realice envíos de SMS con fines comerciales en España. El incumplimiento de esta obligación puede derivar en sanciones significativas por parte de la AEPD, con cuantías que oscilan entre los 3.000€ para micropymes con infracciones limitadas y superan los 100.000€ para grandes empresas con incumplimientos sistemáticos.

Los métodos disponibles para la consulta empresarial presentan características diferenciadas que deben evaluarse en función del volumen operativo, la frecuencia de campañas y los recursos técnicos disponibles. El método de carga de fiches resulta adecuado para volúmenes moderados y campañas esporádicas, mientras que la integración API proporciona verificación en tiempo real esencial para operaciones de alto volumen o frecuencia.

La documentación y conservación de evidencias durante un período mínimo de tres años resulta crítica para demostrar el cumplimiento ante la AEPD. Los sistemas automatizados de verificación generan logs estructurados que facilitan esta tarea, mientras que los procesos manuales requieren mayor esfuerzo de documentación.

La selección del método de verificación debe considerar no solo los costes directos de las consultas, sino también los costes operativos asociados a cada aproximación, el nivel de riesgo de desfase entre verificaciones y envíos, y la capacidad de generar evidencias trazables para auditoría.

**Puntos clave:**
1. La consulta de la Lista Robinson es obligatoria en la práctica según doctrina AEPD
2. El método API es el estándar recomendado para operaciones de alto volumen
3. Los logs de verificación deben conservarse durante un mínimo de 3 años
4. La responsabilidad del cumplimiento es indelegable aunque se contraten proveedores
5. Las bajas STOP deben gestionarse de manera independiente e inmediata
6. La inscripción en Lista Robinson prevalece sobre el soft opt-in si es posterior
7. La inversión en automatización genera retorno en reducción de riesgos y costes operativos

**Nota importante:** Esta guía tiene fines informativos y no constituye asesoramiento legal. Para determinar las obligaciones legales específicas de su organización, consulte con un abogado especializado en protección de datos y derecho de las telecomunicaciones.
