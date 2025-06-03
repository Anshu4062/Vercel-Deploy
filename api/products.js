let products = [];

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(products);
  } else if (req.method === "POST") {
    const { name, description, price } = req.body;
    const newProduct = { id: Date.now(), name, description, price };
    products.push(newProduct);
    res.status(201).json(newProduct);
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
