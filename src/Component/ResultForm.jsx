import { Typography } from 'antd';
const { Title } = Typography;

const ResultForm = (props) => {
  let { result } = props;
  if (result === 1) {
    return <Title level={4}>&#9989; YES &#9989; This patient may need a treatment replan </Title>;
  } else if (result === 0) {
    return <Title level={4}>&#10060; No &#10060;  This patient may not need a treatment replan</Title>;
  } else {
    return <Title level={4}>Loading...</Title>;
  }
};

export default ResultForm;