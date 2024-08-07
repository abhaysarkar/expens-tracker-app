// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [goods, setGoods] = useState([]);
//   const [name, setName] = useState('');
//   const [cost, setCost] = useState('');
//   const [userName, setUserName] = useState('');
//   const [totalCost, setTotalCost] = useState(0);
//   const [userCost, setUserCost] = useState({});

//   useEffect(() => {
//     const storedGoods = JSON.parse(localStorage.getItem('goods')) || [];
//     setGoods(storedGoods);
//     calculateCosts(storedGoods);
//   }, []);

//   const handleAddGood = () => {
//     const newGood = { name, cost: parseFloat(cost), userName };
//     const updatedGoods = [...goods, newGood];
//     setGoods(updatedGoods);
//     localStorage.setItem('goods', JSON.stringify(updatedGoods));
//     calculateCosts(updatedGoods);
//     setName('');
//     setCost('');
//     setUserName('');
//   };

//   const calculateCosts = (goods) => {
//     let total = 0;
//     let userCosts = {};
//     goods.forEach((good) => {
//       total += good.cost;
//       if (userCosts[good.userName]) {
//         userCosts[good.userName] += good.cost;
//       } else {
//         userCosts[good.userName] = good.cost;
//       }
//     });
//     setTotalCost(total);
//     setUserCost(userCosts);
//   };

//   return (
//     <div className="App">
//       <h1>Goods Tracker</h1>
//       <div>
//         <input
//           type="text"
//           placeholder="Good's Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Cost"
//           value={cost}
//           onChange={(e) => setCost(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="User Name"
//           value={userName}
//           onChange={(e) => setUserName(e.target.value)}
//         />
//         <button onClick={handleAddGood}>Add Good</button>
//       </div>
//       <h2>Total Cost: ${totalCost}</h2>
//       <h3>Cost per User:</h3>
//       <ul>
//         {Object.keys(userCost).map((user) => (
//           <li key={user}>
//             {user}: ${userCost[user]}
//           </li>
//         ))}
//       </ul>
//       <h3>Goods List:</h3>
//       <ul>
//         {goods.map((good, index) => (
//           <li key={index}>
//             {good.name} - ${good.cost} by {good.userName}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [goods, setGoods] = useState([]);
//   const [name, setName] = useState('');
//   const [cost, setCost] = useState('');
//   const [userName, setUserName] = useState('');
//   const [totalCost, setTotalCost] = useState(0);
//   const [userCost, setUserCost] = useState({});

//   useEffect(() => {
//     const storedGoods = JSON.parse(localStorage.getItem('goods')) || [];
//     setGoods(storedGoods);
//     calculateCosts(storedGoods);
//   }, []);

//   const handleAddGood = () => {
//     const newGood = { name, cost: parseFloat(cost), userName };
//     const updatedGoods = [...goods, newGood];
//     setGoods(updatedGoods);
//     localStorage.setItem('goods', JSON.stringify(updatedGoods));
//     calculateCosts(updatedGoods);
//     setName('');
//     setCost('');
//     setUserName('');
//   };

//   const calculateCosts = (goods) => {
//     let total = 0;
//     let userCosts = {};
//     goods.forEach((good) => {
//       total += good.cost;
//       if (userCosts[good.userName]) {
//         userCosts[good.userName] += good.cost;
//       } else {
//         userCosts[good.userName] = good.cost;
//       }
//     });
//     setTotalCost(total);
//     setUserCost(userCosts);
//   };

//   return (
//     <div className="App">
//       <h1>Goods Tracker</h1>
//       <div>
//         <input
//           type="text"
//           placeholder="Good's Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Cost"
//           value={cost}
//           onChange={(e) => setCost(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="User Name"
//           value={userName}
//           onChange={(e) => setUserName(e.target.value)}
//         />
//         <button onClick={handleAddGood}>Add Good</button>
//       </div>

//       <h3>Goods List:</h3>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Cost</th>
//             <th>User Name</th>
//           </tr>
//         </thead>
//         <tbody>
//           {goods.map((good, index) => (
//             <tr key={index}>
//               <td>{good.name}</td>
//               <td>${good.cost}</td>
//               <td>{good.userName}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <h2>Total Cost: ${totalCost}</h2>
//       <h3>Cost per User:</h3>
//       <ul>
//         {Object.keys(userCost).map((user) => (
//           <li key={user}>
//             {user}: ${userCost[user]}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from 'react';

// import './App.css';

// function App() {
//   const [goods, setGoods] = useState([]);
//   const [name, setName] = useState('');
//   const [cost, setCost] = useState('');
//   const [userName, setUserName] = useState('');
//   const [totalCost, setTotalCost] = useState(0);
//   const [userCost, setUserCost] = useState({});

//   useEffect(() => {
//     const storedGoods = JSON.parse(localStorage.getItem('goods')) || [];
//     setGoods(storedGoods);
//     calculateCosts(storedGoods);
//   }, []);

//   const handleAddGood = () => {
//     const newGood = { name, cost: parseFloat(cost), userName };
//     const updatedGoods = [...goods, newGood];
//     setGoods(updatedGoods);
//     localStorage.setItem('goods', JSON.stringify(updatedGoods));
//     calculateCosts(updatedGoods);
//     setName('');
//     setCost('');
//     setUserName('');
//   };

//   const calculateCosts = (goods) => {
//     let total = 0;
//     let userCosts = {};
//     goods.forEach((good) => {
//       total += good.cost;
//       if (userCosts[good.userName]) {
//         userCosts[good.userName] += good.cost;
//       } else {
//         userCosts[good.userName] = good.cost;
//       }
//     });
//     setTotalCost(total);
//     setUserCost(userCosts);
//   };

//   return (
//     <div className="container mt-4">
//       <h1 className="mb-4">Goods Tracker</h1>
//       <div className="mb-4">
//         <div className="form-group">
//           <input
//             type="text"
//             className="form-control mb-2"
//             placeholder="Good's Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <input
//             type="number"
//             className="form-control mb-2"
//             placeholder="Cost"
//             value={cost}
//             onChange={(e) => setCost(e.target.value)}
//           />
//           <input
//             type="text"
//             className="form-control mb-2"
//             placeholder="User Name"
//             value={userName}
//             onChange={(e) => setUserName(e.target.value)}
//           />
//           <button
//             className="btn btn-primary"
//             onClick={handleAddGood}
//           >
//             Add Good
//           </button>
//         </div>
//       </div>
//       <div className="mb-4">
//         <h2>Total Cost: ${totalCost.toFixed(2)}</h2>
//         <h3>Cost per User:</h3>
//         <ul className="list-group">
//           {Object.keys(userCost).map((user) => (
//             <li key={user} className="list-group-item">
//               {user}: ${userCost[user].toFixed(2)}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <h3 className="mb-3">Goods List:</h3>
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Cost</th>
//             <th>User Name</th>
//           </tr>
//         </thead>
//         <tbody>
//           {goods.map((good, index) => (
//             <tr key={index}>
//               <td>{good.name}</td>
//               <td>${good.cost.toFixed(2)}</td>
//               <td>{good.userName}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;


// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [goods, setGoods] = useState([]);
//   const [name, setName] = useState('');
//   const [cost, setCost] = useState('');
//   const [userName, setUserName] = useState('');
//   const [totalCost, setTotalCost] = useState(0);
//   const [userCost, setUserCost] = useState({});

//   useEffect(() => {
//     const storedGoods = JSON.parse(localStorage.getItem('goods')) || [];
//     setGoods(storedGoods);
//     calculateCosts(storedGoods);
//   }, []);

//   const handleAddGood = () => {
//     const newGood = { name, cost: parseFloat(cost), userName };
//     const updatedGoods = [...goods, newGood];
//     setGoods(updatedGoods);
//     localStorage.setItem('goods', JSON.stringify(updatedGoods));
//     calculateCosts(updatedGoods);
//     setName('');
//     setCost('');
//     setUserName('');
//   };

//   const calculateCosts = (goods) => {
//     let total = 0;
//     let userCosts = {};
//     goods.forEach((good) => {
//       total += good.cost;
//       if (userCosts[good.userName]) {
//         userCosts[good.userName] += good.cost;
//       } else {
//         userCosts[good.userName] = good.cost;
//       }
//     });
//     setTotalCost(total);
//     setUserCost(userCosts);
//   };

//   return (
//     <div className="container">
//       <div className="content">
//         <h1 className="mb-4">Goods Tracker</h1>
//         <div className="mb-4">
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control mb-2"
//               placeholder="Good's Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//             <input
//               type="number"
//               className="form-control mb-2"
//               placeholder="Cost"
//               value={cost}
//               onChange={(e) => setCost(e.target.value)}
//             />
//             <input
//               type="text"
//               className="form-control mb-2"
//               placeholder="User Name"
//               value={userName}
//               onChange={(e) => setUserName(e.target.value)}
//             />
//             <button
//               className="btn btn-primary"
//               onClick={handleAddGood}
//             >
//               Add Good
//             </button>
//           </div>
//         </div>
//         <div className="mb-4">
//           <h2>Total Cost: ${totalCost.toFixed(2)}</h2>
//           <h3>Cost per User:</h3>
//           <ul className="list-group">
//             {Object.keys(userCost).map((user) => (
//               <li key={user} className="list-group-item">
//                 {user}: ${userCost[user].toFixed(2)}
//               </li>
//             ))}
//           </ul>
//         </div>
//         <h3 className="mb-3">Goods List:</h3>
//         <table className="table table-striped">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Cost</th>
//               <th>User Name</th>
//             </tr>
//           </thead>
//           <tbody>
//             {goods.map((good, index) => (
//               <tr key={index}>
//                 <td>{good.name}</td>
//                 <td>${good.cost.toFixed(2)}</td>
//                 <td>{good.userName}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default App;








//////////////////////////////////////////////////////////////////////////////////////////////////////////////


// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [goods, setGoods] = useState([]);
//   const [name, setName] = useState('');
//   const [cost, setCost] = useState('');
//   const [userName, setUserName] = useState('');
//   const [date, setDate] = useState('');
//   const [totalCost, setTotalCost] = useState(0);
//   const [userCost, setUserCost] = useState({});

//   useEffect(() => {
//     const storedGoods = JSON.parse(localStorage.getItem('goods')) || [];
//     setGoods(storedGoods);
//     calculateCosts(storedGoods);
//   }, []);

//   const handleAddGood = () => {
//     const newGood = { name, cost: parseFloat(cost), userName, date };
//     const updatedGoods = [...goods, newGood];
//     setGoods(updatedGoods);
//     localStorage.setItem('goods', JSON.stringify(updatedGoods));
//     calculateCosts(updatedGoods);
//     setName('');
//     setCost('');
//     setUserName('');
//     setDate('');
//   };

//   const calculateCosts = (goods) => {
//     let total = 0;
//     let userCosts = {};
//     goods.forEach((good) => {
//       total += good.cost;
//       if (userCosts[good.userName]) {
//         userCosts[good.userName] += good.cost;
//       } else {
//         userCosts[good.userName] = good.cost;
//       }
//     });
//     setTotalCost(total);
//     setUserCost(userCosts);
//   };

//   return (
//     <div className="container">
//       <div className="content">
//         <h1 className="mb-4">Goods Tracker</h1>
//         <div className="mb-4">
//           <form onSubmit={handleAddGood}>
//             <div className="form-group">
//               <input
//                 type="text"
//                 className="form-control mb-2"
//                 placeholder="Good's Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//               <input
//                 type="number"
//                 className="form-control mb-2"
//                 placeholder="Cost"
//                 value={cost}
//                 onChange={(e) => setCost(e.target.value)}
//                 required
//               />
//               <input
//                 type="text"
//                 className="form-control mb-2"
//                 placeholder="User Name"
//                 value={userName}
//                 onChange={(e) => setUserName(e.target.value)}
//                 required
//               />
//               <input
//                 type="date"
//                 className="form-control mb-2"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//                 required
//               />
//               <button
//                 className="btn btn-primary"

//               >
//                 Add Good
//               </button>
//             </div>
//           </form>
//         </div>
//         <div className="mb-4">
//           <h2>Total Cost: ${totalCost.toFixed(2)}</h2>
//           <h3>Cost per User:</h3>
//           <ul className="list-group">
//             {Object.keys(userCost).map((user) => (
//               <li key={user} className="list-group-item">
//                 {user}: ${userCost[user].toFixed(2)}
//               </li>
//             ))}
//           </ul>
//         </div>
//         <h3 className="mb-3">Goods List:</h3>
//         <table className="table table-striped">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Cost</th>
//               <th>User Name</th>
//               <th>Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {goods.map((good, index) => (
//               <tr key={index}>
//                 <td>{good.name}</td>
//                 <td>${good.cost.toFixed(2)}</td>
//                 <td>{good.userName}</td>
//                 <td>{good.date}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default App;



//////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, { useState, useEffect } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [goods, setGoods] = useState([]);
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [userName, setUserName] = useState('');
  const [date, setDate] = useState('');
  const [totalCost, setTotalCost] = useState(0);
  const [userCost, setUserCost] = useState({});

  useEffect(() => {
    const storedGoods = JSON.parse(localStorage.getItem('goods')) || [];
    setGoods(storedGoods);
    calculateCosts(storedGoods);
  }, []);

  function capitalizeFirstLetter(string) {
    if (!string) return ''; // Handle empty string case
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  const handleAddGood = () => {
    setUserName(capitalizeFirstLetter(userName))
    
    const newGood = { id: uuidv4(), name, cost: parseFloat(cost), userName, date };
    const updatedGoods = [...goods, newGood];
    setGoods(updatedGoods);
    localStorage.setItem('goods', JSON.stringify(updatedGoods));
    calculateCosts(updatedGoods);
    setName('');
    setCost('');
    setUserName('');
    setDate('');
  };

  const handleDeleteGood = (id) => {

    const confirmed = window.confirm("Do you want to delete this record");
    if (confirmed) {
      const updatedGoods = goods.filter(good => good.id !== id);
      setGoods(updatedGoods);
      localStorage.setItem('goods', JSON.stringify(updatedGoods));
      calculateCosts(updatedGoods);
    }

  };

  const calculateCosts = (goods) => {
    let total = 0;
    let userCosts = {};
    goods.forEach((good) => {
      total += good.cost;
      if (userCosts[good.userName]) {
        userCosts[good.userName] += good.cost;
      } else {
        userCosts[good.userName] = good.cost;
      }
    });
    setTotalCost(total);
    setUserCost(userCosts);
  };

  console.log(userName)

  return (
    <div className="container">
      <div className="content mt-3">
        <h3 className="mb-3">Expense Tracker</h3>
        <div className="mb-3">
          <form onSubmit={handleAddGood}>
            <div className="form-group">
              <input
                type="text"
                className="form-control mb-2"
                placeholder="product name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="number"
                className="form-control mb-2"
                placeholder="Cost"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
                required
              />
              <input
                type="text"
                className="form-control mb-2"
                placeholder="paid by"
                value={userName}
                onChange={(e) => setUserName(capitalizeFirstLetter(e.target.value).trim())}
                required
              />
              <input
                type="date"
                className="form-control mb-2"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="enter date"
                required
              />
              <button
                className="btn btn-primary"
              >
                Add Good
              </button>
            </div>
          </form>
        </div>

        <div>
          {/* <h3 className="mb-3">Goods List:</h3> */}
          <div className="table-container">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Cost</th>
                  <th>Paid By</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {goods.map((good) => (
                  <tr key={good.id}>
                    <td>{good.name}</td>
                    <td>Rs{good.cost.toFixed(2)}</td>
                    <td>{good.userName}</td>
                    <td>{good.date}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDeleteGood(good.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-3">
          <h6>Total Cost: ${totalCost.toFixed(2)}</h6>
          <h6>Cost per User:</h6>
          <ul className="list-group">
            {Object.keys(userCost).map((user) => (
              <li key={user} className="list-group-item">
                {user}: ${userCost[user].toFixed(2)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

