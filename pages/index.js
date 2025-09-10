export default function Home() {
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
      }}
    >
      <h1
        style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          animation: 'pulse 2s infinite',
        }}
      >
        BoukiCoin: Rise Again with $BOUKI
      </h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
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
        }}
        onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
      >
        Buy $BOUKI
      </a>

      {/* Rotating BoukiCoin */}
      <div
        style={{
          marginTop: '2rem',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: 'url(/boukicoin.png) no-repeat center/contain',
          animation: 'spin 5s linear infinite',
        }}
      ></div>

      {/* Hero image */}
      <div
        style={{
          marginTop: '3rem',
          width: '400px',
          height: '200px',
          background: 'url(/Bouki never dies.png) no-repeat center/cover',
          borderRadius: '20px',
        }}
      ></div>

      {/* X feed placeholder */}
      <div style={{ marginTop: '2rem', width: '500px', maxWidth: '90%' }}>
        <a
          className="twitter-timeline"
          href="https://x.com/BoukiWolof"
          data-width="500"
          data-height="400"
        >
          Tweets by BoukiWolof
        </a>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>

      <script async src="https://platform.twitter.com/widgets.js"></script>
    </div>
  );
}
