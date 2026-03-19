# La meva rutina setmanal

App per gestionar tasques setmanals des del mòbil: vista d’avui, calendari per setmana i plantilles. Dades guardades al dispositiu (IndexedDB). Interfície en català. Es pot usar al navegador o compilar com a app (Android / iOS) amb Ionic i Capacitor.

---

## Requisits

- **Node.js** 20+ (recomanat 22 LTS) — [nodejs.org](https://nodejs.org)
- **npm** 9+ (ve amb Node)
- Per compilar l’app al mòbil:
  - **Android**: [Android Studio](https://developer.android.com/studio)
  - **iOS**: [Xcode](https://developer.apple.com/xcode/) (només macOS)

---

## 1. Instal·lar i executar (navegador)

```bash
cd weekly-routine
npm install
npm start
```

S’obre [http://localhost:4200](http://localhost:4200). Pots usar l’app directament al navegador o instal·lar-la com a PWA (icona “Afegir a la pantalla d’inici” al mòbil).

---

## 2. Compilar l’app per al mòbil

Passos per generar l’APK (Android) o l’app iOS i executar-la al mòbil o emulador.

### 2.1 Primer cop (preparar el projecte)

```bash
cd weekly-routine
npm install
npm run build
```

### 2.2 Android

1. Afegir la plataforma i sincronitzar:

```bash
npx cap add android
npx cap sync
```

2. Obrir el projecte a Android Studio:

```bash
npx cap open android
```

3. A Android Studio:
   - Si tens un mòbil: connecta’l per USB amb **depuració USB** activada i prem **Run** (▶).
   - Si no: **Device Manager** → crea un emulador → prem **Run**.
4. Per generar un APK per instal·lar o compartir: **Build → Build Bundle(s) / APK(s) → Build APK(s)**. L’APK es genera a `android/app/build/outputs/apk/`.

### 2.3 iOS (només macOS)

1. Afegir la plataforma i sincronitzar:

```bash
npx cap add ios
npx cap sync
```

2. Obrir el projecte a Xcode:

```bash
npx cap open ios
```

3. A Xcode: tria el teu iPhone o un simulador i prem **Run** (▶).

### 2.4 Després de canviar codi

Cada vegada que modifiquis el codi (Angular/HTML/estils):

```bash
npm run build
npx cap sync
```

Després torna a executar l’app des d’Android Studio o Xcode (botó Run). No cal tornar a fer `cap add`.

### Resum de comandes útils

| Comanda | Què fa |
|--------|--------|
| `npm start` | Executa l’app al navegador (desenvolupament) |
| `npm run build` | Genera el build de producció |
| `npm run cap:sync` | Fa `build` + `cap sync` (actualitza el projecte Android/iOS) |
| `npx cap open android` | Obre el projecte a Android Studio |
| `npx cap open ios` | Obre el projecte a Xcode |

La configuració de l’app (nom, id, carpeta web) està a **`capacitor.config.ts`**.

---

## 3. Com s’usa l’app

### Navegació (3 pestanyes a la part de baix)

| Pestanya | Què hi ha |
|----------|------------|
| **Avui** | Tasques d’avui. Progrés (completades / total). Botó **+** per afegir tasca. |
| **Setmana** | Calendari setmanal. Un dia per pantalla; llisca horitzontal per canviar de dia. Fletxes per canviar de setmana. |
| **Plantilles** | Desa la setmana actual com a plantilla i aplica plantilles guardades. |

### Tasques

- **Afegir**: prem **+** → títol (obligatori), descripció, dia, hora, categoria, “Repetir cada setmana”, “Recordatori”.
- **Completar**: prem el cercle al costat de la tasca; passa a “Completades” i deixa de sortir a la llista principal.
- **Editar**: prem la tasca.
- **Eliminar**: prem la icona de paperera.

Les tasques **completades** es poden veure desplegant la secció **“Completades (N)”** a la part de baix de la vista Avui.

### Notificacions

- La primera vegada que obres l’app cada dia amb tasques pendents, es pot mostrar una notificació: “Tens X tasca(s) pendent(s) avui” (màx. una per dia).
- Si una tasca té **Recordatori** i hora, es mostra una notificació a l’hora indicada (cal acceptar permisos quan ho demani l’app).

### Dades

- Tot es guarda **al dispositiu** (IndexedDB). No hi ha compte ni servidor.
- Les dades **no es sincronitzen** entre mòbil i ordinador; cada dispositiu té les seves.

---

## Estructura del projecte

```
weekly-routine/
├── src/app/
│   ├── core/           # models, DB, setmana, notificacions
│   ├── shared/         # navegació, formularis, components UI
│   └── features/       # Avui, Setmana, Plantilles
├── src/styles/         # estils globals i variables
├── public/             # manifest, icons (PWA)
├── capacitor.config.ts # config per Android/iOS
└── angular.json
```

Tecnologies: **Angular 20** (standalone), **Ionic**, **Capacitor**, **SCSS**.
