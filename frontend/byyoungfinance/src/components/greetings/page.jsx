"use client"
import { useEffect, useState } from "react";

export default function Home() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      setGreeting("Bom dia 🌞");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting("Boa tarde ⛅");
    } else {
      setGreeting("Boa noite 🌙");
    }
  }, []);


  return(
    
    <div className="bemvindo-usuario" id="greetings">
          <h2 className="m-0">{greeting}</h2>
            <h1>nome usuário</h1>
          </div>
  )
}
