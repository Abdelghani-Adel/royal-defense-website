import Image from "next/image";
import React from "react";

type props = {
  title: string;
};

const PageStripe = (props: props) => {
  return (
    <div className="pageStripe">
      <div className="pageStripBackground">
        <Image fill src="/images/pagestripe.jpg" alt="" />
      </div>

      <h1 className="pageStripeTitle">{props.title}</h1>
    </div>
  );
};

export default PageStripe;
