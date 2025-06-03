export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    if (email && password) {
      const role = email.includes("manager") ? "Manager" : "Store Keeper";
      return res.json({
        user: { email, role },
        token: "demo-token",
      });
    }
    res.status(401).json({ message: "Invalid credentials" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
