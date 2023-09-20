# codechallenge-Angular-s

**CODE CHALLENGE**

REQUEREMIENTOS DEL CODE CHALLENGE:
- Simular	un	backend	( RESTful) de usuarios usando el swagger disponible en la siguiente url: https://gitlab.com/cloudappi/code-challenge-front/blob/master/swagger.yaml
- Desarrollar	los	servicios	( RESTful)	en	Angular	para conectarse	al "backend".
- Desarrollar una interfaz en Angular que permita listar, crear, editar y eliminar usuarios, la página de inicio deberá ser el listado de usuarios y con botones para acceder a las funcionalidades mencionadas anteriormente.

No es necesario realizar un	backend	real sin embargo cada candidato	es libre de implementarlo como desee,inclusive	usando	servicios de terceros.

Por	otro	lado,	se	valorará:
- Patrones y estilo de desarrollo de front. Buenas prácticas, limpieza del código, test unitarios y e2e.
- Maquetación	del	proyecto


**ENTREGA**

El tiempo de desarrollo es de una semana pero mucho mejor si nos lo puedes
enviar antes.

Se debe entregar:

- Url con la aplicación desplegada.
- Código fuente.
- Postman de prueba.


**RECUERDA**

- La evaluación la realizarán nuestros ninja masters, gente con mucha experiencia.
- Según tu calificación, recibirás un diploma de ninja

<br>

# Notas del autor sobre el proyecto

- Creamos la estructura del proyecto con LazyLoading simulando una estructura de aplicación más grande y cotidiando, donde diferenciaríamos distintos módulos de aplicación, como por ejemplo, distinguiendo cuando el usuario está logueado o no.

- Aunque solamente se crea el módulo de los usuarios y el de Angular Material.

- Generamos modelos a partir del swagger.yaml (https://gitlab.com/cloudappi/code-challenge-front/blob/master/swagger.yaml) facilitado corriendo el script generate-api-client.
    > npm run generate-api-client

- Cogemos como base de datos el JSON de ejemplo que viene en GitLab y lo situamos en la carpeta data, y generamos el script backend-server para levantar el servidor backend donde tendremos la base de datos.

<br>

# Pasos Para arrancar el proyecto y realizar las pruebas**

En Dev:

 1. Clonar el proyecto
 2. Instalar paquetes
    > npm install
 3. Levantar backend
    > npm run backend-server
 4. Ejecutar aplicación web
    > ng serve