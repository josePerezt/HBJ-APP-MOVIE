import { useState } from "react";
//importamos el componente e inicializamos mercado pago
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import "./Product.module.css";

export const Product = () => {
  const [preferenceId, setPreferenceId] = useState(null);

  initMercadoPago("TEST-6368b1f4-05a9-4581-9bf5-48dbe95009b4");

  const createPreference = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/create_preference",
        {
          description: "Reloj Casio",
          price: 1000,
          quantity: 1,
          currency_id: "ARS",
        }
      );

      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) setPreferenceId(id);
  };

  const customization = {
    texts: {
      action: "pay",
      valueProp: "security_details",
    },
    visual: {
      buttonBackground: "black",
      boderRadius: "6px",
    },
  };
  return (
    <div>
      <h2>Reloj Casio</h2>
      <p>1000$</p>
      <button onClick={handleBuy}>COMPRAR</button>
      {preferenceId && (
        <Wallet
          customization={customization}
          initialization={{ preferenceId }}
        />
      )}
    </div>
  );
};

// 5031 7557 3453 0604
// 123
// 11/25
