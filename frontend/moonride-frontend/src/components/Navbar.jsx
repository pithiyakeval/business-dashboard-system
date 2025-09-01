import "./Navbar.css";

export default function Navbar({ addUser, user }) {
  return (
    <div
      className="navbar"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        backgroundColor: "#1f2937",
        color: "#f5f5f5",
      }}
    >
      <h2
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: "600",
          color: "#FDE68A",
          fontSize: "20px",
        }}
      >
        {user ? `Welcome back, ${user.name} 🚀` : "Welcome to MoonRide Dashboard 🚀"}
      </h2>

      <div style={{ display: "flex", alignItems: "center" }}>
        {addUser && (
          <button
            onClick={addUser}
            style={{
              marginRight: "10px",
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "6px 12px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Add Profile
          </button>
        )}

        {/* Added user photo display */}
        {user?.photo && (
          <img
            src={`http://localhost:5000/uploads/${user.photo}`}
            alt="Profile"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              marginRight: "10px",
              objectFit: "cover",
            }}
          />
        )}

        <button
          style={{
            backgroundColor: "#FF3B30",
            color: "white",
            padding: "6px 12px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
  