import Card from '../molecules/Card';
import Image from '../../assets/img/hdd.png';
import Question from '../../assets/img/question.png';
import sstf from '../../assets/img/sstf.jpg';
import fcfs from '../../assets/img/fcfs.jpg';
import scan from '../../assets/img/scan.png';
import cscan from '../../assets/img/cscan.png';
import look from '../../assets/img/look.jpg';
import clook from '../../assets/img/clook.jpg';
import { FlexBoxBodyCards } from '../styled/grid/CardStyled';
import { StyledText } from '../styled/StyledText';
import { ContainerCardTitle } from '../styled/grid/CardStyled';
import { ContainerHome } from '../styled/grid/HomeStyled';
import { BsBook, BsRepeat } from 'react-icons/bs';
const BodyCards = () => {
  return (
    <>
      <section id="about"></section>
      <ContainerHome>
        <ContainerCardTitle>
          <BsBook size={70}></BsBook>
          <StyledText color="white" size="title" align="end">
            Introducción
          </StyledText>
        </ContainerCardTitle>
        <FlexBoxBodyCards>
          <Card
            title="¿Qué es?"
            textBody="Los algoritmos de planificación son procedimientos o métodos
              utilizados en ciencias de la computación y en sistemas operativos
              para determinar el orden en el que las tareas o procesos deben ser
              ejecutados. Estos algoritmos permiten administrar eficientemente
              los recursos del sistema, asignando el tiempo de procesador y
              otros recursos a las diferentes tareas o procesos que compiten por
              ellos. La planificación es un componente clave en los sistemas
              operativos, ya que determina cómo se asigna el tiempo de CPU y
              otros recursos a los procesos en ejecución"
            image={Image}
          ></Card>
          <Card
            title="¿Para qué sirve?"
            textBody="La planificación de disco es una técnica utilizada en sistemas operativos para optimizar el acceso a datos en discos duros.
        Reduce el tiempo de búsqueda al determinar el orden de las solicitudes de acceso.
        Mejora el rendimiento general del sistema al minimizar los tiempos de búsqueda y reducir la fragmentación.
        Evita la fragmentación excesiva al mantener los datos organizados de manera eficiente.
        Equilibra la carga de trabajo en sistemas con múltiples discos o unidades de almacenamiento.
        Utiliza algoritmos como FCFS, SSTF, SCAN, C-SCAN y LOOK para determinar el orden de procesamiento de las solicitudes.
        Maximiza la eficiencia del disco y optimiza la velocidad de acceso a los datos."
            image={Question}
          ></Card>
        </FlexBoxBodyCards>
        <section id="algorithm"></section>
        <ContainerCardTitle>
          <BsRepeat size={70}></BsRepeat>
          <StyledText color="white" size="title" align="end">
            Algoritmos
          </StyledText>
        </ContainerCardTitle>
        <FlexBoxBodyCards>
          <Card
            title="FCFS"
            textBody="
            El algoritmo FCFS (First-Come, First-Served) es un algoritmo de
             planificación de procesos que sigue el orden de llegada y funciona de la siguiente manera primero los
              procesos se ejecutan en el orden en que llegan,segundo el primer proceso en llegar es el primero en ser ejecutado 
              y se ejecutan secuencialmente sin interrupciones.El algoritmo FCFS sigue la política de primero en llegar, primero en ser atendido, lo que significa que los procesos se ejecutan en el orden en que llegan."
            image={fcfs}
          ></Card>

          <Card
            title="SCAN"
            textBody="El algoritmo SCAN, también conocido como elevador, es un algoritmo de 
            planificación utilizado en sistemas operativos para manejar las solicitudes de acceso 
            al disco. En SCAN, la cabeza de lectura/escritura del disco se mueve en una dirección específica
             (ya sea de forma ascendente o descendente) y atiende todas las solicitudes en ese camino.
              Cuando alcanza el extremo del disco, cambia de dirección sin retroceder 
              y continúa atendiendo solicitudes en el camino contrario. Esto garantiza
             un tiempo de espera más uniforme para las solicitudes y evita la inanición de las solicitudes en un extremo del disco."
            image={scan}
          ></Card>
          <Card
            title="CSCAN"
            textBody="El algoritmo C-SCAN, también conocido como 
            Escaneo Circular, es una variante del algoritmo SCAN. 
            Al igual que en SCAN, la cabeza de lectura/escritura del disco 
            se mueve en una dirección específica (ya sea ascendente o descendente) y atiende todas 
            las solicitudes en ese camino. Sin embargo, en C-SCAN, cuando la cabeza llega al extremo del disco, 
            en lugar de cambiar de dirección y seguir atendiendo solicitudes en el camino contrario, vuelve inmediatamente 
            al otro extremo del disco sin atender ninguna solicitud en el camino de regreso. Esto crea un patrón circular en 
            el que las solicitudes se atienden en un solo sentido.
            "
            image={cscan}
          ></Card>
          <Card
            title="Look"
            textBody="Es una versión mejorada del algoritmo SCAN.El algoritmo 
            recorre dependiendo de la dirección que se quiera empezar tanto izquierda como derecha,este 
            se mueve al extremo elegido atendiendo las peticiones más cercanas en ese sentido cuando termina cambia el sentido
             y va a la petición más cercana .
            sus ventajas son que es eficiente en la búsqueda y su implementación de este
             es simple si embargo no garantiza la mejor eficiencia en algunos casos específicos a comparación de 
             otros algoritmos de planificación 
            "
            image={look}
          ></Card>
          <Card
            title="C-Look"
            textBody="Es una variante del algoritmo look,
            este realiza lo mismo que algoritmo look con la diferencia que solo va a una dirección y
             cuando llega al final de su recorrido este vuelve a la petición que sea menor y empieza a subir hasta que termine las peticiones.Las ventajas
             que tiene este algoritmo es que es eficiente en la búsquedas sin embargo a comparación de otros algoritmos no nos da la mejor eficiencia
            
            "
            image={clook}
          ></Card>
          <Card
            title="STTF"
            textBody="Shortest Seek Time First es un algoritmo de planificación
             de E/S utilizado en sistemas operativos para acceder a los datos almacenados en dispositivos
              de almacenamiento, como discos duros.
            El funcionamiento del algoritmo SSTF se basa en la búsqueda del sector del 
            disco con el tiempo de búsqueda más corto (menor distancia en movimiento del
               cabezal de lectura/escritura) desde su posición actual. Cuando una solicitud 
               de E/S llega al sistema, el algoritmo selecciona la solicitud que tiene la menor distancia 
               de búsqueda desde la posición actual del cabezal de lectura/escritura y la ejecuta primero. 
               De esta manera, se minimiza el tiempo de espera para las solicitudes de E/S y se maximiza el rendimiento del disco.
            "
            image={sstf}
          ></Card>
        </FlexBoxBodyCards>
      </ContainerHome>
    </>
  );
};
export default BodyCards;
