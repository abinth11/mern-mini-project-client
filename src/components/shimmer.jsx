import React from "react";
import { Shimmer } from "react-shimmer";
const ShimmerEffect = () => (
    <Shimmer 
     className="shimmer-component"
      width={280}
      height={350}
      duration={1000}
      colors={['#f0f0f0', '#e0e0e0']}
      backgroundColor={null}
    />
)
export default ShimmerEffect