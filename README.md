# DIESEL LIDER WEBSITE

    Esta es la aplicación correspondiente al frontend del website de Diesel Lider SRL, desarrollado en React Next por la facilidad del manejo del routing. La misma representa el ecommerce de la empresa, en donde no se realizan transacciones directas si no reservas a través de pedidos.

### ALCANCE

El alcance de la aplicación implica:

* Permitir la utilización de usuarios ya existentes.
  * Inicio de Sesión.
  * Cambio de password.
  * Manipulación de token.
* Personalización de preferencias, notificaciones y configuraciones de usuario.
* Visualización del estado de cuenta corriente.
* Visualización de productos, partes y relaciones.
* Capacidad de realizar un pedido.
* Consultas de lista de precios y ofertas.
* Datos de contacto.
* Estado de pedidos.

### PAGES

Las páginas o vistas principales que componen este proyecto son las siguientes:

* / [root]: Está es la página principal, la misma hará visible el componente de login si el usuario que accede no está autenticado. En caso contrario mostrará el catálogo de productos de Diesel Lider.
* 404: Está página será visible siempre que se acceda a un path inexistente, permitiendole al usuario retornar al home.
* novedades: Es la encargada de mostrar las novedades de un producto en específico.
* ofertas: Es la encargada de mostrar las ofertas asociadas a un producto en específico.
* precios: Es la encargada de mostrar la lista de precios de una sección o grupo en particular.
* consultas: Permite elegir si visualizar el estado de los pedidos o la cuenta corriente del usuario.
* servicios: Brinda datos del usuario que pueden ser modificados, configuaracion de notificaciones y datos de contacto con la empresa.
* pedido: Muestra la lista de productos seleccionados, el importe , datos de cuenta, de facturación y permite la confirmación del mismo.
* contacto: Permite el contacto atraves de correo electrónico con la empresa.



### COMPONENTS

Los componentes utilizados por las distintas páginas son los siguientes:

* Layout: Divide la pantalla en header y contenido de manera responsive []
* SidebarLayout: Header de la aplicación, que permite la navegación y la orientación del usuario []
* Login: Formulario de Inicio de sesión [root]
* Products: Formulario para la búsqueda de productos en el catálogo. [root]
* ProductMenuHeader: Subheader que permite la movilidad entre el catálogo, las novedades, ofertas y lista de precios de productos [SlidebarLayout]
* Spinner: Animación de carga (externo) []

### CUSTOM HOOKS

Los custom hooks desarrollados para la manipulación de datos y contextos en este proyecto son los siguientes:

* HeaderContext: Detecta el cambio de path, para mostrar intuitivamente al usuario en donde se encuentra parado, remarcando el nav btn.

### ASSETS

Los assets utilizados en este proyecto son los siguientes:

##### Imágenes:

* DLCircle: Logo de la empresa en forma de círculo para el formulario de inicio de sesión.
* LogoDL: Logo de la empresa para el header.

### EXTERNAL PACKAGES


### UTILIZACIÓN:

##### Requisitos:

* Node v16.17.0 o superior.
* npm v8.15.0 o superior.

##### Despliegue:

`npm i`

`npm run dev`



##### Estructura del proyecto:
