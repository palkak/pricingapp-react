import React from "react";
import {Grid} from 'react-bootstrap';
import {Market} from "./Market";

const markets = [
  {name: 'UK'},
  {name: 'DE'},
  {name: 'IT'},
  {name: 'ES'}
];

const Tool = () => (

  <Grid>
    <h1>tu ma byc wyceniarka</h1>
    {markets.map(i => <Market name={i.name}/>)}
  </Grid>

);

export {Tool};