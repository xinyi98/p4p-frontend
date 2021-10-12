import React from 'react';
import styles from '../css/MainPage.module.css';
import { useState } from 'react';
import { Form, Input, Select, InputNumber, Row, Col, Button, message, Popover } from 'antd';
import ResultForm from '../Component/ResultForm.jsx';
import { sendData } from '../Api/RadiotherapyApi';

const { Option } = Select;
const stagingOptions = [
    { value: 'cM0', name: 'cM0' },
    { value: 'cMx', name: 'cMx' },
    { value: 'cN0', name: 'cN0' },
    { value: 'cN1', name: 'cN1' },
    { value: 'cN2', name: 'cN2' },
    { value: 'cT1', name: 'cT1' },
    { value: 'cT1a', name: 'cT1a' },
    { value: 'cT2', name: 'cT2' },
    { value: 'cT2b', name: 'cT2b' },
    { value: 'cT3', name: 'cT3' },
    { value: 'cT4', name: 'cT4' },
    { value: 'EBV+', name: 'EBV+' },
    { value: 'M0', name: 'M0' },
    { value: 'M1', name: 'M1' },
    { value: 'Mx', name: 'Mx' },
    { value: 'N0', name: 'N0' },
    { value: 'N1', name: 'N1' },
    { value: 'N1b', name: 'N1b' },
    { value: 'N2', name: 'N2' },
    { value: 'N2a', name: 'N2a' },
    { value: 'N2b', name: 'N2b' },
    { value: 'N2c', name: 'N2c' },
    { value: 'N3b', name: 'N3b' },
    { value: 'Nx', name: 'Nx' },
    { value: 'p16+', name: 'p16+' },
    { value: 'p16-', name: 'p16-' },
    { value: 'pN0', name: 'pN0' },
    { value: 'pN1', name: 'pN1' },
    { value: 'pN2b', name: 'pN2b' },
    { value: 'pN3b', name: 'pN3b' },
    { value: 'pNx', name: 'pNx' },
    { value: 'pT2', name: 'pT2' },
    { value: 'pT3', name: 'pT3' },
    { value: 'pT4a', name: 'pT4a' },
    { value: 'R1', name: 'R1' },
    { value: 'StgI', name: 'StgI' },
    { value: 'StgII', name: 'StgII' },
    { value: 'StgIIa', name: 'StgIIa' },
    { value: 'StgIII', name: 'StgIII' },
    { value: 'StgIIIa', name: 'StgIIIa' },
    { value: 'StgIV', name: 'StgIV' },
    { value: 'StgIVa', name: 'StgIVa' },
    { value: 'StgIVb', name: 'StgIVb' },
    { value: 'Stgx', name: 'Stgx' },
    { value: 'T0', name: 'T0' },
    { value: 'T1', name: 'T1' },
    { value: 'T1a', name: 'T1a' },
    { value: 'T2', name: 'T2' },
    { value: 'T2a', name: 'T2a' },
    { value: 'T3', name: 'T3' },
    { value: 'T3a', name: 'T3a' },
    { value: 'T3b', name: 'T3b' },
    { value: 'T4', name: 'T4' },
    { value: 'T4a', name: 'T4a' },
    { value: 'T4b', name: 'T4b' },
    { value: 'Tx', name: 'Tx' }
];


const MainPage = () => {

    const [result, setResult] = useState('');
    const [visible, setVisible] = React.useState(false);

    function refreshPage() {
        window.location.reload(false);
    }

    function onFinish(values) {
        sendData(values).then(
            ({ data }) => {
                const { prediction } = data;
                setResult(prediction);
                message.success('Sucessfully submit', 3);
            },
            (err) => {
                message.error('Failed to submit data, please try again.', 3);
                console.log(err);
            }
        );
        console.log('Success:', values);

        // display the result
        setVisible(true);
    };


    return (
        <div className={styles.container}>
            <div className={styles.inputContainer}>
                <h1 className="title">Radiotherapy Replanning Suggestion System</h1>
                <div style={{ paddingLeft: '2%' }}>
                    <Form onFinish={onFinish} >
                        <Form.Item
                            name="name"
                            label="Name / ID"
                        >
                            <Input />
                        </Form.Item>

                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col span={12}>
                                <Form.Item
                                    name="weight"
                                    label="Weight (kg)"
                                    rules={[{ required: true }]}
                                >
                                    <InputNumber />
                                </Form.Item>
                            </Col>

                            <Col span={12}>
                                <Form.Item
                                    name="neckWidth"
                                    label="Neck Width (cm)"
                                    rules={[{ required: true }]}
                                >
                                    <InputNumber />
                                </Form.Item>
                            </Col>

                            <Col span={12}>
                                <Form.Item
                                    name="neckDepth"
                                    label="Neck Depth (cm)"
                                    rules={[{ required: true }]}
                                >
                                    <InputNumber />
                                </Form.Item>
                            </Col>

                            <Col span={12}>
                                <Form.Item
                                    name="bodyVolume"
                                    label="Body Volume (cc)"
                                    rules={[{ required: true }]}
                                >
                                    <InputNumber />
                                </Form.Item>
                            </Col>

                            <Col span={12}>
                                <Form.Item
                                    name="bodyEqSphDi"
                                    label="Body Eq Sph Di (cm)"
                                    rules={[{ required: true }]}
                                >
                                    <InputNumber />
                                </Form.Item>
                            </Col>

                        </Row>

                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col span={12}>
                                <Popover title="the radiotherapy clinical target volume" content="Please use the min value" >
                                    <Form.Item
                                        name="ctvVol"
                                        label="CTV Vol"
                                        rules={[{ required: true }]}
                                    >
                                        <InputNumber />
                                    </Form.Item>
                                </Popover>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name="ctvEqdDi"
                                    label="CTV Eqd Di"
                                    rules={[{ required: true }]}
                                >
                                    <InputNumber />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Popover title="the radiotherapy planning target volume" content="Please use the min value" >
                                    <Form.Item
                                        name="ptvVol"
                                        label="PTV Vol"
                                        rules={[{ required: true }]}
                                    >
                                        <InputNumber />
                                    </Form.Item>
                                </Popover>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name="ptvEqdDi"
                                    label="PTV Eqd Di"
                                    rules={[{ required: true }]}
                                >
                                    <InputNumber />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Popover title="the stages of cancer" content="You can choose multiple options" >
                            <Form.Item
                                name="staging"
                                rules={[{ required: true }]}
                                label="Staging"
                            >
                                <Select
                                    mode="multiple"
                                    placeholder="Please select"
                                    style={{ width: '100%' }}
                                >
                                    {stagingOptions.map(option => (
                                        <Option value={option.value}>{option.name}</Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Popover>


                        <Form.Item>
                            <Row justify="center">
                                <Col span={4}>
                                    <Button type="primary" htmlType="submit"  >Submit</Button>
                                </Col>
                                <Col span={4}>
                                    <Button onClick={refreshPage} >Reset</Button>
                                </Col>
                            </Row>
                        </Form.Item>
                    </Form>
                </div>
                {visible ? <ResultForm result={result} /> : null}
            </div>
        </div>
    );
};

export default MainPage;
