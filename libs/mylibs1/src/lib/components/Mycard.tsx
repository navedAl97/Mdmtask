import React from "react";
import Img1 from '../assets/CMM.jpeg'; 


type CardProps = {
  title: string;
  description: string;
  img:string;
  price: number;

};

const Mycard: React.FC<CardProps> = ({ title, description, price}) => {
  return (
    <div style={styles.card}>
      <img style={styles.img} src={Img1} alt="" />
      <div className="cardhead" style={styles.cardhead}>
      <h2 style={styles.title}>{title}</h2>
      <h2 style={{fontSize:"18px"}}>{price}</h2>
      </div>
      
      <p style={styles.description}>{description}</p>
    </div>
  );
};

const styles = {
  cardhead:{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center"  ,

  },
  img:{
    width:"300px"
  },
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    maxWidth: "250px",
    marginBottom: "16px",
  },
  title: {
    margin: 0,
    fontSize: "16px",
  },
  description: {
    margin: "8px 0 0",
    fontSize: "16px",
  },
};

export default Mycard;