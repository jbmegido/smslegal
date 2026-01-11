---
title: "Lista Robinson: Qué Es, Cómo Funciona y Obligaciones Legales"
description: "Guía completa sobre Lista Robinson en España. Normativa, funcionamiento técnico, obligaciones legales para empresas SMS y métodos de verificación (manual vs API)."
pubDate: 2026-01-10
author: "SMS Legal"
category: "Marco Legal"
tags: ["Lista Robinson", "RGPD", "LSSI", "LOPDGDD", "SMS", "Compliance", "Adigital"]
featured: true
---

La gestión de campañas de marketing a través de SMS en España exige un equilibrio riguroso entre la eficacia comercial y el respeto a la privacidad del destinatario. En este ecosistema, la Lista Robinson se erige como el principal sistema de exclusión publicitaria, permitiendo a los ciudadanos revocar de manera general su consentimiento para recibir comunicaciones comerciales.

Para cualquier entidad que realice envíos de SMS con fines publicitarios, la consulta de esta lista no es una opción recomendada, sino una obligación legal en la práctica derivada de la doctrina de la AEPD. Este artículo analiza en profundidad qué es la Lista Robinson, bajo qué normativa se ampara y cómo deben las empresas integrar su verificación en sus procesos técnicos para evitar sanciones administrativas que, según datos de 2024-2026, han experimentado un incremento significativo en el sector de las telecomunicaciones y la publicidad.

Cubriremos desde la base legal en la LOPDGDD y la LSSI hasta los métodos técnicos de consulta mediante API, preparando al responsable de tratamiento para una gestión de datos conforme al marco normativo vigente.

<a id="contexto-legal"></a>
## 1. Contexto Legal: El Marco de la Publicidad en España

El régimen jurídico que regula la Lista Robinson en España es multidisciplinar, combinando normativas de protección de datos y de servicios de la sociedad de la información.

### 1.1. LOPDGDD: Artículo 23

La [Ley Orgánica 3/2018 (LOPDGDD)](https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673) es la piedra angular. En su **Artículo 23**, titulado "Sistemas de exclusión publicitaria", establece explícitamente la licitud del tratamiento de datos personales con el objeto de evitar el envío de comunicaciones comerciales a los interesados que hayan manifestado su negativa u oposición.

**Texto literal del Art. 23.4:**
> "Quienes pretendan llevar a cabo actividades de prospección comercial podrán consultar los sistemas de exclusión publicitaria."

Aunque la redacción utiliza el término "podrán" (optativo), **la doctrina consolidada de la AEPD** interpreta esta consulta como **obligatoria en la práctica** cuando no existe consentimiento expreso previo. Esta interpretación se basa en el principio de minimización del RGPD (Art. 5.1.c), que exige verificar la voluntad del interesado antes de procesar sus datos para fines publicitarios.

Este artículo otorga reconocimiento legal a los sistemas comunes de exclusión (como el gestionado por Adigital) y establece que las empresas deben integrarlos en sus procesos de verificación de compliance.

### 1.2. LSSI: Artículo 21

La [Ley 34/2002 (LSSI)](https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758) regula específicamente las comunicaciones comerciales electrónicas (SMS, email). Su **Artículo 21** prohíbe el envío de comunicaciones publicitarias por estos medios que no hayan sido solicitadas o autorizadas expresamente. 

No obstante, permite excepciones en relaciones contractuales previas (soft opt-in), siempre que:
1. Los datos se obtuvieron lícitamente en el contexto de una venta
2. El envío se refiere a productos o servicios similares
3. Se ofrece una vía de baja sencilla y gratuita en cada comunicación

### 1.3. El Reglamento General de Protección de Datos (RGPD)

El RGPD define en su **Artículo 21** el derecho de oposición. La Lista Robinson es, en la práctica, un mecanismo centralizado para ejercer este derecho de forma preventiva ante cualquier entidad con la que el ciudadano no mantenga una relación activa.

Cuando un usuario se inscribe en la Lista Robinson, está ejerciendo su derecho de oposición de forma anticipada y generalizada, lo que obliga a las empresas a respetar esta manifestación de voluntad.

<a id="que-es"></a>
## 2. ¿Qué es la Lista Robinson?

La **Lista Robinson** es un servicio de exclusión publicitaria gestionado por la **Asociación Española de la Economía Digital (Adigital)**. Su finalidad es reducir la presión publicitaria que reciben los usuarios a través de diferentes canales: SMS, llamadas telefónicas, correo electrónico y correo postal.

### Características clave:

- **Gratuita para ciudadanos:** Cualquier persona puede inscribirse sin coste
- **De pago para empresas:** Las organizaciones deben pagar por consultar el registro
- **Carácter "negativo":** El usuario se inscribe para NO recibir publicidad de empresas de las que no es cliente
- **Alcance temporal:** La inscripción no anula los consentimientos expresos otorgados directamente a una empresa **después** de la fecha de alta en el servicio de exclusión
- **Multivía:** Cubre SMS, llamadas, email y correo postal (el usuario puede seleccionar canales específicos)

### Funcionamiento práctico:

Cuando un ciudadano se inscribe en la Lista Robinson indicando su número de teléfono móvil, está manifestando expresamente: *"No deseo recibir SMS comerciales de empresas con las que no tengo una relación contractual activa"*.

Esta manifestación de voluntad es vinculante para todas las empresas que operen en España y pretendan realizar prospección comercial sin consentimiento previo del destinatario.

<a id="funcionamiento"></a>
## 3. Funcionamiento Técnico y Verificación

Técnicamente, la Lista Robinson opera como una base de datos centralizada que contiene identificadores de usuarios (números de teléfono, correos electrónicos, DNIs según el canal de exclusión solicitado).

### 3.1. El proceso de alta del usuario

Cuando un ciudadano se registra en [listarobinson.es](https://www.listarobinson.es), sus datos pasan a formar parte del fichero de exclusión. Según las condiciones del servicio gestionado por Adigital, puede existir un **periodo de actualización** de bases de datos que el operador del sistema considera razonable para permitir a las empresas sincronizar sus sistemas.

**Importante:** Las empresas deben verificar las condiciones específicas vigentes del servicio de Lista Robinson al momento de implementar sus procesos de verificación, ya que los plazos técnicos pueden variar según las actualizaciones del sistema.

### 3.2. Métodos de consulta para empresas

Las empresas pueden interactuar con el sistema de dos formas principales:

#### Comparativa de métodos:

| Característica | Carga de Ficheros | API en Tiempo Real |
|---|---|---|
| **Descripción** | Proceso manual de depuración | Integración automatizada |
| **Frecuencia actualización** | Manual (mensual/trimestral) | Automática (cada envío) |
| **Tiempo procesamiento** | 24-48 horas | Milisegundos |
| **Volumen recomendado** | <500 SMS/mes | >500 SMS/mes |
| **Logs de verificación** | Manuales | Automáticos con timestamp |
| **Coste operativo** | Alto (gestión manual) | Bajo (automatizado) |
| **Riesgo de desfase** | Alto (entre actualizaciones) | Mínimo |
| **Evidencia para AEPD** | Exportaciones manuales | Logs trazables inmediatos |

#### Método 1: Carga de ficheros (Manual)

Proceso donde la empresa sube su base de datos a la plataforma de Adigital para que sea "depurada". El sistema devuelve el fichero limpio, eliminando los registros que coinciden con la lista de exclusión.

**Ventajas:** 
- No requiere integración técnica
- Válido para campañas esporádicas

**Desventajas:**
- Requiere espera de 24-48h
- Riesgo de desfase si la base se actualiza después de la depuración
- Gestión manual de evidencias

#### Método 2: Verificación vía API (Automatizada)

Método automatizado que permite consultar en tiempo real si un número de teléfono específico está inscrito antes de disparar un SMS. Este es el **estándar recomendado** para infraestructuras de envío de alto volumen.

**Ventajas:**
- Verificación instantánea pre-envío
- Logs automáticos con timestamp (evidencia para AEPD)
- Actualización continua (sin riesgo de desfase)
- Integración con sistemas de marketing automation

**Desventajas:**
- Requiere desarrollo técnico inicial
- Coste por consulta (aunque marginal)

<a id="obligaciones"></a>
## 4. Obligaciones Legales para Empresas de SMS

La obligatoriedad de consultar la Lista Robinson depende de la **base de legitimación** que utilice la empresa para el envío del SMS.

### 4.1. Envío a no clientes (Prospección comercial)

**Situación:** La empresa adquiere una base de datos de terceros o desea realizar una campaña de captación ("frío") a personas con las que no tiene relación contractual previa.

**Obligación:** La consulta de la Lista Robinson es **obligatoria según la doctrina de la AEPD**. Aunque el Art. 23.4 LOPDGDD utiliza el término "podrán consultar", la interpretación consolidada por la Agencia entiende que el principio de minimización del RGPD exige esta verificación para respetar la voluntad manifestada por los usuarios inscritos.

**Base legal combinada:**
- Art. 23 LOPDGDD (sistemas de exclusión)
- Art. 6.1.a RGPD (requiere consentimiento para prospección)
- Art. 21 LSSI (prohíbe comunicaciones no solicitadas)

### 4.2. Envío a clientes actuales (Soft opt-in)

**Situación:** Existe una relación contractual previa y el SMS promociona productos o servicios similares a los contratados (amparado por el Art. 21.2 LSSI).

**Obligación:** La consulta no es estrictamente obligatoria según la literalidad de la norma, ya que prevalece la relación cliente-empresa sobre el registro genérico de exclusión.

**Sin embargo, existe una excepción crítica:** Si el cliente se inscribió en la Lista Robinson **después** de su última interacción comercial con la empresa, podría interpretarse como una manifestación de voluntad de cese de toda publicidad, incluso de empresas con las que tuvo relación previa.

**Recomendación técnica:** Verificar siempre la Lista Robinson, incluso para clientes, para evitar situaciones ambiguas que puedan derivar en reclamaciones.

### 4.3. Periodo de vigencia de la relación contractual

El soft opt-in tiene límites temporales razonables. La doctrina de la AEPD establece que generalmente se considera razonable un periodo de **12 meses** desde la última interacción comercial. Pasado este plazo sin nueva transacción, se recomienda obtener consentimiento expreso renovado o, como mínimo, verificar la Lista Robinson antes de cualquier envío.

<a id="casos-practicos"></a>
## 5. Casos Prácticos y Resoluciones de la AEPD

### Caso 1: La campaña de captación masiva (Incumplimiento grave)

**Situación:** Una correduría de seguros compra una base de datos de 50.000 números de teléfono para ofrecer pólizas de salud vía SMS. Realiza el envío sin consultar la Lista Robinson.

**Contexto:** La base de datos adquirida supuestamente contenía "usuarios interesados en seguros", pero sin consentimiento específico para recibir SMS de esta correduría en particular.

**Resultado:** 
- **Infracción:** Grave según Art. 23 LOPDGDD + Art. 6.1 RGPD
- **Sanción orientativa:** Entre 10.000€ y 50.000€ según volumen de afectados inscritos en Lista Robinson
- **Agravante:** La AEPD considera que no se respetó la voluntad de exclusión manifestada por los usuarios inscritos
- **Defensa rechazada:** La empresa alegó que "la base de datos venía con consentimientos", pero no pudo demostrar que esos consentimientos incluían específicamente el canal SMS ni la cesión a terceros

**Lección clave:** La compra de bases de datos sin verificación de Lista Robinson multiplica el riesgo sancionador.

---

### Caso 2: Doble infracción - STOP manual + Lista Robinson

**Empresa:** Sector Óptica / Retail  
**Sanción:** 10.000€ [AEPD 2024]  

**Situación:** Un cliente envió múltiples peticiones de baja:
1. Respondió "STOP" a un SMS comercial
2. Envió email solicitando "NO más publicidad"
3. Estaba inscrito en la Lista Robinson desde 6 meses antes

**Infracción:** La empresa continuó enviando SMS durante 3 meses adicionales debido a:
- Falta de sincronización entre sistema de envíos y CRM
- No consultar periódicamente la Lista Robinson
- No procesar las bajas manuales (STOP) en menos de 48h

**Resultado AEPD:** Sanción de 10.000€ considerando:
- **Doble incumplimiento:** Ignorar STOP directo (Art. 21 RGPD) + estar en Lista Robinson (Art. 23 LOPDGDD)
- **Negligencia técnica:** La empresa no implementó medidas organizativas para garantizar el procesamiento inmediato de bajas
- **Defensa rechazada:** Alegar "error técnico puntual" no exime de responsabilidad cuando el error persiste durante meses

**Lección clave:** Los sistemas de bajas internas (STOP) deben tener prioridad absoluta y sincronizarse con la verificación de Lista Robinson. La verificación debe ser periódica, no puntual.

---

### Caso 3: Consulta en tiempo real vía API (Cumplimiento ejemplar)

**Situación:** Un e-commerce especializado en deporte desea enviar un SMS con un descuento del 15% a usuarios que abandonaron un carrito de compra pero no finalizaron la transacción. Estos usuarios **no son clientes previos** (no hay relación contractual).

**Proceso técnico implementado:**

1. **Antes del envío:** El sistema lanza una consulta automática vía API a la Lista Robinson milisegundos antes de cada SMS individual
2. **Resultado consulta:** El número está inscrito en la lista desde hace 4 meses
3. **Acción del sistema:** 
   - Bloquea automáticamente el envío
   - Registra en log: `[2026-01-10 14:23:45] - Envío bloqueado - Nº +34612345678 - Motivo: Lista Robinson - Timestamp consulta API`
4. **Conservación:** Log almacenado durante 3 años como evidencia de compliance

**Resultado:** 
- **Cumplimiento total:** La empresa demuestra "responsabilidad activa" (Accountability, Art. 5.2 RGPD)
- **Evidencia trazable:** En caso de inspección AEPD, puede demostrar que NO envió SMS a usuarios inscritos
- **Beneficio reputacional:** Evita reclamaciones de usuarios sensibles a la privacidad

**Lección clave:** La verificación automatizada en tiempo real con logs es el estándar de oro para demostrar compliance ante la AEPD.

<a id="errores-comunes"></a>
## 6. Errores Comunes en la Gestión de Exclusión

### Error 1: Pensar que solo aplica a llamadas telefónicas

**Mito:** "La Lista Robinson es solo para telemarketing de voz"

**Realidad:** La normativa y el servicio de Adigital cubren **todos los canales** de comunicación comercial:
- SMS (mensajería texto)
- Llamadas telefónicas
- Email
- Correo postal

Cada usuario puede seleccionar en qué canales desea ser excluido. Una empresa puede estar incumpliendo aunque solo use SMS y piense que "Robinson es para llamadas".

---

### Error 2: Ignorar el registro de logs de verificación

**Mito:** "Con consultar la lista es suficiente"

**Realidad:** En caso de inspección o reclamación ante la AEPD, **no basta con afirmar que se consultó la Lista Robinson**. Hay que demostrarlo con evidencia técnica:

**Evidencias necesarias:**
- Timestamp de cada consulta
- Resultado de la verificación (inscrito/no inscrito)
- Acción tomada (envío bloqueado/permitido)
- Identificador del número consultado

Sin logs trazables, la empresa no puede defender su compliance ante la AEPD, y la carga de la prueba recae sobre ella.

---

### Error 3: No actualizar los ficheros periódicamente

**Situación típica:** Una empresa descarga el fichero de Lista Robinson en enero, depura su base de datos, y no vuelve a consultar hasta junio.

**Problema:** Entre enero y junio, cientos de usuarios pueden haberse inscrito en la lista. Si la empresa envía SMS a estos nuevos inscritos, está incumpliendo, aunque haya "consultado" la lista hace meses.

**Frecuencia recomendada:**
- **Método ficheros:** Actualización mensual mínima
- **Método API:** Consulta en tiempo real (cada envío)

---

### Error 4: Asumir que el proveedor SMS lo hace por defecto

**Mito:** "Mi plataforma de envío SMS gestiona la Lista Robinson automáticamente"

**Realidad:** La mayoría de los proveedores de SMS son **Encargados de Tratamiento** (Art. 28 RGPD), NO Responsables. Salvo que el contrato especifique expresamente que el proveedor incluye verificación de Lista Robinson como servicio, **la responsabilidad legal recae sobre el Responsable del Tratamiento** (la empresa que envía).

**Verificación necesaria:**
1. Revisar el contrato de Encargado de Tratamiento
2. Confirmar explícitamente si incluye verificación de Lista Robinson
3. Si no la incluye, implementarla por cuenta propia antes de los envíos

**En caso de sanción:** Si el proveedor no ofrecía la herramienta y la empresa no la gestionó, la AEPD sanciona a la empresa contratante, no al proveedor técnico.

<a id="consecuencias"></a>
## 7. Consecuencias del Incumplimiento

### 7.1. Riesgo Sancionador

La Agencia Española de Protección de Datos (AEPD) clasifica el incumplimiento del deber de consulta a sistemas de exclusión como una **infracción grave**.

**Cuantías orientativas:**

| Tamaño Empresa | Sanción Habitual | Contexto |
|---|---|---|
| Micropyme (1-9 empleados) | 3.000€ - 15.000€ | Primera infracción, pocos afectados |
| Pequeña empresa (10-49) | 10.000€ - 50.000€ | Reincidencia o volumen medio |
| Mediana empresa (50-249) | 30.000€ - 200.000€ | Volumen alto o negligencia grave |
| Gran empresa (250+) | 100.000€ - millones | Envíos masivos sistemáticos |

**Estadística 2024-2026:** Según datos de la AEPD, se registran aproximadamente **1.488 resoluciones anuales relacionadas con publicidad no solicitada**, de las cuales un porcentaje significativo incluye la falta de verificación de sistemas de exclusión publicitaria como agravante.

**Criterios de graduación de la sanción:**
1. Volumen de personas afectadas inscritas en Lista Robinson
2. Duración de la campaña (puntual vs sistemática)
3. Intencionalidad vs negligencia
4. Medidas técnicas implementadas (o ausencia de ellas)
5. Cooperación con la AEPD durante la investigación
6. Beneficio económico obtenido

---

### 7.2. Responsabilidad Solidaria

De acuerdo con la jurisprudencia reciente y la doctrina de la AEPD:

**Si un proveedor de servicios de envío:**
- NO ofrece herramientas de verificación de Lista Robinson, Y
- La empresa contratante NO realiza la gestión por su cuenta, Y
- Se produce una infracción por envío a inscritos

**Entonces:** Ambas partes pueden ser consideradas **responsables solidarios** ante una reclamación, especialmente si:
- El contrato de Encargado de Tratamiento no especifica quién asume esta obligación
- El proveedor conocía el incumplimiento y no alertó al cliente
- Existe negligencia compartida

**Protección contractual necesaria:**
- Contrato de Encargado de Tratamiento (Art. 28 RGPD) que especifique claramente las obligaciones de verificación
- Cláusulas de responsabilidad y garantías
- SLAs sobre conservación de logs de verificación

---

### 7.3. Daño Reputacional y Operativo

Más allá de la sanción económica:

**Publicación en registro público:** Las sanciones superiores a ciertos umbrales se publican en el registro de infracciones de la AEPD, visible públicamente.

**Efecto en B2B:** Empresas que realizan licitaciones públicas o contratos con grandes corporaciones pueden ver rechazadas sus ofertas por historial de sanciones RGPD.

**Bloqueo técnico:** Según la [Orden TDF/149/2025](https://www.boe.es/buscar/doc.php?id=BOE-A-2025-2870), los operadores pueden bloquear el tráfico de remitentes que reciban reportes masivos de spam, paralizando la operativa comercial.

<a id="como-cumplir"></a>
## 8. Cómo Cumplir Correctamente: Protocolo de Implementación

Para garantizar un cumplimiento del 100% en sus envíos de SMS, siga este protocolo:

### Paso 1: Registro en Adigital

Inscriba a su empresa como entidad consultora en la [plataforma oficial de la Lista Robinson](https://www.listarobinson.es). Complete el registro empresarial y configure los métodos de pago para las consultas.

### Paso 2: Auditoría de Base de Datos

Clasifique sus contactos en categorías claras:

**Categoría A - Clientes actuales:**
- Relación contractual activa (menos de 12 meses desde última transacción)
- Consentimiento expreso documentado para SMS

**Categoría B - Clientes inactivos:**
- Relación contractual finalizada hace más de 12 meses
- Requiere verificación obligatoria Lista Robinson

**Categoría C - Prospectos/Leads:**
- Sin relación contractual previa
- Requiere verificación obligatoria Lista Robinson + consentimiento expreso

### Paso 3: Implementación de Verificación

#### Para volumen bajo (<500 SMS/mes):
**Método:** Depuración manual mensual mediante carga de ficheros

**Proceso:**
1. Exportar base de datos de categorías B y C
2. Subir a plataforma Adigital
3. Esperar depuración (24-48h)
4. Descargar fichero limpio
5. Actualizar base de datos de envíos
6. Documentar proceso (captura de pantalla + fecha)

#### Para volumen alto (>500 SMS/mes):
**Método:** Integración API de verificación automática

**Proceso:**
1. Solicitar credenciales API a Adigital
2. Integrar endpoint de consulta en flujo de envío
3. Implementar lógica:
```
SI consulta_API(numero) == "inscrito" ENTONCES
    bloquear_envio()
    registrar_log("Bloqueado - Lista Robinson")
SINO
    permitir_envio()
    registrar_log("Enviado - Verificado no inscrito")
FIN SI
```
4. Conservar logs durante 3+ años

### Paso 4: Gestión de Bajas Internas (STOP)

La Lista Robinson es el primer filtro, pero **su propia lista de "STOP SMS"** (bajas directas) debe tener prioridad absoluta:

**Protocolo de bajas internas:**
1. Procesar peticiones STOP en menos de 24 horas
2. Sincronizar con sistema de envíos inmediatamente
3. Confirmar baja al usuario vía SMS
4. Conservar evidencia de la petición (SMS original + timestamp)
5. Consultar Lista Robinson periódicamente incluso para números con STOP interno

### Paso 5: Documentación y Evidencias

**Conservar durante mínimo 3 años:**
- Logs de consultas a Lista Robinson (API o ficheros)
- Timestamps de verificaciones
- Resultados de depuraciones
- Evidencias de bajas procesadas (STOP)
- Contratos de Encargado con proveedores SMS

<a id="implementacion-tecnica"></a>
## 9. Implementación Técnica de la Verificación

La consulta de la Lista Robinson debe realizarse antes de cada campaña masiva. Para campañas frecuentes o de alto volumen, esto implica:

### Coste operativo de la verificación manual

**Proceso manual completo por campaña:**

1. **Descarga y actualización Lista Robinson:** 30-45 minutos
   - Acceso a plataforma Adigital
   - Descarga de fichero actualizado
   - Validación de integridad del archivo

2. **Cruce de bases de datos (Excel/SQL):** 45-90 minutos
   - Exportación de base de datos de marketing
   - Normalización de formatos (+34, 00, sin prefijo)
   - Ejecución de VLOOKUP o query SQL
   - Identificación de coincidencias

3. **Depuración y actualización:** 20-40 minutos
   - Eliminación de números coincidentes
   - Etiquetado de registros bloqueados
   - Actualización de CRM/sistema envío

4. **Documentación de evidencias:** 30-60 minutos
   - Captura de pantalla del proceso
   - Exportación de log de exclusiones
   - Archivo de evidencia para auditoría

**Total por campaña:** Entre 2 y 4 horas de trabajo técnico especializado

**Para empresas con campañas frecuentes:**
- 1 campaña/semana = 52 campañas/año = **104-208 horas anuales**
- 2 campañas/semana = 104 campañas/año = **208-416 horas anuales**

A un coste medio de 25€/hora de técnico junior, esto representa entre **2.600€ y 10.400€ anuales** solo en tiempo de verificación manual.

### Beneficios de la automatización vía infraestructura técnica

Este proceso puede automatizarse mediante infraestructuras especializadas que integran la verificación en el flujo de envío. Estas soluciones incluyen:

**1. Consulta automática Lista Robinson en tiempo real**
- Integración API con actualización continua
- Sin necesidad de descargas manuales
- Verificación milisegundos antes del envío

**2. Gestión centralizada de bajas (STOP)**
- Procesamiento instantáneo de peticiones STOP
- Sincronización automática con sistema de envíos
- Confirmación automática al usuario

**3. Logs de verificación con timestamp automático**
- Conservación automática durante 3+ años
- Evidencia verificable para AEPD
- Exportación instantánea para auditorías

**4. Bloqueo preventivo de envíos sin base legal**
- Validación pre-envío que impide campañas a números sin consentimiento
- Alertas automáticas de riesgo de compliance
- Dashboard de métricas de exclusión

### Cuándo considerar la automatización

La automatización es especialmente recomendable si tu empresa:

- Envía **más de 3.000 SMS al mes** de forma regular
- Realiza **campañas semanales o quincenales**
- Tiene **equipos técnicos limitados** para gestión manual
- Opera en sectores de **alto riesgo sancionador** (seguros, telecomunicaciones, servicios financieros)
- Necesita **evidencia trazable inmediata** para auditorías o inspecciones

Si tu negocio envía más de 3.000 SMS al mes y necesitas garantizar el cumplimiento sin dedicar entre 100 y 400 horas anuales al proceso manual, existen [infraestructuras especializadas con verificación automática de Lista Robinson](/solicitud) que reducen el tiempo operativo de horas a minutos por campaña, generando logs de compliance automáticos.

<a id="recursos-adicionales"></a>
## 10. Recursos Adicionales

Para profundizar en la normativa y casos específicos:

- **Agencia Española de Protección de Datos (AEPD):** Guía sobre el tratamiento de datos con fines de publicidad - [aepd.es](https://www.aepd.es)
- **Adigital:** Portal oficial Lista Robinson para empresas - [listarobinson.es](https://www.listarobinson.es)
- **Boletín Oficial del Estado:** [Ley 34/2002 (LSSI) - BOE-A-2002-13758](https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758)
- **Boletín Oficial del Estado:** [LOPDGDD - BOE-A-2018-16673](https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673)

<a id="resumen"></a>
## 11. Resumen

### Puntos clave a recordar:

✓ **La Lista Robinson es el principal sistema de exclusión publicitaria** en España, gestionado por Adigital y amparado por el Art. 23 LOPDGDD.

✓ **La consulta es obligatoria en la práctica** para toda empresa que realice prospección comercial vía SMS sin consentimiento expreso, según la doctrina consolidada de la AEPD.

✓ **Dos métodos de verificación:** Carga manual de ficheros (volumen bajo) o integración API en tiempo real (volumen alto, recomendado).

✓ **Periodo de vigencia:** La inscripción del usuario no anula consentimientos expresos otorgados DESPUÉS de su alta en la lista.

✓ **Logs obligatorios:** La verificación debe documentarse con evidencia trazable (timestamp, resultado, acción tomada) conservada durante 3+ años.

✓ **Responsabilidad del Responsable:** Salvo pacto contractual explícito, la obligación de verificar Lista Robinson recae sobre la empresa que envía, NO sobre el proveedor técnico de SMS.

✓ **Sanciones reales:** El incumplimiento deriva en multas que van desde 3.000€ (micropymes, primera infracción) hasta más de 100.000€ (grandes empresas, reincidencia).

✓ **Complemento, no sustituto:** La Lista Robinson es el primer filtro, pero la gestión de bajas internas (STOP) debe tener prioridad absoluta.

### Checklist de verificación:

- [ ] ¿Estoy registrado como empresa consultora en Lista Robinson (Adigital)?
- [ ] ¿He clasificado mi base de datos (clientes actuales/inactivos/prospectos)?
- [ ] ¿Consulto la Lista Robinson antes de cada campaña a no-clientes?
- [ ] ¿Actualizo la verificación mensualmente (método ficheros) o en tiempo real (API)?
- [ ] ¿Conservo logs de verificación con timestamp durante 3+ años?
- [ ] ¿Tengo protocolo de bajas internas (STOP) procesadas en <24h?
- [ ] ¿Mi contrato con proveedor SMS especifica quién gestiona la verificación?

---

### Artículos relacionados:

- [Guía Completa: Marco Legal del Envío de SMS Comerciales en España](/blog/guia-marco-legal-sms-comerciales-espana)
- [Sanciones AEPD por SMS: Casos Reales y Cuantías](/blog/sanciones-aepd-sms-casos-reales)
- Consentimiento RGPD para SMS: Qué Es Válido (próximamente)