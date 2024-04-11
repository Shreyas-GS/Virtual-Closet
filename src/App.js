import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Closet from "./components/Closet";
import UploadForm from "./components/Uploader/UploadForm";

const App = () => {
  const [items, setItems] = useState([]);

  const handleUpload = (formData) => {
    // Implement logic to upload item to server and update state
    console.log(formData);
  };

  return (
    <div className="App">
      <Navbar />
      <UploadForm onUpload={handleUpload} />
      <Closet items={items} />
    </div>
  );
};

export default App;
