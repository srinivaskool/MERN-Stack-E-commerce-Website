import { Card, Skeleton } from "antd";
import React from "react";

const Loadingcard = ({ count }) => {
  const cards = () => {
    let totalCards = [];
    for (let i = 0; i < count; i++) {
      totalCards.push(
        <Card key={i} className="col md-4">
          <Skeleton active></Skeleton>
        </Card>
      );
    }
    return totalCards;
  };

  return <div className="row pb-5">{cards()}</div>;
};

export default Loadingcard;
