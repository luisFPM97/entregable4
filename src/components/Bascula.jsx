import React from 'react'
import { SerialPort } from 'serialport';

const Bascula = () => {
    const [peso, setPeso] = useState(0);
    const [puerto, setPuerto] = useState('COM1');
    const [baudRate, setBaudRate] = useState(9600);
  
    useEffect(() => {
      const serialPort = new SerialPort({
        path: puerto,
        baudRate,
      });
  
      serialPort.on('open', () => {
        console.log('Puerto COM abierto');
      });
  
      serialPort.on('data', (data) => {
        console.log(data)
        //const pesoLeido = parseFloat(data.toString());
        setPeso(pesoLeido);
      });
  
      return () => {
        serialPort.close();
      };
    }, [puerto, baudRate]);
  
    const handleChangePuerto = (event) => {
      setPuerto(event.target.value);
    };
  
    const handleChangeBaudRate = (event) => {
      setBaudRate(event.target.value);
    };
  
    return (
      <div>
        <p>Peso actual: {peso} kg</p>
        <p>Puerto COM:</p>
        <select value={puerto} onChange={handleChangePuerto}>
          <option value="COM1">COM1</option>
          <option value="COM2">COM2</option>
          <option value="COM3">COM3</option>
          <option value="COM4">COM4</option>
        </select>
        <p>Baud Rate:</p>
        <select value={baudRate} onChange={handleChangeBaudRate}>
          <option value='9600'>9600</option>
          <option value='115200'>115200</option>
        </select>
      </div>
    );
}

export default Bascula