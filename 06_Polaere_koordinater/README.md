<h1 align="center">Polære koordinater</h1>

<p align="center">
    <video class="custom-video" width="600" autoplay loop muted>
        <source src="../figures/video_preview4_h2646.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
</p>


## Forberedelse
3DM: [Kapitel 7](https://viaucdk-my.sharepoint.com/:b:/g/personal/rib_viauc_dk/EWSwoHT2ECtHlA4ISmU-mucBfmYwfl_B4vktd5YlZN_QPQ?e=bHGQQ4)

I skal have set [videoerne](#videomateriale) fra den aktuelle session. Dette udgør som minimum jeres forberedelse til hver session. Hertil kan I også læse i bogen.

## Materiale

[Sessionsmateriale](https://viaucdk-my.sharepoint.com/:f:/g/personal/rib_viauc_dk/EgsQxEUA8xJEgZZ3GLihffQB5zQeKFqQSoflFXxaM-89qQ?e=uhflfO)

[Øvelsesnoter - tilgængelige mandag]()

---

## Kort om sessionen

Denne session omhandler de polære koordinatsystemer i både 2D og 3D og præsenterer de fundamentale koncepter bag brugen af vinkler og afstande til at beskrive positioner og vektorer. Vi kigger på hvordan man
 - Bruger polære koordinater til at lokalisere punkter i et todimensionelt rum, herunder omregning til og fra kartesiske koordinater med formler som \( x = r \cos\theta \) og \( y = r \sin\theta \).
 - Håndterer aliasering, dvs. de multiple måder at repræsentere det samme punkt på, og fastlægger et kanonisk koordinatsæt.
 - Udvider begrebet til 3d gennem cylindriske og sfæriske koordinatsystemer

### Nøgleord
- Polære koordinater  
- Kartesiske koordinater  
- Aliasering  
- Kanoniske koordinater  
- Konverteringsalgoritmer  
- Cylindriske koordinater  
- Sfæriske koordinater  
- Gimbal lock  
- Vektorrepræsentation 


---
## Tutorials

Denne gang vil jeg faktisk sige at Tutorials er vigtigere end videoerne. Så prøv at kigge dem igennem.

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

## Videomateriale
3Blue1Brown har ikke lavet videoer om polære koordinater, men til gengæld har min kollega Mette lavet nogle tre korte videoer om emnet. Mette har fokus på forståelse af enhedscirklen og på hvordan man går fra polære til kartesiske koordinater og omvendt. Den fjerde video giver en mere visuel forklaring af polære koordinater, og den sidste omhandler 3d polære koordinater og er lidt mere kompleks. Se også ovenstående tutorials.

### 6.1. Mette Mortensen: Enhedscirklen 
<iframe width="560" height="315" src="https://drive.google.com/file/d/1x9uhjI2m60dd2aZL9GYn1joVViHwMIqB/preview" title="Video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 6.2. Mette Mortensen: Polære koordinater
<iframe width="560" height="315" src="https://drive.google.com/file/d/1aeSpckiWnwzLaBqA_edtqFLKReRqTYLt/preview" title="Video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 6.3. Mette Mortensen: Eksempler på polære koordinater
<iframe width="560" height="315" src="https://drive.google.com/file/d/1xrIhd3O62ha3G2--rfdpuLsdUydmHhKy/preview" title="Video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 6.4. Chris Odden: Introduction to polar coordinates
<iframe width="560" height="315" src="https://www.youtube.com/embed/stU63ST6ung?si=g3Irq3m3xllczaDG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

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