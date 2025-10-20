import serverlessHttp from "serverless-http";
import { createServer } from "./index.mjs";

const app = createServer();
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Export for serverless functions
export default serverlessHttp(app);
