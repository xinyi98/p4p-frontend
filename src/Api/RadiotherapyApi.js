import axios from 'axios';

// may need to change the url
const url = 'https://replanning-backend.herokuapp.com';

export async function sendData(details) {
    const stages = ["cm0","cmx","cn0","cn1","cn2","ct1","ct1a","ct2","ct2b",
    "ct3","ct4","ebv+","m0","m1","mx","n0","n1","n1b","n2","n2a","n2b",
    "n2c","n3b","nx","p16+","p16-","pn0","pn1","pn2b","pn3b","pnx","pt2",
    "pt3","pt4a","r1","stgi","stgii","stgiia","stgiii","stgiiia","stgiv",
    "stgiva","stgivb","stgx","t0","t1","t1a","t1b","t2","t2a","t2m","t3",
    "t3a","t3b","t4","t4a","t4b","tx"];

    const loweredStagings = details.staging.map(stage => stage.toLowerCase());

    const stagingOneHot = stages.map((stage) => {
        if(loweredStagings.includes(stage)) {
            return 1;
        } else {
            return 0;
        }
    })

    const data = {
        neckWidth: details.neckWidth,
        neckDepth: details.neckDepth,
        bodyEqSphDi: details.bodyEqSphDi,
        bodyVolume: details.bodyVolume,
        weight: details.weight,
        ctvVol: details.ctvVol,
        ctvEqdDi: details.ctvEqdDi,
        ptvVol: details.ptvVol,
        ptvEqdDi: details.ptvEqdDi,
        staging: stagingOneHot,
    };
    
    return axios.post(`${url}/api`, data);
}