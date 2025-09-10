import { useEffect, useState } from 'react';

export default function Home() {
  const [coins, setCoins] = useState([]);

  // Create floating coins
  useEffect(() => {
    const coinCount = 8;
    const tempCoins = [];
    for (let i = 0; i < coinCount; i++) {
      tempCoins.push({
        id: i,
        style: {
          position: 'absolute',
          top: Math.random() * 80 + 'vh',
          left: Math.random() * 90 + 'vw',
          fontSize: Math.random() * 3 + 2 + 'rem',
          animation: `float ${Math.random() * 5 + 5}s ease-in-out infinite`,
        },
      });
    }
    setCoins(tempCoins);
  }, []);

  return (
    <div
      style={{
        textAlign: 'center',
        padding: '4rem',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #6A0DAD, #FFD700)',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Floating coins */}
      {coins.map((coin) => (
        <div key={coin.id} style={coin.style}>
          🪙
        </div>
      ))}

      {/* Hero */}
      <h1 style={{
        fontSize: '3rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        animation: 'pulse 2s infinite',
      }}>
        BoukiCoin: Rise Again with $BOUKI
      </h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '2rem', animation: 'fadeIn 3s ease-in' }}>
        Website coming soon…
      </p>
      <a
        href="https://pump.fun/coin/C26rhxCo2ZNJn8RDzLEsucBozE1X53eLV4ygeasdpump"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          padding: '1rem 2rem',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#6A0DAD',
          backgroundColor: 'white',
          borderRadius: '12px',
          textDecoration: 'none',
          transition: 'transform 0.3s',
          zIndex: 10
        }}
        onMouseEnter={e => e.target.style.transform = 'scale(1.1)'}
        onMouseLeave={e => e.target.style.transform = 'scale(1)'}
      >
        Buy $BOUKI
      </a>

      {/* Hero image placeholder */}
      <div
        style={{
          marginTop: '3rem',
          width: '400px',
          height: '200px',
          backgroundColor: 'rgba(255,255,255,0.2)',
          borderRadius: '20px',
          position: 'relative',
          zIndex: 5,
        }}
      >
        <p style={{ paddingTop: '80px', color: 'white' }}>Hero image here</p>
      </div>

      {/* Pump.fun live stats placeholder */}
      <div
        style={{
          marginTop: '2rem',
          padding: '1rem',
          backgroundColor: 'rgba(255,255,255,0.15)',
          borderRadius: '12px',
          width: '80%',
          maxWidth: '600px',
        }}
      >
        <p>Price: -- SOL</p>
        <p>Market Cap: -- SOL</p>
        <p>Holders: --</p>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(15deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

