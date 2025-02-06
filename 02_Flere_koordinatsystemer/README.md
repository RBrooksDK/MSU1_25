<h1 align="center">Flere Koordinatsystemer</h1>

## Forberedelse
3DM: [Kapitel 3](https://viaucdk-my.sharepoint.com/:b:/g/personal/rib_viauc_dk/EZsFWkemMb1Lg7fX5HguWOsBjbyAugDBBcNQ-Y0uEfB3qA?e=xP3bVr)

I skal have set [videoerne](#videomateriale) fra den aktuelle session. Dette udgør som minimum jeres forberedelse til hver session. Hertil kan I også læse i bogen.

I skal have installeret Python og Jupyter Notebook. Jeg vil tro, at I bliver mest glade for at have det samlet i VS Code. Så I kan installere Python og Jupyter Notebook i VS Code. Følg de guides, der er her til punkt og prikke:

[How to set up a Python environment](https://www.raillyhugo.com/blog/how-to-setup-python-environment)

Og her er en video tutorial:
[Python How to setup vscode with Jupyter Notebooks to Code](https://www.youtube.com/watch?v=COkYKDAdpck)

Når I henter Python etc. så husk blot at vælge den nyeste stable version af Python - i videoen er det 3.12., men i skrivende stund er det 3.13.1.

## Materiale

[Sessionsmateriale](https://viaucdk-my.sharepoint.com/:f:/g/personal/rib_viauc_dk/Ekd-XQ_oGkhHlt2Nt7gMs8IBHTLENq3XnxI38t-pWV7MkQ?e=9p8pVk)

[Øvelsesnoter - tilgængelige mandag]()

---

## Kort om sessionen

I denne session skal vi se, hvordan flere koordinatsystemer anvendes til at forenkle komplekse beregninger i 3D-grafik og spiludvikling. Vi introducerer verdens-, objekt- og kamerakoordinater og deres anvendelser i forskellige sammenhænge. Derudover ser vi på, hvordan hierarkiske koordinatsystemer gør det muligt at beskrive komplekse relationer mellem objekter. Vi dykker ned i basisvektorer og transformationer, der gør det muligt at skifte mellem koordinatsystemer, og diskuterer fordele ved oprejste koordinatsystemer.

### Nøgleord
- Verdenskoordinater
- Objektkoordinater
- Kamerakoordinater
- Oprejst koordinatsystem
- Basisvektorer
- Koordinattransformation
- Hierarkiske koordinatsystemer
- Passiv og aktiv transformation


---

## Videomateriale

Alt materiale til videoerne er i Sessionsmaterialet.

### 2.1. Introduktion til flere koordinatsystemer

<iframe width="560" height="315" src="https://www.youtube.com/embed/Bz5chWo08-8?si=A2uR0-LnwlwgXhSw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 2.2. Fra world space til screen space

<iframe width="560" height="315" src="https://www.youtube.com/embed/xeOhTJa2JWw?si=_PSADb18e4k02-iy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 2.3. Transformationer

<iframe width="560" height="315" src="https://www.youtube.com/embed/t7g48Wjt6Hc?si=Fcb3sR2PfhnL6j2L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 2.4. Vektorrum og basis

<iframe width="560" height="315" src="https://www.youtube.com/embed/5ylhyBrZF58?si=MYntIA9_QpUMonlJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


---


## Øvelser

Øvelser uploades inden timen starter

---

**Øvelse 1**



??? answer "Se svaret"

    

---

**Øvelse 2**

Udregn følgende:


??? answer "Se svaret"

    

---

**Exercise 3**

??? answer "Se svaret"


---

**Øvelse 4**

??? answer "Se svaret"

---

**Øvelse 5**



??? answer "Se svaret"

 

---

**Øvelse 6**


??? answer "Se svaret"



---

**Øvelse 7**


??? answer "Se svaret"


---

**Øvelse 8**


??? answer "Se svaret"

---

**Øvelse 9**

??? answer "Se svaret"


**Øvelse 10**



??? answer



## Uddybende noter
I denne session introduceres ideen om flere koordinatsystemer og deres betydning i grafik og spiludvikling. Koordinatsystemer oprettes ofte for specifikke formål, og de kan være indlejret i hinanden for at håndtere komplekse interaktioner og hierarkiske relationer mellem objekter.


### Hvorfor flere koordinatsystemer?
- Ét koordinatsystem, som fx verdenskoordinater, kan i princippet bruges til at beskrive alle punkter i rummet. Men i praksis er det ofte upraktisk.
- Forskellige koordinatsystemer bruges til at forenkle beregninger, da visse data og spørgsmål kun giver mening inden for en bestemt referenceramme.
- Eksempel: To byer (Cartesia og Dyslexia) har hver deres lokale koordinatsystem. For at bygge en vej mellem dem kræves et fælles koordinatsystem.

#### Historisk perspektiv
- Aristoteles foreslog et geocentrisk univers med Jorden i centrum.
- Aristarchus introducerede et heliocentrisk univers, hvor Solen var centrum.
- Archimedes anvendte bevidst et koordinatsystem, der gav større tal, da han beregnede universets sandkorn.

### Almindelige koordinatsystemer

#### Verdenskoordinater (World Space)
- Verdenskoordinater udgør en global referenceramme, som andre koordinatsystemer kan beskrives ud fra.
- Verdenskoordinater bruges til at fastlægge "absolute" positioner, som fx geografiske bredde- og længdegrader.
- I praksis er "absolute positioner" relative til det største koordinatsystem, vi arbejder med.

#### Objektkoordinater (Object Space)
- Hvert objekt har sit eget koordinatsystem, som flyttes og roteres sammen med objektet.
- Anvendes til at beskrive positioner og retninger lokalt, fx "fremad" eller "til højre."
- Bruges også i modelleringssoftware, hvor modellens geometri er defineret relativt til objektets koordinater.

#### Kamerakoordinater (Camera Space)
- Koordinatsystemet, der er knyttet til kameraet, og hvor kameraet er i origo.
- Typisk: $+x$ peger mod højre, $+y$ opad, og $+z$ fremad ind i skærmen.
- Forskel mellem venstrehåndede og højrehåndede systemer:
  - Venstrehåndet: $+z$ peger ind i skærmen.
  - Højrehåndet: $-z$ peger ind i skærmen.

#### Oprejst koordinatsystem (Upright Space)
- Et mellemstadie mellem verdens- og objektkoordinater.
- Akserne er parallelle med verdensakserne, men origo er sammenfaldende med objektets koordinatsystem.
- Fordel: Adskiller rotation og translation, hvilket gør beregninger enklere.

### Basisvektorer og transformationer

#### Hvad er en basisvektor?
- En basisvektor definerer retningen for hver akse i et koordinatsystem.
- Et vektorfelt kan beskrives som en linearkombination af basisvektorer:
  \[
  \mathbf{v} = x\mathbf{p} + y\mathbf{q} + z\mathbf{r}
  \]
- God praksis: Basisvektorer bør være ortogonale (vinkelrette) og have samme længde.

#### Koordinattransformationer
- Transformationer bruges til at beskrive punkter fra ét koordinatsystem i et andet.
- Aktiv transformation: Objektet flyttes, mens koordinatsystemet forbliver fast.
- Passiv transformation: Koordinatsystemet ændres, mens objektet forbliver stationært.
- Eksempel: At transformere en robot fra objektkoordinater til verdenskoordinater kræver først rotation og derefter translation.

### Indlejrede koordinatsystemer
- Objekter kan have hierarkiske koordinatsystemer, hvor et systems origo og akser er defineret relativt til et andet.
- Bruges i animationer, fx hvor en fåres hoved bevæger sig relativt til kroppen, og øret bevæger sig relativt til hovedet.
- Hierarkier af koordinatsystemer gør det muligt at håndtere komplekse bevægelser og relationer mere effektivt.

### En forsvarstale for oprejst koordinatsystem
- Oprejst koordinatsystem adskiller rotation og translation, hvilket gør koden mere læsbar og lettere at vedligeholde.
- Ved at bruge navngivne rum som "object," "upright" og "world" bliver koden mere menneskelig læsbar og intuitiv.
