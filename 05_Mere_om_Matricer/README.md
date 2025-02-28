<h1 align="center">Matricer II</h1>



## Forberedelse
3DM: [Kapitel 6]()

I skal have set [videoerne](#videomateriale) fra den aktuelle session. Dette udgør som minimum jeres forberedelse til hver session. Hertil kan I også læse i bogen.

## Materiale

[Sessionsmateriale]()

[Øvelsesnoter - tilgængelige mandag]()

---

## Kort om sessionen
I denne session introduceres begrebet ortogonalitet i matricer samt determinanter og deres anvendelse. Vi undersøger, hvordan man tester, om en matrix er ortogonal (igen), ved brug af Gram-matricen. Derudover lærer vi, hvordan determinanter kan bruges til at bestemme invertibilitet og transformationsegenskaber. 

### Nøgleord
- Determinant   
- Ortogonalitet og Ortonormalitet  
- Invertibilitet  
- Translationer  
- Homogene koordinater  
- Perspektivprojektion

---

## Videomateriale
Vi fortsætter med 3Blue1Browns serie om lineær algebra og supplerer med andre. Videoerne giver en indføring i koncepterne, hvor mine tutorials mere handler om hvordan man laver de relevante beregninger både manuelt og i Python. Se videoerne før du går til tutorials

### 5.1. 3Blue1Brown: Determinanten
<iframe width="560" height="315" src="https://www.youtube.com/embed/Ip3X9LOh2dk?si=zWGnshCjT8la_Cqe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 5.2. 3Blue1Brown: Invertible matricer
<iframe width="560" height="315" src="https://www.youtube.com/embed/uQhTuRlWMxw?si=Lt3xeBNVKkyJzhna" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 5.3. Maxwell Hunt: Homogene koordinater og translationer

Bemærk: De første 4:20 minutter er repetition af sidste uges emne. Herefter går han videre med translationer. Vær opmærksom på, at han (og de fleste andre) bruger en anden konvention for homogene koordinater end den, bogen bruger. Bogen bruger rækkevektorer (fra venstre), hvor han bruger søjlevektorer fra højre. Bogen placerer translationen i den sidste række, hvor den mest almindelige konvention er at placere den i den sidste søjle (som i videoen). Det er træls og lidt forvirrende. Men pointen med videoen er at fange essensen af translationer og homogene koordinater. Se den relevante tutorial for at se, hvordan man beregner det på begge måder.

<iframe width="560" height="315" src="https://www.youtube.com/embed/naatDSe6v1c?si=A-Agvb_T0YR1qM3P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 5.4. Brendan Galea: Perspektivprojektion
Bemærk: Jeg har valgt at starte videoen ved 5:17, da det er her han begynder at snakke om perspektivprojektion. I er velkomne til at se den fra start, da det faktisk er ret spændende. Her taler han generelt om hvordan vi får 3D til at se 3D ud på en 2D skærm.

<iframe width="560" height="315" src="https://www.youtube.com/embed/U0_ONQQ5ZNM?si=ai0hUJuEPeX5YylV&amp;start=317" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 5.5. Miolith: Homogene koordinater og perspektivprojektion (Valgfrit):
Hvis du ikke har så meget tid, kan denne video (til nøds) erstatte de to ovenstående. Den er lidt kortere.

<iframe width="560" height="315" src="https://www.youtube.com/embed/o-xwmTODTUI?si=zlQv1g-2JH3X8Gm-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Tutorials

<div class="grid cards" markdown>

- <video autoplay loop muted playsinline style="height:100px;width:100px;float:right;">
  <source src="src/T1.mp4" type="video/mp4">
  Your browser does not support the video tag.
    </video>

    I denne tutorial gennemgås hvordan man beregner determinanter og inverser for 2x2 og 3x3 matricer. Derudover gennemgås regneregler for determinanter og inverser.

    [:octicons-arrow-right-24: T1: Beregning af determinanter og inverse](T1.md)

- <video autoplay loop muted playsinline style="height:100px;width:100px;float:right;">
  <source src="src/T2.mp4" type="video/mp4">
  Your browser does not support the video tag.
    </video>

    Her gennemgås ortogonalitet og ortonormalitet. Vi har set på dette da vi snakkede om vektorer.    
    
    [:octicons-arrow-right-24: T2: Ortogonalitet](T2.md)


- <video autoplay loop muted playsinline style="height:100px;width:100px;float:right;">
  <source src="src/T3.mp4" type="video/mp4">
  Your browser does not support the video tag.
    </video>

    Her gennemgås hvordan man laver translationer i 2D og 3D. Dette er en vigtig transformation, som I skal kunne. Vi genbesøger også de andre transformationer, som vi har set på tidligere.
    
    [:octicons-arrow-right-24: T3: Homogene matricer og translationer](T3.md)

- <video autoplay loop muted playsinline style="height:100px;width:100px;float:right;">
  <source src="src/T4.mp4" type="video/mp4">
  Your browser does not support the video tag.
    </video>

    Perspektivisk projektion er en teknik inden for 3D-grafik, der bruges til at skabe en **illusion af dybde** på en 2D-skærm. Denne tutorial forklarer, hvordan 4x4 matricer bruges til at implementere perspektivisk projektion, og dækker de underliggende principper og den nødvendige matematik.
    
    [:octicons-arrow-right-24: T4: Perspektiv projektion](T4.md)

</div>

---

## Øvelser

---

<style type="text/css">
    ol { list-style-type: lower-alpha; }
</style>

**Øvelse 1**

I denne øvelse vil jeg gerne have at I først prøver at regne det i hånden, så I får fornemmelsen af, hvordan det hænger sammen. Derefter kan I tjekke jeres svar i Python. Find determinanten af følgende matricer:

 1. $\left[\begin{array}{cc}3 & -2 \\ 1 & 4\end{array}\right]$
 2. $\left[\begin{array}{ccc}3 & -2 & 0 \\ 1 & 4 & 0 \\ 0 & 0 & 2\end{array}\right]$


??? answer "Se svaret"

    1. $\left|\begin{array}{cc}3 & -2 \\ 1 & 4\end{array}\right|=3-4-(-2)-1=14$
    2. $\left|\begin{array}{ccc}3 & -2 & 0 \\ 1 & 4 & 0 \\ 0 & 0 & 2\end{array}\right|=3(4 \cdot 2-0 \cdot 0)+(-2)(0 \cdot 0-1 \cdot 2)+0(1 \cdot 0-4 \cdot 0)=28$.
    
---

**Øvelse 2**

Is the following matrix orthogonal?

$$
\left[\begin{array}{ccc}
-0.1495 & -0.1986 & -0.9685 \\
-0.8256 & 0.5640 & 0.0117 \\
-0.5439 & -0.8015 & 0.2484
\end{array}\right]
$$

Use a tolerance of $10^{-4}$.

??? answer "Se svaret"
    The matrix is orthogonal within the appropriate tolerance.
    

---

**Exercise 3**
Construct a $4 \times 4$ matrix to translate by $[4,2,3]$.
??? answer "Se svaret"


---

**Øvelse 4**
Construct a $4 \times 4$ matrix to rotate $20^{\circ}$ about the $x$-axis and then translate by $[4,2,3]$.

??? answer "Se svaret"

---

**Øvelse 5**
Construct a $4 \times 4$ matrix to translate by $[4,2,3]$ and then rotate $20^{\circ}$ about the $x$-axis.


??? answer "Se svaret"

 

---

**Øvelse 6**
Construct a $4 \times 4$ matrix to perform a perspective projection onto the plane $x=5$. (Assume the origin is the center of projection.)

??? answer "Se svaret"



---

**Øvelse 7**
Use the matrix from the previous exercise to compute the 3D coordinates of the projection of the point $(105,-243,89)$ onto the plane $x=5$.

??? answer "Se svaret"


---


## Uddybende noter
Jeg dropper de uddybende noter, da tutorials spiller den rolle. Der ville langt hen ad vejen være overlap.