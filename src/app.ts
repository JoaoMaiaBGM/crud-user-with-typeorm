import express from "express";
import loginRouter from "./routes/session.routes";
import userRoutes from "./routes/user.routes";

const app = express();

const PORT = 3000;

app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", loginRouter);

app.listen(PORT, () => {
  console.log(`Server is running in port ${PORT}`);
});

export default app;
