import { useAuth } from "../contexts/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  const stats = [
    { label: "Total Products", value: 12 },
    { label: "Total Inventory Value", value: "₹ 25,000" },
    { label: "Store Keepers", value: 3 },
    { label: "Recent Activity", value: "5 updates today" },
  ];

  return (
    <div className="card" style={{ margin: "2rem auto", maxWidth: 600 }}>
      <h2>Manager Dashboard</h2>
      <p style={{ color: "var(--primary)", fontWeight: 500 }}>
        Welcome, {user?.email}
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1.5rem",
          margin: "2rem 0",
        }}
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            style={{
              flex: "1 1 200px",
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "10px",
              padding: "1.2rem",
              textAlign: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            }}
          >
            <div style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 8 }}>
              {stat.value}
            </div>
            <div style={{ fontSize: "1rem", color: "var(--primary)" }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
      <p style={{ color: "#888" }}>(Only managers can view this dashboard)</p>
    </div>
  );
}
