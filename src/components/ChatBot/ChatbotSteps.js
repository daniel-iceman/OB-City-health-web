
import React from 'react';
import { Link } from 'react-router-dom'


const steps=[
    {
        id: 'Bienvenida',
        message: 'Hola, estoy aquí para apoyarte',
        trigger: 'Preguntar Nombre',
    },
    {
        id: 'Preguntar Nombre',
        message: '¿Cual es tu nombre?',
        trigger: 'Esperar a que usuario ingrese su nombre',
    },
    {
        id: 'Esperar a que usuario ingrese su nombre',
        user: true,
        trigger: 'Saludo usuario',
    },
    {
        id: 'Saludo usuario',
        message: 'Hola {previousValue}, ¿Cómo puedo ayudarte?',
        trigger: 'Pregunta sobre interes'        
    },
    {
        id: 'Pregunta sobre interes',
        message: '¿Que te gustaria conocer? Presiona la opción que deseas:',
        trigger: 'Lista de opciones'
    },
    {
        id: "Lista de opciones",
        options: [
                   {
                     value: "Sistemas que manejamos",
                     label: "Sistemas que manejamos",
                     trigger: "Solicitud de valoracion"
                   },
                   {
                    value: "Cuanto bajan",
                    label: "¿Cuanto peso voy a bajar?",
                    trigger: "Perdida de peso"
                   },

                   { 
                     value: "Costos",
                     label: "Costos",
                     trigger: "Costos de tratamientos"
                   },
                   { 
                    value: "Nada",
                    label: "Por el momento nada",
                    trigger: "Sin interes"
                  } 
                 ]
    },
    {
        id: 'Solicitud de valoracion',
        message: 'Para asistirte mejor requiero saber ciertas cosas como tu sexo y tu talla, ¿Estas de acuerdo?  (Presiona la opción deseada)',
        trigger: 'Respuesta de solictud de valoracion'
    },
    {
        id: "Respuesta de solictud de valoracion",
        options: [
                   {
                     value: "Si",
                     label: "Si",
                     trigger: "Acepto proporcionar datos"
                   },
                   { 
                     value: "No",
                     label: "No",
                     trigger: "No acepto proporcionar datos"
                   } 
                 ]
    },
                        {
                            id: 'Acepto proporcionar datos',
                            message: 'Excelente! ¿Cual es tu sexo?   (Presiona la opción deseada)',
                            trigger: "Sexo"
                        },
                            {
                                id: "Sexo",
                                options: [
                                        {
                                            value: "Masculino",
                                            label: "Masculino",
                                            trigger: "Pregunta talla Hombre"
                                        },
                                        { 
                                            value: "Femenino",
                                            label: "Femenino",
                                            trigger: "Pregunta talla Mujer"
                                        } 
                                        ]
                            },
                                {
                                    id: 'Pregunta talla Hombre',
                                    message: '¿Usas pantalones talla 36 o mayor a talla 36?  (Presiona la opción deseada)',
                                    trigger: "Talla Hombre"
                                },
                                {
                                    id: 'Talla Hombre',
                                        options: [
                                            {
                                                value: true,
                                                label: "Si",
                                                trigger: "Sobrepeso"
                                            },
                                            { 
                                                value: false,
                                                label: "No",
                                                trigger: "No esta a gusto con talla"
                                            } 
                                            ]
                                },         
                                
                                {
                                    id: 'Pregunta talla Mujer',
                                    message: '¿Usas pantalones talla 34 o mayor a talla 34?  (Presiona la opción deseada)',
                                    trigger: "Talla Mujer"
                                },
                                {
                                    id: 'Talla Mujer',
                                        options: [
                                            {
                                                value: true,
                                                label: "Si",
                                                trigger: "Sobrepeso"
                                            },
                                            { 
                                                value: false,
                                                label: "No",
                                                trigger: "No esta a gusto con talla"
                                            } 
                                            ]
                                },  

                                                {
                                                    id: 'Sobrepeso',
                                                    message: 'Podríamos estar ante un problema de sobrepeso u obesidad, ten cuidado!, tal vez te interese llevar alguno de nuestros sistemas',
                                                    trigger: "Sistemas"
                                                },
                                                {
                                                    id: 'No esta a gusto con talla',
                                                    message: 'Tal vez no estés a gusto con tu talla, podría recomendarte alguno de estos sistemas',
                                                    trigger: "Sistemas"
                                                },                             

                                                              
                {
                    id: 'No acepto proporcionar datos',
                    message: 'No te preocupes, ¿Sobre que metodo te interesa conocer?  (Presiona la opción deseada)',
                    trigger: "Sistemas"
                },
                    {
                        id: "Sistemas",
                        options: [
                                {
                                    value: "Protocolo ABC",
                                    label: "Protocolo ABC",
                                    trigger: "ABC"
                                },
                                { 
                                    value: "Cambridge Weight Plan",
                                    label: "Cambridge Weight Plan",
                                    trigger: "Cambridge"
                                } 
                                ]
                    },
                            {
                                id: 'ABC',
                                message: 'El protocolo ABC es un metodo comodo y práctico que te ayudará a perder 1 talla en promedio mensual, debes tomar una malteada como desayuno y cena y en la comida evitar comer carbohidratos',
                                trigger: "Conocer mas ABC"
                            },                            
                            {
                                id: 'Conocer mas ABC',
                                message: 'Quieres mas información sobre...  (Presiona la opción deseada)',
                                trigger: "Mas informacion ABC"
                            },
                                {
                                    id: 'Mas informacion ABC',
                                        options: [
                                            {
                                                value: 'Conocer mas sobre ABC',
                                                label: "Conocer mas sobre el Protocolo ABC",
                                                trigger: "Link a ABC"
                                            },
                                            { 
                                                value: 'Conocer Cambridge',
                                                label: "Conocer acerca del sistema Cambridge Weight Plan",
                                                trigger: "Cambridge"
                                            }, 
                                            { 
                                                value: 'Conocer otras cosas',
                                                label: "Deseo conocer otra informacion",
                                                trigger: "Lista de opciones"
                                            } 
                                            ]
                                },
                                                    {
                                                        id: 'Link a ABC',
                                                        component: (
                                                            <div className='chatLink'>
                                                                <Link to='/protocoloabc' >
                                                                    <li> 
                                                                        <p>Presiona el botón</p>
                                                                        <h1>Ir a Protocolo ABC</h1>
                                                                    </li>
                                                                </Link>                    
                                                            </div>   
                                                        ),
                                                        end: true,
                                                    },


                                {
                                    id: 'Cambridge',
                                    message: 'El sistema Cambridge Weight plan es seguro y efectivo, te ayudará a perder 1 talla en promedio quincenalmente, debes tomar 3 malteadas al día como único alimento',
                                    trigger: "Conocer mas Cambridge"
                                },
                                {
                                    id: 'Conocer mas Cambridge',
                                    message: 'Quieres mas información sobre...  (Presiona la opción deseada)',
                                    trigger: "Mas informacion Cambridge"
                                },
                                    {
                                        id: 'Mas informacion Cambridge',
                                            options: [
                                                {
                                                    value: 'Conocer mas sobre el sistema Cambridge Weight Plan',
                                                    label: "Conocer mas sobre el sistema Cambridge Weight Plan",
                                                    trigger: "Link a Cambridge"
                                                },
                                                { 
                                                    value: 'Conocer ABC',
                                                    label: "Conocer acerca del Protocolo ABC",
                                                    trigger: "ABC"
                                                }, 
                                                { 
                                                    value: 'Conocer otras cosas',
                                                    label: "Deseo conocer otra informacion",
                                                    trigger: "Lista de opciones"
                                                } 
                                                ]
                                    },
                                                        {
                                                            id: 'Link a Cambridge',
                                                            component: (
                                                                <div className='chatLink'>
                                                                    <Link to='/cambridgeweightplan' >
                                                                        <li> 
                                                                            <p>Presiona el botón</p>
                                                                            <h1>Ir a Cambridge WP</h1>
                                                                        </li>
                                                                    </Link>                    
                                                                </div>   
                                                            ),
                                                            end: true,
                                                        },

              
                            

                                   
               
        

        {
            id: 'Costos de tratamientos',
            message: 'Los costos dependen del sistema, ¿En que sistema estás interesad@?   (Presiona la opción deseada)',
            trigger: 'costos tratamientos'
        },
            {
                id: 'costos tratamientos',
                    options: [
                        {
                            value: 'ABC',
                            label: "Protocolo ABC",
                            trigger: "Costo ABC"
                        },
                        { 
                            value: 'Cambridge',
                            label: "Cambridge Weight Plan",
                            trigger: "Costo Cambridge"
                        }, 
                        ]
            },
                {
                    id: 'Costo ABC',
                    message: 'El costo del tratamiento ya incluida la consulta es de $1,300 pesos de primera vez...',
                    trigger: 'Costo ABC 2'
                },
                {
                    id: 'Costo ABC 2',
                    message: 'Y $1,100 pesos para pacientes subsecuentes más el costo de las malteadas que es de $350 c/u...',
                    trigger: 'Costo ABC 3'
                },
                {
                    id: 'Costo ABC 3',
                    message: 'Cada malteada alcanza para 8 días tomandola como desayuno y cena y se aconseja utilizar 2 envases por quincena.',
                    trigger: 'Costo ABC 4'
                },
                {
                    id: 'Costo ABC 4',
                    message: 'Las consultas son cada 15 días.',
                    trigger: 'Mas informes costos Cambridge'
                },

                        {
                            id: 'Mas informes costos Cambridge',
                            message: '¿Que te interesa?   (Presiona la opción deseada)',
                            trigger: 'Opciones Cambridge u otros'
                        },
                            {
                                id: 'Opciones Cambridge u otros',
                                    options: [
                                        {
                                            value: 'Costo Cambridge',
                                            label: "Me interesa conocer costo de Cambridge Weight Plan",
                                            trigger: "Costo Cambridge"
                                        },
                                        { 
                                            value: 'Otro',
                                            label: "Deseo conocer otra informacion",
                                            trigger: "Lista de opciones"
                                        }, 
                                        ]
                            },



                {
                    id: 'Costo Cambridge',
                    message: 'El costo del tratamiento ya incluida la consulta es de $1,300 pesos de primera vez...',
                    trigger: 'Costo Cambridge 2'
                },
                {
                    id: 'Costo Cambridge 2',
                    message: 'Y $1,100 pesos para pacientes subsecuentes, más el costo del sistema Cambridge Weight Plan.',
                    trigger: 'Costo Cambridge 3'
                },
                {
                    id: 'Costo Cambridge 3',
                    message: 'Una caja de Cambridge Weight Plan con 21 sobres (para desayuno comida y cena de 1 semana) es de $2,000 pesos.',
                    trigger: 'Costo Cambridge 4'
                },
                {
                    id: 'Costo Cambridge 4',
                    message: 'Pero no te desanimes, es como si pagaras por un desayuno o comida $95 pesos y lo ideal es llevarlo durante por lo menos 15 días (osea 2 cajas) para mejores resultados.',
                    trigger: 'Costo Cambridge 5'
                },
                {
                    id: 'Costo Cambridge 5',
                    message: 'Las consultas son cada 15 días.',
                    trigger: 'Mas informes costos ABC'
                },
                    
                    {
                        id: 'Mas informes costos ABC',
                        message: '¿Que te interesa?   (Presiona la opción deseada)',
                        trigger: 'Opciones ABC u otros'
                    },
                    {
                        id: 'Opciones ABC u otros',
                            options: [
                                {
                                    value: 'Costo ABC',
                                    label: "Me interesa conocer costo del Protocolo ABC",
                                    trigger: "Costo ABC"
                                },
                                { 
                                    value: 'Otro',
                                    label: "Deseo conocer otra informacion",
                                    trigger: "Lista de opciones"
                                }, 
                                ]
                    },
        
        {
            id: 'Perdida de peso',
            message: 'Bueno, eso depende de multiples factores',
            trigger: 'Perdida de peso 2'
        },
        {
            id: 'Perdida de peso 2',
            message: 'Lo primero que debes tener en claro es que aquí nos enfocamos a la perdida de grasa corporal no del peso...',
            trigger: 'Perdida de peso 3'
        },
        {
            id: 'Perdida de peso 3',
            message: 'Lo cual es fantastico porque no pondremos en riesgo tu salud, la forma mas evidente de que midas los resultados será con tu ropa, no con la báscula',
            trigger: 'Perdida de peso 4'
        },
        
        {
            id: 'Perdida de peso 4',
            message: 'Los resultados dependerán, primero de como te portes durante el tratamiento, si sigues las indicaciónes del doctor y cuidas tu alimentación',
            trigger: 'Perdida de peso 5'
        },
        {
            id: 'Perdida de peso 5',
            message: 'En segundo lugar depende de el método que lleves, ya que con Cambridge Weight plan pierdes 1 talla por quincena y con el Protocolo ABC pierdes 1 talla por mes',
            trigger: 'Perdida de peso 6'
        },
        {
            id: 'Perdida de peso 6',
            message: 'Y por último pero no menos importante, de que el doctor evalúe que no tienes ningun problema hormonal que pueda dificultar la perdida de grasa corporal',
            trigger: 'En que mas te puedo ayudar'
        },
    
    {
        id: 'En que mas te puedo ayudar',
        message: '¿En que mas te puedo ayudar?  (Presiona la opción deseada)',
        trigger: 'Lista de opciones'
    }, 


    {
        id: 'Sin interes',
        message: 'Fue un placer atenderte, cualquier inquietud no dudes en buscarme, hasta pronto',
        end:true
    },
                                                
                                                
                                


                                


   

    
];

export default steps