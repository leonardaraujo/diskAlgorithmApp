import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import look from '../utils/look';
import cLook from '../utils/cLook';
import scan from '../utils/scan';
import cScan from '../utils/cScan';
import fcfs from '../utils/fcfs';
import {
  ContainerAppInput,
  ContainerAppResume,
  ContainerAppResumeButtons,
  ContainerAppResumeGraphic,
  ContainerAppResumeText,
} from '../components/styled/AlgorithmStyled';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { StyledText } from '../components/styled/StyledText';
import { Line } from 'react-chartjs-2';
import { StyledForm } from '../components/styled/AlgorithmStyled';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useForm } from 'react-hook-form';
import sstf from '../utils/sstf';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AlgorithmApp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [algorithm, setAlgorithm] = useState('FCFS');
  const [direction, setDirection] = useState('right');
  const handleChangeAlgorithm = (e, newAlignment) => {
    if (newAlignment !== null) {
      setAlgorithm(newAlignment);
    }
  };
  const handleChangeDirection = (e, newAlignment) => {
    if (newAlignment !== null) {
      setDirection(newAlignment);
    }
  };
  const onSubmit = () => {
    let dataAlgorithm = null;
    if (algorithm == 'Look') {
      dataAlgorithm = look(initialPoint, recorridos, direction);
    } else if (algorithm == 'CLook') {
      dataAlgorithm = cLook(initialPoint, recorridos);
    } else if (algorithm == 'Scan') {
      dataAlgorithm = scan(initialPoint, recorridos, direction);
    } else if (algorithm == 'CScan') {
      dataAlgorithm = cScan(initialPoint, recorridos);
    } else if (algorithm == 'FCFS') {
      dataAlgorithm = fcfs(initialPoint, recorridos);
    } else if (algorithm == 'SSTF') {
      dataAlgorithm = sstf(initialPoint, recorridos);
    }
    console.log(dataAlgorithm);
    setDataChart({
      datasets: [
        {
          label: 'Pista',
          data: dataAlgorithm.res,
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
          tension: 0.1,
        },
      ],
      labels: dataAlgorithm.labelsArray,
    });
    setResumen({
      algorithm: dataAlgorithm.algorithmName,
      recorrido: dataAlgorithm.recorrido,
      sizeRecorrido: dataAlgorithm.sizeRecorrido,
      promRecorrido: dataAlgorithm.prom,
      res: dataAlgorithm.res,
    });
    window.scrollTo({ top: 175, behavior: 'smooth' });
  };
  const data = {
    labels: [],
    datasets: [
      {
        label: 'Pista',
        data: [],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        tension: 0.1,
      },
    ],
  };
  const [dataChart, setDataChart] = useState(data);
  const [recorridos, setRecorridos] = useState('');
  const [initialPoint, setInitialPoint] = useState(0);
  const [resumen, setResumen] = useState({
    algorithm: '',
    recorrido: '',
    sizeRecorrido: '',
    promRecorrido: '',
    res: '',
  });
  const handleSectors = (e) => {
    let regex = /(^[,0-9]+$)/i;
    if (e.target.value === '' || regex.test(e.target.value)) {
      setRecorridos(e.target.value);
      console.log(recorridos);
    }
  };
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        suggestedMin: 0,
        suggestedMax: 200,
        grid: { drawOnChartArea: false },
        title: {
          display: true,
          text: 'Pistas',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Recorrido',
        },
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  const ButtonsDirections = () => {
    if (algorithm == 'Look' || algorithm == 'Scan') {
      return (
        <ToggleButtonGroup
          color="primary"
          value={direction}
          exclusive
          onChange={handleChangeDirection}
          aria-label="Platform"
        >
          <ToggleButton value="left">Izquierda</ToggleButton>
          <ToggleButton value="right">Derecha</ToggleButton>
        </ToggleButtonGroup>
      );
    } else {
      return (
        <ToggleButtonGroup
          color="primary"
          value={direction}
          exclusive
          onChange={handleChangeDirection}
          aria-label="Platform"
        >
          <ToggleButton disabled>Izquierda</ToggleButton>
          <ToggleButton disabled>Derecha</ToggleButton>
        </ToggleButtonGroup>
      );
    }
  };
  const reset = () => {
    setDataChart({
      labels: [],
      datasets: [
        {
          label: 'Pista',
          data: [],
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
          tension: 0.4,
        },
      ],
    });
    setResumen({
      algorithm: '',
      recorrido: '',
      sizeRecorrido: '',
      promRecorrido: '',
      res: '',
    });
    setRecorridos('');
    setInitialPoint(0);
  };
  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <ContainerAppInput>
          <TextField
            type={'number'}
            defaultValue={0}
            value={initialPoint}
            fullWidth
            label="Posición inicial"
            variant="outlined"
            {...register('initialPoint', {
              required: 'El punto inicial es requerido',
              onChange: (e) => {
                setInitialPoint(parseInt(e.target.value));
              },
            })}
            error={Boolean(errors.initialPoint)}
            helperText={errors.initialPoint?.message}
          ></TextField>
          <TextField
            fullWidth
            label="Sectores que recorrerá (separados por coma)"
            variant="outlined"
            value={recorridos}
            {...register('records', {
              required: 'Los sectores son requeridos',
              onChange: (e) => {
                handleSectors(e);
              },
            })}
            error={Boolean(errors.records)}
            helperText={errors.records?.message}
          ></TextField>

          <ContainerAppResumeButtons>
            <StyledText size="m">Algoritmo</StyledText>
            <ToggleButtonGroup
              color="primary"
              value={algorithm}
              exclusive
              onChange={handleChangeAlgorithm}
              aria-label="Platform"
            >
              <ToggleButton value="FCFS">FCFS</ToggleButton>
              <ToggleButton value="Scan">Scan</ToggleButton>
              <ToggleButton value="CScan">C-Scan</ToggleButton>
              <ToggleButton value="Look">Look</ToggleButton>
              <ToggleButton value="CLook">C-Look</ToggleButton>
              <ToggleButton value="SSTF">SSTF</ToggleButton>
            </ToggleButtonGroup>
            <StyledText size="m">Dirección</StyledText>
            <ButtonsDirections></ButtonsDirections>
          </ContainerAppResumeButtons>

          <Button size="large" variant="contained" type="submit">
            Iniciar recorrido
          </Button>
          <Button
            onClick={() => {
              reset();
            }}
            size="large"
            variant="contained"
            color="error"
          >
            Reset
          </Button>
        </ContainerAppInput>
      </StyledForm>

      <ContainerAppResume>
        <ContainerAppResumeGraphic>
          <Line data={dataChart} options={options}></Line>
        </ContainerAppResumeGraphic>
        <ContainerAppResumeText>
          <StyledText color="white">Algoritmo : {resumen.algorithm}</StyledText>
          <StyledText color="white">
            Recorrido del cabezal : {resumen.res.toString()}
          </StyledText>

          <StyledText color="white">
            Número de sectores recorridos : {resumen.recorrido}
          </StyledText>
          <StyledText color="white">
            Recorrido total : {resumen.sizeRecorrido}
          </StyledText>
          <StyledText color="white">
            Recorrido promedio total : {resumen.promRecorrido}
          </StyledText>
        </ContainerAppResumeText>
      </ContainerAppResume>
    </>
  );
};
export default AlgorithmApp;
