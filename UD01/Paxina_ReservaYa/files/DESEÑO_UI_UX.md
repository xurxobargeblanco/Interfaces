# Deseño UI/UX — App de Reserva de Pistas Deportivas Municipais

## 1. Filosofía de deseño

O público obxectivo inclúe persoas maiores e usuarios pouco habituados á tecnoloxía, así que todo o deseño segue tres regras innegociables:

1. **Un só obxectivo por pantalla.** Nunca se pide máis dunha decisión importante á vez.
2. **Todo é grande e táctil.** Ningún elemento interactivo baixa de 56dp de alto (moi por riba do mínimo recomendado de 48dp).
3. **O rexistro non é unha barreira.** Non se pide ningún dato ata que a reserva xa está practicamente feita.

---

## 2. Sistema de cor (alto contraste, WCAG AA/AAA)

| Uso | Cor | Hex | Contraste sobre branco |
|---|---|---|---|
| Primaria (institucional) | Azul concello | `#0B5FA5` | 5.9:1 (AA texto normal) |
| Primaria escura (texto sobre azul claro) | Azul escuro | `#08406F` | — |
| Éxito / Dispoñible | Verde | `#1E7E34` sobre fondo `#E6F4EA` | 6.1:1 |
| Erro / Ocupado | Gris texto `#5F6368` sobre fondo `#E8EAED` | — | 4.6:1 |
| Fondo xeral | Branco/gris moi claro | `#FFFFFF` / `#F7F8FA` | — |
| Texto principal | Case negro | `#1A1C1E` | 15.8:1 |
| Texto secundario | Gris escuro | `#44474A` | 8.9:1 |

Evítase por completo o uso de só a cor para transmitir estado: as franxas horarias "ocupadas" tamén levan unha icona de candado e o texto "Ocupado" tachado, non só cor gris.

## 3. Tipografía

- **Familia:** Roboto / Noto Sans (fonte do sistema, óptima lexibilidade e soporte total do galego, incluídos os "ñ", tiles e acentos).
- **Escala tipográfica ampliada** (maior cá escala Material estándar, pensada para xente maior):

| Estilo | Tamaño | Peso | Uso |
|---|---|---|---|
| Título pantalla | 26sp | Bold (700) | "Reserva a túa pista" |
| Título tarxeta | 20sp | SemiBold (600) | Nome da pista |
| Corpo | 18sp | Regular (400) | Texto informativo |
| Botón | 19sp | SemiBold (600) | Texto de botóns |
| Auxiliar | 15sp | Regular | Ubicación, notas |

- Interlineado 1.4× o tamaño da fonte para mellorar lexibilidade.
- Nunca texto por debaixo de 15sp.

## 4. Accesibilidade transversal

- **Área táctil mínima:** 56×56dp en todos os botóns e franxas horarias.
- **Semántica para lectores de pantalla:** cada `Card`, botón e franxa horaria leva `Semantics`/`tooltip` describindo o seu estado ("Franxa das 10:00, dispoñible" / "Franxa das 11:00, ocupada").
- **Foco visual claro:** bordo de 3dp cando un elemento recibe foco de teclado/switch access.
- **Sen xerga técnica:** textos curtos, verbos de acción claros ("Reservar", "Continuar", "Confirmar").
- **Confirmacións redundantes:** tras confirmar, amósase tanto un diálogo coma un `SnackBar`, para que ninguén se quede coa dúbida de se a acción funcionou.
- **Modo alto contraste compatible:** cores validadas tamén baixo simulación de daltonismo (protanopia/deuteranopia).

---

## 5. Fluxo pantalla a pantalla

### Pantalla 1 — Inicio (Selección de pista)

- **Cabeceira:** fondo azul institucional, escudo/nome do concello ("Concello de Ourense — Instalacións Deportivas"), altura xenerosa (120dp) para transmitir confianza institucional.
- **Corpo:** lista vertical de `Card` grandes (mín. 120dp alto), unha por instalación:
  - Icona/imaxe representativa do deporte á esquerda (64×64dp).
  - Nome da pista (20sp, bold) + ubicación con icona de pin (15sp, gris).
  - Botón "Reservar" grande, ancho completo dentro da tarxeta, cor primaria, texto branco.
- **Scroll vertical simple**, sen carruseis nin xestos complexos.

### Pantalla 2 — Data e hora

- **Selector de días:** fila horizontal deslizante cos 7 días seguintes; cada día é un "chip" redondeado grande (72×80dp) con día da semana abreviado + número. O día seleccionado énchese en azul sólido.
- **Grella de horas:** `GridView` de 3 columnas, franxas de 1h (p.ex. 09:00–10:00). Cada franxa:
  - **Dispoñible:** fondo verde claro, texto verde escuro, bordo sutil.
  - **Ocupada:** fondo gris, texto gris tachado, icona de candado, `onTap` desactivado.
  - **Seleccionada:** fondo azul sólido, texto branco, marca de verificación (✓).
- **Botón inferior fixo** ("Continuar"): permanece ancorado na parte inferior, desactivado (gris) ata que hai data + hora escollidas, actívase (azul) automaticamente.

### Pantalla 3 — Confirmación e rexistro

- **Resumo da reserva:** tarxeta superior con icona da instalación + Pista / Data / Hora en formato lista clara, tipo "recibo".
- **Formulario condicional:** só aparece se `SharedPreferences` non ten datos gardados previamente:
  - Nome completo (`TextFormField`, validación non baleiro).
  - Teléfono (teclado numérico, validación de formato básico).
  - Correo electrónico (validación de formato).
  - Texto explicativo pequeno: "Só cho preguntamos a primeira vez. A próxima reserva será aínda máis rápida."
- Se o usuario xa está rexistrado, este bloque despárcese e substitúese por unha tarxeta compacta "Reservando como: [Nome]" con opción "Non es ti?" para editar os datos.
- **Botón final:** "Confirmar Reserva", ancho completo, altura 56dp, cor primaria, con icona de check. Ao premelo: garda datos localmente (se é a 1ª vez), garda a reserva, e amosa pantalla/diálogo de éxito.

---

## 6. Arquitectura técnica proposta

- **Flutter + Material 3** (`useMaterial3: true`), tema centralizado en `AppTheme`.
- **Persistencia local:** paquete `shared_preferences` para gardar os datos do usuario (nome, teléfono, correo) tras o primeiro rexistro.
- **Navegación:** `Navigator.push` simple con `MaterialPageRoute` (sen necesidade de paquetes de rutas complexos para un fluxo lineal de 3 pasos).
- **Estado:** `StatefulWidget` + `setState` abondan para este alcance; nun proxecto real recoméndase migrar a `Provider` ou `Riverpod` cando se conecte a un backend real de dispoñibilidade.
- **Datos mock:** neste prototipo as pistas e franxas horarias son datos de exemplo en `models/`, listos para substituír por chamadas a unha API REST do concello.

## 7. Dependencias necesarias (pubspec.yaml)

```yaml
dependencies:
  flutter:
    sdk: flutter
  shared_preferences: ^2.2.3
  intl: ^0.19.0
```
