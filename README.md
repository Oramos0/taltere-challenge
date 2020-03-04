# taltere-challenge

Prueba tecnica - Diseñador Front-end.

---

**1) En git como crea una nueva rama para la función “examen” que se te solicito.**

Conozco dos formas:

1. En dos pasos, en el primero utilizo el comando `git branch examen`, el cual me creara la primera rama, y el segundo se utiliza el siguiente comando para cambiar a la nueva rama creada `git checkout examen`.

2. En un solo paso, con el comando `git checkout -b examen` puedo crear una nueva rama y al mismo tiempo cambiarme a ella para comenzar a trabajar.

---

**2) En ​JavaScript​ escriba una función que convierta una fecha ingresada como: M/D/YYYY a el formato requerido: YYYYMMDD.**

_CODIGO_

````
const invertDate = userDate => {
  userDate = new Date(userDate);```
  year = userDate.getFullYear().toString();
  month = (userDate.getMonth() + 1).toString();
  day = userDate.getDate().toString();
  if (month.length === 1) month = '0' + month;
  if (day.length === 1) day = '0' + dy;
  return `${year}/${month}/${day}`;
}
````

Se puede ver un demo del código funcionando justo aquí: https://oramos0.github.io/taltere-challenge/

---

**3) Que es un Bundle en Webpack.**

El bundle es nuestro producto final que construye webpack, en el cual junta todos nuestros plugins, nuestro código JS, nuestro CSS y nuestro HTML en archivos únicos e independientes, lo cual es lo que nuestro servidor se encarga de ejecutar.

---

**4) Que es el Virtual DOM.**

El _Virtual DOM_ (VD) es una representación del _DOM_ original que existe en la memoria a diferencia del _DOM_ que existe en el navegador.

El _VD_ esta en sincronización al _DOM_ con el fin de detectar cambios y compáralos con el _DOM_, esto para crear los menos cambios posibles antes de ser reconciliados y garantizarnos un mejor rendimiento.

De manera mas general y mas simple, el VD ayuda a crear cambios en la interfaz que ve el usuario ve sin la necesidad de volver a renderizar todo nuevamente, aquí un ejemplo sencillo, tenemos en siguente parrafo.

**Hola mundo desde JS.**

Y por x razón la palabra _Hola_ se necesita cambiar por _Adiós_.

Sin el _VD_ nuestro navegador se vería en la necesidad de volver a imprimir nuestra oración, cuando solo cambio una palabra, lo cual no es muy favorable al tratarse de situaciones mas complejas.

Ahora, gracias al _VD_ la oración no tendrá que volverse a escribir nuevamente, si no que este detecta que es lo que ha cambiado (nodo), y realiza la reconciliación, para solo hacer los cambios necesarios, en este caso, cambiar nuestra palabra "Hola", por "Adiós".

---

**5) Con qué librerías Reactivas has trabajado.**

he trabando con React.

---

**6) A que se refiere la nomenclatura BEM.**

Es una nomenclatura para trabajar con CSS, la cual nos ayuda a nombrar selectores de elementos de nuestro HTML para identificarlos dentro de CSS, BEM tiene el siguiente significado.

**B**lock (bloque).
**E**lement (elemento).
**M**odifier (modificador).

El nombre de esta nomenclatura nos ayuda a dar nombres mas específicos a nuestros selectores, con mas claridad y mas significado.

**B**lock (bloque).

Representa un bloque especifico, por ejemplo `.Homo-gallery` es nuestro bloque al que le aplicaremos nuestros estilos, o nuestra pieza de UI.

**E**lement (elemento).

Representa los elementos que conforman el bloque, por ejemplo, `.home-gallery__item`, para representarlos se separan del bloque con doble "\_" (guión bajo), la selección del elemento no solo aplica para hijos directos del bloque, si no que también para hijos secundarios o hasta los que sean necesarios.

**M**odifier (modificador).

Representa una variante del bloque o elemento, por ejemplo `.home-gallery__item--isSelected`, para representarlo, este se separa del bloque o elemento con doble "-" (guión).

Todo esto nos permite terminar con la guerra de especificidad.

---

**7) En caso de no venir en tu CV, pasanos una lista con los 3 trabajos web de los que te sientas Orgulloso.**

2 de ellos se encuentran en el CV, pero tengo uno mas, el cual es un portafolio Web.

https://wizardly-davinci-ba12e0.netlify.com/

Esta realizado en Webpack, React, y con la libreria Three.js para cargar modelos 3d en un futuro, ya que aun no se ha terminado.
