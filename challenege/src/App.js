import React, { useEffect, useState } from "react";
import Form from "./Form";
// import List from "./List";
import Table from "./Table";
function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/';

  const [reqType, setReqType] = useState('users');
  const [items, setItems] = useState([])

  useEffect(() => {
    const userData = async () => {
      try {
        const reqUrl = `${API_URL}/${reqType}`
        const response = await fetch(reqUrl);
        const result = await response.json();
        setItems(result)
        console.log(result);
      } catch (error) {
        console.log(error);

      }
    }
    userData();
  }, [reqType])

  return (
    <div className="App">
      <Form 
      reqType={reqType}
      setReqType={setReqType}
      />
      {/* <List 
      items={items}
      /> */}
      <Table 
      items={items}
      />
    </div>
  );
}

export default App;
