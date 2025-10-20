# 🌐 Visualizador de IP Pública

**Desarrollado por Marco Alexander de León Hernández**

---

## Descripción General

Este proyecto es una aplicación web ligera y responsiva que permite al usuario visualizar su **dirección IP pública**, tanto en versión **IPv4** como **IPv6**, de forma clara, segura y educativa.
Incluye un diseño moderno con soporte para **modo oscuro y claro**, con animaciones suaves y un panel informativo que explica de forma técnica y comprensible qué es una dirección IP y para qué se utiliza.

El sistema fue diseñado bajo los principios de **simplicidad, accesibilidad y elegancia**, priorizando la experiencia del usuario y el rendimiento en navegadores modernos sin depender de librerías externas.

---

## Objetivos del Proyecto

* Mostrar en tiempo real la IP pública del usuario.
* Permitir copiar fácilmente la dirección IPv4 e IPv6 al portapapeles.
* Brindar una explicación clara sobre las diferencias entre ambas versiones.
* Adaptarse automáticamente al modo oscuro o claro del sistema operativo.
* Ofrecer una interfaz moderna y profesional basada en *glassmorphism*.

---

## Tecnologías Utilizadas

| Tecnología                           | Descripción                                                                       |
| ------------------------------------ | --------------------------------------------------------------------------------- |
| **HTML5**                            | Estructura semántica del documento.                                               |
| **CSS3 (Variables + Media Queries)** | Estilo visual, modo oscuro/claro y diseño responsivo.                             |
| **JavaScript (ES6)**                 | Lógica para obtención de IPs, copiado, notificaciones y gestión del tema.         |
| **Fetch API**                        | Consumo del servicio [ipify.org](https://api.ipify.org) para obtener IPv4 e IPv6. |
| **LocalStorage**                     | Persistencia de la preferencia de tema (oscuro, claro o automático).              |

---

## Explicación Técnica

La aplicación consulta la API pública **ipify.org** para obtener las direcciones IP:

* **IPv4:** dirección más común, basada en 32 bits.
* **IPv6:** nueva versión de protocolo, basada en 128 bits, diseñada para el crecimiento de Internet.

Ambas direcciones son **públicas**, lo que significa que son visibles por los servicios con los que te comunicas en Internet y permiten enrutar la información hacia tu dispositivo a través de tu proveedor de red.

El panel incluye una sección informativa que detalla la utilidad de cada tipo de dirección, así como un aviso educativo sobre su naturaleza y visibilidad.

---

## Estructura del Proyecto

```
📂 IP-Publica
 ├── index.html        # Estructura principal del proyecto
 ├── styles.css        # Estilos visuales y control de tema
 ├── app.js            # Lógica de obtención de IPs, copiado y notificaciones
 └── README.md         # Documentación del proyecto
```

---

## Instrucciones de Uso

1. Clona este repositorio:

   ```bash
   git clone https://github.com/marcodeleon20/IpPublica.git
   ```
2. Abre el archivo `index.html` en cualquier navegador moderno.
3. La aplicación mostrará automáticamente tu IPv4 e IPv6 (si están disponibles).
4. Usa los botones **Actualizar**, **Copiar IPv4** o **Copiar IPv6** para interactuar.
5. Cambia el tema con el icono 🌙/☀️ en la parte superior.

---

## Vista Previa

![Interfaz del proyecto](images\image1.png)

*Diseño moderno, limpio y adaptable con modo oscuro y claro.*

---