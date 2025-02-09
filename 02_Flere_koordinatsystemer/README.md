<h1 align="center">Flere Koordinatsystemer</h1>

<p align="center">
    <video class="custom-video" width="600" autoplay loop muted>
        <source src="../figures/video_preview2_h264.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
</p>

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

<style type="text/css">
    ol { list-style-type: lower-alpha; }
</style>

Øvelse 1-2 er baseret på sidste uges emne. Øvelse 3-7 er baseret på denne uges emne.

---

**Øvelse 1**

En ikke-spiller karakter (NPC) står på positionen $\mathbf{p}$ med en fremadgående retning $\mathbf{v}$.

1. Hvordan kan prikproduktet bruges til at bestemme, om punktet $\mathbf{x}$ er foran eller bagved NPC'en? *Hint*: Jeg gennemgår det i videoen om prikproduktet. Ellers se svaret, prøv at forstå det, og gå så videre til opgave (b).

    ??? answer "Se svaret"

        Brug fortegnet af prikproduktet mellem $\mathbf{v}$ og $\mathbf{x}-\mathbf{p}$ til at bestemme, om punktet $\mathbf{x}$ er foran eller bagved NPC'en. Dette følger af den geometriske fortolkning af prikproduktet,

        $$
        \mathbf{v} \cdot(\mathbf{x}-\mathbf{p})=\|\mathbf{v}\|\|\mathbf{x}-\mathbf{p}\| \cos \theta
        $$

        hvor $\theta$ er vinklen mellem $\mathbf{v}$ og $\mathbf{x}-\mathbf{p}$.  
        Både $\|\mathbf{v}\|$ og $\|\mathbf{x}-\mathbf{p}\|$ er altid positive, hvilket betyder, at fortegnet af prikproduktet udelukkende afhænger af værdien af $\cos \theta$.  

        - Hvis $\cos \theta > 0$, er $\theta$ mindre end $90^{\circ}$, og $\mathbf{x}$ er foran NPC'en.  
        - Hvis $\cos \theta < 0$, er $\theta$ større end $90^{\circ}$, og $\mathbf{x}$ er bagved NPC'en.  
        - Den særlige situation, hvor $\mathbf{v} \cdot(\mathbf{x}-\mathbf{p})=0$, betyder, at $\mathbf{x}$ ligger enten direkte til venstre eller højre for NPC'en. Hvis dette tilfælde ikke eksplicit skal håndteres, kan det vilkårligt tilskrives enten at være foran eller bagved.



2. Lad
   
    $$
    \mathbf{p}=\begin{bmatrix} -3 & 4 \end{bmatrix}, \quad \mathbf{v}=\begin{bmatrix} 5 & -2 \end{bmatrix}
    $$
    
    For hvert af de følgende punkter $\mathbf{x}$, bestem om $\mathbf{x}$ er foran eller bagved NPC'en:

     i. $\mathbf{x}=\begin{bmatrix} 0 & 0 \end{bmatrix}$

     ii. $\mathbf{x}=\begin{bmatrix} -6 & 0 \end{bmatrix}$

     iii. $\mathbf{x}=\begin{bmatrix} -3 & 0 \end{bmatrix}$

     iv. $\mathbf{x}=\begin{bmatrix} -6 & -3.5 \end{bmatrix}$


    ??? answer "Se svaret"

        i. $\mathbf{x}$ er foran NPC'en.

          $\left[\begin{array}{c}
          5 \\
          -2
          \end{array}\right] \cdot\left(\left[\begin{array}{l}
          0 \\
          0
          \end{array}\right]-\left[\begin{array}{c}
          -3 \\
          4
          \end{array}\right]\right)=\left[\begin{array}{c}
          5 \\
          -2
          \end{array}\right] \cdot\left[\begin{array}{c}
          3 \\
          -4
          \end{array}\right]=(5)(3)+(-2)(-4)=23$

        ii. $\mathbf{x}$ er bagved NPC'en.

          $\begin{aligned}
          {\left[\begin{array}{c}
          5 \\
          -2
          \end{array}\right] \cdot\left(\left[\begin{array}{c}
          -6 \\
          0
          \end{array}\right]-\left[\begin{array}{c}
          -3 \\
          4
          \end{array}\right]\right) } & =\left[\begin{array}{c}
          5 \\
          -2
          \end{array}\right] \cdot\left[\begin{array}{c}
          -3 \\
          -4
          \end{array}\right]=(5)(-3)+(-2)(-4) = -7
          \end{aligned}$
         
        iii. $\mathbf{x}$ er foran NPC'en.

          $\left[\begin{array}{c}
          5 \\
          -2
          \end{array}\right] \cdot\left(\left[\begin{array}{c}
          -3 \\
          0
          \end{array}\right]-\left[\begin{array}{c}
          -3 \\
          4
          \end{array}\right]\right)=\left[\begin{array}{c}
          5 \\
          -2
          \end{array}\right] \cdot\left[\begin{array}{c}
          0 \\
          -4
          \end{array}\right]=(5)(0)+(-2)(-4)=8$

          iv. $\mathbf{x}$ kan enten være foran eller bagved NPC'en, afhængigt af hvordan vi har valgt at håndtere dette specielle tilfælde.

          $\left[\begin{array}{c}
          5 \\
          -2
          \end{array}\right] \cdot\left(\left[\begin{array}{c}
          -6 \\
          -3.5
          \end{array}\right]-\left[\begin{array}{c}
          -3 \\
          4
          \end{array}\right]\right)=\left[\begin{array}{c}
          5 \\
          -2
          \end{array}\right] \cdot\left[\begin{array}{c}
          -3 \\
          -7.5
          \end{array}\right]=(5)(-3)+(-2)(-7.5)=0$


---

**Øvelse 2**

Ved at udvide konceptet fra Øvelse 1, betragt nu tilfældet, hvor NPC'en har et begrænset synsfelt (FOV). Hvis den totale FOV-vinkel er $\phi$, kan NPC'en se til venstre eller højre for sin fremadgående retning med en maksimal vinkel på $\phi / 2$.

1. Hvordan kan prikproduktet bruges til at bestemme, om punktet $\mathbf{x}$ er synligt for NPC'en? *Hint*: Det har noget at gøre med \(\cos \theta\) og \(\cos (\phi / 2)\). Ellers se svaret, prøv at forstå det, og gå så videre til opgave 

    ??? answer "Se svaret"

        For at bestemme, om punktet $\mathbf{x}$ er synligt for NPC'en, sammenlignes $\cos \theta$ med $\cos (\phi / 2)$. Hvis $\cos \theta \geq \cos (\phi / 2)$, er $\mathbf{x}$ synligt for NPC'en.

        Værdien af $\cos (\phi / 2)$ kan findes ud fra FOV-vinklen. For at beregne $\cos \theta$ anvendes prikproduktet:

        $$
        \cos \theta=\frac{\mathbf{v} \cdot(\mathbf{x}-\mathbf{p})}{\|\mathbf{v}\|\|\mathbf{x}-\mathbf{p}\|}
        $$

2. For hvert af punkterne $\mathbf{x}$ i Øvelse 1, bestem om $\mathbf{x}$ er synligt for NPC'en, hvis dens FOV er $90^{\circ}$.

    ??? answer "Se svaret"
        Jeg har lavet et lille [script](Udregn_cos.ipynb), som kan udregne cosinusværdierne for jer. I kan også gøre det manuelt.

        i. $\mathbf{x}$ er synligt for NPC'en.

          $\cos \theta=\frac{\left[\begin{array}{c}
          5 \\
          -2
          \end{array}\right] \cdot\left(\left[\begin{array}{l}
          0 \\
          0
          \end{array}\right]-\left[\begin{array}{c}
          -3 \\
          4
          \end{array}\right]\right)}{\left\|\left[\begin{array}{c}
          5 \\
          -2
          \end{array}\right]\right\|\left\|\left[\begin{array}{l}
          0 \\
          0
          \end{array}\right]-\left[\begin{array}{c}
          -3 \\
          4
          \end{array}\right]\right\|}=\frac{23}{(\sqrt{29})(\sqrt{25)}} \approx 0.854 \geq 0.707$

        ii. $\mathbf{x}$ er ikke synligt for NPC'en.

          $\cos \theta =\frac{\left[\begin{array}{c}
          5 \\
          -2
          \end{array}\right] \cdot\left(\left[\begin{array}{c}
          -6 \\
          0
          \end{array}\right]-\left[\begin{array}{c}
          -3 \\
          4
          \end{array}\right]\right)}{\left\|\left[\begin{array}{c}
          5 \\
          -2
          \end{array}\right]\right\|\left\|\left[\begin{array}{c}
          -6 \\
          0
          \end{array}\right]-\left[\begin{array}{c}
          -3 \\
          4
          \end{array}\right]\right\|}=\frac{-7}{(\sqrt{29})(\sqrt{25})} \approx -0.260 < 0.707$

        iii. $\mathbf{x}$ er ikke synligt for NPC'en.

          $\cos \theta=\frac{\left[\begin{array}{c}
          5 \\
          -2
          \end{array}\right] \cdot\left(\left[\begin{array}{c}
          -3 \\
          0
          \end{array}\right]-\left[\begin{array}{c}
          -3 \\
          4
          \end{array}\right]\right)}{\left\|\left[\begin{array}{c}
          5 \\
          -2
          \end{array}\right]\right\|\left\|\left[\begin{array}{c}
          -3 \\
          0
          \end{array}\right]-\left[\begin{array}{c}
          -3 \\
          4
          \end{array}\right]\right\|}=\frac{8}{(\sqrt{29})(\sqrt{16})} \approx 0.371 < 0.707$

        iv. $\mathbf{x}$ er ikke synligt for NPC'en.

        $\cos \theta=\frac{\left[\begin{array}{c}
          5 \\
          -2
          \end{array}\right] \cdot\left(\left[\begin{array}{c}
          -6 \\
          -3.5
          \end{array}\right]-\left[\begin{array}{c}
          -3 \\
          4
          \end{array}\right]\right)}{\left\|\left[\begin{array}{c}
          5 \\
          -2
          \end{array}\right]\right\|\left\|\left[\begin{array}{c}
          -6 \\
          -3.5
          \end{array}\right]-\left[\begin{array}{c}
          -3 \\
          4
          \end{array}\right]\right\|}=\frac{0}{(\sqrt{29})(\sqrt{65.25})}=0 < 0.707$


        

---

**Øvelse 3**

Hvilket koordinatsystem (objekt, upright, kamera eller verden) er mest passende at bruge til at stille følgende spørgsmål?
   
 - Er min computer foran mig eller bagved mig?  
 - Er bogen øst eller vest for mig?  
 - Hvordan kommer jeg fra ét rum til et andet?  
 - Kan jeg se min computer?  

??? answer "Se svaret"

    - Er min computer foran mig eller bagved mig?  
      Object space.

    - Er bogen øst eller vest for mig?  
      Vi kan sammenligne min object space $x$-koordinat med bogens object space $x$-koordinat. Eller vi kan blot undersøge fortegnet af $x$-koordinaten i upright space.


    - Hvordan kommer jeg fra ét rum til et andet?  
      World space.  
      Dette spørgsmål kræver en global position i forhold til verdenskoordinaterne.

    - Kan jeg se min computer?  
      Object space.
      Eller man kunne sige, at vi kan tage prikproduktet med vores fremadrettede retningsvektor – hvilket er ækvivalent med at udtrække $z$-koordinaten i object space.  
---

**Øvelse 4**

For følgende sæt af basisvektorer, bestem om de er lineært uafhængige. Hvis ikke, forklar hvorfor.

1. $\left[\begin{array}{l}1 \\ 0 \\ 0\end{array}\right],\left[\begin{array}{l}0 \\ 0 \\ 0\end{array}\right],\left[\begin{array}{l}0 \\ 2 \\ 0\end{array}\right]$

2. $\left[\begin{array}{l}1 \\ 2 \\ 3\end{array}\right],\left[\begin{array}{r}-1 \\ 2 \\ 3\end{array}\right],\left[\begin{array}{r}1 \\ -2 \\ 3\end{array}\right],\left[\begin{array}{r}1 \\ 2 \\ -3\end{array}\right]$

3. $\left[\begin{array}{l}1 \\ 1 \\ 5\end{array}\right],\left[\begin{array}{r}0 \\ -5 \\ 4\end{array}\right],\left[\begin{array}{r}1 \\ -4 \\ 9\end{array}\right]$

4. $\left[\begin{array}{l}1 \\ 2 \\ 3\end{array}\right],\left[\begin{array}{r}-1 \\ 2 \\ 3\end{array}\right],\left[\begin{array}{r}1 \\ -2 \\ 3\end{array}\right]$

??? answer "Se svaret"

    1. Afhængig da den indeholder en nulvektor.

    2. Afhængig - flere vektorer end dimensioner.

    3. Afhængig - den tredje er en linær kombination af de to første.

    4. Uafhængig

---

**Øvelse 5**

For følgende sæt af basisvektorer, bestem om de er ortogonale. Hvis ikke, forklar hvorfor.

1. $\left[\begin{array}{l}1 \\ 2 \\ 3\end{array}\right],\left[\begin{array}{r}-1 \\ 2 \\ 3\end{array}\right],\left[\begin{array}{r}1 \\ -2 \\ 3\end{array}\right]$

2. $\left[\begin{array}{l}0 \\ 4 \\ 1\end{array}\right],\left[\begin{array}{r}0 \\ -1 \\ 4\end{array}\right],\left[\begin{array}{l}8 \\ 0 \\ 0\end{array}\right]$

3. $\left[\begin{array}{r}4 \\ -6 \\ 2\end{array}\right],\left[\begin{array}{r}-4 \\ -2 \\ 2\end{array}\right],\left[\begin{array}{c}-3 \\ -6 \\ -12\end{array}\right]$

4. $\left[\begin{array}{r}7 \\ -1 \\ 5\end{array}\right],\left[\begin{array}{r}5 \\ 5 \\ -6\end{array}\right],\left[\begin{array}{r}-2 \\ 0 \\ 1\end{array}\right]$



??? answer "Se svaret"

    1. Ikke ortogonale.

    2. Ortogonale.

    3. Ortogonale.

    4. Ikke ortogonale.

---

**Øvelse 6**

For følgende sæt af basisvektorer, bestem om de er ortonormale. Hvis ikke, forklar hvorfor.

1. \(\left[\begin{array}{l}1 \\ 2 \\ 3\end{array}\right],\left[\begin{array}{r}-1 \\ 2 \\ 3\end{array}\right],\left[\begin{array}{r}1 \\ -2 \\ 3\end{array}\right]\)

2. \(\left[\begin{array}{l}1 \\ 0 \\ 0\end{array}\right],\left[\begin{array}{r}0 \\ 0 \\ -1\end{array}\right],\left[\begin{array}{l}0 \\ 1 \\ 0\end{array}\right]\)
   
3. \(\left[\begin{array}{l}0 \\ 1 \\ 0\end{array}\right],\left[\begin{array}{c}0 \\ .707 \\ .707\end{array}\right],\left[\begin{array}{l}1 \\ 0 \\ 0\end{array}\right]\)

4. \(\left[\begin{array}{r}.921 \\ .294 \\ -.254\end{array}\right],\left[\begin{array}{r}-.254 \\ .951 \\ .178\end{array}\right],\left[\begin{array}{r}.294 \\ -.100 \\ .951\end{array}\right]\)

5. \(\left[\begin{array}{c}.995 \\ 0 \\ -.100\end{array}\right],\left[\begin{array}{l}.840 \\ .810 \\ .837\end{array}\right],\left[\begin{array}{r}.054 \\ -1.262 \\ .537\end{array}\right]\)

??? answer "Se svaret"

    1. Nej. Ingen af basisvektorerne har enhedslængde.  

    2. Ja, de er ortonormale.  

    3. Nej. Den første og anden basisvektor er ikke vinkelrette på hinanden.  

    4. Ja, de er ortonormale.  

    5. Nej. Den anden og tredje basisvektor har ikke enhedslængde.  

---

**Øvelse 7**

Antag at robotten er på positionen \((1,10,3)\), og at hendes højre-, op- og fremadrettede vektorer, udtrykt i upright space, er \([0.866,0,-0.500], [0,1,0]\) og \([0.500,0,0.866]\), henholdsvis. (Bemærk, at disse vektorer danner en ortonormal basis.)  

Følgende punkter er udtrykt i objekt-rummet. Beregn koordinaterne for disse punkter i upright og world space.

1. \((-1,2,0)\)  
2. \((1,2,0)\)  
3. \((0,0,0)\)  

    ??? answer "Se svaret"
          1. Upright: \((-0.866,2.000,0.500)\); World: \((0.134,12.000,3.500)\)
          2. Upright: \((0.866,2.000,-0.500)\); World: \((1.866,12.000,2.500)\)
          3. Upright: \((0,0,0)\); World: \((1,10,3)\)

---

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
