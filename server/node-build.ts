import { createServer } from "./index";

const PORT = process.env.PORT || 3000;
const app = createServer();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
