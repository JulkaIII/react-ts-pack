import React from "react";
import { TSayHelloProps } from "../../../types/index";

const SayHello = ({ name }: TSayHelloProps) => {
  return <div>Hey {name}, say hello to TypeScript.</div>;
};

export default SayHello;
