import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

// Servar statiska filer från mappen "public"
app.use(express.static("public"));

// Startar servern
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
