import  Card from '../components/Card'
const renderCards = (data) => {
    return data.map((item, index) => (
      <Card
        key={index}
        name={item.name}
        dist={item.districte}
        seccion={item.seccion}
        numeroI={item.numberI}
        numeroF={item.numberF}
      />
    ));
  };
  export default renderCards