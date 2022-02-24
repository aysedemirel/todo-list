import React, { useState, useEffect } from 'react';


import Card from "../Card"
import {SummaryWrapper} from "./Summary.styles"

const Summary = () => (
    <SummaryWrapper>
        <Card text={"0"} header={"Planned"} />
        <Card text={"1"} header={"Done"} />
    </SummaryWrapper>
);

export default Summary;