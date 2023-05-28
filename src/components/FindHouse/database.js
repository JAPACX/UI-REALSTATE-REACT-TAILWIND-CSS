
// house
import casaDeCampo from '../../multimedia-source/properties/casaDeCampo.jpg'
import casaDeCiudad from '../../multimedia-source/properties/casaDeCiudad.jpg'
import habitacionCompartida from '../../multimedia-source/properties/habitacionCompartida.jpg'
import casaAdosada from '../../multimedia-source/properties/casaAdosada.jpg'

//apartment
import deLujo from '../../multimedia-source/properties/deLujo.jpg'
import enLaPlaya from '../../multimedia-source/properties/enLaPlaya.jpg'
import estudioAmoblado from '../../multimedia-source/properties/estudioAmoblado.jpg'
import compartido2 from '../../multimedia-source/properties/compartido2.jpg'

//Office
import ejecutiva from '../../multimedia-source/properties/ejecutiva.jpg'
import coworking from '../../multimedia-source/properties/coworking.jpg'
import virtual from '../../multimedia-source/properties/virtual.jpg'
import corporativa from '../../multimedia-source/properties/corporativa.jpg'

//Shophouse
import comercial from '../../multimedia-source/properties/comercial.jpg'
import turistico from '../../multimedia-source/properties/turistico.jpg'
import restaurante from '../../multimedia-source/properties/restaurante.jpg'
import enLinea from '../../multimedia-source/properties/enLinea.jpeg'


const database = [
    {
      "tipo": "House",
      "categorias": [
        {
          "categoria": "Casa de campo",
          "imagen": casaDeCampo
        },
        {
          "categoria": "Casa en la ciudad",
          "imagen": casaDeCiudad
        },
        {
          "categoria": "Compartida",
          "imagen": habitacionCompartida
        },
        {
          "categoria": "Casa adosada",
          "imagen": casaAdosada
        }
      ]
    },
    {
      "tipo": "Apartment",
      "categorias": [
        {
          "categoria": "De lujo",
          "imagen": deLujo
        },
        {
          "categoria": "En la playa",
          "imagen": enLaPlaya
        },
        {
          "categoria": "Estudio amueblado",
          "imagen": estudioAmoblado
        },
        {
          "categoria": "Compartido",
          "imagen": compartido2
        }
      ]
    },
    {
      "tipo": "Office",
      "categorias": [
        {
          "categoria": "Ejecutiva",
          "imagen": ejecutiva
        },
        {
          "categoria": "Coworking",
          "imagen": coworking
        },
        {
          "categoria": "Oficina virtual",
          "imagen": virtual
        },
        {
          "categoria": "Oficina Corporativa",
          "imagen": corporativa
        }
      ]
    },
    {
      "tipo": "Shophouse",
      "categorias": [
        {
          "categoria": "Centro comercial",
          "imagen": comercial
        },
        {
          "categoria": "Local turístico",
          "imagen": turistico
        },
        {
          "categoria": "Restaurante",
          "imagen": restaurante
        },
        {
          "categoria": "Tienda en línea",
          "imagen": enLinea
        }
      ]
    }
  ];


export default database
