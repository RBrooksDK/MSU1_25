<h1 align="center">Vektorer</h1>

<p align="center">
    <video class="custom-video" width="600" autoplay loop muted>
        <source src="../figures/video_preview1_h264.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
</p>


## Forberedelse
3DM: [Kapitel 2](https://viaucdk-my.sharepoint.com/:b:/g/personal/rib_viauc_dk/EY0IPZH01qBPkv3nwVzB5bwBrxvNME6IdmpavOeTxRfckg?e=QB5kSE)

I skal have set [videoerne](#videomateriale) fra den aktuelle session. Dette udgør som minimum jeres forberedelse til hver session. Hertil kan I også læse i bogen.

## Materiale

[Sessionsmateriale](https://viaucdk-my.sharepoint.com/:f:/g/personal/rib_viauc_dk/En3EgvyjiiBPiFhgsDoOITYBJgyL36UFnS7ivBi1YZUWsA?e=kw0ooo)

[Øvelsesnoter - tilgængelige mandag]()

---

## Kort om sessionen

Denne session introducerer begrebet vektorer, både i matematisk og geometrisk forstand. Vi gennemgår deres repræsentation, dimensioner og grundlæggende operationer som addition, multiplikation med skalarer og negation. Desuden behandles forskellen mellem punkter og vektorer, samt vektorens rolle i kartesiske koordinatsystemer.

### Nøgleord
- Vektordefinition
- Geometrisk repræsentation
- Kartesiske koordinater
- Vektorlængde
- Addition og subtraktion
- Multiplikation med skalar
- Relativ position

---

## Videomateriale

[Videonoter](https://drive.google.com/file/d/1-ViAG_ka7PH0AUswAeC09znR-nhW-iq6/view?usp=sharing)

### 1.1. Introduktion til vektorer

<iframe width="560" height="315" src="https://www.youtube.com/embed/b7eFkSJsGkk?si=qxUa5Rxby1tC4d_j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 1.2. Vektorer i koordinatsystemer

<iframe width="560" height="315" src="https://www.youtube.com/embed/jfLfH_7VGv8?si=QKjCyMkS23pZjUqh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 1.3. Regneregler

<iframe width="560" height="315" src="https://www.youtube.com/embed/inTTWR7KSVw?si=9-H0i2oSAhKyJ1x3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 1.4. Længde, afstand og enhedsvektorer

<iframe width="560" height="315" src="https://www.youtube.com/embed/ksSWQhmF2uM?si=Ucus8SngnZglnLwT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 1.5. Prikprodukt

<iframe width="560" height="315" src="https://www.youtube.com/embed/PiYqcXu4Ui8?si=Vz1lILPK3C9zajz-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 1.6. Krydsprodukt

<iframe width="560" height="315" src="https://www.youtube.com/embed/N3YmZ247D7w?si=IuBmX6j12b6dJL9W" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## Øvelser

<style type="text/css">
    ol { list-style-type: lower-alpha; }
</style>

---

**Øvelse 1**

En almindelig konvention inden for luftfart er, at \(+x\) peger fremad/mod nord, \(+y\) peger mod højre/øst, og \(z\) peger nedad.

1. Er dette et venstre- eller højrehåndet koordinatsystem?
2. Hvordan kan vi konvertere 3D-koordinater fra disse luftfartskonventioner til vores konventioner?
3. Hvad med at konvertere fra vores konventioner (venstre, y-op) til luftfartskonventionerne?

??? answer "Se svaret"

    1. Højrehåndet koordinatsystem.

    2. Byt \(y\) og \(z\)
    
    3. Byt \(y\) og \(z\)

---

**Øvelse 2**

Udregn følgende:

1. \(\sum_{i=1}^5 i\)
2. \(\sum_{i=1}^5 2 i\)
3. \(\prod_{i=1}^5 2 i\)
4. \(\prod_{i=0}^4 7(i+1)\)
5. \(\sum_{i=1}^{100} i\)

??? answer "Se svaret"

    1. \(\sum_{i=1}^5 i = 15\)
    2. \(\sum_{i=1}^5 2 i = 30\)
    3. \(\prod_{i=1}^5 2 i = 3840\)
    4. \(\prod_{i=0}^4 7(i+1) = 2016840\)
    5. \(\sum_{i=1}^{100} i= 5050\)

---

**Exercise 3**

Lad 

$\mathbf{a}=\left[\begin{array}{ll}
    -3 & 8
    \end{array}\right], \quad \mathbf{b}=\left[\begin{array}{l}
    4 \\ 
    0 \\ 
    5
    \end{array}\right], \quad \mathbf{c}=\left[\begin{array}{c}
    16 \\ 
    -1 \\ 
    4 \\ 
    6
    \end{array}\right]$

1. Find ud af om a, b, c er række- eller søjlevektorer.

2. udregn \(b_y+c_w+a_x+b_z\)


??? answer "Se svaret"

      1. \(\mathbf{a}\) er en 2D rækkevektor. \(\mathbf{b}\) er en 3D søjlevektor. \(\mathbf{c}\) er en 4D søjlevektor.  
      2. \(b_y+c_w+a_x+b_z=0+6+(-3)+5=8\)

---

**Øvelse 4**

Identificér størrelserne i hver af følgende sætninger som skalar eller vektor. For vektorstørrelser, angiv størrelsen og retningen. (Bemærk: nogle retninger kan være implicitte.) 

1. Hvor meget vejer du?  
2. Har du nogen idé om, hvor hurtigt du kørte?  
3. Det er to blokke nord herfra.  
4. Vi flyver fra Los Angeles til New York med en hastighed på \(960 \, \mathrm{km/t}\) i en højde af \(10,000 \, \mathrm{m}\).  

??? answer "Se svaret"

    1. "Hvor meget vejer du?" Din vægt er en skalar størrelse. Men tyngdekraften, der trækker dig nedad, er en vektor, så hvis du sagde, at vægt var en vektor af den grund, ville det også være korrekt. ("Min vægt er \(80 \, \mathrm{kg}\) kraft i nedadgående retning.")  

    2. "Har du nogen idé om, hvor hurtigt du kørte?" Betjenten refererer sandsynligvis til farten på dit køretøj, som er en skalar størrelse.  

    3. "Det er to blokke nord herfra." Vektorstørrelse.  

    4. "Vi flyver fra Los Angeles til New York med en hastighed på \(960 \, \mathrm{km/t}\) i en højde af \(10,000 \, \mathrm{m}\)." Farten \(960\, \mathrm{km/t}\) er en skalar størrelse. Da New York ligger øst for Los Angeles, kan man med rimelighed antage en retning mod øst, så \(960\, \mathrm{km/t}\) østpå er en hastighed, som er en vektorstørrelse. Tilsvarende er højden \(10,000 \, \mathrm{m}\) en skalar størrelse. 

---

**Øvelse 5**

Bestem om følgende er sandt/falsk:

1. Størrelsen af en vektor i en graf er ikke vigtig; vi skal blot tegne den det rigtige sted.  
2. Forskydningen udtrykt af en vektor kan visualiseres som en sekvens af aksialt justerede forskydninger.  
3. Disse aksialt justerede forskydninger fra det forrige spørgsmål skal ske i rækkefølge.  
4. Vektoren \([x, y]\) angiver forskydningen fra punktet \((x, y)\) til origo.

??? answer "Se svaret"

    1. **Falsk**. Dette er omvendt; for vektorer er størrelsen vigtig (dvs. længden af vektoren), mens placeringen ikke er det.
    2. **Sandt**.  
    3. **Falsk**. Vi kan anvende dem i vilkårlig rækkefølge og opnå det samme slutresultat.  
    4. **Falsk**. Dette er omvendt; vektoren \([x, y]\) angiver forskydningen fra origo til punktet \((x, y)\).  

---

**Øvelse 6**

Normalisér følgende vektorer:

1. \(\begin{array}{ccc}{[-12} & 3 & -4]\end{array}\)
2. \(\left[\begin{array}{llll}1 & 1 & 1 & 1\end{array}\right]\)

??? answer "Se svaret"

    1. \(\left[\begin{array}{lll}\frac{-12}{13} & \frac{3}{13} & \frac{-4}{13}\end{array}\right]\)

    2. \(\left[\begin{array}{llll}0.5 & 0.5 & 0.5 & 0.5\end{array}\right]\)

---

**Øvelse 7**

Beregn

1. \(\left[\begin{array}{lll}7 & -2 & -3\end{array}\right]+\left[\begin{array}{lll}6 & 6 & -4\end{array}\right]\)
2. \(\left[\begin{array}{c}4 \\ 5 \\ -11\end{array}\right]-\left[\begin{array}{c}-4 \\ -5 \\ 11\end{array}\right]\)

??? answer "Se svaret"

    1. \(\left[\begin{array}{lll}13 & 4 & -7\end{array}\right]\)

    2. \(\left[\begin{array}{c}8 \\ 10 \\ -22\end{array}\right]\)

---

**Øvelse 8**

Bestem afstanden mellem vektorerne:

1. \(\left[\begin{array}{c}-2 \\ -4 \\ 9\end{array}\right],\left[\begin{array}{c}6 \\ -7 \\ 9.5\end{array}\right]\)
2. \(\left[\begin{array}{c}4 \\ -4 \\ -4 \\ 4\end{array}\right],\left[\begin{array}{c}-6 \\ 6 \\ 6 \\ -6\end{array}\right]\)

??? answer "Se svaret"

    1. ca. \(8.56\)

    2. \(20\)

---

**Øvelse 9**

1. Bestem
   
    $$
    3\left[\begin{array}{c}-2 \\ 0 \\ 4\end{array}\right] \cdot\left(\left[\begin{array}{c}8 \\ -2 \\ 3 / 2\end{array}\right]+\left[\begin{array}{l}0 \\ 9 \\ 7\end{array}\right]\right)
    $$

2. Givet de to vektorer

    $$
    \mathbf{v}=\left[\begin{array}{c}
    4 \\
    3 \\
    -1
    \end{array}\right], \quad \hat{\mathbf{n}}=\left[\begin{array}{c}
    \sqrt{2} / 2 \\
    \sqrt{2} / 2 \\
    0
    \end{array}\right]
    $$
    
    opdel \(\mathbf{v}\) i komponenter, der er vinkelrette og parallelle med \(\hat{\mathbf{n}}\). (Som notationen antyder, er \(\hat{\mathbf{n}}\) en enhedsvektor.)

3. Beregn \(\mathbf{a} \times \mathbf{b}\) og \(\mathbf{b} \times \mathbf{a}\)
    
    \(\mathbf{a}=\left[\begin{array}{lll}3 & 10 & 7\end{array}\right], \mathbf{b}=\left[\begin{array}{lll}8 & -7 & 4\end{array}\right]\)

??? answer "Se svaret"

    1. 54
    2. \(\begin{aligned} \mathbf{v}_{\|} & =\hat{\mathbf{n}} \frac{\mathbf{v} \cdot \hat{\mathbf{n}}}{\|\mathbf{n}\|^2}=\hat{\mathbf{n}} \frac{\mathbf{v} \cdot \hat{\mathbf{n}}}{1}=\hat{\mathbf{n}}(\mathbf{v} \cdot \hat{\mathbf{n}}) \\ & =\left[\begin{array}{c}\sqrt{2} / 2 \\ \sqrt{2} / 2 \\ 0\end{array}\right]\left(\left[\begin{array}{c}4 \\ 3 \\ -1\end{array}\right] \cdot\left[\begin{array}{c}\sqrt{2} / 2 \\ \sqrt{2} / 2 \\ 0\end{array}\right]\right)=\left[\begin{array}{c}\sqrt{2} / 2 \\ \sqrt{2} / 2 \\ 0\end{array}\right]\left(2 \sqrt{2}+\frac{3 \sqrt{2}}{2}+0\right) \\ & =\left[\begin{array}{c}\sqrt{2} / 2 \\ \sqrt{2} / 2 \\ 0\end{array}\right] \frac{7 \sqrt{2}}{2}=\left[\begin{array}{c}7 / 2 \\ 7 / 2 \\ 0\end{array}\right]\end{aligned}\)
    3. \(\begin{aligned} & {\left[\begin{array}{c}3 \\ 10 \\ 7\end{array}\right] \times\left[\begin{array}{c}8 \\ -7 \\ 4\end{array}\right]=\left[\begin{array}{c}(10)(4)-(7)(-7) \\ (7)(8)-(3)(4) \\ (3)(-7)-(10)(8)\end{array}\right]=\left[\begin{array}{c}40-(-49) \\ 56-12 \\ -21-80\end{array}\right]=\left[\begin{array}{c}89 \\ 44 \\ -101\end{array}\right]} \\ & {\left[\begin{array}{c}8 \\ -7 \\ 4\end{array}\right] \times\left[\begin{array}{c}3 \\ 10 \\ 7\end{array}\right]=\left[\begin{array}{c}(-7)(7)-(4)(10) \\ (4)(3)-(8)(7) \\ (8)(10)-(-7)(3)\end{array}\right]=\left[\begin{array}{c}-49-40 \\ 12-56 \\ 80-(-21)\end{array}\right]=\left[\begin{array}{c}-89 \\ -44 \\ 101\end{array}\right]}\end{aligned}\)

**Øvelse 10**

Afsnit 2.8 introducerede normen af en vektor, nemlig en skalarværdi, der er forbundet med en given vektor. Dog er den definition af normen, der blev givet i dette afsnit, ikke den eneste definition af en norm for en vektor. Generelt er \(p\)-normen af en \(n\)-dimensional vektor defineret som

$$
\|\mathbf{x}\|_p \equiv\left(\sum_{i=1}^n\left|x_i\right|^p\right)^{1 / p}
$$

Nogle af de mest almindelige \(p\)-normer omfatter:  

- **\(L^1\)-normen**, også kaldet Manhattan-normen (\(p=1\)):

    $$
    \|\mathbf{x}\|_1 \equiv \sum_{i=1}^n\left|x_i\right|
    $$

- **\(L^2\)-normen**, også kaldet den Euklidiske norm (\(p=2\)). Dette er den mest almindelige og velkendte norm, da den måler geometrisk længde:

    $$
    \|\mathbf{x}\|_2 \equiv \sqrt{\sum_{i=1}^n x_i^2}
    $$

- **Uendelig-normen**, også kaldet Chebyshev-normen (\(p=\infty\)):

    $$
    \|\mathbf{x}\|_{\infty} \equiv \max \left(\left|x_1\right|, \ldots,\left|x_n\right|\right)
    $$

Hver af disse normer kan betragtes som en måde at tildele en længde eller størrelse til en vektor. Den Euklidiske norm blev diskuteret i afsnit 2.8. Manhattan-normen har sit navn fra gaderne på Manhattan, der er udlagt som et gitter (fx Cartesia fra afsnit 1.2.1). For eksempel kører en taxa, der kører 1 blok øst og 1 blok nord, en samlet afstand på 2 blokke, mens en helikopter, kan flyve i en lige linje fra start til slut og kun rejse \(\sqrt{2}\) blokke (Euklidisk norm). Chebyshev-normen er blot den absolutte værdi af den komponent i vektoren med den største absolutte værdi. Et eksempel på, hvordan denne norm kan anvendes, er at overveje antallet af træk, der kræves for at flytte en konge i et skakspil fra et felt til et andet. De umiddelbart omkringliggende felter kræver 1 træk, felterne omkring dem kræver 2 træk og så videre.

Find for hver af følgende \(\|\mathbf{x}\|_1, \|\mathbf{x}\|_2, \|\mathbf{x}\|_3\), og \(\|\mathbf{x}\|_{\infty}\):  

1. \(\left[\begin{array}{lll}6 & 1 & -9\end{array}\right]\)  
2. \(\left[\begin{array}{llll}-2 & -2 & -2 & -2\end{array}\right]\)  


??? answer
    1.  $\left\|\left[\begin{array}{lll}6 & 1 & -9\end{array}\right]\right\|_1=|6|+|1|+|-9|=16$

        $\left\|\left[\begin{array}{lll}6 & 1 & -9\end{array}\right]\right\|_2=\sqrt{|6|^2+|1|^2+|-9|^2}=\sqrt{118} \approx 10.863$

        $\left\|\left[\begin{array}{lll}6 & 1 & -9\end{array}\right]\right\|_3=\sqrt[3]{|6|^3+|1|^3+|-9|^3}=\sqrt[3]{946} \approx 9.817$  

        $\left\|\left[\begin{array}{lll}6 & 1 & -9\end{array}\right]\right\|_{\infty}=\max (|6|,|1|,|-9|)=9$


    2. \(\left\|\left[\begin{array}{llll}-2 & -2 & -2 & -2\end{array}\right]\right\|_1=|-2|+|-2|+|-2|+|-2|=8\)
   
        \(\left\|\left[\begin{array}{llll}-2 & -2 & -2 & -2\end{array}\right]\right\|_2=\sqrt{|-2|^2+|-2|^2+|-2|^2+|-2|^2}=4\)

        \(\left\|\left[\begin{array}{llll}-2 & -2 & -2 & -2\end{array}\right]\right\|_3=\sqrt[3]{|-2|^3+|-2|^3+|-2|^3+|-2|^3}=\sqrt[3]{32} \approx 3.175\)

        \(\left\|\left[\begin{array}{cccc}-2 & -2 & -2 & -2\end{array}\right]\right\|_{\infty}=\max (|-2|,|-2|,|-2|,|-2|)=2\)


## Uddybende noter
Vektorer er fundamentale byggesten inden for lineær algebra og 3D-matematik. De kan beskrives matematisk som lister af tal og geometrisk som rettede linjesegmenter med en bestemt længde og retning.

### Notation for vektorer

Vektorer kan repræsenteres på flere forskellige måder, afhængigt af konteksten og præferencer:

- **Fed skrift**: $\mathbf{v}$ er en standard notation i trykt tekst og bruges ofte i lineær algebra og fysik. Det er nemt at genkende og skelne fra skalarer.

- **Pil over variablen**: $\vec{v}$ er en almindelig notation i håndskrevne noter og fysikbøger. Det fremhæver vektorens geometriske betydning som en pil med retning og længde.

- **Hat over variablen**: $\hat{\mathbf{v}}$ bruges til at angive en enhedsvektor (en vektor med længde $1$). Dette er praktisk, når retningen er vigtig, men længden er ubetydelig.

- **Ikke-specifik notation**: I nogle kontekster skrives vektorer blot som $v$, uden fed eller andre markeringer, hvilket kan føre til forvirring, hvis det ikke er klart fra sammenhængen, at der er tale om en vektor.

- **Håndskrevet notation**: I håndskrevne noter anvender nogle en lille streg under variablen for at indikere, at det er en vektor.

På denne kursusside bruges **fed skrift** som standardnotation for vektorer ($\mathbf{v}$) og en hat for enhedsvektorer ($\hat{\mathbf{v}}$), da dette er konsistent og nemt at læse i både trykt og digital form. Skalarer er almindelige små bogstaver i kursiv, f.eks. $a$, $b$, $x$, $y$, $z$, $\alpha$, $\beta$. Disse repræsenterer almindelige tal uden geometrisk betydning. Matricer noteres med **fed skrift med store bogstaver**, f.eks. $\mathbf{A}$, $\mathbf{B}$, $\mathbf{M}$ osv. Dette er en standardnotation, der gør det nemt at skelne dem fra vektorer og skalarer.

### Typer af vektorer
- **Rækkevektor**: Vandret repræsentation, f.eks. $\mathbf{v} =[x, y, z]$.
- **Søjlevektor**: Lodret repræsentation, f.eks. $\mathbf{v} = \begin{bmatrix} x \\ y \\ z \end{bmatrix}$.

### Geometrisk definition
Geometrisk repræsenteres vektorer som pile i rummet, hvor:

- **Længde (magnitude)**: Målt med formel $\|\mathbf{v}\| = \sqrt{x^2 + y^2 + z^2}$.
- **Retning**: Viser vektorens orientering.

#### Relativ position
Vektorer beskriver forskydning, ikke absolut position. F.eks. viser vektoren $\mathbf{v} = [3, -2]$ en forskydning på 3 enheder til højre og 2 nedad.

### Kartesiske koordinater og vektorer

I kartesiske koordinater specificeres en vektor ved dens komponenter langs hver akse:

- **2D**: $\mathbf{v} = [x, y]$.
- **3D**: $\mathbf{v} = [x, y, z]$.

Disse komponenter repræsenterer forskydninger i hver dimension.

### Operationer med vektorer

#### Addition og subtraktion
Vektorer kan adderes eller subtraheres komponentvist:

- Addition: $\begin{bmatrix} x_1 \\ y_1 \end{bmatrix} + \begin{bmatrix} x_2 \\ y_2 \end{bmatrix} = \begin{bmatrix} x_1 + x_2 \\ y_1 + y_2 \end{bmatrix}$.
- Subtraktion: $\begin{bmatrix} x_1 \\ y_1 \end{bmatrix} - \begin{bmatrix} x_2 \\ y_2 \end{bmatrix} = \begin{bmatrix} x_1 - x_2 \\ y_1 - y_2 \end{bmatrix}$.

#### Multiplikation med skalar
Multiplikation ændrer en vektors længde:

- Formel: $k \cdot \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} kx \\ ky \end{bmatrix}$.
- Hvis $k < 0$, vendes vektorens retning.

#### Negation
At negere en vektor svarer til multiplikation med $-1$:

- $-\begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} -x \\ -y \end{bmatrix}$.

### Punkt vs. vektor
- **Punkt**: Angiver en absolut position, f.eks. $(x, y)$.
- **Vektor**: Angiver forskydning, f.eks. $\mathbf{v} = [x, y]$.

Disse begreber overlapper i mange tilfælde, men er konceptuelt forskellige.

### Geometriske egenskaber af vektorer

#### **Længde (normen af en vektor)**  
Længden af en vektor \(\mathbf{v} = [x, y, z]\) defineres som:  

\[
\|\mathbf{v}\| = \sqrt{x^2 + y^2 + z^2}
\]  

Dette svarer til afstanden fra origo til punktet \((x, y, z)\) i rummet.  

#### Afstand mellem vektorer 
Afstanden mellem to vektorer \(\mathbf{v} = [x_1, y_1, z_1]\) og \(\mathbf{w} = [x_2, y_2, z_2]\) er givet ved:

\[
d(\mathbf{v}, \mathbf{w}) = \|\mathbf{v} - \mathbf{w}\| = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}
\]  

Denne formel bruges ofte til at beregne afstanden mellem punkter i rummet.  

#### Enhedsvektorer og normalisering
En **enhedsvektor** er en vektor med længde 1. En vektor \(\mathbf{v}\) kan **normaliseres** til en enhedsvektor:  

\[
\hat{\mathbf{v}} = \frac{\mathbf{v}}{\|\mathbf{v}\|}, \quad \text{for } \|\mathbf{v}\| \neq 0
\]  

Normalisering bruges, når vi kun er interesseret i retningen af en vektor og ikke dens størrelse.  

### Prikproduktet  
Prikproduktet mellem to vektorer \(\mathbf{v}\) og \(\mathbf{w}\) defineres som:  

\[
\mathbf{v} \cdot \mathbf{w} = v_1 w_1 + v_2 w_2 + v_3 w_3
\]  

Dette giver et **skalar-resultat** og har to vigtige fortolkninger:  

1. **Mål for vinklen mellem to vektorer:**  
   
    \[
    \mathbf{v} \cdot \mathbf{w} = \|\mathbf{v}\| \|\mathbf{w}\| \cos\theta
    \]  

    hvor \(\theta\) er vinklen mellem vektorerne.  

     - Hvis \(\mathbf{v} \cdot \mathbf{w} > 0\), peger vektorerne nogenlunde i samme retning.  
     - Hvis \(\mathbf{v} \cdot \mathbf{w} = 0\), er vektorerne **ortogonale** (vinkelrette).  
     - Hvis \(\mathbf{v} \cdot \mathbf{w} < 0\), peger de i modsat retning.  

1. **Prikproduktet som projektion:**  
    Prikproduktet kan også tolkes som projektionen af \(\mathbf{v}\) på \(\mathbf{w}\): 

    \[
    \frac{\mathbf{v} \cdot \mathbf{w}}{\|\mathbf{w}\|} = \|\mathbf{v}\| \cos\theta
    \]  

    Dette beskriver, hvor meget af \(\mathbf{v}\) der ligger i retningen af \(\mathbf{w}\).  



### Krydsproduktet 
Krydsproduktet af to **3D-vektorer** \(\mathbf{v} = [v_1, v_2, v_3]\) og \(\mathbf{w} = [w_1, w_2, w_3]\) giver en **ny vektor** vinkelret på begge:  

\[
\mathbf{v} \times \mathbf{w} =
\begin{bmatrix} 
v_2 w_3 - v_3 w_2 \\ 
v_3 w_1 - v_1 w_3 \\ 
v_1 w_2 - v_2 w_1
\end{bmatrix}
\]

Krydsproduktet bruges ofte til at finde normalvektorer og i fysik til at beskrive moment og magnetiske felter.  

Egenskaber:  

- Resultatet er **en vektor**, ikke en skalar.  
- \(\mathbf{v} \times \mathbf{w}\) er **ortogonal** på både \(\mathbf{v}\) og \(\mathbf{w}\).  
- Hvis \(\mathbf{v}\) og \(\mathbf{w}\) er parallelle, er krydsproduktet **nulvektoren**.  


### Oversigt over vektoridentiteter

| **Identitet** | **Kommentarer** |
|--------------|----------------|
| \( \mathbf{a} + \mathbf{b} = \mathbf{b} + \mathbf{a} \) | Kommutativ egenskab for vektoraddition |
| \( \mathbf{a} - \mathbf{b} = \mathbf{a} + (-\mathbf{b}) \) | Definition af vektorsubtraktion |
| \( (\mathbf{a} + \mathbf{b}) + \mathbf{c} = \mathbf{a} + (\mathbf{b} + \mathbf{c}) \) | Associativ egenskab for vektoraddition |
| \( k (\mathbf{a} + \mathbf{b}) = k \mathbf{a} + k \mathbf{b} \) | Skalarmultiplikation distribuerer over vektoraddition |
| \( \|k \mathbf{a}\| = \|k\| \|\mathbf{a}\| \) | Multiplikation af en vektor med en skalar skalerer størrelsen med en faktor lig den absolutte værdi af skalaren |
| \( \|\mathbf{a}\| \geq 0 \) | Størrelsen af en vektor er ikke-negativ |
| \( \|\mathbf{a}\|^2 + \|\mathbf{b}\|^2 = \|\mathbf{a} + \mathbf{b}\|^2 \) | Pythagoras' sætning anvendt på vektoraddition |
| \( \|\mathbf{a}\| + \|\mathbf{b}\| \geq \|\mathbf{a} + \mathbf{b}\| \) | Trekantsuligheden for vektoraddition (Ingen side kan være længere end summen af de to andre sider) |
| \( \mathbf{a} \cdot \mathbf{b} = \mathbf{b} \cdot \mathbf{a} \) | Kommutativ egenskab for prikproduktet |
| \( \|\mathbf{a}\| = \sqrt{\mathbf{a} \cdot \mathbf{a}} \) | Vektorstørrelse defineret ved hjælp af prikprodukt |
| \( k (\mathbf{a} \cdot \mathbf{b}) = (k\mathbf{a}) \cdot \mathbf{b} = \mathbf{a} \cdot (k\mathbf{b}) \) | Associativ egenskab for skalarmultiplikation med prikprodukt |
| \( \mathbf{a} \cdot (\mathbf{b} + \mathbf{c}) = \mathbf{a} \cdot \mathbf{b} + \mathbf{a} \cdot \mathbf{c} \) | Prikprodukt distribuerer over vektoraddition og subtraktion |
| \( \mathbf{a} \times \mathbf{b} = - (\mathbf{b} \times \mathbf{a}) \) | Krydsproduktet er antikommutativt |
| \( \mathbf{a} \times \mathbf{b} = (-\mathbf{a}) \times (-\mathbf{b}) \) | Negering af begge operander i krydsproduktet giver det samme vektorresultat |
| \( k (\mathbf{a} \times \mathbf{b}) = (k\mathbf{a}) \times \mathbf{b} = \mathbf{a} \times (k\mathbf{b}) \) | Associativ egenskab for skalarmultiplikation med krydsprodukt |
| \( \mathbf{a} \times (\mathbf{b} + \mathbf{c}) = \mathbf{a} \times \mathbf{b} + \mathbf{a} \times \mathbf{c} \) | Krydsprodukt distribuerer over vektoraddition og subtraktion |
