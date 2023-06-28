import Card from '../molecules/Card';
import Image from '../../assets/img/hdd.png';
import Question from '../../assets/img/question.png';
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
            title="STTF"
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
      </ContainerHome>
    </>
  );
};
export default BodyCards;
