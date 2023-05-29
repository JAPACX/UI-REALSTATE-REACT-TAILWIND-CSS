
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
        "id": 1,
        "categoria": "Country House",
        "imagen": casaDeCampo,
        "descripcion": "Experience the charm of a country house with beautiful landscapes and peaceful surroundings. Our real estate agency offers you the perfect country house to escape the hustle and bustle of the city and enjoy a tranquil lifestyle."
      },
      {
        "id": 2,
        "categoria": "City House",
        "imagen": casaDeCiudad,
        "descripcion": "Discover the comfort and convenience of a city house located in vibrant urban neighborhoods. Our real estate agency provides city houses that combine modern living spaces with easy access to amenities, entertainment, and cultural attractions."
      },
      {
        "id": 3,
        "categoria": "Shared",
        "imagen": habitacionCompartida,
        "descripcion": "Find a shared house where you can enjoy a sense of community and share living spaces with like-minded individuals. Our real estate agency offers shared houses that provide affordable and sociable living arrangements."
      },
      {
        "id": 4,
        "categoria": "Townhouse",
        "imagen": casaAdosada,
        "descripcion": "Experience the best of both worlds with a townhouse that combines the comfort of a home and the convenience of a centralized location. Our real estate agency offers townhouses designed for modern urban living."
      }
    ]
  },
  {
    "tipo": "Apartment",
    "categorias": [
      {
        "id": 5,
        "categoria": "Luxury",
        "imagen": deLujo,
        "descripcion": "Indulge in luxury living with our exquisite apartments that boast high-end features, elegant designs, and breathtaking views. Our real estate agency offers luxury apartments that redefine sophistication and style."
      },
      {
        "id": 6,
        "categoria": "Beachfront",
        "imagen": enLaPlaya,
        "descripcion": "Embrace a beachfront lifestyle with our stunning apartments located right by the sea. Our real estate agency offers beachfront apartments that provide easy access to sun, sand, and breathtaking ocean views."
      },
      {
        "id": 7,
        "categoria": "Furnished Studio",
        "imagen": estudioAmoblado,
        "descripcion": "Discover the convenience of a fully furnished studio apartment that offers a compact and functional living space. Our real estate agency provides furnished studio apartments that are perfect for individuals seeking simplicity and comfort."
      },
      {
        "id": 8,
        "categoria": "Shared",
        "imagen": compartido2,
        "descripcion": "Experience shared living in a modern apartment where you can enjoy a sense of community and socialize with other residents. Our real estate agency offers shared apartments that promote a dynamic and collaborative environment."
      }
    ]
  },
  {
    "tipo": "Office",
    "categorias": [
      {
        "id": 9,
        "categoria": "Executive",
        "imagen": ejecutiva,
        "descripcion": "Elevate your business with our executive office spaces that exude professionalism and provide top-notch amenities. Our real estate agency offers executive offices designed to meet the needs of high-level executives and businesses."
      },
      {
        "id": 10,
        "categoria": "Coworking",
        "imagen": coworking,
        "descripcion": "Experience a flexible and collaborative work environment in our coworking spaces. Our real estate agency offers coworking offices that foster creativity, networking, and productivity for freelancers, startups, and remote workers."
      },
      {
        "id": 11,
        "categoria": "Virtual Office",
        "imagen": virtual,
        "descripcion": "Take advantage of our virtual office solutions that provide a prestigious business address and professional support services without the need for a physical office space. Our real estate agency offers virtual offices for remote businesses and entrepreneurs."
      },
      {
        "id": 12,
        "categoria": "Corporate Office",
        "imagen": corporativa,
        "descripcion": "Find the perfect corporate office space that reflects your company's identity and supports your business operations. Our real estate agency offers corporate offices designed to meet the specific requirements of established organizations."
      }
    ]
  },
  {
    "tipo": "Shophouse",
    "categorias": [
      {
        "id": 13,
        "categoria": "Shopping Mall",
        "imagen": comercial,
        "descripcion": "Explore exciting business opportunities with our shophouses located in bustling shopping malls. Our real estate agency offers shophouses that provide excellent visibility and foot traffic for retail and service businesses."
      },
      {
        "id": 14,
        "categoria": "Tourist Spot",
        "imagen": turistico,
        "descripcion": "Capture the attention of tourists and visitors with our shophouses situated in popular tourist spots. Our real estate agency offers shophouses that allow businesses to capitalize on the vibrant tourism industry."
      },
      {
        "id": 15,
        "categoria": "Restaurant",
        "imagen": restaurante,
        "descripcion": "Create an inviting and memorable dining experience with our shophouses designed for restaurants. Our real estate agency offers shophouses with versatile layouts and prime locations to help your restaurant thrive."
      },
      {
        "id": 16,
        "categoria": "Online Store",
        "imagen": enLinea,
        "descripcion": "Expand your online business with our shophouses designed for e-commerce and online stores. Our real estate agency offers shophouses equipped with modern infrastructure and logistics support to facilitate seamless online operations. Establish a physical presence for your online store and provide customers with the opportunity to browse and experience your products in person while leveraging the convenience and reach of the digital marketplace."
        }
      ]
    }
  ];


export default database
