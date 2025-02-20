<h1 align="center">Matricer og lineære transformationer</h1>

<p align="center">
    <video class="custom-video" width="600" autoplay loop muted>
        <source src="../figures/video_preview4_h264.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
</p>

## Forberedelse
3DM: [Kapitel 5]()

I skal have set [videoerne](#videomateriale) fra den aktuelle session. Dette udgør som minimum jeres forberedelse til hver session. Hertil kan I også læse i bogen.

## Materiale

[Sessionsmateriale]()

[Øvelsesnoter - tilgængelige mandag]()

---

## Sessionsbeskrivelse

Denne session omhandler transformationer i 3D rum ved brug af $3 \times 3$ matricer, med fokus på lineære transformationer. Sessionen er delt i to hoveddele. Den første del omfatter konstruktion af transformationsmatricer for rotation, skalering, ortografisk projektion, refleksion og shearing (shearing) i både 2D og 3D. Der lægges vægt på at forstå, hvordan standardbasisvektorerne transformeres, og hvordan disse transformationer afspejles i matricerne. Anden del af sessionen omfatter kombination af transformationer ved hjælp af matrixmultiplikation samt forskellige kategorier af transformationer, herunder lineære, affine, invertible, vinkelbevarende, ortogonale og stive legemetransformationer (rigid-body transforms). Sessionen forudsætter en forståelse af grundlæggende matrixoperationer og vektorgeometri, som vi har været igennem de sidste par uger.

### Nøgleord

*   **Lineær Transformation:** En transformation, der bevarer addition og skalar multiplikation.
*   **Affin Transformation:** En lineær transformation efterfulgt af translation.
*   **Invertibel Transformation:** En transformation, der kan "fortrydes".
*   **Ortogonal Transformation:** En transformation, hvor rækkerne i den tilsvarende matrix danner en ortonormal basis.
*   **Stiv Legeme Transformation (Rigid Body Transformation):** En transformation, der bevarer form, vinkler og længder.
*   **Rotationsmatrix:** En matrix, der repræsenterer en rotation omkring et punkt (2D) eller en akse (3D).
*   **Skaleringsmatrix:** En matrix, der ændrer størrelsen af et objekt.
*   **Ortografisk Projektion:** En parallel projektion, hvor punkter projiceres på en akse eller et plan.
*   **Refleksion (Spejling):** En transformation, der "vender" et objekt omkring en linje eller et plan.
*   **Shearing:** En transformation, der "skævvrider" koordinatrummet.

---

## Videomateriale & tutorials

Til denne session har jeg valgt ikke selv at lave nogle videoer, da der findes rigtig mange gode videoer på YouTube, som forklarer emnet rigtig godt. Det første set videoer (4.1-4.3) er fra det legendariske 3Blue1Brown, som forklarer emnet rigtig godt. Video 4.4-4.5 er fra articulated robotics. Videoerne fra 3Blue1Brown er visuelt flotte og kan hjælpe jer hvis I lærer bedst ved at visualisere. Det samme kan man sige om articulated robotics, men jeg synes at de forklarer det på en lidt mere simpel måde. Så I behøver ikke at se alle fem videoer, men kan nøjes med enten 4.1-4.3 eller 4.4-4.5 - dog vil jeg anbefale at hvis I ikke forstår emnet efter det første set, så prøv at se det andet set. Bemærk, at videoerne fra Articulated Robotics ikke gennemgår alle transformationer, men nok til at man forstår, hvad det går ud på.

Jeg har også lavet en række tutorials, som I kan gå igennem. Hvis I vil, kan I droppe videoerne og gå direkte til disse. Især den sidste, som giver praktiske kodeeksempler, kan være god at gå igennem.

### Tutorials

<div class="grid cards" markdown>

- <video autoplay loop muted playsinline style="height:100px;width:100px;float:right;">
  <source src="../figures/T1.mp4" type="video/mp4">
  Your browser does not support the video tag.
    </video>


    Hvad menes der med lineær transformation? Hvad gør dem lineære og hvordan adskiller de sig fra ikke-lineære transformationer?

    [:octicons-arrow-right-24: T1: Lineær vs ikke-lineære transformationer](T1.md)

- <video autoplay loop muted playsinline style="height:100px;width:100px;float:right;">
  <source src="../figures/T2.mp4" type="video/mp4">
  Your browser does not support the video tag.
    </video>

    En **2D-rotation** om origo bevarer afstande og vinkler. En vektor roteres med vinkel \( \theta \) ved at multiplicere med rotationsmatricen.
    
    [:octicons-arrow-right-24: T2: 2d-Rotationer](T2.md)

    

- <video autoplay loop muted playsinline style="height:100px;width:100px;float:right;">
  <source src="../figures/T3.mp4" type="video/mp4">
  Your browser does not support the video tag.
    </video>

    En **3D-rotation** bevarer afstande og vinkler og udføres om en af koordinatakserne. En vektor roteres med vinkel \( \theta \) ved at multiplicere med en rotationsmatrix om den ønskede akse.
    
    [:octicons-arrow-right-24: T3: 3D-Rotationer](T3.md)

- <video autoplay loop muted playsinline style="height:100px;width:100px;float:right;">
  <source src="../figures/T4.mp4" type="video/mp4">
  Your browser does not support the video tag.
    </video>

    Her finder du alle de forskellige typer af transformationer, som de gennemgår i kapitel 5 i bogen. Det kan derfor ses som en slags formelsamling over alle de transformationer, som I skal kunne.
    
    [:octicons-arrow-right-24: T4: Opsamling og "formler"](T4.md)

</div>



### 4.1. 3Blue1Brown: Linear transformations and matrices
<iframe width="560" height="315" src="https://www.youtube.com/embed/kYB8IZa5AuE?si=PuKQxirIp7nGrGvW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 4.2. 3Blue1Brown: Matrix multiplication as composition
<iframe width="560" height="315" src="https://www.youtube.com/embed/XkY2DOUCWMU?si=PuKQxirIp7nGrGvW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 4.3. 3Blue1Brown: Three-dimensional linear transformations
<iframe width="560" height="315" src="https://www.youtube.com/embed/rHLEWRxRGiM?si=a8hlvn2ZESAwVLRJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 4.4. Articulated Robotics: Coordinate Transformations - How robots move through space
<iframe width="560" height="315" src="https://www.youtube.com/embed/NGPn9nvLPmg?si=UqLLPVpqCQv2Yg_q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 4.5. Understanding the Rotation Matrix
<iframe width="560" height="315" src="https://www.youtube.com/embed/8GrdqAizcfU?si=PdDComaAf8U16gPw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
---

## Øvelser

Uploades på mandag

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

### Introduktion til Transformationer

Dette materiale dækker **transformationer i 3D-rum** ved hjælp af **$3 \times 3$ matricer**, med særligt fokus på **lineære transformationer**. Transformationer bruges til at ændre objekters position, størrelse og orientering i et koordinatsystem. Vi vil primært beskæftige os med transformationer, der kan udtrykkes ved hjælp af matrixmultiplikation.

### Lineære Transformationer

*   **Definition**: En transformation $F(a)$ er lineær, hvis den opfylder følgende betingelser:
    *   $F(a + b) = F(a) + F(b)$ (transformationen af en sum af vektorer er lig med summen af transformationerne af de enkelte vektorer).
    *   $F(ka) = kF(a)$ (transformationen af en skaleret vektor er lig med skaleringen af transformationen af vektoren).
*   **Egenskaber**:
    *   Lineære transformationer bevarer addition og skalar multiplikation.
    *   Lineære transformationer afbilder altid nulvektoren på nulvektoren.
    *   Lineære transformationer inkluderer ikke translation.
*   **Eksempler**: Rotation, skalering, shearing, refleksion og ortografisk projektion kan alle udtrykkes som lineære transformationer.
*   **Matrixrepræsentation**: Enhver lineær transformation kan repræsenteres med en matrix $M$, så $F(v) = vM$, hvor $v$ er en vektor.

### Primitive Lineære Transformationer

#### Rotation

*   **2D Rotation**: Rotation om origo i 2D-rum. Rotationsmatricen er givet ved:
    
    $$
    R(\theta) = \begin{pmatrix}
    \cos \theta & \sin \theta \\
    -\sin \theta & \cos \theta
    \end{pmatrix}
    $$

    hvor $\theta$ er rotationsvinklen.

*   **3D Rotation**: Rotation om en af de kartesiske akser i 3D-rum. Rotationsmatricerne er givet ved:
    *   Rotation om x-aksen:
  
        $$
        R_x(\theta) = \begin{pmatrix}
        1 & 0 & 0 \\
        0 & \cos \theta & \sin \theta \\
        0 & -\sin \theta & \cos \theta
        \end{pmatrix}
        $$

    *   Rotation om y-aksen:

        $$
        R_y(\theta) = \begin{pmatrix}
        \cos \theta & 0 & -\sin \theta \\
        0 & 1 & 0 \\
        \sin \theta & 0 & \cos \theta
        \end{pmatrix}
        $$

    *   Rotation om z-aksen:
  
        $$
        R_z(\theta) = \begin{pmatrix}
        \cos \theta & \sin \theta & 0 \\
        -\sin \theta & \cos \theta & 0 \\
        0 & 0 & 1
        \end{pmatrix}
        $$
        
*   **Rotation om en vilkårlig akse**: Rotation om en vilkårlig akse kræver en mere kompleks matrix, der afhænger af enhedsvektoren $\hat{n}$ langs rotationsaksen og rotationsvinklen $\theta$.

#### Skalering

*   **Uniform Skalering**: Ændrer størrelsen af et objekt proportionalt i alle retninger.
*   **Non-uniform Skalering**: Ændrer størrelsen af et objekt forskelligt i forskellige retninger.
*   **Matrixrepræsentation**:
    *   2D Skalering:
  
        $$
        S(k_x, k_y) = \begin{pmatrix}
        k_x & 0 \\
        0 & k_y
        \end{pmatrix}
        $$

    *   3D Skalering:
  
        $$
        S(k_x, k_y, k_z) = \begin{pmatrix}
        k_x & 0 & 0 \\
        0 & k_y & 0 \\
        0 & 0 & k_z
        \end{pmatrix}
        $$

    hvor $k_x$, $k_y$, og $k_z$ er skaleringsfaktorerne langs x-, y- og z-akserne.

#### Ortografisk Projektion

*   **Definition**: En parallel projektion, hvor punkter projiceres på en akse eller et plan.
*   **Projektion på kartesiske akser/planer**: Kan opnås ved at sætte skaleringsfaktoren til nul i den retning, der skal projiceres på.
*   **Matrixrepræsentation (3D)**:
    *   Projektion på xy-planen:
  
        $$
        P_{xy} = \begin{pmatrix}
        1 & 0 & 0 \\
        0 & 1 & 0 \\
        0 & 0 & 0
        \end{pmatrix}
        $$

    *   Projektion på xz-planen:
  
        $$
        P_{xz} = \begin{pmatrix}
        1 & 0 & 0 \\
        0 & 0 & 0 \\
        0 & 0 & 1
        \end{pmatrix}
        $$

    *   Projektion på yz-planen:
        
        $$
        P_{yz} = \begin{pmatrix}
        0 & 0 & 0 \\
        0 & 1 & 0 \\
        0 & 0 & 1
        \end{pmatrix}
        $$

*   **Projektion på en vilkårlig linje/plan**: Projektionen defineres af en enhedsvektor $\hat{n}$, der er vinkelret på linjen eller planet.

#### Refleksion (Spejling)

*   **Definition**: En transformation, der "vender" et objekt omkring en linje (i 2D) eller et plan (i 3D).
*   **Matrixrepræsentation (2D)**:
    
    $$
    R(\hat{n}) = \begin{pmatrix}
    1-2n_x^2 & -2n_xn_y \\
    -2n_xn_y & 1-2n_y^2
    \end{pmatrix}
    $$
    
    hvor $\hat{n} = (n_x, n_y)$ er en enhedsvektor vinkelret på refleksionsaksen.
*   **Matrixrepræsentation (3D)**:
    
    $$
    R(\hat{n}) = \begin{pmatrix}
    1-2n_x^2 & -2n_xn_y & -2n_xn_z \\
    -2n_xn_y & 1-2n_y^2 & -2n_yn_z \\
    -2n_xn_z & -2n_yn_z & 1-2n_z^2
    \end{pmatrix}
    $$
    
    hvor $\hat{n} = (n_x, n_y, n_z)$ er en enhedsvektor vinkelret på refleksionsplanet.

#### Shearing

*   **Definition**: En transformation, der "skævvrider" koordinatrummet.
*   **Egenskaber**: Bevarer arealer og volumener, men ikke vinkler.
*   **Matrixrepræsentation (2D)**:
    *   Shearing langs x-aksen:
        
        $$
        H_x(s) = \begin{pmatrix}
        1 & s \\
        0 & 1
        \end{pmatrix}
        $$
    
    *   Shearing langs y-aksen:
        $$
        H_y(s) = \begin{pmatrix}
        1 & 0 \\
        s & 1
        \end{pmatrix}
        $$
        
    hvor $s$ er forskydningsfaktoren.

### Kombination af Transformationer

*   **Matrixmultiplikation**: Flere transformationer kan kombineres ved at multiplicere deres respektive matricer.
*   **Rækkefølge**: Rækkefølgen af matrixmultiplikationen er vigtig, da matrixmultiplikation ikke er kommutativ. Hvis transformation $A$ udføres før transformation $B$, er den samlede transformation $AB$.
*   **Anvendelse**: Kombination af transformationer bruges f.eks. i rendering til at transformere objekter fra objekt-rum til verdensrum og derefter til kamera-rum.

### Klasser af Transformationer

*   **Affin Transformation**: En lineær transformation efterfulgt af translation.
*   **Invertibel Transformation**: En transformation, der kan "fortrydes". En transformation er invertibel, hvis der findes en invers transformation $F^{-1}$, så $F^{-1}(F(a)) = F(F^{-1}(a)) = a$.
*   **Ortogonal Transformation**: En transformation, hvor rækkerne i den tilsvarende matrix danner en ortonormal basis. Ortogonale transformationer bevarer længder og vinkler (dog kan fortegnet på vinkler ændres ved refleksion).
*   **Stiv Legeme Transformation (Rigid Body Transformation)**: En transformation, der bevarer form, vinkler og længder. Translation og rotation er de eneste stive legeme transformationer.

### Konklusion

Forståelsen af transformationer og deres matrixrepræsentation er afgørende for at kunne manipulere objekter i 2D- og 3D-rum. Ved at kombinere primitive transformationer kan man skabe komplekse transformationer og opnå avancerede effekter i grafik og animation.