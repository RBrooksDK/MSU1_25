<h1 align="center">3D Grafik</h1>



## Forberedelse
3DM: Pensum er Kapitel 2-7 + 8.3


## Materiale

[Sessionsmateriale](https://viaucdk-my.sharepoint.com/:b:/g/personal/rib_viauc_dk/EX1sBOnOHFVBu3HIcr1uGSQBiANAeX7gkIUb-mZrvr37Jg?e=CMrogd)

[Præsentation af Quaternions](https://docs.google.com/presentation/d/1BncqvQ4M1ZbkW3pue4mR6tBe8Vix8NelsQvfK_QRP8Y/mobilepresent?slide=id.p)

Det er Freya Holmer, der har lavet præsentationen. Hun gennemgår det også i den video jeg linker til i starten af kurset.

---

## Kort om sessionen
I dag skal vi samle op på det vi har været igennem. Der blir ikke noget nyt stof i dag (quarternions er semi-nyt), men en opfriskning af det vi har været igennem. Vi vil gennemgå de vigtigste emner og begreber, og I vil få mulighed for at stille spørgsmål og diskutere emnerne. Hvis skal bruge "keywords" til jeres eksamen, så er det i dag I skal finde dem. Der er groft sagt følgende overskrifter vi vil komme ind på:

- Vektorer
- Koordinatsystemer
- Matricer
- Linæere transformationer
- Matricer: Determinant, inverse, transponeret, orthogonalitet, homogene
- Polar vs. kartesiske koordinater
- 3D rotationer og euler vinkler og gimbal lock
- Quaternions

### Eksamensspørgsmål

Nedenfor er en liste over emner og spørgsmål, som kan være relevante for jeres eksamen. Jeg vil tro at listen kan være en god hjælp til at forberede jer, og at I kan bruge den til at finde de "keywords" I skal bruge til jeres eksamen.

#### 1. Introduktion til Vektorer

- Hvad er forskellen på en vektor og en skalar?
- Hvordan repræsenteres en vektor matematisk og geometrisk?
- Hvad er betydningen af skalarmultiplikation for en vektor?
- Hvad betyder det at normalisere en vektor?
- Hvad er prikproduktet, og hvordan relaterer det sig til vinklen mellem to vektorer?
- Hvordan kan prikproduktet bruges til at afgøre, om to vektorer er ortogonale?
- Angiv prikproduktets geometriske fortolkning i relation til projektion af én vektor på en anden.
- Hvad er krydsproduktet, og hvilke egenskaber har det?

#### 2. Flere Koordinatsystemer

- Hvorfor anvendes flere koordinatsystemer i 3D-grafik?
- Hvad karakteriserer verdens-, objekt- og kamerakoordinater?
- Hvad karakteriserer en basis i et vektorrum, og hvad betyder det, at basisvektorer er ortogonale eller ortonormale?
- Hvad er forskellen på en passiv og en aktiv koordinattransformation?
- Hvad er et hierarkisk koordinatsystem, og hvornår er det fordelagtigt?
- Hvordan afgør man, om et punkt befinder sig foran eller bagved et objekt ved hjælp af prikproduktet?

#### 3. Introduktion til Matricer

- Hvad er en matrix, og hvordan angives dens dimension?
- Hvad er en kvadratisk matrix?
- Hvad er en diagonalmatrix?
- Hvad er en identitetsmatrix?
- Hvordan multipliceres matricer og er matrixmultiplikation kommutativ?
- Hvad betyder det at transponere en matrix, og hvad er egenskaberne ved transponering?
- Hvad betyder det, at matricer kan repræsentere lineære transformationer?
- Hvordan bruges matricer til at løse systemer af lineære ligninger?
- Hvordan testes lineær uafhængighed og ortogonalitet af vektorer ved hjælp af matricer?

#### 4. Matricer og Lineære Transformationer

- Hvad definerer en lineær transformation?
- Hvilke egenskaber skal en lineær transformation opfylde?
- Hvordan er matricens rækker (ved rækkevektorkonvention) relateret til de transformerede standardbasisvektorer?
- Hvad er en rotationsmatrice for 3D rotation omkring kardinalakserne (Rx, Ry, Rz).
- Hvordan repræsenteres en skalering med matricer?
- Hvad karakteriserer en ortografisk projektion og refleksion?
- Hvorfor er rækkefølgen af transformationer vigtig, når flere lineære transformationer kombineres?
- Hvad karakteriserer en ortogonal transformation?
- Hvad er den inverse af en ortogonal matrix?
- Hvad karakteriserer en stiv-legeme transformation?

#### 5. Matricer II (Determinant, Invers, Ortogonalitet)

- Hvad er determinanten af en matrix?
- Hvad er den geometriske fortolkning af determinanten i 2D og 3D?
- Hvilken sammenhæng er der mellem en matrices invertibilitet og dens determinant?
- Hvad betyder det geometrisk, når en matrix er singulær (ikke-invertibel)?
- Hvorfor bruges homogene koordinater i 3D-grafik?
- Hvordan repræsenteres et 3D-punkt [x, y, z] i homogene koordinater (rækkevektorkonvention)?
- Hvordan repræsenteres en 3D-vektor [x, y, z] i homogene koordinater (rækkevektorkonvention)?
- Hvad er translationsmatricen for en translation [tx, ty, tz] ved brug af rækkevektorkonvention.
- Hvordan sammensættes en affin transformation ved hjælp af matricer?
- Hvordan udføres en rotation omkring et vilkårligt punkt p ved hjælp af homogene koordinater (angiv rækkefølgen af transformationer)?

#### 6. Polære Koordinater

- Hvordan beskrives et punkt i 2D polære koordinater (angiv de to koordinater)?
- Hvorfor er atan2(y, x) funktionen at foretrække frem for arctan(y/x) ved konvertering fra kartesiske til polære koordinater?
- Hvad er aliasing i polære koordinater, og hvordan opnår man en kanonisk form?
- Hvad er cylindriske koordinater, og hvornår er det hensigtsmæssigt at bruge dem?
- Hvad er sfæriske koordinater, og angiv formlerne for konvertering fra sfæriske koordinater (matematisk konvention) til kartesiske koordinater (x, y, z).
- Hvad er forskellen på den matematiske konvention og videospil-konventionen for sfæriske koordinater mht. de anvendte vinkler?